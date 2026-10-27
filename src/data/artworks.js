// Add one object per artwork. Supported image formats: JPG, PNG, WEBP.
// Place artwork images in: src/assets/images/art/
// Recommended: export at 1200px on the longest side, under 800KB.
//
// Images are imported rather than written as literal '/src/...' paths, which
// only resolve while running the dev server and would 404 in the build.
//
// The section hides itself entirely when this array is empty.

import art1 from '../assets/images/art/art-1.jpg'

export const artworks = [
  {
    id: 1,
    title: 'Self-Portrait',
    medium: 'Watercolour and charcoal on paper',
    year: '2026',
    image: art1,
  },
  // TODO: add the rest of your work — paintings, sketches, clay pieces.
  // Copy the object above, bump the id, and add a matching import.
]
