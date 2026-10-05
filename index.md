---
layout: opencs
hide: true
show_reading_time: false
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

  :root {
    --ink:       #3d2c24;
    --ink-2:     #fff9f3;
    --ink-3:     #ecddd0;
    --ink-4:     #f5ede3;
    --rose:      #e07a6a;
    --rose-deep: #c45e4a;
    --sage:      #8aaa8c;
    --sage-pale: #eaf1ea;
    --orange:    #d4845a;
    --tan:       #c4a882;
    --paper:     #fdf6ee;
    --muted:     #937468;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .cf-page {
    font-family: 'DM Sans', sans-serif;
    background: var(--paper);
    color: var(--ink);
    overflow-x: hidden;
    line-height: 1.6;
  }

  .skip-link {
    position: absolute; top: -100px; left: 16px;
    background: var(--rose); color: var(--paper);
    padding: 8px 16px; font-size: 14px; font-weight: 600;
    border-radius: 4px; z-index: 9999; transition: top .2s; text-decoration: none;
  }
  .skip-link:focus { top: 12px; }
  :focus-visible { outline: 2px solid var(--rose); outline-offset: 3px; border-radius: 2px; }

  /* HERO */
  .cf-hero {
    padding: clamp(40px,5vw,64px) clamp(24px,6vw,80px);
    position: relative; background: var(--ink); overflow: hidden;
  }
  .cf-hero::before {
    content: ''; position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 80% at 90% 50%, rgba(224,122,106,.14) 0%, transparent 60%),
      radial-gradient(ellipse 40% 60% at 5% 90%, rgba(138,170,140,.10) 0%, transparent 60%);
    pointer-events: none;
  }
  .cf-hero-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 11px; letter-spacing: .25em; text-transform: uppercase;
    color: var(--rose); margin-bottom: 16px;
    opacity: 0; animation: fadeUp .7s .1s forwards;
  }
  .cf-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px,4.5vw,56px); font-weight: 900;
    line-height: 1.08; letter-spacing: -.02em; max-width: 680px;
    color: #fff9f3 !important;; opacity: 0; animation: fadeUp .8s .25s forwards;
  }
  .cf-hero h1 em { font-style: normal; color: var(--rose); }
  .cf-hero-sub {
    margin-top: 14px; font-size: 15px; font-weight: 400;
    color: #e8d9c4; max-width: 460px; line-height: 1.7;
    opacity: 0; animation: fadeUp .8s .4s forwards;
  }
  .cf-hero-source {
    margin-top: 24px; font-family: 'DM Mono', monospace; font-size: 10px;
    color: #a07c68; letter-spacing: .15em; text-transform: uppercase;
    border-left: 2px solid #6b4c3b; padding-left: 12px;
    opacity: 0; animation: fadeUp .6s .6s forwards;
  }

  /* SECTION WRAPPERS */
  .cf-section      { padding: clamp(60px,8vw,100px) clamp(24px,6vw,80px); background: var(--paper); }
  .cf-section.alt  { background: var(--ink-2); }
  .cf-section.alt2 { background: var(--ink-4); }
  .cf-section.dark { background: var(--ink); color: var(--paper); }

  .cf-section-label {
    font-family: 'DM Mono', monospace;
    font-size: 10px; letter-spacing: .3em; text-transform: uppercase;
    color: var(--rose); margin-bottom: 48px;
    display: flex; align-items: center; gap: 12px;
  }
  .cf-section-label::after {
    content: ''; flex: 1; height: 1px; background: var(--ink-3); max-width: 200px;
  }
  .cf-section.dark .cf-section-label::after { background: rgba(255,255,255,.1); }

  /* BIG STAT GRID */
  .cf-big-grid {
    display: grid; grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 2px; background: var(--ink-3); border: 1px solid var(--ink-3);
  }
  .cf-stat-block {
    background: var(--ink-2);
    padding: clamp(28px,4vw,48px) clamp(24px,3vw,36px);
    transition: background .25s; cursor: default;
  }
  .cf-stat-block:hover { background: var(--ink-4); }
  .cf-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: clamp(40px,6vw,72px); font-weight: 900;
    line-height: 1; letter-spacing: -.03em;
    color: var(--rose); display: block;
  }
  .cf-stat-num.sage  { color: var(--sage); }
  .cf-stat-num.terra { color: var(--rose-deep); }
  .cf-stat-label { font-size: 14px; font-weight: 500; color: var(--ink); margin-top: 10px; line-height: 1.4; }
  .cf-stat-note  { font-size: 12px; color: var(--muted); margin-top: 5px; font-weight: 300; }

  /* PROGRESS */
  .cf-progress-headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(26px,4vw,46px); font-weight: 700;
    max-width: 660px; line-height: 1.2; margin-bottom: 14px; color: var(--ink);
  }
  .cf-section.dark .cf-progress-headline { color: var(--paper); }
  .cf-progress-headline span { color: var(--sage); }
  .cf-progress-sub { font-size: 15px; color: var(--muted); max-width: 560px; margin-bottom: 48px; font-weight: 300; line-height: 1.8; }

  .cf-bar-list { display: flex; flex-direction: column; gap: 22px; }
  .cf-bar-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
  .cf-bar-name { font-size: 13px; font-weight: 500; color: var(--ink); }
  .cf-bar-pct  { font-family: 'DM Mono', monospace; font-size: 12px; color: var(--rose); }
  .cf-bar-track { height: 5px; background: var(--ink-3); border-radius: 3px; overflow: hidden; }
  .cf-bar-fill  { height: 100%; border-radius: 3px; background: var(--rose); width: 0; transition: width 1.4s cubic-bezier(.22,1,.36,1); }
  .cf-bar-fill.sage  { background: var(--sage); }
  .cf-bar-fill.terra { background: var(--rose-deep); }

  /* TOP CANCERS */
  .cf-cols { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(28px,4vw,56px); }
  @media(max-width:680px){ .cf-cols { grid-template-columns: 1fr; } }

  .cf-col-title {
    font-family: 'Playfair Display', serif;
    font-size: 20px; font-weight: 700; margin-bottom: 20px;
    padding-bottom: 14px; border-bottom: 1px solid var(--ink-3);
    display: flex; align-items: center; gap: 10px; color: var(--ink);
  }
  .cf-col-title .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--rose); flex-shrink: 0; }
  .cf-col-title .dot.sage { background: var(--sage); }

  .cf-cancer-list { display: flex; flex-direction: column; gap: 3px; list-style: none; }
  .cf-cancer-row {
    display: grid; grid-template-columns: 22px 1fr auto;
    align-items: center; gap: 12px;
    padding: 11px 13px; background: var(--ink-2); border-radius: 4px; transition: background .2s;
  }
  .cf-cancer-row:hover { background: var(--paper); }
  .cf-cancer-rank { font-family: 'DM Mono', monospace; font-size: 10px; color: var(--tan); text-align: center; }
  .cf-cancer-name { font-size: 13px; font-weight: 500; color: var(--ink); }
  .cf-cancer-val  { font-family: 'DM Mono', monospace; font-size: 12px; color: var(--rose); white-space: nowrap; }
  .cf-cancer-val.sage { color: var(--sage); }

  /* PREVENTION */
  .cf-prevention-intro { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; margin-bottom: 48px; }
  @media(max-width:680px){ .cf-prevention-intro { grid-template-columns: 1fr; } }

  .cf-prevention-big {
    font-family: 'Playfair Display', serif;
    font-size: clamp(72px,11vw,130px); font-weight: 900;
    color: var(--sage); line-height: .88; letter-spacing: -.04em;
  }
  .cf-prevention-big-label { font-size: 17px; font-weight: 500; margin-top: 14px; line-height: 1.5; color: var(--ink); }
  .cf-prevention-text-col p { font-size: 15px; color: var(--muted); font-weight: 300; line-height: 1.9; margin-bottom: 16px; }

  .cf-prevention-factors { display: grid; grid-template-columns: repeat(auto-fit,minmax(190px,1fr)); gap: 10px; }
  .cf-factor { background: var(--paper); border-radius: 5px; padding: 20px 18px; border-left: 3px solid var(--sage); }
  .cf-factor.rose { border-left-color: var(--rose); }
  .cf-factor-pct  { font-family: 'DM Mono', monospace; font-size: 22px; font-weight: 500; color: var(--sage); margin-bottom: 4px; }
  .cf-factor.rose .cf-factor-pct { color: var(--rose); }
  .cf-factor-name { font-size: 13px; font-weight: 600; color: var(--ink); margin-bottom: 3px; }
  .cf-factor-note { font-size: 12px; color: var(--muted); font-weight: 300; }

  /* SCREENING */
  .cf-screening-grid {
    display: grid; grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
    gap: 2px; background: var(--ink-3); margin-top: 48px;
  }
  .cf-screen-card { background: var(--ink-2); padding: 24px 20px; transition: background .2s; }
  .cf-screen-card:hover { background: var(--ink-4); }
  .cf-screen-icon  { font-size: 26px; margin-bottom: 12px; display: block; line-height: 1; }
  .cf-screen-type  { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: .2em; color: var(--rose); text-transform: uppercase; margin-bottom: 6px; }
  .cf-screen-age   { font-size: 15px; font-weight: 600; color: var(--ink); margin-bottom: 5px; }
  .cf-screen-detail{ font-size: 12px; color: var(--muted); font-weight: 300; line-height: 1.6; }

  /* DISPARITIES */
  .cf-disparity-intro { max-width: 700px; margin-bottom: 44px; }
  .cf-disparity-headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(26px,4vw,42px); font-weight: 700;
    line-height: 1.2; margin-bottom: 12px; color: var(--paper) !important;
  }
  .cf-disparity-headline span { color: var(--rose); }
  .cf-disparity-text { font-size: 15px; color: var(--tan); font-weight: 300; line-height: 1.8; }

  .cf-disparity-cards {
    display: grid; grid-template-columns: repeat(auto-fit,minmax(230px,1fr));
    gap: 2px; background: rgba(255,255,255,.08);
  }
  .cf-disparity-card {
    background: rgba(255,255,255,.05); padding: 28px 24px;
    border-top: 3px solid transparent; transition: border-color .3s, background .2s;
  }
  .cf-disparity-card:hover { border-top-color: var(--rose); background: rgba(255,255,255,.09); }
  .cf-disparity-card-pct   { font-family: 'Playfair Display', serif; font-size: 46px; font-weight: 900; color: var(--rose); line-height: 1; margin-bottom: 8px; }
  .cf-disparity-card-label { font-size: 14px; font-weight: 500; color: var(--paper); line-height: 1.4; margin-bottom: 6px; }
  .cf-disparity-card-note  { font-size: 12px; color: var(--tan); font-weight: 300; line-height: 1.6; }

  /* FOOTER */
  .cf-footer {
    padding: 32px clamp(24px,6vw,80px);
    border-top: 1px solid var(--ink-3); background: var(--paper);
    display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;
  }
  .cf-footer-text { font-family: 'DM Mono', monospace; font-size: 11px; color: var(--muted); letter-spacing: .1em; }
  .cf-footer-link { font-family: 'DM Mono', monospace; font-size: 11px; color: var(--rose); text-decoration: none; transition: opacity .2s; }
  .cf-footer-link:hover { opacity: .7; }

  /* ANIMATIONS */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .cf-animate { opacity: 0; transform: translateY(20px); transition: opacity .65s, transform .65s; }
  .cf-animate.visible { opacity: 1; transform: none; }
