---
layout: opencs
title: Oncology and Kids
hide: true
show_reading_time: false
---
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

/* ==============================
   1. COLORS AND GLOBAL SETTINGS
   ============================== */
:root {
  --oak-ink: #3d2c24;
  --oak-ink-soft: #6b4c3b;
  --oak-teal: #e07a6a;
  --oak-teal-dark: #c45e4a;
  --oak-mint: #fce9e6;
  --oak-mint-light: #fff9f3;
  --oak-coral: #e07a6a;
  --oak-yellow: #e8d9c4;
  --oak-lilac: #eaf1ea;
  --oak-cream: #fdf6ee;
  --oak-white: #ffffff;
  --oak-muted: #937468;
  --oak-line: #ecddd0;
  --oak-shadow: 0 18px 50px rgba(107, 76, 59, .10);
  --oak-terracotta: #e07a6a;
  --oak-terracotta-dark: #c45e4a;
  --oak-sage: #8aaa8c;
  --oak-sage-light: #b8ceb9;
  --oak-tan: #c4a882;
  --oak-surface: #f5ede3;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: 'DM Sans', sans-serif;
  color: var(--oak-ink);
}

.oak-home {
  overflow: hidden;
  background: var(--oak-cream);
  color: var(--oak-ink);
  font-family: 'DM Sans', sans-serif;
  line-height: 1.65;
}

.oak-home a { color: inherit; }
.oak-home img { max-width: 100%; }

/* ==============================
   2. ACCESSIBILITY AND LAYOUT
   ============================== */
.oak-skip {
  position: absolute;
  top: -100px;
  left: 16px;
  z-index: 1000;
  padding: 10px 16px;
  background: var(--oak-ink);
  color: #fff;
  border-radius: 8px;
}
.oak-skip:focus { top: 12px; }

.oak-wrap {
  width: min(1160px, calc(100% - 48px));
  margin: 0 auto;
}

/* ==============================
   3. HEADER AND NAVIGATION
   ============================== */
.oak-topbar {
  position: relative;
  z-index: 5;
  background: var(--oak-cream);
  border-bottom: 1px solid rgba(24, 59, 67, .08);
}

.oak-nav {
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.oak-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  font-family: 'Manrope', sans-serif;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -.04em;
  white-space: nowrap;
}

.oak-brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 15px 15px 15px 5px;
  background: var(--oak-teal);
  color: white;
  font-size: 19px;
  letter-spacing: -.06em;
  box-shadow: 0 7px 16px rgba(40, 127, 122, .2);
}

.oak-brand small {
  display: block;
  color: var(--oak-muted);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .13em;
  line-height: 1.2;
  text-transform: uppercase;
}

.oak-nav-links {
  display: flex;
  align-items: center;
  gap: 25px;
}

.oak-nav-links a {
  color: var(--oak-ink-soft);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: color .2s ease;
}

.oak-nav-links a:hover { color: var(--oak-teal); }

.oak-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 48px;
  padding: 12px 20px;
  border: 2px solid transparent;
  border-radius: 999px;
  background: var(--oak-teal);
  color: #fff !important;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  transition: transform .2s ease, background .2s ease, box-shadow .2s ease;
}

.oak-button:hover {
  transform: translateY(-2px);
  background: var(--oak-teal-dark);
  box-shadow: 0 9px 20px rgba(40, 127, 122, .2);
}

.oak-button-light {
  background: var(--oak-white);
  color: var(--oak-ink) !important;
  border-color: var(--oak-line);
}
.oak-button-light:hover {
  background: var(--oak-mint-light);
  box-shadow: none;
}

.oak-button-coral {
  background: var(--oak-coral);
  color: var(--oak-ink) !important;
}
.oak-button-coral:hover { background: #ff9d8b; }

/* ==============================
   4. HERO SECTION AND ILLUSTRATION
   ============================== */
.oak-hero {
  position: relative;
  padding: clamp(58px, 8vw, 100px) 0 76px;
  background:
    radial-gradient(circle at 88% 18%, rgba(255, 217, 120, .56) 0, rgba(255, 217, 120, 0) 20%),
    radial-gradient(circle at 6% 92%, rgba(233, 228, 250, .72) 0, rgba(233, 228, 250, 0) 28%),
    var(--oak-mint-light);
}

.oak-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, .95fr);
  align-items: center;
  gap: clamp(35px, 6vw, 82px);
}

.oak-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 20px;
  color: var(--oak-teal-dark);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.oak-eyebrow::before {
  content: '';
  display: inline-block;
  width: 24px;
  height: 3px;
  border-radius: 3px;
  background: var(--oak-coral);
}

.oak-hero h1 {
  max-width: 650px;
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(42px, 6.4vw, 76px);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -.065em;
}

.oak-hero h1 span { color: var(--oak-teal); }

