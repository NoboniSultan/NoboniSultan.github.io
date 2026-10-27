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

## Art images to add

- [ ] `src/assets/images/art/` — add your artwork images here.
      Naming convention: `art-1.jpg`, `art-2.jpg`, etc.
      Then update [src/data/artworks.js](src/data/artworks.js) with matching
      imports, titles, mediums, and years.

Only the self-portrait is in there so far. I did not pull anything from
`~/Desktop/coolpix/art` — that folder holds other artists' work alongside
yours, and publishing someone else's painting under your name is not a
mistake worth risking. Point me at your own art folder and I will wire it up.

The section hides itself entirely while the array is empty, so there is no
broken-looking gap if you remove everything.

## Links in `src/data/projects.js`

A link set to `null` renders no button at all — never a dead `'#'`.

- [x] Arrear `liveUrl`
- [x] Compass `liveUrl` + `githubUrl`
- [x] Bengal Bowls `liveUrl`
- [x] Taka Talk `liveUrl`
- [x] Flamingo Lab `githubUrl`
- [x] PediaMap `githubUrl`
- [ ] Boi has neither — add one if the project is deployed or public
- [ ] Arrear, Bengal Bowls, Taka Talk `githubUrl` — null if these stay private

## Resume

- [x] `src/assets/resume.pdf` — your real resume is in place

## Contact form — needs a Formspree endpoint

- [ ] **`FORMSPREE_ENDPOINT` in [src/hooks/useContactForm.js](src/hooks/useContactForm.js)**
      is still `'YOUR_FORMSPREE_ENDPOINT_HERE'`.

Create a free form at [formspree.io/forms](https://formspree.io/forms), copy
the endpoint (it looks like `https://formspree.io/f/xxxxxxxx`) and paste it in.
That is the only change needed — the POST, the button states and the
aria-live announcements are already wired.

Until then the form deliberately fails and tells the visitor to email
directly, rather than accepting a message and dropping it.

## Original assets

Full-resolution originals of everything here are kept outside the repo at
`~/Desktop/Portfolio-Project/original-assets/`, so re-exporting at a different
size never means re-taking a screenshot.
