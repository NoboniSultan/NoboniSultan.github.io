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
    title: 'Mandala Mask',
    medium: 'Clay and henna, mixed media',
    year: null,
    image: mask,
  },
  {
    id: 2,
    title: 'Fawn',
    medium: 'Scratchboard',
    year: null,
    image: fawn,
  },
  {
    id: 3,
    title: 'Two Faces',
    medium: 'Acrylic and henna on canvas',
    year: null,
    image: twoFaces,
  },
  {
    id: 4,
    title: 'Deck Mandala',
    medium: 'Acrylic on wood',
    year: null,
    image: deckMandala,
  },
  {
    id: 5,
    title: 'Stargazer',
    medium: 'Ink and digital',
    year: null,
    image: stargazer,
  },
  {
    id: 6,
    title: 'Sewn Portrait',
    medium: 'Hand embroidery on fabric',
    year: null,
    image: sewnPortrait,
  },
  {
    id: 7,
    // Your scratchboard rendering of Van Gogh's painting — rename if you'd
    // rather not credit the source in the title.
    title: 'Starry Night, after Van Gogh',
    medium: 'Scratchboard',
    year: null,
    image: starryNight,
  },
  {
    id: 8,
    title: 'Goddess',
    medium: 'Digital',
    year: null,
    image: goddess,
  },
  {
    id: 9,
    title: 'Embrace',
    medium: 'Charcoal on paper',
    year: null,
    image: embrace,
  },
  {
    id: 10,
    title: 'Painted Bench',
    medium: 'Acrylic on wood',
    year: null,
    image: bench,
  },
  {
    id: 11,
    title: 'I Stay, I Pray',
    medium: 'Digital',
    year: null,
    image: iStayIPray,
  },
  {
    id: 12,
    title: 'Floral Study',
    medium: 'Digital',
    year: null,
    image: floral,
  },
  {
    id: 13,
    title: 'Portrait Panel',
    medium: 'Acrylic on board',
    year: null,
    image: panel,
  },
  {
    id: 14,
    title: 'Portrait Panel, detail',
    medium: 'Acrylic on board',
    year: null,
    image: panelDetail,
  },
  {
    id: 15,
    title: 'Clay Head',
    medium: 'Clay',
    year: null,
    image: clayHead,
  },
  {
    id: 16,
    title: 'Mirrored',
    medium: 'Digital',
    year: null,
    image: mirrored,
  },
]