.oak-hero-copy {
  max-width: 520px;
  margin: 24px 0 0;
  color: var(--oak-ink-soft);
  font-size: clamp(16px, 1.7vw, 18px);
  line-height: 1.8;
}

.oak-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.oak-note {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 24px;
  color: var(--oak-muted);
  font-size: 12px;
}
.oak-note-mark {
  display: grid;
  flex: 0 0 25px;
  place-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: var(--oak-yellow);
  color: var(--oak-ink);
  font-weight: 800;
}

.oak-hero-art {
  position: relative;
  min-height: 400px;
  display: grid;
  place-items: center;
}

.oak-art-card {
  position: relative;
  width: min(100%, 440px);
  min-height: 360px;
  padding: 28px;
  border: 1px solid rgba(24, 59, 67, .06);
  border-radius: 38px;
  background: #fff;
  box-shadow: var(--oak-shadow);
  transform: rotate(2deg);
}

.oak-art-sun {
  position: absolute;
  top: -26px;
  right: 35px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: var(--oak-yellow);
}

.oak-art-spark {
  position: absolute;
  top: 58px;
  left: -22px;
  color: var(--oak-coral);
  font-size: 46px;
  transform: rotate(-15deg);
}

.oak-art-scene {
  position: relative;
  min-height: 245px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  padding: 24px;
  border-radius: 26px;
  background: linear-gradient(155deg, #eaf1ea 0%, #fce9e6 100%);
}

.oak-cloud {
  position: absolute;
  top: 25px;
  right: 35px;
  width: 86px;
  height: 30px;
  border-radius: 30px;
  background: rgba(255, 255, 255, .9);
}
.oak-cloud::before, .oak-cloud::after {
  content: '';
  position: absolute;
  bottom: 6px;
  border-radius: 50%;
  background: inherit;
}
.oak-cloud::before { left: 14px; width: 35px; height: 35px; }
.oak-cloud::after { right: 13px; width: 25px; height: 25px; }

.oak-hill {
  position: absolute;
  bottom: -60px;
  left: -20px;
  width: 120%;
  height: 160px;
  border-radius: 50% 50% 0 0;
  background: #b8ceb9;
  transform: rotate(-5deg);
}
.oak-hill::after {
  content: '';
  position: absolute;
  top: -18px;
  right: -35px;
  width: 60%;
  height: 140px;
  border-radius: 50%;
  background: #8aaa8c;
}

.oak-people {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  min-height: 155px;
}

.oak-person {
  position: relative;
  width: 70px;
  height: 130px;
}
.oak-person .oak-head {
  position: absolute;
  top: 0;
  left: 17px;
  width: 38px;
  height: 42px;
  border: 4px solid var(--oak-ink);
  border-radius: 50%;
  background: #e8d9c4;
}
.oak-person .oak-body {
  position: absolute;
  bottom: 0;
  left: 4px;
  width: 65px;
  height: 86px;
  border: 4px solid var(--oak-ink);
  border-radius: 25px 25px 12px 12px;
  background: var(--oak-coral);
}
.oak-person:nth-child(2) { height: 155px; }
.oak-person:nth-child(2) .oak-head { left: 16px; width: 42px; height: 45px; background: #6b4c3b; }
.oak-person:nth-child(2) .oak-body { height: 106px; background: var(--oak-teal); }
.oak-person:nth-child(3) .oak-head { background: #c4a882; }
.oak-person:nth-child(3) .oak-body { background: var(--oak-yellow); }

.oak-art-caption {
  position: relative;
  z-index: 2;
  margin: 18px 0 0;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -.04em;
  text-align: center;
}

.oak-floating-tag {
  position: absolute;
  right: -12px;
  bottom: 28px;
  padding: 13px 17px;
  border: 1px solid rgba(24, 59, 67, .06);
  border-radius: 18px;
  background: white;
  box-shadow: var(--oak-shadow);
  font-size: 12px;
  font-weight: 800;
  transform: rotate(-3deg);
}

.oak-floating-tag span { color: var(--oak-teal); }

/* ==============================
   5. HIGHLIGHT STRIP
   ============================== */
.oak-strip {
  position: relative;
  z-index: 2;
  margin-top: -1px;
  padding: 20px 0;
  background: var(--oak-teal);
  color: white;
}
.oak-strip-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px 30px;
  text-align: center;
}
.oak-strip strong {
  font-family: 'Manrope', sans-serif;
  font-size: 15px;
}
.oak-strip span {
  color: #eaf1ea;
  font-size: 12px;
}

/* ==============================
   6. GENERAL CONTENT SECTIONS
   ============================== */
.oak-section { padding: clamp(65px, 8vw, 100px) 0; }
.oak-section-white { background: #fff; }
.oak-section-mint { background: var(--oak-mint-light); }
.oak-section-lilac { background: var(--oak-lilac); }

.oak-section-head {
  max-width: 720px;
  margin: 0 auto 42px;
  text-align: center;
}
.oak-kicker {
  margin: 0 0 12px;
  color: var(--oak-teal);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .16em;
  text-transform: uppercase;
}
.oak-section h2 {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(30px, 4.5vw, 48px);
  font-weight: 800;
  line-height: 1.13;
  letter-spacing: -.055em;
}
.oak-section-head > p:last-child {
  max-width: 620px;
  margin: 17px auto 0;
  color: var(--oak-muted);
  font-size: 15px;
  line-height: 1.8;
}

.oak-mission-grid {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 50px;
  align-items: center;
}
.oak-mission-note {
  position: relative;
  padding: 35px;
  border-radius: 28px;
  background: var(--oak-ink);
  color: white;
  overflow: hidden;
}
.oak-mission-note::after {
  content: '✳';
  position: absolute;
  right: -15px;
  bottom: -75px;
  color: rgba(255,255,255,.08);
  font-size: 210px;
  line-height: 1;
}
.oak-mission-note .oak-kicker { color: var(--oak-yellow); }
.oak-mission-note blockquote {
  position: relative;
  z-index: 1;
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -.04em;
}
.oak-mission-note p {
  position: relative;
  z-index: 1;
  margin: 18px 0 0;
  color: #d7e5e2;
  font-size: 13px;
}
.oak-mission-copy h3 {
  margin: 0 0 12px;
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  letter-spacing: -.04em;
}
.oak-mission-copy > p {
  color: var(--oak-muted);
  font-size: 15px;
  line-height: 1.85;
}
.oak-value-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 13px;
  margin-top: 24px;
}
.oak-value {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px;
  border: 1px solid var(--oak-line);
  border-radius: 15px;
  background: #fff;
}
.oak-value-icon {
  display: grid;
  flex: 0 0 30px;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: var(--oak-mint);
  color: var(--oak-teal-dark);
  font-weight: 800;
}
.oak-value strong { display: block; font-size: 12px; }
.oak-value small { display: block; margin-top: 3px; color: var(--oak-muted); font-size: 11px; line-height: 1.5; }

/* ==============================
   7. PROGRAM CARDS
   ============================== */
.oak-program-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}
.oak-program-card {
  display: flex;
  flex-direction: column;
  min-height: 260px;
  padding: 25px;
  border: 1px solid var(--oak-line);
  border-radius: 24px;
  background: white;
  box-shadow: 0 8px 24px rgba(24, 59, 67, .04);
  transition: transform .22s ease, box-shadow .22s ease;
}
.oak-program-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--oak-shadow);
}
.oak-program-icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  margin-bottom: 20px;
  border-radius: 17px;
  background: var(--oak-mint);
  font-size: 25px;
}
.oak-program-card:nth-child(2) .oak-program-icon { background: #fce9e6; }
.oak-program-card:nth-child(3) .oak-program-icon { background: var(--oak-lilac); }
.oak-program-card:nth-child(4) .oak-program-icon { background: #e8d9c4; }
.oak-program-card:nth-child(5) .oak-program-icon { background: #eaf1ea; }
.oak-program-card:nth-child(6) .oak-program-icon { background: #fce9e6; }
.oak-program-card h3 {
  margin: 0 0 9px;
  font-family: 'Manrope', sans-serif;
  font-size: 19px;
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: -.035em;
}
.oak-program-card p {
  margin: 0 0 18px;
  color: var(--oak-muted);
  font-size: 13px;
  line-height: 1.75;
}
.oak-text-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: auto;
  color: var(--oak-teal-dark) !important;
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
}
.oak-text-link:hover { text-decoration: underline; }

.oak-program-footnote {
  max-width: 780px;
  margin: 26px auto 0;
  color: var(--oak-muted);
  font-size: 12px;
  line-height: 1.7;
  text-align: center;
}

/* ==============================
   8. WHO OAK SUPPORTS
   ============================== */
.oak-who-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}
.oak-who-card {
  padding: 28px;
  border-radius: 24px;
  background: white;
}
.oak-who-card:nth-child(1) { border-top: 5px solid var(--oak-coral); }
.oak-who-card:nth-child(2) { border-top: 5px solid var(--oak-teal); }
.oak-who-card:nth-child(3) { border-top: 5px solid #a79ae6; }
.oak-who-card .oak-who-number {
  display: block;
  margin-bottom: 14px;
  color: var(--oak-teal);
  font-family: 'Manrope', sans-serif;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: .1em;
}
.oak-who-card h3 {
  margin: 0 0 10px;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: -.035em;
}
.oak-who-card p {
  margin: 0;
  color: var(--oak-muted);
  font-size: 13px;
  line-height: 1.8;
}

/* ==============================
   9. WEBSITE FEATURE PANEL
   ============================== */
.oak-feature-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 45px;
  align-items: center;
  padding: clamp(28px, 5vw, 55px);
  border-radius: 32px;
  background: var(--oak-ink);
  color: white;
}
.oak-feature-panel h2 { max-width: 460px; }
.oak-feature-panel .oak-kicker { color: var(--oak-yellow); }
.oak-feature-panel p {
  color: #d7e5e2;
  font-size: 14px;
  line-height: 1.85;
}
.oak-feature-list {
  display: grid;
  gap: 12px;
}
.oak-feature {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 17px;
  border: 1px solid rgba(255,255,255,.13);
  border-radius: 17px;
  background: rgba(255,255,255,.06);
}
.oak-feature-icon {
  display: grid;
  flex: 0 0 40px;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 13px;
  background: var(--oak-yellow);
  color: var(--oak-ink);
  font-size: 18px;
}
.oak-feature h3 {
  margin: 0 0 4px;
  font-size: 14px;
}
.oak-feature p {
  margin: 0;
  color: #d7e5e2;
  font-size: 12px;
  line-height: 1.65;
}

/* ==============================
   10. GET INVOLVED CARDS
   ============================== */
.oak-involved-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}
.oak-involved-card {
  padding: 27px;
  border: 1px solid var(--oak-line);
  border-radius: 23px;
  background: white;
}
.oak-involved-card h3 {
  margin: 0 0 9px;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  letter-spacing: -.04em;
}
.oak-involved-card p {
  margin: 0 0 20px;
  color: var(--oak-muted);
  font-size: 13px;
  line-height: 1.8;
}

/* ==============================
   11. CALL TO ACTION
   ============================== */
.oak-cta {
  position: relative;
  overflow: hidden;
  padding: clamp(45px, 7vw, 78px) 0;
  background: var(--oak-yellow);
}
.oak-cta::after {
  content: '✳';
  position: absolute;
  top: -80px;
  right: 3%;
  color: rgba(24, 59, 67, .08);
  font-size: 300px;
  line-height: 1;
}
.oak-cta-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
.oak-cta h2 {
  max-width: 650px;
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(30px, 4.5vw, 48px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -.055em;
}
.oak-cta p {
  max-width: 570px;
  margin: 14px 0 0;
  color: var(--oak-ink-soft);
  font-size: 14px;
}
.oak-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-shrink: 0;
}

/* ==============================
   12. FOOTER
   ============================== */
.oak-footer {
  padding: 38px 0 25px;
  background: var(--oak-ink);
  color: white;
}
.oak-footer-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 35px;
  padding-bottom: 28px;
}
.oak-footer .oak-brand { color: white; }
.oak-footer .oak-brand small { color: #c7d9d6; }
.oak-footer-copy {
  max-width: 410px;
  margin: 15px 0 0;
  color: #c7d9d6;
  font-size: 12px;
  line-height: 1.8;
}
.oak-footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
}
.oak-footer-links a {
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
}
.oak-footer-links a:hover { color: var(--oak-yellow); }
.oak-footer-bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,.14);
  color: #c7d9d6;
  font-size: 11px;
}

