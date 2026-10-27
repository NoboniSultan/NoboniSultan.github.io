import styles from './ThemeToggle.module.css'

// Filled disc for dark, outlined ring for light — the same shape either way,
// so only the fill changes as the knob slides.
function ThemeIcon({ theme }) {
  return (
    <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
      <circle
        cx="6"
        cy="6"
        r="4"
        fill={theme === 'dark' ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={styles.track}
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      <span className={`${styles.knob} ${isDark ? styles.knobDark : ''}`}>
        <ThemeIcon theme={theme} />
      </span>
    </button>
  )
}
