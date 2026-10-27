import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Reveals `text` one character at a time.
 *
 * @param {string} text        the full string to type out
 * @param {number} startDelay  ms to wait before the first character
 * @param {number} speed       ms per character
 * @returns {{ displayText: string, isDone: boolean }}
 *
 * Under prefers-reduced-motion the full string is returned immediately with
 * isDone already true, so callers need no special case.
 */
export default function useTypewriter(text, startDelay = 0, speed = 60) {
  const reduced = prefersReducedMotion()
  const [typed, setTyped] = useState('')
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    if (reduced) return

    let index = 0
    let timeoutId

    const typeNext = () => {
      index += 1
      setTyped(text.slice(0, index))

      if (index >= text.length) {
        setIsDone(true)
        return
      }
      timeoutId = setTimeout(typeNext, speed)
    }

    timeoutId = setTimeout(typeNext, startDelay)
    return () => clearTimeout(timeoutId)
  }, [text, startDelay, speed, reduced])

  // Derived rather than stored, so the reduced-motion path never needs an
  // effect to correct state that was already wrong on the first render.
  return reduced
    ? { displayText: text, isDone: true }
    : { displayText: typed, isDone }
}