.oak-reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity .65s ease, transform .65s ease;
}
.oak-reveal.oak-visible {
  opacity: 1;
  transform: translateY(0);
}

.oak-home a:focus-visible,
.oak-home button:focus-visible {
  outline: 3px solid var(--oak-coral);
  outline-offset: 4px;
  border-radius: 5px;
}

/* ==============================
   13. RESPONSIVE DESIGN
   ============================== */
@media (max-width: 900px) {
  .oak-nav { padding: 15px 0; align-items: flex-start; }
  .oak-nav-links { justify-content: flex-end; flex-wrap: wrap; gap: 12px 18px; }
  .oak-nav-links .oak-button { min-height: 40px; padding: 9px 15px; }
  .oak-hero-grid { grid-template-columns: 1fr; }
  .oak-hero-art { min-height: 350px; }
  .oak-art-card { max-width: 440px; }
  .oak-mission-grid { grid-template-columns: 1fr; gap: 28px; }
  .oak-feature-panel { grid-template-columns: 1fr; gap: 25px; }
  .oak-cta-inner { align-items: flex-start; flex-direction: column; }
}
@media (max-width: 680px) {
  .oak-wrap { width: min(100% - 32px, 1160px); }
  .oak-nav { flex-direction: column; align-items: stretch; gap: 14px; }
  .oak-nav-links { justify-content: flex-start; gap: 10px 15px; }
  .oak-nav-links a { font-size: 12px; }
  .oak-nav-links .oak-button { min-height: 36px; padding: 7px 12px; }
  .oak-hero { padding-top: 48px; }
  .oak-hero h1 { font-size: clamp(42px, 12vw, 60px); }
  .oak-hero-art { min-height: 310px; }
  .oak-art-card { min-height: 310px; padding: 18px; border-radius: 27px; }
  .oak-art-scene { min-height: 210px; padding: 15px; }
  .oak-people { transform: scale(.82); transform-origin: bottom center; }
  .oak-art-caption { font-size: 17px; }
  .oak-floating-tag { right: -3px; bottom: 6px; }
  .oak-program-grid, .oak-who-grid, .oak-involved-grid { grid-template-columns: 1fr; }
  .oak-program-card { min-height: auto; }
  .oak-value-list { grid-template-columns: 1fr; }
  .oak-section-head { margin-bottom: 30px; }
  .oak-footer-main { flex-direction: column; }
  .oak-footer-bottom { flex-direction: column; }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
  .oak-reveal { opacity: 1; transform: none; }
}


