---
layout: opencs
title: Body Map
permalink: /map/
comments: true
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
  font-weight: 700; line-height: 1.08; color: #fff;
  letter-spacing: -0.3px;
}
#body-map-root .hero-title em { font-style: italic; color: var(--rose-light); }
#body-map-root .hero-sub {
  margin-top: 14px; font-size: 15px;
  color: rgba(255,255,255,0.55); line-height: 1.7;
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
  text-transform: uppercase; color: rgba(255,255,255,0.4);
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

/* ── MAIN LAYOUT ─────────────────────────────────────── */
#body-map-root .main-section {
  max-width: 1100px; margin: 0 auto;
  padding: 48px 48px 0;
}
#body-map-root .gender-row {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 32px; flex-wrap: wrap; gap: 12px;
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
  font-weight: 700; color: var(--text); margin-bottom: 6px; padding-left: 46px;
}
#body-map-root .cat-sub {
  font-size: 14px; color: var(--muted); margin-bottom: 36px; line-height: 1.6; padding-left: 46px;
}
#body-map-root .cat-divider {
  height: 1px; background: var(--border); margin-bottom: 36px; padding-left: 66px;
}
#body-map-root .sys-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px; 
  padding-left: 50px;
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

/* ── RESPONSIVE ───────────────────────────────────────── */
@media (max-width: 820px) {
  #body-map-root .acs-hero { padding: 36px 24px; }
  #body-map-root .hero-inner { grid-template-columns: 1fr; }
  #body-map-root .main-section { padding: 32px 24px 0; }
  #body-map-root .diagram-area { grid-template-columns: 1fr; }
  #body-map-root .body-wrap { margin: 0 auto; }
  #body-map-root .info-panel { position: static; }
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
  </div>
</div>

<!-- ── MAIN INTERACTIVE SECTION ──────────────────────────── -->
<div class="main-section">
  <div class="gender-row">
    <div class="section-eyebrow">Interactive Body Map</div>
    <div class="gender-toggle">
      <button class="gender-btn active" id="bm-btn-female" onclick="bmSwitchGender('female')"> Female</button>
      <button class="gender-btn" id="bm-btn-male" onclick="bmSwitchGender('male')"> Male</button>
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

<!-- ── ACS CANCER CHAT ─────────────────────────────────── -->
  <div class="acs-chat-section" id="acsChatSection">
    <div class="acs-chat-inner">
      <div class="acs-chat-header">
        <div class="acs-chat-eyebrow">American Cancer Society · AI Assistant</div>
        <h2 class="acs-chat-title">Ask About Any Cancer Type</h2>
        <p class="acs-chat-sub">Get plain-English answers about symptoms, risk factors, and ACS resources — or ask about anything from the body map above.</p>
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

// Expose handlers
window.acsChatSend = acsChatSend;
window.acsChatClear = acsChatClear;

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

function bmSwitchGender(g) {
  bmGender = g;
  document.getElementById('bm-svg-container-female').style.display = g === 'female' ? '' : 'none';
  document.getElementById('bm-svg-container-male').style.display   = g === 'male'   ? '' : 'none';
  document.getElementById('bm-btn-female').classList.toggle('active', g === 'female');
  document.getElementById('bm-btn-male').classList.toggle('active',   g === 'male');
  // Hotspots use CSS %, so no repositioning needed
  if (bmActiveId) bmActivateHotspot(bmActiveId);
}

// ─── HOTSPOT RENDERING ─────────────────────────────────────────────────────
// Uses CSS percentage positioning — no getBoundingClientRect, no timing issues
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

  const cancers = hs.cancerIds.map(cid => BM_CANCERS[cid]).filter(c => {
    if (!c) return false;
    if (c.reproGender) return c.reproGender === bmGender;
    return true;
  });

  document.getElementById('bmPanelContent').innerHTML = `
    <div class="panel-top">
      <div class="panel-glow" style="background:${sys.color}"></div>
      <div class="panel-badge" style="color:${sys.color};border-color:${sys.color}">${sys.icon}&nbsp;${sys.label}</div>
      <div class="panel-region">${hs.label}</div>
      <div class="panel-count">${cancers.length} cancer type${cancers.length!==1?'s':''} in this region</div>
    </div>
    <div class="panel-body">
      ${cancers.map((c,i) => `
        <div class="cancer-item" data-idx="${i}">
          <div class="cancer-row">
            <a href="${c.link}" target="_blank" class="cancer-name-link">${c.name}</a>
            <span class="cancer-arrow">→</span>
          </div>
          <div class="cancer-tags">${c.tags.map(t=>`<span class="ctag">${t}</span>`).join('')}</div>
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
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>

<script src="/ACSstuff/search.js"></script>