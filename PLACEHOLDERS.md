# Placeholders

Everything the site ships with that is standing in for real content. Work
through the list and tick items off as you replace them.

## Images to replace

Placeholders are SVGs so they stay sharp and tiny. When you swap in a real
PNG, drop it in `src/assets/images/` and update the matching `import` at the
top of `src/data/projects.js` (or in `ParticlePortrait.jsx` for the portrait).

- [ ] `src/assets/images/portrait.png` — your sketch/painting portrait (600x600px PNG, transparent background)
- [ ] `src/assets/images/arrear.png` — Arrear screenshot
- [ ] `src/assets/images/compass.png` — Compass screenshot
- [ ] `src/assets/images/bengal-bowls.png` — Bengal Bowls screenshot
- [ ] `src/assets/images/taka-talk.png` — Taka Talk screenshot
- [ ] `src/assets/images/flamingo.png` — Flamingo Lab screenshot
- [ ] `src/assets/images/boi.png` — Boi screenshot
- [ ] `src/assets/images/pediamap.png` — PediaMap screenshot

Project screenshots look best at 16:9 — 1200x675px is plenty.

## Links to update in `src/data/projects.js`

Any URL still set to `'#'` means the icon is hidden on that card, because a
dead link reads worse than no link. Fill one in and its icon appears.

- [ ] Arrear `liveUrl`
- [ ] Arrear `githubUrl`
- [ ] Taka Talk `githubUrl`
- [ ] Flamingo Lab `liveUrl` + `githubUrl`
- [ ] Boi `liveUrl` + `githubUrl`
- [ ] PediaMap `liveUrl` + `githubUrl`

## Resume

- [ ] `src/assets/resume.pdf` — add your latest resume PDF (the current file is a one-page stub)

## Contact form

- [ ] Wire the form to an email provider — see the TODO in `src/components/Contact/Contact.jsx`.
      Resend or Formspree both work without a backend. Right now submitting does nothing.

## Deployment

- [ ] In the repo: **Settings → Pages → Build and deployment → Source: "GitHub Actions"**.
      Until that is switched over, Pages keeps serving the old files and
      `.github/workflows/deploy.yml` has no effect.
