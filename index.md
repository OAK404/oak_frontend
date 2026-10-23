---
layout: opencs
hide: true
show_reading_time: false
---

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

// ----------------------------------------
// Variables
// ----------------------------------------

$ink: #123047;
$ink-2: #2F5D73;
$ink-3: #6F9CAF;
$ink-4: #C7DDE5;

$rose: #6bbfd9;
$rose-deep: #4d6db8;

$sage: #A8C5BE;
$sage-pale: #E8F0ED;

$orange: #8aa3d8;
$tan: #c4c4e6;

$paper: #FAF7F2;
$muted: #647985;

// ----------------------------------------
// Base
// ----------------------------------------

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.cf-page {
  font-family: 'DM Sans', sans-serif;
  background: $paper;
  color: $ink;
  overflow-x: hidden;
  line-height: 1.6;
}

.skip-link {
  position: absolute;
  top: -100px;
  left: 16px;
  background: $rose;
  color: $paper;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  z-index: 9999;
  transition: top 0.2s;
  text-decoration: none;

  &:focus {
    top: 12px;
  }
}

:focus-visible {
  outline: 2px solid $rose;
  outline-offset: 3px;
  border-radius: 2px;
}

// ----------------------------------------
// Hero
// ----------------------------------------

.cf-hero {
  padding: clamp(40px, 5vw, 64px) clamp(24px, 6vw, 80px);
  position: relative;
  background: $ink;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse 60% 80% at 90% 50%,
        rgba(224, 122, 106, 0.14) 0%,
        transparent 60%
      ),
      radial-gradient(
        ellipse 40% 60% at 5% 90%,
        rgba(138, 170, 140, 0.10) 0%,
        transparent 60%
      );
    pointer-events: none;
  }

  &-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: $rose;
    margin-bottom: 16px;
    opacity: 0;
    animation: fadeUp 0.7s 0.1s forwards;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 4.5vw, 56px);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    max-width: 680px;
    color: #fff9f3 !important;
    opacity: 0;
    animation: fadeUp 0.8s 0.25s forwards;

    em {
      font-style: normal;
      color: $rose;
    }
  }

  &-sub {
    margin-top: 14px;
    font-size: 15px;
    font-weight: 400;
    color: #e8d9c4;
    max-width: 460px;
    line-height: 1.7;
    opacity: 0;
    animation: fadeUp 0.8s 0.4s forwards;
  }

  &-source {
    margin-top: 24px;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: #c5daed;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    border-left: 2px solid #3b436b;
    padding-left: 12px;
    opacity: 0;
    animation: fadeUp 0.6s 0.6s forwards;
  }
}

// ----------------------------------------
// Section wrappers
// ----------------------------------------

.cf-section {
  padding: clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px);
  background: $paper;

  &.alt {
    background: $ink-2;
  }

  &.alt2 {
    background: $ink-4;
  }

  &.dark {
    background: $ink;
    color: $paper;
  }
}

.cf-section-label {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: $rose;
  margin-bottom: 48px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: $ink-3;
    max-width: 200px;
  }

  .cf-section.dark &::after {
    background: rgba(255, 255, 255, 0.1);
  }
}

// ----------------------------------------
// Big stat grid
// ----------------------------------------

.cf-big-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2px;
  background: $ink-3;
  border: 1px solid $ink-3;
}

.cf-stat-block {
  background: $ink-2;
  padding: clamp(28px, 4vw, 48px) clamp(24px, 3vw, 36px);
  transition: background 0.25s;
  cursor: default;

  &:hover {
    background: $ink-4;
  }
}

.cf-stat-num {
  font-family: 'Playfair Display', serif;
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.03em;
  color: $rose;
  display: block;

  &.sage {
    color: $sage;
  }

  &.terra {
    color: $rose-deep;
  }
}

.cf-stat-label {
  font-size: 14px;
  font-weight: 500;
  color: $ink;
  margin-top: 10px;
  line-height: 1.4;
}

.cf-stat-note {
  font-size: 12px;
  color: $muted;
  margin-top: 5px;
  font-weight: 300;
}

// ----------------------------------------
// Progress
// ----------------------------------------

.cf-progress-headline {
  font-family: 'Playfair Display', serif;
  font-size: clamp(26px, 4vw, 46px);
  font-weight: 700;
  max-width: 660px;
  line-height: 1.2;
  margin-bottom: 14px;
  color: $ink;

  .cf-section.dark & {
    color: $paper;
  }

  span {
    color: $sage;
  }
}

.cf-progress-sub {
  font-size: 15px;
  color: $muted;
  max-width: 560px;
  margin-bottom: 48px;
  font-weight: 300;
  line-height: 1.8;
}

.cf-bar-list {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.cf-bar-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
}

.cf-bar-name {
  font-size: 13px;
  font-weight: 500;
  color: $ink;
}

.cf-bar-pct {
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  color: $rose;
}

.cf-bar-track {
  height: 5px;
  background: $ink-3;
  border-radius: 3px;
  overflow: hidden;
}

.cf-bar-fill {
  height: 100%;
  border-radius: 3px;
  background: $rose;
  width: 0;
  transition: width 1.4s cubic-bezier(0.22, 1, 0.36, 1);

  &.sage {
    background: $sage;
  }

  &.terra {
    background: $rose-deep;
  }
}

