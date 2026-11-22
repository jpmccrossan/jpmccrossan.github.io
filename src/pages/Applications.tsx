import { Link } from 'react-router-dom'
import Page from '../components/Page'
import PageHero from '../components/PageHero'
import { FadeUp } from '../components/Reveal'
import { profile } from '../content'
import { listedApplications } from '../applications'
import { useNoIndex } from '../hooks/useNoIndex'

export default function Applications() {
  useNoIndex()
  return (
    <Page title={`Applications · ${profile.firstName} ${profile.lastName}`}>
      <PageHero
        num="A"
        kicker="Applications"
        aside="One page per role"
        lines={['For', <span key="k1" className="blue">you</span>]}
      />
      <section className="wrap" style={{ paddingBottom: 'clamp(80px, 14vh, 180px)' }}>
        <FadeUp>
          <p className="lead" style={{ maxWidth: '40ch' }}>
            Pages written for specific roles: why the company, why me, and the work that backs it up.
          </p>
        </FadeUp>
        {listedApplications.length === 0 && (
          <FadeUp>
            <p className="dim" style={{ marginTop: 32, maxWidth: '46ch' }}>
              Each application has its own page, shared directly with the company. If you were sent a link, it will take
              you straight there.
            </p>
          </FadeUp>
        )}
        <ul className="index-list" style={{ marginTop: 'clamp(40px, 8vh, 80px)' }}>
          {listedApplications.map((a, i) => (
            <li key={a.slug}>
              <Link to={`/applications/${a.slug}`} className="index-row" data-cursor="Open">
                <span className="label">{String(i + 1).padStart(2, '0')}</span>
                <h3>{a.company}</h3>
                <span style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                  <span className="desc dim">
                    {a.role}
                    {a.location ? ` · ${a.location}` : ''}
                  </span>
                  <span className="arrow-big">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  )
}
