---
layout: opencs
permalink: /blog/
title: Community Forum
---

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Nunito:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

#fr {
  --cream:      #fdf6ee;
  --warm-white: #fff9f3;
  --rose:       #e07a6a;
  --rose-light: #f2b5ab;
  --rose-pale:  #fce9e6;
  --terra:      #c45e4a;
  --sage:       #8aaa8c;
  --sage-pale:  #eaf1ea;
  --tan:        #c4a882;
  --tan-light:  #e8d9c4;
  --brown:      #6b4c3b;
  --text:       #3d2c24;
  --muted:      #937468;
  --border:     rgba(196,168,130,0.28);
  --serif:      'Cormorant Garamond', Georgia, serif;
  --sans:       'Nunito', system-ui, sans-serif;
  font-family: var(--sans);
  background: var(--cream);
  color: var(--text);
  min-height: 100vh;
}

/* TOP BAR */
#fr .f-topbar {
  background: linear-gradient(135deg, var(--brown) 0%, #3a2218 100%);
  padding: 0 32px;
  position: sticky; top: 0; z-index: 100;
  box-shadow: 0 2px 12px rgba(61,44,36,0.18);
}
#fr .f-topbar-inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; gap: 20px;
  height: 54px;
}
#fr .f-brand {
  font-family: var(--serif); font-size: 20px; font-weight: 700;
  color: #fff; white-space: nowrap; flex-shrink: 0;
  cursor: pointer; background: none; border: none; padding: 0;
}
#fr .f-brand em { font-style: italic; color: var(--rose-light); }
#fr .f-search-wrap { flex: 1; max-width: 480px; position: relative; }
#fr .f-search-input {
  width: 100%; padding: 8px 40px 8px 14px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 20px; font-family: var(--sans); font-size: 13px;
  color: #fff; outline: none; transition: background 0.2s, border-color 0.2s;
}
#fr .f-search-input::placeholder { color: rgba(255,255,255,0.45); }
#fr .f-search-input:focus { background: rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.45); }
#fr .f-search-icon {
  position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
  background: none; border: none; cursor: pointer;
  color: rgba(255,255,255,0.55); font-size: 16px; padding: 0; line-height: 1;
  transition: color 0.15s;
}
#fr .f-search-icon:hover { color: #fff; }
#fr .f-auth-area { margin-left: auto; flex-shrink: 0; font-size: 12px; color: rgba(255,255,255,0.55); white-space: nowrap; }
#fr .f-auth-area strong { color: var(--rose-light); }
#fr .f-auth-area a { color: var(--rose-light); font-weight: 700; text-decoration: none; }

/* 3-COL LAYOUT */
#fr .f-body {
  max-width: 1200px; margin: 0 auto; padding: 28px 24px 80px;
  display: grid; grid-template-columns: 220px 1fr 300px; gap: 24px; align-items: start;
}
@media (max-width: 1020px) {
  #fr .f-body { grid-template-columns: 180px 1fr; }
  #fr .f-right { display: none; }
}
@media (max-width: 680px) {
  #fr .f-body { grid-template-columns: 1fr; padding: 16px 14px 60px; }
  #fr .f-left  { display: none; }
  #fr .f-topbar { padding: 0 16px; }
}

/* LEFT NAV */
#fr .f-left { position: sticky; top: 66px; }
#fr .f-nav-card {
  background: var(--warm-white); border: 1px solid var(--border);
  border-radius: 12px; overflow: hidden;
}
#fr .f-nav-head {
  padding: 11px 16px 9px; font-size: 10px; font-weight: 700;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted);
  border-bottom: 1px solid var(--border);
}
#fr .f-nav-item {
  display: flex; align-items: center; gap: 10px; padding: 10px 16px;
  cursor: pointer; background: none; border: none; width: 100%;
  font-family: var(--sans); font-size: 13px; font-weight: 600;
  color: var(--text); text-align: left;
  border-bottom: 1px solid rgba(196,168,130,0.1);
  transition: background 0.15s, color 0.15s;
}
#fr .f-nav-item:last-child { border-bottom: none; }
#fr .f-nav-item:hover  { background: var(--cream); color: var(--rose); }
#fr .f-nav-item.active { background: var(--rose-pale); color: var(--terra); }
#fr .f-nav-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
#fr .f-nav-item.active .f-nav-dot { box-shadow: 0 0 0 2px var(--terra); }

/* Write a Post button — only visible when a real category is selected */
#fr .f-nav-post-btn {
  display: none; /* hidden by default */
  width: 100%; margin-top: 12px; padding: 10px;
  background: var(--rose); color: #fff;
  font-family: var(--sans); font-size: 12px; font-weight: 700;
  letter-spacing: 0.06em; text-transform: uppercase;
  border: none; border-radius: 8px; cursor: pointer;
  transition: background 0.2s; text-align: center;
}
#fr .f-nav-post-btn:hover { background: var(--terra); }
#fr .f-nav-post-btn.visible { display: block; }

/* CENTER */
#fr .f-center { min-width: 0; }
#fr .f-feed-header { margin-bottom: 16px; }
#fr .f-feed-title {
  font-family: var(--serif); font-size: 22px; font-weight: 700; color: var(--text);
}
#fr .f-feed-count { font-size: 12px; color: var(--muted); margin-top: 2px; }

#fr .f-search-banner {
  background: var(--sage-pale); border: 1px solid rgba(138,170,140,0.35);
  border-radius: 8px; padding: 10px 16px; margin-bottom: 14px;
  font-size: 13px; color: #3d6b3f;
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
}
#fr .f-clear-btn {
  background: none; border: none; font-family: var(--sans);
  font-size: 12px; font-weight: 700; color: var(--rose); cursor: pointer;
}

