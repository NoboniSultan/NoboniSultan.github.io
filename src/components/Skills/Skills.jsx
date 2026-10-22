import { skills } from '../../data/skills'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading" className="sectionTitle">
          Skills
        </h2>

        <ul className={styles.grid}>
          {skills.map((group) => (
            <li key={group.category} className={styles.card}>
              <h3 className={styles.category}>{group.category}</h3>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item} className="pill">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
