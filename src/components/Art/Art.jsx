import { useState } from 'react'
import { artworks } from '../../data/artworks'
import Lightbox from './Lightbox'
import styles from './Art.module.css'

// Deterministic pseudo-random in [0, 1) from a seed, so a card's tilt and
// offset are the same on every render — Math.random() would reshuffle the
// whole pile on each paint.
function seeded(id, salt) {
  const value = Math.sin(id * 12.9898 + salt * 78.233) * 43758.5453
  return value - Math.floor(value)
}

// Scatter for the collapsed pile: wide angles, cards strewn off-centre.
function pileStyle(id, index, total) {
  return {
    '--tilt': `${(seeded(id, 1) * 28 - 14).toFixed(2)}deg`,
    '--dx': `${(seeded(id, 2) * 120 - 60).toFixed(1)}px`,
    '--dy': `${(seeded(id, 3) * 70 - 35).toFixed(1)}px`,
    '--w': `${(170 + seeded(id, 4) * 60).toFixed(0)}px`,
    // Stacked in data order, so the first artwork sits on top of the heap —
    // the array is the running order, not an accident of z-index.
    zIndex: total - index,
    // Cards settle from the bottom of the heap upwards.
    '--delay': `${((total - index) * 12).toFixed(0)}ms`,
  }
}

// Spread layout keeps a gentler tilt — enough to stay casual, not chaotic.
function spreadStyle(id, index) {
  return {
    '--tilt': `${(seeded(id, 5) * 5 - 2.5).toFixed(2)}deg`,
    '--delay': `${index * 35}ms`,
  }
}

export default function Art() {
  const [isSpread, setIsSpread] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  if (artworks.length === 0) return null

  return (
    <section id="art" className="section" aria-labelledby="art-heading">
      <div className="container">
        {/* Collapsed, the heading and the heap sit side by side so the
            section stays short. Spread, the heading goes back on top and the
            work gets the full width. */}
        <div className={isSpread ? styles.headerWide : styles.headerSplit}>
          <div>
            <h2 id="art-heading" className="sectionTitle">
              Art
            </h2>
            <p className={styles.subheading}>
              Outside of code, I make clay sculptures, paintings, and sketches —
              creative outlets that help me approach technical problems with
              patience.
            </p>

            {isSpread && (
              <button
                type="button"
                className={styles.stackButton}
                onClick={() => setIsSpread(false)}
              >
                Stack them back
              </button>
            )}
          </div>

          {!isSpread && (
            // One control for the whole pile: there is nothing useful to do
            // with an individual card while it is buried under fifteen others.
            <button
              type="button"
              className={styles.pile}
              onClick={() => setIsSpread(true)}
              aria-label={`Spread out ${artworks.length} artworks`}
            >
              {artworks.map((artwork, index) => (
                <span
                  key={artwork.id}
                  className={styles.pileCard}
                  style={pileStyle(artwork.id, index, artworks.length)}
                  aria-hidden="true"
                >
                  <img className={styles.pileImage} src={artwork.image} alt="" />
                </span>
              ))}

              <span className={styles.pileHint}>
                {artworks.length} pieces — click to spread
              </span>
            </button>
          )}
        </div>

        {isSpread && (
          <ul className={styles.spread}>
            {artworks.map((artwork, index) => (
              <li
                key={artwork.id}
                className={styles.spreadItem}
                style={spreadStyle(artwork.id, index)}
              >
                <button
                  type="button"
                  className={styles.polaroid}
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`View ${artwork.title} enlarged`}
                >
                  <img
                    className={styles.spreadImage}
                    src={artwork.image}
                    alt={artwork.title}
                    loading="lazy"
                  />
                  <span className={styles.caption}>
                    <span className={styles.title}>{artwork.title}</span>
                    {/* Year is optional — show the medium alone when it is
                        unset rather than a dangling separator. */}
                    <span className={styles.meta}>
                      {artwork.year
                        ? `${artwork.medium} · ${artwork.year}`
                        : artwork.medium}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
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
