# Placeholders

What's still standing in for real content. Tick items off as you replace them.

> The first image in each project's `images` array is the cover thumbnail.
> Add as many additional images as you have screenshots — the ImageViewer
> handles any number. Projects with a single image simply don't show the
> gallery badge.

To add a screenshot: drop the file in `src/assets/images/`, add an `import` at
the top of [src/data/projects.js](src/data/projects.js), and add an
`{ src, caption }` entry to that project's `images` array. Captions show
beneath the image when the gallery is open, so write them as a short label for
what the screen shows.

**Export settings:** JPEG or PNG, ~1600px wide, under 300KB. Images are
displayed with `object-fit: contain`, so nothing gets cropped — but very tall
or very wide shots will letterbox more.

## Images

### Arrear
- [x] `arrear-1.jpg` — Recovery overview (cover)
- [x] `arrear-2.jpg` — Flagged items queue
- [ ] optional: submissions tracker or audit log

### Compass
- [x] `compass-1.jpg` — Landing page (cover)
- [ ] optional: the classroom view or the Socratic tutor in action — worth
      adding, since the AI tutoring is the part worth showing

### Bengal Bowls
- [x] `bengal-bowls-1.jpg` — Storefront home (cover)
- [x] `bengal-bowls-2.jpg` — Brand identity
- [ ] optional: checkout or order flow

### Taka Talk
- [x] `taka-talk-1.jpg` — Budget dashboard (cover)
- [x] `taka-talk-2.jpg` — Budget Buddy AI coach

### Flamingo Lab
- [x] `flamingo-1.jpg` — Team notes (cover)
- [x] `flamingo-2.jpg` — Question board
- [ ] optional: home or meetings view

### Boi
- [x] `boi-1.jpg` — My Shelf (cover)
- [x] `boi-2.jpg` — Sign-in

### PediaMap
- [ ] `pediamap-1.jpg` is the **brand banner, not a product screen** — and at
      648x282 it is the lowest-resolution asset on the site. A screenshot of
      the actual provider search would serve this project much better.

## Portrait

- [x] `portrait.jpg` — the self-portrait painting

The particle canvas samples this image pixel by pixel. Because the painting is
full-bleed, the particles fill the whole frame. If you ever want the particles
to trace a cut-out silhouette instead, export a version with a transparent
background and repoint the import in
[ParticlePortrait.jsx](src/components/Hero/ParticlePortrait.jsx).

## Links to update in `src/data/projects.js`

Any URL still set to `'#'` hides that icon on the card, because a dead link
reads worse than no link. Fill one in and its icon appears.

- [ ] Arrear `liveUrl` + `githubUrl`
- [ ] Taka Talk `githubUrl`
- [ ] Flamingo Lab `liveUrl` + `githubUrl`
- [ ] Boi `liveUrl` + `githubUrl`
- [ ] PediaMap `liveUrl` + `githubUrl`

## Resume

- [x] `src/assets/resume.pdf` — your real resume is in place

## Contact form

- [ ] Wire the form to an email provider — see the TODO in
      [Contact.jsx](src/components/Contact/Contact.jsx). Resend or Formspree
      both work without a backend. Right now submitting does nothing.

## Original assets

Full-resolution originals of everything here are kept outside the repo at
`~/Desktop/Portfolio-Project/original-assets/`, so re-exporting at a different
size never means re-taking a screenshot.