/* POST CARDS */
#fr .f-post-list { display: flex; flex-direction: column; gap: 8px; }
#fr .f-post-card {
  background: var(--warm-white); border: 1px solid var(--border);
  border-radius: 10px; padding: 16px 18px; cursor: pointer;
  transition: border-color 0.18s, box-shadow 0.18s;
}
#fr .f-post-card:hover { border-color: var(--rose-light); box-shadow: 0 3px 14px rgba(61,44,36,0.07); }
#fr .f-post-card-top {
  display: flex; align-items: center; gap: 8px; margin-bottom: 6px; flex-wrap: wrap;
}
#fr .f-cat-pill {
  padding: 2px 9px; border-radius: 10px; font-size: 10px;
  font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: #fff;
}
#fr .f-post-byline { font-size: 11px; color: var(--muted); }
#fr .f-post-byline strong { color: var(--text); font-weight: 700; }
#fr .f-post-title {
  font-family: var(--serif); font-size: 17px; font-weight: 700;
  color: var(--text); line-height: 1.3; margin-bottom: 8px;
}
#fr .f-post-foot { display: flex; align-items: center; gap: 14px; font-size: 11px; color: var(--muted); }
#fr .f-admin-badge {
  display: inline-block; padding: 2px 7px; border-radius: 6px;
  background: var(--tan-light); color: var(--brown);
  font-size: 10px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
}

/* LOADING / EMPTY / ALERT */
#fr .f-loading { text-align: center; padding: 48px 20px; color: var(--muted); font-size: 13px; }
#fr .f-dots span {
  display: inline-block; width: 6px; height: 6px; background: var(--rose);
  border-radius: 50%; animation: fdp 1.2s ease-in-out infinite; margin: 0 2px;
}
#fr .f-dots span:nth-child(2) { animation-delay: .2s; }
#fr .f-dots span:nth-child(3) { animation-delay: .4s; }
@keyframes fdp { 0%,100%{opacity:.3;transform:scale(.8)} 50%{opacity:1;transform:scale(1)} }
#fr .f-empty {
  background: var(--warm-white); border: 1.5px dashed var(--border);
  border-radius: 12px; padding: 40px 24px; text-align: center;
}
#fr .f-empty-title {
  font-family: var(--serif); font-size: 18px; font-weight: 700; color: var(--text); margin-bottom: 6px;
}
#fr .f-empty-sub { font-size: 13px; color: var(--muted); line-height: 1.65; }
#fr .f-alert { padding: 10px 14px; border-radius: 8px; font-size: 12px; margin-bottom: 12px; }
#fr .f-alert.error   { background: var(--rose-pale); color: var(--terra); border: 1px solid var(--rose-light); }
#fr .f-alert.success { background: var(--sage-pale); color: #3d6b3f; border: 1px solid rgba(138,170,140,.4); }

/* RIGHT PANEL */
#fr .f-right { position: sticky; top: 66px; }
#fr .f-rules-card {
  background: var(--warm-white); border: 1px solid var(--border); border-radius: 12px; overflow: hidden;
}
#fr .f-rules-head {
  padding: 13px 18px;
  background: linear-gradient(135deg, var(--brown) 0%, #4a2e22 100%);
  font-family: var(--serif); font-size: 15px; font-weight: 700; color: #fff;
}
#fr .f-rules-body { padding: 14px 18px; }
#fr .f-rule-row { display: flex; gap: 9px; margin-bottom: 11px; align-items: flex-start; }
#fr .f-rule-row:last-child { margin-bottom: 0; }
#fr .f-rule-num {
  width: 19px; height: 19px; border-radius: 50%; flex-shrink: 0; margin-top: 1px;
  background: var(--rose-pale); color: var(--rose);
  font-size: 10px; font-weight: 700; display: flex; align-items: center; justify-content: center;
}
#fr .f-rule-text { font-size: 12px; color: var(--text); line-height: 1.55; }
#fr .f-rule-text strong { display: block; font-weight: 700; margin-bottom: 1px; }
#fr .f-rules-div { height: 1px; background: var(--border); margin: 12px 0; }
#fr .f-crisis { margin-bottom: 9px; }
#fr .f-crisis:last-child { margin-bottom: 0; }
#fr .f-crisis-name { font-size: 11px; font-weight: 700; color: var(--text); display: block; margin-bottom: 1px; }
#fr .f-crisis-val  { font-size: 12px; color: var(--muted); }

/* DETAIL VIEW */
#fr .f-breadcrumb {
  display: flex; align-items: center; gap: 6px; margin-bottom: 16px;
  font-size: 12px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase;
}
#fr .f-back {
  color: var(--rose); cursor: pointer; background: none; border: none;
  font-family: var(--sans); font-size: 12px; font-weight: 700;
  letter-spacing: 0.04em; text-transform: uppercase; padding: 0; transition: color 0.15s;
}
#fr .f-back:hover { color: var(--terra); }
#fr .f-bc-sep { color: rgba(196,168,130,0.5); }
#fr .f-bc-cur { color: var(--muted); }

#fr .f-detail-card {
  background: var(--warm-white); border: 1px solid var(--border);
  border-radius: 12px; padding: 24px 28px; margin-bottom: 16px;
}
#fr .f-detail-meta {
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  margin-bottom: 10px; font-size: 11px; color: var(--muted);
}
#fr .f-detail-title {
  font-family: var(--serif); font-size: clamp(18px, 3vw, 26px);
  font-weight: 700; color: var(--text); line-height: 1.25; margin-bottom: 14px;
}
#fr .f-detail-body { font-size: 14px; line-height: 1.85; color: var(--text); white-space: pre-wrap; }
#fr .f-detail-foot {
  display: flex; gap: 8px; margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--border);
}

