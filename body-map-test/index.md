---
layout: opencs
hide: true
show_reading_time: false
---

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Nunito:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

<style>
/* ── RESET ───────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

#body-map-root {
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
  --hero-title-color: #fff;
  --hero-label-color: rgba(255,255,255,0.4);
  --border:     rgba(196,168,130,0.3);
  --serif:      'Cormorant Garamond', Georgia, serif;
  --sans:       'Nunito', system-ui, sans-serif;
  font-family: var(--sans);
  background: var(--cream);
  color: var(--text);
}

/* ── HERO BANNER ─────────────────────────────────────── */
#body-map-root .acs-hero {
  background: linear-gradient(135deg, var(--brown) 0%, #4a2e22 100%);
  padding: 56px 48px 48px;
  position: relative; overflow: hidden;
}
#body-map-root .acs-hero::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 70% 50%, rgba(224,122,106,0.18) 0%, transparent 60%);
  pointer-events: none;
}
#body-map-root .hero-inner {
  max-width: 1100px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr auto; gap: 32px; align-items: center;
  position: relative; z-index: 1;
}
#body-map-root .hero-eyebrow {
  font-family: var(--sans);
  font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--rose-light);
  margin-bottom: 12px;
  display: flex; align-items: center; gap: 8px;
}
#body-map-root .hero-eyebrow::before {
  content: ''; font-size: 10px;
  width: 20px; height: 20px; background: var(--rose);
  border-radius: 50%; display: flex; align-items: center;
  justify-content: center; flex-shrink: 0;
}
#body-map-root .hero-title {
  font-family: var(--serif);
  font-size: clamp(32px, 4.5vw, 58px);
  font-weight: 700; line-height: 1.08; color: var(--hero-title-color);
  letter-spacing: -0.3px;
}
#body-map-root .hero-title em { font-style: italic; color: var(--rose-light); }
#body-map-root .hero-sub {
  margin-top: 14px; font-size: 15px;
  color: #000; line-height: 1.7;
  max-width: 500px;
}
#body-map-root .hero-stats {
  display: flex; gap: 28px; margin-top: 28px;
}
#body-map-root .hstat-num {
  font-family: var(--serif); font-size: 30px; font-weight: 700;
  color: var(--rose-light); line-height: 1;
}
#body-map-root .hstat-label {
  font-size: 10px; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--hero-label-color);
  margin-top: 3px;
}
#body-map-root .hero-cta {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 26px; background: var(--rose); color: #fff !important;
  font-weight: 700; font-size: 13px; letter-spacing: 0.06em;
  text-transform: uppercase; text-decoration: none;
  border-radius: 8px; align-self: flex-start;
  transition: background 0.2s, transform 0.15s;
  box-shadow: 0 4px 20px rgba(224,122,106,0.3);
}
#body-map-root .hero-cta:hover { background: var(--terra); transform: translateY(-2px); }
#body-map-root .hero-cta svg { width: 13px; height: 13px; }
#body-map-root .hero-cta-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
#body-map-root .hero-cta-secondary {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.28);
  box-shadow: none;
}
#body-map-root .hero-cta-secondary:hover {
  background: rgba(255,255,255,0.16);
}

/* ── MAIN LAYOUT ─────────────────────────────────────── */
#body-map-root .main-section {
  max-width: 1100px; margin: 0 auto;
  padding: 48px 48px 0;
}
#body-map-root .gender-row {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 32px; flex-wrap: wrap; gap: 12px;
}
#body-map-root .gender-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
#body-map-root .section-eyebrow {
  font-family: var(--sans); font-size: 11px; font-weight: 600;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--muted);
}
#body-map-root .gender-toggle {
  display: flex;
  background: var(--tan-light); border-radius: 8px;
  padding: 3px; border: 1px solid var(--border);
}
#body-map-root .gender-btn {
  padding: 8px 20px; border: none; background: transparent;
  font-family: var(--sans); font-size: 13px; font-weight: 600;
  color: var(--muted); border-radius: 6px; cursor: pointer;
  transition: all 0.2s;
}
#body-map-root .gender-btn.active {
  background: var(--warm-white); color: var(--text);
  box-shadow: 0 2px 8px rgba(61,44,36,0.1);
}
#body-map-root .gender-btn:hover:not(.active) { color: var(--text); }

/* diagram + panel layout */
#body-map-root .diagram-area {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px; align-items: start;
}

/* ── SVG BODY WRAPPER ────────────────────────────────── */
#body-map-root .body-wrap {
  position: relative;
  width: 300px;
  flex-shrink: 0;
  line-height: 0;
}

#body-map-root #body-svg-female,
#body-map-root #body-svg-male {
  width: 300px;
  height: auto;
  display: block;
  filter: drop-shadow(0 8px 32px rgba(61,44,36,0.12));
}

/* Hotspot overlay - covers body-wrap exactly */
#body-map-root .hotspot-layer {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
}

#body-map-root .hs-dot {
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: all; cursor: pointer;
  z-index: 10;
}
#body-map-root .hs-dot-ring {
  position: relative; width: 22px; height: 22px;
}
#body-map-root .hs-dot-core {
  position: absolute; top: 5px; left: 5px;
  width: 12px; height: 12px; border-radius: 50%;
  background: var(--dot-color);
  box-shadow: 0 0 6px var(--dot-color);
  transition: transform 0.2s, box-shadow 0.2s;
}
#body-map-root .hs-dot-pulse {
  position: absolute; inset: 0; border-radius: 50%;
  border: 2px solid var(--dot-color); opacity: 0.5;
  animation: hsPulse 2.2s ease-out infinite;
}
#body-map-root .hs-dot:hover .hs-dot-core,
#body-map-root .hs-dot.active .hs-dot-core {
  transform: scale(1.4);
  box-shadow: 0 0 14px var(--dot-color), 0 0 28px var(--dot-color);
}
#body-map-root .hs-dot.active .hs-dot-pulse { animation: none; opacity: 1; }

@keyframes hsPulse {
  0% { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(2.8); opacity: 0; }
}

/* ── INFO PANEL ──────────────────────────────────────── */
#body-map-root .info-panel {
  flex: 1;
  background: var(--warm-white);
  border: 1.5px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  min-height: 320px;
  transition: border-color 0.3s;
  display: flex; flex-direction: column;
  position: sticky; top: 80px;
  box-shadow: 0 4px 24px rgba(61,44,36,0.06);
}
#body-map-root .info-panel.active {
  border-color: var(--panel-accent, var(--border));
  box-shadow: 0 8px 40px rgba(61,44,36,0.1);
}
#body-map-root .panel-top {
  padding: 24px 24px 20px;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(135deg, var(--warm-white), var(--cream));
  position: relative; overflow: hidden;
}
#body-map-root .panel-glow {
  position: absolute; top: -40px; right: -40px;
  width: 140px; height: 140px; border-radius: 50%;
  background: var(--panel-accent, transparent);
  opacity: 0.1; pointer-events: none; transition: background 0.4s;
}
#body-map-root .panel-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 4px 12px; border-radius: 20px;
  background: rgba(196,168,130,0.12);
  border: 1px solid var(--border);
  font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
  text-transform: uppercase; margin-bottom: 10px;
  transition: all 0.3s;
}
#body-map-root .panel-region {
  font-family: var(--serif); font-size: 24px; font-weight: 700;
  color: var(--text); line-height: 1.2; margin-bottom: 4px;
}
#body-map-root .panel-count { font-size: 12px; color: var(--muted); }
#body-map-root .panel-body {
  padding: 8px 0 16px; overflow-y: auto; flex: 1;
  max-height: 460px;
}
#body-map-root .cancer-item {
  display: flex; flex-direction: column;
  padding: 12px 24px;
  border-bottom: 1px solid rgba(196,168,130,0.15);
  cursor: pointer; transition: background 0.15s, padding-left 0.15s;
}
#body-map-root .cancer-item:last-child { border-bottom: none; }
#body-map-root .cancer-item:hover { background: rgba(196,168,130,0.06); padding-left: 28px; }
#body-map-root .cancer-item.open { background: var(--rose-pale); padding-left: 28px; }
#body-map-root .cancer-row {
  display: flex; align-items: flex-start; justify-content: space-between; gap: 8px;
}
#body-map-root .cancer-right {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
#body-map-root .cancer-name-link {
  font-size: 13px; font-weight: 700; color: var(--text);
  text-decoration: none; line-height: 1.3; transition: color 0.15s;
}
#body-map-root .cancer-item:hover .cancer-name-link,
#body-map-root .cancer-item.open .cancer-name-link { color: var(--rose); }
#body-map-root .cancer-arrow {
  font-size: 11px; color: var(--muted); flex-shrink: 0;
  margin-top: 2px; transition: transform 0.15s, color 0.15s;
}
#body-map-root .cancer-item:hover .cancer-arrow,
#body-map-root .cancer-item.open .cancer-arrow { transform: translateX(4px); color: var(--rose); }
#body-map-root .bookmark-icon-btn {
  border: 1px solid rgba(196,168,130,0.35);
  background: #fff;
  color: var(--muted);
  border-radius: 8px;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  line-height: 1;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateX(4px);
  transition: all 0.15s;
}
#body-map-root .bookmark-icon-btn::before {
  content: '☆';
  font-size: 13px;
  line-height: 1;
}
#body-map-root .bookmark-icon-btn:hover {
  border-color: var(--rose-light);
  color: var(--rose);
}
#body-map-root .bookmark-icon-btn.active {
  color: #fff;
  border-color: var(--rose);
  background: var(--rose);
}
#body-map-root .bookmark-icon-btn.active::before {
  content: '★';
}
#body-map-root .cancer-item:hover .bookmark-icon-btn,
#body-map-root .cancer-item:focus-within .bookmark-icon-btn,
#body-map-root .cancer-item.open .bookmark-icon-btn,
#body-map-root .bookmark-icon-btn.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(0);
}
#body-map-root .cancer-tags {
  display: flex; flex-wrap: wrap; gap: 4px; margin-top: 5px;
}
#body-map-root .ctag {
  font-size: 10px; padding: 2px 8px;
  background: rgba(196,168,130,0.12);
  border: 1px solid rgba(196,168,130,0.3);
  border-radius: 3px; color: var(--muted); font-weight: 500;
}
#body-map-root .cancer-desc {
  font-size: 12px; color: var(--muted); margin-top: 6px;
  line-height: 1.6; display: none;
  padding: 8px 12px; background: rgba(196,168,130,0.06);
  border-radius: 6px; border-left: 2px solid var(--rose-light);
}
#body-map-root .cancer-item.open .cancer-desc { display: block; }
#body-map-root .empty-state {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; padding: 60px 32px; text-align: center; gap: 14px;
  flex: 1;
}
#body-map-root .empty-icon {
  width: 54px; height: 54px; border-radius: 50%;
  background: var(--rose-pale); border: 1px solid var(--rose-light);
  display: flex; align-items: center; justify-content: center; font-size: 22px;
}
#body-map-root .empty-title {
  font-family: var(--serif); font-size: 18px; font-weight: 600; color: var(--text);
}
#body-map-root .empty-sub {
  font-size: 13px; color: var(--muted); line-height: 1.65; max-width: 240px;
}

/* ── BOTTOM CATEGORIES ────────────────────────────────── */
#body-map-root .categories-section {
  max-width: 1100px; margin: 0 auto;
  padding: 56px 48px 80px;
}
#body-map-root .cat-heading {
  font-family: var(--serif); font-size: clamp(28px,3vw,42px);
  font-weight: 700; color: var(--text); margin-bottom: 6px;
}
#body-map-root .cat-sub {
  font-size: 14px; color: var(--muted); margin-bottom: 36px; line-height: 1.6;
}
#body-map-root .cat-divider {
  height: 1px; background: var(--border); margin-bottom: 36px;
}
#body-map-root .sys-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}
#body-map-root .sys-card {
  background: var(--warm-white);
  border: 1px solid var(--border);
  border-radius: 14px; padding: 20px;
  cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
  position: relative; overflow: hidden;
}
#body-map-root .sys-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: var(--sys-color);
  border-radius: 14px 14px 0 0;
}
#body-map-root .sys-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(61,44,36,0.09);
}
#body-map-root .sys-icon { font-size: 22px; margin-bottom: 10px; }
#body-map-root .sys-label {
  font-family: var(--serif); font-size: 17px; font-weight: 700;
  color: var(--text); margin-bottom: 6px;
}
#body-map-root .sys-cancers {
  font-size: 11px; font-weight: 600; letter-spacing: 0.05em;
  text-transform: uppercase; color: var(--muted);
}
#body-map-root .sys-count {
  display: inline-block; margin-top: 8px;
  padding: 3px 10px; border-radius: 20px;
  background: var(--rose-pale); color: var(--terra);
  font-size: 10px; font-weight: 700; letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* ── FADE-IN ──────────────────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
#body-map-root .fade-in { animation: fadeUp 0.5s ease both; }

/* ── SEARCH BAR ──────────────────────────────────────────── */
#body-map-root .search-row {
  margin-bottom: 20px;
  position: relative;
}
#body-map-root .bm-search-input {
  width: 100%;
  padding: 12px 44px 12px 16px;
  border: 1.5px solid var(--border);
  border-radius: 10px;
  font-family: var(--sans);
  font-size: 14px;
  color: var(--text);
  background: var(--warm-white);
  outline: none;
  transition: border-color 0.2s;
}
#body-map-root .bm-search-input:focus {
  border-color: var(--rose-light);
}
#body-map-root .bm-search-input::placeholder { color: var(--muted); }
#body-map-root .bm-search-results {
  position: absolute;
  top: calc(100% + 6px);
  left: 0; right: 0;
  background: var(--warm-white);
  border: 1.5px solid var(--border);
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(61,44,36,0.1);
  z-index: 100;
  overflow: hidden;
  display: none;
}
#body-map-root .bm-search-results.open { display: block; }
#body-map-root .bm-search-result-item {
  padding: 10px 16px;
  cursor: pointer;
  font-size: 13px;
  color: var(--text);
  border-bottom: 1px solid rgba(196,168,130,0.15);
  transition: background 0.15s;
  display: flex;
  align-items: center;
  gap: 10px;
}
#body-map-root .bm-search-result-item:last-child { border-bottom: none; }
#body-map-root .bm-search-result-item:hover { background: var(--rose-pale); }
#body-map-root .bm-search-result-region {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  margin-left: auto;
  white-space: nowrap;
}
#body-map-root .bm-search-no-results {
  padding: 14px 16px;
  font-size: 13px;
  color: var(--muted);
  text-align: center;
}

/* ── SHARE BUTTON ─────────────────────────────────────────── */
#body-map-root .share-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 16px;
  background: var(--warm-white);
  border: 1px solid var(--border);
  border-radius: 20px;
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 700;
  color: var(--muted);
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.04em;
}
#body-map-root .share-btn:hover {
  border-color: var(--rose-light);
  color: var(--rose);
}
#body-map-root .share-btn.copied {
  background: var(--sage-pale);
  border-color: var(--sage);
  color: var(--sage);
}
#body-map-root .panel-share-row {
  display: flex;
  gap: 8px;
  padding: 10px 24px 4px;
  border-bottom: 1px solid var(--border);
}
#body-map-root .bookmarks-trigger {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1.5px solid var(--border);
  background: var(--warm-white);
  color: var(--text);
  border-radius: 20px;
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: all 0.15s;
}
#body-map-root .bookmarks-trigger:hover {
  border-color: var(--rose-light);
  color: var(--rose);
}
#body-map-root .bookmarks-count {
  color: var(--terra);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 800;
  padding: 0;
}
#body-map-root .bookmarks-count::before {
  content: '★';
  margin-right: 4px;
  color: var(--rose);
}

/* ── BOOKMARKS DRAWER ───────────────────────────────────── */
#body-map-root .bookmarks-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.18);
  z-index: 120;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
#body-map-root .bookmarks-overlay.open {
  opacity: 1;
  pointer-events: auto;
}
#body-map-root .bookmarks-drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: min(400px, 92vw);
  background: var(--warm-white);
  border-left: 1px solid var(--border);
  box-shadow: -12px 0 28px rgba(61,44,36,0.12);
  z-index: 130;
  transform: translateX(100%);
  transition: transform 0.24s ease;
  display: flex;
  flex-direction: column;
}
#body-map-root .bookmarks-drawer.open {
  transform: translateX(0);
}
#body-map-root .bookmarks-head {
  padding: 20px 18px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
#body-map-root .bookmarks-title {
  font-family: var(--serif);
  font-size: 26px;
  color: var(--text);
}
#body-map-root .bookmarks-close {
  border: 1px solid var(--border);
  background: #fff;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: var(--muted);
}
#body-map-root .bookmarks-body {
  padding: 14px 18px 20px;
  overflow-y: auto;
  flex: 1;
}
#body-map-root .bookmark-item {
  border: 1px solid rgba(196,168,130,0.35);
  border-radius: 10px;
  padding: 10px 12px;
  margin-bottom: 10px;
  background: #fff;
}
#body-map-root .bookmark-item-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}
#body-map-root .bookmark-item a {
  color: var(--text);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.35;
  text-decoration: none;
}
#body-map-root .bookmark-item a:hover {
  color: var(--rose);
}
#body-map-root .bookmark-meta {
  margin-top: 6px;
  font-size: 11px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
#body-map-root .bookmark-remove {
  border: 1px solid rgba(196,168,130,0.35);
  background: #fff;
  color: var(--muted);
  border-radius: 6px;
  cursor: pointer;
  font-size: 11px;
  padding: 4px 6px;
}
#body-map-root .bookmark-remove:hover {
  color: var(--rose);
  border-color: var(--rose-light);
}
#body-map-root .bookmarks-empty {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
  text-align: center;
  padding: 28px 10px;
}

/* ── REPORT PAGE PROTOTYPE ───────────────────────────────── */
#body-map-root .report-view {
  display: none;
  max-width: 980px;
  margin: 0 auto;
  padding: 42px 48px 72px;
  color: #000;
}
#body-map-root.report-mode .main-section,
#body-map-root.report-mode .categories-section,
#body-map-root.report-mode .acs-chat-section {
  display: none;
}
#body-map-root.report-mode .report-view {
  display: block;
}
#body-map-root .report-card {
  background: #fff;
  border: 1px solid #d6d9d4;
  border-radius: 12px;
  box-shadow: 0 10px 24px rgba(27, 32, 26, 0.07);
  overflow: hidden;
}
#body-map-root .report-header {
  background: #fff;
  border-bottom: 1px solid #d3d7d1;
  border-top: 4px solid #5b6358;
  padding: 28px 30px 24px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}
