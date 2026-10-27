import { useRef, useState } from 'react'
import styles from './ImageViewer.module.css'

// 2x2 grid badge — the hint that there is more than one screen behind the cover.
function GalleryIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
      <rect x="1" y="1" width="6" height="6" rx="1.5" />
      <rect x="9" y="1" width="6" height="6" rx="1.5" />
      <rect x="1" y="9" width="6" height="6" rx="1.5" />
      <rect x="9" y="9" width="6" height="6" rx="1.5" />
    </svg>
  )
}

function StepArrow({ direction }) {
  return (
    <svg
      viewBox="0 0 24 16"
      width="20"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={direction === 'prev' ? styles.flipped : undefined}
    >
      <path d="M2 8h19M15 2l6 6-6 6" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  )
}

export default function ImageViewer({ project }) {
  const { images, title, id } = project
  const [expanded, setExpanded] = useState(false)
  const [current, setCurrent] = useState(0)
  // Drives the slide direction of the image swap animation.
  const [direction, setDirection] = useState('forward')
  const panelRef = useRef(null)
  const hasGallery = images.length > 1
  const panelId = `project-${id}-gallery`

  const step = (delta) => {
    const next = current + delta
    if (next < 0 || next >= images.length) return
    setDirection(delta > 0 ? 'forward' : 'backward')
    setCurrent(next)
  }

  const goTo = (index) => {
    if (index === current) return
    setDirection(index > current ? 'forward' : 'backward')
    setCurrent(index)
  }

  const open = () => {
    if (!hasGallery) return
    setExpanded(true)
  }

  const close = () => {
    setExpanded(false)
    setCurrent(0)
  }

  const handleKeyDown = (event) => {
    if (!expanded) return
    if (event.key === 'ArrowRight') {
      event.stopPropagation()
      step(1)
    } else if (event.key === 'ArrowLeft') {
      event.stopPropagation()
      step(-1)
    } else if (event.key === 'Escape') {
      close()
    }
  }

  const activeImage = images[expanded ? current : 0]

  return (
    <div className={styles.viewer} onKeyDown={handleKeyDown}>
      <div className={styles.frame}>
        {/* Keyed so each swap re-runs the slide-in animation. */}
        <img
          key={activeImage.src}
          className={`${styles.image} ${
            expanded
              ? direction === 'forward'
                ? styles.slideForward
                : styles.slideBackward
              : ''
          }`}
          src={activeImage.src}
          alt={
            expanded
              ? `${title} — ${activeImage.caption}`
              : `${title} screenshot`
          }
          loading="lazy"
        />

        {hasGallery && !expanded && (
          <button
            type="button"
            className={styles.openButton}
            onClick={open}
            aria-expanded={false}
            aria-controls={panelId}
            aria-label={`View all ${images.length} screenshots of ${title}`}
          >
            <span className={styles.badge}>
              <GalleryIcon />
              {images.length}
            </span>
          </button>
        )}

        {hasGallery && !expanded && (
          <div className={styles.dotStrip} aria-hidden="true">
            {images.map((image, index) => (
              <span
                key={image.src}
                className={`${styles.stripDot} ${index === 0 ? styles.stripDotActive : ''}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Drawer: grid-template-rows 0fr → 1fr gives a real height transition
          without measuring anything in JS, and keeps the panel in flow so the
          page below shifts down rather than being covered. Projects with a
          single screenshot have nothing to open, so they skip it entirely. */}
      {hasGallery && (
      <div
        id={panelId}
        ref={panelRef}
        className={`${styles.drawer} ${expanded ? styles.drawerOpen : ''}`}
      >
        <div className={styles.drawerInner}>
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.stepButton}
              onClick={() => step(-1)}
              disabled={current === 0}
              aria-label="Previous screenshot"
              tabIndex={expanded ? 0 : -1}
            >
              <StepArrow direction="prev" />
            </button>

            <div className={styles.pageDots}>
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  className={`${styles.pageDot} ${index === current ? styles.pageDotActive : ''}`}
                  onClick={() => goTo(index)}
                  aria-label={`Screenshot ${index + 1} of ${images.length}`}
                  aria-current={index === current}
                  tabIndex={expanded ? 0 : -1}
                />
              ))}
            </div>

            <button
              type="button"
              className={styles.stepButton}
              onClick={() => step(1)}
              disabled={current === images.length - 1}
              aria-label="Next screenshot"
              tabIndex={expanded ? 0 : -1}
            >
              <StepArrow direction="next" />
            </button>

            <button
              type="button"
              className={styles.closeButton}
              onClick={close}
              aria-label="Close gallery"
              tabIndex={expanded ? 0 : -1}
            >
              <CloseIcon />
              Close
            </button>
          </div>

          <p className={styles.caption}>{activeImage.caption}</p>
        </div>
      </div>
      )}
    </div>
  )
}
