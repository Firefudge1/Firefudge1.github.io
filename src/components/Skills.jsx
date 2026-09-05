import { skillGroups } from '../data/skills.js'
import useReveal from '../hooks/useReveal.js'
import './Skills.css'

export default function Skills() {
  const ref = useReveal()

  return (
    <section className="skills" id="skills">
      <div className="shell">
        <header ref={ref} className="skills-header reveal">
          <p className="eyebrow">Toolkit</p>
          <h2 className="section-heading">Skills</h2>
        </header>

        <div className="skills-grid">
          {skillGroups.map(({ category, items }) => (
            <div className="skills-card" key={category}>
              <h3 className="skills-category">{category}</h3>
              <ul className="chips">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