/* REPLIES */
#fr .f-replies-title {
  font-family: var(--serif); font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 12px;
}
#fr .f-reply-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 18px; }
#fr .f-reply {
  background: var(--cream); border: 1px solid var(--border);
  border-left: 3px solid var(--tan-light); border-radius: 8px; padding: 12px 16px;
}
#fr .f-reply-meta { font-size: 11px; color: var(--muted); margin-bottom: 5px; display: flex; gap: 8px; }
#fr .f-reply-author { font-weight: 700; color: var(--text); }
#fr .f-reply-body { font-size: 13px; line-height: 1.7; color: var(--text); white-space: pre-wrap; }

/* FORMS */
#fr .f-form-card {
  background: var(--warm-white); border: 1px solid var(--border); border-radius: 10px; padding: 18px 20px;
}
#fr .f-form-label {
  font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--muted); margin-bottom: 10px; display: block;
}
#fr .f-field { margin-bottom: 14px; }
#fr .f-field label {
  display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.07em;
  text-transform: uppercase; color: var(--muted); margin-bottom: 5px;
}
#fr .f-field input, #fr .f-field select {
  width: 100%; padding: 9px 12px; background: var(--cream);
  border: 1.5px solid var(--border); border-radius: 8px;
  font-family: var(--sans); font-size: 13px; color: var(--text);
  outline: none; appearance: none; transition: border-color 0.2s;
}
#fr .f-field input:focus, #fr .f-field select:focus {
  border-color: var(--rose); box-shadow: 0 0 0 3px rgba(224,122,106,.1);
}
#fr textarea {
  width: 100%; padding: 10px 12px; background: var(--cream);
  border: 1.5px solid var(--border); border-radius: 8px;
  font-family: var(--sans); font-size: 13px; color: var(--text);
  outline: none; resize: vertical; display: block; line-height: 1.6;
  transition: border-color 0.2s; min-height: 80px;
}
#fr textarea:focus { border-color: var(--rose); box-shadow: 0 0 0 3px rgba(224,122,106,.1); }
#fr textarea::placeholder { color: var(--muted); }
#fr .f-char { font-size: 11px; color: var(--muted); text-align: right; margin-top: 4px; }
#fr .f-char.warn { color: var(--terra); }
#fr .f-form-row { display: flex; gap: 8px; margin-top: 12px; justify-content: flex-end; }

#fr .f-btn-primary {
  padding: 9px 20px; background: var(--rose); color: #fff; border: none;
  border-radius: 8px; font-family: var(--sans); font-size: 12px; font-weight: 700;
  letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer;
  transition: background 0.2s; white-space: nowrap;
}
#fr .f-btn-primary:hover:not(:disabled) { background: var(--terra); }
#fr .f-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
#fr .f-btn-outline {
  padding: 9px 18px; background: transparent; color: var(--muted);
  border: 1px solid var(--border); border-radius: 8px;
  font-family: var(--sans); font-size: 12px; font-weight: 700;
  letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all 0.2s;
}
#fr .f-btn-outline:hover { border-color: var(--rose); color: var(--rose); }
#fr .f-btn-danger {
  padding: 9px 18px; background: transparent; color: var(--terra);
  border: 1px solid rgba(196,94,74,.3); border-radius: 8px;
  font-family: var(--sans); font-size: 12px; font-weight: 700;
  letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all 0.2s;
}
#fr .f-btn-danger:hover { background: var(--rose-pale); }
#fr .f-login-prompt {
  text-align: center; padding: 16px; font-size: 13px; color: var(--muted); line-height: 1.7;
  background: var(--warm-white); border: 1px solid var(--border); border-radius: 10px;
}
#fr .f-login-prompt a { color: var(--rose); font-weight: 700; text-decoration: none; }

