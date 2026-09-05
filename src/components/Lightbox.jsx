import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ChevronIcon, CloseIcon } from './icons.jsx'
import './Lightbox.css'

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const image = images[index]
  const many = images.length > 1

  const step = (delta) =>
    onNavigate((index + delta + images.length) % images.length)

  // Focus the close button once, on open — not on every navigation.
  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  // Lock page scroll for as long as the lightbox is mounted.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  // Key handling has to track the current index, so it re-subscribes freely.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (many && e.key === 'ArrowRight') {
        onNavigate((index + 1) % images.length)
        return
      }

      if (many && e.key === 'ArrowLeft') {
        onNavigate((index - 1 + images.length) % images.length)
        return
      }

      if (e.key !== 'Tab') return

      // Keep Tab inside the dialog; every focusable element here is a button.
      const focusable = dialogRef.current?.querySelectorAll('button')
      if (!focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [index, images.length, many, onClose, onNavigate])

  if (!image) return null

  return createPortal(
    <div
      className="lightbox"
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox-close"
        ref={closeRef}
        onClick={onClose}
        aria-label="Close image"
      >
        <CloseIcon />
      </button>

      {many && (
        <button
          type="button"
          className="lightbox-nav prev"
          onClick={(e) => {
            e.stopPropagation()
            step(-1)
          }}
          aria-label="Previous image"
        >
          <ChevronIcon />
        </button>
      )}

      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.alt} />
        <figcaption>
          <span>{image.alt}</span>
          {many && (
            <span className="lightbox-count">
              {index + 1} / {images.length}
            </span>
          )}
        </figcaption>
      </figure>

      {many && (
        <button
          type="button"
          className="lightbox-nav next"
          onClick={(e) => {
            e.stopPropagation()
            step(1)
          }}
          aria-label="Next image"
        >
          <ChevronIcon />
        </button>
      )}
    </div>,
    document.body
  )
}
