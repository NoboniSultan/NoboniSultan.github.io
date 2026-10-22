import { useCallback, useEffect, useRef, useState } from 'react'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

function ArrowIcon({ direction }) {
  // One path, mirrored for "previous" — keeps both arrows visually identical.
  return (
    <svg
      viewBox="0 0 16 16"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ transform: direction === 'prev' ? 'rotate(180deg)' : undefined }}
    >
      <path d="M6 3.5 10.5 8 6 12.5" />
    </svg>
  )
}

export default function Projects() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // The track is a native scroll-snap container, so swiping and the buttons
  // drive the same mechanism — we only ever nudge its scroll position.
  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current
    if (!track) return

    const clamped = Math.max(0, Math.min(index, projects.length - 1))
    const card = track.children[clamped]
    if (!card) return

    track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
  }, [])

  // Keep the dots and arrows in sync when the user swipes or scrolls directly.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleScroll = () => {
      const positions = Array.from(track.children, (card) => card.offsetLeft)
      const nearest = positions.reduce(
        (best, left, index) =>
          Math.abs(left - track.scrollLeft) < Math.abs(positions[best] - track.scrollLeft)
            ? index
            : best,
        0,
      )
      setActiveIndex(nearest)
    }

    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => track.removeEventListener('scroll', handleScroll)
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      scrollToIndex(activeIndex + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      scrollToIndex(activeIndex - 1)
    }
  }

  const atStart = activeIndex === 0
  const atEnd = activeIndex === projects.length - 1

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="projects-heading" className="sectionTitle">
            Projects
          </h2>

          <div className={styles.arrows}>
            <button
              type="button"
              className={styles.arrowButton}
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={atStart}
              aria-label="Previous project"
            >
              <ArrowIcon direction="prev" />
            </button>
            <button
              type="button"
              className={styles.arrowButton}
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={atEnd}
              aria-label="Next project"
            >
              <ArrowIcon direction="next" />
            </button>
          </div>
        </div>

        {/* Focusable so arrow-key navigation works once the carousel is tabbed to. */}
        <div
          ref={trackRef}
          className={styles.track}
          role="group"
          aria-roledescription="carousel"
          aria-label="Project showcase — use the left and right arrow keys to browse"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={styles.slide}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to project ${index + 1} of ${projects.length}: ${project.title}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
