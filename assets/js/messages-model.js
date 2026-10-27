// Small helpers the message log imports. If your repo already has a
// messages-model.js from the course chats, use that one instead.

export function dayKey(date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

export function dayLabel(date) {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  if (dayKey(date) === dayKey(today)) return 'Today';
  if (dayKey(date) === dayKey(yesterday)) return 'Yesterday';
  return date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

export function initialsFor(name) {
  const words = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (!words.length) return '?';
  return words.slice(0, 2).map(w => w[0].toUpperCase()).join('');
}

// Only http(s) and site-relative paths are allowed as image sources.
export function pfpSrc(value) {
  if (!value || typeof value !== 'string') return '';
  if (/^(https?:)?\/\//i.test(value) || value.startsWith('/')) return value;
  if (!value.includes(':')) return value;
  return '';
}

// A stable color class per sender (tint-1 … tint-5, styled in the Sass).
export function tintFor(name) {
  let hash = 0;
  for (const ch of String(name || '')) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return `tint-${(hash % 5) + 1}`;
}