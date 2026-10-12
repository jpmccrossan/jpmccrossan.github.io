import Page from '../components/Page'
import PageHero from '../components/PageHero'
import Media from '../components/Media'
import WhyHire from '../components/WhyHire'
import { FadeUp, SplitLines } from '../components/Reveal'
import { about, aboutHireReasons, profile } from '../content'

export default function About() {
  return (
    <Page title={`About · ${profile.firstName} ${profile.lastName}`}>
      <PageHero
        num="01"
        kicker="About"
        aside={`${profile.location} → Copenhagen`}
        lines={['The', <span className="blue">person</span>, <span className="outline-text">behind</span>]}
      />

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="about-intro">
          <FadeUp className="media-frame">
            <Media src={profile.headshot} alt={`${profile.firstName} ${profile.lastName}`} label="Portrait" mark="JP" parallax />
          </FadeUp>
          <div className="about-copy">
            <FadeUp>
              <p className="mono blue" style={{ marginBottom: 24 }}>
                {profile.tagline}
              </p>
              <p className="lead">{profile.statement}</p>
            </FadeUp>
            {about.intro.map((p, i) => (
              <FadeUp key={i} delay={0.08 * (i + 1)}>
                <p className="dim" style={{ marginTop: 20, fontSize: '1.1rem' }}>
                  {p}
                </p>
              </FadeUp>
            ))}
            <FadeUp delay={0.25}>
              <div className="callout">{about.highlight}</div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div style={{ marginTop: 40 }}>
                <div className="label dim" style={{ marginBottom: 14 }}>
                  How I work
                </div>
                <div className="tags">
                  {about.howIWork.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: 32 }}>
                <div className="label dim" style={{ marginBottom: 8 }}>
                  Languages
                </div>
                <p>{about.languages}</p>
              </div>
              <a href={profile.cv} download className="btn" style={{ marginTop: 40 }}>
                Download CV <span className="arrow">↓</span>
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      <WhyHire
        reasons={aboutHireReasons}
        lines={['AI that', <span className="outline-text">people</span>, <span className="blue">use</span>]}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="label">The route here</span>
            <span className="label dim">04 chapters</span>
          </div>
          <SplitLines
            className="h-xl"
            lines={['Four', <span className="outline-text">chapters</span>]}
          />
        </div>
        <div className="chapters" style={{ marginTop: 'clamp(40px, 8vh, 80px)' }}>
          {about.chapters.map((c, i) => (
            <FadeUp key={c.num} delay={i * 0.08} className="chapter">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="num">{c.num}</span>
                <span className="label dim">{c.years}</span>
              </div>
              {c.image && <Media src={c.image} alt={c.title} label={c.title} />}
              <h3>{c.title}</h3>
              <p className="dim">{c.text}</p>
            </FadeUp>
          ))}
        </div>
      </section>
    </Page>
  )
}
