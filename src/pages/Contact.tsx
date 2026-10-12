import { useEffect, useState } from 'react'
import Page from '../components/Page'
import PageHero from '../components/PageHero'
import { FadeUp } from '../components/Reveal'
import { profile } from '../content'

function Clock({ zone, label }: { zone: string; label: string }) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  const time = now.toLocaleTimeString('en-GB', { timeZone: zone, hour: '2-digit', minute: '2-digit', second: '2-digit' })
  return (
    <div>
      <div className="label dim">{label}</div>
      <div className="h-lg clock" style={{ marginTop: 8 }}>
        {time}
      </div>
    </div>
  )
}

export default function Contact() {
  const links = [
    { label: 'Email', href: `mailto:${profile.email}` },
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'GitHub', href: profile.github },
  ]
  return (
    <Page title={`Contact · ${profile.firstName} ${profile.lastName}`}>
      <PageHero
        num="05"
        kicker="Contact"
        aside="Open to roles in Copenhagen"
        lines={["Let's", <span className="blue">talk</span>]}
      />

      <section className="wrap" style={{ paddingBottom: 'clamp(80px, 14vh, 180px)' }}>
        <FadeUp>
          <div className="label dim" style={{ marginBottom: 16 }}>
            Drop me a line
          </div>
          <a className="contact-email" href={`mailto:${profile.email}`} data-cursor="Email">
            {profile.email.split('@')[0]}
            <wbr />@{profile.email.split('@')[1]}
          </a>
        </FadeUp>

        <ul className="contact-links" style={{ marginTop: 'clamp(56px, 10vh, 120px)' }}>
          {links.map((l, i) => (
            <FadeUp as="li" key={l.label} delay={i * 0.06}>
              <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span>
                  <span className="label dim" style={{ marginRight: 20 }}>
                    0{i + 1}
                  </span>
                  {l.label}
                </span>
                <span>↗</span>
              </a>
            </FadeUp>
          ))}
        </ul>

        <FadeUp>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 32,
              marginTop: 'clamp(56px, 10vh, 120px)',
            }}
          >
            <Clock zone="Europe/London" label="Derby, UK · now" />
            <Clock zone="Europe/Copenhagen" label="Copenhagen · soon" />
            <div>
              <div className="label dim">Notice period</div>
              <div className="h-lg" style={{ marginTop: 8 }}>
                1 <span className="blue">month</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
    </Page>
  )
}
