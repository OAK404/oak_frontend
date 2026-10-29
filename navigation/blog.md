---
layout: default
title: Community Forum
permalink: /blog/
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/community-forum.css" />

<div id="fr">
  <div class="fr-header">
    <h1>Community Forum</h1>
    <div>
      <span class="fr-status" id="fr-status">Checking login…</span>
      <button class="fr-btn fr-btn--primary" id="fr-new-post" disabled>New post</button>
    </div>
  </div>

  <div id="fr-alert" role="status" aria-live="polite"></div>

  <div class="fr-layout">
    <nav class="fr-card" aria-label="Categories">
      <h3>Categories</h3>
      <ul class="fr-nav" id="fr-categories"></ul>
    </nav>

    <main>
      <div class="fr-tabs" role="tablist">
        <button class="fr-tab active" id="fr-tab-posts" role="tab" aria-selected="true" aria-controls="fr-posts-panel" type="button">Posts</button>
        <button class="fr-tab" id="fr-tab-chat" role="tab" aria-selected="false" aria-controls="fr-chat-panel" type="button">Community chat</button>
      </div>

      <section id="fr-posts-panel" role="tabpanel" aria-labelledby="fr-tab-posts">
        <form class="fr-search" id="fr-search-form" role="search">
          <input type="search" id="fr-search" placeholder="Search posts" aria-label="Search posts" />
          <button class="fr-btn" type="submit">Search</button>
        </form>
        <div class="fr-feed" id="fr-feed" aria-live="polite"></div>
      </section>

      <section id="fr-chat-panel" class="announcement-chat" role="tabpanel" aria-labelledby="fr-tab-chat" hidden>
        <div class="chat-header">
          <div class="chat-heading">
            <span class="chat-badge" aria-hidden="true"><i class="fas fa-comments"></i></span>
            <div>
              <h2 class="chat-title">Community chat</h2>
              <p class="chat-subtitle">Talk with other members of the OCS community.</p>
            </div>
          </div>
        </div>
        <div class="chat-body">
          <div class="chat-messages" id="fr-chat-log" role="log" aria-live="polite" aria-label="Community chat messages"></div>
          <div class="chat-editing" id="fr-chat-editing" hidden>
            <span>Editing your message</span>
            <button class="dm-cancel-edit" id="fr-chat-cancel-edit" type="button">Cancel</button>
          </div>
          <form class="chat-form" id="fr-chat-form">
            <textarea class="chat-input" id="fr-chat-input" rows="1" maxlength="1000" placeholder="Write a message" aria-label="Message"></textarea>
            <button class="chat-send" id="fr-chat-send" type="submit"><i class="fas fa-paper-plane" aria-hidden="true"></i> <span>Send</span></button>
          </form>
          <p class="dm-form-status" id="fr-chat-status" role="status"></p>
        </div>
      </section>
    </main>

    <aside class="fr-side fr-card">
  <h3>Community Rules</h3>
  <p>Ask questions, share what you are working on, and help others in the OCS community.</p>

  <ol class="fr-rules">
    <li>
      <strong>Be Supportive</strong>
      <span>Lead with empathy — everyone here is going through something difficult.</span>
    </li>
    <li>
      <strong>No Hate Speech</strong>
      <span>Zero tolerance for discrimination of any kind.</span>
    </li>
    <li>
      <strong>No Profanity</strong>
      <span>Keep language clean and respectful.</span>
    </li>
    <li>
      <strong>No Medical Claims</strong>
      <span>Share personal experiences, not prescriptions. Always recommend a doctor.</span>
    </li>
    <li>
      <strong>Protect Privacy</strong>
      <span>Do not share others' personal health information.</span>
    </li>
    <li>
      <strong>No Spam</strong>
      <span>No commercial promotions or fundraising links.</span>
    </li>
    <li>
      <strong>Admin Decisions Are Final</strong>
      <span>Moderators may remove posts to keep this space safe.</span>
    </li>
  </ol>
</aside>
  </div>
</div>