#body-map-root .report-brand {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 8px;
}
#body-map-root .report-title {
  font-family: var(--sans);
  font-size: clamp(25px, 3.1vw, 34px);
  line-height: 1.2;
  letter-spacing: 0.01em;
  color: #000;
}
#body-map-root .report-meta {
  font-size: 12px;
  color: #000;
  line-height: 1.6;
  text-align: right;
}
#body-map-root .report-meta-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
}
#body-map-root .report-lang-switch {
  display: inline-flex;
  background: #e9ece6;
  border: 1px solid #c9cdc6;
  border-radius: 999px;
  padding: 3px;
  gap: 3px;
}
#body-map-root .report-lang-btn {
  border: none;
  background: transparent;
  color: #000;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: 999px;
  padding: 5px 10px;
  cursor: pointer;
}
#body-map-root .report-lang-btn.active {
  background: #fff;
  color: #000;
  box-shadow: 0 2px 5px rgba(20, 24, 28, 0.12);
}
#body-map-root .report-content {
  padding: 26px 30px 30px;
  display: grid;
  gap: 14px;
}
#body-map-root .report-section {
  border: 1px solid #d5d8d4;
  border-radius: 9px;
  padding: 16px 18px;
  background: #fff;
}
#body-map-root .report-section h3 {
  font-family: var(--sans);
  font-size: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #000;
}
#body-map-root .report-clinical-note {
  border: 1px solid #d2d7cf;
  background: #f7f8f6;
  border-left: 4px solid #6f756a;
  border-radius: 7px;
  padding: 10px 12px;
  font-size: 12px;
  color: #000;
  line-height: 1.55;
}
#body-map-root .report-kv {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 12px;
}
#body-map-root .report-kv-item {
  background: #fff;
  border: 1px solid #d8dbd6;
  border-radius: 7px;
  padding: 10px 12px;
}
#body-map-root .report-kv-label {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #000;
  font-weight: 700;
}
#body-map-root .report-kv-value {
  margin-top: 4px;
  font-size: 15px;
  font-weight: 700;
  color: #000;
}
#body-map-root .report-region {
  border-top: 1px dashed rgba(196,168,130,0.35);
  padding-top: 12px;
  margin-top: 12px;
}
#body-map-root .report-region:first-child {
  border-top: 0;
  padding-top: 0;
  margin-top: 0;
}
#body-map-root .report-region-title {
  font-weight: 800;
  color: #000;
  margin-bottom: 8px;
  font-size: 15px;
}
#body-map-root .report-cancer-list,
#body-map-root .report-bullet-list {
  margin: 0;
  padding-left: 18px;
  color: #000;
  line-height: 1.7;
  font-size: 13px;
}
#body-map-root .report-bullet-list li + li {
  margin-top: 6px;
}
#body-map-root .report-qa-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}
#body-map-root .report-qa-group + .report-qa-group {
  margin-top: 14px;
}
#body-map-root .report-qa-group-title {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #000;
  font-weight: 800;
  margin-bottom: 8px;
}
#body-map-root .report-qa-item {
  background: #fff;
  border: 1px solid #d8dbd6;
  border-radius: 7px;
  padding: 10px 12px;
}
#body-map-root .report-qa-label {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #000;
  font-weight: 700;
}
#body-map-root .report-qa-value {
  margin-top: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #000;
  line-height: 1.45;
  word-break: break-word;
}
#body-map-root .report-cancer-list a {
  color: #000;
  font-weight: 700;
}

#body-map-root .report-section-bookmarks a,
#body-map-root .report-bullet-list a {
  color: #000;
  font-weight: 600;
}
#body-map-root .report-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding: 0 30px 28px;
  flex-wrap: wrap;
}
#body-map-root .report-btn {
  padding: 11px 18px;
  border-radius: 8px;
  border: 1px solid #a9aea7;
  background: #fff;
  color: #000;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
}
#body-map-root .report-btn.primary {
  background: #fff;
  border-color: #7f847d;
  color: #000;
}
#body-map-root .report-btn.primary:hover {
  background: #f6f7f5;
}
#body-map-root .report-btn:hover {
  border-color: #81877e;
}

/* ── Overall Risk Hero ─── */
#body-map-root .report-section-hero { text-align: center; }
#body-map-root .report-rr-wrap { padding: 16px 0 8px; }
#body-map-root .report-rr-number {
  font-family: var(--serif);
  font-size: clamp(56px, 12vw, 96px);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.02em;
}
#body-map-root .report-rr-x { font-size: 0.38em; vertical-align: top; margin-top: 0.2em; opacity: 0.7; }
#body-map-root .report-rr-sub { font-family: var(--serif); font-size: 16px; font-style: italic; color: var(--muted); margin: 6px 0 12px; }
#body-map-root .report-rr-badge {
  display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.07em;
  text-transform: uppercase; padding: 5px 18px; border-radius: 20px;
}
#body-map-root .report-rr-badge-high     { background: #f2e3de; color: #7d4636; }
#body-map-root .report-rr-badge-mod      { background: #f3ecdd; color: #7f6030; }
#body-map-root .report-rr-badge-low      { background: #eaf0e6; color: #425c42; }

/* ── Cancer Type Breakdown ─── */
#body-map-root .report-ct-grid { display: grid; gap: 10px; margin-top: 4px; }
#body-map-root .report-ct-row { padding: 10px 0; border-top: 1px dashed rgba(122, 124, 120, 0.35); }
#body-map-root .report-ct-row:first-child { border-top: 0; }
#body-map-root .report-ct-name { font-size: 14px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
#body-map-root .report-ct-stats { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; font-size: 12px; color: var(--muted); margin-bottom: 6px; }
#body-map-root .report-ct-stats strong { color: var(--text); }
#body-map-root .report-ct-badge { font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 3px 10px; border-radius: 10px; }
#body-map-root .report-ct-badge-high { background: #f2e3de; color: #7d4636; }
#body-map-root .report-ct-badge-mod  { background: #f3ecdd; color: #7f6030; }
#body-map-root .report-ct-badge-low  { background: #eaf0e6; color: #425c42; }
#body-map-root .report-ct-bar-track { height: 5px; background: rgba(122, 124, 120, 0.2); border-radius: 3px; overflow: hidden; }
#body-map-root .report-ct-bar-fill  { height: 100%; border-radius: 3px; }
#body-map-root .report-ct-bar-high     { background: #8e5544; }
#body-map-root .report-ct-bar-moderate { background: #9e7a45; }
#body-map-root .report-ct-bar-low      { background: #5f785f; }

/* ── Treatment Tracker Rows ─── */
#body-map-root .report-tx-row {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 10px 0; border-top: 1px dashed rgba(122, 124, 120, 0.35);
}
#body-map-root .report-tx-row:first-of-type { border-top: 0; }
#body-map-root .report-tx-dot { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; margin-top: 4px; }
#body-map-root .report-tx-name { font-size: 14px; font-weight: 700; color: var(--text); }
#body-map-root .report-tx-detail { font-size: 12px; color: var(--muted); margin-top: 2px; line-height: 1.5; }

/* ── Sub-labels & notes ─── */
#body-map-root .report-sec-sub { font-size: 12px; color: #000; margin: -4px 0 10px; }
#body-map-root .report-sec-note { font-size: 13px; color: #000; font-style: italic; margin: 4px 0; }

#body-map-root .report-notes-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
#body-map-root .report-note-box {
  border: 1px solid #d6d9d5;
  border-radius: 8px;
  background: #fcfcfb;
  min-height: 110px;
  padding: 10px;
}
#body-map-root .report-note-box-title {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #5b6157;
  margin-bottom: 8px;
  font-weight: 700;
}
#body-map-root .report-signature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 8px;
}
#body-map-root .report-signature-line {
  border-top: 1px solid #a2a8a0;
  padding-top: 6px;
  font-size: 11px;
  color: #4d5449;
}

/* ── Report question input ─── */
#body-map-root .report-question-form {
  display: grid;
  gap: 8px;
  margin-bottom: 12px;
}
#body-map-root .report-question-input {
  width: 100%;
  min-height: 76px;
  resize: vertical;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1.5px solid rgba(122, 124, 120, 0.38);
  background: #f7f8f6;
  color: var(--text);
  font-family: var(--sans);
  font-size: 13px;
  line-height: 1.5;
  box-sizing: border-box;
}
#body-map-root .report-question-input:focus {
  outline: none;
  border-color: #6f756a;
}
#body-map-root .report-question-add {
  justify-self: start;
  border: 1px solid #b2b8ad;
  border-radius: 8px;
  padding: 8px 12px;
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  background: #fff;
  color: #4f564b;
}
#body-map-root .report-question-add:hover {
  border-color: #6f756a;
  color: #3e443b;
}

/* ═══════════════════════════════════════════════════════════
   PROFESSIONAL REPORT REDESIGN
═══════════════════════════════════════════════════════════ */

/* Clinical section headers */
#body-map-root .report-section-icon {
  font-size: 15px !important;
  font-weight: 700 !important;
  margin-bottom: 12px !important;
  color: #111 !important;
  letter-spacing: 0.01em;
}

/* Clinical section surfaces */
#body-map-root .report-section-summary,
#body-map-root .report-section-risk,
#body-map-root .report-section-treatment,
#body-map-root .report-section-assessment,
#body-map-root .report-section-bookmarks,
#body-map-root .report-section-questions,
#body-map-root .report-section-notes {
  background: #fff;
  border: 1px solid #d4d7d3;
  border-radius: 8px;
}

/* Clinical table */
#body-map-root .report-table-wrap {
  border: 1px solid #d1d4d0;
  border-radius: 6px;
  overflow: auto;
  max-height: 320px;
  background: #fff;
}
#body-map-root .report-table-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}
#body-map-root .report-table-card {
  border: 1px solid #d1d4d0;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
}
#body-map-root .report-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  table-layout: fixed;
}

#body-map-root .report-table thead {
  background: #fff;
  border-bottom: 1px solid #d1d4d0;
}

#body-map-root .report-table th {
  padding: 8px 10px;
  text-align: left;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #000;
  position: sticky;
  top: 0;
  z-index: 1;
}

#body-map-root .report-table td {
  padding: 8px 10px;
  font-size: 12px;
  color: #000;
  border-top: 1px solid #e2e4e1;
  vertical-align: top;
  line-height: 1.45;
}

#body-map-root .report-table tbody tr:hover {
  background: #f6f7f5;
}

#body-map-root .report-med-name {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: #000;
}

#body-map-root .report-med-dot {
  width: 10px;
  height: 10px;
  border-radius: 3px;
  flex-shrink: 0;
}

#body-map-root .report-schedule-line {
  display: block;
}

#body-map-root .report-schedule-line + .report-schedule-line {
  margin-top: 2px;
}

#body-map-root .report-schedule-label {
  color: #000;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-right: 4px;
}

/* Clinical lists */
#body-map-root .report-styled-list {
  margin: 0;
  padding-left: 18px;
  list-style: disc;
}

#body-map-root .report-styled-list li {
  padding: 6px 0;
  font-size: 13px;
  color: #000;
  line-height: 1.5;
}

/* Empty states */
#body-map-root .report-empty-state {
  padding: 10px 12px;
  border: 1px dashed #ccd0ca;
  background: #fafbf9;
  color: #000;
  font-size: 12px;
  font-style: normal;
}

/* QA rows */
#body-map-root .report-qa-section {
  margin-bottom: 16px;
}

#body-map-root .report-qa-section-title {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #000;
  margin-bottom: 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid #d2d5d0;
}

#body-map-root .report-qa-table {
  display: grid;
  gap: 10px;
}
#body-map-root .report-qa-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

#body-map-root .report-qa-row {
  background: #fcfcfb;
  border: 1px solid #d2d5d0;
  border-radius: 6px;
  padding: 9px 10px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
}

#body-map-root .report-qa-row-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #000;
}

#body-map-root .report-qa-row-value {
  font-size: 12px;
  color: #000;
  font-weight: 500;
}

/* ── Inline editable report fields ─── */
#body-map-root .bm-editable-field {
  position: relative;
  padding-right: 48px;
}
#body-map-root .bm-edit-display {
  display: block;
  min-height: 1.2em;
}
#body-map-root .bm-edit-btn {
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid #b9beb7;
  background: #fff;
  color: #000;
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s ease;
}
#body-map-root .bm-editable-field:hover .bm-edit-btn,
#body-map-root .bm-editable-field:focus-within .bm-edit-btn {
  opacity: 1;
}
#body-map-root .bm-edit-form {
  display: none;
  gap: 6px;
}
#body-map-root .bm-edit-input {
  width: 100%;
  border: 1px solid #b5bbb3;
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 13px;
  color: #000;
  background: #fff;
  font-family: var(--sans);
}
#body-map-root .bm-edit-input:focus {
  outline: none;
  border-color: #5b6358;
}
#body-map-root textarea.bm-edit-input {
  min-height: 68px;
  resize: vertical;
  line-height: 1.45;
}
#body-map-root .bm-edit-actions {
  display: flex;
  gap: 6px;
}
#body-map-root .bm-edit-save,
#body-map-root .bm-edit-cancel {
  border: 1px solid #aeb3ac;
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  background: #fff;
  color: #000;
}
#body-map-root .bm-edit-save {
  background: #fff;
  border-color: #7f847d;
  color: #000;
}
#body-map-root .bm-edit-save:hover {
  background: #f6f7f5;
}

/* Force black typography across the report body for print-like clarity */
#body-map-root .report-view .report-card,
#body-map-root .report-view .report-card * {
  color: #000;
}
#body-map-root .bm-edit-cancel:hover {
  border-color: #7d8479;
}

/* ── Loading state ─── */
#body-map-root .report-loading {
  padding: 48px 20px; text-align: center;
  font-size: 14px; color: var(--muted);
  display: flex; align-items: center; justify-content: center; gap: 10px;
}
#body-map-root .report-loading-dots span {
  display: inline-block; width: 7px; height: 7px;
  border-radius: 50%; background: #70756e;
  animation: bm-dot-pulse 1.2s ease-in-out infinite;
}
#body-map-root .report-loading-dots span:nth-child(2) { animation-delay: .2s; }
#body-map-root .report-loading-dots span:nth-child(3) { animation-delay: .4s; }
@keyframes bm-dot-pulse { 0%,100%{opacity:.25;transform:scale(.8)} 50%{opacity:1;transform:scale(1)} }

@media print {
  @page { size: Letter portrait; margin: 0.55in; }
  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  #body-map-root .acs-hero,
  #body-map-root .main-section,
  #body-map-root .categories-section,
  #body-map-root .acs-chat-section {
    display: none !important;
  }
  #body-map-root .report-actions { display: none !important; }
  #body-map-root .report-question-form { display: none !important; }
  #body-map-root .report-table-wrap { max-height: none !important; overflow: visible !important; }
  #body-map-root .bm-edit-btn,
  #body-map-root .bm-edit-form { display: none !important; }
  #body-map-root .report-view {
    display: block !important;
    padding: 0 !important;
  }
  #body-map-root .report-card { box-shadow: none; border: 0; border-radius: 0; }
  #body-map-root .report-header {
    background: #fff !important;
    border-top: 2px solid #5b6358;
    border-bottom: 1px solid #8b9189;
  }
  /* Hide site nav/footer when printing from the report page */
  .bm-print-report header,
  .bm-print-report footer,
  .bm-print-report nav,
  .bm-print-report .progress-sidebar { display: none !important; }
  .bm-print-report #body-map-root .acs-hero,
  .bm-print-report #body-map-root .main-section,
  .bm-print-report #body-map-root .categories-section { display: none !important; }
  .bm-print-report #body-map-root .report-view { display: block !important; padding: 0 !important; }
}

/* ── RESPONSIVE ───────────────────────────────────────── */
@media (max-width: 820px) {
  #body-map-root .acs-hero { padding: 36px 24px; }
  #body-map-root .hero-inner { grid-template-columns: 1fr; }
  #body-map-root .hero-cta-row { width: 100%; }
  #body-map-root .hero-cta,
  #body-map-root .hero-cta-secondary { width: 100%; justify-content: center; }
  #body-map-root .main-section { padding: 32px 24px 0; }
  #body-map-root .gender-actions { width: 100%; justify-content: space-between; }
  #body-map-root .diagram-area { grid-template-columns: 1fr; }
  #body-map-root .body-wrap { margin: 0 auto; }
  #body-map-root .info-panel { position: static; }
  #body-map-root .report-view { padding: 30px 24px 50px; }
  #body-map-root .report-header,
  #body-map-root .report-content,
  #body-map-root .report-actions { padding-left: 20px; padding-right: 20px; }
  #body-map-root .report-meta,
  #body-map-root .report-meta-wrap { text-align: left; align-items: flex-start; }
  #body-map-root .report-qa-grid { grid-template-columns: 1fr; }
  #body-map-root .report-table-columns,
  #body-map-root .report-qa-columns,
  #body-map-root .report-qa-table { grid-template-columns: 1fr; }
  #body-map-root .report-notes-grid,
  #body-map-root .report-signature-grid { grid-template-columns: 1fr; }
  #body-map-root .report-table-wrap { max-height: none; }
  #body-map-root .categories-section { padding: 40px 24px 60px; }
}

/* ── BREAK OUT OF JEKYLL .WRAPPER PADDING ──────────────── */
/* The layout wraps content in .wrapper with padding. These rules
   let our full-bleed hero and categories sections escape it.    */
