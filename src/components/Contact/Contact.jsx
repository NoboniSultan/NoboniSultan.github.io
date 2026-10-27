import Envelope from './Envelope'
import styles from './Contact.module.css'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nobonisultan/' },
  { label: 'GitHub', href: 'https://github.com/NoboniSultan' },
]

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className={`container ${styles.inner}`}>
        <div>
          <h2 id="contact-heading" className="sectionTitle">
            Get in Touch
          </h2>

          <p className={styles.blurb}>
            I&apos;m currently open to full-stack engineering roles and internships.
            Whether you have a question or just want to say hi — my inbox is open.
          </p>

          {/* The email address lives on the letterhead inside the envelope
              rather than being repeated here. */}
          <ul className={styles.socials}>
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className={styles.social}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Envelope />
      </div>
    </section>
  )
}
