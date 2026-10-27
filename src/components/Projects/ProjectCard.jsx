import Button from '../ui/Button'
import ImageViewer from './ImageViewer'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  const { title, tagline, description, tags, liveUrl, githubUrl } = project
  const headingId = `project-${project.id}-title`

  return (
    <article className={styles.card} aria-labelledby={headingId}>
      <ImageViewer project={project} />

      <div className={styles.content}>
        <header className={styles.header}>
          <div>
            <h3 id={headingId} className={styles.title}>
              {title}
            </h3>
            <p className={styles.tagline}>{tagline}</p>
          </div>

          {/* A null URL renders nothing — never a dead '#' link. */}
          <div className={styles.linkRow}>
            {liveUrl && (
              <Button
                href={liveUrl}
                variant="ghost"
                size="sm"
                target="_blank"
                aria-label={`${title} live demo`}
              >
                Live Demo ↗
              </Button>
            )}
            {githubUrl && (
              <Button
                href={githubUrl}
                variant="ghost"
                size="sm"
                target="_blank"
                aria-label={`${title} GitHub repo`}
              >
                GitHub ↗
              </Button>
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