#body-map-root .acs-hero,
#body-map-root .categories-section {
  margin-left: -48px;
  margin-right: -48px;
  padding-left: 48px;
  padding-right: 48px;
}
@media (max-width: 768px) {
  #body-map-root .acs-hero,
  #body-map-root .categories-section {
    margin-left: -20px;
    margin-right: -20px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
/* Remove the extra top padding from .page-content since hero handles its own spacing */
.page-content {
  padding-top: 64px !important;
}
</style>

<div id="body-map-root">

<!-- ── HERO ──────────────────────────────────────────────── -->
<div class="acs-hero">
  <div class="hero-inner">
    <div>
      <div class="hero-eyebrow">American Cancer Society</div>
      <h1 class="hero-title">Every cancer.<br><em>One body.</em><br>Fully mapped.</h1>
      <p class="hero-sub">Click any glowing hotspot to explore cancer types by body region — symptoms, risk factors, and ACS resources.</p>
      <div class="hero-stats">
        <div><div class="hstat-num">80+</div><div class="hstat-label">Cancer Types</div></div>
        <div><div class="hstat-num">13</div><div class="hstat-label">Body Systems</div></div>
        <div><div class="hstat-num">17</div><div class="hstat-label">Regions</div></div>
      </div>
    </div>
    <a href="https://www.cancer.org" target="_blank" class="hero-cta">
      Visit Cancer.org
      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 7h12M8 3l5 4-5 4"/></svg>
    </a>
    <div class="hero-cta-row">
      <button class="hero-cta hero-cta-secondary" onclick="bmOpenPersonalizedReport()" type="button">
        Personalized Report
        <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 1v8M3.5 6.5L7 10l3.5-3.5M2 13h10"/></svg>
      </button>
    </div>
  </div>
</div>

<!-- ── MAIN INTERACTIVE SECTION ──────────────────────────── -->
<div class="main-section">
<div class="search-row">
  <input class="bm-search-input" id="bmSearchInput" type="text"
    placeholder="Search any cancer type — e.g. melanoma, leukemia, ovarian..."
    oninput="bmSearchCancers(this.value)"
    onblur="setTimeout(()=>bmCloseSearch(),150)" />
  <div class="bm-search-results" id="bmSearchResults"></div>
</div>
  <div class="gender-row">
    <div class="section-eyebrow">Interactive Body Map</div>
    <div class="gender-actions">
      <button class="bookmarks-trigger" type="button" onclick="bmOpenBookmarks()">
        My Bookmarks
        <span class="bookmarks-count" id="bmBookmarksCount" aria-label="Bookmark count">0</span>
      </button>
      <div class="gender-toggle">
        <button class="gender-btn active" id="bm-btn-female" onclick="bmSwitchGender('female')"> Female</button>
        <button class="gender-btn" id="bm-btn-male" onclick="bmSwitchGender('male')"> Male</button>
      </div>
    </div>
  </div>

  <div class="diagram-area fade-in">
    <!-- SVG Body -->
    <div class="body-wrap" id="bmBodyWrap">
      <div id="bm-svg-container-female">
        <img src="{{ site.baseurl }}/shinybody-main/inst/svgs/homo_sapiens_female.svg"
             id="bm-body-svg-female" style="width:300px;display:block;" />
      </div>
      <div id="bm-svg-container-male" style="display:none">
        <img src="{{ site.baseurl }}/shinybody-main/inst/svgs/homo_sapiens_male.svg"
             id="bm-body-svg-male" style="width:300px;display:block;" />
      </div>
      <!-- Hotspot overlay — uses CSS % positioning, no JS measurement needed -->
      <div class="hotspot-layer" id="bmHotspotLayer"></div>
    </div>

    <!-- Info Panel -->
    <div class="info-panel" id="bmInfoPanel">
      <div id="bmPanelContent">
        <div class="empty-state">
          <div class="empty-icon"></div>
          <div class="empty-title">Select a body region</div>
          <div class="empty-sub">Click any pulsing hotspot on the diagram to explore cancer types for that area.</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ── BOOKMARKS DRAWER ─────────────────────────────────── -->
<div class="bookmarks-overlay" id="bmBookmarksOverlay" onclick="bmCloseBookmarks()"></div>
<aside class="bookmarks-drawer" id="bmBookmarksDrawer" aria-label="My Bookmarks">
  <div class="bookmarks-head">
    <div class="bookmarks-title">My Bookmarks</div>
    <button type="button" class="bookmarks-close" onclick="bmCloseBookmarks()"></button>
  </div>
  <div class="bookmarks-body" id="bmBookmarksBody"></div>
</aside>

<!-- ── PERSONALIZED REPORT PROTOTYPE ────────────────────── -->
<div class="report-view" id="bmReportView" aria-live="polite">
  <div class="report-card" id="bmReportCard">
    <div class="report-header">
      <div>
        <div class="report-brand">American Cancer Society</div>
        <div class="report-title" id="bmReportTitle">Personalized Cancer Risk Report</div>
      </div>
      <div class="report-meta-wrap">
        <div class="report-lang-switch" aria-label="Report language">
          <button class="report-lang-btn active" type="button" data-lang="en" onclick="bmSetReportLanguage('en')">EN</button>
          <button class="report-lang-btn" type="button" data-lang="es" onclick="bmSetReportLanguage('es')">ES</button>
        </div>
        <div class="report-meta" id="bmReportMeta"></div>
      </div>
    </div>
    <div class="report-content" id="bmReportContent"></div>
    <div class="report-actions">
      <button class="report-btn" id="bmReportBackBtn" type="button" onclick="bmClosePersonalizedReport()">Back to Body Map</button>
      <button class="report-btn primary" id="bmReportDownloadBtn" type="button" onclick="bmDownloadPersonalizedReport()">Download PDF</button>
    </div>
  </div>
</div>

<!-- ── ACS CANCER CHAT ─────────────────────────────────── -->
  <div class="acs-chat-section" id="acsChatSection">
    <div class="acs-chat-inner">
      <div class="acs-chat-header">
        <h2 class="acs-chat-title">American Cancer Society · AI Assistant</h2>
        <p class="acs-chat-sub">Recieve answers about symptoms, risk factors, and ACS resources — or seek clarifications about the body map above.</p>
      </div>

      <div class="acs-chat-card">
        <div class="acs-prompts-row" id="acsPromptsRow">
          <div class="acs-prompts-label">Common questions</div>
          <div class="acs-prompts-grid" id="acsPromptsGrid"></div>
        </div>

        <label class="acs-chat-label" for="acsChatInput">Your question</label>
        <textarea id="acsChatInput" class="acs-chat-textarea"
          placeholder="e.g. What are the early signs of pancreatic cancer? What causes melanoma? How is leukemia treated?"></textarea>

        <div class="acs-chat-actions">
          <button class="acs-send-btn" id="acsSendBtn" onclick="acsChatSend()">
            Ask ACS Assistant
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 7h12M8 3l5 4-5 4"/></svg>
          </button>
          <button class="acs-clear-btn" id="acsClearBtn" onclick="acsChatClear()">Clear</button>
        </div>

        <div id="acsChatStatus" class="acs-chat-status" style="display:none;"></div>
      </div>

      <div id="acsChatLog" class="acs-chat-log" style="display:none;"></div>
    </div>
  </div>

<style>
/* ── ACS CHAT SECTION ──────────────────────────────────── */
#body-map-root .acs-chat-section {
  background: var(--cream);
  padding: 0 48px 64px;
}
#body-map-root .acs-chat-inner {
  max-width: 1100px;
  margin: 0 auto;
}
#body-map-root .acs-chat-eyebrow {
  font-size: 11px; font-weight: 600; letter-spacing: 0.15em;
  text-transform: uppercase; color: var(--muted);
  margin-bottom: 8px;
}
#body-map-root .acs-chat-title {
  font-family: var(--serif); font-size: clamp(24px, 3vw, 38px);
  font-weight: 700; color: var(--text); margin-bottom: 8px;
  line-height: 1.15;
}
#body-map-root .acs-chat-sub {
  font-size: 14px; color: var(--muted); line-height: 1.7;
  max-width: 600px; margin-bottom: 28px;
}
#body-map-root .acs-chat-header {
  padding-top: 48px;
  border-top: 1px solid var(--border);
  margin-bottom: 24px;
}
#body-map-root .acs-chat-card {
  background: var(--warm-white);
  border: 1.5px solid var(--border);
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 24px rgba(61,44,36,0.06);
}
#body-map-root .acs-chat-label {
  font-size: 12px; font-weight: 600; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--muted);
  display: block; margin-bottom: 8px;
}
#body-map-root .acs-prompts-row {
  margin-bottom: 16px;
}
#body-map-root .acs-prompts-label {
  font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--muted); margin-bottom: 8px;
}
#body-map-root .acs-prompts-grid {
  display: flex; flex-wrap: wrap; gap: 8px;
}
#body-map-root .acs-prompt-btn {
  padding: 6px 14px; background: var(--sage-pale);
  border: 1px solid rgba(138,170,140,0.35);
  border-radius: 20px; cursor: pointer; font-family: var(--sans);
  font-size: 12px; font-weight: 500; color: var(--text);
  transition: background 0.15s, border-color 0.15s;
  text-align: left;
}
#body-map-root .acs-prompt-btn:hover {
  background: var(--tan-light); border-color: var(--tan);
}
#body-map-root .acs-chat-textarea {
  width: 100%; min-height: 90px; resize: vertical;
  padding: 14px 16px; font-size: 14px; font-family: var(--sans);
  border-radius: 10px; border: 1.5px solid var(--border);
  background: var(--cream); color: var(--text);
  box-sizing: border-box; margin-bottom: 16px;
  transition: border-color 0.2s, box-shadow 0.2s;
  line-height: 1.6;
}
#body-map-root .acs-chat-textarea::placeholder { color: var(--muted); }
#body-map-root .acs-chat-textarea:focus {
  outline: none; border-color: var(--rose);
  box-shadow: 0 0 0 3px rgba(224,122,106,0.1);
}
#body-map-root .acs-chat-actions {
  display: flex; gap: 12px; align-items: center;
}
#body-map-root .acs-send-btn {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 13px 24px; background: var(--rose); color: #fff;
  font-family: var(--sans); font-weight: 700; font-size: 13px;
  letter-spacing: 0.06em; text-transform: uppercase;
  border: none; border-radius: 8px; cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  box-shadow: 0 4px 16px rgba(224,122,106,0.3);
}
#body-map-root .acs-send-btn svg { width: 13px; height: 13px; }
#body-map-root .acs-send-btn:hover:not(:disabled) {
  background: var(--terra); transform: translateY(-2px);
}
#body-map-root .acs-send-btn:disabled { opacity: 0.55; cursor: not-allowed; transform: none; }
#body-map-root .acs-clear-btn {
  padding: 13px 20px; background: transparent;
  border: 1.5px solid var(--border); border-radius: 8px;
  font-family: var(--sans); font-size: 13px; font-weight: 600;
  color: var(--muted); cursor: pointer; transition: all 0.2s;
}
#body-map-root .acs-clear-btn:hover { border-color: var(--rose); color: var(--rose); }
#body-map-root .acs-chat-status {
  margin-top: 14px; padding: 10px 14px; border-radius: 8px;
  font-size: 13px; font-weight: 500; color: var(--muted);
  background: var(--sage-pale); border: 1px solid rgba(138,170,140,0.3);
}
#body-map-root .acs-chat-status.error {
  background: var(--rose-pale); border-color: var(--rose-light);
  color: var(--terra);
}
#body-map-root .acs-chat-log {
  margin-top: 24px;
  display: flex; flex-direction: column; gap: 16px;
}
#body-map-root .acs-bubble {
  padding: 16px 20px; border-radius: 12px;
  font-size: 14px; line-height: 1.7; max-width: 85%;
}
#body-map-root .acs-bubble-user {
  background: var(--rose-pale);
  border: 1px solid var(--rose-light);
  color: var(--brown); align-self: flex-end;
  border-bottom-right-radius: 4px;
}
#body-map-root .acs-bubble-ai {
  background: var(--warm-white);
  border: 1.5px solid var(--border);
  color: var(--text); align-self: flex-start;
  border-bottom-left-radius: 4px;
  box-shadow: 0 2px 12px rgba(61,44,36,0.05);
}
#body-map-root .acs-bubble-ai strong {
  display: block; margin-bottom: 6px;
  font-size: 11px; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--rose);
}
@media (max-width: 820px) {
  #body-map-root .acs-chat-section { padding: 0 24px 48px; }
  #body-map-root .acs-chat-actions { flex-wrap: wrap; }
  #body-map-root .acs-send-btn, #body-map-root .acs-clear-btn { flex: 1; justify-content: center; }
}
</style>

<script type="module">
import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';
window._bmPythonURI    = pythonURI;
window._bmFetchOptions = fetchOptions;

const ACS_PROMPTS = [
  { text: "What are the early signs of breast cancer?",           keywords: ["breast"] },
  { text: "What causes lung cancer?",                             keywords: ["lung"] },
  { text: "How is leukemia treated?",                             keywords: ["leukemia","blood","lymph"] },
  { text: "What are the risk factors for skin cancer?",           keywords: ["skin","melanoma"] },
  { text: "What are symptoms of colon cancer?",                   keywords: ["colon","colorectal","bowel"] },
  { text: "Can cervical cancer be prevented?",                    keywords: ["cervical","hpv","ovarian"] },
  { text: "What is the survival rate for pancreatic cancer?",     keywords: ["pancreatic","pancreas"] },
  { text: "How is prostate cancer diagnosed?",                    keywords: ["prostate"] },
  { text: "What are warning signs of thyroid cancer?",            keywords: ["thyroid","endocrine"] },
  { text: "How does chemotherapy work?",                          keywords: ["chemo","treatment"] },
  { text: "What does a cancer screening involve?",                keywords: ["screening","early","detect"] },
  { text: "What is immunotherapy for cancer?",                    keywords: ["immuno","therapy","treatment"] },
  { text: "What are common symptoms of brain tumors?",            keywords: ["brain","tumor","glioblastoma"] },
  { text: "How is bladder cancer treated?",                       keywords: ["bladder","urinary"] },
  { text: "What causes kidney cancer?",                           keywords: ["kidney","renal"] },
];

const ACS_DEFAULT_PROMPTS = [
  "What are early warning signs of cancer?",
  "How does cancer spread in the body?",
  "What does cancer.org recommend for prevention?",
  "What is the difference between benign and malignant tumors?",
  "How is cancer staging determined?",
];

const ACS_USER_QUESTIONS_KEY = 'acsUserQuestions';

function acsSaveUserQuestion(question) {
  const q = String(question || '').trim();
  if (!q) return;
  let existing = [];
  try {
    const parsed = JSON.parse(localStorage.getItem(ACS_USER_QUESTIONS_KEY) || '[]');
    existing = Array.isArray(parsed) ? parsed : [];
  } catch {
    existing = [];
  }
  const next = [{ text: q, at: new Date().toISOString() }, ...existing]
    .filter((item, idx, arr) => idx === arr.findIndex(other => (other.text || '').toLowerCase() === (item.text || '').toLowerCase()))
    .slice(0, 20);
  localStorage.setItem(ACS_USER_QUESTIONS_KEY, JSON.stringify(next));
}

function acsRenderPrompts(query) {
  const grid = document.getElementById('acsPromptsGrid');
  if (!grid) return;
  const q = (query || '').toLowerCase().trim();

  let prompts;
  if (q.length >= 3) {
    const matched = ACS_PROMPTS.filter(p =>
      p.keywords.some(k => q.includes(k) || k.includes(q)) ||
      p.text.toLowerCase().includes(q)
    );
    prompts = matched.length ? matched.map(p => p.text) : ACS_DEFAULT_PROMPTS;
  } else {
    prompts = ACS_DEFAULT_PROMPTS;
  }

  grid.innerHTML = '';
  prompts.slice(0, 5).forEach(text => {
    const btn = document.createElement('button');
    btn.className = 'acs-prompt-btn';
    btn.textContent = text;
    btn.addEventListener('click', () => {
      document.getElementById('acsChatInput').value = text;
      document.getElementById('acsChatInput').focus();
    });
    grid.appendChild(btn);
  });
}

async function acsChatSend() {
  const input = document.getElementById('acsChatInput');
  const message = input.value.trim();
  if (!message) return;

  acsSaveUserQuestion(message);

  const sendBtn = document.getElementById('acsSendBtn');
  const statusEl = document.getElementById('acsChatStatus');
  const logEl = document.getElementById('acsChatLog');

  sendBtn.disabled = true;
  sendBtn.textContent = 'Thinking…';
  statusEl.textContent = 'Processing your question…';
  statusEl.className = 'acs-chat-status';
  statusEl.style.display = 'block';

  try {
    const response = await fetch(`${pythonURI}/api/acs-chat`, {
      ...fetchOptions,
      method: 'POST',
      body: JSON.stringify({ type: 'information', message })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error || `Server error ${response.status}`);
    }

    const data = await response.json();

    const userBubble = document.createElement('div');
    userBubble.className = 'acs-bubble acs-bubble-user';
    userBubble.textContent = message;

    const aiBubble = document.createElement('div');
    aiBubble.className = 'acs-bubble acs-bubble-ai';
    aiBubble.innerHTML = `<strong> ACS Info</strong>${data.answer}`;

    logEl.appendChild(userBubble);
    logEl.appendChild(aiBubble);
    logEl.style.display = 'flex';
    logEl.scrollTop = logEl.scrollHeight;

    statusEl.style.display = 'none';
    input.value = '';
    acsRenderPrompts('');

  } catch (err) {
    statusEl.textContent = 'Error: ' + err.message;
    statusEl.className = 'acs-chat-status error';
  } finally {
    sendBtn.disabled = false;
    sendBtn.innerHTML = 'Ask ACS Assistant <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 7h12M8 3l5 4-5 4"/></svg>';
  }
}

function acsChatClear() {
  const logEl = document.getElementById('acsChatLog');
  logEl.innerHTML = '';
  logEl.style.display = 'none';
  document.getElementById('acsChatInput').value = '';
  document.getElementById('acsChatStatus').style.display = 'none';
  acsRenderPrompts('');
}

document.addEventListener('DOMContentLoaded', () => {
  acsRenderPrompts('');
  const inp = document.getElementById('acsChatInput');
  inp.addEventListener('input', () => acsRenderPrompts(inp.value));
  inp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      acsChatSend();
    }
  });
});
</script>

<!-- ── CATEGORIES GRID ───────────────────────────────────── -->
<div class="categories-section">
  <div class="cat-divider" style="margin-top:48px"></div>
  <h2 class="cat-heading">Browse by Body System</h2>
  <p class="cat-sub">All 13 body systems covered — click any card to jump to that region on the diagram above.</p>
  <div class="sys-grid" id="bmSysGrid"></div>
</div>


<script>
// ─── DATA ──────────────────────────────────────────────────────────────────
const BM_SYSTEMS = {
  head_neck:    { label:'Head & Neck',           color:'#c45e4a', icon:'' },
  lung_chest:   { label:'Lung & Chest',           color:'#6a9fd8', icon:'' },
  breast:       { label:'Breast',                 color:'#d97fb8', icon:'' },
  digestive:    { label:'Digestive System',       color:'#c49a3c', icon:'' },
  urinary:      { label:'Urinary System',         color:'#7a9e7e', icon:'' },
  reproductive: { label:'Reproductive System',    color:'#a07cc5', icon:'' },
  endocrine:    { label:'Endocrine System',       color:'#d4845a', icon:'' },
  skin:         { label:'Skin',                   color:'#bca36d', icon:'' },
  bone_soft:    { label:'Bone & Soft Tissue',     color:'#7a8fa6', icon:'' },
  eye:          { label:'Eye',                    color:'#5aabb5', icon:'' },
  brain_ns:     { label:'Brain & Nervous System', color:'#9b7ec8', icon:'' },
  blood_lymph:  { label:'Blood & Lymph',          color:'#e07a6a', icon:'' },
  other:        { label:'Other Cancers',          color:'#937468', icon:'' },
};

