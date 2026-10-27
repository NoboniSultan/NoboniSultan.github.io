import styles from './Button.module.css'

/**
 * The one button in the codebase. Renders an <a> when given an href and a
 * <button> otherwise, so a link that looks like a button is still a link.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  onClick,
  children,
  target,
  rel,
  type,
  className = '',
  ...rest
}) {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={target}
        // Opening a new tab without noopener hands the target a window
        // reference, so default it whenever target is set.
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        aria-disabled={disabled || undefined}
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={classes}
      type={type ?? 'button'}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}
