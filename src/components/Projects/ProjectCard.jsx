import styles from './ProjectCard.module.css'

// Inline SVG keeps the card dependency-free — no icon library, no emoji.
function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5.5 10.5 10.5 5.5" />
      <path d="M6.5 5.5h4v4" />
    </svg>
  )
}

// Placeholder URLs in the data file are '#'. A dead link reads worse than no
// link on a portfolio, so the icon is simply left off until a real URL exists.
const hasUrl = (url) => Boolean(url) && url !== '#'

export default function ProjectCard({ project }) {
  const { title, tagline, description, tags, image, liveUrl, githubUrl } = project
  const headingId = `project-${project.id}-title`

  return (
    <article className={styles.card} aria-labelledby={headingId}>
      <div className={styles.media}>
        <img
          className={styles.image}
          src={image}
          alt={`${title} screenshot`}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <header className={styles.header}>
          <div>
            <h3 id={headingId} className={styles.title}>
              {title}
            </h3>
            <p className={styles.tagline}>{tagline}</p>
          </div>

          <div className={styles.iconRow}>
            {hasUrl(githubUrl) && (
              <a
                className={styles.iconButton}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source code on GitHub`}
              >
                <GitHubIcon />
              </a>
            )}
            {hasUrl(liveUrl) && (
              <a
                className={styles.iconButton}
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
              >
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </header>

        <p className={styles.description}>{description}</p>

        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li key={tag} className="pill">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
