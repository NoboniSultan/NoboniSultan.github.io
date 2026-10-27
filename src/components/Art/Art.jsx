import { useState } from 'react'
import { artworks } from '../../data/artworks'
import Lightbox from './Lightbox'
import styles from './Art.module.css'

// Seeded off the id so a card's tilt is the same on every render — a fresh
// Math.random() would reshuffle the whole wall on each paint.
function tiltFor(id) {
  const seeded = Math.sin(id * 12.9898) * 43758.5453
  const fraction = seeded - Math.floor(seeded)
  return (fraction * 4 - 2).toFixed(2)
}

export default function Art() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Nothing to show until there is at least one piece.
  if (artworks.length === 0) return null

  return (
    <section id="art" className="section" aria-labelledby="art-heading">
      <div className="container">
        <h2 id="art-heading" className="sectionTitle">
          Art
        </h2>

        <p className={styles.subheading}>
          Outside of code, I make clay sculptures, paintings, and sketches — creative
          outlets that help me approach technical problems with patience.
        </p>

        <ul className={styles.grid}>
          {artworks.map((artwork, index) => (
            <li
              key={artwork.id}
              className={styles.item}
              style={{ '--tilt': `${tiltFor(artwork.id)}deg` }}
            >
              <button
                type="button"
                className={styles.polaroid}
                onClick={() => setLightboxIndex(index)}
                aria-label={`View ${artwork.title} enlarged`}
              >
                <img className={styles.image} src={artwork.image} alt={artwork.title} />
                <span className={styles.caption}>
                  <span className={styles.title}>{artwork.title}</span>
                  {/* Year is optional — show the medium alone when it is unset
                      rather than a dangling separator. */}
                  <span className={styles.meta}>
                    {artwork.year ? `${artwork.medium} · ${artwork.year}` : artwork.medium}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          artworks={artworks}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  )
}