const BM_CANCERS = {
head_neck_general:  { name:'Head and Neck Cancers',                link:'https://www.cancer.org/cancer/head-neck-cancer.html',                          tags:['Sore throat','Hoarseness','Difficulty swallowing'], desc:'A broad group of cancers affecting the mouth, throat, voice box, and sinuses. A persistent sore throat, hoarseness that won\'t go away, or trouble swallowing are key warning signs. Tobacco, alcohol, and HPV are the biggest risk factors. Treatment depends on location and stage but usually involves surgery, radiation, or chemo — often in combination.' },
laryngeal:          { name:'Laryngeal & Hypopharyngeal Cancer',     link:'https://www.cancer.org/cancer/laryngeal-hypopharyngeal-cancer.html',            tags:['Hoarseness','Sore throat','Ear pain'],              desc:'Affects the voice box and lower throat, causing hoarseness that lasts more than 2 weeks, chronic sore throat, and ear pain. Strongly linked to smoking and heavy alcohol use. Caught early it\'s very treatable with radiation or surgery. Advanced cases may require removal of the voice box, though speech therapy can help restore communication.' },
nasal:              { name:'Nasal Cavity & Paranasal Sinus Cancer', link:'https://www.cancer.org/cancer/nasal-cavity-paranasal-sinus-cancer.html',        tags:['Nasal blockage','Nosebleeds','Facial pain'],        desc:'A rare cancer that can mimic chronic sinusitis — persistent nasal blockage on one side, frequent nosebleeds, and facial pain or pressure are common signs. Often diagnosed late because symptoms are easy to dismiss. Treatment typically involves surgery to remove the tumor followed by radiation.' },
nasopharyngeal:     { name:'Nasopharyngeal Cancer',                 link:'https://www.cancer.org/cancer/nasopharyngeal-cancer.html',                      tags:['Neck lump','Hearing loss','Nasal congestion'],      desc:'Develops in the upper throat behind the nose. A painless lump in the neck is often the first noticed sign, along with hearing loss or ringing in one ear and nasal congestion. More common in Southeast Asia and linked to the Epstein-Barr virus. Radiation is the primary treatment, often combined with chemo for advanced cases.' },
oral_oropharyngeal: { name:'Oral Cavity & Oropharyngeal Cancer',    link:'https://www.cancer.org/cancer/oral-cavity-oropharyngeal-cancer.html',           tags:['Mouth sore','Jaw pain','Difficulty chewing'],       desc:'Covers cancers of the lips, tongue, gums, and throat. A mouth sore that won\'t heal, jaw pain, and difficulty chewing or swallowing are warning signs to take seriously. HPV is now a leading cause in younger non-smokers. Early-stage cancers are highly treatable with surgery or radiation — the HPV vaccine is an important prevention tool.' },
salivary:           { name:'Salivary Gland Cancer',                 link:'https://www.cancer.org/cancer/salivary-gland-cancer.html',                      tags:['Facial swelling','Facial numbness','Jaw pain'],     desc:'A rare cancer arising in the glands that produce saliva near the jaw and neck. Swelling around the jaw or cheek, facial numbness, and jaw pain are common signs. Unlike many head and neck cancers it isn\'t strongly linked to tobacco or alcohol. Surgery is the main treatment, with radiation added for higher-grade tumors.' },
thyroid:            { name:'Thyroid Cancer',                        link:'https://www.cancer.org/cancer/thyroid-cancer.html',                             tags:['Neck lump','Hoarseness','Swallowing problems'],    desc:'The most common endocrine cancer, usually appearing as a painless lump in the neck. Hoarseness that doesn\'t go away and difficulty swallowing are other warning signs. Most thyroid cancers grow slowly and are highly treatable — surgery to remove all or part of the thyroid is the main treatment, sometimes followed by radioactive iodine therapy. Regular neck self-exams can help with early detection.' },
lung:               { name:'Lung Cancer',                           link:'https://www.cancer.org/cancer/lung-cancer.html',                                tags:['Persistent cough','Chest pain','Shortness of breath'], desc:'The leading cause of cancer death in the US. A cough that won\'t go away or gets worse, chest pain, and increasing shortness of breath are key warning signs. Smoking causes about 85% of cases but non-smokers can get it too. Low-dose CT screening is recommended annually for high-risk individuals aged 50-80 who have smoked heavily. Treatment includes surgery, radiation, chemo, targeted therapy, and immunotherapy depending on type and stage.' },
lung_net:           { name:'Lung Neuroendocrine Tumor',             link:'https://www.cancer.org/cancer/lung-cancer/about/what-is.html',                  tags:['Cough','Wheezing','Flushing'],                      desc:'A less common type of lung tumor arising from neuroendocrine cells. Slow-growing carcinoid tumors may cause a chronic cough, wheezing, and flushing of the face. More aggressive large-cell neuroendocrine tumors behave more like standard lung cancer. Treatment depends on the grade and may include surgery, chemo, targeted therapy, or somatostatin analogs for carcinoid tumors.' },
mesothelioma:       { name:'Mesothelioma',                          link:'https://www.cancer.org/cancer/malignant-mesothelioma.html',                     tags:['Chest pain','Shortness of breath','Asbestos exposure'], desc:'A rare and aggressive cancer of the lining of the lungs caused almost exclusively by asbestos exposure — symptoms can take 20 to 50 years to appear after exposure. Chest pain, shortness of breath, and fluid buildup around the lungs are the main signs. Anyone with a history of asbestos exposure should inform their doctor. Treatment includes surgery, chemo, radiation, and immunotherapy.' },
thymus:             { name:'Thymus Cancer',                         link:'https://www.cancer.org/cancer/thymoma.html',                                    tags:['Chest pain','Cough','Difficulty swallowing'],       desc:'A rare cancer of the thymus gland located in the chest behind the breastbone. Chest pain, a persistent cough, and difficulty swallowing are common signs, though many are found incidentally on imaging. Some patients also develop autoimmune conditions like myasthenia gravis. Surgery to remove the thymus is the primary treatment, with radiation and chemo used for advanced cases.' },
breast:             { name:'Breast Cancer',                         link:'https://www.cancer.org/cancer/breast-cancer.html',                              tags:['Lump','Skin changes','Nipple discharge'],           desc:'The most common cancer in American women. A new lump, skin dimpling or redness, and unexpected nipple discharge are key warning signs. Risk factors include age, family history, and BRCA gene mutations. Treatment depends on stage and type and can include surgery, radiation, chemo, hormone therapy, and targeted drugs. Annual mammograms starting at 40 are strongly recommended for early detection.' },
breast_men:         { name:'Breast Cancer in Men',                  link:'https://www.cancer.org/cancer/breast-cancer-in-men.html',                       tags:['Breast lump','Nipple changes','Skin changes'],      desc:'Rare but real — men can develop breast cancer, most often as a painless lump behind the nipple. Nipple turning inward, discharge, or skin changes are other signs to watch for. BRCA2 gene mutations significantly raise the risk. Because it\'s often caught late due to low awareness, men should see a doctor immediately if they notice any breast changes. Treatment mirrors that of women — surgery, radiation, and hormone therapy.' },
anal:               { name:'Anal Cancer',                           link:'https://www.cancer.org/cancer/anal-cancer.html',                                tags:['Rectal bleeding','Anal pain','Lump near anus'],     desc:'A cancer of the anal canal increasingly linked to HPV infection. Rectal bleeding, anal pain or pressure, and a lump near the anus are the main warning signs — symptoms that are easy to mistake for hemorrhoids. HPV vaccination is an important prevention tool. Treatment is usually radiation combined with chemo rather than surgery, which preserves normal bowel function in most patients.' },
bile_duct:          { name:'Bile Duct Cancer (Cholangiocarcinoma)', link:'https://www.cancer.org/cancer/bile-duct-cancer.html',                           tags:['Jaundice','Abdominal pain','Itching'],              desc:'Develops in the tubes that carry bile from the liver to the small intestine. Jaundice (yellowing skin and eyes), persistent abdominal pain, and intense itching from bile buildup are the most common signs. Often diagnosed late because symptoms are subtle early on. Treatment usually involves surgery when possible, combined with radiation or chemo for advanced cases.' },
colorectal:         { name:'Colorectal Cancer',                     link:'https://www.cancer.org/cancer/colon-rectal-cancer.html',                        tags:['Blood in stool','Bowel changes','Cramping'],        desc:'The third most common cancer in the US. Blood in the stool, a persistent change in bowel habits, and abdominal cramping are key warning signs. Regular colonoscopies starting at age 45 can catch it early or even prevent it by removing precancerous polyps. Treatment depends on stage and includes surgery, chemo, radiation, and targeted therapy. A healthy diet and staying active reduce risk.' },
esophageal:         { name:'Esophageal Cancer',                     link:'https://www.cancer.org/cancer/esophagus-cancer.html',                           tags:['Difficulty swallowing','Weight loss','Chest pain'], desc:'Develops in the tube connecting the throat to the stomach. Difficulty swallowing that progressively worsens, unexplained weight loss, and chest pain or pressure are the main warning signs. Chronic acid reflux, Barrett\'s esophagus, smoking, and heavy alcohol use are major risk factors. Treatment usually involves surgery, chemo, and radiation — people with Barrett\'s esophagus should get regular endoscopies.' },
gallbladder:        { name:'Gallbladder Cancer',                    link:'https://www.cancer.org/cancer/gallbladder-cancer.html',                         tags:['Abdominal pain','Jaundice','Nausea'],               desc:'A rare cancer that is hard to catch early since the gallbladder is hidden behind the liver and early symptoms are easy to mistake for gallstones — abdominal pain, jaundice, and nausea are the main signs. Often discovered accidentally during gallbladder removal surgery. Surgery is the only curative option, so early detection is critical. Those with a history of gallstones or chronic inflammation are at higher risk.' },
gi_net:             { name:'GI Neuroendocrine (Carcinoid) Tumors',  link:'https://www.cancer.org/cancer/gastrointestinal-carcinoid-tumor.html',           tags:['Flushing','Diarrhea','Abdominal pain'],             desc:'Slow-growing tumors arising from hormone-producing cells in the GI tract. Episodes of facial flushing, persistent diarrhea, and abdominal pain are classic signs — sometimes grouped together as "carcinoid syndrome." Because symptoms mimic other conditions, diagnosis is often delayed. Treatment includes surgery to remove the tumor, somatostatin analogs to control symptoms, and targeted therapy for advanced cases.' },
gist:               { name:'Gastrointestinal Stromal Tumor (GIST)', link:'https://www.cancer.org/cancer/gastrointestinal-stromal-tumor.html',             tags:['Abdominal pain','GI bleeding','Early fullness'],    desc:'Rare tumors that grow in the walls of the GI tract, most often the stomach or small intestine. Abdominal pain, GI bleeding causing black or tarry stools, and feeling full after eating only a small amount are common signs. Many are found incidentally on imaging. Targeted therapy with imatinib has revolutionized treatment and is highly effective, especially for tumors with specific KIT mutations.' },
liver:              { name:'Liver Cancer',                          link:'https://www.cancer.org/cancer/liver-cancer.html',                               tags:['Abdominal pain','Jaundice','Weight loss'],          desc:'Primary liver cancer usually develops from cirrhosis, hepatitis B or C, or heavy alcohol use. Symptoms include upper abdominal pain, yellowing of the skin and eyes, and rapid unexplained weight loss. Treatment options include surgery, ablation, targeted therapy, and immunotherapy — outcomes are best when caught early, so high-risk individuals should get regular ultrasounds and AFP blood tests.' },
pancreatic:         { name:'Pancreatic Cancer',                     link:'https://www.cancer.org/cancer/pancreatic-cancer.html',                          tags:['Back pain','Jaundice','Weight loss'],               desc:'One of the hardest cancers to detect early because the pancreas is deep in the abdomen and early symptoms are vague. Upper back or abdominal pain, jaundice, and rapid unexplained weight loss are the most common signs. Smoking, diabetes, and chronic pancreatitis are key risk factors. Surgery is the only curative option but only possible in about 20% of cases — chemo and targeted therapy are used for advanced disease.' },
pancreatic_net:     { name:'Pancreatic Neuroendocrine Tumor',       link:'https://www.cancer.org/cancer/pancreatic-cancer/about/what-is-pancreatic-cancer.html', tags:['Low blood sugar','Abdominal pain','Diarrhea'], desc:'A distinct subtype arising from hormone-producing cells in the pancreas, generally slower-growing than regular pancreatic cancer. Symptoms depend on which hormones are overproduced — low blood sugar episodes, abdominal pain, and diarrhea are common. Surgery is the preferred treatment when possible. Targeted therapies like everolimus and sunitinib are effective options for advanced cases.' },
small_intestine:    { name:'Small Intestine Cancer',                link:'https://www.cancer.org/cancer/small-intestine-cancer.html',                     tags:['Abdominal pain','Weight loss','Blood in stool'],    desc:'A rare cancer with several subtypes including adenocarcinoma, carcinoid tumors, lymphoma, and sarcoma. Crampy abdominal pain, unexplained weight loss, and blood in the stool are the main warning signs. Often diagnosed late because symptoms are vague and the small intestine is hard to image. Treatment depends on subtype and stage but usually starts with surgery, followed by chemo or radiation.' },
stomach:            { name:'Stomach Cancer',                        link:'https://www.cancer.org/cancer/stomach-cancer.html',                             tags:['Indigestion','Nausea','Weight loss'],               desc:'Often mistaken for common digestive issues in early stages. Persistent indigestion, nausea, and unexplained weight loss are key warning signs — especially in people over 50. H. pylori infection, a diet high in salty or smoked foods, and smoking are major risk factors. Treatment is surgery when caught early, combined with chemo and radiation for more advanced cases.' },
bladder:            { name:'Bladder Cancer',                        link:'https://www.cancer.org/cancer/bladder-cancer.html',                             tags:['Blood in urine','Urinary frequency','Pelvic pain'], desc:'Blood in the urine — even just once — is the most important warning sign and should never be ignored. Frequent urination, burning, and pelvic pain are other symptoms that can mimic a UTI, causing delays in diagnosis. Smoking is the leading risk factor, responsible for about half of all cases. Treatment depends on stage and includes surgery, BCG immunotherapy delivered directly into the bladder, chemo, and radiation.' },
kidney:             { name:'Kidney Cancer',                         link:'https://www.cancer.org/cancer/kidney-cancer.html',                              tags:['Blood in urine','Flank pain','Lump in side'],       desc:'Renal cell carcinoma is the most common type, often discovered incidentally on imaging done for another reason. Blood in the urine, persistent pain in the side or back, and a lump in the abdomen are the main signs. Smoking, obesity, and high blood pressure are key risk factors. Surgery to remove part or all of the kidney is the primary treatment, with targeted therapy and immunotherapy used for advanced cases.' },
wilms:              { name:'Wilms Tumor',                           link:'https://www.cancer.org/cancer/wilms-tumor.html',                                tags:['Abdominal swelling','Flank pain','Fever'],          desc:'A rare kidney cancer almost exclusively affecting children, usually under age 5. A swollen abdomen — often noticed by a parent during bathing — flank pain, and fever are the most common signs. It is one of the most successfully treated childhood cancers with survival rates above 90% when caught early. Treatment combines surgery to remove the kidney, chemo, and sometimes radiation.' },
cervical:           { name:'Cervical Cancer',                       link:'https://www.cancer.org/cancer/cervical-cancer.html',                            tags:['Irregular bleeding','Pelvic pain','Discharge'],     desc:'Almost always caused by HPV. Irregular bleeding between periods or after sex, pelvic pain, and unusual discharge are key warning signs. Often has no symptoms in early stages which is why regular Pap smears are so important. The HPV vaccine is highly effective at prevention. Treatment depends on stage and includes surgery, radiation, and chemo.',                                reproGender:'female' },
endometrial:        { name:'Endometrial Cancer',                    link:'https://www.cancer.org/cancer/endometrial-cancer.html',                         tags:['Abnormal bleeding','Pelvic pain','Weight loss'],    desc:'The most common gynecologic cancer in the US, developing in the lining of the uterus. Abnormal uterine bleeding — especially after menopause — is the most important warning sign and should never be ignored. Obesity and hormone imbalances are major risk factors. Usually caught early due to noticeable symptoms. Surgery to remove the uterus is the main treatment, sometimes followed by radiation.',                                                                           reproGender:'female' },
ovarian:            { name:'Ovarian Cancer',                        link:'https://www.cancer.org/cancer/ovarian-cancer.html',                             tags:['Bloating','Pelvic pain','Early fullness'],          desc:'Known as the silent killer because early symptoms like bloating, pelvic pain, and feeling full quickly are easy to dismiss as digestive issues. There is no reliable screening test which is why most cases are caught late. BRCA1 and BRCA2 gene mutations significantly raise risk. Treatment is surgery to remove the tumor followed by chemo — genetic testing is recommended for all diagnosed patients.',                                                                          reproGender:'female' },
uterine_sarcoma:    { name:'Uterine Sarcoma',                       link:'https://www.cancer.org/cancer/uterine-sarcoma.html',                            tags:['Abnormal bleeding','Pelvic pain','Uterine mass'],   desc:'A rare and aggressive cancer that grows from the muscle or connective tissue of the uterus rather than the lining. Abnormal bleeding, pelvic pain, and a feeling of a mass in the pelvis are the main signs. It can be mistaken for fibroids. Surgery is the primary treatment, often combined with radiation and chemo. Because it is rare, treatment at a specialized gynecologic oncology center is strongly recommended.',  reproGender:'female' },
vaginal:            { name:'Vaginal Cancer',                        link:'https://www.cancer.org/cancer/vaginal-cancer.html',                             tags:['Vaginal bleeding','Discharge','Pelvic pain'],       desc:'A rare cancer of the vaginal lining, most often caused by HPV. Unusual vaginal bleeding especially after sex or after menopause, watery discharge, and pelvic pain are warning signs. Often has no symptoms early on, making regular gynecologic exams important. Treatment depends on stage and location and typically involves radiation, sometimes combined with surgery or chemo.',                                          reproGender:'female' },
vulvar:             { name:'Vulvar Cancer',                         link:'https://www.cancer.org/cancer/vulvar-cancer.html',                              tags:['Itching','Skin changes','Lump'],                    desc:'Cancer of the external female genitalia, most common in older women. Persistent itching, skin changes like thickening or color changes, and a noticeable lump or sore that won\'t heal are the main signs. HPV and lichen sclerosus are key risk factors. Caught early it is very treatable with surgery. Regular gynecologic checkups and not ignoring persistent skin changes are the best prevention.',                    reproGender:'female' },
penile:             { name:'Penile Cancer',                         link:'https://www.cancer.org/cancer/penile-cancer.html',                              tags:['Skin changes','Sores','Discharge'],                 desc:'A rare cancer most often linked to HPV and lack of circumcision. Skin changes, sores, or a rash on the penis that won\'t heal, along with unusual discharge, are warning signs that should be checked immediately. Caught early it is highly treatable with surgery. The HPV vaccine is an important prevention tool for young men.',                                                                                         reproGender:'male' },
prostate:           { name:'Prostate Cancer',                       link:'https://www.cancer.org/cancer/prostate-cancer.html',                            tags:['Urinary changes','Pelvic discomfort','Bone pain'],  desc:'The most common cancer in American men. Early stages often have no symptoms at all which is why PSA screening matters. Urinary changes like weak flow or frequent nighttime urination, pelvic discomfort, and bone pain in advanced cases are key signs. Many prostate cancers are slow-growing and managed with active surveillance. Treatment options include surgery, radiation, and hormone therapy.',                   reproGender:'male' },
testicular:         { name:'Testicular Cancer',                     link:'https://www.cancer.org/cancer/testicular-cancer.html',                          tags:['Testicular lump','Swelling','Dull ache'],           desc:'The most common cancer in men aged 15 to 35 but also one of the most treatable. A painless lump or swelling in the testicle, or a dull ache in the lower abdomen, are the main signs. Monthly self-exams are the best way to catch it early. Treatment is surgery to remove the affected testicle, often followed by chemo or radiation. Survival rates are excellent even for advanced cases.',                          reproGender:'male' },
neuroendocrine:     { name:'Neuroendocrine Tumors',                 link:'https://www.cancer.org/cancer/gastrointestinal-carcinoid-tumor.html',           tags:['Flushing','Diarrhea','Wheezing'],                   desc:'Tumors arising from hormone-producing neuroendocrine cells found throughout the body. Facial flushing, persistent diarrhea, and wheezing are classic signs when the tumor secretes excess hormones. They range from slow-growing to aggressive depending on grade. Treatment includes surgery, somatostatin analogs to control hormone symptoms, targeted therapy, and peptide receptor radionuclide therapy (PRRT) for advanced cases.' },
adrenal:            { name:'Adrenal Cancer',                        link:'https://www.cancer.org/cancer/adrenal-cancer.html',                             tags:['Abdominal pain','Hormonal changes','Weight gain'],  desc:'A rare cancer of the adrenal glands sitting above each kidney. Because these glands produce hormones, tumors can cause dramatic hormonal changes — rapid weight gain especially in the face and abdomen, high blood pressure, and excess hair growth. Abdominal pain from the growing tumor is also common. Surgery is the primary treatment, with mitotane and chemo used for advanced or recurrent cases.' },
pituitary:          { name:'Pituitary Tumors',                      link:'https://www.cancer.org/cancer/pituitary-tumors.html',                           tags:['Headaches','Vision changes','Hormonal imbalance'],  desc:'Most pituitary tumors are benign adenomas but they cause significant problems by pressing on the optic nerve or overproducing hormones. Persistent headaches, vision changes especially loss of peripheral vision, and hormonal imbalances causing weight changes, fatigue, or infertility are key signs. Treatment depends on tumor type and includes surgery through the nose, radiation, and medications to normalize hormone levels.' },
skin_general:       { name:'Skin Cancer',                           link:'https://www.cancer.org/cancer/skin-cancer.html',                                tags:['New moles','Changing spots','Non-healing sores'],   desc:'The most common cancer overall, primarily caused by UV exposure from the sun or tanning beds. Watch for new moles, spots that change in size, shape, or color, and sores that won\'t heal. Monthly self-exams and annual dermatologist checks are the best defense. When caught early, most skin cancers are highly treatable.' },
basal_squamous:     { name:'Basal & Squamous Cell Skin Cancer',     link:'https://www.cancer.org/cancer/basal-squamous-cell-skin-cancer.html',            tags:['Pearly bump','Flat lesion','Bleeding sore'],        desc:'The two most common skin cancers, both strongly linked to sun exposure. Basal cell usually appears as a pearly or waxy bump while squamous cell looks more like a flat reddish lesion or a sore that bleeds and won\'t heal. They rarely spread but should be treated promptly. Treatment is usually a minor surgical procedure to remove the growth.' },
kaposi:             { name:'Kaposi Sarcoma',                        link:'https://www.cancer.org/cancer/kaposi-sarcoma.html',                             tags:['Skin lesions','Mouth sores','Lymph node swelling'], desc:'Caused by the HHV-8 virus and most commonly seen in people with HIV/AIDS or weakened immune systems. It appears as dark purplish or brown lesions on the skin, mouth, or lymph nodes. Antiretroviral therapy to treat HIV often helps control Kaposi Sarcoma on its own. For more aggressive cases, chemo, radiation, or targeted therapy may be used.' },
skin_lymphoma:      { name:'Lymphoma of the Skin',                  link:'https://www.cancer.org/cancer/lymphoma-skin.html',                              tags:['Skin patches','Itching','Tumors on skin'],          desc:'A type of non-Hodgkin lymphoma that starts in the skin rather than the lymph nodes. It typically appears as flat, scaly patches or plaques that are intensely itchy and can be mistaken for eczema or psoriasis for years. As it progresses it can form raised tumors. Treatment ranges from skin-directed therapies like light therapy and topical creams to systemic chemo for advanced cases.' },
melanoma:           { name:'Melanoma Skin Cancer',                  link:'https://www.cancer.org/cancer/melanoma-skin-cancer.html',                       tags:['Asymmetric mole','Irregular border','Color variation'], desc:'The most dangerous skin cancer because it can spread to other organs quickly if not caught early. Use the ABCDE rule to spot it — Asymmetry, irregular Border, multiple Colors, Diameter larger than a pencil eraser, and Evolving over time. Treatment for early-stage melanoma is surgical removal. Advanced melanoma is treated with immunotherapy, targeted therapy, or a combination — outcomes have improved dramatically in recent years.' },
merkel:             { name:'Merkel Cell Skin Cancer',               link:'https://www.cancer.org/cancer/merkel-cell-skin-cancer.html',                    tags:['Firm skin lump','Reddish nodule','Fast growth'],    desc:'A rare but aggressive skin cancer linked to the Merkel cell polyomavirus and heavy UV exposure. It appears as a firm, painless, flesh-colored or reddish nodule that grows very quickly, usually on the face, head, or neck. Because it spreads fast, early treatment is critical — surgery to remove the tumor followed by radiation is standard, with immunotherapy showing strong results for advanced cases.' },
bone:               { name:'Bone Cancer',                           link:'https://www.cancer.org/cancer/bone-cancer.html',                                tags:['Bone pain','Swelling','Fractures'],                 desc:'Primary bone cancers are rare but serious. Deep, aching bone pain that worsens at night, swelling around a bone, and fractures from minor injuries are the main warning signs. Treatment depends on type and stage and usually involves surgery to remove the tumor, often combined with chemo and radiation. Getting to a specialist at a major cancer center is strongly recommended.' },
ewing:              { name:'Ewing Sarcoma',                         link:'https://www.cancer.org/cancer/ewing-tumor.html',                                tags:['Bone pain','Swelling','Fever'],                     desc:'A malignant tumor that grows in bones or surrounding soft tissue, most often in the pelvis, legs, or chest wall of children and young adults. Persistent bone pain, swelling, and unexplained fever are key signs. Treatment is intensive — usually chemo first to shrink the tumor, then surgery and/or radiation. Most patients are treated at specialized pediatric cancer centers.' },
osteosarcoma:       { name:'Osteosarcoma',                          link:'https://www.cancer.org/cancer/osteosarcoma.html',                               tags:['Bone pain','Swelling near joint','Fracture'],       desc:'The most common primary bone cancer, most often developing near the knee or shoulder in teenagers during growth spurts. Pain and swelling near a joint that gets progressively worse, and bones that break more easily than expected, are the main signs. Treatment is chemo before and after surgery to remove the tumor — limb-sparing surgery is possible in most cases.' },
rhabdomyosarcoma:   { name:'Rhabdomyosarcoma',                      link:'https://www.cancer.org/cancer/rhabdomyosarcoma.html',                           tags:['Lump or swelling','Bulging eye','Bloody discharge'], desc:'A soft tissue cancer arising from skeletal muscle cells, most common in children under 10. It can appear almost anywhere in the body — a painless but growing lump, a bulging eye, or unusual bleeding or discharge depending on location are warning signs. Treatment combines surgery, chemo, and radiation. Outcomes are best at specialized pediatric cancer centers.' },
soft_tissue:        { name:'Soft Tissue Sarcomas',                  link:'https://www.cancer.org/cancer/soft-tissue-sarcoma.html',                        tags:['Growing lump','Pain','Limited range of motion'],    desc:'A broad group of rare cancers affecting fat, muscle, blood vessels, and connective tissue anywhere in the body. A lump that is growing, deep, or larger than a golf ball should always be evaluated — most soft tissue lumps are benign but sarcomas can be aggressive. Surgery is the main treatment, often combined with radiation. A sarcoma specialist should be involved in care.' },
spinal:             { name:'Spinal Tumors',                         link:'https://www.cancer.org/cancer/brain-spinal-cord-tumors-adults.html',            tags:['Back pain','Weakness','Numbness'],                  desc:'Tumors in or around the spinal cord can be primary or spread from another cancer. Persistent back pain that worsens when lying down, progressive weakness in the arms or legs, and numbness or tingling are key warning signs. Treatment depends on the tumor type and location and may involve surgery, radiation, or chemo. Early treatment is critical to prevent permanent nerve damage.' },
eye_c:              { name:'Eye Cancer (Ocular Melanoma)',          link:'https://www.cancer.org/cancer/eye-cancer.html',                                 tags:['Vision changes','Floaters','Flashes of light'],     desc:'Develops in the pigment cells of the eye, often causing blurry vision, increasing floaters, or flashes of light — though many people have no symptoms at all early on. Usually treated with radiation therapy or surgery. Regular eye exams are key since it\'s often caught during a routine checkup.' },
retinoblastoma:     { name:'Retinoblastoma',                        link:'https://www.cancer.org/cancer/retinoblastoma.html',                             tags:['White pupil reflex','Crossed eyes','Vision problems'], desc:'A rare eye cancer almost always affecting children under 5. The most telling sign is a white glow in the pupil visible in photos taken with flash. Crossed eyes and vision problems can also appear. Highly treatable when caught early — options include laser therapy, chemo, and in some cases surgery to remove the eye.' },
brain_adults:       { name:'Brain Tumors in Adults',                link:'https://www.cancer.org/cancer/brain-spinal-cord-tumors-adults.html',            tags:['Headaches','Seizures','Cognitive changes'],         desc:'Brain tumors cause worsening morning headaches, seizures, and memory or personality changes depending on where they grow. They can start in the brain or spread from another cancer. Treatment usually involves surgery, radiation, and chemo — see a neuro-oncologist and ask about clinical trials.' },
brain_children:     { name:'Brain Tumors in Children',             link:'https://www.cancer.org/cancer/brain-spinal-cord-tumors-children.html',          tags:['Headaches','Nausea','Balance problems'],            desc:'The most common solid cancer in kids. Tumors pressing on the brain cause morning headaches, vomiting, and balance or walking issues. Treatment is usually surgery first, then radiation and chemo. A pediatric neuro-oncology team gives the best outcomes.' },
glioblastoma:       { name:'Glioblastoma',                          link:'https://www.cancer.org/cancer/glioblastoma.html',                               tags:['Severe headache','Neurological changes','Seizures'], desc:'The most aggressive brain tumor. Rapid growth causes intense headaches, new-onset seizures, and sudden weakness or speech problems. Treatment is surgery followed by radiation and temozolomide chemo. Ask your doctor about Tumor Treating Fields (TTFields) and open clinical trials.' },
medulloblastoma:    { name:'Medulloblastoma',                       link:'https://www.cancer.org/cancer/brain-spinal-cord-tumors-children.html',          tags:['Coordination problems','Headaches','Nausea'],       desc:'A fast-growing tumor in the cerebellum that disrupts balance, causing stumbling, headaches, and nausea. Most common in children and can spread through spinal fluid. Treated with surgery, then radiation to the brain and spine plus chemo. Many kids reach long-term remission.' },
meningioma:         { name:'Meningioma',                            link:'https://www.cancer.org/cancer/brain-spinal-cord-tumors-adults.html',            tags:['Headaches','Vision changes','Weakness'],            desc:'Usually benign and slow-growing. As it presses on the brain it causes dull headaches, blurred vision, or arm and leg weakness over time. Small tumors are often just monitored with regular MRIs. When treatment is needed, surgery is the main option, sometimes with radiation.' },
neuroblastoma:      { name:'Neuroblastoma',                         link:'https://www.cancer.org/cancer/neuroblastoma.html',                              tags:['Abdominal lump','Bone pain','Fatigue'],             desc:'Affects children under 5, usually starting in the adrenal glands. A firm belly lump is often the first sign, along with bone pain and extreme tiredness from the tumor crowding out healthy blood cells. Treatment depends on risk level and can include surgery, chemo, radiation, and immunotherapy.' },
leukemia_general:   { name:'Leukemia',                              link:'https://www.cancer.org/cancer/leukemia.html',                                   tags:['Fatigue','Easy bruising','Frequent infections'],    desc:'Cancer of the blood and bone marrow that disrupts the production of normal blood cells. Extreme fatigue, easy bruising or bleeding, and frequent infections that won\'t clear up are the most common signs. It can be acute (fast-growing) or chronic (slow-growing). Treatment depends on type and may include chemo, targeted therapy, immunotherapy, and stem cell transplant.' },
all:                { name:'Acute Lymphocytic Leukemia (ALL)',       link:'https://www.cancer.org/cancer/acute-lymphocytic-leukemia.html',                 tags:['Fatigue','Bone pain','Enlarged lymph nodes'],       desc:'A fast-growing leukemia most common in children and the most curable leukemia in kids with survival rates over 90%. Fatigue, bone pain, and swollen lymph nodes are key signs. In adults it is more aggressive and harder to treat. Treatment is intensive chemo over 2 to 3 years, with targeted therapy for certain subtypes. Stem cell transplant may be recommended for high-risk cases.' },
aml:                { name:'Acute Myeloid Leukemia (AML)',           link:'https://www.cancer.org/cancer/acute-myeloid-leukemia.html',                     tags:['Fatigue','Bleeding','Infections'],                  desc:'The most common acute leukemia in adults, progressing rapidly if untreated. Severe fatigue, unusual bleeding or bruising, and infections that won\'t resolve are warning signs caused by healthy blood cells being crowded out. Treatment is intensive chemo to achieve remission, often followed by a stem cell transplant. Targeted therapies are available for specific gene mutations.' },
cll:                { name:'Chronic Lymphocytic Leukemia (CLL)',     link:'https://www.cancer.org/cancer/chronic-lymphocytic-leukemia.html',               tags:['Swollen lymph nodes','Fatigue','Night sweats'],     desc:'The most common leukemia in adults in Western countries, often slow-growing and sometimes requiring no immediate treatment. Swollen lymph nodes, fatigue, and night sweats are typical signs. Many patients are diagnosed incidentally on a routine blood test with no symptoms at all. When treatment is needed, targeted oral therapies like ibrutinib have transformed outcomes significantly.' },
cml:                { name:'Chronic Myeloid Leukemia (CML)',         link:'https://www.cancer.org/cancer/chronic-myeloid-leukemia.html',                   tags:['Fatigue','Spleen enlargement','Weight loss'],       desc:'Driven by the BCR-ABL gene mutation, CML causes the bone marrow to produce too many abnormal white blood cells. Fatigue, an enlarged spleen causing left-sided abdominal fullness, and unexplained weight loss are common signs. Targeted therapy with TKI drugs like imatinib has transformed this from a life-threatening disease into one most patients manage long-term with daily medication.' },
hodgkin:            { name:'Hodgkin Lymphoma',                       link:'https://www.cancer.org/cancer/hodgkin-lymphoma.html',                           tags:['Painless swollen nodes','Night sweats','Itching'],  desc:'A cancer of the lymphatic system defined by the presence of Reed-Sternberg cells. A painless swollen lymph node in the neck or armpit is usually the first sign, along with drenching night sweats and persistent itching. One of the most treatable cancers — especially in young patients — with chemo and radiation achieving cure rates above 85% in early stages.' },
nhl:                { name:'Non-Hodgkin Lymphoma',                   link:'https://www.cancer.org/cancer/non-hodgkin-lymphoma.html',                       tags:['Swollen lymph nodes','Fever','Fatigue'],            desc:'A diverse group of blood cancers affecting the lymphatic system with many subtypes ranging from slow-growing to very aggressive. Swollen lymph nodes, fever, and fatigue are the most common signs. Treatment varies widely by subtype and may include chemo, immunotherapy, radiation, or stem cell transplant. Seeing a lymphoma specialist is important to ensure the right treatment plan.' },
myeloma:            { name:'Multiple Myeloma',                       link:'https://www.cancer.org/cancer/multiple-myeloma.html',                           tags:['Bone pain','Fatigue','Kidney problems'],            desc:'Cancer of plasma cells in the bone marrow that weakens bones and impairs kidney function. Persistent bone pain especially in the back or ribs, extreme fatigue from anemia, and kidney problems are key signs. While not currently curable, treatment with targeted therapy, immunotherapy, and stem cell transplant has dramatically extended survival. Regular monitoring is essential as it can relapse.' },
mds:                { name:'Myelodysplastic Syndromes',              link:'https://www.cancer.org/cancer/myelodysplastic-syndrome.html',                  tags:['Fatigue','Shortness of breath','Easy bleeding'],    desc:'A group of disorders where the bone marrow produces poorly formed blood cells, leading to low blood counts. Severe fatigue, shortness of breath, and easy bleeding or bruising are the main symptoms. MDS can progress to AML if untreated. Treatment ranges from supportive care like blood transfusions to chemo and stem cell transplant for higher-risk cases.' },
unknown_primary:    { name:'Cancer of Unknown Primary',              link:'https://www.cancer.org/cancer/cancer-unknown-primary.html',                    tags:['Varies by site','Unexplained symptoms','Metastatic'], desc:'When cancer is found in the body but the original site where it started cannot be determined. Symptoms vary depending on where the cancer has spread — lumps, pain, weight loss, and fatigue are common. Extensive testing including biopsies, imaging, and molecular profiling is used to guide treatment. Even without knowing the origin, targeted therapy and chemo can still be effective.' },
rare:               { name:'Rare Cancers & Pre-cancers',             link:'https://www.cancer.org/cancer.html',                                            tags:['Varies','Rare presentation','Specialized care'],   desc:'A broad category covering cancers that each account for less than 1% of all diagnoses. Because they are uncommon, they are often misdiagnosed or caught late. Symptoms vary widely by type. Treatment at a major cancer center with experience in rare cancers is strongly recommended, and clinical trials are often the best option since standard treatment protocols may not exist.' },
};

