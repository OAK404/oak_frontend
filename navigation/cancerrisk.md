---
layout: opencs
permalink: /cancerrisk
title: Risk Calculator
---

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ML Cancer Risk Predictor · ACS 2026</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Nunito:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --cream: #fdf6ee;
    --warm-white: #fff9f3;
    --rose: #e07a6a;
    --rose-light: #f2b5ab;
    --rose-pale: #fce9e6;
    --terracotta: #c45e4a;
    --sage: #8aaa8c;
    --sage-light: #b8ceb9;
    --sage-pale: #eaf1ea;
    --tan: #c4a882;
    --tan-light: #e8d9c4;
    --brown: #6b4c3b;
    --text-main: #3d2c24;
    --text-muted: #937468;
    --border: rgba(196,168,130,0.25);
    --border-bright: rgba(196,168,130,0.5);
    --serif: 'Cormorant Garamond', Georgia, serif;
    --sans: 'Nunito', system-ui, sans-serif;
  }
  *, *::before, *::after { box-sizing: border-box; }
  body {
    background: var(--cream); color: var(--text-main);
    font-family: var(--sans); font-size: 15px; line-height: 1.65;
    margin: 0; -webkit-font-smoothing: antialiased; min-height: 100vh;
  }

  /* ── SCROLL PROGRESS SIDEBAR ── */
  .progress-sidebar {
    position: fixed; left: 20px; top: 50%; transform: translateY(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 0;
    z-index: 100; opacity: 0; transition: opacity 0.4s ease;
  }
  .progress-sidebar.visible { opacity: 1; }
  .progress-pct { font-family: var(--serif); font-size: 13px; font-weight: 600; color: var(--rose); margin-bottom: 10px; }
  .progress-track { width: 3px; height: 52px; background: var(--tan-light); border-radius: 2px; position: relative; overflow: hidden; }
  .progress-fill { position: absolute; top: 0; left: 0; width: 100%; height: 0%; background: linear-gradient(to bottom, var(--rose-light), var(--rose)); border-radius: 2px; transition: height 0.4s cubic-bezier(.22,1,.36,1); }
  .progress-dot-wrap { position: relative; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 4px 0; }
  .progress-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--tan-light); border: 2px solid var(--warm-white); transition: background 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease; z-index: 1; }
  .progress-dot.done  { background: var(--rose); }
  .progress-dot.active { background: var(--terracotta); transform: scale(1.35); box-shadow: 0 0 0 4px rgba(224,122,106,0.2); }
  .progress-dot-wrap .tip { position: absolute; left: 20px; background: var(--text-main); color: white; font-size: 10px; font-weight: 600; letter-spacing: .05em; text-transform: uppercase; padding: 4px 9px; border-radius: 6px; white-space: nowrap; pointer-events: none; opacity: 0; transition: opacity 0.15s; }
  .progress-dot-wrap:hover .tip { opacity: 1; }
  .progress-label { font-size: 9px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--text-muted); writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg); margin-top: 12px; opacity: 0.6; }
  @media(max-width: 880px) { .progress-sidebar { display: none; } }

  /* ── PAGE ── */
  .page { max-width: 900px; margin: 0 auto; padding: 48px 24px 80px; }
  .page-topbar { display: flex; justify-content: flex-end; margin-bottom: 14px; }
  .lang-switch { display: inline-flex; background: var(--warm-white); border: 1px solid var(--border); border-radius: 999px; padding: 4px; gap: 4px; }
  .lang-btn { border: none; background: transparent; color: var(--text-muted); font-family: var(--sans); font-size: 12px; font-weight: 700; letter-spacing: .05em; padding: 6px 12px; border-radius: 999px; cursor: pointer; transition: all .18s; }
  .lang-btn:hover { color: var(--text-main); background: var(--cream); }
  .lang-btn.active { background: var(--rose); color: #fff; }
  .page-header { text-align: center; margin-bottom: 40px; }
  .page-header h1 { font-family: var(--serif); font-size: clamp(32px, 5vw, 52px); font-weight: 600; color: var(--text-main); line-height: 1.1; margin: 0 0 14px; }
  .page-header h1 em { font-style: italic; color: var(--rose); }
  .page-header p { color: var(--text-muted); max-width: 640px; margin: 0 auto; font-size: 14px; line-height: 1.75; }

  /* ── CARD ── */
  .card { background: var(--warm-white); border: 1px solid var(--border); border-radius: 18px; padding: 36px 40px; margin-bottom: 20px; box-shadow: 0 4px 24px rgba(61,44,36,.05); }
  @media(max-width:520px){ .card { padding: 24px 20px; } }
  .card-title { font-family: var(--serif); font-size: 24px; font-weight: 600; color: var(--text-main); margin-bottom: 6px; }
  .card-sub { font-size: 13px; color: var(--text-muted); margin-bottom: 28px; line-height: 1.6; }

  /* ── SECTION HEADINGS ── */
  .section-heading { font-family: var(--serif); font-size: 20px; font-weight: 600; color: var(--text-main); margin: 36px 0 18px; padding-bottom: 10px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 10px; }
  .section-heading:first-of-type { margin-top: 0; }
  .section-icon { width: 30px; height: 30px; border-radius: 8px; background: var(--rose-pale); display: flex; align-items: center; justify-content: center; font-size: 15px; }

  /* ── FORM ELEMENTS ── */
  .field { margin-bottom: 22px; }
  .field:last-child { margin-bottom: 0; }
  .field label { display: block; font-size: 12px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px; }
  .field select, .field input[type=number] { width: 100%; background: var(--cream); border: 1px solid var(--tan-light); border-radius: 10px; padding: 11px 14px; font-family: var(--sans); font-size: 14px; color: var(--text-main); outline: none; appearance: none; transition: border-color .2s; cursor: pointer; }
  .field select:focus, .field input[type=number]:focus { border-color: var(--rose); box-shadow: 0 0 0 3px rgba(224,122,106,.12); }
  .select-wrap { position: relative; }
  .select-wrap::after { content: '▾'; position: absolute; right: 14px; top: 50%; transform: translateY(-50%); color: var(--tan); pointer-events: none; font-size: 13px; }
  .chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .chip { padding: 7px 16px; border-radius: 20px; border: 1px solid var(--border-bright); background: var(--cream); font-family: var(--sans); font-size: 13px; color: var(--text-muted); cursor: pointer; transition: all .18s; user-select: none; }
  .chip:hover { border-color: var(--rose-light); color: var(--text-main); }
  .chip.selected { background: var(--rose); border-color: var(--rose); color: white; font-weight: 600; }
  .cancer-chips .chip.selected { background: var(--terracotta); border-color: var(--terracotta); }
  .cancer-chips .chip.na { opacity: .35; pointer-events: none; cursor: default; }
  .toggles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 24px; }
  @media(max-width: 600px) { .toggles-grid { grid-template-columns: 1fr; } }
  .toggle-row { display: flex; align-items: center; justify-content: space-between; padding: 11px 0; border-bottom: 1px solid var(--border); }
  .toggle-row:last-child { border-bottom: none; }
  .toggle-label { font-size: 14px; color: var(--text-main); }
  .toggle { position: relative; width: 44px; height: 24px; flex-shrink: 0; margin-left: 16px; }
  .toggle input { opacity: 0; width: 0; height: 0; position: absolute; }
  .toggle-track { position: absolute; inset: 0; background: var(--tan-light); border-radius: 12px; cursor: pointer; transition: background .2s; }
  .toggle-track::after { content: ''; position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; background: white; border-radius: 50%; transition: transform .2s; box-shadow: 0 1px 4px rgba(0,0,0,.15); }
  .toggle input:checked + .toggle-track { background: var(--rose); }
  .toggle input:checked + .toggle-track::after { transform: translateX(20px); }
  .field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media(max-width:520px){ .field-grid { grid-template-columns: 1fr; } }
  .btn-row { display: flex; gap: 12px; margin-top: 28px; justify-content: flex-end; }
  .btn { font-family: var(--sans); font-size: 14px; font-weight: 600; border-radius: 10px; padding: 11px 24px; cursor: pointer; border: none; transition: all .2s; }
  .btn-primary { background: var(--rose); color: white; }
  .btn-primary:hover { background: var(--terracotta); transform: translateY(-1px); }
  .btn-primary:disabled { background: var(--tan-light); color: var(--text-muted); transform: none; cursor: not-allowed; }
  .optional-note { font-size: 11px; color: var(--text-muted); margin-top: 8px; font-style: italic; }
  .results-hidden { display: none; }

  /* ── HERO — the 1.8× multiplier ── */
  .risk-hero {
    text-align: center;
    padding: 32px 0 24px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 28px;
  }

  /* ×label above the number */
  .rr-eyebrow {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 8px;
  }

  /* The big ×multiplier */
  .rr-number {
    font-family: var(--serif);
    font-size: clamp(78px, 15vw, 118px);
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.02em;
    transition: color .3s;
    margin-bottom: 6px;
  }
  .rr-number sup {
    font-size: .32em;
    vertical-align: top;
    margin-top: .18em;
    opacity: .7;
    font-weight: 400;
    font-style: italic;
  }

  /* Subtitle: "times the population average" */
  .rr-subtitle {
    font-family: var(--serif);
    font-size: clamp(15px, 2.5vw, 20px);
    color: var(--text-muted);
    font-style: italic;
    margin-bottom: 18px;
  }

  /* Badge: above / at / below average */
  .rr-badge {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 7px 20px; border-radius: 20px;
    font-size: 12px; font-weight: 700;
    letter-spacing: .06em; text-transform: uppercase;
    margin-bottom: 20px;
  }
  .rr-badge.above   { background: var(--rose-pale);  color: var(--terracotta); }
  .rr-badge.at      { background: #fff3e0;            color: #9b6a00; }
  .rr-badge.below   { background: var(--sage-pale);   color: #4a7a4c; }

  /* gauge */
  .gauge-wrap { margin: 0 auto 8px; max-width: 480px; }
  .gauge-track { height: 8px; background: var(--tan-light); border-radius: 4px; overflow: hidden; margin-bottom: 6px; }
  .gauge-fill { height: 100%; border-radius: 4px; width: 0; transition: width 1s cubic-bezier(.22,1,.36,1); }
  .gauge-labels { display: flex; justify-content: space-between; font-size: 10px; color: var(--text-muted); letter-spacing: .05em; text-transform: uppercase; }

  /* Key: 1.0× line marker */
  .gauge-marker-row { position: relative; height: 0; margin: -6px 0 0; max-width: 480px; margin-left: auto; margin-right: auto; }
  .gauge-marker {
    position: absolute;
    width: 2px; height: 14px;
    background: var(--text-muted);
    top: -8px;
    /* 1.0× sits at 25% of the 4× scale */
    left: 25%;
    transform: translateX(-50%);
  }
  .gauge-marker::after {
    content: '1.0×';
    position: absolute;
    top: 14px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 9px;
    color: var(--text-muted);
    white-space: nowrap;
    letter-spacing: .04em;
  }

  /* explanation callout */
  .rr-explain {
    font-size: 12px;
    color: var(--text-muted);
    line-height: 1.7;
    max-width: 520px;
    margin: 14px auto 0;
    background: var(--cream);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px 16px;
    text-align: left;
  }
  .rr-explain strong { color: var(--text-main); }

  /* ── RISK FACTORS ── */
  .risk-factors-list { margin-bottom: 28px; }
  .risk-factor-item { padding: 14px 16px; background: var(--cream); border-radius: 10px; margin-bottom: 10px; border-left: 3px solid var(--tan-light); }
  .risk-factor-item.high { border-left-color: var(--terracotta); }
  .risk-factor-item.moderate { border-left-color: #d9a566; }
  .rf-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
  .rf-name { font-size: 14px; font-weight: 600; color: var(--text-main); }
  .rf-impact { font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; padding: 3px 10px; border-radius: 12px; }
  .rf-impact.high { background: var(--rose-pale); color: var(--terracotta); }
  .rf-impact.moderate { background: #fff3e0; color: #9b6a00; }
  .rf-detail { font-size: 12px; color: var(--text-muted); line-height: 1.6; }

  /* ── FEATURE IMPORTANCE ── */
  .importance-grid { display: grid; gap: 10px; margin-bottom: 24px; }
  .importance-row { display: flex; align-items: center; gap: 12px; }
  .importance-label { min-width: 160px; font-size: 12px; color: var(--text-muted); }
  .importance-bar-track { flex: 1; height: 6px; background: var(--tan-light); border-radius: 3px; overflow: hidden; }
  .importance-bar-fill { height: 100%; background: var(--rose); border-radius: 3px; transition: width 1s cubic-bezier(.22,1,.36,1); }
  .importance-val { font-size: 12px; font-weight: 600; min-width: 40px; text-align: right; color: var(--text-main); }

  /* ── CANCER TYPE CARDS ── */
  .ct-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 14px; margin-bottom: 28px; }
  .ct-card { background: var(--cream); border: 1px solid var(--border); border-radius: 14px; padding: 16px 18px; transition: box-shadow .2s; }
  .ct-card:hover { box-shadow: 0 4px 16px rgba(61,44,36,.08); }
  .ct-card-label { font-size: 12px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px; }

  /* Lifetime risk % — the main number per card */
  .ct-lifetime {
    font-family: var(--serif);
    font-size: 36px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 2px;
  }
  .ct-lifetime-sub { font-size: 10px; color: var(--text-muted); letter-spacing: .06em; text-transform: uppercase; margin-bottom: 4px; }

  /* relative risk shown smaller below */
  .ct-rr-line { font-size: 11px; color: var(--text-muted); margin-bottom: 10px; }
  .ct-rr-line strong { color: var(--text-main); }

  .ct-level-bar { height: 4px; border-radius: 2px; background: var(--tan-light); overflow: hidden; margin-bottom: 10px; }
  .ct-level-fill { height: 100%; border-radius: 2px; transition: width 1s cubic-bezier(.22,1,.36,1); }
  .ct-level-fill.low      { background: var(--sage); }
  .ct-level-fill.moderate { background: #d9a566; }
  .ct-level-fill.high     { background: var(--terracotta); }
  .ct-badge { display: inline-block; font-size: 10px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; padding: 3px 10px; border-radius: 10px; margin-bottom: 8px; }
  .ct-badge.low      { background: var(--sage-pale); color: #4a7a4c; }
  .ct-badge.moderate { background: #fff3e0; color: #9b6a00; }
  .ct-badge.high     { background: var(--rose-pale); color: var(--terracotta); }
  .ct-factors { font-size: 11px; color: var(--text-muted); line-height: 1.55; margin-top: 6px; }
  .ct-note { font-size: 11px; color: var(--text-muted); font-style: italic; margin-top: 6px; line-height: 1.5; border-top: 1px solid var(--border); padding-top: 6px; }
  .ct-na { opacity: .5; font-size: 12px; color: var(--text-muted); margin-top: 4px; }

  /* ── LOADING ── */
  .ai-loading { display: flex; align-items: center; justify-content: center; gap: 10px; color: var(--text-muted); font-size: 13px; padding: 40px 20px; }
  .dots span { display: inline-block; width: 6px; height: 6px; background: var(--rose); border-radius: 50%; animation: pulse 1.2s ease-in-out infinite; }
  .dots span:nth-child(2) { animation-delay: .2s; }
  .dots span:nth-child(3) { animation-delay: .4s; }
  @keyframes pulse { 0%, 100% { opacity: .3; transform: scale(.8); } 50% { opacity: 1; transform: scale(1); } }

  .source-note { font-size: 11px; color: var(--text-muted); text-align: center; line-height: 1.6; margin-top: 8px; padding: 16px; border-top: 1px solid var(--border); }
  .source-note strong { color: var(--text-main); }

  /* section sub-headers inside results */
  .res-section-title { font-family: var(--serif); font-size: 18px; font-weight: 600; color: var(--text-main); margin: 28px 0 14px; }
</style>
</head>
<body>

<!-- ── SCROLL PROGRESS SIDEBAR ── -->
<nav class="progress-sidebar" id="progressSidebar" aria-label="Form completion progress">
  <div class="progress-pct" id="progressPct">0%</div>
  <div class="progress-dot-wrap" id="wrap-demographics">
    <div class="progress-dot active" id="dot-demographics"></div>
    <span class="tip" id="tip-demographics">Demographics</span>
  </div>
  <div class="progress-track"><div class="progress-fill" id="fill-1"></div></div>
  <div class="progress-dot-wrap" id="wrap-lifestyle">
    <div class="progress-dot" id="dot-lifestyle"></div>
    <span class="tip" id="tip-lifestyle">Lifestyle</span>
  </div>
  <div class="progress-track"><div class="progress-fill" id="fill-2"></div></div>
  <div class="progress-dot-wrap" id="wrap-medical">
    <div class="progress-dot" id="dot-medical"></div>
    <span class="tip" id="tip-medical">Medical History</span>
  </div>
  <div class="progress-track"><div class="progress-fill" id="fill-3"></div></div>
  <div class="progress-dot-wrap" id="wrap-environmental">
    <div class="progress-dot" id="dot-environmental"></div>
    <span class="tip" id="tip-environmental">Environmental</span>
  </div>
  <div class="progress-label" id="progress-label">Progress</div>
</nav>

<div class="page">
  <div class="page-topbar">
    <div class="lang-switch" id="lang-switch" aria-label="Language switch">
      <button class="lang-btn active" id="lang-en" type="button" onclick="setLanguage('en')" aria-pressed="true">EN</button>
      <button class="lang-btn" id="lang-es" type="button" onclick="setLanguage('es')" aria-pressed="false">ES</button>
    </div>
  </div>

  <div class="page-header">
    <h1 id="page-title">Cancer Risk<br><em>ML Predictor</em></h1>
    <p id="page-intro">Answer questions about your demographics, lifestyle, and medical history. Our machine learning model, trained on ACS Cancer Facts &amp; Figures 2026 epidemiological data, predicts your relative cancer risk compared to the average US population.</p>
  </div>

  <div class="card">

    <!-- SECTION 1: DEMOGRAPHICS -->
    <div class="section-heading" id="section-demographics">
      <span class="section-icon">𐦂𖨆𖠋</span><span id="heading-demographics">Demographics</span>
    </div>
    <div class="field-grid">
      <div class="field">
        <label id="label-age">Age</label>
        <input type="number" id="age" min="18" max="100" placeholder="e.g. 55">
      </div>
      <div class="field">
        <label id="label-sex">Biological Sex</label>
        <div class="select-wrap">
          <select id="sex">
            <option value="" id="sex-option-default">Select…</option>
            <option value="male" id="sex-option-male">Male</option>
            <option value="female" id="sex-option-female">Female</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label id="label-race">Race / Ethnicity</label>
      <div class="chips" id="race-chips">
        <div class="chip" data-val="white">White</div>
        <div class="chip" data-val="black">Black / African American</div>
        <div class="chip" data-val="hispanic">Hispanic / Latino</div>
        <div class="chip" data-val="aian">American Indian / Alaskan Native</div>
        <div class="chip" data-val="aapi">Asian American / Pacific Islander</div>
      </div>
    </div>

    <!-- SECTION 2: LIFESTYLE -->
    <div class="section-heading" id="section-lifestyle">
      <span class="section-icon">︎</span><span id="heading-lifestyle">Lifestyle Factors</span>
    </div>
    <div class="field">
      <label id="label-smoking">Smoking Status</label>
      <div class="chips" id="smoke-chips">
        <div class="chip" data-val="never">Never smoked</div>
        <div class="chip" data-val="former">Former smoker</div>
        <div class="chip" data-val="current">Current smoker</div>
      </div>
    </div>
    <div class="field" id="pack-years-field" style="display:none">
      <label id="label-pack-years">Pack-Years (packs/day × years smoked)</label>
      <input type="number" id="packYears" min="0" max="200" placeholder="e.g. 20" value="0">
    </div>
    <div class="field">
      <label id="label-bmi">BMI Category</label>
      <div class="chips" id="bmi-chips">
        <div class="chip" data-val="normal">Normal (18.5–24.9)</div>
        <div class="chip" data-val="overweight">Overweight (25–29.9)</div>
        <div class="chip" data-val="obese">Obese (30–39.9)</div>
        <div class="chip" data-val="severely-obese">Severely Obese (40+)</div>
      </div>
    </div>
    <div class="field">
      <label id="label-alcohol">Alcohol Consumption</label>
      <div class="chips" id="alcohol-chips">
        <div class="chip" data-val="none">None</div>
        <div class="chip" data-val="light">Light (1–7 drinks/wk)</div>
        <div class="chip" data-val="moderate">Moderate (8–14/wk)</div>
        <div class="chip" data-val="heavy">Heavy (15+/wk)</div>
      </div>
    </div>
    <div class="field">
      <label id="label-activity">Physical Activity</label>
      <div class="chips" id="activity-chips">
        <div class="chip" data-val="sedentary">Sedentary / low activity</div>
        <div class="chip" data-val="moderate">Moderately active</div>
        <div class="chip" data-val="active">Active (150+ min/wk)</div>
      </div>
    </div>
    <div class="field">
      <label id="label-diet">Diet Quality</label>
      <div class="chips" id="diet-chips">
        <div class="chip" data-val="poor">Poor (high red/processed meat)</div>
        <div class="chip" data-val="average">Average</div>
        <div class="chip" data-val="healthy">Healthy (high fruit/veg/fiber)</div>
      </div>
    </div>

    <!-- SECTION 3: MEDICAL HISTORY -->
    <div class="section-heading" id="section-medical">
      <span class="section-icon"></span><span id="heading-medical">Medical History</span>
    </div>
    <p class="card-sub" style="margin-top:-10px;margin-bottom:16px" id="medical-subtext">Toggle any conditions that apply to you</p>
    <div class="toggles-grid">
      <div class="toggle-row">
        <div class="toggle-label" id="toggle-family-history">Family history of cancer</div>
        <label class="toggle"><input type="checkbox" id="familyHistory"><div class="toggle-track"></div></label>
      </div>
      <div class="toggle-row">
        <div class="toggle-label" id="toggle-diabetes">Type 2 Diabetes</div>
        <label class="toggle"><input type="checkbox" id="diabetes"><div class="toggle-track"></div></label>
      </div>
      <div class="toggle-row">
        <div class="toggle-label" id="toggle-hepatitis">Hepatitis B or C</div>
        <label class="toggle"><input type="checkbox" id="hepatitis"><div class="toggle-track"></div></label>
      </div>
      <div class="toggle-row">
        <div class="toggle-label" id="toggle-hpv">HPV infection</div>
        <label class="toggle"><input type="checkbox" id="hpv"><div class="toggle-track"></div></label>
      </div>
      <div class="toggle-row">
        <div class="toggle-label" id="toggle-hpylori">H. pylori infection</div>
        <label class="toggle"><input type="checkbox" id="hPylori"><div class="toggle-track"></div></label>
      </div>
      <div class="toggle-row">
        <div class="toggle-label" id="toggle-ibd">Inflammatory Bowel Disease</div>
        <label class="toggle"><input type="checkbox" id="ibd"><div class="toggle-track"></div></label>
      </div>
      <div class="toggle-row">
        <div class="toggle-label" id="toggle-radiation">Prior radiation therapy</div>
        <label class="toggle"><input type="checkbox" id="radiationHistory"><div class="toggle-track"></div></label>
      </div>
      <div class="toggle-row">
        <div class="toggle-label" id="toggle-immuno">Immunosuppression</div>
        <label class="toggle"><input type="checkbox" id="immunosuppression"><div class="toggle-track"></div></label>
      </div>
      <div class="toggle-row">
        <div class="toggle-label" id="toggle-precancerous">Precancerous lesions</div>
        <label class="toggle"><input type="checkbox" id="precancerousLesions"><div class="toggle-track"></div></label>
      </div>
    </div>

    <!-- SECTION 4: ENVIRONMENTAL -->
    <div class="section-heading" id="section-environmental">
      <span class="section-icon"></span><span id="heading-environmental">Environmental Exposures</span>
    </div>
    <p class="card-sub" style="margin-top:-10px;margin-bottom:16px" id="environmental-subtext">Toggle any exposures that apply to you</p>
    <div class="toggles-grid">
      <div class="toggle-row">
        <div class="toggle-label" id="toggle-occupational">Occupational chemical exposure</div>
        <label class="toggle"><input type="checkbox" id="occupationalExposure"><div class="toggle-track"></div></label>
      </div>
      <div class="toggle-row">
        <div class="toggle-label" id="toggle-uv">High UV / sun exposure history</div>
        <label class="toggle"><input type="checkbox" id="uvExposure"><div class="toggle-track"></div></label>
      </div>
    </div>

    <!-- SECTION 5: CANCER TYPES -->
    <div class="section-heading" id="section-cancertypes">
      <span class="section-icon"></span><span id="heading-cancer-types">Cancer Types of Interest</span>
    </div>
    <p class="card-sub" style="margin-top:-10px;margin-bottom:8px" id="cancer-types-subtext">Select specific cancers to get individual lifetime risk estimates</p>
    <p class="optional-note" id="cancer-types-note">Optional: leave unselected for overall relative risk only</p>
    <br>
    <div class="chips cancer-chips" id="cancer-type-chips">
      <div class="chip" data-val="lung">Lung</div>
      <div class="chip" data-val="colorectal">Colorectal</div>
      <div class="chip" data-val="breast" data-sex="female">Breast</div>
      <div class="chip" data-val="prostate" data-sex="male">Prostate</div>
      <div class="chip" data-val="melanoma">Melanoma</div>
      <div class="chip" data-val="liver">Liver</div>
      <div class="chip" data-val="cervical" data-sex="female">Cervical</div>
      <div class="chip" data-val="stomach">Stomach</div>
      <div class="chip" data-val="bladder">Bladder</div>
      <div class="chip" data-val="lymphoma">Lymphoma</div>
      <div class="chip" data-val="leukemia">Leukemia</div>
      <div class="chip" data-val="pancreatic">Pancreatic</div>
    </div>

    <div class="btn-row">
      <button class="btn btn-primary" id="predictBtn" onclick="predictRisk()">Predict My Risk →</button>
    </div>
  </div>

  <!-- RESULTS -->
  <div class="card results-hidden" id="results"></div>
</div>

<script type="module">
  import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';
  window._pythonURI = pythonURI; // expose to non-module scripts

// ── STATE ─────────────────────────────────────────────────────────────────
const state = {
  age: null, sex: null, race: null,
  smoking_status: null, pack_years: 0,
  bmi_category: null, alcohol_consumption: null,
  physical_activity: null, diet_quality: null,
  family_history: false, diabetes: false, hepatitis: false,
  hpv: false, h_pylori: false, ibd: false,
  radiation_history: false, immunosuppression: false,
  precancerous_lesions: false,
  occupational_exposure: false, uv_exposure: false,
  selected_cancer_types: []
};

const REQUIRED = ['age','sex','race','smoking_status','bmi_category',
                  'alcohol_consumption','physical_activity','diet_quality'];
const DEMO_KEYS      = ['age','sex','race'];
const LIFESTYLE_KEYS = ['smoking_status','bmi_category','alcohol_consumption','physical_activity','diet_quality'];
const LANGUAGE_KEY = 'acsCancerRiskLanguage';
let currentLang = (() => {
  const saved = localStorage.getItem(LANGUAGE_KEY);
  return saved === 'es' ? 'es' : 'en';
})();
let lastPredictionData = null;

const I18N = {
  en: {
    progressAria: 'Form completion progress',
    tipDemographics: 'Demographics',
    tipLifestyle: 'Lifestyle',
    tipMedical: 'Medical History',
    tipEnvironmental: 'Environmental',
    progressLabel: 'Progress',
    pageTitleHtml: 'Cancer Risk<br><em>ML Predictor</em>',
    pageIntro: 'Answer questions about your demographics, lifestyle, and medical history. Our machine learning model, trained on ACS Cancer Facts & Figures 2026 epidemiological data, predicts your relative cancer risk compared to the average US population.',
    headingDemographics: 'Demographics',
    headingLifestyle: 'Lifestyle Factors',
    headingMedical: 'Medical History',
    headingEnvironmental: 'Environmental Exposures',
    headingCancerTypes: 'Cancer Types of Interest',
    labelAge: 'Age',
    labelSex: 'Biological Sex',
    sexDefault: 'Select…',
    sexMale: 'Male',
    sexFemale: 'Female',
    labelRace: 'Race / Ethnicity',
    labelSmoking: 'Smoking Status',
    labelPackYears: 'Pack-Years (packs/day × years smoked)',
    labelBmi: 'BMI Category',
    labelAlcohol: 'Alcohol Consumption',
    labelActivity: 'Physical Activity',
    labelDiet: 'Diet Quality',
    medicalSubtext: 'Toggle any conditions that apply to you',
    environmentalSubtext: 'Toggle any exposures that apply to you',
    cancerTypesSubtext: 'Select specific cancers to get individual lifetime risk estimates',
    cancerTypesNote: 'Optional: leave unselected for overall relative risk only',
    predictBtn: 'Predict My Risk →',
    raceWhite: 'White',
    raceBlack: 'Black / African American',
    raceHispanic: 'Hispanic / Latino',
    raceAian: 'American Indian / Alaskan Native',
    raceAapi: 'Asian American / Pacific Islander',
    smokeNever: 'Never smoked',
    smokeFormer: 'Former smoker',
    smokeCurrent: 'Current smoker',
    bmiNormal: 'Normal (18.5–24.9)',
    bmiOverweight: 'Overweight (25–29.9)',
    bmiObese: 'Obese (30–39.9)',
    bmiSevere: 'Severely Obese (40+)',
    alcoholNone: 'None',
    alcoholLight: 'Light (1–7 drinks/wk)',
    alcoholModerate: 'Moderate (8–14/wk)',
    alcoholHeavy: 'Heavy (15+/wk)',
    activitySedentary: 'Sedentary / low activity',
    activityModerate: 'Moderately active',
    activityActive: 'Active (150+ min/wk)',
    dietPoor: 'Poor (high red/processed meat)',
    dietAverage: 'Average',
    dietHealthy: 'Healthy (high fruit/veg/fiber)',
    toggleFamilyHistory: 'Family history of cancer',
    toggleDiabetes: 'Type 2 Diabetes',
    toggleHepatitis: 'Hepatitis B or C',
    toggleHpv: 'HPV infection',
    toggleHpylori: 'H. pylori infection',
    toggleIbd: 'Inflammatory Bowel Disease',
    toggleRadiation: 'Prior radiation therapy',
    toggleImmuno: 'Immunosuppression',
    togglePrecancerous: 'Precancerous lesions',
    toggleOccupational: 'Occupational chemical exposure',
    toggleUv: 'High UV / sun exposure history',
    cancerLung: 'Lung',
    cancerColorectal: 'Colorectal',
    cancerBreast: 'Breast',
    cancerProstate: 'Prostate',
    cancerMelanoma: 'Melanoma',
    cancerLiver: 'Liver',
    cancerCervical: 'Cervical',
    cancerStomach: 'Stomach',
    cancerBladder: 'Bladder',
    cancerLymphoma: 'Lymphoma',
    cancerLeukemia: 'Leukemia',
    cancerPancreatic: 'Pancreatic',
    validateFill: 'Please fill in',
    loadingPrediction: 'Running ML prediction…',
    errorHint: 'Make sure you are logged in and the backend is running.',
    resultsTitle: 'Your ML Risk Prediction',
    resultsSubtitle: 'Based on machine learning analysis of your profile',
    rrEyebrow: 'Overall Relative Cancer Risk',
    rrSubtitle: 'times the average US population risk',
    gaugeHalf: '0.5× (half average)',
    gaugeAvg: '1.0× average',
    gaugeHigh: '4× (very elevated)',
    howReadTitle: 'How to read this:',
    howReadBody: '1.0× means exactly the same risk as the average American.',
    howReadMid: 'means your overall cancer risk is estimated at',
    howReadEnd: 'the population baseline based on your profile,',
    higher: 'higher',
    lower: 'lower',
    thanAverage: 'than average, driven by the factors listed below.',
    cancerBreakdownTitle: 'Cancer-Type Risk Breakdown',
    cancerBreakdownSub: 'Estimated lifetime risk % for each cancer type based on your profile vs. the US population baseline. Each card is independent. (Ex. prostate cancer at 75% lifetime risk means 1 in 1.3 men with your profile are expected to develop it over a lifetime, not that you will definitely get it.)',
    keyRiskFactorsTitle: 'Your Key Risk Factors',
    featureImportanceTitle: 'Feature Importance (Decision Tree)',
    featureImportanceSub: "Which inputs had the most influence on the ML model's prediction for your profile.",
    sourceNote: 'Model: Ensemble ML (Logistic Regression + Random Forest + Decision Tree) trained on synthetic data calibrated to ACS Cancer Facts & Figures 2026 epidemiological rates. For educational purposes only, not medical advice. Consult a healthcare provider for personalized screening recommendations.',
    estimatedLifetimeRisk: 'estimated lifetime risk',
    populationAverage: 'population average',
    baseline: 'baseline',
    contributingFactors: 'Contributing factors:',
    notApplicableSex: 'Not applicable for your biological sex',
    noRiskFactors: 'No significant modifiable risk factors identified. Keep up healthy lifestyle habits!',
    impactHigh: 'high',
    impactModerate: 'moderate',
    impactLow: 'low',
    aboveAverageBadge: 'above population average',
    belowAverageBadge: 'below population average',
    nearAverageBadge: '≈ Near population average'
  },
  es: {
    progressAria: 'Progreso de completado del formulario',
    tipDemographics: 'Demografía',
    tipLifestyle: 'Estilo de vida',
    tipMedical: 'Historial médico',
    tipEnvironmental: 'Ambiental',
    progressLabel: 'Progreso',
    pageTitleHtml: 'Riesgo de Cáncer<br><em>Predictor ML</em>',
    pageIntro: 'Responde preguntas sobre tu demografía, estilo de vida e historial médico. Nuestro modelo de aprendizaje automático, entrenado con datos epidemiológicos de ACS Cancer Facts & Figures 2026, predice tu riesgo relativo de cáncer en comparación con la población promedio de EE. UU.',
    headingDemographics: 'Demografía',
    headingLifestyle: 'Factores de estilo de vida',
    headingMedical: 'Historial médico',
    headingEnvironmental: 'Exposiciones ambientales',
    headingCancerTypes: 'Tipos de cáncer de interés',
    labelAge: 'Edad',
    labelSex: 'Sexo biológico',
    sexDefault: 'Selecciona…',
    sexMale: 'Masculino',
    sexFemale: 'Femenino',
    labelRace: 'Raza / Etnia',
    labelSmoking: 'Estado de tabaquismo',
    labelPackYears: 'Paquetes-año (paquetes/día × años fumados)',
    labelBmi: 'Categoría de IMC',
    labelAlcohol: 'Consumo de alcohol',
    labelActivity: 'Actividad física',
    labelDiet: 'Calidad de la dieta',
    medicalSubtext: 'Activa las condiciones que apliquen en tu caso',
    environmentalSubtext: 'Activa las exposiciones que apliquen en tu caso',
    cancerTypesSubtext: 'Selecciona cánceres específicos para obtener estimaciones individuales de riesgo de por vida',
    cancerTypesNote: 'Opcional: déjalo sin seleccionar para ver solo el riesgo relativo general',
    predictBtn: 'Predecir mi riesgo →',
    raceWhite: 'Blanco',
    raceBlack: 'Negro / Afroamericano',
    raceHispanic: 'Hispano / Latino',
    raceAian: 'Indígena americano / Nativo de Alaska',
    raceAapi: 'Asiático americano / Isleño del Pacífico',
    smokeNever: 'Nunca ha fumado',
    smokeFormer: 'Exfumador',
    smokeCurrent: 'Fumador actual',
    bmiNormal: 'Normal (18.5–24.9)',
    bmiOverweight: 'Sobrepeso (25–29.9)',
    bmiObese: 'Obesidad (30–39.9)',
    bmiSevere: 'Obesidad severa (40+)',
    alcoholNone: 'Ninguno',
    alcoholLight: 'Ligero (1–7 bebidas/sem)',
    alcoholModerate: 'Moderado (8–14/sem)',
    alcoholHeavy: 'Alto (15+ bebidas/sem)',
    activitySedentary: 'Sedentario / baja actividad',
    activityModerate: 'Moderadamente activo',
    activityActive: 'Activo (150+ min/sem)',
    dietPoor: 'Mala (alta en carne roja/procesada)',
    dietAverage: 'Promedio',
    dietHealthy: 'Saludable (alta en fruta/verduras/fibra)',
    toggleFamilyHistory: 'Antecedentes familiares de cáncer',
    toggleDiabetes: 'Diabetes tipo 2',
    toggleHepatitis: 'Hepatitis B o C',
    toggleHpv: 'Infección por VPH',
    toggleHpylori: 'Infección por H. pylori',
    toggleIbd: 'Enfermedad inflamatoria intestinal',
    toggleRadiation: 'Terapia de radiación previa',
    toggleImmuno: 'Inmunosupresión',
    togglePrecancerous: 'Lesiones precancerosas',
    toggleOccupational: 'Exposición química ocupacional',
    toggleUv: 'Antecedente de alta exposición a rayos UV/sol',
    cancerLung: 'Pulmón',
    cancerColorectal: 'Colorrectal',
    cancerBreast: 'Mama',
    cancerProstate: 'Próstata',
    cancerMelanoma: 'Melanoma',
    cancerLiver: 'Hígado',
    cancerCervical: 'Cervicouterino',
    cancerStomach: 'Estómago',
    cancerBladder: 'Vejiga',
    cancerLymphoma: 'Linfoma',
    cancerLeukemia: 'Leucemia',
    cancerPancreatic: 'Páncreas',
    validateFill: 'Por favor, completa',
    loadingPrediction: 'Ejecutando predicción ML…',
    errorHint: 'Asegúrate de haber iniciado sesión y que el backend esté en ejecución.',
    resultsTitle: 'Tu predicción de riesgo ML',
    resultsSubtitle: 'Basada en análisis de aprendizaje automático de tu perfil',
    rrEyebrow: 'Riesgo relativo general de cáncer',
    rrSubtitle: 'veces el riesgo promedio de la población de EE. UU.',
    gaugeHalf: '0.5× (mitad del promedio)',
    gaugeAvg: '1.0× promedio',
    gaugeHigh: '4× (muy elevado)',
    howReadTitle: 'Cómo leer esto:',
    howReadBody: '1.0× significa exactamente el mismo riesgo que la persona promedio en EE. UU.',
    howReadMid: 'significa que tu riesgo general de cáncer se estima en',
    howReadEnd: 'la referencia poblacional según tu perfil,',
    higher: 'mayor',
    lower: 'menor',
    thanAverage: 'que el promedio, impulsado por los factores listados a continuación.',
    cancerBreakdownTitle: 'Desglose de riesgo por tipo de cáncer',
    cancerBreakdownSub: 'Riesgo estimado de por vida (%) para cada tipo de cáncer según tu perfil frente al promedio poblacional de EE. UU. Cada tarjeta es independiente. (Ej.: cáncer de próstata con 75% de riesgo de por vida significa que 1 de cada 1,3 hombres con tu perfil podría desarrollarlo a lo largo de la vida, no que definitivamente lo tendrás.)',
    keyRiskFactorsTitle: 'Tus factores de riesgo clave',
    featureImportanceTitle: 'Importancia de características (árbol de decisión)',
    featureImportanceSub: 'Qué entradas tuvieron mayor influencia en la predicción del modelo ML para tu perfil.',
    sourceNote: 'Modelo: ML en conjunto (Regresión logística + Bosque aleatorio + Árbol de decisión) entrenado con datos sintéticos calibrados a tasas epidemiológicas de ACS Cancer Facts & Figures 2026. Solo para fines educativos, no es consejo médico. Consulta a un profesional de la salud para recomendaciones personalizadas de tamizaje.',
    estimatedLifetimeRisk: 'riesgo estimado de por vida',
    populationAverage: 'promedio poblacional',
    baseline: 'línea base',
    contributingFactors: 'Factores contribuyentes:',
    notApplicableSex: 'No aplica para tu sexo biológico',
    noRiskFactors: 'No se identificaron factores de riesgo modificables significativos. ¡Sigue con hábitos de vida saludables!',
    impactHigh: 'alto',
    impactModerate: 'moderado',
    impactLow: 'bajo',
    aboveAverageBadge: 'por encima del promedio poblacional',
    belowAverageBadge: 'por debajo del promedio poblacional',
    nearAverageBadge: '≈ Cerca del promedio poblacional'
  }
};

function t(key) {
  return I18N[currentLang]?.[key] || I18N.en[key] || key;
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setChipText(containerId, dataVal, text) {
  const el = document.querySelector(`#${containerId} .chip[data-val="${dataVal}"]`);
  if (el) el.textContent = text;
}

function setToggleLanguageButtons() {
  const enBtn = document.getElementById('lang-en');
  const esBtn = document.getElementById('lang-es');
  const enActive = currentLang === 'en';
  if (enBtn) {
    enBtn.classList.toggle('active', enActive);
    enBtn.setAttribute('aria-pressed', String(enActive));
  }
  if (esBtn) {
    esBtn.classList.toggle('active', !enActive);
    esBtn.setAttribute('aria-pressed', String(!enActive));
  }
}

function applyLanguageToStaticUI() {
  setToggleLanguageButtons();

  setText('heading-demographics', t('headingDemographics'));
  setText('heading-lifestyle', t('headingLifestyle'));
  setText('heading-medical', t('headingMedical'));
  setText('heading-environmental', t('headingEnvironmental'));
  setText('heading-cancer-types', t('headingCancerTypes'));

  setText('label-age', t('labelAge'));
  setText('label-sex', t('labelSex'));
  setText('sex-option-default', t('sexDefault'));
  setText('sex-option-male', t('sexMale'));
  setText('sex-option-female', t('sexFemale'));
  setText('label-race', t('labelRace'));
  setText('label-smoking', t('labelSmoking'));
  setText('label-pack-years', t('labelPackYears'));
  setText('label-bmi', t('labelBmi'));
  setText('label-alcohol', t('labelAlcohol'));
  setText('label-activity', t('labelActivity'));
  setText('label-diet', t('labelDiet'));

  setText('medical-subtext', t('medicalSubtext'));
  setText('environmental-subtext', t('environmentalSubtext'));
  setText('cancer-types-subtext', t('cancerTypesSubtext'));
  setText('cancer-types-note', t('cancerTypesNote'));

  setText('toggle-family-history', t('toggleFamilyHistory'));
  setText('toggle-diabetes', t('toggleDiabetes'));
  setText('toggle-hepatitis', t('toggleHepatitis'));
  setText('toggle-hpv', t('toggleHpv'));
  setText('toggle-hpylori', t('toggleHpylori'));
  setText('toggle-ibd', t('toggleIbd'));
  setText('toggle-radiation', t('toggleRadiation'));
  setText('toggle-immuno', t('toggleImmuno'));
  setText('toggle-precancerous', t('togglePrecancerous'));
  setText('toggle-occupational', t('toggleOccupational'));
  setText('toggle-uv', t('toggleUv'));

  setChipText('race-chips', 'white', t('raceWhite'));
  setChipText('race-chips', 'black', t('raceBlack'));
  setChipText('race-chips', 'hispanic', t('raceHispanic'));
  setChipText('race-chips', 'aian', t('raceAian'));
  setChipText('race-chips', 'aapi', t('raceAapi'));

  setChipText('smoke-chips', 'never', t('smokeNever'));
  setChipText('smoke-chips', 'former', t('smokeFormer'));
  setChipText('smoke-chips', 'current', t('smokeCurrent'));

  setChipText('bmi-chips', 'normal', t('bmiNormal'));
  setChipText('bmi-chips', 'overweight', t('bmiOverweight'));
  setChipText('bmi-chips', 'obese', t('bmiObese'));
  setChipText('bmi-chips', 'severely-obese', t('bmiSevere'));

  setChipText('alcohol-chips', 'none', t('alcoholNone'));
  setChipText('alcohol-chips', 'light', t('alcoholLight'));
  setChipText('alcohol-chips', 'moderate', t('alcoholModerate'));
  setChipText('alcohol-chips', 'heavy', t('alcoholHeavy'));

  setChipText('activity-chips', 'sedentary', t('activitySedentary'));
  setChipText('activity-chips', 'moderate', t('activityModerate'));
  setChipText('activity-chips', 'active', t('activityActive'));

  setChipText('diet-chips', 'poor', t('dietPoor'));
  setChipText('diet-chips', 'average', t('dietAverage'));
  setChipText('diet-chips', 'healthy', t('dietHealthy'));

  setChipText('cancer-type-chips', 'lung', t('cancerLung'));
  setChipText('cancer-type-chips', 'colorectal', t('cancerColorectal'));
  setChipText('cancer-type-chips', 'breast', t('cancerBreast'));
  setChipText('cancer-type-chips', 'prostate', t('cancerProstate'));
  setChipText('cancer-type-chips', 'melanoma', t('cancerMelanoma'));
  setChipText('cancer-type-chips', 'liver', t('cancerLiver'));
  setChipText('cancer-type-chips', 'cervical', t('cancerCervical'));
  setChipText('cancer-type-chips', 'stomach', t('cancerStomach'));
  setChipText('cancer-type-chips', 'bladder', t('cancerBladder'));
  setChipText('cancer-type-chips', 'lymphoma', t('cancerLymphoma'));
  setChipText('cancer-type-chips', 'leukemia', t('cancerLeukemia'));
  setChipText('cancer-type-chips', 'pancreatic', t('cancerPancreatic'));

  const ageInput = document.getElementById('age');
  const packYearsInput = document.getElementById('packYears');
  if (ageInput) ageInput.placeholder = currentLang === 'es' ? 'p. ej. 55' : 'e.g. 55';
  if (packYearsInput) packYearsInput.placeholder = currentLang === 'es' ? 'p. ej. 20' : 'e.g. 20';

  const predictBtn = document.getElementById('predictBtn');
  if (predictBtn) predictBtn.textContent = t('predictBtn');

}

window.setLanguage = function(lang) {
  const normalized = lang === 'es' ? 'es' : 'en';
  if (normalized === currentLang) {
    applyLanguageToStaticUI();
    return;
  }
  currentLang = normalized;
  localStorage.setItem(LANGUAGE_KEY, currentLang);
  applyLanguageToStaticUI();
  if (lastPredictionData) displayResults(lastPredictionData);
};

// ── HELPERS ────────────────────────────────────────────────────────────────
function pct(keys) {
  return keys.filter(k => state[k] !== null && state[k] !== '').length / keys.length;
}

function rrColor(rr) {
  if (rr < 0.85) return 'var(--sage)';
  if (rr < 1.25) return 'var(--tan)';
  if (rr < 2.0)  return 'var(--rose)';
  return 'var(--terracotta)';
}

function rrBadgeClass(rr) {
  if (rr < 0.9) return 'below';
  if (rr < 1.2) return 'at';
  return 'above';
}

function rrBadgeText(rr) {
  if (rr < 0.9)  return `↓ ${((1 - rr) * 100).toFixed(0)}% ${t('belowAverageBadge')}`;
  if (rr < 1.2)  return t('nearAverageBadge');
  return `↑ ${((rr - 1) * 100).toFixed(0)}% ${t('aboveAverageBadge')}`;
}

function formatFeatureLabel(featureKey) {
  const labels = {
    age: { en: 'age', es: 'edad' },
    sex: { en: 'sex', es: 'sexo' },
    race: { en: 'race', es: 'raza' },
    smoking_status: { en: 'smoking status', es: 'estado de tabaquismo' },
    pack_years: { en: 'pack years', es: 'paquetes-año' },
    bmi_category: { en: 'BMI category', es: 'categoría de IMC' },
    alcohol_consumption: { en: 'alcohol consumption', es: 'consumo de alcohol' },
    physical_activity: { en: 'physical activity', es: 'actividad física' },
    diet_quality: { en: 'diet quality', es: 'calidad de la dieta' },
    family_history: { en: 'family history', es: 'antecedentes familiares' },
    diabetes: { en: 'diabetes', es: 'diabetes' },
    hepatitis: { en: 'hepatitis', es: 'hepatitis' },
    hpv: { en: 'HPV', es: 'VPH' },
    h_pylori: { en: 'H. pylori', es: 'H. pylori' },
    ibd: { en: 'IBD', es: 'EII' },
    radiation_history: { en: 'radiation history', es: 'historial de radiación' },
    immunosuppression: { en: 'immunosuppression', es: 'inmunosupresión' },
    precancerous_lesions: { en: 'precancerous lesions', es: 'lesiones precancerosas' },
    occupational_exposure: { en: 'occupational exposure', es: 'exposición ocupacional' },
    uv_exposure: { en: 'UV exposure', es: 'exposición UV' }
  };
  const label = labels[featureKey];
  if (!label) return featureKey.replace(/_/g, ' ');
  return currentLang === 'es' ? label.es : label.en;
}

// ── PROGRESS ───────────────────────────────────────────────────────────────
function updateProgress() {
  const demoPct      = pct(DEMO_KEYS);
  const lifestylePct = pct(LIFESTYLE_KEYS);
  const overall      = Math.round(pct(REQUIRED) * 100);
  document.getElementById('progressPct').textContent = overall + '%';
  document.getElementById('fill-1').style.height = (demoPct * 100) + '%';
  document.getElementById('fill-2').style.height = (demoPct === 1 ? lifestylePct * 100 : 0) + '%';
  document.getElementById('fill-3').style.height = (lifestylePct === 1 ? 50 : 0) + '%';
  setDot('dot-demographics', demoPct === 1, demoPct > 0 && demoPct < 1);
  setDot('dot-lifestyle', lifestylePct === 1 && demoPct === 1, demoPct === 1 && lifestylePct < 1);
  setDot('dot-medical', false, lifestylePct === 1);
  setDot('dot-environmental', false, lifestylePct === 1);
}

function setDot(id, done, active) {
  const el = document.getElementById(id);
  el.classList.toggle('done', done);
  el.classList.toggle('active', !done && active);
}

function showSidebar() {
  document.getElementById('progressSidebar').classList.add('visible');
}

[
  ['wrap-demographics','section-demographics'],
  ['wrap-lifestyle','section-lifestyle'],
  ['wrap-medical','section-medical'],
  ['wrap-environmental','section-environmental'],
].forEach(([wrapId, sectionId]) => {
  document.getElementById(wrapId).addEventListener('click', () => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── CHIP INIT ─────────────────────────────────────────────────────────────
function initChips(containerId, stateKey) {
  document.getElementById(containerId).querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.getElementById(containerId).querySelectorAll('.chip')
        .forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      state[stateKey] = chip.dataset.val;
      showSidebar(); updateProgress();
    });
  });
}

function initCancerTypeChips() {
  document.getElementById('cancer-type-chips').querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      if (chip.classList.contains('na')) return;
      chip.classList.toggle('selected');
      const val = chip.dataset.val;
      if (chip.classList.contains('selected')) {
        if (!state.selected_cancer_types.includes(val)) state.selected_cancer_types.push(val);
      } else {
        state.selected_cancer_types = state.selected_cancer_types.filter(t => t !== val);
      }
    });
  });
}

function updateCancerChipAvailability() {
  const sex = state.sex;
  document.querySelectorAll('#cancer-type-chips .chip[data-sex]').forEach(chip => {
    const chipSex = chip.getAttribute('data-sex');
    if (sex && chipSex && chipSex !== sex) {
      chip.classList.add('na');
      chip.classList.remove('selected');
      state.selected_cancer_types = state.selected_cancer_types.filter(t => t !== chip.dataset.val);
    } else {
      chip.classList.remove('na');
    }
  });
}

// ── VALIDATE ──────────────────────────────────────────────────────────────
function validate() {
  const missing = REQUIRED.filter(k => !state[k]);
  if (missing.length > 0) {
    alert(`${t('validateFill')}: ${missing.map(k => k.replace(/_/g,' ')).join(', ')}`);
    return false;
  }
  return true;
}

// ── PREDICT ───────────────────────────────────────────────────────────────
window.predictRisk = async function() {
  if (!validate()) return;

  const resultsCard = document.getElementById('results');
  resultsCard.classList.remove('results-hidden');
  resultsCard.innerHTML = `<div class="ai-loading"><div class="dots"><span></span><span></span><span></span></div> ${t('loadingPrediction')}</div>`;
  resultsCard.scrollIntoView({ behavior: 'smooth' });

  // Complete the progress sidebar
  ['dot-demographics','dot-lifestyle','dot-medical','dot-environmental'].forEach(id => {
    const el = document.getElementById(id);
    el.classList.remove('active'); el.classList.add('done');
  });
  ['fill-1','fill-2','fill-3'].forEach(id => {
    document.getElementById(id).style.height = '100%';
  });
  document.getElementById('progressPct').textContent = '100%';

  try {
    const payload = {
      age: state.age, sex: state.sex, race: state.race,
      smoking_status: state.smoking_status, pack_years: state.pack_years,
      bmi_category: state.bmi_category, alcohol_consumption: state.alcohol_consumption,
      physical_activity: state.physical_activity, diet_quality: state.diet_quality,
      family_history: state.family_history, diabetes: state.diabetes,
      hepatitis: state.hepatitis, hpv: state.hpv, h_pylori: state.h_pylori,
      ibd: state.ibd, radiation_history: state.radiation_history,
      immunosuppression: state.immunosuppression,
      precancerous_lesions: state.precancerous_lesions,
      occupational_exposure: state.occupational_exposure, uv_exposure: state.uv_exposure,
      ...(state.selected_cancer_types.length > 0
          ? { selected_cancer_types: state.selected_cancer_types } : {})
    };

    const res = await fetch(`${pythonURI}/api/cancer-risk/predict`, {
      ...fetchOptions,
      method: 'POST',
      headers: { ...(fetchOptions.headers || {}), 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || res.statusText);
    }

    const riskResult = await res.json();
    // ── Save to localStorage for Personalized Report ──────────────────
    try {
      const cancersNorm = riskResult.cancer_type_risks
        ? Object.entries(riskResult.cancer_type_risks).map(([id, info]) => ({
            id, name: info.label,
            score: info.lifetime_risk_pct != null ? info.lifetime_risk_pct / 100 : null,
            level: info.risk_level, applicable: info.applicable
          })).filter(c => c.applicable !== false)
        : [];
      localStorage.setItem('mlCancerRiskResults', JSON.stringify({
        ...riskResult,
        cancers: cancersNorm,
        profile: payload,
        savedAt: new Date().toISOString()
      }));
      localStorage.setItem('acsUserProfile', JSON.stringify({
        age: state.age, sex: state.sex, race: state.race,
        smoking_status: state.smoking_status, pack_years: state.pack_years,
        bmi_category: state.bmi_category, alcohol_consumption: state.alcohol_consumption,
        physical_activity: state.physical_activity, diet_quality: state.diet_quality,
        family_history: state.family_history, diabetes: state.diabetes,
        hepatitis: state.hepatitis, hpv: state.hpv, h_pylori: state.h_pylori,
        ibd: state.ibd, radiation_history: state.radiation_history,
        immunosuppression: state.immunosuppression,
        precancerous_lesions: state.precancerous_lesions,
        occupational_exposure: state.occupational_exposure,
        uv_exposure: state.uv_exposure
      }));
    } catch(_) {}
    displayResults(riskResult);
  } catch(e) {
    resultsCard.innerHTML = `<div class="card-sub" style="color:var(--terracotta);padding:20px">
      Error: ${e.message}. ${t('errorHint')}
    </div>`;
  }
};

// ── DISPLAY RESULTS ────────────────────────────────────────────────────────
function displayResults(data) {
  lastPredictionData = data;
  const rr    = data.overall_relative_risk;
  const color = rrColor(rr);
  const badgeClass = rrBadgeClass(rr);
  const badgeText  = rrBadgeText(rr);

  // Gauge: 1.0× sits at 25%, 4× is 100%
  const gaugePct = Math.min(100, Math.max(4, (rr / 4) * 100));

  const resultsCard = document.getElementById('results');
  resultsCard.innerHTML = `
    <div class="card-title">${t('resultsTitle')}</div>
    <div class="card-sub">${t('resultsSubtitle')}</div>

    <!-- ── HERO: relative risk multiplier ── -->
    <div class="risk-hero">

      <div class="rr-eyebrow">${t('rrEyebrow')}</div>

      <div class="rr-number" style="color:${color}">
        ${rr.toFixed(1)}<sup>×</sup>
      </div>

      <div class="rr-subtitle">${t('rrSubtitle')}</div>

      <div class="rr-badge ${badgeClass}">${badgeText}</div>

      <div class="gauge-wrap">
        <div class="gauge-track">
          <div class="gauge-fill" id="gauge-fill"></div>
        </div>
        <div class="gauge-marker-row">
          <div class="gauge-marker"></div>
        </div>
        <br>
        <div class="gauge-labels">
          <span>${t('gaugeHalf')}</span>
          <span style="font-weight:600;color:var(--text-main)">${t('gaugeAvg')}</span>
          <span>${t('gaugeHigh')}</span>
        </div>
      </div>

      <div class="rr-explain">
        <strong>${t('howReadTitle')}</strong> ${t('howReadBody')}
        ${currentLang === 'es' ? 'Tu puntuación de' : 'Your score of'} <strong>${rr.toFixed(1)}×</strong> ${t('howReadMid')}
        <strong>${rr.toFixed(1)} ${currentLang === 'es' ? 'veces' : 'times'}</strong> ${t('howReadEnd')}
        ${rr > 1 ? t('higher') : t('lower')} ${t('thanAverage')}
      </div>
    </div>

    <!-- ── CANCER TYPE BREAKDOWN ── -->
    ${data.cancer_type_risks ? `
      <div class="res-section-title">${t('cancerBreakdownTitle')}</div>
      <p class="card-sub" style="margin-top:-8px;margin-bottom:16px">
        ${t('cancerBreakdownSub')}
      </p>
      <div class="ct-grid" id="ct-grid"></div>
    ` : ''}

    <!-- ── KEY RISK FACTORS ── -->
    <div class="res-section-title">${t('keyRiskFactorsTitle')}</div>
    <div class="risk-factors-list" id="risk-factors-list"></div>

    <!-- ── FEATURE IMPORTANCE ── -->
    <div class="res-section-title">${t('featureImportanceTitle')}</div>
    <p class="card-sub" style="margin-top:-8px;margin-bottom:16px">
      ${t('featureImportanceSub')}
    </p>
    <div class="importance-grid" id="importance-grid"></div>

    <div class="source-note">
      ${t('sourceNote')}
    </div>
  `;

  // Animate gauge
  setTimeout(() => {
    const gf = document.getElementById('gauge-fill');
    gf.style.width = gaugePct + '%';
    gf.style.background = color;
  }, 200);

  // Cancer type cards
  if (data.cancer_type_risks) {
    const grid = document.getElementById('ct-grid');
    grid.innerHTML = Object.entries(data.cancer_type_risks).map(([ct, res]) => {
      if (!res.applicable) {
        return `
          <div class="ct-card">
            <div class="ct-card-label">${res.label}</div>
            <div class="ct-na">${t('notApplicableSex')}</div>
            <div class="ct-note">${res.note}</div>
          </div>`;
      }
      const barPct = Math.min(100, (res.lifetime_risk_pct / 80) * 100);
      const levelColor = res.risk_level === 'high' ? 'var(--terracotta)'
                       : res.risk_level === 'moderate' ? '#d9a566' : 'var(--sage)';
      const levelLabel = res.risk_level === 'high' ? t('impactHigh')
                       : res.risk_level === 'moderate' ? t('impactModerate') : t('impactLow');
      return `
        <div class="ct-card">
          <div class="ct-card-label">${res.label}</div>
          <div class="ct-lifetime" style="color:${levelColor}" data-target="${res.lifetime_risk_pct}">0.0%</div>
          <div class="ct-lifetime-sub">${t('estimatedLifetimeRisk')}</div>
          <div class="ct-rr-line">
            <strong>${res.relative_risk.toFixed(1)}×</strong> ${t('populationAverage')}
            &nbsp;·&nbsp; ${t('baseline')}: ${res.baseline_risk_pct}%
          </div>
          <div class="ct-level-bar">
            <div class="ct-level-fill ${res.risk_level}" style="width:0%" data-w="${barPct.toFixed(1)}"></div>
          </div>
          <div class="ct-badge ${res.risk_level}">${levelLabel}</div>
          ${res.key_factors.length > 0 ? `
            <div class="ct-factors">
              <strong style="font-size:10px;text-transform:uppercase;letter-spacing:.05em">${t('contributingFactors')}</strong>
              ${res.key_factors.join(' · ')}
            </div>` : ''}
          <div class="ct-note">${res.note}</div>
        </div>`;
    }).join('');

    // Animate numbers and bars
    setTimeout(() => {
      grid.querySelectorAll('.ct-lifetime[data-target]').forEach(el => {
        const target = parseFloat(el.dataset.target);
        const dur = 900; let start = null;
        function step(ts) {
          if (!start) start = ts;
          const prog = Math.min((ts - start) / dur, 1);
          const ease = 1 - Math.pow(1 - prog, 3);
          el.textContent = (target * ease).toFixed(1) + '%';
          if (prog < 1) requestAnimationFrame(step);
          else el.textContent = target.toFixed(1) + '%';
        }
        requestAnimationFrame(step);
      });
      grid.querySelectorAll('.ct-level-fill[data-w]').forEach(el => {
        el.style.width = el.dataset.w + '%';
      });
    }, 300);
  }

  // Risk factors
  const rfList = document.getElementById('risk-factors-list');
  if (data.risk_factors?.length > 0) {
    rfList.innerHTML = data.risk_factors.map(rf => `
      <div class="risk-factor-item ${rf.impact}">
        <div class="rf-header">
          <div class="rf-name">${rf.factor}</div>
          <div class="rf-impact ${rf.impact}">${rf.impact === 'high' ? t('impactHigh') : rf.impact === 'moderate' ? t('impactModerate') : t('impactLow')}</div>
        </div>
        <div class="rf-detail">${rf.detail}</div>
      </div>
    `).join('');
  } else {
    rfList.innerHTML = `<div class="card-sub">${t('noRiskFactors')}</div>`;
  }

  // Feature importance
  const impGrid = document.getElementById('importance-grid');
  const sorted = Object.entries(data.feature_importances).sort((a,b) => b[1]-a[1]).slice(0, 8);
  impGrid.innerHTML = sorted.map(([feat, imp]) => `
    <div class="importance-row">
      <div class="importance-label">${formatFeatureLabel(feat)}</div>
      <div class="importance-bar-track">
        <div class="importance-bar-fill" style="width:0%" data-w="${(imp*100).toFixed(0)}"></div>
      </div>
      <div class="importance-val">${(imp*100).toFixed(1)}%</div>
    </div>
  `).join('');
  setTimeout(() => {
    impGrid.querySelectorAll('.importance-bar-fill').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 300);
}

// ── INIT ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyLanguageToStaticUI();

  document.getElementById('age').addEventListener('input', e => {
    state.age = parseInt(e.target.value) || null;
    showSidebar(); updateProgress();
  });
  document.getElementById('sex').addEventListener('change', e => {
    state.sex = e.target.value || null;
    showSidebar(); updateProgress();
    updateCancerChipAvailability();
  });
  document.getElementById('packYears').addEventListener('input', e => {
    state.pack_years = parseInt(e.target.value) || 0;
  });

  initChips('race-chips',     'race');
  initChips('smoke-chips',    'smoking_status');
  initChips('bmi-chips',      'bmi_category');
  initChips('alcohol-chips',  'alcohol_consumption');
  initChips('activity-chips', 'physical_activity');
  initChips('diet-chips',     'diet_quality');
  initCancerTypeChips();

  const checkboxMap = {
    familyHistory:'family_history', diabetes:'diabetes', hepatitis:'hepatitis',
    hpv:'hpv', hPylori:'h_pylori', ibd:'ibd',
    radiationHistory:'radiation_history', immunosuppression:'immunosuppression',
    precancerousLesions:'precancerous_lesions',
    occupationalExposure:'occupational_exposure', uvExposure:'uv_exposure'
  };
  Object.entries(checkboxMap).forEach(([elId, key]) => {
    document.getElementById(elId).addEventListener('change', e => {
      state[key] = e.target.checked;
      showSidebar(); updateProgress();
    });
  });

  document.getElementById('smoke-chips').querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.getElementById('pack-years-field').style.display =
        chip.dataset.val !== 'never' ? 'block' : 'none';
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) showSidebar();
  }, { passive: true });

  updateProgress();
});
</script>
<!-- ── ACS RISK CHAT WIDGET ─────────────────────────────────────────────────
     Paste this entire block right before </body> in cancerrisk.md
     Does NOT touch any existing calculator code — reads DOM only.