/* MODAL — unscoped so it works regardless of position in DOM */
.f-modal-overlay {
  position: fixed; inset: 0; background: rgba(61,44,36,.55);
  z-index: 2000; display: flex; align-items: center; justify-content: center;
  padding: 20px; opacity: 0; pointer-events: none; transition: opacity 0.2s;
  /* CSS custom properties won't inherit outside #fr, so we redefine the ones used */
  --warm-white: #fff9f3;
  --brown:      #6b4c3b;
  --rose:       #e07a6a;
  --rose-light: #f2b5ab;
  --rose-pale:  #fce9e6;
  --terra:      #c45e4a;
  --sage-pale:  #eaf1ea;
  --muted:      #937468;
  --border:     rgba(196,168,130,0.28);
  --cream:      #fdf6ee;
  --text:       #3d2c24;
  --serif:      'Cormorant Garamond', Georgia, serif;
  --sans:       'Nunito', system-ui, sans-serif;
}
.f-modal-overlay.open { opacity: 1; pointer-events: all; }
.f-modal {
  background: var(--warm-white); border-radius: 14px;
  width: 100%; max-width: 500px; max-height: 90vh; overflow-y: auto;
  box-shadow: 0 16px 56px rgba(61,44,36,.22);
  transform: translateY(14px); transition: transform 0.2s;
  font-family: var(--sans); color: var(--text);
}
.f-modal-overlay.open .f-modal { transform: translateY(0); }
.f-modal-head {
  padding: 18px 24px 14px;
  background: linear-gradient(135deg, var(--brown) 0%, #4a2e22 100%);
  border-radius: 14px 14px 0 0;
  display: flex; align-items: center; justify-content: space-between;
}
.f-modal-title { font-family: var(--serif); font-size: 18px; font-weight: 700; color: #fff; }
.f-modal-close {
  background: rgba(255,255,255,.12); border: none; color: rgba(255,255,255,.7);
  width: 26px; height: 26px; border-radius: 50%; cursor: pointer;
  display: flex; align-items: center; justify-content: center; font-size: 14px;
  transition: background 0.15s;
}
.f-modal-close:hover { background: rgba(255,255,255,.22); color: #fff; }
.f-modal-body { padding: 20px 24px 24px; }
/* Field styles inside modal */
.f-modal-body .f-field { margin-bottom: 14px; }
.f-modal-body .f-field label {
  display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.07em;
  text-transform: uppercase; color: var(--muted); margin-bottom: 5px;
}
.f-modal-body .f-field input,
.f-modal-body .f-field select {
  width: 100%; padding: 9px 12px; background: var(--cream);
  border: 1.5px solid var(--border); border-radius: 8px;
  font-family: var(--sans); font-size: 13px; color: var(--text);
  outline: none; appearance: none; box-sizing: border-box;
  transition: border-color 0.2s;
}
.f-modal-body .f-field input:focus,
.f-modal-body .f-field select:focus {
  border-color: var(--rose); box-shadow: 0 0 0 3px rgba(224,122,106,.1);
}
.f-modal-body textarea {
  width: 100%; padding: 10px 12px; background: var(--cream);
  border: 1.5px solid var(--border); border-radius: 8px;
  font-family: var(--sans); font-size: 13px; color: var(--text);
  outline: none; resize: vertical; display: block; line-height: 1.6;
  transition: border-color 0.2s; min-height: 110px; box-sizing: border-box;
}
.f-modal-body textarea:focus { border-color: var(--rose); box-shadow: 0 0 0 3px rgba(224,122,106,.1); }
.f-modal-body textarea::placeholder { color: var(--muted); }
.f-modal-body .f-char { font-size: 11px; color: var(--muted); text-align: right; margin-top: 4px; }
.f-modal-body .f-char.warn { color: var(--terra); }
.f-modal-body .f-form-row { display: flex; gap: 8px; margin-top: 12px; justify-content: flex-end; }
.f-modal-body .f-alert { padding: 10px 14px; border-radius: 8px; font-size: 12px; margin-bottom: 12px; }
.f-modal-body .f-alert.error   { background: var(--rose-pale); color: var(--terra); border: 1px solid var(--rose-light); }
.f-modal-body .f-alert.success { background: var(--sage-pale); color: #3d6b3f; border: 1px solid rgba(138,170,140,.4); }
.f-modal-body .f-btn-primary {
  padding: 9px 20px; background: var(--rose); color: #fff; border: none;
  border-radius: 8px; font-family: var(--sans); font-size: 12px; font-weight: 700;
  letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer;
  transition: background 0.2s; white-space: nowrap;
}
.f-modal-body .f-btn-primary:hover:not(:disabled) { background: var(--terra); }
.f-modal-body .f-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
.f-modal-body .f-btn-outline {
  padding: 9px 18px; background: transparent; color: var(--muted);
  border: 1px solid var(--border); border-radius: 8px;
  font-family: var(--sans); font-size: 12px; font-weight: 700;
  letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all 0.2s;
}
.f-modal-body .f-btn-outline:hover { border-color: var(--rose); color: var(--rose); }

@keyframes fadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
#fr .fade-in { animation: fadeUp 0.3s ease both; }
</style>

<div id="fr">

  <!-- TOP BAR -->
  <div class="f-topbar">
    <div class="f-topbar-inner">
      <button class="f-brand" id="brandHome">Cancer <em>Community</em></button>
      <div class="f-search-wrap">
        <input class="f-search-input" id="searchInput" type="text" placeholder="Search posts..." maxlength="80">
        <button class="f-search-icon" id="searchBtn">&#x2315;</button>
      </div>
      <div class="f-auth-area" id="authArea">Checking login...</div>
    </div>
  </div>

  <!-- BODY -->
  <div class="f-body">

    <!-- LEFT NAV -->
    <nav class="f-left">
      <div class="f-nav-card">
        <div class="f-nav-head">Categories</div>
        <div id="navList"></div>
      </div>
      <!-- Only shown when a real category (not "All") is selected -->
      <button class="f-nav-post-btn" id="navPostBtn">Write a Post</button>
    </nav>

    <!-- CENTER FEED -->
    <main class="f-center" id="fCenter"></main>

    <!-- RIGHT: Rules only — no other location -->
    <aside class="f-right">
      <div class="f-rules-card">
        <div class="f-rules-head">Community Rules</div>
        <div class="f-rules-body">
          <div class="f-rule-row"><div class="f-rule-num">1</div><div class="f-rule-text"><strong>Be Supportive</strong>Lead with empathy — everyone here is going through something difficult.</div></div>
          <div class="f-rule-row"><div class="f-rule-num">2</div><div class="f-rule-text"><strong>No Hate Speech</strong>Zero tolerance for discrimination of any kind.</div></div>
          <div class="f-rule-row"><div class="f-rule-num">3</div><div class="f-rule-text"><strong>No Profanity</strong>Keep language clean and respectful.</div></div>
          <div class="f-rule-row"><div class="f-rule-num">4</div><div class="f-rule-text"><strong>No Medical Claims</strong>Share personal experiences, not prescriptions. Always recommend a doctor.</div></div>
          <div class="f-rule-row"><div class="f-rule-num">5</div><div class="f-rule-text"><strong>Protect Privacy</strong>Do not share others' personal health information.</div></div>
          <div class="f-rule-row"><div class="f-rule-num">6</div><div class="f-rule-text"><strong>No Spam</strong>No commercial promotions or fundraising links.</div></div>
          <div class="f-rule-row"><div class="f-rule-num">7</div><div class="f-rule-text"><strong>Admin Decisions Are Final</strong>Moderators may remove posts to keep this space safe.</div></div>
          <div class="f-rules-div"></div>
          <div class="f-crisis"><span class="f-crisis-name">ACS 24/7 Helpline</span><span class="f-crisis-val">1-800-227-2345</span></div>
          <div class="f-crisis"><span class="f-crisis-name">Cancer Support Hotline</span><span class="f-crisis-val">1-888-793-9355</span></div>
          <div class="f-crisis"><span class="f-crisis-name">Crisis Text Line</span><span class="f-crisis-val">Text HOME to 741741</span></div>
        </div>
      </div>
    </aside>

  </div>
</div>

<!-- POST MODAL — the ONLY place "Write a Post" lives -->
<div class="f-modal-overlay" id="postModal">
  <div class="f-modal">
    <div class="f-modal-head">
      <div class="f-modal-title">Write a Post</div>
      <button class="f-modal-close" id="postModalClose">&#x2715;</button>
    </div>
    <div class="f-modal-body">
      <div id="postAlert"></div>
      <div class="f-field">
        <label>Posting to</label>
        <select id="postCatSel"></select>
      </div>
      <div class="f-field">
        <label>Title <span style="color:var(--terra)">*</span></label>
        <input type="text" id="postTitleIn" placeholder="Give your post a clear title" maxlength="100">
      </div>
      <div class="f-field">
        <label>Content <span style="color:var(--terra)">*</span></label>
        <textarea id="postBodyIn" style="min-height:110px"
          placeholder="Share your experience, question, or story..." maxlength="260"></textarea>
        <div class="f-char" id="postCharCount">0 / 260</div>
      </div>
      <div class="f-form-row">
        <button class="f-btn-outline" id="postCancelBtn">Cancel</button>
        <button class="f-btn-primary" id="postSubmitBtn">Publish Post</button>
      </div>
    </div>
  </div>
</div>

<!--
  URI BRIDGE
  The module script runs first and stores pythonURI on window,
  then fires 'forum-ready' so the plain script below can safely start.
  No localhost references anywhere — pythonURI handles both environments.
-->
<script type="module">
  import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';
  window.__fURI  = pythonURI;
  window.__fOpts = fetchOptions;
  window.dispatchEvent(new Event('forum-ready'));
</script>

<script>
/* ── CATEGORIES ─────────────────────────────────────────────────────────── */
const CATS = [
  { id:'all',            path: null,                   name:'All Posts',             color:'#937468' },
  { id:'introductions',  path:'/forum/introductions',  name:'Introductions',         color:'#d97fb8' },
  { id:'general',        path:'/forum/general',        name:'General Discussion',    color:'#6a9fd8' },
  { id:'seeking-advice', path:'/forum/seeking-advice', name:'Seeking Advice',        color:'#e07a6a' },
  { id:'treatment',      path:'/forum/treatment',      name:'Treatment Experiences', color:'#8aaa8c' },
  { id:'research',       path:'/forum/research',       name:'Research and News',     color:'#c4a882' },
  { id:'support',        path:'/forum/support',        name:'Support and Resources', color:'#9b7ec8' },
];
const catById   = id   => CATS.find(c => c.id === id)     || null;
const catByPath = path => CATS.find(c => c.path === path) || null;

/* ── STATE ──────────────────────────────────────────────────────────────── */
let fUser    = null;   // null = guest, object = logged in
let fIsAdmin = false;
let fPosts   = [];
let fCurCat  = CATS[0];
let fCurPost = null;
let fSearchQ = '';
let fInited  = false;

/* ── HELPERS ────────────────────────────────────────────────────────────── */
// Always pull from window — set by the module script above
const uri  = () => window.__fURI;
// Build a clean fetch-options object every call so we never mutate the original
const opts = () => ({
  mode:        'cors',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'X-Origin':     'client',
    ...(window.__fOpts?.headers || {}),
  },
});

function esc(s) {
  const d = document.createElement('div'); d.textContent = s || ''; return d.innerHTML;
}
function ago(iso) {
  if (!iso) return '';
  const s = Math.floor((Date.now() - new Date(iso)) / 1000);
  if (s < 60)    return 'just now';
  if (s < 3600)  return Math.floor(s / 60)   + 'm ago';
  if (s < 86400) return Math.floor(s / 3600) + 'h ago';
  return Math.floor(s / 86400) + 'd ago';
}
function spinner() {
  return '<div class="f-loading"><div class="f-dots"><span></span><span></span><span></span></div><p style="margin-top:10px">Loading...</p></div>';
}
function parsePost(p) {
  const raw = p.content || '';
  const nl  = raw.indexOf('\n\n');
  const ok  = nl > 0 && nl < 120;
  return {
    ...p,
    title:   ok ? raw.slice(0, nl).trim()  : (raw.slice(0, 80) || '(untitled)'),
    body:    ok ? raw.slice(nl + 2).trim() : raw,
    catPath: p.topicPath || null,
  };
}
function setCenter(html) {
  document.getElementById('fCenter').innerHTML = html;
}

/* ── AUTH ───────────────────────────────────────────────────────────────── */
/*
  Tries two common endpoints:
    1. GET /api/user          — returns {uid, name, role, ...} or {data: {...}}
    2. GET /authenticate      — fallback some setups use
  If neither works the user is treated as a guest.
  Crucially this NEVER redirects — it just sets fUser.
*/
async function checkAuth() {
  const endpoints = ['/api/user', '/api/id'];
  for (const ep of endpoints) {
    try {
      const r = await fetch(`${uri()}${ep}`, {
        method: 'GET', ...opts()
      });
      if (!r.ok) continue;
      const d = await r.json();
      // Handle both { data: {...} } and flat { uid, name } shapes
      const u = d?.data ?? d;
      // Accept any shape that has a recognisable identity field
      const hasIdentity = u && (u.uid || u._uid || u.name || u.username);
      if (hasIdentity) {
        fUser    = u;
        fIsAdmin = (u.role === 'Admin');
        break;
      }
    } catch { /* try next endpoint */ }
  }
  renderAuthArea();
}

function renderAuthArea() {
  const el = document.getElementById('authArea');
  if (fUser) {
    const name = fUser.name || fUser.uid || fUser._uid || 'User';
    el.innerHTML = `Logged in as <strong>${esc(name)}</strong>`;
  } else {
    el.innerHTML = `<a href="/login?next=/blogs/">Log in</a> to post`;
  }
}

/* ── API ────────────────────────────────────────────────────────────────── */
async function apiFetch(catPath, searchQ) {
  let url = `${uri()}/api/microblog`;
  const params = [];
  if (searchQ)       params.push(`search=${encodeURIComponent(searchQ)}`);
  else if (catPath)  params.push(`pagePath=${encodeURIComponent(catPath)}`);
  if (params.length) url += '?' + params.join('&');
  const r = await fetch(url, { method: 'GET', ...opts() });
  if (!r.ok) throw new Error(r.status);
  return r.json();
}

async function apiReplies(postId) {
  const r = await fetch(
    `${uri()}/api/microblog/reply?postId=${postId}`,
    { method: 'GET', ...opts() }
  );
  if (!r.ok) throw new Error(r.status);
  return r.json();
}

async function apiCreate(topicPath, title, body) {
  const content = `${title}\n\n${body}`;
  if (content.length > 280) throw new Error('Post too long — please shorten your content.');
  const r = await fetch(`${uri()}/api/microblog`, {
    method: 'POST', ...opts(),
    body: JSON.stringify({ content, topicPath })
  });
  if (!r.ok) { const e = await r.json().catch(() => ({})); throw new Error(e?.message || `Error ${r.status}`); }
  return r.json();
}

async function apiDelete(postId) {
  const r = await fetch(`${uri()}/api/microblog`, {
    method: 'DELETE', ...opts(),
    body: JSON.stringify({ id: postId })
  });
  if (!r.ok) { const e = await r.json().catch(() => ({})); throw new Error(e?.message || `Error ${r.status}`); }
  return r.json();
}

async function apiReply(postId, content, topicPath) {
  const r = await fetch(`${uri()}/api/microblog/reply`, {
    method: 'POST', ...opts(),
    body: JSON.stringify({ postId, content, topicPath })
  });
  if (!r.ok) { const e = await r.json().catch(() => ({})); throw new Error(e?.message || `Error ${r.status}`); }
  return r.json();
}

/* ── NAV ────────────────────────────────────────────────────────────────── */
function buildNav() {
  const list = document.getElementById('navList');
  list.innerHTML = CATS.map(c => `
    <button class="f-nav-item${c.id === fCurCat.id ? ' active' : ''}" data-catid="${c.id}">
      <span class="f-nav-dot" style="background:${c.color}"></span>
      ${esc(c.name)}
    </button>`).join('');

  list.querySelectorAll('.f-nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = catById(btn.dataset.catid);
      if (!cat) return;
      fCurCat  = cat;
      fSearchQ = '';
      document.getElementById('searchInput').value = '';
      syncNav();
      loadFeed();
    });
  });
  syncNav();
}

