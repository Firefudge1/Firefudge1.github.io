import { useRef, useState } from 'react'
import { projects } from '../data/projects.js'
import ProjectFigure from './ProjectFigure.jsx'
import Lightbox from './Lightbox.jsx'
import useReveal from '../hooks/useReveal.js'
import './Projects.css'

function Project({ project, index }) {
  const ref = useReveal()
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const openerRef = useRef(null)
  const [hero, ...rest] = project.images
  const flipped = index % 2 === 1

  const open = (imageIndex) => (event) => {
    openerRef.current = event.currentTarget
    setLightboxIndex(imageIndex)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    openerRef.current?.focus()
  }

  return (
    <article
      ref={ref}
      className={`project reveal${flipped ? ' is-flipped' : ''}`}
      id={project.id}
    >
      <div className="project-media">
        <ProjectFigure
          image={hero}
          projectId={project.id}
          className="figure-hero"
          onOpen={open(0)}
        />
        {rest.length > 0 && (
          <div className="project-thumbs">
            {rest.map((image, i) => (
              <ProjectFigure
                key={image.src}
                image={image}
                projectId={project.id}
                className="figure-thumb"
                onOpen={open(i + 1)}
              />
            ))}
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />
      )}

      <div className="project-body">
        <p className="project-index">{String(index + 1).padStart(2, '0')}</p>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-org">
          {project.org}
          <span className="project-dot">·</span>
          <span className="project-dates">{project.dates}</span>
        </p>

        <p className="project-blurb">{project.blurb}</p>

        <ul className="metrics">
          {project.metrics.map((metric) => (
            <li className="metric" key={metric.label}>
              <p className="metric-value">{metric.value}</p>
              <p className="metric-label">{metric.label}</p>
            </li>
          ))}
        </ul>

        <div className="project-blocks">
          {project.sections.map((section) => (
            <div className="project-block" key={section.heading}>
              <h4 className="project-block-heading">{section.heading}</h4>
              <p className="project-block-body">{section.body}</p>
            </div>
          ))}
        </div>

        <ul className="chips">
          {project.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function Projects() {
  const headerRef = useReveal()

  return (
    <section className="projects" id="projects">
      <div className="shell">
        <header ref={headerRef} className="projects-header reveal">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-heading">Projects</h2>
          <p className="projects-intro">
            Hardware and firmware I have designed, assembled, and debugged — from
            high-voltage safety electronics to robot learning infrastructure.
          </p>
        </header>

        <div className="projects-list">
          {projects.map((project, index) => (
            <Project key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