/* ==============================
   14. REPOSITORY COLOR PALETTE FINISH
   Uses the supplied cream, terracotta, and sage theme.
   ============================== */
.oak-home {
  background: #fdf6ee;
  background-image: radial-gradient(#ecddd0 1px, transparent 1px);
  background-size: 24px 24px;
}
.oak-topbar { background: rgba(255,249,243,.96); backdrop-filter: blur(12px); }
.oak-brand-mark { background: linear-gradient(135deg, #e07a6a, #c45e4a); box-shadow: 0 8px 20px rgba(224,122,106,.24); }
.oak-button { background: linear-gradient(135deg, #e07a6a, #c45e4a); box-shadow: 0 9px 22px rgba(224,122,106,.22); }
.oak-button:hover { background: #a84838; box-shadow: 0 13px 26px rgba(196,94,74,.28); }
.oak-button-light { background: #fff9f3; border: 1px solid #ecddd0; color: #6b4c3b !important; box-shadow: none; }
.oak-hero {
  background: radial-gradient(circle at 88% 18%, rgba(232,217,196,.72), transparent 20%),
    radial-gradient(circle at 6% 92%, rgba(184,206,185,.58), transparent 28%),
    linear-gradient(135deg, #fff9f3 0%, #fce9e6 55%, #fdf6ee 100%);
}
.oak-hero h1 span, .oak-floating-tag span { color: #e07a6a; }
.oak-eyebrow::before { background: #8aaa8c; }
.oak-art-card { border: 1px solid rgba(255,249,243,.95); box-shadow: 0 24px 70px rgba(107,76,59,.15); }
.oak-art-scene { background: linear-gradient(155deg, #eaf1ea 0%, #fce9e6 100%); }
.oak-hill { background: #b8ceb9; }
.oak-hill::after { background: #8aaa8c; }
.oak-strip { background: linear-gradient(90deg, #6b4c3b, #8aaa8c); color: white; }
.oak-strip span { color: #fff9f3; }
.oak-section-white { background: rgba(255,249,243,.97); }
.oak-section-mint { background: linear-gradient(135deg, #fff9f3, #f5ede3); }
.oak-section-lilac { background: linear-gradient(135deg, #eaf1ea, #fff9f3); }
.oak-section h2 { color: #3d2c24; }
.oak-kicker { color: #c45e4a; }
.oak-program-card, .oak-who-card, .oak-involved-card {
  border-color: #ecddd0; border-radius: 24px;
  box-shadow: 0 10px 30px rgba(107,76,59,.07);
}
.oak-program-card:hover, .oak-who-card:hover, .oak-involved-card:hover {
  box-shadow: 0 18px 36px rgba(107,76,59,.14);
}
.oak-program-icon { border-radius: 18px; background: #fce9e6; }
.oak-who-card:nth-child(1) { border-top-color: #e07a6a; }
.oak-who-card:nth-child(2) { border-top-color: #8aaa8c; }
.oak-who-card:nth-child(3) { border-top-color: #c4a882; }
.oak-feature-panel { background: linear-gradient(135deg, #3d2c24, #6b4c3b); border-radius: 30px; }
.oak-cta { background: linear-gradient(135deg, #e8d9c4, #fce9e6); }
.oak-footer { background: #3d2c24; }
.oak-footer-copy, .oak-footer-bottom { color: #e8d9c4; }
.oak-footer-links a { color: #fff9f3; }
.oak-footer-links a:hover { color: #b8ceb9; }
.oak-reveal { transition: opacity .6s ease, transform .6s ease; }
</style><!-- ==============================
     PAGE CONTENT: HTML
     ============================== -->
<a class="oak-skip" href="#oak-main">Skip to main content</a>
<div class="oak-home" id="oak-main">
  <header class="oak-topbar">
    <div class="oak-wrap oak-nav">
      <a class="oak-brand" href="https://oncologyandkids.org/" aria-label="Oncology and Kids home">
        <span class="oak-brand-mark" aria-hidden="true">OAK</span>
        <span>Oncology And Kids<small>We are mighty together</small></span>
      </a>
      <nav class="oak-nav-links" aria-label="Main navigation">
        <a href="#about-oak">About OAK</a>
        <a href="#programs">Programs</a>
        <a href="#who-we-support">Who We Support</a>
        <a href="#get-involved">Get Involved</a>
        <a class="oak-button" href="https://oncologyandkids.org/programs">Explore Programs <span aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </header>  <main>
    <!-- HERO: introduction to OAK -->
    <section class="oak-hero" aria-labelledby="oak-hero-title">
      <div class="oak-wrap oak-hero-grid">
        <div>
          <p class="oak-eyebrow">A community for kids and families</p>
          <h1 id="oak-hero-title">Cancer changes a lot.<br><span>Being a kid</span> should still be part of life.</h1>
          <p class="oak-hero-copy">Oncology And Kids (OAK) helps children affected by cancer and their families find friendship, joy, support, and moments to simply be themselves.</p>
          <div class="oak-hero-actions">
            <a class="oak-button" href="https://oncologyandkids.org/programs">Discover OAK Programs <span aria-hidden="true">→</span></a>
            <a class="oak-button oak-button-light" href="#about-oak">Get to Know OAK</a>
          </div>
          <div class="oak-note">
            <span class="oak-note-mark" aria-hidden="true">✓</span>
            <span>OAK’s programs are designed to build connection and support the emotional well-being of children and families affected by cancer.</span>
          </div>
        </div>    <div class="oak-hero-art" role="img" aria-label="Illustration of three children standing together in a colorful, welcoming outdoor scene">
      <span class="oak-art-spark" aria-hidden="true">✳</span>
      <div class="oak-art-card">
        <span class="oak-art-sun" aria-hidden="true"></span>
        <div class="oak-art-scene">
          <span class="oak-cloud" aria-hidden="true"></span>
          <span class="oak-hill" aria-hidden="true"></span>
          <div class="oak-people" aria-hidden="true">
            <span class="oak-person"><span class="oak-head"></span><span class="oak-body"></span></span>
            <span class="oak-person"><span class="oak-head"></span><span class="oak-body"></span></span>
            <span class="oak-person"><span class="oak-head"></span><span class="oak-body"></span></span>
          </div>
        </div>
        <p class="oak-art-caption">Different journeys. One caring community.</p>
      </div>
      <div class="oak-floating-tag"><span>♥</span> No one has to face it alone.</div>
    </div>
  </div>
</section>

<div class="oak-strip" aria-label="OAK program highlights">
  <div class="oak-wrap oak-strip-inner">
    <strong>Connection</strong><span>Find people who understand</span>
    <strong>Confidence</strong><span>Make room for every feeling</span>
    <strong>Childhood</strong><span>Make memories and have fun</span>
  </div>
</div>

<!-- ABOUT OAK: mission and values -->
<section class="oak-section oak-section-white" id="about-oak" aria-labelledby="about-heading">
  <div class="oak-wrap oak-mission-grid">
    <div class="oak-mission-note oak-reveal">
      <p class="oak-kicker">Why OAK exists</p>
      <blockquote>Every child deserves to feel seen, supported, and part of a community.</blockquote>
      <p>OAK focuses on the emotional side of childhood cancer—the friendships, feelings, and everyday moments that matter just as much as being cared for.</p>
    </div>
    <div class="oak-mission-copy oak-reveal">
      <p class="oak-kicker">Meet Oncology And Kids</p>
      <h2 id="about-heading">Support that sees the whole child.</h2>
      <p>Based in San Diego, California, Oncology And Kids is a childhood cancer organization that supports children and families as they navigate the emotional impact of cancer. Through camps and year-round programs, OAK creates welcoming spaces where kids can connect with peers who understand their experiences.</p>
      <p>OAK grew from the legacy of Camp Reach for the Sky, a camp program that began in 1983. The organization’s work centers on helping kids and families build relationships, create lasting memories, and develop resilience.</p>
      <div class="oak-value-list" aria-label="OAK values">
        <div class="oak-value"><span class="oak-value-icon" aria-hidden="true">♡</span><span><strong>Empathy</strong><small>Make space for feelings and experiences.</small></span></div>
        <div class="oak-value"><span class="oak-value-icon" aria-hidden="true">✦</span><span><strong>Empowerment</strong><small>Help kids discover their own strengths.</small></span></div>
        <div class="oak-value"><span class="oak-value-icon" aria-hidden="true">◎</span><span><strong>Community</strong><small>Build friendships that can last beyond camp.</small></span></div>
        <div class="oak-value"><span class="oak-value-icon" aria-hidden="true">✓</span><span><strong>Integrity</strong><small>Build trust through care and accountability.</small></span></div>
      </div>
      <p><a class="oak-text-link" href="https://oncologyandkids.org/who-is-oak">Read more about OAK’s mission <span aria-hidden="true">→</span></a></p>
    </div>
  </div>
</section>

<!-- PROGRAMS: check official OAK site for current details -->
<section class="oak-section oak-section-mint" id="programs" aria-labelledby="programs-heading">
  <div class="oak-wrap">
    <div class="oak-section-head">
      <p class="oak-kicker">Find your people</p>
      <h2 id="programs-heading">Programs built around connection.</h2>
      <p>OAK’s Camp Reach for the Sky and related programs bring together children, siblings, and families who share experiences with cancer. Program details and eligibility can change, so visit OAK’s official site for current information.</p>
    </div>

    <div class="oak-program-grid">
      <article class="oak-program-card oak-reveal">
        <span class="oak-program-icon" aria-hidden="true">⛺</span>
        <h3>Resident Oncology Camp</h3>
        <p>A camp experience for children who have or have had cancer, with activities adapted to campers’ needs and support from medical professionals.</p>
        <a class="oak-text-link" href="https://oncologyandkids.org/programs">Explore camp details <span aria-hidden="true">→</span></a>
      </article>
      <article class="oak-program-card oak-reveal">
        <span class="oak-program-icon" aria-hidden="true">☀</span>
        <h3>Day Camp</h3>
        <p>A fun daytime camp experience with activities, friendships, and time for young children affected by cancer to enjoy being kids.</p>
        <a class="oak-text-link" href="https://oncologyandkids.org/programs">Explore camp details <span aria-hidden="true">→</span></a>
      </article>
      <article class="oak-program-card oak-reveal">
        <span class="oak-program-icon" aria-hidden="true">🤝</span>
        <h3>Sibling Camp</h3>
        <p>A supportive space for brothers and sisters of children with cancer to meet peers, express themselves, and feel understood.</p>
        <a class="oak-text-link" href="https://oncologyandkids.org/programs">Explore camp details <span aria-hidden="true">→</span></a>
      </article>
      <article class="oak-program-card oak-reveal">
        <span class="oak-program-icon" aria-hidden="true">🌿</span>
        <h3>Family Camp</h3>
        <p>Time for families to connect with others who understand their circumstances, make memories, and enjoy experiences together.</p>
        <a class="oak-text-link" href="https://oncologyandkids.org/programs">Explore camp details <span aria-hidden="true">→</span></a>
      </article>
      <article class="oak-program-card oak-reveal">
        <span class="oak-program-icon" aria-hidden="true">💛</span>
        <h3>Family Camp: RyanStrong</h3>
        <p>A caring camp experience for families coping with the loss of a child or parent to cancer, with space for connection and remembrance.</p>
        <a class="oak-text-link" href="https://oncologyandkids.org/programs">Explore camp details <span aria-hidden="true">→</span></a>
      </article>
      <article class="oak-program-card oak-reveal">
        <span class="oak-program-icon" aria-hidden="true">🚀</span>
        <h3>Teen &amp; AYA Programs</h3>
        <p>Opportunities for teens and young adults affected by cancer to build friendships, explore leadership, and connect with people their age.</p>
        <a class="oak-text-link" href="https://oncologyandkids.org/programs">Explore camp details <span aria-hidden="true">→</span></a>
      </article>
    </div>
    <p class="oak-program-footnote">OAK also shares activities and support opportunities throughout the year. Check the official Programs page for current sessions, age ranges, eligibility, registration, and availability.</p>
  </div>
</section>

<!-- WHO OAK SUPPORTS -->
<section class="oak-section oak-section-lilac" id="who-we-support" aria-labelledby="who-heading">
  <div class="oak-wrap">
    <div class="oak-section-head">
      <p class="oak-kicker">There is room for you</p>
      <h2 id="who-heading">Cancer affects more than one person.</h2>
      <p>OAK recognizes that a diagnosis can affect a whole family. Its programs include spaces for different experiences and relationships—not only for the child receiving treatment.</p>
    </div>
    <div class="oak-who-grid">
      <article class="oak-who-card oak-reveal">
        <span class="oak-who-number">01 / PATIENTS &amp; SURVIVORS</span>
        <h3>A chance to just be a kid.</h3>
        <p>Children who have or have had cancer can spend time with peers, try activities, and make memories outside of their medical routine.</p>
      </article>
      <article class="oak-who-card oak-reveal">
        <span class="oak-who-number">02 / SIBLINGS</span>
        <h3>Your feelings matter, too.</h3>
        <p>Brothers and sisters can meet others who understand what it is like when cancer affects their family and have a space of their own.</p>
      </article>
      <article class="oak-who-card oak-reveal">
        <span class="oak-who-number">03 / FAMILIES</span>
        <h3>Support for the whole family.</h3>
        <p>Family programs create opportunities to connect with people who understand the challenges, changes, and emotions that families may face.</p>
      </article>
    </div>
  </div>
</section>

<!-- PROPOSED WEBSITE FEATURES: these are redesign ideas -->
<section class="oak-section oak-section-white" aria-labelledby="digital-heading">
  <div class="oak-wrap">
    <div class="oak-feature-panel">
      <div>
        <p class="oak-kicker">A little more connection, online</p>
        <h2 id="digital-heading">A welcoming place to learn, play, and feel heard.</h2>
        <p>Our website redesign idea is to make information easier to explore and the experience more engaging for kids and families. These are proposed website features—not a claim that OAK currently offers an online community or games.</p>
        <a class="oak-button oak-button-coral" href="https://oncologyandkids.org/">Visit OAK’s Official Website <span aria-hidden="true">↗</span></a>
      </div>
      <div class="oak-feature-list">
        <div class="oak-feature">
          <span class="oak-feature-icon" aria-hidden="true">✦</span>
          <div><h3>Explore helpful information</h3><p>Simple, approachable content about OAK, its programs, and ways families can find support.</p></div>
        </div>
        <div class="oak-feature">
          <span class="oak-feature-icon" aria-hidden="true">▦</span>
          <div><h3>Play and take a break</h3><p>Ideas for age-friendly puzzles and memory games that make the website more fun to explore.</p></div>
        </div>
        <div class="oak-feature">
          <span class="oak-feature-icon" aria-hidden="true">♡</span>
          <div><h3>Make room for feelings</h3><p>Thoughtful prompts and activities that can help kids express themselves at their own pace.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- GET INVOLVED -->
<section class="oak-section oak-section-mint" id="get-involved" aria-labelledby="involved-heading">
  <div class="oak-wrap">
    <div class="oak-section-head">
      <p class="oak-kicker">Be part of the OAK community</p>
      <h2 id="involved-heading">Small acts can help make big memories.</h2>
      <p>OAK’s programs rely on a community of people who care. Whether you want to help out, support the programs, or learn more, start with OAK’s official resources.</p>
    </div>
    <div class="oak-involved-grid">
      <article class="oak-involved-card oak-reveal">
        <span class="oak-program-icon" aria-hidden="true">🙌</span>
        <h3>Volunteer</h3>
        <p>Find out about opportunities to contribute your time and skills to OAK’s community.</p>
        <a class="oak-text-link" href="https://oncologyandkids.org/">Find volunteer information <span aria-hidden="true">↗</span></a>
      </article>
      <article class="oak-involved-card oak-reveal">
        <span class="oak-program-icon" aria-hidden="true">💚</span>
        <h3>Support the programs</h3>
        <p>Community support helps OAK continue offering programs to the children and families it serves.</p>
        <a class="oak-text-link" href="https://oncologyandkids.org/">Explore ways to give <span aria-hidden="true">↗</span></a>
      </article>
      <article class="oak-involved-card oak-reveal">
        <span class="oak-program-icon" aria-hidden="true">✉</span>
        <h3>Ask OAK a question</h3>
        <p>For the most accurate information about eligibility, registration, schedules, or current programs, contact OAK directly.</p>
        <a class="oak-text-link" href="https://oncologyandkids.org/">Contact OAK <span aria-hidden="true">↗</span></a>
      </article>
    </div>
  </div>
</section>

<!-- FINAL CALL TO ACTION -->
<section class="oak-cta" aria-labelledby="cta-heading">
  <div class="oak-wrap oak-cta-inner">
    <div>
      <h2 id="cta-heading">Together, we can help kids feel less alone.</h2>
      <p>Learn more about Oncology And Kids, explore Camp Reach for the Sky, and find the information that fits your family.</p>
    </div>
    <div class="oak-cta-actions">
      <a class="oak-button" href="https://oncologyandkids.org/programs">Explore Programs <span aria-hidden="true">→</span></a>
      <a class="oak-button oak-button-light" href="https://oncologyandkids.org/who-is-oak">About OAK</a>
    </div>
  </div>
</section></main>  <footer class="oak-footer">
    <div class="oak-wrap">
      <div class="oak-footer-main">
        <div>
          <a class="oak-brand" href="https://oncologyandkids.org/">
            <span class="oak-brand-mark" aria-hidden="true">OAK</span>
            <span>Oncology And Kids<small>We are mighty together</small></span>
          </a>
          <p class="oak-footer-copy">Oncology And Kids is a San Diego-based organization supporting children affected by cancer and their families through community, connection, and year-round programs.</p>
        </div>
        <nav class="oak-footer-links" aria-label="Footer navigation">
          <a href="https://oncologyandkids.org/who-is-oak">Who Is OAK?</a>
          <a href="https://oncologyandkids.org/programs">Programs</a>
          <a href="https://oncologyandkids.org/">Volunteer &amp; Support</a>
          <a href="https://oncologyandkids.org/">Official Website</a>
        </nav>
      </div>
      <div class="oak-footer-bottom">
        <span>Oncology And Kids · Community, connection, and care.</span>
        <span>Program details may change. Check OAK’s official website for the latest information.</span>
      </div>
    </div>
  </footer>
</div><!-- ==============================
     PAGE BEHAVIOR: JAVASCRIPT
     Adds gentle reveal animations as sections enter view.
     ============================== -->
<script>
(function () {
  var revealItems = document.querySelectorAll('.oak-reveal');

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach(function (item) {
      item.classList.add('oak-visible');
    });
    return;
  }

  var revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('oak-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach(function (item) {
    revealObserver.observe(item);
  });
})();
</script>
