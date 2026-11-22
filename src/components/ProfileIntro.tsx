import { Link } from 'react-router-dom'
import Media from './Media'
import { FadeUp } from './Reveal'
import { about, profile } from '../content'
import { scrollToId } from '../hooks/useSmoothScroll'

// A short professional profile at the top of the Portfolio page. It stays brief on purpose:
// the job, project and study cards below carry the detail, and the buttons send readers there.
const SNAPSHOT = [
  { label: 'Now', text: 'Backend Python Developer, Assystem: AI, data science, full stack and ML', to: '/portfolio/assystem' },
  { label: 'Before', text: 'Systems & Data Developer, PKF Infuse', to: '/portfolio/pkf-infuse' },
  { label: "Master's degree", text: 'MSc Computing, Cardiff University', to: '/portfolio/cardiff-msc' },
]

export default function ProfileIntro() {
  return (
    <FadeUp className="profile">
      <div className="profile-photo">
        <Media src={profile.headshot} alt={`${profile.firstName} ${profile.lastName}`} label="Portrait" mark="JP" />
      </div>
      <div className="profile-body">
        <p className="lead">{about.summary}</p>
        <ul className="profile-snapshot">
          {SNAPSHOT.map((s) => (
            <li key={s.label}>
              <span className="label dim">{s.label}</span>
              <Link to={s.to}>
                {s.text} <span className="blue">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="profile-note dim">{about.availability}</p>
        <p className="profile-meta label dim">
          {about.howIWork.join(' · ')} &nbsp;|&nbsp; {about.languages}
        </p>
        <div className="profile-actions">
          <button className="btn" onClick={() => scrollToId('personal')}>
            See my work <span className="arrow">↓</span>
          </button>
          <a href={profile.cv} download className="btn btn--ghost">
            Download CV <span className="arrow">↓</span>
          </a>
        </div>
      </div>
    </FadeUp>
  )
}
