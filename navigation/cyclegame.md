---
layout: opencs
title: Cell Lab
permalink: /celllab
---

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cell Cycle Lab</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Nunito:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --cream:#fdf6ee;--warm-white:#fff9f3;--rose:#e07a6a;--rose-light:#f2b5ab;
  --rose-pale:#fce9e6;--terra:#c45e4a;--sage:#8aaa8c;--sage-light:#b8ceb9;
  --sage-pale:#eaf1ea;--tan:#c4a882;--tan-light:#e8d9c4;--brown:#6b4c3b;
  --text:#3d2c24;--muted:#937468;--border:rgba(196,168,130,0.25);
  --serif:'Cormorant Garamond',Georgia,serif;--sans:'Nunito',system-ui,sans-serif;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--cream);color:var(--text);font-family:var(--sans);font-size:14px;line-height:1.65;-webkit-font-smoothing:antialiased;min-height:100vh;overflow-x:hidden}
body::after{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");pointer-events:none;z-index:9999;opacity:0.35}

.shell{display:grid;grid-template-columns:260px 1fr;min-height:100vh}

/* SIDEBAR */
.sidebar{background:var(--warm-white);border-right:1px solid var(--border);display:flex;flex-direction:column;position:sticky;top:0;height:100vh;overflow-y:auto}
.sb-head{padding:24px 20px 16px;border-bottom:1px solid var(--border)}
.module-tag{font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--terra);background:var(--rose-pale);border:1px solid var(--rose-light);border-radius:20px;padding:4px 12px;display:inline-block;margin-bottom:10px}
.sb-head h1{font-family:var(--serif);font-size:22px;font-weight:600;color:var(--text);line-height:1.15}
.sb-head h1 em{font-style:italic;color:var(--rose)}
.mut-block{padding:14px 20px;border-bottom:1px solid var(--border)}
.met-label{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
.met-label span:first-child{font-size:9px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.met-val{font-family:var(--serif);font-size:17px;font-weight:600;color:var(--terra)}
.met-track{height:8px;background:var(--tan-light);border-radius:4px;overflow:hidden}
.met-fill{height:100%;border-radius:4px;background:linear-gradient(90deg,var(--sage) 0%,var(--tan) 40%,var(--rose) 70%,var(--terra) 100%);transition:width .7s cubic-bezier(.4,0,.2,1);width:0%}
.met-status{font-size:10px;color:var(--muted);margin-top:4px;font-style:italic}
.score-row{padding:10px 20px;border-bottom:1px solid var(--border);display:flex;gap:8px}
.sc-bl{flex:1;background:var(--cream);border:1px solid var(--border);border-radius:9px;padding:8px;text-align:center}
.sc-n{font-family:var(--serif);font-size:20px;font-weight:600;color:var(--text);line-height:1}
.sc-l{font-size:8px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-top:1px}
.gene-panel{padding:16px 20px;border-bottom:1px solid var(--border)}
.sec-lbl{font-size:9px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:10px}
.gene-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);cursor:pointer}
.gene-row:last-child{border-bottom:none}
.ginfo{flex:1}.gname{font-size:12px;font-weight:700;color:var(--text)}.gdesc{font-size:10px;color:var(--muted);margin-top:1px}
.pill{width:36px;height:19px;border-radius:10px;background:var(--tan-light);position:relative;cursor:pointer;transition:background .3s;flex-shrink:0;border:none}
.pill.on{background:var(--sage)}.pill.mutated{background:var(--rose)}
.pill::after{content:'';position:absolute;top:2px;left:2px;width:15px;height:15px;background:white;border-radius:50%;transition:transform .3s;box-shadow:0 1px 3px rgba(0,0,0,.15)}
.pill.on::after,.pill.mutated::after{transform:translateX(17px)}
.phase-nav{padding:16px 20px;flex:1}
.nav-item{display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;margin-bottom:3px;cursor:pointer;transition:background .2s,border-color .2s;border:1px solid transparent}
.nav-item:hover:not(.locked){background:var(--rose-pale);border-color:var(--rose-light)}
.nav-item.active{background:var(--rose-pale);border-color:var(--rose-light)}
.nav-item.locked{opacity:.36;cursor:not-allowed}
.nav-pip{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.nav-name{font-size:12px;font-weight:700;color:var(--text);flex:1}
.nav-st{font-size:9px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
.nav-st.done{color:var(--sage)}.nav-st.act{color:var(--rose)}.nav-st.lock{color:var(--muted)}

/* MAIN */
.main{display:flex;flex-direction:column;overflow-y:auto}
.cell-lab{padding:20px 28px;border-bottom:1px solid var(--border);background:var(--cream);display:grid;grid-template-columns:1fr 200px;gap:20px;align-items:start}
.cv-wrap{background:var(--warm-white);border:1px solid var(--border);border-radius:18px;overflow:hidden}
.cv-wrap canvas{display:block;width:100%;height:auto}
.cv-controls{display:flex;align-items:center;justify-content:space-between;padding:8px 14px;border-top:1px solid var(--border);background:var(--warm-white)}
.phase-label-area{display:flex;flex-direction:column}
.pla-phase{font-family:var(--serif);font-size:16px;font-weight:600;color:var(--text);line-height:1}
.pla-sub{font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.ctrl-btns{display:flex;gap:5px;align-items:center}
.ctrl-btn{background:var(--cream);border:1px solid var(--border);border-radius:6px;padding:3px 10px;font-family:var(--sans);font-size:11px;font-weight:700;color:var(--muted);cursor:pointer;transition:all .2s}
.ctrl-btn:hover{border-color:var(--rose-light);color:var(--terra)}
.ctrl-btn.active{background:var(--rose-pale);border-color:var(--rose);color:var(--terra)}
.pause-btn{background:var(--rose);border:none;border-radius:6px;padding:4px 14px;font-family:var(--sans);font-size:11px;font-weight:700;color:white;cursor:pointer;transition:background .2s}
.pause-btn:hover{background:var(--terra)}
.dis-col{display:flex;flex-direction:column;gap:8px}
.dis-col .sec-lbl{margin-bottom:2px}
.dis-card{background:var(--warm-white);border:1.5px solid var(--border);border-radius:12px;padding:10px 12px;cursor:pointer;transition:all .22s;display:flex;align-items:center;gap:9px}
.dis-card:hover{border-color:var(--rose-light);background:var(--rose-pale);transform:translateX(-3px);box-shadow:4px 0 12px rgba(224,122,106,.1)}
.dis-card.firing{border-color:var(--terra);background:var(--rose-pale);animation:fireShake .4s ease}
@keyframes fireShake{0%,100%{transform:translateX(-3px)}25%{transform:translateX(-8px) rotate(-1deg)}75%{transform:translateX(-1px) rotate(1deg)}}
.dis-badge{width:32px;height:32px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:900;color:white;flex-shrink:0;letter-spacing:-.5px}
.dis-badge.uv{background:#c49a10}.dis-badge.smoke{background:#5a5a5a}.dis-badge.metal{background:#3a6e7e}.dis-badge.mut{background:var(--terra)}
.dis-info h4{font-size:11px;font-weight:700;color:var(--text);margin-bottom:1px}.dis-info p{font-size:9px;color:var(--muted);line-height:1.3}

/* PHASE CONTENT */
.phase-content{padding:28px 28px}
.ph-header{display:flex;align-items:center;gap:16px;margin-bottom:24px;padding-bottom:20px;border-bottom:1px solid var(--border)}
.ph-badge{width:52px;height:52px;border-radius:13px;display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-size:24px;font-weight:600;color:white;flex-shrink:0}
.ph-header h2{font-family:var(--serif);font-size:28px;font-weight:600;color:var(--text);line-height:1}
.ph-sub{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-top:4px}
.ph-dur{margin-left:auto;background:var(--cream);border:1px solid var(--border);border-radius:9px;padding:7px 14px;text-align:center;flex-shrink:0}
.dur-n{font-family:var(--serif);font-size:17px;font-weight:600;color:var(--text);line-height:1}
.dur-l{font-size:8px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.info-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px}
.info-card{background:var(--warm-white);border:1px solid var(--border);border-radius:12px;padding:15px 17px}
.ic-lbl{font-size:8px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:6px}
.ic-txt{font-size:12px;color:var(--text);line-height:1.7}
.ic-txt strong{color:var(--terra)}
.gate{background:var(--warm-white);border:2px solid var(--tan-light);border-radius:16px;padding:24px 28px;margin-bottom:20px;position:relative;overflow:hidden}
.gate::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--rose)}
.gate.passed::before{background:var(--sage)}
.gate-eye{font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--terra);margin-bottom:8px}
.gate.passed .gate-eye{color:var(--sage)}
.gate-q{font-family:var(--serif);font-size:18px;font-weight:600;color:var(--text);margin-bottom:14px;line-height:1.35}
.gate-opts{display:flex;flex-direction:column;gap:6px;margin-bottom:12px}
.gate-opt{background:var(--cream);border:1.5px solid var(--border);border-radius:8px;padding:9px 14px;cursor:pointer;transition:all .2s;font-family:var(--sans);font-size:12px;color:var(--text);text-align:left;font-weight:500}
.gate-opt:hover:not(:disabled){border-color:var(--rose-light);background:var(--rose-pale)}
.gate-opt.correct{background:var(--sage-pale);border-color:var(--sage);color:#2d5e30;font-weight:600}
.gate-opt.wrong{background:var(--rose-pale);border-color:var(--rose);color:var(--terra)}
.gate-opt:disabled{cursor:not-allowed}
.gate-fb{font-size:12px;line-height:1.65;padding:10px 14px;border-radius:8px;display:none}
.gate-fb.correct{background:var(--sage-pale);border:1px solid var(--sage-light);color:#2d5e30;display:block}
.gate-fb.wrong{background:var(--rose-pale);border:1px solid var(--rose-light);color:var(--terra);display:block}
.adv-btn{display:none;background:var(--rose);color:white;border:none;border-radius:8px;padding:10px 24px;font-family:var(--sans);font-size:11px;font-weight:800;cursor:pointer;transition:background .2s,transform .15s;margin-top:12px;letter-spacing:.08em;text-transform:uppercase}
.adv-btn:hover{background:var(--terra);transform:translateY(-1px)}
.adv-btn.show{display:inline-block}
.gene-tabs{display:flex;gap:5px;margin-bottom:13px;flex-wrap:wrap}
.g-tab{padding:5px 14px;border-radius:20px;border:1.5px solid var(--border);background:var(--cream);font-family:var(--sans);font-size:10px;font-weight:800;color:var(--muted);cursor:pointer;transition:all .2s}
.g-tab:hover{border-color:var(--rose-light);color:var(--terra)}
.g-tab.active{background:var(--rose-pale);border-color:var(--rose);color:var(--terra)}
.g-tc{display:none;background:var(--warm-white);border:1px solid var(--border);border-radius:14px;padding:20px;animation:fadeUp .25s ease}
.g-tc.active{display:block}
@keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.gtc-head{display:flex;align-items:center;gap:10px;margin-bottom:11px}
.gtc-dot{width:11px;height:11px;border-radius:50%}
.gtc-title{font-family:var(--serif);font-size:18px;font-weight:600;color:var(--text)}
.gtc-badge{font-size:8px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:3px 8px;border-radius:20px}
.gtc-body{font-size:12px;color:var(--muted);line-height:1.8;margin-bottom:13px}
.gtc-body strong{color:var(--text);font-weight:600}
.stat-row{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px}
.stat-bl{background:var(--cream);border:1px solid var(--border);border-radius:9px;padding:10px;text-align:center}
.stat-n{font-family:var(--serif);font-size:18px;font-weight:600;line-height:1}
.stat-l{font-size:8px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-top:2px}
.event-feed{background:var(--warm-white);border:1px solid var(--border);border-radius:13px;overflow:hidden;margin-top:20px}
.ef-head{padding:9px 15px;border-bottom:1px solid var(--border);font-size:8px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);display:flex;align-items:center;gap:6px}
.fd{width:5px;height:5px;border-radius:50%;background:var(--sage);animation:fdP 2s ease infinite}
@keyframes fdP{0%,100%{opacity:1}50%{opacity:.3}}
.ev-list{max-height:180px;overflow-y:auto;padding:4px 0}
.ev-item{display:flex;align-items:flex-start;gap:10px;padding:8px 15px;border-bottom:1px solid var(--border);animation:slideIn .3s ease}
.ev-item:last-child{border-bottom:none}
@keyframes slideIn{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
.ev-type{font-size:7px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;padding:2px 6px;border-radius:4px;flex-shrink:0;margin-top:2px}
.ev-type.damage{background:var(--rose-pale);color:var(--terra)}.ev-type.repair{background:var(--sage-pale);color:#2d5e30}
.ev-type.alert{background:#fff0e0;color:#8a5010}.ev-type.system{background:var(--tan-light);color:var(--brown)}
.ev-txt{font-size:11px;color:var(--muted);line-height:1.5;flex:1}.ev-txt strong{color:var(--text)}
::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:var(--cream)}
::-webkit-scrollbar-thumb{background:var(--tan-light);border-radius:3px}::-webkit-scrollbar-thumb:hover{background:var(--tan)}
.toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(80px);background:var(--text);color:white;padding:10px 20px;border-radius:10px;font-size:12px;font-weight:700;z-index:9000;transition:transform .35s cubic-bezier(.34,1.56,.64,1);pointer-events:none;white-space:nowrap}
.toast.show{transform:translateX(-50%) translateY(0)}
</style>
</head>
<body>
<div class="shell">

<aside class="sidebar">
  <div class="sb-head">
    <div class="module-tag">Interactive Lab</div>
    <h1>The Cell Cycle<br><em>and Cancer</em></h1>
  </div>
  <div class="mut-block">
    <div class="met-label"><span>Mutation Load</span><span class="met-val" id="mutPct">0%</span></div>
    <div class="met-track"><div class="met-fill" id="mutFill"></div></div>
    <div class="met-status" id="mutStatus">Cell is healthy -- cycle running normally</div>
  </div>
  <div class="score-row">
    <div class="sc-bl"><div class="sc-n" id="scoreNum">0</div><div class="sc-l">Score</div></div>
    <div class="sc-bl"><div class="sc-n" id="phaseNum">0</div><div class="sc-l">Phases</div></div>
    <div class="sc-bl"><div class="sc-n" id="hitNum">0</div><div class="sc-l">Hits</div></div>
  </div>
  <div class="gene-panel">
    <div class="sec-lbl">Gene Control Panel</div>
    <div class="gene-row" onclick="toggleGene('p53')">
      <div class="ginfo"><div class="gname">p53 Tumor Suppressor</div><div class="gdesc" id="d-p53">Active -- monitoring for DNA damage</div></div>
      <button class="pill on" id="pill-p53"></button>
    </div>
    <div class="gene-row" onclick="toggleGene('rb')">
      <div class="ginfo"><div class="gname">Rb Protein</div><div class="gdesc" id="d-rb">Active -- blocking premature S entry</div></div>
      <button class="pill on" id="pill-rb"></button>
    </div>
    <div class="gene-row" onclick="toggleGene('ras')">
      <div class="ginfo"><div class="gname">RAS Proto-oncogene</div><div class="gdesc" id="d-ras">Normal -- off between signals</div></div>
      <button class="pill on" id="pill-ras"></button>
    </div>
    <div class="gene-row" onclick="toggleGene('brca')">
      <div class="ginfo"><div class="gname">BRCA1 Repair Gene</div><div class="gdesc" id="d-brca">Active -- patching double-strand breaks</div></div>
      <button class="pill on" id="pill-brca"></button>
    </div>
  </div>
  <div class="phase-nav">
    <div class="sec-lbl">Phase Navigator</div>
    <div class="nav-item active" id="nav-g1" onclick="goPhase('g1')">
      <div class="nav-pip" style="background:#e07a6a"></div><div class="nav-name">G1 Phase</div>
      <div class="nav-st act" id="nst-g1">Active</div>
    </div>
    <div class="nav-item locked" id="nav-s" onclick="goPhase('s')">
      <div class="nav-pip" style="background:#8aaa8c"></div><div class="nav-name">S Phase</div>
      <div class="nav-st lock" id="nst-s">Locked</div>
    </div>
    <div class="nav-item locked" id="nav-g2" onclick="goPhase('g2')">
      <div class="nav-pip" style="background:#c4a882"></div><div class="nav-name">G2 Phase</div>
      <div class="nav-st lock" id="nst-g2">Locked</div>
    </div>
    <div class="nav-item locked" id="nav-m" onclick="goPhase('m')">
      <div class="nav-pip" style="background:#c45e4a"></div><div class="nav-name">M Phase</div>
      <div class="nav-st lock" id="nst-m">Locked</div>
    </div>
    <div class="nav-item locked" id="nav-genes" onclick="goPhase('genes')">
      <div class="nav-pip" style="background:#937468"></div><div class="nav-name">Gene Deep-Dive</div>
      <div class="nav-st lock" id="nst-genes">Locked</div>
    </div>
  </div>
</aside>

<main class="main">
  <div class="cell-lab">
    <div class="cv-wrap">
      <canvas id="cv" width="680" height="420"></canvas>
      <div class="cv-controls">
        <div class="phase-label-area">
          <div class="pla-phase" id="ploPhase">G1</div>
          <div class="pla-sub" id="ploSub">Gap 1 -- Growth</div>
        </div>
        <div class="ctrl-btns">
          <button class="ctrl-btn" onclick="setSpeed(0.5,this)">0.5x</button>
          <button class="ctrl-btn active" onclick="setSpeed(1,this)">1x</button>
          <button class="ctrl-btn" onclick="setSpeed(2,this)">2x</button>
          <button class="pause-btn" id="pauseBtn" onclick="togglePause()">Pause</button>
        </div>
      </div>
    </div>
    <div class="dis-col">
      <div class="sec-lbl">Apply Disruptor</div>
      <div class="dis-card" id="dc-uv" onclick="fireDisruptor('uv')">
        <div class="dis-badge uv">UV</div>
        <div class="dis-info"><h4>UV Radiation</h4><p>Thymine dimers at G1/S checkpoint</p></div>
      </div>
      <div class="dis-card" id="dc-smoke" onclick="fireDisruptor('smoke')">
        <div class="dis-badge smoke">BAP</div>
        <div class="dis-info"><h4>Tobacco Smoke</h4><p>Carcinogens attack during S phase</p></div>
      </div>
      <div class="dis-card" id="dc-metal" onclick="fireDisruptor('metal')">
        <div class="dis-badge metal">Cd</div>
        <div class="dis-info"><h4>Heavy Metals</h4><p>Cadmium disables mismatch repair</p></div>
      </div>
      <div class="dis-card" id="dc-mut" onclick="fireDisruptor('mut')">
        <div class="dis-badge mut">BRCA</div>
        <div class="dis-info"><h4>Inherited Mutation</h4><p>BRCA1 loss at G2/M checkpoint</p></div>
      </div>
    </div>
  </div>

  <div class="phase-content">

    <div id="c-g1">
      <div class="ph-header">
        <div class="ph-badge" style="background:#e07a6a">G1</div>
        <div><h2>G1 Phase</h2><div class="ph-sub">Gap 1 -- First Growth Phase</div></div>
        <div class="ph-dur"><div class="dur-n">11 hrs</div><div class="dur-l">Average</div></div>
      </div>
      <div class="info-grid">
        <div class="info-card"><div class="ic-lbl">What Happens</div><div class="ic-txt">The cell grows, synthesizes proteins and RNA, and evaluates environmental signals. The cell decides whether to commit to division. The critical decision point is called the <strong>Restriction Point</strong>.</div></div>
        <div class="info-card"><div class="ic-lbl">G1/S Checkpoint</div><div class="ic-txt"><strong>Rb protein</strong> binds E2F transcription factors, blocking S phase entry. Growth signals activate CDK4/Cyclin D, which phosphorylates Rb, releasing E2F. The cell commits irreversibly.</div></div>
        <div class="info-card"><div class="ic-lbl">Cancer Disruption</div><div class="ic-txt">Cyclin D amplification overactivates CDK4, continuously hyperphosphorylating Rb. The restriction point disappears. Cells divide without any growth signal -- a hallmark of cancer.</div></div>
        <div class="info-card"><div class="ic-lbl">Key Proteins</div><div class="ic-txt"><strong>Cyclin D / CDK4/6</strong> push past restriction point<br><strong>Rb</strong> is the brake pedal<br><strong>p21, p27</strong> are CDK inhibitors<br><strong>p53</strong> activates p21 when DNA is damaged</div></div>
      </div>
      <div class="gate" id="gate-g1">
        <div class="gate-eye">Checkpoint Gate -- Answer Correctly to Unlock S Phase</div>
        <div class="gate-q">What happens to Rb protein when a growth signal allows the cell to enter S phase?</div>
        <div class="gate-opts">
          <button class="gate-opt" onclick="checkAns(this,false,'g1','Rb does not degrade -- it gets chemically modified. Degradation would make the brake impossible to re-apply.')">Rb is degraded by the proteasome</button>
          <button class="gate-opt" onclick="checkAns(this,true,'g1','Correct. CDK4/Cyclin D phosphorylates Rb, adding phosphate groups that change its shape. This releases E2F transcription factors, which activate S phase genes. The brakes are released temporarily and reversibly.')">Rb is phosphorylated by CDK4/Cyclin D, releasing E2F</button>
          <button class="gate-opt" onclick="checkAns(this,false,'g1','p53 activates CDK inhibitors like p21 when DNA is damaged -- that response keeps Rb active and blocks division.')">p53 activates CDK, which then phosphorylates Rb</button>
          <button class="gate-opt" onclick="checkAns(this,false,'g1','Rb is always present -- phosphorylation changes its activity, not synthesis of a new protein.')">A new inactive Rb protein is synthesized</button>
        </div>
        <div class="gate-fb" id="fb-g1"></div>
        <button class="adv-btn" id="adv-g1" onclick="unlockPhase('s')">Advance to S Phase</button>
      </div>
    </div>

    <div id="c-s" style="display:none">
      <div class="ph-header">
        <div class="ph-badge" style="background:#8aaa8c">S</div>
        <div><h2>S Phase</h2><div class="ph-sub">Synthesis -- DNA Replication</div></div>
        <div class="ph-dur"><div class="dur-n">6-8 hrs</div><div class="dur-l">Average</div></div>
      </div>
      <div class="info-grid">
        <div class="info-card"><div class="ic-lbl">What Happens</div><div class="ic-txt">Every one of the cell's 3 billion base pairs is copied. DNA content doubles from 2N to 4N. Each chromosome becomes two identical sister chromatids joined at the centromere.</div></div>
        <div class="info-card"><div class="ic-lbl">Error Rate and Repair</div><div class="ic-txt">DNA polymerase makes one error per <strong>10 billion</strong> base pairs thanks to proofreading. Mismatch repair catches remaining errors. When MMR is disabled by cadmium, error rates skyrocket -- the mutator phenotype.</div></div>
        <div class="info-card"><div class="ic-lbl">Where Carcinogens Strike</div><div class="ic-txt">Benzo[a]pyrene forms bulky adducts on guanine. DNA polymerase inserts the wrong base at the lesion. If codon 12 of <strong>RAS</strong> is mutated, an oncogene is born in a single replication event.</div></div>
        <div class="info-card"><div class="ic-lbl">Key Proteins</div><div class="ic-txt"><strong>DNA Pol delta/epsilon</strong> with proofreading<br><strong>PCNA</strong> sliding clamp processivity factor<br><strong>BRCA1/2</strong> repair stalled replication forks<br><strong>Cyclin E/CDK2</strong> fire replication origins</div></div>
      </div>
      <div class="gate" id="gate-s">
        <div class="gate-eye">Checkpoint Gate -- Answer Correctly to Unlock G2 Phase</div>
        <div class="gate-q">What type of mutation does benzo[a]pyrene cause that can convert a proto-oncogene into an active oncogene?</div>
        <div class="gate-opts">
          <button class="gate-opt" onclick="checkAns(this,false,'s','Deletions remove sections of DNA -- BAP creates a single-base change through adduct formation, not a deletion.')">Chromosomal deletion at the promoter region</button>
          <button class="gate-opt" onclick="checkAns(this,false,'s','Methylation is epigenetic silencing -- BAP works by forming adducts that cause base substitution errors during replication.')">Promoter hypermethylation silencing the gene</button>
          <button class="gate-opt" onclick="checkAns(this,true,'s','Exactly. BAP forms a bulky adduct on guanine. During S phase, DNA polymerase misreads it and inserts adenine instead of cytosine. The result is a G to T transversion -- one base change at codon 12 of RAS creates a permanently active oncogene.')">G to T transversion point mutation during replication</button>
          <button class="gate-opt" onclick="checkAns(this,false,'s','Gene amplification produces extra copies -- a different mechanism from direct DNA adduct damage caused by BAP.')">Gene amplification creating extra copies of RAS</button>
        </div>
        <div class="gate-fb" id="fb-s"></div>
        <button class="adv-btn" id="adv-s" onclick="unlockPhase('g2')">Advance to G2 Phase</button>
      </div>
    </div>

    <div id="c-g2" style="display:none">
      <div class="ph-header">
        <div class="ph-badge" style="background:#c4a882">G2</div>
        <div><h2>G2 Phase</h2><div class="ph-sub">Gap 2 -- Pre-Mitotic Verification</div></div>
        <div class="ph-dur"><div class="dur-n">3-4 hrs</div><div class="dur-l">Average</div></div>
      </div>
      <div class="info-grid">
        <div class="info-card"><div class="ic-lbl">What Happens</div><div class="ic-txt">The cell verifies DNA replication is complete and checks for damage before committing to mitosis. The cell produces tubulin for spindle fibers and condensins for chromosome compaction.</div></div>
        <div class="info-card"><div class="ic-lbl">G2/M Checkpoint</div><div class="ic-txt"><strong>ATM and ATR kinases</strong> scan replicated DNA for double-strand breaks. When damage is found, ATM activates CHK2, which stabilizes <strong>p53</strong>. p53 transcribes p21, which blocks CDK1/Cyclin B -- division halts.</div></div>
        <div class="info-card"><div class="ic-lbl">When p53 is Lost</div><div class="ic-txt">Without p53 the G2/M checkpoint is blind. Cells with damaged DNA proceed into mitosis, distribute broken chromosomes to daughter cells, and accumulate genomic instability with every division.</div></div>
        <div class="info-card"><div class="ic-lbl">Key Proteins</div><div class="ic-txt"><strong>ATM/ATR</strong> detect DNA damage<br><strong>CHK1/CHK2</strong> amplify the damage signal<br><strong>CDC25</strong> activates CDK1 (inactivated during arrest)<br><strong>Cyclin B/CDK1</strong> is the Mitosis-Promoting Factor</div></div>
      </div>
      <div class="gate" id="gate-g2">
        <div class="gate-eye">Checkpoint Gate -- Answer Correctly to Unlock M Phase</div>
        <div class="gate-q">A cell with non-functional p53 has UV-damaged DNA at the G2/M checkpoint. What most likely happens?</div>
        <div class="gate-opts">
          <button class="gate-opt" onclick="checkAns(this,false,'g2','Apoptosis at G2 requires p53 to transcribe BAX. Without p53 this response cannot be triggered.')">The cell undergoes apoptosis because ATM still functions</button>
          <button class="gate-opt" onclick="checkAns(this,false,'g2','ATM and CHK2 can detect damage -- but without p53 as the downstream effector, there is no output to halt the cycle.')">ATM detects damage and permanently halts the cell</button>
          <button class="gate-opt" onclick="checkAns(this,true,'g2','Correct. p53 receives the damage signal from ATM/CHK2 and translates it into arrest via p21 or apoptosis via BAX and PUMA. Without p53 the signal has no output. The cell enters mitosis with damaged DNA -- chromosomal instability accumulates in each daughter cell.')">The cell bypasses the checkpoint and enters mitosis with damaged DNA</button>
          <button class="gate-opt" onclick="checkAns(this,false,'g2','Repair proteins still function -- but without p53-mediated arrest, there is no time to complete repair before mitosis begins.')">DNA repair enzymes fix the damage without any checkpoint</button>
        </div>
        <div class="gate-fb" id="fb-g2"></div>
        <button class="adv-btn" id="adv-g2" onclick="unlockPhase('m')">Advance to M Phase</button>
      </div>
    </div>

    <div id="c-m" style="display:none">
      <div class="ph-header">
        <div class="ph-badge" style="background:#c45e4a">M</div>
        <div><h2>M Phase</h2><div class="ph-sub">Mitosis -- Cell Division</div></div>
        <div class="ph-dur"><div class="dur-n">1-2 hrs</div><div class="dur-l">Average</div></div>
      </div>
      <div class="info-grid">
        <div class="info-card"><div class="ic-lbl">Four Sub-phases</div><div class="ic-txt"><strong>Prophase:</strong> Chromosomes condense, spindle forms<br><strong>Metaphase:</strong> Chromosomes align at plate<br><strong>Anaphase:</strong> Sister chromatids pulled apart<br><strong>Telophase:</strong> Two nuclei form, cytokinesis begins</div></div>
        <div class="info-card"><div class="ic-lbl">Spindle Assembly Checkpoint</div><div class="ic-txt"><strong>Mad2 and BubR1</strong> are released from any kinetochore not yet attached to spindle fibers. Free Mad2 inhibits APC/C ubiquitin ligase. All chromosomes must attach before Securin is degraded and Separase separates chromatids.</div></div>
        <div class="info-card"><div class="ic-lbl">Aneuploidy in Cancer</div><div class="ic-txt">Defective spindle checkpoints allow cells with unattached chromosomes to proceed. Daughter cells receive the wrong chromosome number -- <strong>aneuploidy</strong>. Over 90% of solid tumors are aneuploid.</div></div>
        <div class="info-card"><div class="ic-lbl">Key Proteins</div><div class="ic-txt"><strong>APC/C</strong> drives mitotic exit via ubiquitination<br><strong>Securin</strong> holds sister chromatids together<br><strong>Separase</strong> cleaves cohesin when released<br><strong>Mad1/Mad2/BubR1</strong> spindle checkpoint</div></div>
      </div>
      <div class="gate" id="gate-m">
        <div class="gate-eye">Checkpoint Gate -- Answer Correctly to Unlock Gene Deep-Dive</div>
        <div class="gate-q">During metaphase, one chromosome has not yet attached to the spindle. What happens to APC/C activity?</div>
        <div class="gate-opts">
          <button class="gate-opt" onclick="checkAns(this,false,'m','APC/C activation signals mitotic exit -- Mad2 from unattached kinetochores prevents APC/C activation, not the reverse.')">APC/C is activated to trigger rapid chromosome separation</button>
          <button class="gate-opt" onclick="checkAns(this,true,'m','Exactly. Free Mad2 from unattached kinetochores binds and inhibits Cdc20, the co-activator of APC/C. Without active APC/C, Securin is not degraded, Separase stays inactive, and chromatids cannot separate. The checkpoint holds until every chromosome is bioriented.')">APC/C is inhibited by Mad2, preventing premature chromosome separation</button>
          <button class="gate-opt" onclick="checkAns(this,false,'m','Separase is downstream of APC/C -- it is only released when Securin is degraded by active APC/C.')">Separase cleaves Securin to allow chromosome reattachment</button>
          <button class="gate-opt" onclick="checkAns(this,false,'m','p53 is not involved in the spindle assembly checkpoint -- it operates through Mad1/Mad2/BubR1 and APC/C independently.')">p53 is activated to halt the cell</button>
        </div>
        <div class="gate-fb" id="fb-m"></div>
        <button class="adv-btn" id="adv-m" onclick="unlockPhase('genes')">Enter Gene Deep-Dive</button>
      </div>
    </div>

    <div id="c-genes" style="display:none">
      <div class="ph-header">
        <div class="ph-badge" style="background:#937468">GEN</div>
        <div><h2>Gene Deep-Dive</h2><div class="ph-sub">Proto-oncogenes, Oncogenes, and Tumor Suppressors</div></div>
      </div>
      <div class="gene-tabs">
        <button class="g-tab active" onclick="gTab('proto',this)">Proto-oncogenes</button>
        <button class="g-tab" onclick="gTab('onco',this)">Oncogenes</button>
        <button class="g-tab" onclick="gTab('tumor',this)">Tumor Suppressors</button>
        <button class="g-tab" onclick="gTab('p53',this)">p53 in Detail</button>
      </div>
      <div class="g-tc active" id="gtc-proto">
        <div class="gtc-head"><div class="gtc-dot" style="background:#8aaa8c"></div><div class="gtc-title">Proto-oncogenes</div><div class="gtc-badge" style="background:var(--sage-pale);color:#2d5e30">Normal Function</div></div>
        <div class="gtc-body">Proto-oncogenes are normal, healthy genes encoding proteins essential for regulated cell growth. They produce <strong>growth factors</strong> (EGF, PDGF), <strong>growth factor receptors</strong> (EGFR, HER2), <strong>intracellular signal transducers</strong> (RAS, RAF, PI3K), and <strong>transcription factors</strong> (MYC, FOS, JUN).<br><br>In a healthy cell, proto-oncogenes are under tight regulatory control -- switched on by external signals and switched off once the signal passes. They only activate when the cell genuinely needs to divide.<br><br>The key insight: proto-oncogenes are <strong>not inherently dangerous</strong>. Every cell requires them. Danger arises only when mutations cause constitutive activation.</div>
        <div class="stat-row">
          <div class="stat-bl"><div class="stat-n" style="color:var(--sage)">350+</div><div class="stat-l">Known proto-oncogenes in humans</div></div>
          <div class="stat-bl"><div class="stat-n" style="color:var(--tan)">4 types</div><div class="stat-l">GFs, receptors, transducers, TFs</div></div>
          <div class="stat-bl"><div class="stat-n" style="color:var(--terra)">1 hit</div><div class="stat-l">Only one mutant copy needed (dominant)</div></div>
        </div>
      </div>
      <div class="g-tc" id="gtc-onco">
        <div class="gtc-head"><div class="gtc-dot" style="background:#e07a6a"></div><div class="gtc-title">Oncogenes</div><div class="gtc-badge" style="background:var(--rose-pale);color:var(--terra)">Gain-of-Function</div></div>
        <div class="gtc-body">Oncogenes are mutated proto-oncogenes that signal constant division even without growth factor binding.<br><br><strong>Point mutation:</strong> A single base change at Gly12 of RAS locks the protein in active GTP-bound state permanently. Mutant KRAS cannot hydrolyze GTP -- found in 40% of all human cancers.<br><br><strong>Gene amplification:</strong> Extra copies produce excess protein. HER2 is amplified in 20% of breast cancers -- targeted by Herceptin (trastuzumab).<br><br><strong>Chromosomal translocation:</strong> BCR-ABL fusion in CML produces a constitutively active tyrosine kinase, targeted by Gleevec (imatinib).</div>
        <div class="stat-row">
          <div class="stat-bl"><div class="stat-n" style="color:var(--rose)">40%</div><div class="stat-l">of cancers carry RAS mutations</div></div>
          <div class="stat-bl"><div class="stat-n" style="color:var(--rose)">Dominant</div><div class="stat-l">One mutant copy sufficient</div></div>
          <div class="stat-bl"><div class="stat-n" style="color:var(--terra)">3 routes</div><div class="stat-l">Point mut / amplification / translocation</div></div>
        </div>
      </div>
      <div class="g-tc" id="gtc-tumor">
        <div class="gtc-head"><div class="gtc-dot" style="background:#c45e4a"></div><div class="gtc-title">Tumor Suppressor Genes</div><div class="gtc-badge" style="background:#ffeee8;color:#8a3020">Loss-of-Function</div></div>
        <div class="gtc-body">Tumor suppressors are the brakes of the cell cycle -- they inhibit proliferation, trigger DNA repair, or activate apoptosis. Unlike oncogenes, they are recessive: <strong>both copies must be inactivated</strong> for cancer to develop.<br><br><strong>Knudson Two-Hit Hypothesis (1971):</strong> In hereditary cancers one mutant copy is inherited -- only one somatic second hit is needed. In sporadic cancers both hits occur somatically.<br><br><strong>Rb:</strong> Binds E2F when hypophosphorylated, blocking S phase. Loss of both Rb copies causes retinoblastoma in children.<br><br><strong>BRCA1/BRCA2:</strong> Homologous recombination repair proteins. Without them, double-strand breaks route through error-prone NHEJ.</div>
        <div class="stat-row">
          <div class="stat-bl"><div class="stat-n" style="color:var(--terra)">Recessive</div><div class="stat-l">Both copies must be lost</div></div>
          <div class="stat-bl"><div class="stat-n" style="color:var(--terra)">2 hits</div><div class="stat-l">Knudson two-hit hypothesis</div></div>
          <div class="stat-bl"><div class="stat-n" style="color:var(--terra)">70-80%</div><div class="stat-l">lifetime breast cancer risk with BRCA1 mut</div></div>
        </div>
      </div>
      <div class="g-tc" id="gtc-p53">
        <div class="gtc-head"><div class="gtc-dot" style="background:#c45e4a"></div><div class="gtc-title">p53 -- Guardian of the Genome</div><div class="gtc-badge" style="background:#ffeee8;color:#8a3020">Most Critical Tumor Suppressor</div></div>
        <div class="gtc-body">p53 (encoded by TP53) sits at the center of the cell's damage response. Under normal conditions it is continuously produced but rapidly degraded by MDM2.<br><br><strong>Activation:</strong> DNA damage activates ATM/ATR, which phosphorylate p53 at Ser15/Ser20, blocking MDM2 binding. p53 accumulates rapidly.<br><br><strong>Three outputs p53 can trigger:</strong><br>1. <strong>Cell cycle arrest:</strong> Transcribes CDKN1A (p21), which inhibits CDK2/Cyclin E -- blocks S phase entry.<br>2. <strong>DNA repair:</strong> Activates GADD45 and other repair pathway genes.<br>3. <strong>Apoptosis:</strong> If damage is irreparable, transcribes BAX, PUMA, NOXA -- activating mitochondrial apoptosis.</div>
        <div class="stat-row">
          <div class="stat-bl"><div class="stat-n" style="color:var(--terra)">50%+</div><div class="stat-l">of all cancers have TP53 mutations</div></div>
          <div class="stat-bl"><div class="stat-n" style="color:var(--terra)">3 roles</div><div class="stat-l">Arrest / Repair / Apoptosis</div></div>
          <div class="stat-bl"><div class="stat-n" style="color:var(--terra)">MDM2</div><div class="stat-l">Normal p53 regulator -- active drug target</div></div>
        </div>
      </div>
      <div class="event-feed">
        <div class="ef-head"><div class="fd"></div>Live Cell Event Log</div>
        <div class="ev-list" id="eventList">
          <div class="ev-item"><span class="ev-type system">System</span><div class="ev-txt">Cell cycle simulation initialized. All checkpoints active. Genome integrity: 100%.</div></div>
        </div>
      </div>
    </div>

  </div>
</main>
</div>
<div class="toast" id="toast"></div>

<script>
/* ===================================================
   STATE
=================================================== */
const S={
  score:0,phases:0,hits:0,mutation:0,
  paused:false,speed:1,
  genes:{p53:true,rb:true,ras:false,brca:true},
  phase:'g1',
  unlocked:new Set(['g1']),
  answered:{},
  activeDisruptor:null,
  disruptorTimer:0,
};

/* ===================================================
   CANVAS SETUP
=================================================== */
const cv=document.getElementById('cv');
const cx=cv.getContext('2d');
const W=cv.width, H=cv.height;
const OX=W/2, OY=H/2+10;  // wheel center

// Phase definitions: angle in degrees clockwise from top (12 o'clock = 0)
// Layout matches reference: G1=large bottom-right, S=bottom-left, G2=top-left, M=top-right
const PHASES=[
  {id:'g1', label:'G1', sub:'Growth',    col:'#e07a6a', startDeg:30,  spanDeg:185},
  {id:'s',  label:'S',  sub:'Synthesis', col:'#8aaa8c', startDeg:215, spanDeg:85},
  {id:'g2', label:'G2', sub:'Prep',      col:'#c4a882', startDeg:300, spanDeg:40},
  {id:'m',  label:'M',  sub:'Mitosis',   col:'#c45e4a', startDeg:340, spanDeg:50},
];
const OUTER_R=155, INNER_R=62;
const LABEL_R=115; // where phase labels sit

// Convert degrees to canvas radians (0deg=top, clockwise)
function degToRad(d){return (d-90)*Math.PI/180;}
function ptOnCircle(deg,r){return{x:OX+Math.cos(degToRad(deg))*r,y:OY+Math.sin(degToRad(deg))*r};}

let T=0;
// DNA damage marks: {x,y,type,age,maxAge}
let dnaMarks=[];
// Overlay particles: {type,...}
let overlayFX=[];

/* ===================================================
   DRAW WHEEL
=================================================== */
function drawWheel(){
  PHASES.forEach(ph=>{
    const isActive=(ph.id===S.phase);
    const isUnlocked=S.unlocked.has(ph.id);
    const a0=degToRad(ph.startDeg);
    const a1=degToRad(ph.startDeg+ph.spanDeg);

    // Wedge fill
    cx.beginPath();
    cx.moveTo(OX,OY);
    cx.arc(OX,OY,OUTER_R,a0,a1);
    cx.closePath();
    if(isActive){
      cx.fillStyle=ph.col+'44';
    } else if(isUnlocked){
      cx.fillStyle=ph.col+'22';
    } else {
      cx.fillStyle='rgba(196,168,130,0.07)';
    }
    cx.fill();

    // Outer arc border (thick colored ring segment)
    cx.beginPath();
    cx.arc(OX,OY,OUTER_R,a0,a1);
    if(isActive){
      cx.strokeStyle=ph.col;
      cx.lineWidth=10;
    } else if(isUnlocked){
      cx.strokeStyle=ph.col+'88';
      cx.lineWidth=7;
    } else {
      cx.strokeStyle='rgba(196,168,130,0.3)';
      cx.lineWidth=5;
    }
    cx.stroke();

    // Active phase: bright inner fill glow
    if(isActive){
      const pulse=0.14+Math.sin(T*0.04)*0.06;
      cx.beginPath();
      cx.moveTo(OX,OY);
      cx.arc(OX,OY,OUTER_R-12,a0,a1);
      cx.closePath();
      cx.fillStyle=ph.col+(Math.floor(pulse*255).toString(16).padStart(2,'0'));
      cx.fill();
    }

    // Divider spoke lines
    [ph.startDeg, ph.startDeg+ph.spanDeg].forEach(deg=>{
      const inner=ptOnCircle(deg,INNER_R+4);
      const outer=ptOnCircle(deg,OUTER_R+4);
      cx.beginPath();
      cx.moveTo(inner.x,inner.y);
      cx.lineTo(outer.x,outer.y);
      cx.strokeStyle='#fff9f3';
      cx.lineWidth=2.5;
      cx.stroke();
    });

    // Phase label
    const midDeg=ph.startDeg+ph.spanDeg/2;
    const lpt=ptOnCircle(midDeg,LABEL_R);
    cx.save();
    cx.translate(lpt.x,lpt.y);
    cx.textAlign='center';
    cx.textBaseline='middle';
    if(isActive){
      cx.fillStyle=ph.col;
      cx.font='800 18px Cormorant Garamond,serif';
      cx.fillText(ph.label,0,-8);
      cx.font='600 9px Nunito,sans-serif';
      cx.fillStyle='#937468';
      cx.fillText(ph.sub,0,6);
    } else if(isUnlocked){
      cx.fillStyle=ph.col+'cc';
      cx.font='700 15px Cormorant Garamond,serif';
      cx.fillText(ph.label,0,-6);
      cx.font='600 8px Nunito,sans-serif';
      cx.fillStyle='#937468aa';
      cx.fillText(ph.sub,0,6);
    } else {
      cx.fillStyle='rgba(196,168,130,0.5)';
      cx.font='700 15px Cormorant Garamond,serif';
      cx.fillText(ph.label,0,-4);
    }
    cx.restore();

    // Lock icon for locked phases
    if(!isUnlocked){
      const lk=ptOnCircle(midDeg,OUTER_R-22);
      cx.fillStyle='rgba(196,168,130,0.5)';
      cx.font='700 13px sans-serif';
      cx.textAlign='center';
      cx.textBaseline='middle';
      cx.fillText('locked',lk.x,lk.y);
    }
  });

  // Inner circle (white center -- INTERPHASE label)
  const isM=(S.phase==='m');
  cx.beginPath();
  cx.arc(OX,OY,INNER_R+2,0,Math.PI*2);
  cx.fillStyle='#fff9f3';
  cx.fill();
  cx.strokeStyle='rgba(196,168,130,0.3)';
  cx.lineWidth=1.5;
  cx.stroke();

  cx.textAlign='center';
  cx.fillStyle='#937468';
  cx.font='600 8px Nunito,sans-serif';
  cx.fillText(isM?'MITOSIS':'INTERPHASE',OX,OY-16);

  // Active phase name in center
  const activePhase=PHASES.find(p=>p.id===S.phase);
  if(activePhase){
    cx.fillStyle=activePhase.col;
    cx.font='600 20px Cormorant Garamond,serif';
    cx.fillText(activePhase.label,OX,OY+4);
    cx.fillStyle='#937468';
    cx.font='600 8px Nunito,sans-serif';
    cx.fillText(activePhase.sub,OX,OY+18);
  }

  // Mutation load arc inside center ring
  const hp=Math.max(0,1-S.mutation/100);
  cx.beginPath();
  cx.arc(OX,OY,INNER_R-10,-Math.PI/2,-Math.PI/2+Math.PI*2*hp);
  cx.strokeStyle=hp>0.6?'#8aaa8c':hp>0.3?'#c4a882':'#c45e4a';
  cx.lineWidth=4; cx.stroke();
  cx.beginPath();
  cx.arc(OX,OY,INNER_R-10,-Math.PI/2+Math.PI*2*hp,-Math.PI/2+Math.PI*2);
  cx.strokeStyle='rgba(196,168,130,0.2)';
  cx.lineWidth=4; cx.stroke();
}

/* ===================================================
   CHECKPOINT MARKERS
=================================================== */
function drawCheckpoints(){
  // G1/S boundary
  const g1sBoundaryDeg=PHASES[0].startDeg+PHASES[0].spanDeg; // 215 deg
  // G2/M boundary
  const g2mBoundaryDeg=PHASES[2].startDeg+PHASES[2].spanDeg; // 340 deg

  [{deg:g1sBoundaryDeg,label:'G1/S',broken:(!S.genes.p53||!S.genes.rb)},
   {deg:g2mBoundaryDeg,label:'G2/M',broken:!S.genes.p53}
  ].forEach(cp=>{
    const outer=ptOnCircle(cp.deg,OUTER_R+16);
    const inner=ptOnCircle(cp.deg,INNER_R+4);
    // Flashing gate line
    const flash=cp.broken&&(T%30<15);
    cx.beginPath();
    cx.moveTo(inner.x,inner.y);
    cx.lineTo(outer.x,outer.y);
    cx.strokeStyle=cp.broken?(flash?'#c45e4a':'#e07a6a88'):'rgba(196,168,130,0.6)';
    cx.lineWidth=cp.broken?2.5:1.5;
    cx.setLineDash([4,3]); cx.stroke(); cx.setLineDash([]);

    // Gate diamond on outer rim
    const dm=ptOnCircle(cp.deg,OUTER_R+4);
    cx.save(); cx.translate(dm.x,dm.y);
    cx.rotate(Math.PI/4);
    cx.fillStyle=cp.broken?(flash?'#c45e4a':'#e07a6a'):'#8aaa8c';
    cx.fillRect(-6,-6,12,12);
    cx.restore();

    // Label
    const lb=ptOnCircle(cp.deg,OUTER_R+30);
    cx.fillStyle=cp.broken?'#c45e4a':'#937468';
    cx.font='700 8px Nunito,sans-serif';
    cx.textAlign='center'; cx.textBaseline='middle';
    cx.fillText(cp.label,lb.x,lb.y);
  });
}

/* ===================================================
   DNA DOUBLE HELIX in center
=================================================== */
function drawDNA(){
  // Draw a small double helix in the top-right quadrant outside the wheel
  const bx=OX+OUTER_R+36, by=OY-80;
  const ht=90, wd=16, turns=3;
  const steps=60;

  // Background panel
  cx.fillStyle='rgba(255,249,243,0.95)';
  cx.beginPath(); cx.roundRect(bx-wd-8,by-8,wd*2+16,ht+16,8); cx.fill();
  cx.strokeStyle='rgba(196,168,130,0.3)'; cx.lineWidth=1; cx.stroke();

  // Draw two strands
  for(let s=0;s<2;s++){
    cx.beginPath();
    for(let i=0;i<=steps;i++){
      const frac=i/steps;
      const yp=by+frac*ht;
      const phase=frac*Math.PI*2*turns+(s===0?0:Math.PI);
      const xp=bx+Math.cos(phase)*wd;
      if(i===0) cx.moveTo(xp,yp); else cx.lineTo(xp,yp);
    }
    cx.strokeStyle=s===0?'#e07a6a88':'#8aaa8c88';
    cx.lineWidth=2; cx.stroke();
  }

  // Rungs and damage marks
  for(let i=0;i<=steps;i+=4){
    const frac=i/steps;
    const yp=by+frac*ht;
    const phase=frac*Math.PI*2*turns;
    const x0=bx+Math.cos(phase)*wd;
    const x1=bx+Math.cos(phase+Math.PI)*wd;

    // Check if there's a damage mark near this rung
    const hasDmg=dnaMarks.some(d=>Math.abs(d.frac-frac)<0.06&&d.age<d.maxAge);
    if(hasDmg){
      // Red break / adduct at this position
      cx.beginPath(); cx.moveTo(x0,yp); cx.lineTo(x1,yp);
      cx.strokeStyle='#c45e4a'; cx.lineWidth=2.5; cx.stroke();
      // X mark
      cx.strokeStyle='#c45e4a'; cx.lineWidth=2;
      cx.beginPath(); cx.moveTo(bx-4,yp-4); cx.lineTo(bx+4,yp+4); cx.stroke();
      cx.beginPath(); cx.moveTo(bx+4,yp-4); cx.lineTo(bx-4,yp+4); cx.stroke();
    } else {
      cx.beginPath(); cx.moveTo(x0,yp); cx.lineTo(x1,yp);
      cx.strokeStyle='rgba(196,168,130,0.35)'; cx.lineWidth=1.5; cx.stroke();
    }
  }

  // DNA label
  cx.fillStyle='#937468';
  cx.font='700 8px Nunito,sans-serif';
  cx.textAlign='center';
  cx.fillText('DNA',bx,by+ht+10);

  // Decay marks
  dnaMarks=dnaMarks.filter(d=>d.age<d.maxAge);
  dnaMarks.forEach(d=>d.age++);
}

/* ===================================================
   DISRUPTOR OVERLAY FX
=================================================== */
function spawnDisruptorFX(type){
  // Clear existing of same type
  overlayFX=overlayFX.filter(p=>p.type!==type);

  if(type==='uv'){
    // Sun in top-left corner, rays stream toward G1/S checkpoint area
    overlayFX.push({type:'sun',x:48,y:48,life:120,maxLife:120});
    // Rays travel from sun toward wheel
    const cpDeg=PHASES[0].startDeg+PHASES[0].spanDeg; // G1/S boundary
    const cpPt=ptOnCircle(cpDeg,OUTER_R);
    for(let i=0;i<20;i++){
      const delay=i*4;
      const startX=48+(Math.random()-0.5)*30;
      const startY=48+(Math.random()-0.5)*20;
      const dx=cpPt.x-startX, dy=cpPt.y-startY, dist=Math.hypot(dx,dy);
      const spd=3.5+Math.random()*2;
      overlayFX.push({
        type:'uvray',x:startX,y:startY,
        vx:(dx/dist)*spd,vy:(dy/dist)*spd,
        life:Math.floor(dist/spd)+delay,
        maxLife:Math.floor(dist/spd)+delay,
        delay,sz:1.5+Math.random()*1.5,
      });
    }
    // Add DNA damage marks (thymine dimers = T^T crosslinks)
    for(let i=0;i<5;i++) dnaMarks.push({frac:0.1+Math.random()*0.4,age:0,maxAge:200,type:'uv'});
  }

  if(type==='smoke'){
    // Cigarette bottom-right, smoke cloud drifts toward S phase area
    overlayFX.push({type:'cigarette',x:W-30,y:H-30,life:160,maxLife:160});
    const sPt=ptOnCircle(PHASES[1].startDeg+PHASES[1].spanDeg/2,OUTER_R-30);
    for(let i=0;i<25;i++){
      overlayFX.push({
        type:'smokepuff',
        x:W-30+(Math.random()-0.5)*40,y:H-30+(Math.random()-0.5)*20,
        tx:sPt.x,ty:sPt.y,
        progress:0,speed:0.005+Math.random()*0.004,
        life:140+i*3,maxLife:200,sz:5+Math.random()*10,delay:i*5,
      });
    }
    // BAP adducts on DNA
    for(let i=0;i<6;i++) dnaMarks.push({frac:0.4+Math.random()*0.3,age:0,maxAge:220,type:'smoke'});
  }

  if(type==='metal'){
    // Metal crystals fall from top
    const mPt=ptOnCircle(PHASES[1].startDeg+PHASES[2].spanDeg,OUTER_R-20);
    for(let i=0;i<22;i++){
      overlayFX.push({
        type:'crystal',
        x:mPt.x+(Math.random()-0.5)*120,
        y:-10-Math.random()*40,
        vx:(Math.random()-0.5)*0.5,
        vy:1.8+Math.random()*2.5,
        life:80+Math.random()*40,maxLife:120,
        sz:4+Math.random()*6,rot:Math.random()*Math.PI,
        delay:Math.floor(i*3),
      });
    }
    for(let i=0;i<4;i++) dnaMarks.push({frac:0.3+Math.random()*0.5,age:0,maxAge:240,type:'metal'});
  }

  if(type==='mut'){
    // Red fracture burst at G2/M checkpoint location
    const cpPt=ptOnCircle(PHASES[2].startDeg+PHASES[2].spanDeg,OUTER_R);
    for(let i=0;i<30;i++){
      const ang=Math.random()*Math.PI*2;
      const spd=2+Math.random()*5;
      overlayFX.push({
        type:'mutburst',x:cpPt.x,y:cpPt.y,
        vx:Math.cos(ang)*spd,vy:Math.sin(ang)*spd,
        life:50+Math.random()*30,maxLife:80,sz:3+Math.random()*4,
      });
    }
    // DNA strand breaks
    for(let i=0;i<8;i++){
      overlayFX.push({
        type:'dnabreak',x:cpPt.x+(Math.random()-0.5)*40,y:cpPt.y+(Math.random()-0.5)*40,
        vx:(Math.random()-0.5)*1.2,vy:(Math.random()-0.5)*1.2,
        life:80,maxLife:80,sz:10+Math.random()*8,rot:Math.random()*Math.PI,
      });
    }
    // Mutation warning text that fades in
    overlayFX.push({type:'mutlabel',x:cpPt.x,y:cpPt.y-30,life:120,maxLife:120});
    for(let i=0;i<7;i++) dnaMarks.push({frac:Math.random(),age:0,maxAge:260,type:'mut'});
  }
}

function drawOverlayFX(){
  overlayFX=overlayFX.filter(p=>p.life>0);

  overlayFX.forEach(p=>{
    if(p.delay&&p.delay>0){p.delay--;return;}
    const a=Math.min(1,p.life/Math.min(p.maxLife,40));
    p.life--;

    if(p.type==='sun'){
      cx.save(); cx.globalAlpha=Math.min(1,p.life/30)*0.9;
      cx.beginPath(); cx.arc(p.x,p.y,16,0,Math.PI*2);
      cx.fillStyle='#f5c830'; cx.fill();
      for(let r=0;r<8;r++){
        const ang=(r/8)*Math.PI*2+T*0.015;
        cx.beginPath();
        cx.moveTo(p.x+Math.cos(ang)*20,p.y+Math.sin(ang)*20);
        cx.lineTo(p.x+Math.cos(ang)*30,p.y+Math.sin(ang)*30);
        cx.strokeStyle='#f5c830'; cx.lineWidth=2.5; cx.stroke();
      }
      cx.restore();
    }

    else if(p.type==='uvray'){
      p.x+=p.vx; p.y+=p.vy;
      cx.save(); cx.globalAlpha=a*0.8;
      // Golden ray line
      cx.beginPath();
      cx.moveTo(p.x-p.vx*5,p.y-p.vy*5);
      cx.lineTo(p.x,p.y);
      cx.strokeStyle='#f5c830'; cx.lineWidth=p.sz+1; cx.lineCap='round'; cx.stroke();
      // Small burst on hit
      if(p.life<8){
        cx.beginPath(); cx.arc(p.x,p.y,6,0,Math.PI*2);
        cx.fillStyle='#f5c83044'; cx.fill();
      }
      cx.restore();
    }

    else if(p.type==='cigarette'){
      cx.save(); cx.globalAlpha=Math.min(1,p.life/20)*0.85;
      // Body
      cx.fillStyle='#ede0d0';
      cx.fillRect(p.x-22,p.y-5,20,7);
      // Lit end
      cx.fillStyle='#c45e4a';
      cx.fillRect(p.x-26,p.y-5,4,7);
      // Glow
      cx.beginPath(); cx.arc(p.x-24,p.y-1,4,0,Math.PI*2);
      cx.fillStyle='rgba(244,120,30,0.4)'; cx.fill();
      cx.restore();
    }

    else if(p.type==='smokepuff'){
      // Lerp toward target
      const tx=p.x+(p.tx-p.x)*p.speed*8;
      const ty=p.y+(p.ty-p.y)*p.speed*8;
      p.x=tx; p.y=ty;
      p.sz+=0.12;
      cx.save(); cx.globalAlpha=a*0.28;
      cx.beginPath(); cx.arc(p.x,p.y,p.sz,0,Math.PI*2);
      cx.fillStyle='#888'; cx.fill();
      cx.restore();
    }

    else if(p.type==='crystal'){
      p.x+=p.vx; p.y+=p.vy; p.vy+=0.06; p.rot+=0.04;
      cx.save(); cx.globalAlpha=a;
      cx.translate(p.x,p.y); cx.rotate(p.rot);
      // Teal octagon-ish crystal
      cx.beginPath();
      for(let i=0;i<6;i++){
        const ang=(i/6)*Math.PI*2;
        const rx=p.sz*(i%2===0?1:0.7);
        if(i===0) cx.moveTo(Math.cos(ang)*rx,Math.sin(ang)*rx);
        else cx.lineTo(Math.cos(ang)*rx,Math.sin(ang)*rx);
      }
      cx.closePath();
      cx.fillStyle='#5a9aaa'; cx.fill();
      cx.strokeStyle='#8acada'; cx.lineWidth=1; cx.stroke();
      cx.restore();
    }

    else if(p.type==='mutburst'){
      p.x+=p.vx; p.y+=p.vy; p.vx*=0.92; p.vy*=0.92;
      cx.save(); cx.globalAlpha=a;
      cx.beginPath(); cx.arc(p.x,p.y,p.sz,0,Math.PI*2);
      cx.fillStyle='#c45e4a'; cx.fill();
      cx.restore();
    }

    else if(p.type==='dnabreak'){
      p.x+=p.vx; p.y+=p.vy; p.rot+=0.025;
      cx.save(); cx.globalAlpha=a*0.75;
      cx.translate(p.x,p.y); cx.rotate(p.rot);
      // Two broken strand halves
      cx.strokeStyle='#c45e4a'; cx.lineWidth=2.5; cx.lineCap='round';
      cx.beginPath(); cx.moveTo(-p.sz,0); cx.lineTo(-2,0); cx.stroke();
      cx.beginPath(); cx.moveTo(2,0); cx.lineTo(p.sz,0); cx.stroke();
      // Gap marker
      cx.strokeStyle='#e07a6a'; cx.lineWidth=1.5;
      cx.beginPath(); cx.moveTo(-2,-5); cx.lineTo(2,5); cx.stroke();
      cx.restore();
    }

    else if(p.type==='mutlabel'){
      cx.save(); cx.globalAlpha=a;
      cx.fillStyle='#c45e4a';
      cx.font='700 10px Nunito,sans-serif';
      cx.textAlign='center'; cx.textBaseline='middle';
      cx.fillText('BRCA1 LOST',p.x,p.y);
      cx.fillText('DSB repair disabled',p.x,p.y+13);
      cx.restore();
    }
  });
}

/* ===================================================
   MINI CELL ICONS at phase tips
=================================================== */
function drawCellIcons(){
  PHASES.forEach(ph=>{
    const isUnlocked=S.unlocked.has(ph.id);
    const tipDeg=ph.startDeg+ph.spanDeg/2;
    const tipPt=ptOnCircle(tipDeg,OUTER_R+32);
    const r=12;
    cx.save();
    cx.globalAlpha=isUnlocked?0.9:0.25;

    // Cell circle
    cx.beginPath(); cx.arc(tipPt.x,tipPt.y,r,0,Math.PI*2);
    cx.fillStyle='rgba(253,246,238,0.95)'; cx.fill();
    cx.strokeStyle=isUnlocked?ph.col:'rgba(196,168,130,0.5)'; cx.lineWidth=2; cx.stroke();

    // Nucleus
    cx.beginPath(); cx.arc(tipPt.x,tipPt.y,r*0.4,0,Math.PI*2);
    cx.fillStyle=isUnlocked?(ph.col+'88'):'rgba(196,168,130,0.3)'; cx.fill();

    // Chromosome count by phase
    const chromCounts={g1:1,s:2,g2:2,m:4};
    const count=chromCounts[ph.id]||1;
    for(let i=0;i<count;i++){
      const ang=(i/count)*Math.PI*2+T*(ph.id==='m'?0.02:0);
      const cr=r*0.25, cx2=tipPt.x+Math.cos(ang)*r*0.45, cy2=tipPt.y+Math.sin(ang)*r*0.45;
      cx.beginPath(); cx.ellipse(cx2,cy2,cr,cr*2,ang,0,Math.PI*2);
      cx.fillStyle=isUnlocked?(ph.col+'cc'):'rgba(196,168,130,0.3)'; cx.fill();
    }

    // G0 branch on G1 icon
    if(ph.id==='g1'&&isUnlocked){
      const g0pt=ptOnCircle(tipDeg+20,OUTER_R+55);
      cx.beginPath();
      cx.moveTo(tipPt.x+r,tipPt.y);
      cx.lineTo(g0pt.x-10,g0pt.y);
      cx.strokeStyle='rgba(147,116,104,0.4)'; cx.lineWidth=1.5;
      cx.setLineDash([3,3]); cx.stroke(); cx.setLineDash([]);
      // G0 circle
      cx.beginPath(); cx.arc(g0pt.x,g0pt.y,9,0,Math.PI*2);
      cx.fillStyle='rgba(253,246,238,0.95)'; cx.fill();
      cx.strokeStyle='rgba(147,116,104,0.4)'; cx.lineWidth=1.5; cx.stroke();
      cx.fillStyle='#937468'; cx.font='700 7px Nunito,sans-serif';
      cx.textAlign='center'; cx.textBaseline='middle';
      cx.fillText('G0',g0pt.x,g0pt.y);
    }

    cx.restore();
  });
}

/* ===================================================
   CYCLE ARROWS
=================================================== */
function drawArrows(){
  const arrowPositions=[30,120,210,310];
  arrowPositions.forEach(deg=>{
    const pt=ptOnCircle(deg,OUTER_R+6);
    const tangentDeg=deg+90; // tangent direction
    const tx=Math.cos(degToRad(tangentDeg));
    const ty=Math.sin(degToRad(tangentDeg));
    cx.save(); cx.translate(pt.x,pt.y);
    cx.rotate(degToRad(tangentDeg));
    cx.beginPath();
    cx.moveTo(-5,-4); cx.lineTo(2,0); cx.lineTo(-5,4); cx.closePath();
    cx.fillStyle='rgba(147,116,104,0.45)'; cx.fill();
    cx.restore();
  });
}

/* ===================================================
   MAIN LOOP
=================================================== */
(function loop(){
  if(!S.paused){
    T+=0.6*S.speed;
    cx.clearRect(0,0,W,H);
    cx.fillStyle='#fff9f3';
    cx.fillRect(0,0,W,H);

    drawWheel();
    drawArrows();
    drawCellIcons();
    drawCheckpoints();
    drawDNA();
    drawOverlayFX();
  }
  requestAnimationFrame(loop);
})();

/* ===================================================
   CONTROLS
=================================================== */
function setSpeed(v,btn){
  S.speed=v;
  document.querySelectorAll('.ctrl-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}
function togglePause(){
  S.paused=!S.paused;
  document.getElementById('pauseBtn').textContent=S.paused?'Resume':'Pause';
}

const PLABELS={
  g1:{short:'G1',long:'Gap 1 -- Growth'},
  s:{short:'S',long:'Synthesis -- Replication'},
  g2:{short:'G2',long:'Gap 2 -- Verification'},
  m:{short:'M',long:'Mitosis -- Division'},
  genes:{short:'GEN',long:'Gene Analysis'},
};

/* ===================================================
   PHASE NAV
=================================================== */
function goPhase(ph){
  if(!S.unlocked.has(ph)){showToast('Complete the checkpoint gate to unlock this phase');return;}
  S.phase=ph;
  document.querySelectorAll('.nav-item').forEach(e=>e.classList.remove('active'));
  document.getElementById('nav-'+ph)?.classList.add('active');
  const lb=PLABELS[ph];
  document.getElementById('ploPhase').textContent=lb.short;
  document.getElementById('ploSub').textContent=lb.long;
  ['g1','s','g2','m','genes'].forEach(p=>{
    const el=document.getElementById('c-'+p);
    if(el) el.style.display=p===ph?'block':'none';
  });
  addEvent('system','Navigated to '+lb.short+' Phase');
}

function unlockPhase(ph){
  S.unlocked.add(ph); S.phases++;
  S.score+=100;
  document.getElementById('scoreNum').textContent=S.score;
  document.getElementById('phaseNum').textContent=S.phases;
  const nav=document.getElementById('nav-'+ph);
  if(nav) nav.classList.remove('locked');
  const st=document.getElementById('nst-'+ph);
  if(st){st.textContent='Unlocked';st.className='nav-st done';}
  const prev={s:'g1',g2:'s',m:'g2',genes:'m'};
  if(prev[ph]){const ps=document.getElementById('nst-'+prev[ph]);if(ps){ps.textContent='Done';ps.className='nav-st done';}}
  showToast(ph==='genes'?'All phases cleared! Gene Deep-Dive unlocked':ph.toUpperCase()+' Phase unlocked! +100 pts');
  addEvent('repair','Checkpoint cleared. '+ph.toUpperCase()+' phase access granted. +100 pts');
  setTimeout(()=>goPhase(ph),350);
}

/* ===================================================
   CHECKPOINT
=================================================== */
function checkAns(btn,correct,phase,feedback){
  if(S.answered[phase]) return;
  S.answered[phase]=true;
  const gate=document.getElementById('gate-'+phase);
  const fb=document.getElementById('fb-'+phase);
  const adv=document.getElementById('adv-'+phase);
  gate.querySelectorAll('.gate-opt').forEach(b=>b.disabled=true);
  btn.classList.add(correct?'correct':'wrong');
  fb.textContent=feedback;
  fb.className='gate-fb '+(correct?'correct':'wrong');
  if(correct){
    S.score+=150;
    document.getElementById('scoreNum').textContent=S.score;
    gate.classList.add('passed'); adv.classList.add('show');
    addEvent('system','Checkpoint answered correctly. Gate opening. +150 pts');
  } else {
    S.mutation=Math.min(100,S.mutation+5); updateMeter();
    addEvent('alert','Incorrect. Review the content and try again.');
    setTimeout(()=>{
      S.answered[phase]=false;
      gate.querySelectorAll('.gate-opt').forEach(b=>{b.disabled=false;if(!b.classList.contains('correct'))b.classList.remove('wrong');});
      fb.className='gate-fb';
    },2200);
  }
}

/* ===================================================
   GENE TOGGLES
=================================================== */
const GDESC={
  p53:{on:'Active -- monitoring for DNA damage',off:'MUTATED -- G1/S and G2/M checkpoints blind'},
  rb:{on:'Active -- blocking premature S entry',off:'LOST -- restriction point removed'},
  ras:{on:'Normal -- off between signals',mutated:'ONCOGENIC -- constitutively active GTP-locked'},
  brca:{on:'Active -- patching double-strand breaks',off:'MUTATED -- DSB repair disabled'},
};

function toggleGene(g){
  const pill=document.getElementById('pill-'+g);
  const desc=document.getElementById('d-'+g);
  if(g==='ras'){
    S.genes.ras=!S.genes.ras;
    if(S.genes.ras){
      pill.className='pill mutated'; desc.textContent=GDESC.ras.mutated;
      S.mutation=Math.min(100,S.mutation+18);
      addEvent('damage','RAS mutated to oncogenic form. Constitutive proliferation signal active.');
      for(let i=0;i<6;i++) dnaMarks.push({frac:Math.random(),age:0,maxAge:200,type:'ras'});
    } else {
      pill.className='pill on'; desc.textContent=GDESC.ras.on;
      S.mutation=Math.max(0,S.mutation-10);
      addEvent('repair','RAS restored to proto-oncogene form. Signal regulated.');
    }
  } else {
    S.genes[g]=!S.genes[g];
    if(!S.genes[g]){
      pill.className='pill'; desc.textContent=GDESC[g].off;
      S.mutation=Math.min(100,S.mutation+14);
      const msgs={
        p53:'p53 inactivated. G1/S and G2/M checkpoints non-functional.',
        rb:'Rb protein lost. E2F transcription factors constitutively active.',
        brca:'BRCA1 lost. Homologous recombination disabled. Routing to error-prone NHEJ.',
      };
      addEvent('damage',msgs[g]);
      for(let i=0;i<4;i++) dnaMarks.push({frac:Math.random(),age:0,maxAge:220,type:g});
    } else {
      pill.className='pill on'; desc.textContent=GDESC[g].on;
      S.mutation=Math.max(0,S.mutation-8);
      addEvent('repair',g.toUpperCase()+' function restored. Checkpoint re-engaged.');
    }
  }
  updateMeter();
  document.getElementById('scoreNum').textContent=S.score;
}

/* ===================================================
   DISRUPTORS
=================================================== */
const DEVENTS={
  uv:[
    {t:'damage',m:'<strong>UV-B rays striking G1/S checkpoint.</strong> Thymine dimers forming at dipyrimidine sites -- covalent bonds between adjacent thymine bases distort the DNA helix.'},
    {t:'alert', m:'Nucleotide excision repair (NER) initiated. XPC recognizing bulky lesions. NER capacity limited at high UV doses.'},
    {t:'damage',m:'If p53 is functional: G1 arrest via p21. If p53 is mutated: cells proceed with unrepaired dimers into S phase, permanently encoding the mutation.'},
  ],
  smoke:[
    {t:'damage',m:'<strong>Benzo[a]pyrene entering nucleus during S phase.</strong> Bulky adduct forming on guanine at TP53 codon 249 -- the primary lung cancer hotspot mutation.'},
    {t:'alert', m:'KRAS proto-oncogene at risk. G to T transversion at codon 12 during replication creates constitutively active KRAS oncogene.'},
    {t:'damage',m:'NNK nitrosamine methylating guanine. O6-methylguanine mispairs with thymine in the next replication cycle -- mutation locked in.'},
  ],
  metal:[
    {t:'damage',m:'<strong>Cadmium displacing zinc</strong> from MMR protein MSH2 active site. Mismatch repair capacity reduced by 60-80%. Errors accumulate silently.'},
    {t:'damage',m:'Arsenic generating reactive oxygen species. 8-oxo-guanine lesions accumulating. Base excision repair overwhelmed.'},
    {t:'alert', m:'Microsatellite instability developing. Replication errors at short tandem repeats no longer corrected. Mutator phenotype emerging.'},
  ],
  mut:[
    {t:'damage',m:'<strong>Germline BRCA1 loss at G2/M checkpoint.</strong> One allele already inactivated. Homologous recombination at 50% capacity -- double-strand breaks mis-repaired.'},
    {t:'alert', m:'Two-hit hypothesis: somatic second hit at remaining BRCA1 allele completely disables HR repair. Error-prone NHEJ takes over.'},
    {t:'damage',m:'Double-strand breaks repaired by NHEJ: chromosomal translocations and deletions accumulating. Genomic instability cascade initiated.'},
  ],
};
const DMUT={uv:12,smoke:16,metal:13,mut:20};

function fireDisruptor(type){
  const card=document.getElementById('dc-'+type);
  card.classList.add('firing');
  setTimeout(()=>card.classList.remove('firing'),500);
  S.hits++; S.mutation=Math.min(100,S.mutation+DMUT[type]);
  updateMeter();
  document.getElementById('hitNum').textContent=S.hits;
  spawnDisruptorFX(type);
  DEVENTS[type].forEach((ev,i)=>setTimeout(()=>addEvent(ev.t,ev.m),i*550));
}

/* ===================================================
   MUTATION METER
=================================================== */
const MSTATUS=[
  {t:0,m:'Cell is healthy -- cycle running normally'},
  {t:20,m:'Minor DNA damage detected. Repair enzymes active.'},
  {t:40,m:'Checkpoint stress elevated. p53 accumulating.'},
  {t:60,m:'Significant genomic instability. Checkpoint bypass risk.'},
  {t:80,m:'Critical mutation load. Cancer hallmarks emerging.'},
  {t:95,m:'Malignant transformation threshold exceeded.'},
];
function updateMeter(){
  const p=Math.round(S.mutation);
  document.getElementById('mutPct').textContent=p+'%';
  document.getElementById('mutFill').style.width=p+'%';
  let st=MSTATUS[0].m;
  for(const s of MSTATUS){if(p>=s.t)st=s.m;}
  document.getElementById('mutStatus').textContent=st;
}

/* ===================================================
   GENE TABS / EVENT FEED / TOAST
=================================================== */
function gTab(tab,btn){
  document.querySelectorAll('.g-tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.g-tc').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('gtc-'+tab)?.classList.add('active');
}
function addEvent(type,text){
  const list=document.getElementById('eventList');
  if(!list) return;
  const item=document.createElement('div');
  item.className='ev-item';
  item.innerHTML='<span class="ev-type '+type+'">'+type+'</span><div class="ev-txt">'+text+'</div>';
  list.appendChild(item); list.scrollTop=list.scrollHeight;
  while(list.children.length>40) list.removeChild(list.firstChild);
}
function showToast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg; el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),2800);
}

/* INIT */
goPhase('g1');
updateMeter();
</script>
</body>
</html>