import styles from './Hero.module.css'
// TODO: replace img src with your portrait photo path
// (see the PORTRAIT SETUP note at the top of ParticlePortrait.jsx)
import ParticlePortrait from './ParticlePortrait'

export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>Full-Stack Software Engineer</p>

          <h1 id="hero-heading" className={styles.name}>
            Noboni Sultan
          </h1>

          <p className={styles.impact}>
            I build full-stack systems that work end-to-end — from database schema to
            user interface.
          </p>

          <p className={styles.body}>
            Software engineering fellow at Marcy Lab School in Brooklyn. I care deeply
            about visual design — a lot of apps look the same because of AI-generated
            templates, and I believe the human touch is what makes an interface feel
            good to use.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className="btn btnPrimary">
              View Projects
            </a>
            <a href="#contact" className="btn btnSecondary">
              Get in Touch
            </a>
          </div>
        </div>

        <div className={styles.portrait}>
          <ParticlePortrait />
        </div>
      </div>
    </section>
  )
}
