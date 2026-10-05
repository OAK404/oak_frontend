---
layout: post
title: Titanic Survival Predictor
permalink: /titanic/predictor
---

<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Titanic Survival Predictor</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=IM+Fell+English:ital@0;1&family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --navy:    #0a0f1e;
      --deep:    #060c18;
      --gold:    #c9a84c;
      --gold2:   #e8c96d;
      --cream:   #f5ead8;
      --rust:    #8b2b0a;
      --ice:     #a8d4e6;
      --dim:     #4a5568;
      --card:    #0d1628;
    }

    body {
      background: var(--navy);
      color: var(--cream);
      font-family: 'IM Fell English', Georgia, serif;
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* ─── starfield background ─── */
    body::before {
      content: '';
      position: fixed; inset: 0;
      background-image:
        radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,.7) 0%, transparent 100%),
        radial-gradient(1px 1px at 30% 40%, rgba(255,255,255,.5) 0%, transparent 100%),
        radial-gradient(1px 1px at 55% 20%, rgba(255,255,255,.6) 0%, transparent 100%),
        radial-gradient(1px 1px at 75% 60%, rgba(255,255,255,.4) 0%, transparent 100%),
        radial-gradient(1px 1px at 90% 10%, rgba(255,255,255,.7) 0%, transparent 100%),
        radial-gradient(1px 1px at 20% 80%, rgba(255,255,255,.5) 0%, transparent 100%),
        radial-gradient(1px 1px at 65% 85%, rgba(255,255,255,.4) 0%, transparent 100%),
        radial-gradient(1px 1px at 45% 55%, rgba(255,255,255,.6) 0%, transparent 100%),
        radial-gradient(1px 1px at 82% 35%, rgba(255,255,255,.5) 0%, transparent 100%),
        radial-gradient(1px 1px at 5% 50%,  rgba(255,255,255,.3) 0%, transparent 100%);
      pointer-events: none;
      z-index: 0;
    }

    /* ─── ocean wave footer ─── */
    body::after {
      content: '';
      position: fixed; bottom: 0; left: 0; right: 0; height: 120px;
      background: linear-gradient(to top, rgba(10,40,80,.5), transparent);
      pointer-events: none;
      z-index: 0;
    }

    .page-wrapper {
      position: relative; z-index: 1;
      max-width: 860px;
      margin: 0 auto;
      padding: 48px 24px 80px;
    }

    /* ─── header ─── */
    .page-header {
      text-align: center;
      margin-bottom: 48px;
      animation: fadeDown .8s ease both;
    }

    .page-header .eyebrow {
      font-family: 'Courier Prime', monospace;
      font-size: .7rem;
      letter-spacing: .35em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 12px;
    }

    .page-header h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.2rem, 6vw, 3.8rem);
      font-weight: 900;
      line-height: 1.1;
      color: var(--cream);
      text-shadow: 0 0 60px rgba(201,168,76,.25);
      margin-bottom: 8px;
    }

    .page-header h1 span { color: var(--gold); }

    .divider {
      display: flex; align-items: center; gap: 12px;
      margin: 20px auto;
      max-width: 320px;
      color: var(--gold);
      font-size: .75rem;
      letter-spacing: .2em;
    }
    .divider::before, .divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(to right, transparent, var(--gold), transparent);
    }

    .page-header p {
      font-style: italic;
      color: rgba(245,234,216,.6);
      font-size: .95rem;
      max-width: 480px;
      margin: 0 auto;
    }

    /* ─── card ─── */
    .card {
      background: var(--card);
      border: 1px solid rgba(201,168,76,.2);
      border-radius: 4px;
      padding: 36px 40px;
      margin-bottom: 28px;
      box-shadow: 0 8px 40px rgba(0,0,0,.5), inset 0 1px 0 rgba(201,168,76,.1);
      animation: fadeUp .8s ease both;
    }

    .card-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.1rem;
      color: var(--gold);
      letter-spacing: .08em;
      margin-bottom: 28px;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(201,168,76,.15);
      display: flex; align-items: center; gap: 10px;
    }

    .card-title .icon { font-size: 1rem; }

    /* ─── form grid ─── */
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px 28px;
    }

    @media (max-width: 580px) { .form-grid { grid-template-columns: 1fr; } }

    .field { display: flex; flex-direction: column; gap: 6px; }
    .field.full { grid-column: 1 / -1; }

    label {
      font-family: 'Courier Prime', monospace;
      font-size: .68rem;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: var(--gold);
    }

    label .hint {
      font-family: 'IM Fell English', serif;
      text-transform: none;
      letter-spacing: 0;
      font-size: .78rem;
      color: rgba(245,234,216,.4);
      font-style: italic;
      margin-left: 6px;
    }

    input, select {
      background: rgba(255,255,255,.04);
      border: 1px solid rgba(201,168,76,.25);
      border-radius: 3px;
      color: var(--cream);
      font-family: 'Courier Prime', monospace;
      font-size: .9rem;
      padding: 10px 14px;
      outline: none;
      transition: border-color .2s, background .2s, box-shadow .2s;
      -webkit-appearance: none;
    }

    input:focus, select:focus {
      border-color: var(--gold);
      background: rgba(201,168,76,.06);
      box-shadow: 0 0 0 3px rgba(201,168,76,.1);
    }

    select option { background: #0d1628; color: var(--cream); }

    /* ─── radio group ─── */
    .radio-group {
      display: flex; gap: 12px;
    }

    .radio-btn {
      flex: 1;
      position: relative;
    }

    .radio-btn input[type="radio"] {
      position: absolute; opacity: 0; width: 0;
    }

    .radio-btn label {
      display: block;
      text-align: center;
      padding: 10px;
      border: 1px solid rgba(201,168,76,.25);
      border-radius: 3px;
      cursor: pointer;
      font-size: .78rem;
      letter-spacing: .1em;
      transition: all .2s;
      background: rgba(255,255,255,.03);
      text-transform: uppercase;
    }

    .radio-btn input[type="radio"]:checked + label {
      background: rgba(201,168,76,.15);
      border-color: var(--gold);
      color: var(--gold2);
    }

    /* ─── predict button ─── */
    .predict-btn {
      width: 100%;
      padding: 16px;
      margin-top: 8px;
      background: transparent;
      border: 1px solid var(--gold);
      color: var(--gold);
      font-family: 'Playfair Display', serif;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: .18em;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: 3px;
      transition: all .25s;
      position: relative;
      overflow: hidden;
    }

    .predict-btn::before {
      content: '';
      position: absolute; inset: 0;
      background: var(--gold);
      transform: translateX(-101%);
      transition: transform .3s ease;
      z-index: 0;
    }

    .predict-btn:hover::before { transform: translateX(0); }
    .predict-btn:hover { color: var(--deep); }
    .predict-btn span { position: relative; z-index: 1; }

    .predict-btn.loading { pointer-events: none; opacity: .6; }

    /* ─── result card ─── */
    #result-section {
      display: none;
      animation: fadeUp .6s ease both;
    }

    .result-card {
      background: var(--card);
      border: 1px solid rgba(201,168,76,.2);
      border-radius: 4px;
      padding: 36px 40px;
      margin-bottom: 28px;
      box-shadow: 0 8px 40px rgba(0,0,0,.5);
    }

    .verdict {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 12px;
      margin-bottom: 36px;
    }

    .verdict-icon { font-size: 3rem; line-height: 1; }
    .verdict-label {
      font-family: 'Courier Prime', monospace;
      font-size: .7rem;
      letter-spacing: .3em;
      text-transform: uppercase;
      color: var(--gold);
    }

    .verdict-title {
      font-family: 'Playfair Display', serif;
      font-size: 2.2rem;
      font-weight: 900;
    }

    .verdict-title.survived { color: var(--ice); }
    .verdict-title.perished { color: #e07070; }

    .verdict-subtitle {
      font-style: italic;
      color: rgba(245,234,216,.5);
      font-size: .9rem;
    }

    /* ─── probability bars ─── */
    .prob-bars {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 32px;
    }

    .prob-item label {
      display: block;
      margin-bottom: 8px;
      font-size: .7rem;
      letter-spacing: .2em;
    }

    .bar-track {
      height: 8px;
      background: rgba(255,255,255,.06);
      border-radius: 99px;
      overflow: hidden;
      margin-bottom: 6px;
    }

    .bar-fill {
      height: 100%;
      border-radius: 99px;
      width: 0%;
      transition: width 1.2s cubic-bezier(.16,1,.3,1);
    }

    .bar-fill.survive { background: linear-gradient(to right, #4a9bbe, var(--ice)); }
    .bar-fill.die     { background: linear-gradient(to right, #8b2b0a, #e07070); }

    .bar-pct {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 700;
    }

    .bar-pct.survive { color: var(--ice); }
    .bar-pct.die     { color: #e07070; }

    /* ─── feature weights ─── */
    .weights-section { margin-top: 8px; }

    .weights-title {
      font-family: 'Courier Prime', monospace;
      font-size: .68rem;
      letter-spacing: .25em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 16px;
    }

    .weight-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 10px;
    }

    .weight-name {
      font-family: 'Courier Prime', monospace;
      font-size: .78rem;
      color: rgba(245,234,216,.7);
      width: 120px;
      flex-shrink: 0;
      text-transform: uppercase;
      letter-spacing: .05em;
    }

    .weight-track {
      flex: 1;
      height: 5px;
      background: rgba(255,255,255,.06);
      border-radius: 99px;
      overflow: hidden;
    }

    .weight-fill {
      height: 100%;
      background: linear-gradient(to right, rgba(201,168,76,.4), var(--gold));
      border-radius: 99px;
      width: 0%;
      transition: width 1s cubic-bezier(.16,1,.3,1);
    }

    .weight-val {
      font-family: 'Courier Prime', monospace;
      font-size: .72rem;
      color: var(--gold);
      width: 42px;
      text-align: right;
      flex-shrink: 0;
    }

    /* ─── error ─── */
    .error-msg {
      background: rgba(139,43,10,.15);
      border: 1px solid rgba(139,43,10,.4);
      border-radius: 3px;
      padding: 14px 18px;
      color: #e07070;
      font-family: 'Courier Prime', monospace;
      font-size: .85rem;
      display: none;
      margin-top: 12px;
    }

    /* ─── animations ─── */
    @keyframes fadeDown {
      from { opacity: 0; transform: translateY(-20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>
<div class="page-wrapper">

  <!-- Header -->
  <header class="page-header">
    <p class="eyebrow">April 15, 1912 &mdash; North Atlantic</p>
    <h1>Would You Have <span>Survived</span>?</h1>
    <div class="divider"></div>
    <p>A machine learning model trained on Titanic passenger data predicts your fate aboard the RMS Titanic.</p>
  </header>

  <!-- Input Form -->
  <div class="card" style="animation-delay:.1s">
    <div class="card-title"><span class="icon"></span> Passenger Details</div>
    <form id="titanic-form" onsubmit="return false;">
      <div class="form-grid">

        <!-- Passenger Class -->
        <div class="field">
          <label>Ticket Class <span class="hint">(affects odds significantly)</span></label>
          <select id="pclass" required>
            <option value="">— Select —</option>
            <option value="1">1st Class — First</option>
            <option value="2" selected>2nd Class — Second</option>
            <option value="3">3rd Class — Third</option>
          </select>
        </div>

        <!-- Sex -->
        <div class="field">
          <label>Sex</label>
          <div class="radio-group">
            <div class="radio-btn">
              <input type="radio" name="sex" id="sex-female" value="female" checked>
              <label for="sex-female"> Female</label>
            </div>
            <div class="radio-btn">
              <input type="radio" name="sex" id="sex-male" value="male">
              <label for="sex-male"> Male</label>
            </div>
          </div>
        </div>

        <!-- Age -->
        <div class="field">
          <label>Age <span class="hint">(years)</span></label>
          <input type="number" id="age" min="0" max="100" value="28" required placeholder="e.g. 28" />
        </div>

        <!-- Fare -->
        <div class="field">
          <label>Fare Paid <span class="hint">(£, 0–512)</span></label>
          <input type="number" id="fare" min="0" max="512" step="0.01" value="30.00" required placeholder="e.g. 30.00" />
        </div>

        <!-- Siblings / Spouses -->
        <div class="field">
          <label>Siblings / Spouses Aboard</label>
          <input type="number" id="sibsp" min="0" max="10" value="0" required />
        </div>

        <!-- Parents / Children -->
        <div class="field">
          <label>Parents / Children Aboard</label>
          <input type="number" id="parch" min="0" max="10" value="0" required />
        </div>

        <!-- Port of Embarkation -->
        <div class="field">
          <label>Port of Embarkation</label>
          <select id="embarked" required>
            <option value="S" selected>Southampton (S)</option>
            <option value="C">Cherbourg (C)</option>
            <option value="Q">Queenstown (Q)</option>
          </select>
        </div>

        <!-- Travelling Alone -->
        <div class="field">
          <label>Travelling Alone?</label>
          <div class="radio-group">
            <div class="radio-btn">
              <input type="radio" name="alone" id="alone-no" value="false" checked>
              <label for="alone-no">With Others</label>
            </div>
            <div class="radio-btn">
              <input type="radio" name="alone" id="alone-yes" value="true">
              <label for="alone-yes">Alone</label>
            </div>
          </div>
        </div>

        <!-- Submit -->
        <div class="field full">
          <button class="predict-btn" id="predict-btn" onclick="predict()">
            <span> Predict My Fate</span>
          </button>
          <div class="error-msg" id="error-msg"></div>
        </div>

      </div>
    </form>
  </div>

  <!-- Result Section -->
  <section id="result-section">
    <div class="result-card">
      <div class="card-title"><span class="icon"></span> The Verdict</div>

      <div class="verdict">
        <div class="verdict-icon" id="verdict-icon"></div>
        <div class="verdict-label">Survival Assessment</div>
        <div class="verdict-title" id="verdict-title">—</div>
        <div class="verdict-subtitle" id="verdict-subtitle">—</div>
      </div>

      <div class="prob-bars">
        <div class="prob-item">
          <label style="color: var(--ice)">Survival Probability</label>
          <div class="bar-track"><div class="bar-fill survive" id="bar-survive"></div></div>
          <div class="bar-pct survive" id="pct-survive">—</div>
        </div>
        <div class="prob-item">
          <label style="color: #e07070;">Death Probability</label>
          <div class="bar-track"><div class="bar-fill die" id="bar-die"></div></div>
          <div class="bar-pct die" id="pct-die">—</div>
        </div>
      </div>

      <div class="weights-section">
        <div class="weights-title">Feature Importance — What Influenced This Prediction</div>
        <div id="weights-container"></div>
      </div>
    </div>
  </section>

</div>

<script>
  // ── CONFIG: point this at your backend URL ──────────────────────────────
  // If running locally:  http://localhost:8009
  // If deployed, use your backend's base URL
  const BACKEND = 'http://localhost:8009';
  // ────────────────────────────────────────────────────────────────────────

  const PREDICT_URL      = `${BACKEND}/api/titanic/predict`;
  const WEIGHTS_URL      = `${BACKEND}/api/titanic/weights`;

  async function predict() {
    // Gather form values
    const pclass   = parseInt(document.getElementById('pclass').value);
    const sex      = document.querySelector('input[name="sex"]:checked')?.value;
    const age      = parseFloat(document.getElementById('age').value);
    const fare     = parseFloat(document.getElementById('fare').value);
    const sibsp    = parseInt(document.getElementById('sibsp').value);
    const parch    = parseInt(document.getElementById('parch').value);
    const embarked = document.getElementById('embarked').value;
    const alone    = document.querySelector('input[name="alone"]:checked')?.value === 'true';

    // Validate
    const errorEl = document.getElementById('error-msg');
    if (!pclass || !sex || isNaN(age) || isNaN(fare) || !embarked) {
      showError('Please fill in all fields before predicting.');
      return;
    }
    errorEl.style.display = 'none';

    const btn = document.getElementById('predict-btn');
    btn.classList.add('loading');
    btn.querySelector('span').textContent = '⟳ Consulting the Stars…';

    const passenger = { pclass, sex, age, sibsp, parch, fare, embarked, alone };

    try {
      // Fetch prediction and weights in parallel
      const [predRes, weightsRes] = await Promise.all([
        fetch(PREDICT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(passenger)
        }),
        fetch(WEIGHTS_URL)
      ]);

      if (!predRes.ok) throw new Error(`Server error: ${predRes.status}`);

      const pred    = await predRes.json();
      const weights = await weightsRes.json();

      renderResult(pred, weights);

    } catch (err) {
      showError(`Could not reach the prediction server. Is your backend running?\n${err.message}`);
    } finally {
      btn.classList.remove('loading');
      btn.querySelector('span').textContent = ' Predict My Fate';
    }
  }

  function renderResult(pred, weights) {
    const survive = pred.survive ?? pred.Survive ?? 0;
    const die     = pred.die     ?? pred.Die     ?? 0;
    const survived = survive >= 0.5;

    // Show verdict
    document.getElementById('verdict-icon').textContent  = survived ? '' : '';
    document.getElementById('verdict-title').textContent  = survived ? 'You Survived' : 'You Perished';
    document.getElementById('verdict-title').className   = 'verdict-title ' + (survived ? 'survived' : 'perished');
    document.getElementById('verdict-subtitle').textContent = survived
      ? `The lifeboats carried you to safety — ${fmt(survive)} survival probability`
      : `The icy waters claimed you — ${fmt(die)} death probability`;

    // Animate bars
    document.getElementById('pct-survive').textContent = fmt(survive);
    document.getElementById('pct-die').textContent     = fmt(die);
    setTimeout(() => {
      document.getElementById('bar-survive').style.width = pct(survive);
      document.getElementById('bar-die').style.width     = pct(die);
    }, 80);

    // Feature weights
    const container = document.getElementById('weights-container');
    container.innerHTML = '';
    const maxVal = Math.max(...Object.values(weights));
    const sorted = Object.entries(weights).sort((a, b) => b[1] - a[1]);
    sorted.forEach(([feature, importance]) => {
      const row = document.createElement('div');
      row.className = 'weight-row';
      row.innerHTML = `
        <span class="weight-name">${formatFeature(feature)}</span>
        <div class="weight-track">
          <div class="weight-fill" data-val="${importance / maxVal * 100}"></div>
        </div>
        <span class="weight-val">${(importance * 100).toFixed(1)}%</span>`;
      container.appendChild(row);
    });

    // Animate weight bars
    setTimeout(() => {
      container.querySelectorAll('.weight-fill').forEach(el => {
        el.style.width = el.dataset.val + '%';
      });
    }, 80);

    // Show result section
    const section = document.getElementById('result-section');
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function showError(msg) {
    const el = document.getElementById('error-msg');
    el.textContent = msg;
    el.style.display = 'block';
  }

  function fmt(v)  { return (v * 100).toFixed(1) + '%'; }
  function pct(v)  { return (v * 100) + '%'; }

  function formatFeature(key) {
    const map = {
      pclass: 'Class', sex: 'Sex', age: 'Age', sibsp: 'Siblings',
      parch: 'Parents', fare: 'Fare', alone: 'Alone',
      embarked_C: 'Embk. C', embarked_Q: 'Embk. Q', embarked_S: 'Embk. S'
    };
    return map[key] || key;
  }
</script>
</body>
</html>