import { experience } from '../../data/experience'
import styles from './Experience.module.css'

function TimelineEntry({ entry }) {
  return (
    <li className={styles.entry}>
      <h4 className={styles.role}>{entry.role}</h4>

      <div className={styles.meta}>
        <span className={styles.org}>
          {entry.organization} @ {entry.location}
        </span>
        <span className={styles.dates}>{entry.dates}</span>
      </div>

      {entry.bullets.length > 0 && (
        <ul className={styles.bullets}>
          {entry.bullets.map((bullet) => (
            <li key={bullet} className={styles.bullet}>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function Experience() {
  const work = experience.filter((entry) => entry.kind === 'work')
  const education = experience.filter((entry) => entry.kind === 'education')

  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container">
        <h2 id="experience-heading" className="sectionTitle">
          Experience
        </h2>

        <ul className={styles.timeline}>
          {work.map((entry) => (
            <TimelineEntry key={entry.id} entry={entry} />
          ))}
        </ul>

        <h3 id="education-heading" className={styles.subheading}>
          Education
        </h3>

        <ul className={styles.timeline} aria-labelledby="education-heading">
          {education.map((entry) => (
            <TimelineEntry key={entry.id} entry={entry} />
          ))}
        </ul>
      </div>
    </section>
  )
}
