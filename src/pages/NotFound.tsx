import { Link } from 'react-router-dom'
import Page from '../components/Page'
import PageHero from '../components/PageHero'

export default function NotFound() {
  return (
    <Page title="404 · Not found">
      <PageHero num="404" kicker="Not found" lines={['Lost', <span key="k1" className="outline-text">signal</span>]} />
      <section className="wrap" style={{ paddingBottom: 120 }}>
        <Link to="/" className="btn">
          Back home <span className="arrow">→</span>
        </Link>
      </section>
    </Page>
  )
}
