import { useEffect, useState } from 'react'
import useTypewriter from '../../hooks/useTypewriter'
import Button from '../ui/Button'
import styles from './Hero.module.css'
// TODO: replace img src with your portrait photo path
// (see the PORTRAIT SETUP note at the top of ParticlePortrait.jsx)
import ParticlePortrait from './ParticlePortrait'

const GREETING = "Hey, I'm Noboni Sultan"
const START_DELAY = 400
const TYPE_SPEED = 60
// How long the cursor keeps blinking after the last character lands.
const CURSOR_LINGER = 1200

export default function Hero() {
  const { displayText, isDone } = useTypewriter(GREETING, START_DELAY, TYPE_SPEED)
  const [showCursor, setShowCursor] = useState(true)

  // Once typing finishes the cursor blinks a moment longer, then fades out.
  useEffect(() => {
    if (!isDone) return
    const timeoutId = setTimeout(() => setShowCursor(false), CURSOR_LINGER)
    return () => clearTimeout(timeoutId)
  }, [isDone])

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          {/* The full greeting is always in the accessible name, so screen
              readers announce it once rather than character by character. */}
          <h1 id="hero-heading" className={styles.name} aria-label={GREETING}>
            <span aria-hidden="true">{displayText}</span>
            {showCursor && (
              <span className={styles.cursor} aria-hidden="true">
                |
              </span>
            )}
          </h1>

          <p className={`${styles.eyebrow} ${isDone ? styles.revealed : ''}`}>
            Full-Stack Software Engineer
          </p>

          <p className={`${styles.impact} ${isDone ? styles.revealed : ''}`}>
            I build full-stack systems that work end-to-end — from database schema to
            user interface.
          </p>

          <p className={`${styles.body} ${isDone ? styles.revealed : ''}`}>
            Software engineering fellow at Marcy Lab School in Brooklyn. I care deeply
            about visual design — a lot of apps look the same because of AI-generated
            templates, and I believe the human touch is what makes an interface feel
            good to use.
          </p>

          <div className={`${styles.actions} ${isDone ? styles.revealed : ''}`}>
            <Button href="#projects" variant="primary" size="lg">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>

        <div className={styles.portrait}>
          <ParticlePortrait />
        </div>
      </div>
    </section>
  )
}