// ----------------------------------------
// Top cancers
// ----------------------------------------

.cf-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 4vw, 56px);

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
}

.cf-col-title {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 14px;
  border-bottom: 1px solid $ink-3;
  display: flex;
  align-items: center;
  gap: 10px;
  color: $ink;

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: $rose;
    flex-shrink: 0;

    &.sage {
      background: $sage;
    }
  }
}

.cf-cancer-list {
  display: flex;
  flex-direction: column;
  gap: 3px;
  list-style: none;
}

.cf-cancer-row {
  display: grid;
  grid-template-columns: 22px 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 11px 13px;
  background: $ink-2;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: $paper;
  }
}

.cf-cancer-rank {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: $tan;
  text-align: center;
}

.cf-cancer-name {
  font-size: 13px;
  font-weight: 500;
  color: $ink;
}

.cf-cancer-val {
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  color: $rose;
  white-space: nowrap;

  &.sage {
    color: $sage;
  }
}

// ----------------------------------------
// Prevention
// ----------------------------------------

.cf-prevention-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
  margin-bottom: 48px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
}

.cf-prevention-big {
  font-family: 'Playfair Display', serif;
  font-size: clamp(72px, 11vw, 130px);
  font-weight: 900;
  color: $sage;
  line-height: 0.88;
  letter-spacing: -0.04em;
}

.cf-prevention-big-label {
  font-size: 17px;
  font-weight: 500;
  margin-top: 14px;
  line-height: 1.5;
  color: $ink;
}

.cf-prevention-text-col {
  p {
    font-size: 15px;
    color: $muted;
    font-weight: 300;
    line-height: 1.9;
    margin-bottom: 16px;
  }
}

.cf-prevention-factors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 10px;
}

.cf-factor {
  background: $paper;
  border-radius: 5px;
  padding: 20px 18px;
  border-left: 3px solid $sage;

  &.rose {
    border-left-color: $rose;

    .cf-factor-pct {
      color: $rose;
    }
  }
}

.cf-factor-pct {
  font-family: 'DM Mono', monospace;
  font-size: 22px;
  font-weight: 500;
  color: $sage;
  margin-bottom: 4px;
}

.cf-factor-name {
  font-size: 13px;
  font-weight: 600;
  color: $ink;
  margin-bottom: 3px;
}

.cf-factor-note {
  font-size: 12px;
  color: $muted;
  font-weight: 300;
}

// ----------------------------------------
// Screening
// ----------------------------------------

.cf-screening-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2px;
  background: $ink-3;
  margin-top: 48px;
}

.cf-screen-card {
  background: $ink-2;
  padding: 24px 20px;
  transition: background 0.2s;

  &:hover {
    background: $ink-4;
  }
}

.cf-screen-icon {
  font-size: 26px;
  margin-bottom: 12px;
  display: block;
  line-height: 1;
}

.cf-screen-type {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: $rose;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.cf-screen-age {
  font-size: 15px;
  font-weight: 600;
  color: $ink;
  margin-bottom: 5px;
}

.cf-screen-detail {
  font-size: 12px;
  color: $muted;
  font-weight: 300;
  line-height: 1.6;
}

// ----------------------------------------
// Disparities
// ----------------------------------------

.cf-disparity-intro {
  max-width: 700px;
  margin-bottom: 44px;
}

.cf-disparity-headline {
  font-family: 'Playfair Display', serif;
  font-size: clamp(26px, 4vw, 42px);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 12px;
  color: $paper !important;

  span {
    color: $rose;
  }
}

.cf-disparity-text {
  font-size: 15px;
  color: $tan;
  font-weight: 300;
  line-height: 1.8;
}

.cf-disparity-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 2px;
  background: rgba(255, 255, 255, 0.08);
}

.cf-disparity-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 28px 24px;
  border-top: 3px solid transparent;
  transition:
    border-color 0.3s,
    background 0.2s;

  &:hover {
    border-top-color: $rose;
    background: rgba(255, 255, 255, 0.09);
  }
}

.cf-disparity-card-pct {
  font-family: 'Playfair Display', serif;
  font-size: 46px;
  font-weight: 900;
  color: $rose;
  line-height: 1;
  margin-bottom: 8px;
}

.cf-disparity-card-label {
  font-size: 14px;
  font-weight: 500;
  color: $paper;
  line-height: 1.4;
  margin-bottom: 6px;
}

.cf-disparity-card-note {
  font-size: 12px;
  color: $tan;
  font-weight: 300;
  line-height: 1.6;
}

// ----------------------------------------
// Footer
// ----------------------------------------

.cf-footer {
  padding: 32px clamp(24px, 6vw, 80px);
  border-top: 1px solid $ink-3;
  background: $paper;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.cf-footer-text {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: $muted;
  letter-spacing: 0.1em;
}

.cf-footer-link {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: $rose;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
}

// ----------------------------------------
// Animations
// ----------------------------------------

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cf-animate {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.65s,
    transform 0.65s;

  &.visible {
    opacity: 1;
    transform: none;
  }
}