// ─── HOTSPOTS ─────────────────────────────────────────────────────────────
// px/py are CSS % positions on the body-wrap container
// Derived from actual SVG organ coordinates (viewBox 105×195)
const BM_HOTSPOTS = [
  { id:'brain',     system:'brain_ns',    label:'Brain & Nervous System',
    cancerIds:['brain_adults','brain_children','glioblastoma','medulloblastoma','meningioma','neuroblastoma'],
    px:50, py:4 },
  { id:'eye',       system:'eye',         label:'Eye',
    cancerIds:['eye_c','retinoblastoma'],
    px:56, py:8 },
  { id:'head_neck', system:'head_neck',   label:'Head & Neck',
    cancerIds:['head_neck_general','laryngeal','nasal','nasopharyngeal','oral_oropharyngeal','salivary'],
    px:50, py:12 },
  { id:'endocrine', system:'endocrine',   label:'Endocrine / Thyroid',
    cancerIds:['thyroid','pituitary','neuroendocrine','adrenal'],
    px:50, py:18 },
  { id:'lung',      system:'lung_chest',  label:'Lung & Chest',
    cancerIds:['lung','lung_net','mesothelioma','thymus'],
    px:40, py:29 },
  { id:'heart',     system:'blood_lymph', label:'Blood / Heart',
    cancerIds:['leukemia_general','all','aml','cll','cml','myeloma','mds'],
    px:50, py:25 },
  { id:'breast',    system:'breast',      label:'Breast',
    cancerIds:['breast','breast_men'],
    px:60, py:26 },
  { id:'skin',      system:'skin',        label:'Skin',
    cancerIds:['skin_general','basal_squamous','melanoma','merkel','kaposi','skin_lymphoma'],
    px:60, py:70 },
  { id:'liver',     system:'digestive',   label:'Liver & Bile Ducts',
    cancerIds:['liver','bile_duct','gallbladder'],
    px:60, py:34 },
  { id:'stomach',   system:'digestive',   label:'Stomach & Esophagus',
    cancerIds:['stomach','esophageal','gi_net','gist'],
    px:41, py:37 },
  { id:'kidney',    system:'urinary',     label:'Kidney',
    cancerIds:['kidney','wilms'],
    px:58, py:37 },
  { id:'lymph',     system:'blood_lymph', label:'Lymph Nodes',
    cancerIds:['hodgkin','nhl'],
    px:34, py:22 },
  { id:'pancreas',  system:'digestive',   label:'Pancreas & Spleen',
    cancerIds:['pancreatic','pancreatic_net','small_intestine'],
    px:52, py:42 },
  { id:'intestine', system:'digestive',   label:'Colorectal & Intestines',
    cancerIds:['colorectal','small_intestine','anal'],
    px:55, py:46 },
  { id:'bladder',   system:'urinary',     label:'Bladder',
    cancerIds:['bladder'],
    px:45, py:46 },
  { id:'repro',     system:'reproductive',label:'Reproductive System',
    cancerIds:['cervical','endometrial','ovarian','uterine_sarcoma','vaginal','vulvar','prostate','testicular','penile'],
    px:50, py:49.5 },
  { id:'bone',      system:'bone_soft',   label:'Bone & Soft Tissue',
    cancerIds:['bone','ewing','osteosarcoma','rhabdomyosarcoma','soft_tissue','spinal'],
    px:42, py:72 },
  { id:'other',     system:'other',       label:'Other / Unknown',
    cancerIds:['unknown_primary','rare'],
    px:89, py:48 },
];

// ─── GENDER STATE ──────────────────────────────────────────────────────────
let bmGender = 'female';
let bmActiveId = null;
const BM_BOOKMARKS_STORAGE_KEY = 'acsCancerBookmarks';

