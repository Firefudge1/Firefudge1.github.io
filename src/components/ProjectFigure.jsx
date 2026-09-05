import { useState } from 'react'
import ProjectArt from './ProjectArt.jsx'
import { ExpandIcon } from './icons.jsx'

/**
 * Renders a project photo, falling back to the schematic line art if the file
 * has not been added to /public/projects yet (or fails to load). Real images
 * are clickable and open in the lightbox; the fallback art is not.
 */
export default function ProjectFigure({ image, projectId, className = '', onOpen }) {
  const [failed, setFailed] = useState(false)

  if (failed || !image?.src) {
    return (
      <div className={`figure figure-fallback ${className}`}>
        <ProjectArt id={projectId} />
      </div>
    )
  }

  return (
    <button
      type="button"
      className={`figure figure-button ${className}`}
      onClick={onOpen}
      aria-label={`Expand image: ${image.alt}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
      <span className="figure-zoom" aria-hidden="true">
        <ExpandIcon />
      </span>
    </button>
  )
}
