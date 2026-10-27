import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import ThemeToggle from './ThemeToggle'
import styles from './Navbar.module.css'
import resumeUrl from '../../assets/resume.pdf'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Art', href: '#art' },
  { label: 'Contact', href: '#contact' },
]

// Distance scrolled before the bar picks up its blurred background.
const SCROLL_THRESHOLD = 50

export default function Navbar({ theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.inner}`} aria-label="Main">
        <a href="#top" className={styles.name}>
          Noboni Sultan
        </a>

        <div className={styles.links}>
          <ul className={styles.linkList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <Button href={resumeUrl} variant="secondary" size="sm" target="_blank">
            Resume
          </Button>
        </div>
      </nav>
    </header>
  )
}
