import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Art from './components/Art/Art'
import Contact from './components/Contact/Contact'

const THEME_KEY = 'portfolio-theme'

// The inline script in index.html has already put the stored theme on <html>
// before first paint; this just reads back what it decided.
function readInitialTheme() {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.getAttribute('data-theme') === 'light'
    ? 'light'
    : 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(readInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      // Private browsing or blocked storage — the theme still applies for
      // this visit, it just will not be remembered.
    }
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Art />
        <Contact />
      </main>

      <footer className="siteFooter">
        Designed &amp; Built by Noboni Sultan · 2026
      </footer>
    </>
  )
}
