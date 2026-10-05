/**
 * search.js
 * Cancer search feature for the ACS body map.
 * Searches BM_CANCERS names + tags, finds the matching hotspot,
 * highlights it with a "found" flash animation, then activates it.
 *
 * DEPENDS ON globals defined in index.md:
 *   BM_CANCERS, BM_HOTSPOTS, bmActivateHotspot()
 *
 * Place this file in ACSstuff/ alongside cancerData.js.
 * Load it at the BOTTOM of index.md (after the inline <script> block).
 */

(function () {
  /* ── 1. INJECT STYLES ──────────────────────────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
    /* Search bar container */
    #bm-search-wrap {
      position: relative;
      width: 100%;
      max-width: 420px;
    }

    #bm-search-input {
      width: 100%;
      padding: 10px 16px 10px 38px;
      border: 1.5px solid rgba(196,168,130,0.4);
      border-radius: 10px;
      font-family: 'Nunito', system-ui, sans-serif;
      font-size: 13px;
      background: #fff9f3;
      color: #3d2c24;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
      box-shadow: 0 2px 8px rgba(61,44,36,0.06);
    }
    #bm-search-input::placeholder { color: #b0968a; }
    #bm-search-input:focus {
      border-color: #c45e4a;
      box-shadow: 0 0 0 3px rgba(196,94,74,0.12);
    }

    /* magnifier icon */
    #bm-search-wrap::before {
      content: '';
      font-size: 13px;
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
    }

    /* clear (×) button */
    #bm-search-clear {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      font-size: 15px;
      color: #937468;
      line-height: 1;
      padding: 2px 4px;
      border-radius: 4px;
      display: none;
    }
    #bm-search-clear:hover { color: #c45e4a; }

    /* Dropdown results */
    #bm-search-results {
      position: absolute;
      top: calc(100% + 6px);
      left: 0; right: 0;
      background: #fff9f3;
      border: 1.5px solid rgba(196,168,130,0.4);
      border-radius: 10px;
      box-shadow: 0 8px 28px rgba(61,44,36,0.13);
      z-index: 200;
      overflow: hidden;
      display: none;
      max-height: 320px;
      overflow-y: auto;
    }

    .bm-sr-item {
      padding: 10px 16px;
      cursor: pointer;
      border-bottom: 1px solid rgba(196,168,130,0.15);
      transition: background 0.12s;
    }
    .bm-sr-item:last-child { border-bottom: none; }
    .bm-sr-item:hover { background: rgba(196,168,130,0.1); }

    .bm-sr-name {
      font-size: 13px;
      font-weight: 700;
      color: #3d2c24;
      line-height: 1.3;
    }
    .bm-sr-name mark {
      background: rgba(224,122,106,0.25);
      color: #c45e4a;
      border-radius: 2px;
      font-weight: 800;
    }
    .bm-sr-region {
      font-size: 11px;
      color: #937468;
      margin-top: 2px;
      font-weight: 600;
      letter-spacing: 0.04em;
    }
    .bm-sr-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 3px;
      margin-top: 4px;
    }
    .bm-sr-tag {
      font-size: 10px;
      padding: 1px 6px;
      background: rgba(196,168,130,0.1);
      border: 1px solid rgba(196,168,130,0.3);
      border-radius: 3px;
      color: #937468;
    }

    .bm-sr-empty {
      padding: 18px 16px;
      font-size: 13px;
      color: #937468;
      text-align: center;
    }

    /* "Found" flash on the hotspot dot — rings burst outward */
    @keyframes bmFoundFlash {
      0%   { transform: translate(-50%,-50%) scale(1);   opacity: 1; }
      60%  { transform: translate(-50%,-50%) scale(2.6); opacity: 0.6; }
      100% { transform: translate(-50%,-50%) scale(3.4); opacity: 0; }
    }
    .hs-dot.bm-found .hs-dot-core {
      transform: scale(1.8) !important;
      box-shadow: 0 0 0 4px rgba(255,255,255,0.9), 0 0 20px var(--dot-color), 0 0 40px var(--dot-color) !important;
      transition: transform 0.15s, box-shadow 0.15s;
    }
    .hs-dot.bm-found::after {
      content: '';
      position: absolute;
      width: 22px; height: 22px;
      border-radius: 50%;
      border: 3px solid var(--dot-color);
      top: 50%; left: 50%;
      transform: translate(-50%,-50%);
      animation: bmFoundFlash 0.7s ease-out 3;
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);

  /* ── 2. BUILD SEARCH INDEX ─────────────────────────────────────────────── */
  // Each entry: { cancerId, name, tags, hotspot }
  // Built lazily after DOM is ready so BM_CANCERS / BM_HOTSPOTS are available.
  let searchIndex = [];

  function buildIndex() {
    searchIndex = [];
    if (typeof BM_CANCERS === 'undefined' || typeof BM_HOTSPOTS === 'undefined') return;

    BM_HOTSPOTS.forEach(hs => {
      hs.cancerIds.forEach(cid => {
        const c = BM_CANCERS[cid];
        if (!c) return;
        searchIndex.push({
          cancerId: cid,
          name: c.name,
          tags: c.tags || [],
          hotspot: hs,
        });
      });
    });
  }

  /* ── 3. FUZZY MATCH HELPER ─────────────────────────────────────────────── */
  function matches(entry, query) {
    const q = query.toLowerCase().trim();
    if (!q) return false;
    if (entry.name.toLowerCase().includes(q)) return true;
    if (entry.tags.some(t => t.toLowerCase().includes(q))) return true;
    if (entry.hotspot.label.toLowerCase().includes(q)) return true;
    return false;
  }

  // Highlight matching substring in a string
  function highlight(text, query) {
    const q = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // escape regex
    if (!q) return text;
    return text.replace(new RegExp(`(${q})`, 'gi'), '<mark>$1</mark>');
  }

  /* ── 4. INJECT HTML INTO index.md ─────────────────────────────────────── */
  function injectSearchBar() {
    // Find the gender-row div to insert the search bar just before it,
    // inside .main-section.
    const genderRow = document.querySelector('#body-map-root .gender-row');
    if (!genderRow) return;

    const wrap = document.createElement('div');
    wrap.id = 'bm-search-wrap';
    wrap.innerHTML = `
      <input
        id="bm-search-input"
        type="search"
        autocomplete="off"
        spellcheck="false"
        placeholder="Search a cancer type, e.g. &quot;breast&quot; or &quot;leukemia&quot;…"
        aria-label="Search cancer types"
      />
      <button id="bm-search-clear" aria-label="Clear search">×</button>
      <div id="bm-search-results" role="listbox" aria-label="Search results"></div>
    `;

    // Insert the search bar above the gender row
    genderRow.parentNode.insertBefore(wrap, genderRow);
    // Add a small gap between search bar and gender row
    genderRow.style.marginTop = '16px';

    wireEvents();
  }

  /* ── 5. WIRE EVENTS ────────────────────────────────────────────────────── */
  function wireEvents() {
    const input   = document.getElementById('bm-search-input');
    const results = document.getElementById('bm-search-results');
    const clearBtn= document.getElementById('bm-search-clear');
    if (!input || !results) return;

    // Typing
    input.addEventListener('input', () => {
      const q = input.value.trim();
      clearBtn.style.display = q ? 'block' : 'none';
      if (!q) { closeResults(); return; }
      showResults(q);
    });

    // Close on Escape
    input.addEventListener('keydown', e => {
      if (e.key === 'Escape') { closeResults(); input.blur(); }
    });

    // Clear button
    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.style.display = 'none';
      closeResults();
      input.focus();
    });

    // Close when clicking outside
    document.addEventListener('click', e => {
      if (!document.getElementById('bm-search-wrap').contains(e.target)) {
        closeResults();
      }
    });
  }

  /* ── 6. SHOW RESULTS DROPDOWN ──────────────────────────────────────────── */
  function showResults(query) {
    const results = document.getElementById('bm-search-results');
    results.style.display = 'block';

    // Deduplicate by hotspot — we'll list individual cancers but group visually
    const hits = searchIndex.filter(e => matches(e, query));

    if (hits.length === 0) {
      results.innerHTML = `<div class="bm-sr-empty">No results for "<strong>${query}</strong>"</div>`;
      return;
    }

    // Limit to 10 results max
    const shown = hits.slice(0, 10);
    results.innerHTML = shown.map((entry, i) => {
      const sys = (typeof BM_SYSTEMS !== 'undefined') ? BM_SYSTEMS[entry.hotspot.system] : null;
      const icon = sys ? sys.icon : '';
      const color = sys ? sys.color : '#937468';
      const tagHtml = entry.tags
        .map(t => `<span class="bm-sr-tag">${t}</span>`)
        .join('');
      return `
        <div class="bm-sr-item" data-idx="${i}" role="option" tabindex="0">
          <div class="bm-sr-name">${highlight(entry.name, query)}</div>
          <div class="bm-sr-region" style="color:${color}">${icon} ${entry.hotspot.label}</div>
          <div class="bm-sr-tags">${tagHtml}</div>
        </div>`;
    }).join('');

    // Click handlers
    results.querySelectorAll('.bm-sr-item').forEach((el, i) => {
      el.addEventListener('click', () => selectResult(shown[i]));
      el.addEventListener('keydown', e => {
        if (e.key === 'Enter') selectResult(shown[i]);
      });
    });
  }

  /* ── 7. SELECT A RESULT ────────────────────────────────────────────────── */
  function selectResult(entry) {
    // Close dropdown and update input
    const input = document.getElementById('bm-search-input');
    if (input) input.value = entry.name;
    closeResults();

    // Scroll body map into view
    const bodyWrap = document.getElementById('bmBodyWrap');
    if (bodyWrap) {
      bodyWrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Small delay so scroll starts before we activate
    setTimeout(() => {
      // Activate the hotspot (opens panel, highlights dot)
      if (typeof bmActivateHotspot === 'function') {
        bmActivateHotspot(entry.hotspot.id);
      }

      // Add "found" flash class to the dot
      const dot = document.getElementById('bm-hsdot-' + entry.hotspot.id);
      if (dot) {
        dot.classList.add('bm-found');
        // Remove after animation completes (3 loops × 0.7s)
        setTimeout(() => dot.classList.remove('bm-found'), 2200);
      }
    }, 350);
  }

  /* ── 8. CLOSE RESULTS ──────────────────────────────────────────────────── */
  function closeResults() {
    const results = document.getElementById('bm-search-results');
    if (results) results.style.display = 'none';
  }

  /* ── 9. INIT ───────────────────────────────────────────────────────────── */
  function init() {
    buildIndex();
    injectSearchBar();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();