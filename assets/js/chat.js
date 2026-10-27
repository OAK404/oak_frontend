// Community chat for the OCS forum page. Uses the shared message log
// (message-log.js) and polls the backend for new, edited and deleted messages.
import { createMessageLog } from './message-log.js';

const API = window.FORUM_API;
const POLL_MS = 5000;
const $ = id => document.getElementById(id);

async function api(path, opts = {}) {
  const res = await fetch(API.base + path, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    ...opts,
  });
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return res.status === 204 ? null : res.json();
}

// Plain text with clickable http(s) links. Built with DOM nodes, never innerHTML.
const richText = {
  renderRichMessage(el, text) {
    el.replaceChildren();
    const parts = String(text ?? '').split(/(https?:\/\/[^\s<]+)/g);
    parts.forEach((part, i) => {
      if (i % 2 === 1) {
        const a = document.createElement('a');
        a.href = part;
        a.textContent = part;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        el.appendChild(a);
      } else if (part) {
        el.appendChild(document.createTextNode(part));
      }
    });
  },
  renderDeletedMessage(el) {
    el.replaceChildren();
    el.classList.add('is-deleted');
    el.textContent = 'This message was deleted.';
  },
};

function normalize(m) {
  return {
    key: String(m.id ?? m.key),
    id: m.id,
    body: m.body ?? '',
    senderId: m.senderId ?? m.userId ?? null,
    senderName: m.senderName ?? m.author ?? 'Anonymous',
    senderPfp: m.senderPfp ?? m.pfp ?? '',
    sentAt: m.sentAt ?? m.createdAt ?? null,
    edited: Boolean(m.edited),
    deleted: Boolean(m.deleted),
    image: m.image ?? '',
  };
}

async function start() {
  const logEl = $('fr-chat-log');
  if (!logEl) return;

  let user = null;
  try { user = await api(API.me); } catch { /* not signed in */ }
  const me = {
    id: user?.id ?? null,
    name: user ? (user.name || user.username) : '',
    pfp: user?.pfp || user?.avatar || '',
  };

  const form = $('fr-chat-form');
  const input = $('fr-chat-input');
  const send = $('fr-chat-send');
  const editBar = $('fr-chat-editing');
  const status = $('fr-chat-status');
  let editing = null;

  const isSelf = m => (m.senderId != null && me.id != null)
    ? String(m.senderId) === String(me.id)
    : Boolean(me.name) && m.senderName === me.name;

  const log = createMessageLog(logEl, { richText, me, onEdit: beginEdit, onDelete: removeMessage });

  function setStatus(msg) { status.textContent = msg || ''; }

  if (!user) {
    input.disabled = true;
    send.disabled = true;
    input.placeholder = 'Sign in to join the chat';
  }

  function beginEdit(message) {
    editing = message;
    input.value = message.body;
    editBar.hidden = false;
    input.focus();
  }
  function endEdit() {
    editing = null;
    input.value = '';
    editBar.hidden = true;
  }
  $('fr-chat-cancel-edit').onclick = endEdit;

  async function removeMessage(message, button) {
    if (!window.confirm('Delete this message?')) return;
    button.disabled = true;
    try {
      await api(API.chatMessage(message.id), { method: 'DELETE' });
      log.markDeleted(message.key);
    } catch {
      setStatus('Could not delete the message. Try again.');
      button.disabled = false;
    }
  }

  async function sync(first = false) {
    try {
      const list = (await api(API.chatMessages)).map(normalize)
        .sort((a, b) => new Date(a.sentAt) - new Date(b.sentAt));
      setStatus('');
      if (first && !list.length) {
        log.showEmpty('No messages yet', 'Say hello to the community.');
        return;
      }
      list.forEach(m => {
        const existing = log.get(m.key);
        if (!existing) log.append(m, isSelf(m));
        else if (m.deleted && !existing.deleted) log.markDeleted(m.key);
        else if (!m.deleted && m.body !== existing.body) log.updateBody(m.key, m.body);
      });
    } catch {
      setStatus('Could not load chat messages. Retrying…');
    }
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text || !user) return;
    send.disabled = true;
    try {
      if (editing) {
        await api(API.chatMessage(editing.id), { method: 'PATCH', body: JSON.stringify({ body: text }) });
        log.updateBody(editing.key, text);
        endEdit();
      } else {
        const saved = await api(API.chatMessages, { method: 'POST', body: JSON.stringify({ body: text }) });
        input.value = '';
        if (saved && saved.id != null) log.append(normalize(saved), true);
        else await sync();
      }
      setStatus('');
    } catch {
      setStatus('Message failed to send. Try again.');
    } finally {
      send.disabled = false;
      input.focus();
    }
  });

  // Enter sends, Shift+Enter adds a new line.
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); }
  });

  // Keep the view pinned to the newest message when the tab opens.
  $('fr-tab-chat').addEventListener('click', () => {
    sync();
    requestAnimationFrame(() => { logEl.scrollTop = logEl.scrollHeight; });
  });

  await sync(true);
  setInterval(() => {
    if (!document.hidden && !$('fr-chat-panel').hidden) sync();
  }, POLL_MS);
}

start();