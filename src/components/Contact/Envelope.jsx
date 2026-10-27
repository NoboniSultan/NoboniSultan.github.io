import { useCallback, useEffect, useRef, useState } from 'react'
import useContactForm from '../../hooks/useContactForm'
import Button from '../ui/Button'
import styles from './Envelope.module.css'

const EMAIL = 'sultannoboni@gmail.com'
// Matches the open animation in the stylesheet; focus moves once it ends.
const OPEN_DURATION = 800
const CLOSE_DURATION = 400

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const envelopeRef = useRef(null)
  const firstFieldRef = useRef(null)
  const cardRef = useRef(null)
  const { status, submit, buttonLabel, liveMessage } = useContactForm()

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const open = () => setIsOpen(true)

  const close = useCallback(() => {
    setIsClosing(true)
    setTimeout(
      () => {
        setIsOpen(false)
        setIsClosing(false)
        envelopeRef.current?.focus()
      },
      reduced ? 0 : CLOSE_DURATION,
    )
  }, [reduced])

  // Move focus into the form once the letter has finished rising.
  useEffect(() => {
    if (!isOpen) return
    const timeoutId = setTimeout(
      () => firstFieldRef.current?.focus(),
      reduced ? 200 : OPEN_DURATION,
    )
    return () => clearTimeout(timeoutId)
  }, [isOpen, reduced])

  // Keep tabbing inside the open letter — there is nothing else to reach
  // while it covers the section — and let Escape close it.
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        close()
        return
      }
      if (event.key !== 'Tab') return

      const focusable = cardRef.current?.querySelectorAll(
        'input, textarea, button, a[href]',
      )
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

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, close])

  const handleEnvelopeKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      open()
    }
  }

  return (
    <div className={styles.scene}>
      <div
        ref={envelopeRef}
        role="button"
        tabIndex={isOpen ? -1 : 0}
        aria-label="Open contact form"
        aria-expanded={isOpen}
        className={`${styles.envelope} ${isOpen && !isClosing ? styles.envelopeOpen : ''}`}
        onClick={open}
        onKeyDown={handleEnvelopeKeyDown}
      >
        {/* Body: rectangle plus the two folds running up from the bottom
            corners. The flap and seal are separate layers above it. */}
        <svg
          className={styles.envelopeArt}
          viewBox="0 0 420 280"
          aria-hidden="true"
        >
          <rect
            x="1"
            y="1"
            width="418"
            height="278"
            rx="4"
            fill="var(--bg-surface)"
            stroke="var(--border)"
            strokeWidth="1"
          />
          <line
            x1="1"
            y1="279"
            x2="210"
            y2="140"
            stroke="var(--border)"
            strokeOpacity="0.5"
          />
          <line
            x1="419"
            y1="279"
            x2="210"
            y2="140"
            stroke="var(--border)"
            strokeOpacity="0.5"
          />
        </svg>

        {/* Its own element so it can rotate independently of the body. */}
        <svg className={styles.flap} viewBox="0 0 420 140" aria-hidden="true">
          <polygon
            points="1,1 419,1 210,139"
            fill="var(--bg-surface)"
            stroke="var(--border)"
            strokeWidth="1"
          />
        </svg>

        {/* Sits above the flap — the seal is what holds it shut, so it has to
            read as being on top of the fold, and it breaks away on open. */}
        <svg className={styles.seal} viewBox="0 0 56 56" aria-hidden="true">
          <circle cx="28" cy="28" r="26" fill="var(--accent)" />
          <text
            className={styles.sealLetter}
            x="28"
            y="29"
            textAnchor="middle"
            dominantBaseline="central"
          >
            N
          </text>
        </svg>

        <span className={styles.hint}>click to open</span>
      </div>

      {isOpen && (
        <div
          ref={cardRef}
          className={`${styles.letter} ${isClosing ? styles.letterClosing : ''}`}
        >
          <div className={styles.letterhead}>
            <Button
              variant="ghost"
              size="sm"
              onClick={close}
              aria-label="Close contact form"
            >
              close
            </Button>
            <span className={styles.letterheadEmail}>{EMAIL}</span>
          </div>

          <form className={styles.form} onSubmit={submit}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="envelope-name">
                Name
              </label>
              <input
                ref={firstFieldRef}
                className={styles.input}
                id="envelope-name"
                name="name"
                type="text"
                autoComplete="name"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="envelope-email">
                Email
              </label>
              <input
                className={styles.input}
                id="envelope-email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="envelope-message">
                Message
              </label>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                id="envelope-message"
                name="message"
                rows={4}
                required
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className={styles.submit}
              disabled={status === 'sending'}
            >
              {buttonLabel}
            </Button>

            {status === 'error' && (
              <p className={styles.error}>
                Something went wrong — try emailing me directly.
              </p>
            )}
          </form>

          <div className="srOnly" role="status" aria-live="polite">
            {liveMessage}
          </div>
        </div>
      )}
    </div>
  )
}
