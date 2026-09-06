import { contacts } from '../data/contacts.js'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="shell hero-inner">
        <div className="hero-text">
        <p className="eyebrow hero-eyebrow">Electrical &amp; Computer Engineering · UT Austin</p>

        <h1 className="hero-name">
          Arav<span className="hero-name-break"> </span>Karnik
        </h1>

        <p className="hero-tagline">
          Hi! I'm a second-year ECE student at UT Austin. I've worked on PCBs, firmware, and software, and I love building things that move (or are supposed to move). Here's some of the stuff I've done.
        </p>

        <p className="hero-bio">
          Currently designing suspension telemetry electronics for Longhorn Racing’s
          Formula SAE car and researching imitation learning at the Robot Interactive
          Intelligence Lab.
        </p>

        <ul className="hero-contacts">
          {contacts.map(({ label, href, Icon, external }) => (
            <li key={href}>
              <a href={href} {...(external && { target: '_blank', rel: 'noreferrer' })}>
                <Icon className="hero-contact-icon" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a className="hero-cue" href="#projects">
          <span>Selected work</span>
          <span className="hero-cue-line" aria-hidden="true" />
        </a>
        </div>

        <div className="hero-portrait">
          <img
            src={`${import.meta.env.BASE_URL}projects/AravKarnikNasaPicture.png`}
            alt="Arav Karnik at NASA"
            width="491"
            height="508"
          />
        </div>
      </div>
    </section>
  )
}
