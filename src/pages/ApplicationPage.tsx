import { Link, useParams } from 'react-router-dom'
import Page from '../components/Page'
import PageHero from '../components/PageHero'
import Media from '../components/Media'
import ProjectCard from '../components/ProjectCard'
import { FadeUp, SplitLines } from '../components/Reveal'
import { profile } from '../content'
import { entries, findEntry } from '../portfolio'
import { findApplication } from '../applications'
import { useNoIndex } from '../hooks/useNoIndex'
import NotFound from './NotFound'
import { heroLines } from '../heroLines'

// A tailored page for one job application, built from its entry in applications.ts.
export default function ApplicationPage() {
  const { slug } = useParams()
  const app = findApplication(slug)
  useNoIndex()
  if (!app) return <NotFound />

  const projects = app.projects.map(findEntry).filter((e) => e !== undefined)

  return (
    <Page title={`${app.company} · ${profile.firstName} ${profile.lastName}`}>
      <PageHero
        num="For"
        kicker={app.company}
        aside={[app.role, app.location, app.date].filter(Boolean).join(' · ')}
        lines={['Hej,', ...heroLines(app.company)]}
      />

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="about-intro">
          <FadeUp className="media-frame">
            <Media src={profile.headshot} alt={`${profile.firstName} ${profile.lastName}`} label="Portrait" mark="JP" parallax />
          </FadeUp>
          <div className="about-copy">
            <FadeUp>
              <p className="mono blue" style={{ marginBottom: 24 }}>
                {app.role} · {profile.firstName} {profile.lastName}
              </p>
            </FadeUp>
            {app.intro.map((p, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <p className={i === 0 ? 'lead' : 'dim'} style={{ marginTop: i ? 20 : 0, fontSize: i ? '1.1rem' : undefined }}>
                  {p}
                </p>
              </FadeUp>
            ))}
            <FadeUp delay={0.2}>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 40 }}>
                <a href={profile.cv} download className="btn">
                  Download CV <span className="arrow">↓</span>
                </a>
                <a href={`mailto:${profile.email}?subject=${encodeURIComponent(app.role)}`} className="btn btn--ghost">
                  Email me <span className="arrow">↗</span>
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <span className="label">Why</span>
          <span className="label dim">{app.company}</span>
        </div>
        <div className="beyond-cols">
          {app.why.map((w, i) => (
            <FadeUp key={w.heading} delay={i * 0.08} className="beyond-col">
              <span className="label blue">{w.heading}</span>
              <p>{w.text}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <span className="label">How I fit</span>
          <span className="label dim">What you asked for · where I've done it</span>
        </div>
        <SplitLines className="h-xl" lines={['The', <span key="k2" className="outline-text">fit</span>]} />
        <div className="fit-list">
          {app.fit.map((f, i) => {
            const e = findEntry(f.entry)
            return (
              <FadeUp key={f.requirement} delay={i * 0.05} className="fit-row">
                <span className="label blue">{String(i + 1).padStart(2, '0')}</span>
                <h3>{f.requirement}</h3>
                <div>
                  <p className="dim">{f.evidence}</p>
                  {e && (
                    <Link to={`/portfolio/${e.slug}`} className="label blue fit-link">
                      {e.title} →
                    </Link>
                  )}
                </div>
              </FadeUp>
            )
          })}
        </div>
      </section>

      {projects.length > 0 && (
        <section className="wrap section" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <span className="label">Relevant work</span>
            <span className="label dim">{projects.length} pages</span>
          </div>
          <div className="pf-grid">
            {projects.map((e, i) => (
              <ProjectCard key={e.slug} entry={e} index={entries.indexOf(e)} delay={i * 0.08} />
            ))}
          </div>
        </section>
      )}

      {app.closing && (
        <section className="wrap" style={{ paddingBottom: 'clamp(80px, 14vh, 180px)' }}>
          <FadeUp>
            <div className="callout">{app.closing}</div>
          </FadeUp>
        </section>
      )}
    </Page>
  )
}
