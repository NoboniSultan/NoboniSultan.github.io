import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  return <article className={styles.card}>{project.title}</article>
}