function syncNav() {
  document.querySelectorAll('#navList .f-nav-item').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.catid === fCurCat.id)
  );
  // "Write a Post" appears only when a real (non-All) category is active
  document.getElementById('navPostBtn')
    .classList.toggle('visible', !!fCurCat.path);
}

/* ── FEED ────────────────────────────────────────────────────────────────── */
async function loadFeed() {
  fCurPost = null;
  setCenter(spinner());
  syncNav();

  let posts = [], err = null;
  try {
    const d = await apiFetch(fCurCat.path, fSearchQ);
    posts   = (d.microblogs || []).map(parsePost);
    fPosts  = posts;
  } catch (e) { err = e.message; }

  const isSearch  = !!fSearchQ;
  const title     = isSearch ? `Search: "${esc(fSearchQ)}"` : fCurCat.name;
  const countText = err ? '' : `${posts.length} post${posts.length !== 1 ? 's' : ''}`;

  const banner = isSearch ? `
    <div class="f-search-banner">
      ${posts.length} result${posts.length !== 1 ? 's' : ''} for <strong>"${esc(fSearchQ)}"</strong>
      <button class="f-clear-btn" id="clearSearchBtn">Clear</button>
    </div>` : '';

  let listHtml;
  if (err) {
    listHtml = `<div class="f-alert error">Could not load posts (${esc(err)}). Please try again.</div>`;
  } else if (!posts.length) {
    listHtml = `<div class="f-empty">
      <div class="f-empty-title">${isSearch ? 'No results found' : 'No posts yet'}</div>
      <div class="f-empty-sub">${isSearch
        ? 'Try different keywords or browse a category from the left panel.'
        : 'Select this category in the left panel, then click "Write a Post" to be the first.'
      }</div>
    </div>`;
  } else {
    listHtml = `<div class="f-post-list">${posts.map(renderCard).join('')}</div>`;
  }

  setCenter(`
    <div class="f-feed-header fade-in">
      <div class="f-feed-title">${title}</div>
      <div class="f-feed-count">${countText}</div>
    </div>
    ${banner}
    <div class="fade-in">${listHtml}</div>
  `);

  document.getElementById('clearSearchBtn')?.addEventListener('click', () => {
    fSearchQ = '';
    document.getElementById('searchInput').value = '';
    loadFeed();
  });

  // Bind card clicks — use event delegation to avoid issues with dynamic HTML
  document.querySelector('.f-post-list')?.addEventListener('click', e => {
    const card = e.target.closest('.f-post-card[data-pid]');
    if (!card) return;
    const p = fPosts.find(x => String(x.id) === card.dataset.pid);
    if (p) viewPost(p);
  });
}