<!-- Post modal (outside #fr) -->
<div id="fr-modal" role="dialog" aria-modal="true" aria-labelledby="fr-modal-title">
  <div class="fr-modal-box">
    <button class="close-btn" id="fr-modal-close" type="button" aria-label="Close">&times;</button>
    <h2 id="fr-modal-title">New post</h2>
    <label for="fr-post-title">Title</label>
    <input type="text" id="fr-post-title" maxlength="140" />
    <label for="fr-post-category">Category</label>
    <select id="fr-post-category"></select>
    <label for="fr-post-body">Message</label>
    <textarea id="fr-post-body"></textarea>
    <div class="fr-modal-actions">
      <button class="fr-btn" id="fr-modal-cancel" type="button">Cancel</button>
      <button class="fr-btn fr-btn--primary" id="fr-modal-submit" type="button">Publish</button>
    </div>
  </div>
</div>

<script>
/* ------------------------------------------------------------------
   CONFIG: replace with your real backend URL and endpoint paths.
   These are placeholders because the original forum code was not in
   the pasted conversation.
------------------------------------------------------------------ */
const API = {
  base: "https://YOUR-BACKEND-URL/api",
  categories: "/forum/categories",
  posts: "/forum/posts",
  replies: id => `/forum/posts/${id}/replies`,
  me: "/auth/me",
  chatMessages: "/chat/messages",
  chatMessage: id => `/chat/messages/${id}`
};
window.FORUM_API = API;   // shared with the chat module

(function () {
  const $ = id => document.getElementById(id);
  const state = { category: "all", query: "", user: null, categories: [] };

  async function api(path, opts = {}) {
    const res = await fetch(API.base + path, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      ...opts
    });
    if (!res.ok) throw new Error(`Request failed (${res.status})`);
    return res.json();
  }

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;   // textContent prevents XSS
    return n;
  }

  function alertMsg(msg, type = "info") {
    const box = $("fr-alert");
    box.replaceChildren();
    if (msg) box.append(el("div", `fr-alert ${type}`, msg));
  }

  // ---- Login status ----
  async function loadUser() {
    try {
      state.user = await api(API.me);
      $("fr-status").textContent = `Signed in as ${state.user.name || state.user.username}`;
      $("fr-new-post").disabled = false;
    } catch {
      state.user = null;
      $("fr-status").textContent = "Not signed in";
    }
  }

  // ---- Categories ----
  async function loadCategories() {
    try { state.categories = await api(API.categories); } catch { state.categories = []; }
    const list = $("fr-categories");
    list.replaceChildren();
    [{ id: "all", name: "All posts" }, ...state.categories].forEach(c => {
      const li = el("li");
      const b = el("button", c.id === state.category ? "active" : "", c.name);
      b.type = "button";
      b.onclick = () => { state.category = c.id; loadCategories(); loadPosts(); };
      li.append(b);
      list.append(li);
    });
    const sel = $("fr-post-category");
    sel.replaceChildren();
    state.categories.forEach(c => sel.append(new Option(c.name, c.id)));
  }

  // ---- Posts ----
  async function loadPosts() {
    const feed = $("fr-feed");
    feed.replaceChildren(el("div", "fr-empty", "Loading posts…"));
    const params = new URLSearchParams();
    if (state.category !== "all") params.set("category", state.category);
    if (state.query) params.set("q", state.query);
    try {
      const posts = await api(`${API.posts}?${params}`);
      feed.replaceChildren();
      if (!posts.length) return feed.append(el("div", "fr-empty", "No posts yet. Start the conversation."));
      posts.forEach(p => feed.append(renderPost(p)));
    } catch (e) {
      feed.replaceChildren();
      alertMsg("Could not load posts. Check your connection and try again.", "error");
    }
  }

  function renderPost(p) {
    const card = el("article", "fr-post fr-card");
    card.append(el("h2", "", p.title));
    const meta = el("div", "fr-meta");
    meta.append(el("span", "fr-tag", p.category || "General"),
                document.createTextNode(` ${p.author || "Anonymous"} · ${new Date(p.createdAt).toLocaleDateString()}`));
    card.append(meta, el("div", "fr-body", p.body));

    const actions = el("div", "fr-actions");
    const toggle = el("button", "fr-btn small", "Replies");
    toggle.type = "button";
    actions.append(toggle);
    card.append(actions);

    const wrap = el("div", "fr-replies");
    wrap.hidden = true;
    card.append(wrap);
    toggle.onclick = async () => {
      wrap.hidden = !wrap.hidden;
      if (!wrap.hidden) await loadReplies(p.id, wrap);
    };
    return card;
  }

  // ---- Replies ----
  async function loadReplies(postId, wrap) {
    wrap.replaceChildren();
    try {
      const replies = await api(API.replies(postId));
      replies.forEach(r => {
        const d = el("div", "fr-reply");
        d.append(el("strong", "", r.author || "Anonymous"), document.createTextNode(`: ${r.body}`));
        wrap.append(d);
      });
    } catch { wrap.append(el("div", "fr-empty", "Could not load replies.")); }

    if (!state.user) return wrap.append(el("div", "fr-meta", "Sign in to reply."));
    const form = el("div", "fr-reply-form");
    const ta = el("textarea"); ta.placeholder = "Write a reply"; ta.setAttribute("aria-label", "Reply");
    const send = el("button", "fr-btn fr-btn--primary small", "Reply"); send.type = "button";
    send.onclick = async () => {
      if (!ta.value.trim()) return;
      send.disabled = true;
      try {
        await api(API.replies(postId), { method: "POST", body: JSON.stringify({ body: ta.value.trim() }) });
        await loadReplies(postId, wrap);
      } catch { alertMsg("Reply failed. Try again.", "error"); send.disabled = false; }
    };
    form.append(ta, send);
    wrap.append(form);
  }

  // ---- Search ----
  $("fr-search-form").addEventListener("submit", e => {
    e.preventDefault();
    state.query = $("fr-search").value.trim();
    loadPosts();
  });

  // ---- Post modal ----
  const modal = $("fr-modal");
  const openModal  = () => { modal.classList.add("open"); $("fr-post-title").focus(); };
  const closeModal = () => modal.classList.remove("open");
  $("fr-new-post").onclick = openModal;
  $("fr-modal-cancel").onclick = closeModal;
  $("fr-modal-close").onclick = closeModal;
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  $("fr-modal-submit").onclick = async () => {
    const title = $("fr-post-title").value.trim();
    const body = $("fr-post-body").value.trim();
    if (!title || !body) return alertMsg("Add a title and a message before publishing.", "error");
    try {
      await api(API.posts, {
        method: "POST",
        body: JSON.stringify({ title, body, category: $("fr-post-category").value })
      });
      closeModal();
      $("fr-post-title").value = ""; $("fr-post-body").value = "";
      alertMsg("Post published.", "success");
      loadPosts();
    } catch { alertMsg("Could not publish your post. Try again.", "error"); }
  };

  // ---- Tabs (Posts / Community chat) ----
  function showTab(name) {
    const chat = name === "chat";
    $("fr-posts-panel").hidden = chat;
    $("fr-chat-panel").hidden = !chat;
    $("fr-tab-posts").classList.toggle("active", !chat);
    $("fr-tab-chat").classList.toggle("active", chat);
    $("fr-tab-posts").setAttribute("aria-selected", String(!chat));
    $("fr-tab-chat").setAttribute("aria-selected", String(chat));
  }
  $("fr-tab-posts").onclick = () => showTab("posts");
  $("fr-tab-chat").onclick  = () => showTab("chat");

  // ---- Init ----
  (async () => { await loadUser(); await loadCategories(); await loadPosts(); })();
})();
</script>

<!-- Community chat. Needs Font Awesome (already used elsewhere on OCS). -->
<script type="module" src="{{ site.baseurl }}/assets/js/community-chat/chat.js"></script>