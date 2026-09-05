import { useRef, useState } from 'react'
import ProjectFigure from './ProjectFigure.jsx'
import Lightbox from './Lightbox.jsx'
import useReveal from '../hooks/useReveal.js'
import './WorkSection.css'

function WorkItem({ item, index }) {
  const ref = useReveal()
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const openerRef = useRef(null)
  const [hero, ...rest] = item.images
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
      className={`work-item reveal${flipped ? ' is-flipped' : ''}`}
      id={item.id}
    >
      <div className="work-media">
        <ProjectFigure
          image={hero}
          projectId={item.id}
          className="figure-hero"
          onOpen={open(0)}
        />
        {rest.length > 0 && (
          <div className="work-thumbs">
            {rest.map((image, i) => (
              <ProjectFigure
                key={image.src}
                image={image}
                projectId={item.id}
                className="figure-thumb"
                onOpen={open(i + 1)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="work-body">
        <p className="work-index">{String(index + 1).padStart(2, '0')}</p>
        <h3 className="work-name">{item.name}</h3>
        <p className="work-org">
          {item.org}
          <span className="work-dot">·</span>
          <span className="work-dates">{item.dates}</span>
        </p>

        <p className="work-blurb">{item.blurb}</p>

        <ul className="metrics">
          {item.metrics.map((metric) => (
            <li className="metric" key={metric.label}>
              <p className="metric-value">{metric.value}</p>
              <p className="metric-label">{metric.label}</p>
            </li>
          ))}
        </ul>

        <div className="work-blocks">
          {item.sections.map((section) => (
            <div className="work-block" key={section.heading}>
              <h4 className="work-block-heading">{section.heading}</h4>
              <p className="work-block-body">{section.body}</p>
            </div>
          ))}
        </div>

        <ul className="chips">
          {item.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={item.images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />
      )}
    </article>
  )
}

export default function WorkSection({ id, eyebrow, heading, intro, items }) {
  const headerRef = useReveal()

  return (
    <section className="work" id={id}>
      <div className="shell">
        <header ref={headerRef} className="work-header reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-heading">{heading}</h2>
          <p className="work-intro">{intro}</p>
        </header>

        <div className="work-list">
          {items.map((item, index) => (
            <WorkItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
