import { useCallback, useEffect, useRef } from 'react'
import styles from './Lightbox.module.css'

function Chevron({ direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={direction === 'prev' ? styles.flipped : undefined}
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  )
}

export default function Lightbox({ artworks, index, onClose, onNavigate }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const artwork = artworks[index]

  const step = useCallback(
    (delta) => {
      const next = (index + delta + artworks.length) % artworks.length
      onNavigate(next)
    },
    [index, artworks.length, onNavigate],
  )

  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  // Escape closes, arrows navigate, Tab stays inside the overlay.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      } else if (event.key === 'ArrowRight') {
        step(1)
      } else if (event.key === 'ArrowLeft') {
        step(-1)
      } else if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll('button')
        if (!focusable?.length) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose, step])

  // Stop the page scrolling behind the overlay.
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  const hasMultiple = artworks.length > 1

  return (
    <div
      ref={dialogRef}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`${artwork.title}, enlarged`}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        className={styles.close}
        onClick={onClose}
        aria-label="Close image viewer"
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {hasMultiple && (
        <button
          type="button"
          className={`${styles.nav} ${styles.navPrev}`}
          onClick={(event) => {
            event.stopPropagation()
            step(-1)
          }}
          aria-label="Previous artwork"
        >
          <Chevron direction="prev" />
        </button>
      )}

      {/* Clicking the artwork itself should not dismiss the overlay. */}
      <figure className={styles.figure} onClick={(event) => event.stopPropagation()}>
        <img className={styles.image} src={artwork.image} alt={artwork.title} />
        <figcaption className={styles.caption}>
          <span className={styles.title}>{artwork.title}</span>
          <span className={styles.meta}>
            {artwork.year ? `${artwork.medium} · ${artwork.year}` : artwork.medium}
          </span>
        </figcaption>
      </figure>

      {hasMultiple && (
        <button
          type="button"
          className={`${styles.nav} ${styles.navNext}`}
          onClick={(event) => {
            event.stopPropagation()
            step(1)
          }}
          aria-label="Next artwork"
        >
          <Chevron direction="next" />
        </button>
      )}
    </div>
  )
}
