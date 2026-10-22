// PORTRAIT SETUP: replace the image src below with your portrait photo.
// Recommended: export your sketch/painting as a PNG with transparent background,
// sized 600x600px. Place it at: src/assets/images/portrait.png
// The image must be served from the same origin (no hotlinking external images)
// due to canvas CORS restrictions.
//
// The import below resolves to a same-origin URL in both dev and the production
// build — a literal '/src/...' path would only work while running `npm run dev`.
import portraitPlaceholder from '../../assets/images/portrait-placeholder.svg'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const PORTRAIT_SRC = portraitPlaceholder

// --- tuning -----------------------------------------------------------------
const SAMPLE_STEP = 2 // sample the portrait every 2px
const DOT_RADIUS_MIN = 1
const DOT_RADIUS_MAX = 1.5
const ALPHA_MIN = 0.7
const ALPHA_MAX = 1
const ALPHA_CUTOFF = 24 // ignore near-transparent source pixels
const DISPERSE_MS = 350
const RETURN_MS = 450
const SPEED_MIN = 2 // px per frame at 60fps
const SPEED_MAX = 4
const FRAME_MS = 1000 / 60

const easeOutCubic = (t) => 1 - (1 - t) ** 3
const randomBetween = (min, max) => min + Math.random() * (max - min)

export default function ParticlePortrait() {
  const canvasRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrapper = wrapperRef.current
    if (!canvas || !wrapper) return

    const ctx = canvas.getContext('2d')
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let particles = []
    let size = 0
    let frameId = null
    let phase = 'idle' // 'idle' | 'dispersing' | 'scattered' | 'returning'
    let phaseStart = 0
    let lastFrame = 0
    let disposed = false

    // --- sampling ------------------------------------------------------------
    // Read the portrait once into an offscreen canvas at display size, then turn
    // every SAMPLE_STEP-th opaque pixel into a particle that remembers its home.
    const buildParticles = (image) => {
      const rect = wrapper.getBoundingClientRect()
      size = Math.max(1, Math.round(rect.width))

      const dpr = window.devicePixelRatio || 1
      canvas.width = size * dpr
      canvas.height = size * dpr
      canvas.style.width = `${size}px`
      canvas.style.height = `${size}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const sampler = document.createElement('canvas')
      sampler.width = size
      sampler.height = size
      const samplerCtx = sampler.getContext('2d', { willReadFrequently: true })
      samplerCtx.drawImage(image, 0, 0, size, size)

      const { data } = samplerCtx.getImageData(0, 0, size, size)
      const next = []

      for (let y = 0; y < size; y += SAMPLE_STEP) {
        for (let x = 0; x < size; x += SAMPLE_STEP) {
          const index = (y * size + x) * 4
          if (data[index + 3] < ALPHA_CUTOFF) continue

          next.push({
            homeX: x,
            homeY: y,
            x,
            y,
            // Start of the current transition, captured when the phase flips.
            fromX: x,
            fromY: y,
            fromAlpha: 0,
            vx: 0,
            vy: 0,
            radius: randomBetween(DOT_RADIUS_MIN, DOT_RADIUS_MAX),
            baseAlpha: randomBetween(ALPHA_MIN, ALPHA_MAX),
            alpha: 0,
            color: `${data[index]},${data[index + 1]},${data[index + 2]}`,
          })
        }
      }

      particles = next
      for (const particle of particles) particle.alpha = particle.baseAlpha
    }

    // --- rendering -----------------------------------------------------------
    const draw = () => {
      ctx.clearRect(0, 0, size, size)

      // The hair of blur that softens the dot grid into something painterly is
      // a CSS filter on the canvas element (see .portraitCanvas), not
      // ctx.filter: on a 2x display Chrome drops every filtered fill and the
      // canvas renders blank. CSS compositing gives the same look reliably.
      for (const particle of particles) {
        if (particle.alpha <= 0.01) continue
        ctx.fillStyle = `rgba(${particle.color},${particle.alpha})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const captureTransitionStart = () => {
      for (const particle of particles) {
        particle.fromX = particle.x
        particle.fromY = particle.y
        particle.fromAlpha = particle.alpha
      }
    }

    const step = (now) => {
      const elapsed = now - phaseStart
      const delta = lastFrame ? now - lastFrame : FRAME_MS
      lastFrame = now
      // Velocity is specified per frame at 60fps; scale it so the motion looks
      // the same on a 120Hz display.
      const frameScale = Math.min(delta / FRAME_MS, 3)

      if (phase === 'dispersing') {
        const progress = Math.min(elapsed / DISPERSE_MS, 1)
        for (const particle of particles) {
          particle.x += particle.vx * frameScale
          particle.y += particle.vy * frameScale
          particle.alpha = particle.fromAlpha * (1 - progress)
        }
        draw()

        if (progress >= 1) {
          phase = 'scattered'
          frameId = null
          return
        }
      } else if (phase === 'returning') {
        const progress = Math.min(elapsed / RETURN_MS, 1)
        const eased = easeOutCubic(progress)

        for (const particle of particles) {
          particle.x = particle.fromX + (particle.homeX - particle.fromX) * eased
          particle.y = particle.fromY + (particle.homeY - particle.fromY) * eased
          particle.alpha =
            particle.fromAlpha + (particle.baseAlpha - particle.fromAlpha) * eased
        }
        draw()

        if (progress >= 1) {
          phase = 'idle'
          frameId = null
          return
        }
      }

      frameId = requestAnimationFrame(step)
    }

    const startPhase = (nextPhase) => {
      if (prefersReducedMotion || particles.length === 0) return

      captureTransitionStart()
      phase = nextPhase
      phaseStart = performance.now()
      lastFrame = 0

      if (nextPhase === 'dispersing') {
        for (const particle of particles) {
          const angle = Math.random() * Math.PI * 2
          const speed = randomBetween(SPEED_MIN, SPEED_MAX)
          particle.vx = Math.cos(angle) * speed
          particle.vy = Math.sin(angle) * speed
        }
      }

      if (frameId === null) frameId = requestAnimationFrame(step)
    }

    const handleEnter = () => startPhase('dispersing')
    const handleLeave = () => startPhase('returning')

    // --- lifecycle -----------------------------------------------------------
    let cleanupObserver = null

    const image = new Image()
    image.decoding = 'async'

    image.onload = () => {
      if (disposed) return
      buildParticles(image)
      draw()

      // Re-sample when the layout changes so the portrait stays crisp.
      const observer = new ResizeObserver(() => {
        if (disposed) return
        const width = Math.round(wrapper.getBoundingClientRect().width)
        if (width === size || width === 0) return
        buildParticles(image)
        phase = 'idle'
        draw()
      })
      observer.observe(wrapper)
      cleanupObserver = () => observer.disconnect()
    }

    image.src = PORTRAIT_SRC

    // pointer events cover mouse, pen and touch with one pair of listeners
    wrapper.addEventListener('pointerenter', handleEnter)
    wrapper.addEventListener('pointerleave', handleLeave)

    return () => {
      disposed = true
      if (frameId !== null) cancelAnimationFrame(frameId)
      if (cleanupObserver) cleanupObserver()
      wrapper.removeEventListener('pointerenter', handleEnter)
      wrapper.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  return (
    <div ref={wrapperRef} className={styles.portraitCanvasWrapper}>
      <canvas
        ref={canvasRef}
        className={styles.portraitCanvas}
        role="img"
        aria-label="Illustrated portrait of Noboni Sultan"
      />
    </div>
  )
}