────────────────────────────────────────────────────────────────────────── -->

<style>
/* ── Floating button ── */
.rcc-fab {
  position: fixed; bottom: 28px; right: 28px;
  width: 54px; height: 54px; border-radius: 50%;
  background: var(--rose); border: none; cursor: pointer;
  box-shadow: 0 4px 20px rgba(224,122,106,0.45);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
}
.rcc-fab:hover { background: var(--terracotta); transform: translateY(-2px); box-shadow: 0 6px 28px rgba(224,122,106,0.5); }
.rcc-fab svg { width: 22px; height: 22px; fill: white; }
.rcc-fab-badge {
  position: absolute; top: -4px; right: -4px;
  background: var(--terracotta); color: white;
  font-size: 9px; font-weight: 700; letter-spacing: 0.04em;
  padding: 2px 5px; border-radius: 8px;
  border: 2px solid var(--cream);
  font-family: var(--sans);
}

/* ── Panel ── */
.rcc-panel {
  position: fixed; bottom: 94px; right: 28px;
  width: 360px;
  height: 500px;
  max-height: calc(100vh - 180px);
  background: var(--warm-white);
  border: 1.5px solid var(--border-bright);
  border-radius: 18px;
  box-shadow: 0 8px 48px rgba(61,44,36,0.15);
  display: flex; flex-direction: column;
  z-index: 999; overflow: hidden;
  opacity: 0; transform: translateY(14px);
  pointer-events: none;
  transition: opacity 0.22s ease, transform 0.22s ease;
}
.rcc-panel.open { opacity: 1; transform: translateY(0); pointer-events: all; }

