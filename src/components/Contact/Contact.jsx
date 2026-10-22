import styles from './Contact.module.css'

const SOCIAL_LINKS = [
  {
    label: 'sultannoboni@gmail.com',
    href: 'mailto:sultannoboni@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nobonisultan/',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/provasultan-crypto',
    external: true,
  },
]

export default function Contact() {
  // TODO: wire to Resend API or Formspree for actual email delivery
  const handleSubmit = (event) => {
    event.preventDefault()
  }

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

          <ul className={styles.socials}>
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className={styles.social}
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-name">
              Name
            </label>
            <input
              className={styles.input}
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-email">
              Email
            </label>
            <input
              className={styles.input}
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-message">
              Message
            </label>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              id="contact-message"
              name="message"
              rows={5}
              required
            />
          </div>

          <button type="submit" className={`btn btnPrimary ${styles.submit}`}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