function renderCard(p) {
  const cat     = catByPath(p.catPath);
  const replies = Array.isArray(p.replies) ? p.replies : [];
  return `
    <div class="f-post-card fade-in" data-pid="${p.id}">
      <div class="f-post-card-top">
        ${cat ? `<span class="f-cat-pill" style="background:${cat.color}">${esc(cat.name)}</span>` : ''}
        <span class="f-post-byline">
          posted by <strong>${esc(p.userName)}</strong> &nbsp;&middot;&nbsp; ${ago(p.timestamp)}
        </span>
      </div>
      <div class="f-post-title">${esc(p.title)}</div>
      <div class="f-post-foot">
        <span>${replies.length} repl${replies.length === 1 ? 'y' : 'ies'}</span>
        ${fIsAdmin ? '<span class="f-admin-badge">Admin</span>' : ''}
      </div>
    </div>`;
}

/* ── DETAIL ──────────────────────────────────────────────────────────────── */
async function viewPost(post) {
  fCurPost = post;
  const cat = catByPath(post.catPath) || {};

  setCenter(`
    <div class="f-breadcrumb fade-in">
      <button class="f-back" id="backBtn">Back</button>
      <span class="f-bc-sep">›</span>
      <span class="f-bc-cur">${esc(cat.name || 'Forum')}</span>
    </div>
    <div class="f-detail-card fade-in">
      <div class="f-detail-meta">
        ${cat.name ? `<span class="f-cat-pill" style="background:${cat.color || 'var(--rose)'}">${esc(cat.name)}</span>` : ''}
        <span>posted by <strong>${esc(post.userName)}</strong></span>
        <span>${ago(post.timestamp)}</span>
        ${fIsAdmin ? '<span class="f-admin-badge">Admin View</span>' : ''}
      </div>
      <div class="f-detail-title">${esc(post.title)}</div>
      <div class="f-detail-body">${esc(post.body)}</div>
      <div class="f-detail-foot" id="detailFoot"></div>
    </div>
    <div class="f-replies-title">Replies</div>
    <div id="replyList" class="f-reply-list">${spinner()}</div>
    <div id="replyFormWrap" class="fade-in"></div>
  `);

  document.getElementById('backBtn').addEventListener('click', loadFeed);

  // Delete button for own posts or admin
  if (fUser) {
    const myName = fUser.name || fUser.uid || fUser._uid || '';
    if (myName === post.userName || fIsAdmin) {
      const btn = document.createElement('button');
      btn.className   = 'f-btn-danger';
      btn.textContent = 'Delete Post';
      btn.addEventListener('click', () => doDelete(post.id));
      document.getElementById('detailFoot').appendChild(btn);
    }
  }

  // Load replies
  try {
    const d       = await apiReplies(post.id);
    const replies = d.replies || [];
    const rl      = document.getElementById('replyList');
// Replace the replies.map(...) block inside viewPost with this:
    rl.innerHTML = replies.length === 0
        ? '<div class="f-empty" style="padding:20px"><div class="f-empty-sub">No replies yet — be the first to respond.</div></div>'
        : replies.map(r => {
            const myName = fUser?.name || fUser?.uid || fUser?._uid || '';
            const canDel = fUser && (myName === r.userName || fIsAdmin);
            return `
              <div class="f-reply fade-in" data-rid="${r.id}">
                <div class="f-reply-meta">
                  <span class="f-reply-author">${esc(r.userName || 'Member')}</span>
                  <span>${ago(r.timestamp)}</span>
                  ${canDel ? `<button class="f-btn-danger reply-del-btn" style="padding:2px 8px;font-size:10px;margin-left:auto" data-rid="${r.id}">Delete</button>` : ''}
                </div>
                <div class="f-reply-body">${esc(r.content)}</div>
              </div>`;
        }).join('');
   } catch {
    document.getElementById('replyList').innerHTML =
      '<div class="f-empty"><div class="f-empty-sub">Could not load replies.</div></div>';
  }

// Bind delete buttons after rendering
document.querySelectorAll('.reply-del-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        doDeleteReply(post.id, Number(btn.dataset.rid));
    });
});