/* ── Header ── */
.rcc-header {
  padding: 14px 18px;
  background: linear-gradient(135deg, var(--brown) 0%, #4a2e22 100%);
  display: flex; align-items: center; justify-content: space-between;
  flex-shrink: 0;
}
.rcc-header-left { display: flex; align-items: center; gap: 9px; }
.rcc-status-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--sage); flex-shrink: 0; }
.rcc-header-title { font-family: var(--serif); font-size: 16px; font-weight: 600; color: white; line-height: 1.2; }
.rcc-header-sub { font-size: 10px; color: rgba(255,255,255,0.5); letter-spacing: 0.08em; text-transform: uppercase; }
.rcc-header-actions { display: flex; align-items: center; gap: 7px; }
.rcc-notes-btn {
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.9); border-radius: 999px; cursor: pointer;
  font-family: var(--sans); font-size: 10px; font-weight: 700; letter-spacing: 0.06em;
  text-transform: uppercase; padding: 5px 9px;
}
.rcc-notes-btn:hover { background: rgba(255,255,255,0.22); }
.rcc-close-btn {
  background: rgba(255,255,255,0.12); border: none; color: rgba(255,255,255,0.7);
  width: 26px; height: 26px; border-radius: 50%; cursor: pointer;
  display: flex; align-items: center; justify-content: center; font-size: 14px;
  transition: background 0.15s;
}
.rcc-close-btn:hover { background: rgba(255,255,255,0.22); color: white; }

