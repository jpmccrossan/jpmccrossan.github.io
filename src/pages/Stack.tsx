import { useEffect, useState, type PointerEvent } from 'react'
import Page from '../components/Page'
import PageHero from '../components/PageHero'
import Marquee from '../components/Marquee'
import { FadeUp, SplitLines } from '../components/Reveal'
import { profile, skills } from '../content'

const SCRIPT = `# pipeline.py
import pandas as pd
from sqlalchemy import create_engine

def load(raw: pd.DataFrame) -> pd.DataFrame:
    clean = validate(raw)        # checked
    audit.log(clean, source=raw) # traceable
    return clean                 # trustworthy

engine = create_engine(DB_URL)
load(extract()).to_sql("facts", engine)`

function spotlight(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function Typewriter() {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (n >= SCRIPT.length) return
    const t = setTimeout(() => setN((v) => v + 1), SCRIPT[n] === '\n' ? 120 : 18)
    return () => clearTimeout(t)
  }, [n])

  const text = SCRIPT.slice(0, n)
  const html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/(#[^\n]*)|("[^"\n]*")|\b(import|from|def|return)\b/g, (m, c, str) =>
      `<span class="${c ? 'c' : str ? 's' : 'k'}">${m}</span>`,
    )
  return (
    <pre>
      <span dangerouslySetInnerHTML={{ __html: html }} />
      <span className="caret" />
    </pre>
  )
}

export default function Stack() {
  const total = skills.reduce((n, g) => n + g.items.length, 0)
  return (
    <Page title={`Stack · ${profile.firstName} ${profile.lastName}`}>
      <PageHero
        num="03"
        kicker="Skills & tools"
        aside={`${total} tools · 5 disciplines`}
        lines={['The', <span key="k1" className="blue">stack</span>]}
      />

      <section className="wrap" style={{ paddingBottom: 'clamp(80px, 14vh, 180px)' }}>
        <div className="stack-grid">
          {skills.map((g, i) => (
            <FadeUp
              key={g.group}
              delay={i * 0.06}
              className={`stack-card${g.primary ? ' primary' : ''}`}
              onPointerMove={spotlight}
            >
                <span className="spot" aria-hidden />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="label">{String(i + 1).padStart(2, '0')}</span>
                  <span className="count">{String(g.items.length).padStart(2, '0')}</span>
                </div>
                <h3>{g.group}</h3>
                <div className="tags" style={{ marginTop: 'auto' }}>
                  {g.items.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
            </FadeUp>
          ))}
          <FadeUp className="stack-card" delay={0.3}>
            <div className="terminal" style={{ margin: -8 }}>
              <div className="terminal-bar label">
                <i />
                <i />
                <i />
                <span className="dim" style={{ marginLeft: 8 }}>
                  ~/trustworthy-ai
                </span>
              </div>
              <Typewriter />
            </div>
          </FadeUp>
        </div>
      </section>

      <Marquee items={skills.flatMap((g) => g.items).slice(0, 14)} reverse speed={50} />

      <section className="wrap section">
        <SplitLines
          className="h-xl"
          lines={['Clean.', <span key="k2" className="outline-text">Checked.</span>, <span key="k3" className="blue">Trusted.</span>]}
        />
      </section>
    </Page>
  )
}