// Bind delete buttons after rendering
document.querySelectorAll('.reply-del-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        doDeleteReply(post.id, Number(btn.dataset.rid));
    });
});
  // Reply form — login prompt if not authenticated
  const fw = document.getElementById('replyFormWrap');
  if (!fUser) {
    fw.innerHTML = `<div class="f-login-prompt">
      <a href="/login?next=/blogs/">Log in</a> to leave a reply and support others in this community.
    </div>`;
  } else {
    fw.innerHTML = `
      <div class="f-form-card">
        <div class="f-form-label">Leave a Reply</div>
        <div id="replyAlert"></div>
        <textarea id="replyIn" placeholder="Share your thoughts, support, or advice..." maxlength="280"></textarea>
        <div class="f-char" id="replyCc">0 / 280</div>
        <div class="f-form-row">
          <button class="f-btn-primary" id="replyBtn">Post Reply</button>
        </div>
      </div>`;
    document.getElementById('replyIn').addEventListener('input', e => {
      const l  = e.target.value.length;
      const el = document.getElementById('replyCc');
      el.textContent = `${l} / 280`;
      el.classList.toggle('warn', l > 250);
    });
    document.getElementById('replyBtn').addEventListener('click',
      () => doReply(post.id, post.catPath)
    );
  }
}

async function doDelete(postId) {
  if (!confirm('Delete this post? This cannot be undone.')) return;
  try { await apiDelete(postId); loadFeed(); }
  catch (e) { alert('Delete failed: ' + e.message); }
}

