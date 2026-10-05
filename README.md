# American Cancer Society — Student Web Platform

**Course:** AP Computer Science Principles (CSP) | Open Coding Society  
**Partner:** [American Cancer Society](https://www.cancer.org) via the Chamber of Commerce Project  
**Maintained by:** John Mortensen (teacher), Contributing students (Aashika Patel, Anwita Bandaru, Varada Vichare)

---

## What Is This Project?

This is a GitHub Pages website built by CSP students in partnership with the **American Cancer Society (ACS)**, a nationwide nonprofit focused on cancer prevention, research funding, patient support, and education. Working with a real nonprofit is a completely different experience from regular coursework because our team had to understand the partner's actual needs and build something that could eventually reach the public.

When we first connected with the ACS, they outlined three core problems they needed help solving:

- **Community building & Service Providing** — Cancer patients, survivors, and caregivers often feel isolated. They need a space to connect with people who truly understand what they're going through. Many users also need to feel personally connected with the website, and feel as though the website is providing a meaningful service to them. 
- **Health literacy** — People struggle to understand their personal cancer risk and what lifestyle choices actually matter.
- **Education** — Younger generations don't always have a solid grasp of how cancer works at a biological level.

Our goal was to build a web platform that addressed all three of these needs in a way that felt approachable and genuinely useful.

---

## What We Built

### Interactive Body Map
An annotated front/back body diagram with clickable hotspots that surface cancer types by body region. Each hotspot links to ACS educational content, lists common symptoms as tags, and is organized by body system (head & neck, lung, digestive, blood & lymph, etc.).

Key files:
- `ACSstuff/cancerData.js` — all cancer type data, body system categories, and hotspot coordinates
- `ACSstuff/search.js` — real-time search bar that queries cancer names and symptom tags, then flashes and activates the matching hotspot on the body map

### ML Cancer Risk Predictor
A machine learning model that takes user inputs (lifestyle factors, demographics) and estimates personal cancer risk. Based on industry feedback (see below), future students should consider adding:
- An **occupation dropdown** (suggested by a military veteran on our panel)
- A **demographics option** (suggested by an audience member)

### Community Forum
A space where patients, survivors, and caregivers can share experiences. Industry reviewers called this the **most valuable feature** of the entire platform because it enables the kind of peer knowledge-sharing that healthcare providers can't always provide themselves.

---

## Industry Feedback & Handoff Notes

We presented our project to a panel of industry leaders, including people with direct personal and professional experience with cancer. This feedback is critical context for anyone continuing this work.

**Key takeaways:**

- A **military veteran who worked on the Breast Cancer Program at the Department of Defense** gave us insight into the oversight and support systems around cancer care. She suggested adding an **occupation dropdown** to the ML Risk Predictor.
- An **eye cancer survivor** told us that during his treatment, he would have loved access to a resource listing premier hospitals that treat specific cancer types. Consider building a **hospital/treatment center finder** feature.
- Our audience broadly felt the **community forum was the most impactful feature** because of real patients sharing experiences that fill gaps left by formal healthcare.
- Another audience member suggested adding a **demographics option** to the risk predictor to improve personalization.

**National-level interest:** After additionally contacting a leader in marketing for the American Cancer Society, our project has been pitched to the **national ACS marketing team**, who are willing to review our features. Continuing to strengthen this project based on the feedback above could push it to the next level.

---

## Priorities for Future Students

If you're a CSP student picking this project up, here's where to focus your energy:

1. **Expand the body map content** — the `cancerData.js` file has `TODO` stubs in every cancer description (`desc` field). Replace these with real clinical content sourced from ACS pages.
2. **Add an occupation dropdown** to the ML Risk Predictor (DoD veteran's feedback).
3. **Add a demographics field** to the ML Risk Predictor (audience feedback).
4. **Build a hospital/treatment finder** — searchable by cancer type and location (eye cancer survivor's feedback).
5. **Grow the community forum** — consider adding topic tags, upvoting, or moderation tools.
6. **Connect the body map to the risk predictor** — clicking a cancer type on the body map could pre-fill the risk predictor for that cancer.

---

## Project Structure

```
.
├── ACSstuff/
│   ├── cancerData.js       # Cancer types, body systems, hotspot coordinates
│   └── search.js           # Body map search feature
├── _posts/                 # Markdown blog posts
├── _notebooks/             # Jupyter notebook lessons and hacks
├── _includes/              # Reusable HTML components (liquid syntax)
├── _layouts/               # Custom page layouts
├── _sass/                  # Styling (Minima theme + custom SCSS)
├── images/                 # Image assets
├── _config.yml             # Site configuration (repo name, nav, baseurl)
└── Makefile                # Local dev commands
```

### Understanding `cancerData.js`

This is the heart of the body map. It exports three things:

- `CANCER_SYSTEMS` — color-coded body system categories (head & neck, lung, blood, etc.)
- `HOTSPOTS` — array of clickable regions on the body diagram, each with `x`/`y` position as a percentage of the container, a `system` key, and a `cancerIds` array
- `CANCER_TYPES` (internal) — the full library of ~80 cancer types, each with a name, ACS link, symptom tags, and a description stub

To add a new cancer type: add an entry to `CANCER_TYPES`, then add its key to the relevant hotspot's `cancerIds` array in `HOTSPOTS`.

### Understanding `search.js`

Builds a search index from `BM_CANCERS` and `BM_HOTSPOTS` (globals set in `index.md`), injects a search bar above the body map, and handles fuzzy matching against cancer names, symptom tags, and region labels. When a result is selected, it scrolls to the body map and triggers a flash animation on the matching hotspot dot.

---

## GitHub Pages Setup

**Activate GitHub Pages Actions:**  
Go to Settings → Pages → Build → select **GitHub Actions** as the deployment source.

**Update `_config.yml`:**
```yaml
github_repo: "pages"
baseurl: "/pages"
```

**Set the repo name in `Makefile`:**
```make
PORT ?= 4500
REPO_NAME ?= pages
```

---

## Local Development

### First-time setup

```bash
git clone <this-repo>
cd <repo-dir>/scripts
```

Then run the setup script for your OS:
- **Ubuntu/WSL:** `./activate_ubuntu.sh`
- **macOS:** `./activate_macos.sh`
- **Kasm Cloud:** `./activate_github.sh`

Then install Ruby dependencies:
```bash
bundle install
```

### Run the local server

```bash
make          # start server + watch for changes
make stop     # stop server
make clean    # stop + delete built files (fixes duplicate-page issues)
make convert  # test notebook conversions without starting server
```

The local preview runs at `http://0.0.0.0:4599/pages/`. Save any `.md` or `.ipynb` file to trigger auto-regeneration — refresh the browser to see changes.

---

## Naming Conventions

All files in `_posts/` and `_notebooks/` must be named with a date prefix:

```
GOOD: 2024-08-02-cancer-risk-model.md
BAD:  cancer-risk-model.md
BAD:  2024-8-2-cancer-risk-model.md
BAD:  2069-12-31-cancer-risk-model.md   ← future dates won't publish by default
```

--- 

## Front Matter (Metadata)

Every post needs front matter at the top of the file:

```yaml
---
toc: true
comments: true
layout: post
title: ACS Body Map Feature
description: Interactive cancer body map with hotspot navigation.
type: ccc
courses: { csp: {week: 5} }
---
```

- `type: ccc` → places the post under "Code, Code, Code" in the time box
- `courses:` → controls which course menu and week row the post appears under
- `search_exclude: true` → hides the post from site search
- `hide: true` → hides the post from the blog listing page
- `image: /images/file.jpg` → adds a thumbnail on the blog page

---

## Tools Required

- **GitHub** — version control and CI/CD via GitHub Actions
- **Jekyll** — builds the static site from markdown and notebooks
- **Ubuntu or macOS shell** — required for local development
- **VSCode** — recommended editor with GitHub Pages extensions
- **Python 3 + Jupyter** — for running `.ipynb` notebook files

---

## Key Resources

- [ACS Cancer Types A–Z](https://www.cancer.org/cancer.html)
- [OCS Tools & Setup Guide](https://pages.opencodingsociety.com/tools/)
- [Jekyll Docs](https://jekyllrb.com/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

## License

Apache License — inherited from the original Fastpages foundation this project was built upon. Most code has diverged significantly from those roots.

---

## Contributing

Student contributors are listed in the front matter of their blog posts. If you add a significant feature (new ML model, forum enhancement, hospital finder, etc.), add your name and a brief description of your contribution to this README under a **Contributors** section so future students know who to credit and potentially reach out to.
