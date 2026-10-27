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

## Art — titles and years need your eye

All 16 pieces are in and live. Two things are mine, not yours:

- [ ] **Titles** are descriptive stand-ins I wrote from what each piece shows
      ("Two Faces", "Clay Head", "Mirrored"). Three came from your filenames
      and should be right: *Embrace*, *I Stay, I Pray*, *Stargazer*. Rename
      any of the others in [src/data/artworks.js](src/data/artworks.js).
- [ ] **Years** are all `null` — file dates are copy dates, not when you made
      the work, so there was nothing reliable to read. Set `year` and it
      appears after the medium; left null, the card shows the medium alone.
- [ ] Check the mediums too — I read them off the filenames and the images.
      *Embrace* I called charcoal on paper and *Stargazer* ink and digital;
      both were judgement calls.
- [ ] *Starry Night, after Van Gogh* is titled to credit the source. Rename it
      if you'd rather not.

To add more: drop the file in `src/assets/images/art/`, add an import at the
top of `artworks.js`, and append an entry. Any number, any mix of heights.

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