async function doDeleteReply(postId, replyId) {
    if (!confirm('Delete this reply?')) return;
    try {
        const r = await fetch(`${uri()}/api/microblog/reply`, {
            method: 'DELETE', ...opts(),
            body: JSON.stringify({ postId, replyId })
        });
        if (!r.ok) { const e = await r.json().catch(() => ({})); throw new Error(e?.message || `Error ${r.status}`); }
        viewPost(fCurPost); // refresh the detail view
    } catch (e) {
        alert('Delete failed: ' + e.message);
    }
}

async function doReply(postId, catPath) {
  const input   = document.getElementById('replyIn');
  const alertEl = document.getElementById('replyAlert');
  const content = input?.value?.trim();
  if (!content) { alertEl.innerHTML = '<div class="f-alert error">Reply cannot be empty.</div>'; return; }
  alertEl.innerHTML = '<div class="f-alert success">Posting...</div>';
  try {
    await apiReply(postId, content, catPath);
    viewPost(fCurPost);
  } catch (e) {
    alertEl.innerHTML = `<div class="f-alert error">Error: ${esc(e.message)}</div>`;
  }
}

/* ── POST MODAL ─────────────────────────────────────────────────────────── */
function openPostModal(defaultCatId) {
  // ── Auth guard ──
  // Only redirect to login if we are certain the user is not logged in.
  // fUser is set by checkAuth() before init() calls bindAll(), so by the
  // time any button can be clicked, fUser has been populated (or confirmed null).
  if (!fUser) {
    window.location.href = '/login?next=/blogs/';
    return;
  }

  const sel = document.getElementById('postCatSel');
  sel.innerHTML = CATS.filter(c => c.path).map(c =>
    `<option value="${c.id}" ${c.id === (defaultCatId || (fCurCat.path ? fCurCat.id : '')) ? 'selected' : ''}>${c.name}</option>`
  ).join('');

  document.getElementById('postTitleIn').value          = '';
  document.getElementById('postBodyIn').value           = '';
  document.getElementById('postAlert').innerHTML        = '';
  document.getElementById('postCharCount').textContent  = '0 / 260';
  document.getElementById('postSubmitBtn').disabled     = false;
  document.getElementById('postModal').classList.add('open');
}

function closePostModal() {
  document.getElementById('postModal').classList.remove('open');
}

async function submitPost() {
  const catId   = document.getElementById('postCatSel').value;
  const title   = document.getElementById('postTitleIn').value.trim();
  const body    = document.getElementById('postBodyIn').value.trim();
  const alertEl = document.getElementById('postAlert');

  if (!title) { alertEl.innerHTML = '<div class="f-alert error">Please enter a title.</div>';          return; }
  if (!body)  { alertEl.innerHTML = '<div class="f-alert error">Please enter your post content.</div>'; return; }

  const cat = catById(catId);
  if (!cat?.path) { alertEl.innerHTML = '<div class="f-alert error">Please select a valid category.</div>'; return; }

  alertEl.innerHTML = '<div class="f-alert success">Publishing...</div>';
  document.getElementById('postSubmitBtn').disabled = true;

  try {
    await apiCreate(cat.path, title, body);
    closePostModal();
    fCurCat  = cat;
    fSearchQ = '';
    buildNav();
    loadFeed();
  } catch (e) {
    alertEl.innerHTML = `<div class="f-alert error">Error: ${esc(e.message)}</div>`;
    document.getElementById('postSubmitBtn').disabled = false;
  }
}

/* ── SEARCH ─────────────────────────────────────────────────────────────── */
function doSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (!q) return;
  fSearchQ = q;
  fCurCat  = CATS[0]; // reset to All
  buildNav();
  loadFeed();
}

/* ── BIND ────────────────────────────────────────────────────────────────── */
function bindAll() {
  document.getElementById('brandHome').addEventListener('click', () => {
    fCurCat  = CATS[0];
    fSearchQ = '';
    document.getElementById('searchInput').value = '';
    buildNav();
    loadFeed();
  });

  document.getElementById('searchBtn').addEventListener('click', doSearch);
  document.getElementById('searchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });

  // The ONLY "Write a Post" button — in the left nav, visible per-category
  document.getElementById('navPostBtn').addEventListener('click', () =>
    openPostModal(fCurCat.path ? fCurCat.id : null)
  );

  document.getElementById('postModalClose').addEventListener('click', closePostModal);
  document.getElementById('postCancelBtn').addEventListener('click',  closePostModal);
  document.getElementById('postSubmitBtn').addEventListener('click',  submitPost);
  document.getElementById('postModal').addEventListener('click', e => {
    if (e.target.id === 'postModal') closePostModal();
  });
  document.getElementById('postBodyIn').addEventListener('input', e => {
    const l  = e.target.value.length;
    const el = document.getElementById('postCharCount');
    el.textContent = `${l} / 260`;
    el.classList.toggle('warn', l > 240);
  });
}

/* ── INIT ─────────────────────────────────────────────────────────────────
  Order matters:
    1. bindAll()   — attach listeners (no auth needed)
    2. checkAuth() — sets fUser BEFORE any button click is possible
    3. buildNav()  — renders nav with correct state
    4. loadFeed()  — shows posts (public, no auth needed)
────────────────────────────────────────────────────────────────────────── */
async function init() {
  if (fInited) return;
  fInited = true;
  bindAll();
  await checkAuth();   // must complete before any user click can trigger openPostModal
  buildNav();
  await loadFeed();
}

// The module script fires 'forum-ready' after setting window.__fURI.
// We must wait for that before init(), otherwise uri() returns undefined.
if (window.__fURI) {
  init();
} else {
  window.addEventListener('forum-ready', init, { once: true });
  // Belt-and-suspenders fallback: if the event already fired before this
  // listener attached, init after a short tick.
  setTimeout(() => { if (!fInited) init(); }, 600);
}
</script>