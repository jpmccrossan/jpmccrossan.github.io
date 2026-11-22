import { Link } from 'react-router-dom'
import Media from './Media'
import { FadeUp } from './Reveal'
import type { Entry } from '../portfolio'

// Card linking to an entry's own page. Entries without a cover get the styled placeholder.
export default function ProjectCard({
  entry,
  index,
  delay = 0,
  variant = 'card',
}: {
  entry: Entry
  index: number
  delay?: number
  /** 'cube': a compact tile with a small image, the title and a short description */
  variant?: 'card' | 'cube'
}) {
  if (variant === 'cube') {
    return (
      <FadeUp delay={delay} className="pf-card-wrap">
        <Link to={`/portfolio/${entry.slug}`} className="pf-cube" data-cursor="Open">
          <Media
            src={entry.cover?.src}
            alt={entry.cover?.caption}
            position={entry.cover?.position}
            label={entry.kicker}
            className="pf-cube-media"
          />
          <span className="label dim">{entry.kicker}</span>
          <h3>
            {entry.title}
            <span className="pf-card-arrow" aria-hidden>
              →
            </span>
          </h3>
          <p className="dim">{entry.summary}</p>
        </Link>
      </FadeUp>
    )
  }
  return (
    <FadeUp delay={delay} className="pf-card-wrap">
      <Link to={`/portfolio/${entry.slug}`} className="pf-card" data-cursor="Open">
        <Media
          src={entry.cover?.src}
          alt={entry.cover?.caption}
          position={entry.cover?.position}
          label={entry.kicker}
          mark={entry.title
            .split(/\s+/)
            .map((w) => w[0])
            .join('')
            .slice(0, 3)
            .toUpperCase()}
          className="pf-card-media"
        />
        <div className="pf-card-meta label">
          <span className="blue">{String(index + 1).padStart(2, '0')}</span>
          <span className="dim">{entry.period}</span>
        </div>
        <h3>
          {entry.title}
          <span className="pf-card-arrow" aria-hidden>
            →
          </span>
        </h3>
        {entry.role && (
          <div className="label pf-card-role">
            {entry.role}
            {entry.current && <span className="blue"> · ● Now</span>}
          </div>
        )}
        <p className="dim">{entry.summary}</p>
        <div className="pf-card-tags label dim">{entry.tags.slice(0, 4).join(' · ')}</div>
      </Link>
    </FadeUp>
  )
}
