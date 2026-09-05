import { contacts } from '../data/contacts.js'
import useReveal from '../hooks/useReveal.js'
import './Footer.css'

export default function Footer() {
  const ref = useReveal()

  return (
    <footer className="footer" id="contact">
      <div className="shell">
        <div ref={ref} className="footer-inner reveal">
          <p className="eyebrow">Get in touch</p>
          <h2 className="footer-heading">
            Open to internships and research in robotics, embedded systems, and
            hardware design.
          </h2>

          <ul className="footer-contacts">
            {contacts.map(({ label, href, Icon, external }) => (
              <li key={href}>
                <a href={href} {...(external && { target: '_blank', rel: 'noreferrer' })}>
                  <Icon className="footer-icon" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-bar">
          <p>© {new Date().getFullYear()} Arav Karnik</p>
          <p>Built with React &amp; Vite</p>
        </div>
      </div>
    </footer>
  )
}