// ─── BOOKMARKS ─────────────────────────────────────────────────────────────
function bmGetBookmarks() {
  const raw = localStorage.getItem(BM_BOOKMARKS_STORAGE_KEY);
  try {
    const parsed = JSON.parse(raw || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function bmSetBookmarks(items) {
  localStorage.setItem(BM_BOOKMARKS_STORAGE_KEY, JSON.stringify(items));
  bmRefreshBookmarksUI();
}

function bmBookmarkPayload(cancerId) {
  const cancer = BM_CANCERS[cancerId];
  if (!cancer) return null;
  const hs = BM_HOTSPOTS.find(h => h.cancerIds.includes(cancerId));
  return {
    id: cancerId,
    name: cancer.name,
    link: cancer.link,
    description: cancer.desc || '',
    regionId: hs ? hs.id : null,
    regionLabel: hs ? hs.label : 'Body Map Region',
    savedAt: Date.now(),
  };
}

function bmIsBookmarked(cancerId) {
  return bmGetBookmarks().some(item => item.id === cancerId);
}

function bmToggleBookmark(cancerId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const bookmarks = bmGetBookmarks();
  const existingIdx = bookmarks.findIndex(item => item.id === cancerId);

  if (existingIdx >= 0) {
    bookmarks.splice(existingIdx, 1);
  } else {
    const payload = bmBookmarkPayload(cancerId);
    if (payload) bookmarks.unshift(payload);
  }

  bmSetBookmarks(bookmarks);
  if (bmActiveId) bmActivateHotspot(bmActiveId);
}

function bmRemoveBookmark(cancerId) {
  const updated = bmGetBookmarks().filter(item => item.id !== cancerId);
  bmSetBookmarks(updated);
  if (bmActiveId) bmActivateHotspot(bmActiveId);
}

function bmOpenBookmarks() {
  document.getElementById('bmBookmarksOverlay').classList.add('open');
  document.getElementById('bmBookmarksDrawer').classList.add('open');
  bmRenderBookmarksList();
}

function bmCloseBookmarks() {
  document.getElementById('bmBookmarksOverlay').classList.remove('open');
  document.getElementById('bmBookmarksDrawer').classList.remove('open');
}

function bmJumpToBookmarkRegion(regionId) {
  if (!regionId) return;
  bmCloseBookmarks();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => bmActivateHotspot(regionId), 300);
}

function bmRenderBookmarksList() {
  const body = document.getElementById('bmBookmarksBody');
  if (!body) return;
  const bookmarks = bmGetBookmarks();

  if (!bookmarks.length) {
    body.innerHTML = `<div class="bookmarks-empty">No saved cancers yet. Click the bookmark icon next to any cancer in the panel to save it here.</div>`;
    return;
  }

  body.innerHTML = bookmarks.map(item => `
    <div class="bookmark-item">
      <div class="bookmark-item-top">
        <a href="${item.link}" target="_blank" rel="noopener">${item.name}</a>
        <button class="bookmark-remove" type="button" onclick="bmRemoveBookmark('${item.id}')">Remove</button>
      </div>
      <div class="bookmark-meta">${item.regionLabel || 'Body Map Region'}</div>
      ${item.regionId ? `<button class="share-btn" type="button" style="margin-top:8px" onclick="bmJumpToBookmarkRegion('${item.regionId}')">Open on body map</button>` : ''}
    </div>
  `).join('');
}

function bmRefreshBookmarksUI() {
  const bookmarks = bmGetBookmarks();
  const count = document.getElementById('bmBookmarksCount');
  if (count) count.textContent = String(bookmarks.length);
  bmRenderBookmarksList();
}

// ─── PERSONALIZED REPORT (SINGLE-FILE PROTOTYPE) ─────────────────────────
const BM_LOGIN_SOURCE_KEYS = [
  'acsUserProfile', 'userProfile', 'profile', 'patientProfile', 'acs_profile',
  'currentUser', 'authUser', 'loginUser', 'user'
];

const BM_RISK_SOURCE_KEYS = [
  'acsRiskResults', 'riskCalculatorResults', 'riskResults', 'bodyMapRisk', 'acs_risk',
  'cancerRiskResults', 'mlCancerRiskResults'
];

const BM_REPORT_LANGUAGE_KEY = 'acsReportLanguage';
const BM_REPORT_EDIT_STORAGE_KEY = 'acsReportInlineEdits';
let bmReportLanguage = (() => {
  const saved = localStorage.getItem(BM_REPORT_LANGUAGE_KEY);
  return saved === 'es' ? 'es' : 'en';
})();

const BM_REPORT_I18N = {
  en: {
    reportTitle: 'Personalized Cancer Risk Report',
    generated: 'Generated',
    document: 'Document',
    preparedFor: 'Prepared for',
    patientSummary: 'Patient Summary',
    name: 'Name',
    firstName: 'First Name',
    lastName: 'Last Name',
    age: 'Age',
    gender: 'Gender',
    elevatedRiskRegions: 'Body Map Elevated Risk Regions',
    riskLevel: 'Risk level',
    watchFor: 'Watch for',
    noMappedCancers: 'No mapped cancers available for this region in prototype data.',
    riskCalculatorResults: 'Risk Calculator Cancer-Type Results',
    score: 'Score',
    level: 'Level',
    noCancerTypeList: 'No explicit cancer-type list was found in risk calculator storage yet.',
    riskFactorNotes: 'Personal Risk Factor Notes',
    screeningPoints: 'Recommended Screening Discussion Points',
    overallRiskScore: 'Overall Cancer Risk Score',
    timesPopAvg: 'times the population average',
    notAssessed: 'Not yet assessed — complete the Risk Calculator first.',
    riskBreakdown: 'Cancer Type Risk Breakdown',
    lifetimeRisk: 'Lifetime Risk',
    treatmentPlan: 'Current Treatment Plan',
    treatmentTrackerNote: 'Loaded from your Treatment Tracker',
    noTreatments: 'No medications found in your Treatment Tracker.',
    started: 'Started',
    ends: 'Ends',
    visitPacket: 'Prepared Visit Packet',
    bookmarkedConcerns: 'Bookmarked Cancer Concerns',
    noBookmarks: 'No bookmarked cancer concerns yet.',
    userQuestions: 'Your Questions for the Visit',
    noQuestions: 'No saved questions yet. Ask the ACS assistant to build this list.',
    adherenceSummary: 'Treatment Adherence Summary (Last 7 Days)',
    adherenceRate: 'Adherence Rate',
    dosesTaken: 'Doses Taken',
    expectedDoses: 'Expected Doses',
    noAdherenceData: 'No adherence data available yet for the last 7 days.',
    backToMap: 'Back to Body Map',
    downloadPdf: 'Download PDF',
    reportLanguage: 'Report language',
    questionnaireResponses: 'Clinical Risk Profile',
    highRiskCancers: 'High-Risk Cancer Results',
    noHighRiskCancers: 'No high-risk cancer categories were identified from your latest risk run.',
    addQuestionPrompt: 'Type a question to include in your printed report',
    addQuestionBtn: 'Add Question',
    yes: 'Yes',
    no: 'No',
    clinicalUseNote: 'Clinical Use Note: This summary is generated from user-entered questionnaire responses and ACS educational data. Use it to support provider discussion, not as a diagnosis.',
    providerNotes: 'Provider Discussion Notes',
    patientPriorities: 'Patient Priorities',
    clinicianPlan: 'Clinician Plan / Follow-Up',
    patientSignature: 'Patient Signature',
    providerSignature: 'Provider Signature',
    signatureDate: 'Date',
    notebookNotes: 'Digital Notebook Notes',
    noNotebookNotes: 'No saved chatbot notes yet. Save assistant answers using the + button in the risk chatbot.',
    categoryDemographics: 'Demographics',
    categoryLifestyle: 'Lifestyle',
    categoryMedicalRisks: 'Medical Risk Factors',
    categoryEnvironmental: 'Environmental Exposure',
    categoryCancerInterests: 'Cancer Interests',
    edit: 'Edit',
    save: 'Save',
    cancel: 'Cancel',
    emptyValue: 'Not provided',
  },
  es: {
    reportTitle: 'Informe personalizado de riesgo de cáncer',
    generated: 'Generado',
    document: 'Documento',
    preparedFor: 'Preparado para',
    patientSummary: 'Resumen del Paciente',
    name: 'Nombre',
    firstName: 'Nombre',
    lastName: 'Apellido',
    age: 'Edad',
    gender: 'Género',
    elevatedRiskRegions: 'Regiones con riesgo elevado en el mapa corporal',
    riskLevel: 'Nivel de riesgo',
    watchFor: 'Vigilar',
    noMappedCancers: 'No hay cánceres mapeados para esta región en los datos del prototipo.',
    riskCalculatorResults: 'Resultados de la calculadora de riesgo por tipo de cáncer',
    score: 'Puntaje',
    level: 'Nivel',
    noCancerTypeList: 'Aún no se encontró una lista explícita de tipos de cáncer en la calculadora de riesgo.',
    riskFactorNotes: 'Notas sobre factores de riesgo personales',
    screeningPoints: 'Puntos recomendados para conversar sobre detección',
    overallRiskScore: 'Puntuación general de riesgo de cáncer',
    timesPopAvg: 'veces el promedio de la población',
    notAssessed: 'Aún no evaluado — complete primero la Calculadora de Riesgo.',
    riskBreakdown: 'Desglose del riesgo por tipo de cáncer',
    lifetimeRisk: 'Riesgo de por vida',
    treatmentPlan: 'Plan de Tratamiento Actual',
    treatmentTrackerNote: 'Cargado desde su Seguimiento de Tratamiento',
    noTreatments: 'No se encontraron medicamentos en su Seguimiento de Tratamiento.',
    started: 'Inicio',
    ends: 'Fin',
    visitPacket: 'Paquete Preparado para la Consulta',
    bookmarkedConcerns: 'Preocupaciones de cáncer marcadas',
    noBookmarks: 'Aún no hay preocupaciones de cáncer guardadas.',
    userQuestions: 'Sus preguntas para la consulta',
    noQuestions: 'Aún no hay preguntas guardadas. Use el asistente ACS para crear esta lista.',
    adherenceSummary: 'Resumen de adherencia al tratamiento (últimos 7 días)',
    adherenceRate: 'Tasa de adherencia',
    dosesTaken: 'Dosis tomadas',
    expectedDoses: 'Dosis esperadas',
    noAdherenceData: 'Aún no hay datos de adherencia para los últimos 7 días.',
    backToMap: 'Volver al Mapa Corporal',
    downloadPdf: 'Descargar PDF',
    reportLanguage: 'Idioma del informe',
    questionnaireResponses: 'Perfil clínico de riesgo',
    highRiskCancers: 'Resultados de cáncer con riesgo alto',
    noHighRiskCancers: 'No se identificaron categorías de cáncer de alto riesgo en su cálculo más reciente.',
    addQuestionPrompt: 'Escriba una pregunta para incluirla en su informe impreso',
    addQuestionBtn: 'Agregar pregunta',
    yes: 'Sí',
    no: 'No',
    clinicalUseNote: 'Nota de uso clínico: Este resumen se genera con respuestas del cuestionario del usuario y datos educativos de ACS. Úselo para apoyar la conversación con el proveedor, no como diagnóstico.',
    providerNotes: 'Notas para discusión con el proveedor',
    patientPriorities: 'Prioridades del paciente',
    clinicianPlan: 'Plan clínico / Seguimiento',
    patientSignature: 'Firma del paciente',
    providerSignature: 'Firma del proveedor',
    signatureDate: 'Fecha',
    notebookNotes: 'Notas del cuaderno digital',
    noNotebookNotes: 'Aún no hay notas guardadas del chatbot. Guarde respuestas del asistente con el botón + en el chatbot de riesgo.',
    categoryDemographics: 'Datos demográficos',
    categoryLifestyle: 'Estilo de vida',
    categoryMedicalRisks: 'Factores de riesgo médicos',
    categoryEnvironmental: 'Exposición ambiental',
    categoryCancerInterests: 'Intereses de cáncer',
    edit: 'Editar',
    save: 'Guardar',
    cancel: 'Cancelar',
    emptyValue: 'No proporcionado',
  },
};

const BM_REPORT_TEXT_ES = {
  'Your smoking history may increase risk for lung, bladder, and other cancers.': 'Su historial de tabaquismo puede aumentar el riesgo de cáncer de pulmón, vejiga y otros cánceres.',
  'Your reported family history may increase inherited cancer risk in specific organs.': 'Sus antecedentes familiares pueden aumentar el riesgo hereditario de cáncer en órganos específicos.',
  'Weight-related factors can increase risk for colorectal, endometrial, and other cancers.': 'Los factores relacionados con el peso pueden aumentar el riesgo de cáncer colorrectal, endometrial y otros cánceres.',
  'Alcohol use can increase risk for liver, breast, and head/neck cancers.': 'El consumo de alcohol puede aumentar el riesgo de cáncer de hígado, mama y cabeza/cuello.',
  'Lower physical activity may contribute to higher risk for several cancers.': 'Una menor actividad física puede contribuir a un mayor riesgo de varios cánceres.',
  'Risk factors were inferred from your available profile and calculator data in this prototype.': 'Los factores de riesgo se infirieron de su perfil y de los datos disponibles de la calculadora en este prototipo.',
  'Colorectal screening (colonoscopy or stool-based test) starting at age 45.': 'Pruebas de detección colorrectal (colonoscopia o prueba de heces) a partir de los 45 años.',
  'Annual mammogram starting at age 40.': 'Mamografía anual a partir de los 40 años.',
  'Cervical cancer screening (Pap/HPV) per clinician schedule.': 'Prueba de detección de cáncer cervicouterino (Papanicolaou/VPH) según el calendario clínico.',
  'Discuss PSA testing for prostate cancer with your doctor.': 'Hable con su médico sobre la prueba de PSA para cáncer de próstata.',
  'Ask about annual low-dose CT screening if smoking history is significant.': 'Hable sobre una tomografía computarizada anual de baja dosis si su historial de tabaquismo es importante.',
  'Annual full-body skin exam and monthly self-check of changing moles/spots.': 'Examen anual de piel de cuerpo completo y autoevaluación mensual de lunares/manchas cambiantes.',
  'If high-risk for liver disease, discuss liver ultrasound and blood tests.': 'Si tiene alto riesgo de enfermedad hepática, hable sobre ecografía de hígado y análisis de sangre.',
  'Discuss age-appropriate routine cancer screening with your primary care doctor.': 'Hable con su médico de atención primaria sobre pruebas rutinarias de detección de cáncer según su edad.',
  Male: 'Masculino',
  Female: 'Femenino',
  'Not provided': 'No proporcionado',
  'ACS Patient': 'Paciente ACS',
};

function bmReportText(key) {
  const langSet = BM_REPORT_I18N[bmReportLanguage] || BM_REPORT_I18N.en;
  return langSet[key] || BM_REPORT_I18N.en[key] || key;
}

function bmTranslateReportSentence(text) {
  if (bmReportLanguage !== 'es') return text;
  return BM_REPORT_TEXT_ES[text] || text;
}

function bmUpdateReportLanguageUI() {
  const switchWrap = document.querySelector('#body-map-root .report-lang-switch');
  if (switchWrap) {
    switchWrap.setAttribute('aria-label', bmReportText('reportLanguage'));
  }
  document.querySelectorAll('#body-map-root .report-lang-btn').forEach(btn => {
    const active = btn.getAttribute('data-lang') === bmReportLanguage;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

let _bmCachedReportData = null;
let _bmReportInlineEdits = bmReadReportInlineEdits();

function bmReadReportInlineEdits() {
  try {
    const raw = localStorage.getItem(BM_REPORT_EDIT_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function bmWriteReportInlineEdits() {
  localStorage.setItem(BM_REPORT_EDIT_STORAGE_KEY, JSON.stringify(_bmReportInlineEdits));
}

function bmGetInlineEditedValue(editKey, fallback) {
  const key = String(editKey || '');
  if (!key) return fallback;
  if (Object.prototype.hasOwnProperty.call(_bmReportInlineEdits, key)) {
    return String(_bmReportInlineEdits[key] ?? '');
  }
  return fallback;
}

function bmEscapeHtml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function bmRenderEditableField({ editKey, value, multiline = false }) {
  const resolved = String(bmGetInlineEditedValue(editKey, value) || '').trim();
  const display = resolved || bmReportText('emptyValue');
  const inputHtml = multiline
    ? `<textarea class="bm-edit-input">${bmEscapeHtml(resolved)}</textarea>`
    : `<input class="bm-edit-input" type="text" value="${bmEscapeHtml(resolved)}" />`;

  return `
    <div class="bm-editable-field" data-edit-key="${bmEscapeHtml(editKey)}" data-edit-multiline="${multiline ? '1' : '0'}">
      <span class="bm-edit-display">${bmEscapeHtml(display)}</span>
      <button type="button" class="bm-edit-btn">${bmReportText('edit')}</button>
      <div class="bm-edit-form">
        ${inputHtml}
        <div class="bm-edit-actions">
          <button type="button" class="bm-edit-save">${bmReportText('save')}</button>
          <button type="button" class="bm-edit-cancel">${bmReportText('cancel')}</button>
        </div>
      </div>
    </div>
  `;
}

function bmBindReportEditableFields() {
  const wrappers = document.querySelectorAll('#body-map-root .bm-editable-field');
  wrappers.forEach((wrap) => {
    const editBtn = wrap.querySelector('.bm-edit-btn');
    const form = wrap.querySelector('.bm-edit-form');
    const display = wrap.querySelector('.bm-edit-display');
    const input = wrap.querySelector('.bm-edit-input');
    const saveBtn = wrap.querySelector('.bm-edit-save');
    const cancelBtn = wrap.querySelector('.bm-edit-cancel');
    const editKey = wrap.getAttribute('data-edit-key') || '';

    if (!editBtn || !form || !display || !input || !saveBtn || !cancelBtn || !editKey) return;

    const beginEdit = () => {
      const isTextarea = input.tagName.toLowerCase() === 'textarea';
      const current = bmGetInlineEditedValue(editKey, display.textContent || '');
      if (isTextarea) {
        input.value = current;
      } else {
        input.value = current;
      }
      display.style.display = 'none';
      editBtn.style.display = 'none';
      form.style.display = 'grid';
      input.focus();
      if (typeof input.select === 'function') input.select();
    };

    const endEdit = () => {
      form.style.display = 'none';
      display.style.display = '';
      editBtn.style.display = '';
    };

    editBtn.addEventListener('click', beginEdit);

    saveBtn.addEventListener('click', () => {
      const next = String(input.value || '').trim();
      _bmReportInlineEdits[editKey] = next;
      bmWriteReportInlineEdits();
      display.textContent = next || bmReportText('emptyValue');
      endEdit();
    });

    cancelBtn.addEventListener('click', () => {
      endEdit();
    });

    input.addEventListener('keydown', (event) => {
      if (input.tagName.toLowerCase() !== 'textarea' && event.key === 'Enter') {
        event.preventDefault();
        saveBtn.click();
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        cancelBtn.click();
      }
    });
  });
}

function bmSetReportLanguage(lang) {
  const normalized = lang === 'es' ? 'es' : 'en';
  if (normalized === bmReportLanguage) { bmUpdateReportLanguageUI(); return; }
  bmReportLanguage = normalized;
  localStorage.setItem(BM_REPORT_LANGUAGE_KEY, bmReportLanguage);
  bmUpdateReportLanguageUI();
  if (document.getElementById('body-map-root')?.classList.contains('report-mode') && _bmCachedReportData) {
    bmRenderPersonalizedReport(_bmCachedReportData);
  }
}

const BM_REGION_ALIASES = {
  brain: 'brain', brain_ns: 'brain', nervous: 'brain',
  eye: 'eye',
  head: 'head_neck', neck: 'head_neck', head_neck: 'head_neck',
  endocrine: 'endocrine', thyroid: 'endocrine',
  lung: 'lung', chest: 'lung', lung_chest: 'lung',
  blood: 'heart', heart: 'heart', leukemia: 'heart',
  breast: 'breast',
  skin: 'skin', melanoma: 'skin',
  liver: 'liver', bile: 'liver', gallbladder: 'liver',
  stomach: 'stomach', esophagus: 'stomach',
  kidney: 'kidney', renal: 'kidney',
  lymph: 'lymph', lymphoma: 'lymph',
  pancreas: 'pancreas',
  intestine: 'intestine', colon: 'intestine', colorectal: 'intestine',
  bladder: 'bladder',
  reproductive: 'repro', repro: 'repro', uterus: 'repro', ovarian: 'repro', prostate: 'repro', testicular: 'repro', cervical: 'repro',
  bone: 'bone', spinal: 'bone', soft_tissue: 'bone',
  other: 'other', rare: 'other', unknown: 'other',
};

function bmSafeParseJSON(raw) {
  if (!raw || typeof raw !== 'string') return null;
  try { return JSON.parse(raw); } catch { return null; }
}

function bmReadStorageObject(candidates) {
  for (const key of candidates) {
    const parsedLocal = bmSafeParseJSON(localStorage.getItem(key));
    if (parsedLocal && typeof parsedLocal === 'object') return parsedLocal;
    const parsedSession = bmSafeParseJSON(sessionStorage.getItem(key));
    if (parsedSession && typeof parsedSession === 'object') return parsedSession;
  }
  return {};
}

function bmHasMeaningfulData(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim() !== '';
  if (typeof value === 'number') return Number.isFinite(value);
  if (typeof value === 'boolean') return true;
  if (Array.isArray(value)) return value.some(item => bmHasMeaningfulData(item));
  if (typeof value === 'object') {
    const keys = Object.keys(value);
    if (!keys.length) return false;
    return keys.some(key => bmHasMeaningfulData(value[key]));
  }
  return false;
}

function bmReadUserQuestions() {
  try {
    const parsed = JSON.parse(localStorage.getItem(ACS_USER_QUESTIONS_KEY) || '[]');
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map(item => typeof item === 'string' ? { text: item, at: '' } : item)
      .filter(item => item && typeof item.text === 'string' && item.text.trim())
      .slice(0, 10);
  } catch {
    return [];
  }
}

function bmReadProfileNotes() {
  try {
    const parsed = JSON.parse(localStorage.getItem('acsProfileNotes') || '[]');
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map(item => typeof item === 'string' ? { text: item, at: '' } : item)
      .filter(item => item && typeof item.text === 'string' && item.text.trim())
      .slice(0, 20);
  } catch {
    return [];
  }
}

function bmExpectedDosesForDate(treatments, dt) {
  const ms = dt.getTime();
  let total = 0;
  (treatments || []).forEach(t => {
    const s = t.start_date ? new Date(t.start_date + 'T00:00:00').getTime() : 0;
    const e = t.end_date   ? new Date(t.end_date   + 'T00:00:00').getTime() : Infinity;
    if (ms < s || ms > e) return;

    if (t.frequency === 'as_needed') return;
    if (t.frequency === 'weekly') {
      if (!t.start_date) return;
      const startDow = new Date(t.start_date + 'T00:00:00').getDay();
      if (dt.getDay() !== startDow) return;
    }

    const perDay = (Array.isArray(t.times) && t.times.length > 0) ? t.times.length : 1;
    total += perDay;
  });
  return total;
}

async function bmComputeAdherenceSummary(pyURI, fetchOpts, treatments) {
  if (!pyURI || !Array.isArray(treatments) || treatments.length === 0) {
    return { expected: 0, taken: 0, pct: null };
  }

  let expected = 0;
  let taken = 0;

  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const dt = new Date(today);
    dt.setDate(today.getDate() - i);
    const ds = dt.toISOString().slice(0, 10);
    expected += bmExpectedDosesForDate(treatments, dt);

    try {
      const r = await fetch(`${pyURI}/api/treatment/log?date=${ds}`, fetchOpts);
      if (!r.ok) continue;
      const logs = await r.json();
      if (!Array.isArray(logs)) continue;
      taken += logs.filter(l => l && l.taken).length;
    } catch {}
  }

  if (expected <= 0) return { expected: 0, taken: 0, pct: null };
  return {
    expected,
    taken: Math.min(taken, expected),
    pct: Math.round((Math.min(taken, expected) / expected) * 100)
  };
}

function bmLooksLoggedInFromNav() {
  const loginArea = document.getElementById('loginArea');
  if (!loginArea) return false;
  const hasDropButton = !!loginArea.querySelector('.dropbtn');
  if (hasDropButton) return true;
  const text = (loginArea.textContent || '').trim().toLowerCase();
  if (!text) return false;
  return !/^login$/.test(text);
}

function bmHasLoginForReport() {
  const profileSource = bmReadStorageObject(BM_LOGIN_SOURCE_KEYS);
  const storageSignal = bmHasMeaningfulData(profileSource);
  const windowSignal = !!(window.user && (window.user.name || window.user.uid || window.user.username));
  const navSignal = bmLooksLoggedInFromNav();
  return storageSignal || windowSignal || navSignal;
}

function bmHasCompletedRiskForReport() {
  const riskSource = bmReadStorageObject(BM_RISK_SOURCE_KEYS);
  return bmHasMeaningfulData(riskSource);
}

function bmValidateReportReadiness() {
  return {
    ready: true,
    needsLogin: false,
    needsRisk: false,
  };
}

function bmRedirectToRiskCalculator({ needsLogin, needsRisk }) {
  let message = 'Please complete your risk calculator before opening Personalized Report. Taking you there now.';
  alert(message);
  window.location.href = '{{ site.baseurl }}/cancerrisk';
}

function bmPickFirstDefined(source, keys, fallback = '') {
  for (const key of keys) {
    if (source && source[key] !== undefined && source[key] !== null && source[key] !== '') {
      return source[key];
    }
  }
  return fallback;
}

function bmNormalizeGenderLabel(rawGender) {
  const val = String(rawGender || '').trim().toLowerCase();
  if (!val) return 'Not provided';
  if (val === 'female' || val === 'f' || val === 'woman' || val === 'women') return 'Female';
  if (val === 'male' || val === 'm' || val === 'man' || val === 'men') return 'Male';
  return 'Not provided';
}

const BM_RISK_QUESTION_FIELDS = [
  ['age', 'Age', 'categoryDemographics'],
  ['sex', 'Biological Sex', 'categoryDemographics'],
  ['race', 'Race / Ethnicity', 'categoryDemographics'],
  ['smoking_status', 'Smoking Status', 'categoryLifestyle'],
  ['pack_years', 'Pack Years', 'categoryLifestyle'],
  ['bmi_category', 'BMI Category', 'categoryLifestyle'],
  ['alcohol_consumption', 'Alcohol Consumption', 'categoryLifestyle'],
  ['physical_activity', 'Physical Activity', 'categoryLifestyle'],
  ['diet_quality', 'Diet Quality', 'categoryLifestyle'],
  ['family_history', 'Family History of Cancer', 'categoryMedicalRisks'],
  ['diabetes', 'Type 2 Diabetes', 'categoryMedicalRisks'],
  ['hepatitis', 'Hepatitis B/C', 'categoryMedicalRisks'],
  ['hpv', 'HPV Infection', 'categoryMedicalRisks'],
  ['h_pylori', 'H. pylori Infection', 'categoryMedicalRisks'],
  ['ibd', 'Inflammatory Bowel Disease', 'categoryMedicalRisks'],
  ['radiation_history', 'Prior Radiation Therapy', 'categoryMedicalRisks'],
  ['immunosuppression', 'Immunosuppression', 'categoryMedicalRisks'],
  ['precancerous_lesions', 'Precancerous Lesions', 'categoryMedicalRisks'],
  ['occupational_exposure', 'Occupational Chemical Exposure', 'categoryEnvironmental'],
  ['uv_exposure', 'High UV / Sun Exposure', 'categoryEnvironmental'],
  ['selected_cancer_types', 'Selected Cancer Types', 'categoryCancerInterests'],
  ['cancer_types', 'Selected Cancer Types', 'categoryCancerInterests'],
];

function bmFormatQuestionValue(value) {
  if (Array.isArray(value)) return value.length ? value.join(', ') : '';
  if (typeof value === 'boolean') return value ? bmReportText('yes') : bmReportText('no');
  if (value === null || value === undefined) return '';
  return String(value).trim();
}

function bmBuildQuestionnaireResponses(profile) {
  const rowsByCategory = new Map();
  const seen = new Set();

  BM_RISK_QUESTION_FIELDS.forEach(([key, label, categoryKey]) => {
    if (!profile || seen.has(label)) return;
    const raw = profile[key];
    const formatted = bmFormatQuestionValue(raw);
    if (!formatted) return;
    seen.add(label);
    if (!rowsByCategory.has(categoryKey)) rowsByCategory.set(categoryKey, []);
    rowsByCategory.get(categoryKey).push({ label, value: formatted, editKey: `profile.${key}` });
  });

  const orderedCategories = [
    'categoryDemographics',
    'categoryLifestyle',
    'categoryMedicalRisks',
    'categoryEnvironmental',
    'categoryCancerInterests'
  ];

  return orderedCategories
    .map(categoryKey => ({
      title: bmReportText(categoryKey),
      rows: rowsByCategory.get(categoryKey) || []
    }))
    .filter(group => group.rows.length > 0);
}

function bmNormalizeRegionKey(input) {
  const raw = String(input || '').toLowerCase().replace(/[^a-z_ ]/g, '').trim();
  if (!raw) return null;
  const direct = BM_REGION_ALIASES[raw];
  if (direct) return direct;
  const collapsed = raw.replace(/\s+/g, '_');
  if (BM_REGION_ALIASES[collapsed]) return BM_REGION_ALIASES[collapsed];
  const hs = BM_HOTSPOTS.find(h => h.label.toLowerCase().includes(raw));
  return hs ? hs.id : null;
}

function bmExtractElevatedRegions(riskData) {
  const elevated = new Map();

  // ── Handle actual ML API cancer_type_risks output ──────────────────────
  if (riskData?.cancer_type_risks && typeof riskData.cancer_type_risks === 'object') {
    Object.entries(riskData.cancer_type_risks).forEach(([cancerType, info]) => {
      if (!info || info.applicable === false) return;
      const level = String(info.risk_level || '').toLowerCase();
      if (!['high', 'moderate'].includes(level)) return;
      const mapped = bmNormalizeRegionKey(cancerType.replace(/_/g, ' '));
      if (mapped && !elevated.has(mapped)) {
        elevated.set(mapped, {
          regionId: mapped,
          level,
          score: info.relative_risk ? info.relative_risk / 4 : 0,
        });
      }
    });
  }

  if (Array.isArray(riskData?.regions)) {
    riskData.regions.forEach(region => {
      const score = Number(region.score ?? region.riskScore ?? 0);
      const levelRaw = String(region.level ?? region.risk ?? '').toLowerCase();
      const isElevated = score >= 0.6 || ['high', 'elevated', 'increased', 'above_average'].includes(levelRaw);
      const mapped = bmNormalizeRegionKey(region.id || region.region || region.name);
      if (mapped && isElevated) {
        elevated.set(mapped, {
          regionId: mapped,
          level: levelRaw || (score ? `${Math.round(score * 100)}%` : 'elevated'),
          score,
        });
      }
    });
  }

  if (riskData && typeof riskData === 'object' && !Array.isArray(riskData)) {
    Object.entries(riskData).forEach(([key, value]) => {
      const mapped = bmNormalizeRegionKey(key);
      if (!mapped) return;

      if (typeof value === 'string') {
        const levelRaw = value.toLowerCase();
        if (['high', 'elevated', 'increased', 'above_average'].includes(levelRaw)) {
          elevated.set(mapped, { regionId: mapped, level: levelRaw, score: 0 });
        }
        return;
      }

      if (value && typeof value === 'object') {
        const score = Number(value.score ?? value.riskScore ?? 0);
        const levelRaw = String(value.level ?? value.risk ?? '').toLowerCase();
        const isElevated = score >= 0.6 || ['high', 'elevated', 'increased', 'above_average'].includes(levelRaw);
        if (isElevated) {
          elevated.set(mapped, {
            regionId: mapped,
            level: levelRaw || (score ? `${Math.round(score * 100)}%` : 'elevated'),
            score,
          });
        }
      }
    });
  }

  return Array.from(elevated.values());
}

function bmExtractHighRiskCancers(riskData) {
  const high = [];
  if (!riskData?.cancer_type_risks || typeof riskData.cancer_type_risks !== 'object') return high;

  Object.values(riskData.cancer_type_risks).forEach(info => {
    if (!info || info.applicable === false) return;
    if (String(info.risk_level || '').toLowerCase() !== 'high') return;
    const label = String(info.label || '').trim();
    if (label) high.push(label);
  });

  return [...new Set(high)];
}

function bmDeriveRiskFactorNotes(profile, riskData) {
  // Use actual ML model risk factors if available
  if (Array.isArray(riskData?.risk_factors) && riskData.risk_factors.length > 0) {
    return riskData.risk_factors
      .filter(rf => rf.impact === 'high' || rf.impact === 'moderate')
      .slice(0, 8)
      .map(rf => `${rf.factor}: ${rf.detail}`);
  }

  const factors = [];
  const aggregate = [];

  const pushText = v => {
    if (!v) return;
    if (Array.isArray(v)) aggregate.push(...v.map(x => String(x).toLowerCase()));
    else aggregate.push(String(v).toLowerCase());
  };

  pushText(profile.smoking);
  pushText(profile.tobaccoUse);
  pushText(profile.familyHistory);
  pushText(profile.bmi);
  pushText(profile.activityLevel);
  pushText(profile.alcoholUse);
  pushText(profile.exposure);
  pushText(riskData.riskFactors);
  pushText(riskData.factors);

  const all = aggregate.join(' | ');
  if (all.includes('smok')) factors.push('Your smoking history may increase risk for lung, bladder, and other cancers.');
  if (all.includes('family')) factors.push('Your reported family history may increase inherited cancer risk in specific organs.');
  if (all.includes('obes') || all.includes('high bmi')) factors.push('Weight-related factors can increase risk for colorectal, endometrial, and other cancers.');
  if (all.includes('alcohol')) factors.push('Alcohol use can increase risk for liver, breast, and head/neck cancers.');
  if (all.includes('inactive') || all.includes('sedentary')) factors.push('Lower physical activity may contribute to higher risk for several cancers.');

  if (factors.length === 0) {
    factors.push('Risk factors were inferred from your available profile and calculator data in this prototype.');
  }

  return factors;
}

function bmGetRecommendedScreenings(profile, elevatedRegions) {
  const age = Number(profile.age) || 0;
  const gender = bmNormalizeGenderLabel(profile.gender).toLowerCase();
  const regionIds = new Set(elevatedRegions.map(r => r.regionId));
  const screenings = [];

  if (age >= 45) screenings.push('Colorectal screening (colonoscopy or stool-based test) starting at age 45.');
  if (age >= 40 && gender === 'female') screenings.push('Annual mammogram starting at age 40.');
  if (age >= 21 && gender === 'female') screenings.push('Cervical cancer screening (Pap/HPV) per clinician schedule.');
  if (age >= 50 && gender === 'male') screenings.push('Discuss PSA testing for prostate cancer with your doctor.');
  if (age >= 50 && regionIds.has('lung')) screenings.push('Ask about annual low-dose CT screening if smoking history is significant.');
  if (regionIds.has('skin')) screenings.push('Annual full-body skin exam and monthly self-check of changing moles/spots.');
  if (regionIds.has('liver')) screenings.push('If high-risk for liver disease, discuss liver ultrasound and blood tests.');

  if (screenings.length === 0) {
    screenings.push('Discuss age-appropriate routine cancer screening with your primary care doctor.');
  }
  return screenings;
}

async function bmFetchReportData() {
  // ── 1. Read risk results from localStorage (saved by cancerrisk.md) ────
  const riskSource = bmReadStorageObject(BM_RISK_SOURCE_KEYS);
  const profileStorageSource = bmReadStorageObject(BM_LOGIN_SOURCE_KEYS);

  // ── 2. Fetch real user profile + treatments from backend ────────────────
  const pyURI    = window._bmPythonURI;
  const fetchOpts = window._bmFetchOptions;
  let apiProfile   = {};
  let apiTreatments = [];

  if (pyURI) {
    try {
      const r = await fetch(`${pyURI}/api/id`, fetchOpts);
      if (r.ok) apiProfile = await r.json();
    } catch(_) {}
    try {
      const r = await fetch(`${pyURI}/api/treatments`, fetchOpts);
      if (r.ok) apiTreatments = await r.json();
    } catch(_) {}
  }

  // ── 3. Resolve identity fields ──────────────────────────────────────────
  const fullName = apiProfile.name
    || bmPickFirstDefined(profileStorageSource, ['fullName', 'name', 'displayName'], 'ACS Patient');
  const nameParts = String(fullName || '').trim().split(/\s+/).filter(Boolean);
  const firstName = nameParts[0] || 'ACS';
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : 'Patient';
  const ageRaw = riskSource?.profile?.age || apiProfile.age
    || bmPickFirstDefined(profileStorageSource, ['age'], 'Not provided');
  const age = ageRaw || 'Not provided';
  const genderRaw = riskSource?.profile?.sex || apiProfile.gender
    || bmPickFirstDefined(profileStorageSource, ['gender', 'sex'], bmGender);
  const genderLabel = bmNormalizeGenderLabel(genderRaw);

  // ── 4. Derive report sections ───────────────────────────────────────────
  const riskProfile = { ...(riskSource?.profile || {}), ...profileStorageSource };
  const elevatedRegions = bmExtractElevatedRegions(riskSource);
  const riskFactorNotes = bmDeriveRiskFactorNotes(riskProfile, riskSource);
  const screeningRecommendations = bmGetRecommendedScreenings({ ...riskProfile, age, gender: genderLabel }, elevatedRegions);
  const calculatorCancers = bmExtractRiskCalculatorCancers(riskSource, elevatedRegions);
  const highRiskCancers = bmExtractHighRiskCancers(riskSource);
  const questionnaireResponses = bmBuildQuestionnaireResponses(riskSource?.profile || {});
  const bookmarks = bmGetBookmarks();
  const userQuestions = bmReadUserQuestions();
  const profileNotes = bmReadProfileNotes();
  const adherenceSummary = await bmComputeAdherenceSummary(pyURI, fetchOpts, apiTreatments);

  return {
    fullName,
    firstName,
    lastName,
    age,
    gender: genderLabel,
    dateISO: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    riskSource,
    elevatedRegions,
    calculatorCancers,
    highRiskCancers,
    questionnaireResponses,
    riskFactorNotes,
    screeningRecommendations,
    bookmarks,
    userQuestions,
    profileNotes,
    adherenceSummary,
    apiTreatments: Array.isArray(apiTreatments) ? apiTreatments : [],
    overallRR: riskSource?.overall_relative_risk ?? null,
    cancerTypeRisks: riskSource?.cancer_type_risks ?? null,
    riskFactorsRaw: riskSource?.risk_factors ?? [],
    hasRiskData: !!(riskSource && bmHasMeaningfulData(riskSource)),
  };
}

function bmSaveQuestionFromReport(questionText) {
  const q = String(questionText || '').trim();
  if (!q) return;
  let existing = [];
  try {
    const parsed = JSON.parse(localStorage.getItem(ACS_USER_QUESTIONS_KEY) || '[]');
    existing = Array.isArray(parsed) ? parsed : [];
  } catch {
    existing = [];
  }

  const next = [{ text: q, at: new Date().toISOString() }, ...existing]
    .filter((item, idx, arr) => idx === arr.findIndex(other => (other.text || '').toLowerCase() === (item.text || '').toLowerCase()))
    .slice(0, 20);
  localStorage.setItem(ACS_USER_QUESTIONS_KEY, JSON.stringify(next));
}

function bmAddQuestionFromReport() {
  const input = document.getElementById('bmReportQuestionInput');
  if (!input) return;
  const question = input.value.trim();
  if (!question) return;

  bmSaveQuestionFromReport(question);
  input.value = '';

  const savedQuestions = bmReadUserQuestions();
  const listWrap = document.getElementById('bmReportQuestionsList');

  if (listWrap) {
    listWrap.innerHTML = savedQuestions.length
      ? `<ul class="report-styled-list">${savedQuestions.map(q => `<li>${bmEscapeHtml(q.text)}</li>`).join('')}</ul>`
      : `<div class="report-empty-state">${bmReportText('noQuestions')}</div>`;
  }

  if (_bmCachedReportData) {
    _bmCachedReportData.userQuestions = savedQuestions;
  }
}

window.bmAddQuestionFromReport = bmAddQuestionFromReport;

function bmBindReportQuestionForm() {
  const input = document.getElementById('bmReportQuestionInput');
  const button = document.getElementById('bmReportQuestionAddBtn');
  if (!input || !button) return;

  button.onclick = () => bmAddQuestionFromReport();
  input.onkeydown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      bmAddQuestionFromReport();
    }
  };
}

function bmBindReportQuestionDelegates() {
  if (window._bmQuestionDelegatesBound) return;
  window._bmQuestionDelegatesBound = true;

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target.id === 'bmReportQuestionAddBtn') {
      event.preventDefault();
      bmAddQuestionFromReport();
    }
  });

  document.addEventListener('keydown', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target.id === 'bmReportQuestionInput' && event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      bmAddQuestionFromReport();
    }
  });
}