/* ── Context bar ── */
.rcc-context-bar {
  padding: 7px 14px;
  background: var(--sage-pale);
  border-bottom: 1px solid rgba(138,170,140,0.3);
  font-size: 11px; color: #3d6b3f; line-height: 1.5;
  flex-shrink: 0; font-family: var(--sans);
}
.rcc-context-bar b { font-weight: 700; }
.rcc-context-bar .rcc-rr { color: var(--terracotta); font-weight: 700; }

/* ── Messages ── */
.rcc-messages {
  flex: 1; overflow-y: auto; min-height: 0;
  padding: 14px 13px; display: flex; flex-direction: column; gap: 10px;
}
.rcc-messages::-webkit-scrollbar { width: 4px; }
.rcc-messages::-webkit-scrollbar-thumb { background: var(--tan-light); border-radius: 2px; }

.rcc-bubble {
  padding: 11px 14px; border-radius: 12px;
  font-size: 13px; line-height: 1.65; max-width: 90%;
  font-family: var(--sans);
}
.rcc-bubble-user {
  background: var(--rose-pale); border: 1px solid var(--rose-light);
  color: var(--brown); align-self: flex-end; border-bottom-right-radius: 4px;
}
.rcc-bubble-ai {
  background: var(--cream); border: 1px solid var(--border-bright);
  color: var(--text-main); align-self: flex-start; border-bottom-left-radius: 4px;
}
.rcc-bubble-ai-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
}
.rcc-bubble-ai b {
  display: block; font-size: 10px; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--rose); margin-bottom: 0; font-weight: 700;
}
.rcc-note-add-btn {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid rgba(138,170,140,0.55);
  background: rgba(138,170,140,0.15);
  color: #456846;
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.rcc-note-add-btn:hover {
  background: rgba(138,170,140,0.28);
  border-color: rgba(138,170,140,0.8);
}
.rcc-note-add-btn.saved {
  background: rgba(138,170,140,0.35);
  color: #2f5431;
}

/* ── Suggestion chips ── */
.rcc-chips-row {
  padding: 0 13px 10px; display: flex; flex-wrap: wrap; gap: 6px;
  flex-shrink: 0;
}
.rcc-chip {
  padding: 5px 11px; background: var(--sage-pale);
  border: 1px solid rgba(138,170,140,0.4); border-radius: 14px;
  cursor: pointer; font-size: 11px; font-weight: 500;
  color: var(--text-main); font-family: var(--sans);
  transition: background 0.15s, border-color 0.15s;
}
.rcc-chip:hover { background: var(--tan-light); border-color: var(--tan); }

/* ── Notes library panel ── */
.rcc-notes-panel {
  display: none;
  flex: 1;
  min-height: 0;
  padding: 12px 13px;
  background: #fff;
  overflow-y: auto;
}
.rcc-notes-panel.open { display: block; }
.rcc-note-card {
  border: 1px solid var(--border-bright);
  border-radius: 10px;
  background: var(--cream);
  padding: 10px 11px;
  margin-bottom: 8px;
}
.rcc-note-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 6px;
  font-size: 10px;
  color: var(--text-muted);
  letter-spacing: 0.03em;
}
.rcc-note-text {
  font-size: 12px;
  line-height: 1.55;
  color: var(--text-main);
  white-space: pre-wrap;
}
.rcc-note-delete {
  border: 1px solid var(--rose-light);
  background: #fff;
  color: var(--rose);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border-radius: 999px;
  padding: 3px 8px;
  cursor: pointer;
}
.rcc-note-delete:hover { color: var(--terracotta); border-color: var(--rose); }
.rcc-notes-empty {
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.6;
  padding: 6px 2px;
}