</style>

<a href="#main-content" class="skip-link">Skip to main content</a>

<div class="cf-page" role="main" id="main-content">

  <!-- HERO -->
  <section class="cf-hero" aria-labelledby="hero-heading">
    <p class="cf-hero-eyebrow">American Cancer Society · 2026 Report</p>
    <h1 id="hero-heading">The State<br>of <em>Cancer</em><br>in America</h1>
    <p class="cf-hero-sub">Every year, millions of Americans face a diagnosis. Understanding the numbers is the first step toward changing them.</p>
    <p class="cf-hero-source">Data · Cancer Facts &amp; Figures 2026 · ACS Surveillance Research</p>
  </section>

  <!-- KEY NUMBERS -->
  <section class="cf-section alt" aria-labelledby="numbers-heading">
    <p class="cf-section-label" id="numbers-heading" role="heading" aria-level="2">Key Numbers · 2026</p>
    <div class="cf-big-grid" role="list">
      <div class="cf-stat-block cf-animate" role="listitem" tabindex="0" aria-label="2.1 million new cancer cases expected in 2026">
        <span class="cf-stat-num" aria-hidden="true">2.1M</span>
        <p class="cf-stat-label">New cancer cases expected in 2026</p>
        <p class="cf-stat-note">Excludes basal &amp; squamous cell skin cancers</p>
      </div>
      <div class="cf-stat-block cf-animate" role="listitem" tabindex="0" aria-label="626,000 deaths expected, about 1700 per day">
        <span class="cf-stat-num terra" aria-hidden="true">626K</span>
        <p class="cf-stat-label">People expected to die from cancer</p>
        <p class="cf-stat-note">~1,700 deaths per day</p>
      </div>
      <div class="cf-stat-block cf-animate" role="listitem" tabindex="0" aria-label="18.6 million cancer survivors alive as of January 2025">
        <span class="cf-stat-num sage" aria-hidden="true">18.6M</span>
        <p class="cf-stat-label">Americans living with a cancer history</p>
        <p class="cf-stat-note">As of January 1, 2025</p>
      </div>
      <div class="cf-stat-block cf-animate" role="listitem" tabindex="0" aria-label="1 in 3 Americans will develop cancer in their lifetime">
        <span class="cf-stat-num" aria-hidden="true">1 in 3</span>
        <p class="cf-stat-label">Americans will develop cancer in their lifetime</p>
        <p class="cf-stat-note">Based on 2019–2022 incidence data</p>
      </div>
    </div>
  </section>

  <!-- PROGRESS -->
  <section class="cf-section" aria-labelledby="progress-heading">
    <p class="cf-section-label">Progress Made</p>
    <h2 class="cf-progress-headline" id="progress-heading">
      Cancer death rates have fallen <span>34%</span> since their 1991 peak.
    </h2>
    <p class="cf-progress-sub">Advances in treatment, reductions in smoking, and earlier detection have saved an estimated 4.8 million lives since 1991.</p>
    <div class="cf-bar-list" role="list" aria-label="5-year relative survival rates by cancer type">
      <div class="cf-bar-item cf-animate" role="listitem">
        <div class="cf-bar-header"><span class="cf-bar-name">Prostate (localized) — 5-yr survival</span><span class="cf-bar-pct">&gt;99%</span></div>
        <div class="cf-bar-track" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100" aria-label="Greater than 99%"><div class="cf-bar-fill sage" data-width="99"></div></div>
      </div>
      <div class="cf-bar-item cf-animate" role="listitem">
        <div class="cf-bar-header"><span class="cf-bar-name">Melanoma (all stages) — 5-yr survival</span><span class="cf-bar-pct">95%</span></div>
        <div class="cf-bar-track" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" aria-label="95%"><div class="cf-bar-fill sage" data-width="95"></div></div>
      </div>
      <div class="cf-bar-item cf-animate" role="listitem">
        <div class="cf-bar-header"><span class="cf-bar-name">Breast, female (all stages) — 5-yr survival</span><span class="cf-bar-pct">92%</span></div>
        <div class="cf-bar-track" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" aria-label="92%"><div class="cf-bar-fill sage" data-width="92"></div></div>
      </div>
      <div class="cf-bar-item cf-animate" role="listitem">
        <div class="cf-bar-header"><span class="cf-bar-name">Colorectal (all stages) — 5-yr survival</span><span class="cf-bar-pct">65%</span></div>
        <div class="cf-bar-track" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" aria-label="65%"><div class="cf-bar-fill" data-width="65"></div></div>
      </div>
      <div class="cf-bar-item cf-animate" role="listitem">
        <div class="cf-bar-header"><span class="cf-bar-name">Lung &amp; Bronchus (all stages) — 5-yr survival</span><span class="cf-bar-pct">28%</span></div>
        <div class="cf-bar-track" role="progressbar" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100" aria-label="28%"><div class="cf-bar-fill terra" data-width="28"></div></div>
      </div>
      <div class="cf-bar-item cf-animate" role="listitem">
        <div class="cf-bar-header"><span class="cf-bar-name">Pancreas (all stages) — 5-yr survival</span><span class="cf-bar-pct">13%</span></div>
        <div class="cf-bar-track" role="progressbar" aria-valuenow="13" aria-valuemin="0" aria-valuemax="100" aria-label="13%"><div class="cf-bar-fill terra" data-width="13"></div></div>
      </div>
    </div>
  </section>

  <!-- TOP CANCERS -->
  <section class="cf-section alt2" aria-labelledby="cancers-heading">
    <p class="cf-section-label">Leading Cancers · 2026</p>
    <h2 class="cf-progress-headline" id="cancers-heading" style="margin-bottom:40px">Where the burden falls heaviest.</h2>
    <div class="cf-cols">
      <div>
        <h3 class="cf-col-title"><span class="dot" aria-hidden="true"></span>Top New Cases</h3>
        <ul class="cf-cancer-list" aria-label="Top new cancer cases in 2026">
          <li class="cf-cancer-row cf-animate"><span class="cf-cancer-rank">1</span><span class="cf-cancer-name">Prostate</span><span class="cf-cancer-val">333,830</span></li>
          <li class="cf-cancer-row cf-animate"><span class="cf-cancer-rank">2</span><span class="cf-cancer-name">Female Breast</span><span class="cf-cancer-val">321,910</span></li>
          <li class="cf-cancer-row cf-animate"><span class="cf-cancer-rank">3</span><span class="cf-cancer-name">Lung &amp; Bronchus</span><span class="cf-cancer-val">229,410</span></li>
          <li class="cf-cancer-row cf-animate"><span class="cf-cancer-rank">4</span><span class="cf-cancer-name">Colorectal</span><span class="cf-cancer-val">158,850</span></li>
          <li class="cf-cancer-row cf-animate"><span class="cf-cancer-rank">5</span><span class="cf-cancer-name">Melanoma of Skin</span><span class="cf-cancer-val">112,000</span></li>
          <li class="cf-cancer-row cf-animate"><span class="cf-cancer-rank">6</span><span class="cf-cancer-name">Non-Hodgkin Lymphoma</span><span class="cf-cancer-val">79,320</span></li>
        </ul>
      </div>
      <div>
        <h3 class="cf-col-title"><span class="dot sage" aria-hidden="true"></span>Top Causes of Death</h3>
        <ul class="cf-cancer-list" aria-label="Top cancer death causes in 2026">
          <li class="cf-cancer-row cf-animate"><span class="cf-cancer-rank">1</span><span class="cf-cancer-name">Lung &amp; Bronchus</span><span class="cf-cancer-val sage">124,990</span></li>
          <li class="cf-cancer-row cf-animate"><span class="cf-cancer-rank">2</span><span class="cf-cancer-name">Colorectal</span><span class="cf-cancer-val sage">55,230</span></li>
          <li class="cf-cancer-row cf-animate"><span class="cf-cancer-rank">3</span><span class="cf-cancer-name">Pancreas</span><span class="cf-cancer-val sage">52,740</span></li>
          <li class="cf-cancer-row cf-animate"><span class="cf-cancer-rank">4</span><span class="cf-cancer-name">Female Breast</span><span class="cf-cancer-val sage">42,140</span></li>
          <li class="cf-cancer-row cf-animate"><span class="cf-cancer-rank">5</span><span class="cf-cancer-name">Prostate</span><span class="cf-cancer-val sage">36,320</span></li>
          <li class="cf-cancer-row cf-animate"><span class="cf-cancer-rank">6</span><span class="cf-cancer-name">Liver</span><span class="cf-cancer-val sage">30,980</span></li>
        </ul>
      </div>
    </div>
  </section>

  <!-- PREVENTION -->
  <section class="cf-section alt" aria-labelledby="prevention-heading">
    <p class="cf-section-label">The Opportunity</p>
    <div class="cf-prevention-intro">
      <div>
        <div class="cf-prevention-big cf-animate" aria-label="40 percent">40%</div>
        <p class="cf-prevention-big-label" id="prevention-heading">of new diagnoses are<br><strong>potentially preventable</strong></p>
      </div>
      <div class="cf-prevention-text-col cf-animate">
        <p>About 850,000 cases in 2026 could have been avoided through changes in known risk factors: smoking, diet, body weight, and alcohol.</p>
        <p>Routine screening can prevent many colorectal and most cervical cancers entirely by catching precancerous lesions before they progress.</p>
      </div>
    </div>
    <div class="cf-prevention-factors" role="list" aria-label="Preventable cancer risk factors">
      <div class="cf-factor rose cf-animate" role="listitem" tabindex="0"><div class="cf-factor-pct">19%</div><div class="cf-factor-name">Cigarette Smoking</div><div class="cf-factor-note">The #1 preventable cause of cancer in the US</div></div>
      <div class="cf-factor rose cf-animate" role="listitem" tabindex="0"><div class="cf-factor-pct">8%</div><div class="cf-factor-name">Excess Body Weight</div><div class="cf-factor-note">Linked to at least 13 cancer types</div></div>
      <div class="cf-factor rose cf-animate" role="listitem" tabindex="0"><div class="cf-factor-pct">5%</div><div class="cf-factor-name">Alcohol Consumption</div><div class="cf-factor-note">Risk increases even at moderate levels</div></div>
      <div class="cf-factor cf-animate" role="listitem" tabindex="0"><div class="cf-factor-pct">4.8M</div><div class="cf-factor-name">Lives Saved Since 1991</div><div class="cf-factor-note">Due to falling cancer death rates</div></div>
    </div>
  </section>

  <!-- SCREENING -->
  <section class="cf-section" aria-labelledby="screening-heading">
    <p class="cf-section-label">Early Detection · ACS Guidelines</p>
    <h2 class="cf-progress-headline" id="screening-heading">Screening saves lives.<br>Know your <span>schedule</span>.</h2>
    <div class="cf-screening-grid" role="list" aria-label="Cancer screening recommendations">
      <div class="cf-screen-card cf-animate" role="listitem" tabindex="0"><span class="cf-screen-icon" aria-hidden="true"></span><div class="cf-screen-type">Breast</div><div class="cf-screen-age">Start at 45</div><div class="cf-screen-detail">Annual mammography. Option to begin at 40.</div></div>
      <div class="cf-screen-card cf-animate" role="listitem" tabindex="0"><span class="cf-screen-icon" aria-hidden="true"></span><div class="cf-screen-type">Cervical</div><div class="cf-screen-age">Ages 25–65</div><div class="cf-screen-detail">HPV test every 5 years, or Pap alone every 3 years.</div></div>
      <div class="cf-screen-card cf-animate" role="listitem" tabindex="0"><span class="cf-screen-icon" aria-hidden="true"></span><div class="cf-screen-type">Colorectal</div><div class="cf-screen-age">Start at 45</div><div class="cf-screen-detail">Colonoscopy every 10 years, or annual stool test.</div></div>
      <div class="cf-screen-card cf-animate" role="listitem" tabindex="0"><span class="cf-screen-icon" aria-hidden="true"></span><div class="cf-screen-type">Lung</div><div class="cf-screen-age">Ages 50–80</div><div class="cf-screen-detail">Annual low-dose CT for 20+ pack-year smokers.</div></div>
      <div class="cf-screen-card cf-animate" role="listitem" tabindex="0"><span class="cf-screen-icon" aria-hidden="true"></span><div class="cf-screen-type">Prostate</div><div class="cf-screen-age">Discuss at 50</div><div class="cf-screen-detail">PSA with shared decision-making. Age 45 for Black men.</div></div>
    </div>
  </section>

  <!-- DISPARITIES — dark section, ink bg, paper text -->
  <section class="cf-section dark" aria-labelledby="disparity-heading">
    <p class="cf-section-label">Health Equity</p>
    <div class="cf-disparity-intro">
      <h2 class="cf-disparity-headline" id="disparity-heading">Cancer doesn't affect<br>everyone <span>equally</span>.</h2>
      <p class="cf-disparity-text">Racial, socioeconomic, and geographic disparities shape who gets diagnosed, who gets screened, and who survives.</p>
    </div>
    <div class="cf-disparity-cards" role="list" aria-label="Cancer health equity statistics">
      <div class="cf-disparity-card cf-animate" role="listitem" tabindex="0"><div class="cf-disparity-card-pct">37%</div><div class="cf-disparity-card-label">Higher breast cancer death rate</div><div class="cf-disparity-card-note">Black women vs. White women — despite lower incidence. Gap has persisted since the mid-2000s.</div></div>
      <div class="cf-disparity-card cf-animate" role="listitem" tabindex="0"><div class="cf-disparity-card-pct">2–4×</div><div class="cf-disparity-card-label">Prostate cancer mortality in Black men</div><div class="cf-disparity-card-note">Compared to men of other racial/ethnic groups. Black men have the highest documented incidence in the world.</div></div>
      <div class="cf-disparity-card cf-animate" role="listitem" tabindex="0"><div class="cf-disparity-card-pct">80%</div><div class="cf-disparity-card-label">Higher cervical cancer death rate</div><div class="cf-disparity-card-note">Native American women vs. White women. AIAN people have the highest overall cancer burden of any group studied.</div></div>
      <div class="cf-disparity-card cf-animate" role="listitem" tabindex="0"><div class="cf-disparity-card-pct">63%</div><div class="cf-disparity-card-label">5-yr survival: uterine cancer in Black women</div><div class="cf-disparity-card-note">Compared to 85% in White women — one of the starkest racial survival gaps in all of cancer care.</div></div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="cf-footer" role="contentinfo">
    <p class="cf-footer-text">Source: American Cancer Society · Cancer Facts &amp; Figures 2026</p>
    <a href="https://www.cancer.org/statistics" class="cf-footer-link" target="_blank" rel="noopener noreferrer" aria-label="Visit cancer.org statistics, opens in new tab">cancer.org/statistics ↗</a>
  </footer>

</div>

<script>
(function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      var fill = entry.target.querySelector('.cf-bar-fill');
      if (fill) setTimeout(function(){ fill.style.width = fill.getAttribute('data-width') + '%'; }, 80);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.cf-animate, .cf-bar-item').forEach(function(el){ observer.observe(el); });
})();
</script>