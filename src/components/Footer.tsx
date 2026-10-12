import { Link } from 'react-router-dom'
import { nav, profile } from '../content'
import Marquee from './Marquee'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap label" style={{ marginBottom: 20 }}>
        <span className="chip" style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
          Available for hire · Copenhagen
        </span>
      </div>
      <Link to="/contact" className="footer-cta" data-cursor="Say hi">
        <div className="h-mega">Let's talk</div>
      </Link>

      <div className="footer-grid">
        <div>
          <span className="label">Contact</span>
          <ul>
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.cv} download>
                Download CV ↓
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="label">Follow</span>
          <ul>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="label">Index</span>
          <ul>
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>
                  {n.num} {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="label">Location</span>
          <ul>
            <li>{profile.location}</li>
            <li>→ Copenhagen, 2026</li>
          </ul>
        </div>
      </div>

      <Marquee items={['Trustworthy AI & ML', 'Python & SQL', 'Copenhagen 2026']} speed={40} />

      <div className="footer-base label">
        <span>
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
        </span>
        <span>Built with React + TypeScript</span>
      </div>
    </footer>
  )
}
