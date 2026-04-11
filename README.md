# Alexis Bormann — Life Coaching Website

A production-grade React landing page for Alexis Bormann Life Coaching.

---

## Tech Stack

- **React 18** (Create React App)
- **Plain CSS Modules** per component (no CSS-in-JS, no Tailwind)
- **No external UI libraries** — fully custom
- **Netlify** for hosting

---

## Project Structure

```
alexis-bormann/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── hero.jpg          ← Hero section photo
│   │   ├── client.png        ← Is Coaching For You photo
│   │   ├── headshot.jpg      ← About / bio photo
│   │   └── therapy.png       ← Connect section illustration
│   ├── components/
│   │   ├── Loader.jsx / .css     ← Branded page-load overlay
│   │   ├── Nav.jsx / .css        ← Sticky nav + mobile hamburger drawer
│   │   ├── Hero.jsx / .css       ← Full-height hero with floating quote card
│   │   ├── Marquee.jsx / .css    ← Infinite scrolling text band
│   │   ├── Coaching.jsx / .css   ← "Is Life Coaching For You?" section
│   │   ├── Impact.jsx / .css     ← Dark "Creating Impact" story section
│   │   ├── FAQ.jsx / .css        ← Two-column accordion FAQ
│   │   ├── About.jsx / .css      ← Bio + headshot section
│   │   ├── Connect.jsx / .css    ← CTA + illustration section
│   │   └── Footer.jsx / .css     ← Simple 3-column footer
│   ├── hooks/
│   │   └── useScrollReveal.js    ← IntersectionObserver scroll animation hook
│   ├── App.jsx                   ← Root component, assembles all sections
│   ├── index.js                  ← ReactDOM entry point
│   └── index.css                 ← Global tokens, reset, shared utilities
├── netlify.toml                  ← Netlify build + redirect config
├── .gitignore
└── package.json
```

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start
# → Opens http://localhost:3000
```

---

## Build for Production

```bash
npm run build
# Output: /build folder — ready to deploy
```

---

## Deploy to Netlify

### Option A — Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init        # link to your Netlify site
npm run build
netlify deploy --prod --dir=build
```

### Option B — Netlify Git Integration (recommended)
1. Push this repo to GitHub / GitLab / Bitbucket
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
3. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
4. Click **Deploy site** — Netlify auto-deploys on every push to `main`

The `netlify.toml` file in the root handles all of this automatically.

---

## Swapping Images

All images live in `src/assets/`. To replace any image:
1. Drop the new file into `src/assets/`
2. Update the import at the top of the relevant component:
   ```js
   // e.g. in Hero.jsx
   import heroImg from '../assets/your-new-hero.jpg';
   ```
3. Save — the dev server hot-reloads instantly.

---

## Updating Copy

All text content is inline in each component. Key locations:

| Content               | File                          |
|-----------------------|-------------------------------|
| Hero headline & sub   | `src/components/Hero.jsx`     |
| Coaching scenarios    | `src/components/Coaching.jsx` (`SCENARIOS` array) |
| Impact story          | `src/components/Impact.jsx`   |
| FAQ questions         | `src/components/FAQ.jsx` (`FAQ_ITEMS` array) |
| Bio copy              | `src/components/About.jsx`    |
| Contact email         | `src/components/Connect.jsx`  |
| Nav links             | `src/components/Nav.jsx` (`NAV_LINKS` array) |

---

## Fonts

Loaded via Google Fonts in `public/index.html`:
- **Cormorant Garamond** — display / headings (serif)
- **Montserrat** — body / UI (sans-serif)

To use self-hosted fonts instead, add `.woff2` files to `src/assets/` and update `src/index.css`.