/* ── Thinking indicator ── */
.rcc-thinking {
  display: none; padding: 6px 14px; font-size: 11px;
  color: var(--text-muted); font-family: var(--sans);
  font-style: italic; flex-shrink: 0;
}
.rcc-thinking.show { display: block; }

/* ── Input row ── */
.rcc-input-row {
  padding: 11px 13px; border-top: 1px solid var(--border);
  display: flex; gap: 8px; align-items: center;
  flex-shrink: 0; background: var(--warm-white);
}
.rcc-input {
  flex: 1; background: var(--cream);
  border: 1.5px solid var(--border-bright); border-radius: 18px;
  padding: 8px 13px; font-family: var(--sans); font-size: 13px;
  color: var(--text-main); outline: none;
  transition: border-color 0.2s;
}
.rcc-input::placeholder { color: var(--text-muted); }
.rcc-input:focus { border-color: var(--rose); }
.rcc-send-btn {
  width: 34px; height: 34px; border-radius: 50%;
  background: var(--rose); border: none; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: background 0.2s, transform 0.15s;
}
.rcc-send-btn:hover:not(:disabled) { background: var(--terracotta); transform: scale(1.06); }
.rcc-send-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.rcc-send-btn svg { width: 15px; height: 15px; fill: white; }

@media (max-width: 520px) {
  .rcc-panel { width: calc(100vw - 24px); right: 12px; bottom: 88px; }
  .rcc-fab  { right: 16px; bottom: 20px; }
}
</style>

