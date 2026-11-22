import { Link, useParams } from 'react-router-dom'
import Page from '../components/Page'
import PageHero from '../components/PageHero'
import Gallery, { type GalleryImage } from '../components/Gallery'
import ProjectCard from '../components/ProjectCard'
import { FadeUp } from '../components/Reveal'
import { profile } from '../content'
import { entries, findEntry } from '../portfolio'
import NotFound from './NotFound'
import { heroLines } from '../heroLines'

/** Most images a project page shows, cover included. */
const MAX_IMAGES = 9

// One page per portfolio entry, built from its data in src/portfolio/entries/.
// Flow: title → key facts (dates, role, tools, links) → stats → about + main image →
// sections, each paired with an image on alternating sides → a short reel of any remaining images.
export default function ProjectPage() {
  const { slug } = useParams()
  const entry = findEntry(slug)
  if (!entry) return <NotFound />

  const idx = entries.indexOf(entry)
  const next = entries[(idx + 1) % entries.length]
  const related = (entry.related ?? []).map(findEntry).filter((e) => e !== undefined)

  // Images: the cover first, then gallery images (no repeats), capped at MAX_IMAGES.
  const extra: GalleryImage[] = (entry.gallery?.images ?? [])
    .filter((img) => img.src !== entry.cover?.src)
    .slice(0, MAX_IMAGES - (entry.cover ? 1 : 0))
  const sectionImages = extra.slice(0, entry.sections.length)
  const moreImages = extra.slice(entry.sections.length)

  return (
    <Page title={`${entry.title} · ${profile.firstName} ${profile.lastName}`}>
      <PageHero
        num={entry.kind === 'work' ? 'Work' : entry.kind === 'personal' ? 'Personal project' : 'Study'}
        kicker={entry.kicker}
        aside={
          <Link to="/portfolio" className="pf-back">
            ← All work
          </Link>
        }
        lines={heroLines(entry.title)}
      />

      {/* Key facts, right under the title */}
      <section className="wrap pp-facts">
        <FadeUp className="pp-meta">
          <span className="pp-meta-item">
            <span className="label dim">When</span>
            {entry.period}
          </span>
          {entry.role && (
            <span className="pp-meta-item">
              <span className="label dim">Role</span>
              {entry.role}
              {entry.current && <span className="blue"> · ● Now</span>}
            </span>
          )}
          {entry.links && (
            <span className="pp-links">
              {entry.links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`btn${i ? ' btn--ghost' : ''}`}
                  download={l.download ? '' : undefined}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  {l.label} <span className="arrow">{l.download ? '↓' : '↗'}</span>
                </a>
              ))}
            </span>
          )}
        </FadeUp>
        <FadeUp delay={0.05} className="tags pp-tags">
          {entry.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </FadeUp>
        {entry.stats && (
          <div className="pp-stats">
            {entry.stats.map((s, i) => (
              <FadeUp key={s.label} delay={0.08 + i * 0.05} className="pp-stat">
                <div className="pp-stat-num">{s.value}</div>
                <div className="pp-stat-label dim">{s.label}</div>
              </FadeUp>
            ))}
          </div>
        )}
      </section>

      {/* About, in a box, beside the main image */}
      <section className={`wrap pp-overview${entry.cover ? '' : ' no-image'}`}>
        <FadeUp className="pp-about">
          <span className="label dim">About</span>
          {entry.intro.map((p, i) => (
            <p key={i} className={i === 0 ? 'pp-about-lead' : 'dim'}>
              {p}
            </p>
          ))}
          {entry.note && <p className="pp-note label dim">{entry.note}</p>}
        </FadeUp>
        {entry.cover && (
          <FadeUp delay={0.08} className="pp-cover">
            <Gallery images={[entry.cover]} layout="single" />
          </FadeUp>
        )}
      </section>

      {/* Sections, each with an image on alternating sides */}
      <section className="wrap pp-sections">
        {entry.sections.map((b, i) => {
          const img = sectionImages[i]
          return (
            <FadeUp key={b.heading} className={`pp-section${img ? '' : ' no-image'}${i % 2 ? ' flip' : ''}`}>
              <div className="pp-section-text">
                <span className="label blue">
                  {String(i + 1).padStart(2, '0')}
                  {b.kicker && <span className="dim"> · {b.kicker}</span>}
                </span>
                <h2>{b.heading}</h2>
                {b.body?.map((p) => (
                  <p key={p} className="dim">
                    {p}
                  </p>
                ))}
                {b.points && (
                  <ul className="pp-points">
                    {b.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
                {b.tags && <div className="label dim pp-section-tags">{b.tags.join(' · ')}</div>}
              </div>
              {img && (
                <div className="pp-section-img">
                  <Gallery images={[img]} layout="single" />
                </div>
              )}
            </FadeUp>
          )
        })}
      </section>

      {moreImages.length > 0 && (
        <section className="wrap pp-more">
          <div className="section-head">
            <span className="label">More from {entry.title}</span>
            {entry.gallery?.note && <span className="label dim">{entry.gallery.note}</span>}
          </div>
          <Gallery images={moreImages} layout="reel" />
        </section>
      )}

      {related.length > 0 && (
        <section className="wrap pp-related">
          <div className="section-head">
            <span className="label">Related</span>
          </div>
          <div className="pf-grid pf-grid--home">
            {related.map((e, i) => (
              <ProjectCard key={e.slug} entry={e} index={entries.indexOf(e)} delay={i * 0.06} variant="cube" />
            ))}
          </div>
        </section>
      )}

      <section className="wrap" style={{ paddingBottom: 'clamp(80px, 14vh, 160px)' }}>
        <Link to={`/portfolio/${next.slug}`} className="pf-next" data-cursor="Next">
          <span className="label dim">Next · {next.kicker}</span>
          <span className="h-xl">
            {next.title} <span className="blue">→</span>
          </span>
        </Link>
      </section>
    </Page>
  )
}