bmBindReportQuestionDelegates();

function bmExtractRiskCalculatorCancers(riskData, elevatedRegions = []) {
  const extracted = [];
  const seen = new Set();

  const addEntry = (name, score, level, sourceId) => {
    const cleanName = String(name || '').trim();
    if (!cleanName) return;
    const key = cleanName.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    extracted.push({
      name: cleanName,
      score: Number.isFinite(Number(score)) ? Number(score) : null,
      level: level ? String(level) : null,
      sourceId: sourceId || null,
    });
  };

  const tryObjectAsCancer = (idOrName, value) => {
    if (!value || typeof value !== 'object') return;
    const score = value.score ?? value.riskScore ?? value.probability ?? value.percent;
    const level = value.level ?? value.risk ?? value.category ?? value.label;
    const isRiskish = score !== undefined || level !== undefined || value.isElevated || value.selected || value.recommended;
    if (!isRiskish) return;

    const byId = BM_CANCERS[idOrName];
    const name = value.name || value.cancer || value.cancerType || value.type || (byId ? byId.name : idOrName);
    addEntry(name, score, level, byId ? idOrName : null);
  };

  const knownArrays = [
    riskData?.cancers,
    riskData?.cancerTypes,
    riskData?.results,
    riskData?.predictions,
    riskData?.topRisks,
    riskData?.recommendations,
  ].filter(Array.isArray);

  knownArrays.forEach(arr => {
    arr.forEach(item => {
      if (typeof item === 'string') {
        const byId = BM_CANCERS[item];
        addEntry(byId ? byId.name : item, null, null, byId ? item : null);
        return;
      }
      if (!item || typeof item !== 'object') return;
      const id = item.id || item.cancerId || item.key;
      const byId = id && BM_CANCERS[id] ? BM_CANCERS[id] : null;
      const name = item.name || item.cancer || item.cancerType || item.type || (byId ? byId.name : id);
      addEntry(name, item.score ?? item.riskScore ?? item.probability ?? item.percent, item.level ?? item.risk ?? item.category, byId ? id : null);
    });
  });

  if (riskData && typeof riskData === 'object' && !Array.isArray(riskData)) {
    Object.entries(riskData).forEach(([key, value]) => {
      if (Array.isArray(value)) return;
      tryObjectAsCancer(key, value);
    });
  }

  if (!extracted.length && Array.isArray(elevatedRegions)) {
    elevatedRegions.forEach(region => {
      const hs = BM_HOTSPOTS.find(h => h.id === region.regionId);
      if (!hs) return;
      hs.cancerIds.slice(0, 3).forEach(cid => {
        const c = BM_CANCERS[cid];
        if (c) addEntry(c.name, region.score, region.level, cid);
      });
    });
  }

  extracted.sort((a, b) => (b.score ?? -1) - (a.score ?? -1));
  return extracted.slice(0, 10);
}