<!-- Floating button -->
<button class="rcc-fab" id="rccFab" onclick="rccToggle()" title="Ask the ACS Risk Assistant">
  <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.34 0-2.61-.35-3.71-.96l-.27-.14-2.78.47.47-2.78-.14-.27C5.35 14.61 5 13.34 5 12c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7z"/><circle cx="9" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="15" cy="12" r="1"/></svg>
  <div class="rcc-fab-badge">AI</div>
</button>

<!-- Chat panel -->
<div class="rcc-panel" id="rccPanel">

  <div class="rcc-header">
    <div class="rcc-header-left">
      <div class="rcc-status-dot"></div>
      <div>
        <div class="rcc-header-title">ACS Risk Assistant</div>
        <div class="rcc-header-sub">Personalized to your profile</div>
      </div>
    </div>
    <div class="rcc-header-actions">
      <button class="rcc-notes-btn" id="rccNotesBtn" onclick="rccToggleNotes()">Notebook</button>
      <button class="rcc-close-btn" onclick="rccToggle()"></button>
    </div>
  </div>

  <div class="rcc-context-bar" id="rccContextBar">
    No profile loaded yet — fill in the calculator, then ask me questions.
  </div>

  <div class="rcc-messages" id="rccMessages"></div>
  <div class="rcc-notes-panel" id="rccNotesPanel"></div>

  <div class="rcc-chips-row" id="rccChips"></div>

  <div class="rcc-thinking" id="rccThinking">Assistant is thinking…</div>

  <div class="rcc-input-row">
    <input class="rcc-input" id="rccInput" type="text"
      placeholder="Ask about your cancer risk…"
      onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();rccSend()}" />
    <button class="rcc-send-btn" id="rccSendBtn" onclick="rccSend()">
      <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
    </button>
  </div>

