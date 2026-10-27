import { useRef, useState } from 'react'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

// Long, thin arrow — deliberately not a chunky chevron.
function NavArrow({ direction }) {
  return (
    <svg
      viewBox="0 0 28 16"
      width="26"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={direction === 'prev' ? styles.arrowFlipped : undefined}
    >
      <path d="M1 8h25M19 2l7 6-7 6" />
    </svg>
  )
}

const SWIPE_THRESHOLD = 50

export default function Projects() {
  const [index, setIndex] = useState(0)
  // null when at rest, otherwise { phase: 'exit' | 'enter', dir }.
  const [transition, setTransition] = useState(null)
  const touchStartX = useRef(null)
  const pendingIndex = useRef(null)

  const atStart = index === 0
  const atEnd = index === projects.length - 1

  const navigate = (dir) => {
    // Ignore input mid-flip so the two halves of the animation can't overlap.
    if (transition) return

    const next = dir === 'forward' ? index + 1 : index - 1
    if (next < 0 || next >= projects.length) return

    pendingIndex.current = next
    setTransition({ phase: 'exit', dir })
  }

  // The exit animation swaps in the next project, the enter animation settles.
  const handleAnimationEnd = (event) => {
    // Animations inside the card (the gallery slide) bubble up here too.
    if (event.target !== event.currentTarget || !transition) return

    if (transition.phase === 'exit') {
      setIndex(pendingIndex.current)
      setTransition({ phase: 'enter', dir: transition.dir })
    } else {
      setTransition(null)
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      navigate('forward')
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      navigate('backward')
    }
  }

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(delta) < SWIPE_THRESHOLD) return
    navigate(delta < 0 ? 'forward' : 'backward')
  }

  const jumpTo = (target) => {
    if (transition || target === index) return
    pendingIndex.current = target
    setTransition({ phase: 'exit', dir: target > index ? 'forward' : 'backward' })
  }

  const project = projects[index]
  const animationClass = transition
    ? styles[
        `card${transition.phase === 'exit' ? 'Exit' : 'Enter'}${
          transition.dir === 'forward' ? 'Forward' : 'Backward'
        }`
      ]
    : ''

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading" className="sectionTitle">
          Projects
        </h2>

        <div
          className={styles.stage}
          role="group"
          aria-roledescription="carousel"
          aria-label="Project showcase — use the left and right arrow keys to browse"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            className={`${styles.navButton} ${styles.navPrev}`}
            onClick={() => navigate('backward')}
            disabled={atStart}
            aria-label="Previous project"
          >
            <NavArrow direction="prev" />
          </button>

          {/* data-motion opts this element out of the global reduced-motion
              reset so it can fall back to a plain crossfade instead of none. */}
          <div
            key={project.id}
            data-motion
            className={`${styles.cardSlot} ${animationClass}`}
            onAnimationEnd={handleAnimationEnd}
            aria-live="polite"
          >
            <ProjectCard project={project} />
          </div>

          <button
            type="button"
            className={`${styles.navButton} ${styles.navNext}`}
            onClick={() => navigate('forward')}
            disabled={atEnd}
            aria-label="Next project"
          >
            <NavArrow direction="next" />
          </button>
        </div>

        <div className={styles.dots}>
          {projects.map((item, dotIndex) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.dot} ${dotIndex === index ? styles.dotActive : ''}`}
              onClick={() => jumpTo(dotIndex)}
              aria-label={`Go to project ${dotIndex + 1} of ${projects.length}: ${item.title}`}
              aria-current={dotIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