function bmRegionCancersForReport(regionId) {
  const hotspot = BM_HOTSPOTS.find(h => h.id === regionId);
  if (!hotspot) return [];
  return hotspot.cancerIds.map(cid => BM_CANCERS[cid]).filter(c => {
    if (!c) return false;
    if (c.reproGender) return c.reproGender === bmGender;
    return true;
  });
}

function bmRenderPersonalizedReport(reportData) {
  const meta = document.getElementById('bmReportMeta');
  const content = document.getElementById('bmReportContent');
  const title = document.getElementById('bmReportTitle');
  const backBtn = document.getElementById('bmReportBackBtn');
  const downloadBtn = document.getElementById('bmReportDownloadBtn');
  if (!meta || !content) return;

  bmUpdateReportLanguageUI();
  if (title) title.textContent = bmReportText('reportTitle');
  if (backBtn) backBtn.textContent = bmReportText('backToMap');
  if (downloadBtn) downloadBtn.textContent = bmReportText('downloadPdf');

  const translatedName = bmTranslateReportSentence(reportData.fullName);
  const translatedFirstName = bmTranslateReportSentence(reportData.firstName);
  const translatedLastName = bmTranslateReportSentence(reportData.lastName);
  const translatedGender = bmTranslateReportSentence(reportData.gender);
  const chunkIntoTwo = (arr = []) => {
    const mid = Math.ceil(arr.length / 2);
    return [arr.slice(0, mid), arr.slice(mid)];
  };

  meta.innerHTML = `
    <div><strong>${bmReportText('generated')}:</strong> ${reportData.dateISO}</div>
    <div><strong>${bmReportText('document')}:</strong> ${bmReportText('visitPacket')}</div>
    <div><strong>${bmReportText('preparedFor')}:</strong> ${bmEscapeHtml(translatedName)}</div>
  `;

  // Build treatment table
  const treatmentTable = (reportData.apiTreatments || []).length
    ? (() => {
      const [leftTx, rightTx] = chunkIntoTwo(reportData.apiTreatments);
      const renderTxTable = (rows) => rows.length
        ? `<div class="report-table-card"><div class="report-table-wrap"><table class="report-table">
            <thead>
              <tr><th style="text-align:left;">Medication</th><th style="text-align:left;">Schedule</th></tr>
            </thead>
            <tbody>
              ${rows.map(tx => `
                <tr>
                  <td>
                    <span class="report-med-name">
                      <span class="report-med-dot" style="background:${bmEscapeHtml(tx.color || '#c4a882')};"></span>
                      ${bmEscapeHtml(tx.medication_name)}
                    </span>
                  </td>
                  <td>
                    <span class="report-schedule-line"><span class="report-schedule-label">Dosage</span>${bmEscapeHtml(tx.dosage || '—')}</span>
                    <span class="report-schedule-line"><span class="report-schedule-label">Frequency</span>${bmEscapeHtml(tx.frequency || '—')}</span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table></div></div>`
        : '';

      return `<div class="report-table-columns">${renderTxTable(leftTx)}${renderTxTable(rightTx)}</div>`;
    })()
    : `<div class="report-empty-state">No medications tracked yet.</div>`;

  // Build high-risk cancers
  const highRiskHtml = (reportData.highRiskCancers || []).length
    ? `<ul class="report-bullet-list">${reportData.highRiskCancers.map((name, idx) => `
      <li>${bmRenderEditableField({ editKey: `risk.highRisk.${idx}`, value: name })}</li>
    `).join('')}</ul>`
    : `<div class="report-empty-state">No high-risk cancers identified based on current assessment.</div>`;

  // Build questionnaire responses as styled cards
  const questionnaireHtml = (reportData.questionnaireResponses || []).length
    ? reportData.questionnaireResponses.map(group => `
      <div class="report-qa-section">
        <div class="report-qa-section-title">${bmEscapeHtml(group.title)}</div>
        <div class="report-qa-columns">
          ${(() => {
            const [leftRows, rightRows] = chunkIntoTwo(group.rows || []);
            const renderRows = (rows) => `
              <div class="report-qa-table">
                ${rows.map(row => `
                  <div class="report-qa-row">
                    <div class="report-qa-row-label">${bmEscapeHtml(row.label)}</div>
                    <div class="report-qa-row-value">${bmRenderEditableField({ editKey: row.editKey || `profile.${row.label}`, value: row.value })}</div>
                  </div>
                `).join('')}
              </div>
            `;
            return `${renderRows(leftRows)}${renderRows(rightRows)}`;
          })()}
        </div>
      </div>
    `).join('')
    : `<div class="report-empty-state">${bmReportText('notAssessed')}</div>`;

  // Build bookmarked concerns
  const bookmarkHtml = (reportData.bookmarks || []).length
    ? `<ul class="report-bullet-list">${reportData.bookmarks.map(item => {
        const target = item.regionId
          ? `${window.location.pathname}?region=${encodeURIComponent(item.regionId)}`
          : (item.link || '#');
        return `<li><a href="${bmEscapeHtml(target)}">${bmEscapeHtml(item.name || item.id)}</a></li>`;
      }).join('')}</ul>`
    : `<div class="report-empty-state">No cancer bookmarks yet.</div>`;

  // Build questions list
  const questionHtml = (reportData.userQuestions || []).length
    ? `<ul class="report-styled-list">${reportData.userQuestions.map(q => `<li>${bmEscapeHtml(q.text)}</li>`).join('')}</ul>`
    : `<div class="report-empty-state">No questions added yet.</div>`;

  // Build notes list
  const profileNoteHtml = (reportData.profileNotes || []).length
    ? `<ul class="report-styled-list">${reportData.profileNotes.map(n => `<li>${bmEscapeHtml(n.text)}</li>`).join('')}</ul>`
    : `<div class="report-empty-state">No notebook notes yet.</div>`;

  const sections = [];

  // Patient Summary Section (top)
  sections.push(`
    <section class="report-section report-section-summary">
      <h3 class="report-section-icon">Patient Summary</h3>
      <div class="report-clinical-note">${bmReportText('clinicalUseNote')}</div>
      <div class="report-kv">
        <div class="report-kv-item">
          <div class="report-kv-label">${bmReportText('firstName')}</div>
          <div class="report-kv-value">${bmEscapeHtml(translatedFirstName)}</div>
        </div>
        <div class="report-kv-item">
          <div class="report-kv-label">${bmReportText('lastName')}</div>
          <div class="report-kv-value">${bmEscapeHtml(translatedLastName)}</div>
        </div>
        <div class="report-kv-item">
          <div class="report-kv-label">${bmReportText('age')}</div>
          <div class="report-kv-value">${bmEscapeHtml(String(reportData.age))}</div>
        </div>
        <div class="report-kv-item">
          <div class="report-kv-label">${bmReportText('gender')}</div>
          <div class="report-kv-value">${bmEscapeHtml(translatedGender)}</div>
        </div>
      </div>
    </section>`);

  // Clinical Risk Profile Section
  sections.push(`
    <section class="report-section report-section-risk">
      <h3 class="report-section-icon">Clinical Risk Profile</h3>
      ${highRiskHtml}
    </section>`);

  // Questionnaire Section
  if ((reportData.questionnaireResponses || []).length) {
    sections.push(`
      <section class="report-section report-section-assessment">
        <h3 class="report-section-icon">Risk Assessment Responses</h3>
        ${questionnaireHtml}
      </section>`);
  }

  // Bookmarked Concerns Section
  if ((reportData.bookmarks || []).length) {
    sections.push(`
      <section class="report-section report-section-bookmarks">
        <h3 class="report-section-icon">Bookmarked Cancer Concerns</h3>
        ${bookmarkHtml}
      </section>`);
  }

  // Questions Section
  sections.push(`
    <section class="report-section report-section-questions">
      <h3 class="report-section-icon">Questions for Your Doctor</h3>
      <div class="report-question-form">
        <textarea id="bmReportQuestionInput" class="report-question-input" placeholder="${bmEscapeHtml(bmReportText('addQuestionPrompt'))}"></textarea>
        <button class="report-question-add" id="bmReportQuestionAddBtn" type="button" onclick="bmAddQuestionFromReport()">${bmReportText('addQuestionBtn')}</button>
      </div>
      <div id="bmReportQuestionsList">${questionHtml}</div>
    </section>`);

  // Notes Section
  sections.push(`
    <section class="report-section report-section-notes">
      <h3 class="report-section-icon">Clinical Notes</h3>
      ${profileNoteHtml}
    </section>`);

  // Treatment Plan Section (moved lower per layout request)
  sections.push(`
    <section class="report-section report-section-treatment">
      <h3 class="report-section-icon">Current Treatment Plan</h3>
      <p class="report-sec-sub">${bmReportText('treatmentTrackerNote')}</p>
      ${treatmentTable}
    </section>`);

  content.innerHTML = sections.join('');
  bmBindReportQuestionForm();
  bmBindReportEditableFields();
}

async function bmOpenPersonalizedReport() {
  const root = document.getElementById('body-map-root');
  root.classList.add('report-mode');
  const content = document.getElementById('bmReportContent');
  if (content) {
    content.innerHTML = '<div class="report-loading"><div class="report-loading-dots"><span></span><span></span><span></span></div>Building your personalized report...</div>';
  }

  const params = new URLSearchParams(window.location.search);
  params.set('report', '1');
  history.pushState({ report: true }, '', `${window.location.pathname}?${params.toString()}`);

  _bmCachedReportData = await bmFetchReportData();
  bmRenderPersonalizedReport(_bmCachedReportData);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function bmClosePersonalizedReport() {
  const params = new URLSearchParams(window.location.search);
  params.delete('report');
  const query = params.toString();
  history.pushState({ report: false }, '', query ? `${window.location.pathname}?${query}` : window.location.pathname);
  document.getElementById('body-map-root').classList.remove('report-mode');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function bmDownloadPersonalizedReport() {
  document.body.classList.add('bm-print-report');
  window.print();
  document.body.classList.remove('bm-print-report');
}

// ─── SEARCH ────────────────────────────────────────────────────────────────
function bmSearchCancers(query) {
  const q = query.toLowerCase().trim();
  if (q.length < 2) { results.classList.remove('open'); return; }

  const matches = [];
  BM_HOTSPOTS.forEach(hs => {
    hs.cancerIds.forEach(cid => {
      const c = BM_CANCERS[cid];
      if (!c) return;
      if (c.name.toLowerCase().includes(q) || c.tags.some(t => t.toLowerCase().includes(q))) {
        matches.push({ cancer: c, hotspot: hs, cid });
      }
    });
  });

  results.innerHTML = '';
  if (matches.length === 0) {
    results.innerHTML = `<div class="bm-search-no-results">No results for "${query}"</div>`;
  } else {
    matches.slice(0, 8).forEach(({ cancer, hotspot }) => {
      const item = document.createElement('div');
      item.className = 'bm-search-result-item';
      item.innerHTML = `
        <span>${cancer.name}</span>
        <span class="bm-search-result-region">${hotspot.label}</span>`;
      item.addEventListener('click', () => {
        bmCloseSearch();
        document.getElementById('bmSearchInput').value = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => bmActivateHotspot(hotspot.id), 200);
      });
      results.appendChild(item);
    });
  }
  results.classList.add('open');
}

function bmCloseSearch() {
  document.getElementById('bmSearchResults').classList.remove('open');
}

// ─── SHARE ─────────────────────────────────────────────────────────────────
function bmShareRegion(hotspotId) {
  const url = window.location.href.split('?')[0] + '?region=' + hotspotId;
  navigator.clipboard.writeText(url).then(() => {
    const btns = document.querySelectorAll('.share-btn');
    btns.forEach(b => { if (b.textContent.includes('Share')) { b.textContent = 'Link copied!'; b.classList.add('copied'); }});
    setTimeout(() => btns.forEach(b => { b.textContent = b.classList.contains('copied') ? 'Share this region' : b.textContent; b.classList.remove('copied'); }), 2000);
  });
}

// ─── DEEP LINK on load ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  bmApplySiteThemeToBodyMap();
  bmUpdateReportLanguageUI();
  const params = new URLSearchParams(window.location.search);
  const region = params.get('region');
  if (region) setTimeout(() => bmActivateHotspot(region), 500);
  if (params.get('report') === '1') {
    setTimeout(() => bmOpenPersonalizedReport(), 300);
  }
});

function bmApplySiteThemeToBodyMap() {
  const root = document.getElementById('body-map-root');
  if (!root) return;

  const theme = localStorage.getItem('acsSiteTheme') || 'default';
  const navyVars = {
    '--cream': '#efe4d3',
    '--warm-white': '#f8f1e5',
    '--rose': '#1f3f66',
    '--rose-light': '#4f7099',
    '--rose-pale': '#dfe8f2',
    '--terra': '#17324f',
    '--sage': '#5f7f97',
    '--sage-pale': '#e8eef2',
    '--tan': '#b89e7b',
    '--tan-light': '#ddd0bc',
    '--brown': '#d7c4a8',
    '--text': '#27231f',
    '--muted': '#6a6054',
    '--hero-title-color': '#1f2a33',
    '--hero-label-color': '#1f2a33',
    '--border': 'rgba(122, 101, 71, 0.28)'
  };

  const warmVars = [
    '--cream', '--warm-white', '--rose', '--rose-light', '--rose-pale', '--terra',
    '--sage', '--sage-pale', '--tan', '--tan-light', '--brown', '--text', '--muted',
    '--hero-title-color', '--hero-label-color', '--border'
  ];

  if (theme === 'navy_beige') {
    Object.entries(navyVars).forEach(([k, v]) => root.style.setProperty(k, v));
  } else {
    warmVars.forEach((k) => root.style.removeProperty(k));
  }
}

window.addEventListener('storage', (event) => {
  if (event.key === 'acsSiteTheme') bmApplySiteThemeToBodyMap();
});

function bmSwitchGender(g) {
  bmGender = g;
  document.getElementById('bm-svg-container-female').style.display = g === 'female' ? '' : 'none';
  document.getElementById('bm-svg-container-male').style.display   = g === 'male'   ? '' : 'none';
  document.getElementById('bm-btn-female').classList.toggle('active', g === 'female');
  document.getElementById('bm-btn-male').classList.toggle('active',   g === 'male');
  if (bmActiveId) bmActivateHotspot(bmActiveId);
}

// ─── HOTSPOT RENDERING ─────────────────────────────────────────────────────
function bmBuildHotspots() {
  const layer = document.getElementById('bmHotspotLayer');
  layer.innerHTML = '';
  BM_HOTSPOTS.forEach(hs => {
    const sys = BM_SYSTEMS[hs.system];
    const dot = document.createElement('div');
    dot.className = 'hs-dot';
    dot.id = 'bm-hsdot-' + hs.id;
    dot.style.left = hs.px + '%';
    dot.style.top  = hs.py + '%';
    dot.style.setProperty('--dot-color', sys.color);
    dot.innerHTML = `<div class="hs-dot-ring"><div class="hs-dot-pulse"></div><div class="hs-dot-core"></div></div>`;
    dot.title = hs.label;
    dot.addEventListener('click', () => bmActivateHotspot(hs.id));
    layer.appendChild(dot);
  });
}

// ─── ACTIVATE HOTSPOT ──────────────────────────────────────────────────────
function bmActivateHotspot(id) {
  if (bmActiveId) {
    const prev = document.getElementById('bm-hsdot-' + bmActiveId);
    if (prev) prev.classList.remove('active');
  }
  bmActiveId = id;
  const dot = document.getElementById('bm-hsdot-' + id);
  if (dot) dot.classList.add('active');

  const hs = BM_HOTSPOTS.find(h => h.id === id);
  if (!hs) return;
  const sys = BM_SYSTEMS[hs.system];
  const panel = document.getElementById('bmInfoPanel');
  panel.classList.add('active');
  panel.style.setProperty('--panel-accent', sys.color);

  const cancers = hs.cancerIds.map(cid => ({ cid, cancer: BM_CANCERS[cid] })).filter(({ cancer }) => {
    if (!cancer) return false;
    if (cancer.reproGender) return cancer.reproGender === bmGender;
    return true;
  });

  document.getElementById('bmPanelContent').innerHTML = `
    <div class="panel-top">
      <div class="panel-glow" style="background:${sys.color}"></div>
      <div class="panel-badge" style="color:${sys.color};border-color:${sys.color}">${sys.icon}&nbsp;${sys.label}</div>
      <div class="panel-region">${hs.label}</div>
      <div class="panel-count">${cancers.length} cancer type${cancers.length!==1?'s':''} in this region</div>
    </div>
    <div class="panel-share-row">
      <button class="share-btn" onclick="bmShareRegion('${hs.id}')">Share this region</button>
    </div>
    <div class="panel-body">
      ${cancers.map(({ cid, cancer: c }, i) => `
        <div class="cancer-item" data-idx="${i}">
          <div class="cancer-row">
            <a href="${c.link}" target="_blank" class="cancer-name-link">${c.name}</a>
            <span class="cancer-right">
              <button class="bookmark-icon-btn ${bmIsBookmarked(cid) ? 'active' : ''}" type="button" onclick="bmToggleBookmark('${cid}', event)" title="${bmIsBookmarked(cid) ? 'Remove bookmark' : 'Save bookmark'}"></button>
              <span class="cancer-arrow">→</span>
            </span>
          </div>
          <div class="cancer-tags">${c.tags.map(t => `<span class="ctag">${t}</span>`).join('')}</div>
          <div class="cancer-desc">${c.desc}</div>
        </div>`).join('')}
    </div>`;

  panel.querySelectorAll('.cancer-item').forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.tagName === 'A') return;
      item.classList.toggle('open');
    });
  });
}

// ─── SYSTEM GRID ──────────────────────────────────────────────────────────
function bmBuildSysGrid() {
  const grid = document.getElementById('bmSysGrid');
  if (!grid) return;
  const counts = {};
  BM_HOTSPOTS.forEach(h => { counts[h.system] = (counts[h.system]||0) + h.cancerIds.length; });

  Object.entries(BM_SYSTEMS).forEach(([key, sys]) => {
    const n = counts[key] || 0;
    const hs = BM_HOTSPOTS.find(h => h.system === key);
    const card = document.createElement('div');
    card.className = 'sys-card';
    card.style.setProperty('--sys-color', sys.color);
    card.innerHTML = `
      <div class="sys-icon">${sys.icon}</div>
      <div class="sys-label">${sys.label}</div>
      <div class="sys-cancers">${n} cancer type${n!==1?'s':''}</div>`;
    if (hs) card.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => bmActivateHotspot(hs.id), 400);
    });
    grid.appendChild(card);
  });
}

// ─── INIT ──────────────────────────────────────────────────────────────────
(function() {
  function init() {
    bmBuildHotspots();
    bmBuildSysGrid();
    bmRefreshBookmarksUI();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>