</div>

<script>
// ── ACS RISK CHAT WIDGET ──────────────────────────────────────────────────
// Reads calculator fields from the DOM — does NOT touch the module-scoped state.

let _rccOpen       = false;
let _rccInited     = false;
let _rccProfile    = null;
let _rccResults    = null;
let _rccMode       = 'chat';

const RCC_PROFILE_NOTES_KEY = 'acsProfileNotes';

function rccReadProfileNotes() {
  try {
    const parsed = JSON.parse(localStorage.getItem(RCC_PROFILE_NOTES_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function rccWriteProfileNotes(notes) {
  localStorage.setItem(RCC_PROFILE_NOTES_KEY, JSON.stringify(notes));
}

function rccSaveProfileNote(noteText) {
  const text = String(noteText || '').trim();
  if (!text) return;

  const notes = rccReadProfileNotes();
  const next = [{ id: Date.now(), text, at: new Date().toISOString() }, ...notes]
    .filter((item, idx, arr) => idx === arr.findIndex(other => (other.text || '').toLowerCase() === (item.text || '').toLowerCase()))
    .slice(0, 40);
  rccWriteProfileNotes(next);
  rccRenderNotesLibrary();
}

window.rccDeleteProfileNote = function(noteId) {
  const id = Number(noteId);
  const notes = rccReadProfileNotes().filter(n => Number(n.id) !== id);
  rccWriteProfileNotes(notes);
  rccRenderNotesLibrary();
};

function rccRenderNotesLibrary() {
  const panel = document.getElementById('rccNotesPanel');
  if (!panel) return;
  const notes = rccReadProfileNotes();

  if (!notes.length) {
    panel.innerHTML = '<div class="rcc-notes-empty">No saved notes yet. Tap the + button on any assistant message to add it to your digital notebook.</div>';
    return;
  }

  panel.innerHTML = notes.map(note => {
    const dateStr = new Date(note.at || Date.now()).toLocaleString();
    const text = String(note.text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
    return `
      <div class="rcc-note-card">
        <div class="rcc-note-meta">
          <span>Saved ${dateStr}</span>
          <button class="rcc-note-delete" onclick="rccDeleteProfileNote(${Number(note.id)})">Remove</button>
        </div>
        <div class="rcc-note-text">${text}</div>
      </div>
    `;
  }).join('');
}

window.rccToggleNotes = function() {
  _rccMode = _rccMode === 'notes' ? 'chat' : 'notes';
  const notesPanel = document.getElementById('rccNotesPanel');
  const msgPanel = document.getElementById('rccMessages');
  const chips = document.getElementById('rccChips');
  const thinking = document.getElementById('rccThinking');
  const inputRow = document.querySelector('.rcc-input-row');
  const btn = document.getElementById('rccNotesBtn');

  const notesMode = _rccMode === 'notes';
  notesPanel.classList.toggle('open', notesMode);
  msgPanel.style.display = notesMode ? 'none' : 'flex';
  chips.style.display = notesMode ? 'none' : '';
  thinking.style.display = notesMode ? 'none' : '';
  inputRow.style.display = notesMode ? 'none' : 'flex';
  if (btn) btn.textContent = notesMode ? 'Back' : 'Notebook';

  if (notesMode) rccRenderNotesLibrary();
};

window.rccSaveBubbleNote = function(btn) {
  const bubble = btn.closest('.rcc-bubble-ai');
  const textNode = bubble?.querySelector('.rcc-bubble-ai-text');
  const noteText = (textNode?.innerText || textNode?.textContent || '').trim();
  if (!noteText) return;

  rccSaveProfileNote(noteText);
  btn.classList.add('saved');
  btn.textContent = '✓';
  btn.title = 'Saved to digital notebook';
};

// ── 1. Read all calculator fields from the DOM ─────────────────────────────
function rccReadProfile() {
  const chip    = id => document.querySelector(`#${id} .chip.selected`)?.dataset.val ?? null;
  const tog     = id => !!(document.getElementById(id)?.checked);
  const num     = id => document.getElementById(id)?.value?.trim() || null;
  const sel     = id => { const v = document.getElementById(id)?.value; return v || null; };
  const multiChip = id => [...document.querySelectorAll(`#${id} .chip.selected`)].map(c => c.dataset.val);

  return {
    age:                  num('age'),
    sex:                  sel('sex'),
    race:                 chip('race-chips'),
    smoking_status:       chip('smoke-chips'),
    pack_years:           num('packYears'),
    bmi_category:         chip('bmi-chips'),
    alcohol_consumption:  chip('alcohol-chips'),
    physical_activity:    chip('activity-chips'),
    diet_quality:         chip('diet-chips'),
    family_history:       tog('familyHistory'),
    diabetes:             tog('diabetes'),
    hepatitis:            tog('hepatitis'),
    hpv:                  tog('hpv'),
    h_pylori:             tog('hPylori'),
    ibd:                  tog('ibd'),
    radiation_history:    tog('radiationHistory'),
    immunosuppression:    tog('immunosuppression'),
    precancerous_lesions: tog('precancerousLesions'),
    occupational_exposure:tog('occupationalExposure'),
    uv_exposure:          tog('uvExposure'),
    cancer_types:         multiChip('cancer-type-chips'),
  };
}

// ── 2. Read prediction results from the results card ──────────────────────
function rccReadResults() {
  const card = document.getElementById('results');
  if (!card || card.classList.contains('results-hidden')) return null;

  const rrEl  = card.querySelector('.rr-number');
  if (!rrEl) return null;

  // Overall RR — grab just the number (strip the <sup>)
  const rrText = rrEl.cloneNode(true);
  rrText.querySelectorAll('sup').forEach(s => s.remove());
  const overallRR = rrText.textContent.trim() + '×';

  const badge = card.querySelector('.rr-badge')?.textContent?.trim() || '';

  // Per-cancer-type cards
  const ctLines = [];
  card.querySelectorAll('.ct-card').forEach(c => {
    const label    = c.querySelector('.ct-card-label')?.textContent?.trim();
    const lifetime = c.querySelector('.ct-lifetime')?.textContent?.trim();
    const rr       = c.querySelector('.ct-rr-line strong')?.textContent?.trim();
    const level    = c.querySelector('.ct-badge')?.textContent?.trim();
    const na       = c.querySelector('.ct-na');
    if (na) {
      ctLines.push(`${label}: Not applicable for biological sex`);
    } else if (label && lifetime) {
      ctLines.push(`${label}: ${lifetime} lifetime risk, ${rr ? rr + ' pop. avg' : ''}, level: ${level || 'N/A'}`);
    }
  });

  // Key risk factors
  const rfs = [...card.querySelectorAll('.rf-name')].map(e => e.textContent.trim());

  return { overallRR, badge, ctLines, riskFactors: rfs };
}

// ── 3. Build the context string injected into every message ───────────────
function rccBuildContext(profile, results) {
  const lines = ['[ACS CANCER RISK CALCULATOR — USER PROFILE CONTEXT]'];

  if (profile.age)               lines.push(`Age: ${profile.age}`);
  if (profile.sex)               lines.push(`Biological sex: ${profile.sex}`);
  if (profile.race)              lines.push(`Race/ethnicity: ${profile.race}`);
  if (profile.smoking_status) {
    const py = (profile.smoking_status !== 'never' && profile.pack_years)
                 ? ` — ${profile.pack_years} pack-years` : '';
    lines.push(`Smoking status: ${profile.smoking_status}${py}`);
  }
  if (profile.bmi_category)      lines.push(`BMI category: ${profile.bmi_category}`);
  if (profile.alcohol_consumption) lines.push(`Alcohol consumption: ${profile.alcohol_consumption}`);
  if (profile.physical_activity) lines.push(`Physical activity: ${profile.physical_activity}`);
  if (profile.diet_quality)      lines.push(`Diet quality: ${profile.diet_quality}`);

  const medFlags = [
    [profile.family_history,       'Family history of cancer'],
    [profile.diabetes,             'Type 2 Diabetes'],
    [profile.hepatitis,            'Hepatitis B or C'],
    [profile.hpv,                  'HPV infection'],
    [profile.h_pylori,             'H. pylori infection'],
    [profile.ibd,                  'Inflammatory Bowel Disease'],
    [profile.radiation_history,    'Prior radiation therapy'],
    [profile.immunosuppression,    'Immunosuppression'],
    [profile.precancerous_lesions, 'Precancerous lesions'],
    [profile.occupational_exposure,'Occupational chemical exposure'],
    [profile.uv_exposure,          'High UV / sun exposure'],
  ].filter(([v]) => v).map(([, label]) => label);

  if (medFlags.length) lines.push(`Medical/environmental factors present: ${medFlags.join(', ')}`);
  if (profile.cancer_types?.length) lines.push(`Cancer types of interest: ${profile.cancer_types.join(', ')}`);

  if (results) {
    lines.push('');
    lines.push('[ML PREDICTION RESULTS]');
    lines.push(`Overall relative risk: ${results.overallRR} — ${results.badge}`);
    if (results.ctLines.length) {
      lines.push('Per-cancer-type breakdown:');
      results.ctLines.forEach(l => lines.push('  • ' + l));
    }
    if (results.riskFactors.length) {
      lines.push(`Key risk factors identified by the model: ${results.riskFactors.join(', ')}`);
    }
  } else {
    lines.push('');
    lines.push('[Note: The user has not yet run the ML prediction — no results to reference.]');
  }

  lines.push('');
  lines.push('[INSTRUCTIONS FOR ASSISTANT]');
  lines.push('You are the ACS Cancer Risk Assistant. Use the profile above to personalize every answer.');
  lines.push('Reference the user\'s specific risk factors, prediction numbers, and cancer types where relevant.');
  lines.push('Keep answers under 170 words. Always recommend consulting a healthcare provider for personal medical decisions.');
  lines.push('If a field is missing/null, do not mention it — just answer with what you have.');

  return lines.join('\n');
}

// ── 4. Build the context bar summary line ─────────────────────────────────
function rccContextSummary(profile, results) {
  const parts = [];
  if (profile.age)  parts.push(`Age ${profile.age}`);
  if (profile.sex)  parts.push(profile.sex);
  if (profile.smoking_status) parts.push(profile.smoking_status === 'never' ? 'non-smoker' : profile.smoking_status + ' smoker');
  if (profile.bmi_category)   parts.push(`BMI: ${profile.bmi_category}`);

  const flagCount = [
    profile.family_history, profile.diabetes, profile.hepatitis,
    profile.hpv, profile.h_pylori, profile.ibd, profile.radiation_history,
    profile.immunosuppression, profile.precancerous_lesions,
    profile.occupational_exposure, profile.uv_exposure
  ].filter(Boolean).length;
  if (flagCount) parts.push(`${flagCount} medical factor${flagCount > 1 ? 's' : ''}`);

  if (!parts.length) {
    return 'No fields filled yet — fill the calculator above, then ask me questions.';
  }

  let s = `<b>Profile snapshot:</b> ${parts.join(' · ')}`;
  if (results) s += ` &nbsp;·&nbsp; <span class="rcc-rr">Risk: ${results.overallRR}</span>`;
  return s;
}

// ── 5. Build dynamic suggestion chips based on the profile ─────────────────
function rccBuildChips(profile, results) {
  const chips = [];

  // If barely any fields are filled — show general onboarding chips
  const filledCount = [profile.age, profile.sex, profile.race, profile.smoking_status,
    profile.bmi_category, profile.alcohol_consumption, profile.physical_activity, profile.diet_quality
  ].filter(Boolean).length;

  if (filledCount < 2) {
    return [
      'What does "family history of cancer" mean?',
      'How is relative cancer risk calculated?',
      'What is a pack-year?',
      'What does BMI category mean for cancer risk?',
    ];
  }

  // Profile-specific chips
  if (profile.smoking_status === 'current') chips.push('How much does smoking increase my cancer risk?');
  if (profile.smoking_status === 'former')  chips.push('Does quitting smoking lower my cancer risk over time?');
  if (profile.family_history)               chips.push('Which cancers are most hereditary?');
  if (profile.hepatitis)                    chips.push('How does Hepatitis B/C raise liver cancer risk?');
  if (profile.hpv)                          chips.push('Which cancers is HPV linked to?');
  if (profile.h_pylori)                     chips.push('Can treating H. pylori lower my stomach cancer risk?');
  if (profile.diabetes)                     chips.push('Which cancers are linked to Type 2 diabetes?');
  if (profile.ibd)                          chips.push('How does IBD raise colorectal cancer risk?');
  if (profile.precancerous_lesions)         chips.push('How serious are precancerous lesions?');
  if (profile.uv_exposure)                  chips.push('How does UV exposure cause skin cancer?');
  if (profile.bmi_category === 'obese' || profile.bmi_category === 'severely-obese')
                                            chips.push('How does obesity affect cancer risk?');
  if (results)                              chips.push(`Why is my overall risk ${results.overallRR}?`);
  if (profile.cancer_types?.length)         chips.push(`What are early signs of ${profile.cancer_types[0]} cancer?`);

  chips.push('What lifestyle changes most reduce cancer risk?');

  return chips.slice(0, 4);
}

// ── 6. Render chips ───────────────────────────────────────────────────────
function rccRenderChips(chips) {
  const el = document.getElementById('rccChips');
  el.style.display = '';
  el.innerHTML = chips.map(text =>
    `<div class="rcc-chip" onclick="rccFillAndSend(this.textContent.trim())">${text}</div>`
  ).join('');
}

// ── 7. Add a chat bubble ──────────────────────────────────────────────────
function rccAddBubble(type, text) {
  const el = document.createElement('div');
  el.className = `rcc-bubble rcc-bubble-${type}`;
  if (type === 'ai') {
    el.innerHTML = `
      <div class="rcc-bubble-ai-top">
        <b> ACS Assistant</b>
        <button
          class="rcc-note-add-btn"
          onclick="rccSaveBubbleNote(this)"
          title="Add to digital notebook"
          aria-label="Add to digital notebook"
        >+</button>
      </div>
      <div class="rcc-bubble-ai-text">${text}</div>
    `;
  } else {
    el.textContent = text;
  }
  const msgs = document.getElementById('rccMessages');
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
}

// ── 8. Toggle open / close ────────────────────────────────────────────────
function rccToggle() {
  _rccOpen = !_rccOpen;
  document.getElementById('rccPanel').classList.toggle('open', _rccOpen);

  if (!_rccOpen) return;

  _rccMode = 'chat';
  const notesPanel = document.getElementById('rccNotesPanel');
  const msgPanel = document.getElementById('rccMessages');
  const chips = document.getElementById('rccChips');
  const inputRow = document.querySelector('.rcc-input-row');
  const btn = document.getElementById('rccNotesBtn');
  notesPanel.classList.remove('open');
  msgPanel.style.display = 'flex';
  chips.style.display = '';
  inputRow.style.display = 'flex';
  if (btn) btn.textContent = 'Notebook';
  rccRenderNotesLibrary();

  // Snapshot at open time
  _rccProfile = rccReadProfile();
  _rccResults = rccReadResults();

  // Update context bar
  document.getElementById('rccContextBar').innerHTML = rccContextSummary(_rccProfile, _rccResults);

  // Build and render chips
  rccRenderChips(rccBuildChips(_rccProfile, _rccResults));

  // Welcome message — only shown once
  if (!_rccInited) {
    _rccInited = true;
    const hasFields = [_rccProfile.age, _rccProfile.sex, _rccProfile.smoking_status,
      _rccProfile.bmi_category].some(Boolean);

    if (_rccResults) {
      rccAddBubble('ai',
        `Hi! I can see your prediction results — your overall risk is <strong>${_rccResults.overallRR}</strong> (${_rccResults.badge}). Ask me anything about what this means, your specific risk factors, or cancer in general.`
      );
    } else if (hasFields) {
      rccAddBubble('ai',
        `Hi! I've loaded your profile from the calculator. Ask me anything about your risk factors — or run the prediction first and I can explain your results too.`
      );
    } else {
      rccAddBubble('ai',
        `Hi! I'm your ACS Cancer Risk Assistant. The calculator isn't filled in yet, but I can already answer questions like "what does family history mean?" or "how does smoking affect cancer risk?"`
      );
    }
  }

  setTimeout(() => document.getElementById('rccInput').focus(), 150);
}

// ── 9. Fill input and send ────────────────────────────────────────────────
function rccFillAndSend(text) {
  document.getElementById('rccInput').value = text;
  rccSend();
}

// ── 10. Send a message ────────────────────────────────────────────────────
async function rccSend() {
  const inputEl = document.getElementById('rccInput');
  const message = inputEl.value.trim();
  if (!message) return;

  inputEl.value = '';
  rccAddBubble('user', message);

  // Hide chips after first user message
  document.getElementById('rccChips').style.display = 'none';

  const thinkEl = document.getElementById('rccThinking');
  const sendBtn = document.getElementById('rccSendBtn');
  thinkEl.classList.add('show');
  sendBtn.disabled = true;

  try {
    const context    = rccBuildContext(_rccProfile || {}, _rccResults);
    const fullMsg    = `${context}\n\nUser question: ${message}`;

   const res = await fetch(`${window._pythonURI}/api/acs-chat`, {
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ type: 'information', message: fullMsg })
});

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Server error ${res.status}`);
    }

    const data = await res.json();
    rccAddBubble('ai', data.answer);
  } catch (err) {
    rccAddBubble('ai', `Couldn't reach the assistant. Make sure the backend is running. (${err.message})`);
  } finally {
    thinkEl.classList.remove('show');
    sendBtn.disabled = false;
    inputEl.focus();
  }
}
</script>
</body>
</html>