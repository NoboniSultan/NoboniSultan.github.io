// Add one object per artwork. Supported image formats: JPG, PNG, WEBP.
// Place artwork images in: src/assets/images/art/
// Recommended: export at 1200px on the longest side, under 800KB.
//
// Images are imported rather than written as literal '/src/...' paths, which
// only resolve while running the dev server and would 404 in the build.
//
// TODO: the titles below are descriptive stand-ins taken from what each piece
// shows — replace them with your own titles where they are wrong.
//
// TODO: years are unset because I had no reliable source for them (file dates
// are copy dates, not when the work was made). Fill `year` in and it appears
// after the medium; left null, the card shows the medium alone.
//
// Array order is the STACK order — whatever sits first here is the piece on
// top of the collapsed heap.
//
// `hue` drives the spread order instead: monochrome pieces (hue: null) come
// first, then everything else runs through the spectrum. The values were
// measured by sampling each image, weighting mid-tone saturated pixels, so
// they reflect what the piece actually looks like rather than a guess.
//
// The section hides itself entirely when this array is empty.

import mask from '../assets/images/art/art-mask.jpg'
import fawn from '../assets/images/art/art-fawn.jpg'
import twoFaces from '../assets/images/art/art-two-faces.jpg'
import deckMandala from '../assets/images/art/art-deck-mandala.jpg'
import stargazer from '../assets/images/art/art-stargazer.jpg'
import sewnPortrait from '../assets/images/art/art-sewn-portrait.jpg'
import starryNight from '../assets/images/art/art-starry-night.jpg'
import goddess from '../assets/images/art/art-goddess.jpg'
import embrace from '../assets/images/art/art-embrace.jpg'
import bench from '../assets/images/art/art-bench.jpg'
import iStayIPray from '../assets/images/art/art-i-stay-i-pray.jpg'
import floral from '../assets/images/art/art-floral.jpg'
import panel from '../assets/images/art/art-panel.jpg'
import panelDetail from '../assets/images/art/art-panel-detail.jpg'
import clayHead from '../assets/images/art/art-clay-head.jpg'
import mirrored from '../assets/images/art/art-mirrored.jpg'

export const artworks = [
  {
    id: 1,
    title: 'I Stay, I Pray',
    medium: 'Digital',
    year: null,
    hue: 0,
    image: iStayIPray,
  },
  {
    id: 2,
    title: 'Mandala Mask',
    medium: 'Clay and henna, mixed media',
    year: null,
    hue: 33,
    image: mask,
  },
  {
    id: 3,
    title: 'Fawn',
    medium: 'Scratchboard',
    year: null,
    hue: null,
    image: fawn,
  },
  {
    id: 4,
    title: 'Two Faces',
    medium: 'Acrylic and henna on canvas',
    year: null,
    hue: 58,
    image: twoFaces,
  },
  {
    id: 5,
    title: 'Deck Mandala',
    medium: 'Acrylic on wood',
    year: null,
    hue: 3,
    image: deckMandala,
  },
  {
    id: 6,
    title: 'Stargazer',
    medium: 'Ink and digital',
    year: null,
    hue: 249,
    image: stargazer,
  },
  {
    id: 7,
    title: 'Sewn Portrait',
    medium: 'Hand embroidery on fabric',
    year: null,
    hue: 5,
    image: sewnPortrait,
  },
  {
    id: 8,
    // Your scratchboard rendering of Van Gogh's painting — rename if you'd
    // rather not credit the source in the title.
    title: 'Starry Night, after Van Gogh',
    medium: 'Scratchboard',
    year: null,
    hue: null,
    image: starryNight,
  },
  {
    id: 9,
    title: 'Goddess',
    medium: 'Digital',
    year: null,
    hue: 24,
    image: goddess,
  },
  {
    id: 10,
    title: 'Embrace',
    medium: 'Charcoal on paper',
    year: null,
    hue: null,
    image: embrace,
  },
  {
    id: 11,
    title: 'Painted Bench',
    medium: 'Acrylic on wood',
    year: null,
    hue: 209,
    image: bench,
  },
  {
    id: 12,
    title: 'Floral Study',
    medium: 'Digital',
    year: null,
    hue: 21,
    image: floral,
  },
  {
    id: 13,
    title: 'Portrait Panel',
    medium: 'Acrylic on board',
    year: null,
    hue: 107,
    image: panel,
  },
  {
    id: 14,
    title: 'Portrait Panel, detail',
    medium: 'Acrylic on board',
    year: null,
    hue: 168,
    image: panelDetail,
  },
  {
    id: 15,
    title: 'Clay Head',
    medium: 'Clay',
    year: null,
    hue: null,
    image: clayHead,
  },
  {
    id: 16,
    title: 'Mirrored',
    medium: 'Digital',
    year: null,
    hue: 229,
    image: mirrored,
  },
]
