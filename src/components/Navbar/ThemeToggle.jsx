import styles from './ThemeToggle.module.css'
// Noboni's own bulb drawings, cropped to the glass so they still read at
// knob size. Unlit for dark mode, lit for light.
import bulbDark from '../../assets/images/bulb-dark.png'
import bulbLight from '../../assets/images/bulb-light.png'

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
        {/* The icon shows the state you are in, not the one you would get. */}
        <img
          className={styles.bulb}
          src={isDark ? bulbDark : bulbLight}
          alt=""
          aria-hidden="true"
        />
      </span>
    </button>
  )
}
