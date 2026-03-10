# yzhuangintcd.github.io

Personal portfolio website for Yuchen Zhuang — a CS student at Trinity College Dublin.

**Live site:** [https://yzhuangintcd.github.io](https://yzhuangintcd.github.io)

---

## Tech Stack

- Vanilla HTML5, CSS3, JavaScript (no frameworks or build tools)
- [FontAwesome](https://fontawesome.com/) — icons
- [Google Fonts](https://fonts.google.com/) — Kanit + Caveat typefaces
- Hosted on [GitHub Pages](https://pages.github.com/)

---

## Project Structure

```
.
├── global.css        # Shared styles for ALL pages (navbar, hero base, services, footer)
├── components.js     # Injects shared navbar + footer HTML; handles mobile nav toggle
│
├── index.html        # Home page
├── index.css         # Home page–specific styles (CTA button, golden_theo pixel art)
├── index.js          # Typing animation + golden_theo tail-wag interaction
│
├── about.html        # About / Experience page
├── about.css         # About page–specific styles (service card backgrounds)
│
├── projects.html     # Projects showcase
├── projects.css      # Projects page–specific styles (service card backgrounds)
├── projects.js       # Projects page scripts (placeholder)
│
├── contact.html      # Contact page
├── contact.css       # Contact page–specific styles (white heading, orange_cat animation)
│
└── Images/           # All image assets
```

---

## Pages

| Page | Description |
|------|-------------|
| **Home** (`index.html`) | Landing page with typing animation, golden_theo pixel-art dog, and experience highlights |
| **About** (`about.html`) | Bio, academic background, and work experience overview |
| **Projects** (`projects.html`) | Showcase of personal and university projects |
| **Contact** (`contact.html`) | Links to email and LinkedIn |

---

## Architecture

Shared HTML (navbar + footer) is injected at runtime by `components.js`, which is loaded on every page. This replaces the previous copy-paste approach where nav and footer HTML were duplicated across all four pages.

Each page loads CSS in this order:
1. `global.css` — reset, navbar, hero base, services base, footer
2. `[page].css` — page-specific overrides and unique components

---

## Local Development

No build step required. Open any HTML file directly in a browser, or use a local server:

```bash
# Python 3
python3 -m http.server 8080
# Then open http://localhost:8080
```

---

## Credits

- Layout inspired by [this YouTube tutorial](https://www.youtube.com/watch?v=FazgJVnrVuI) and its [source code](https://github.com/briancodex/html-css-website-v1)
