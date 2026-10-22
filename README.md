# NoboniSultan.github.io

Personal portfolio site — a single-page React app covering projects, skills,
experience and contact.

Live at **https://noboniSultan.github.io/**

## Stack

- **React 19 + Vite** — no framework beyond that
- **Plain CSS Modules** — no Tailwind, no CSS-in-JS, no UI library
- Every component written from scratch, including the icons and the carousel

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run lint
```

## Layout

```
src/
├── assets/
│   ├── images/      project screenshots + portrait
│   └── resume.pdf
├── components/      one folder per section, each with its own CSS module
├── data/            projects, skills, experience — the single source of truth
├── styles/
│   └── globals.css  design tokens, reset, shared primitives
└── App.jsx
```

Content lives in `src/data/`, not in components. To add a project or a skill,
edit the data file — nothing else needs touching.

## Design system

All colors, fonts, spacing and radii are CSS custom properties on `:root` in
`src/styles/globals.css`. Components read from those variables only; there are
no hard-coded values and no inline styles.

## The particle portrait

`src/components/Hero/ParticlePortrait.jsx` samples a portrait image every 2px
and paints each sample as a soft dot on a canvas. Hovering scatters the
particles outward over 350ms; leaving eases them home over 450ms. Visitors with
`prefers-reduced-motion` get the still portrait.

The source image must be same-origin — canvas pixel reads fail on hotlinked
images. The import at the top of that file keeps it same-origin in both dev and
the production build.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the app
and publishes `dist/` to GitHub Pages. This is a user page served from the
domain root, so `base` stays `'/'` in `vite.config.js`.

## What still needs filling in

See [PLACEHOLDERS.md](PLACEHOLDERS.md) — screenshots, a few project URLs, the
resume PDF, and wiring the contact form to an email provider.
