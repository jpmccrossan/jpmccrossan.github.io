import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'motion/react'
import Page from '../components/Page'
import DotField from '../components/DotField'
import Marquee from '../components/Marquee'
import Counter from '../components/Counter'
import { FadeUp, SplitLines, WordReveal } from '../components/Reveal'
import { marquee, nav, profile, stats } from '../content'

const teasers: Record<string, string> = {
  '/about': 'From landscape architecture to data science, and on to Copenhagen.',
  '/work': 'Nuclear-grade backends, production ETL and NLP pipelines.',
  '/stack': 'Python, SQL, ML, cloud. The tools I reach for.',
  '/beyond': 'Jiu-jitsu, ultra-marathons and Bilbao to Venice by bike.',
  '/contact': "Coffee's on me. Let's talk.",
}

export default function Home({ ready }: { ready: boolean }) {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const nameY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const nameOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.6])

  return (
    <Page title={`${profile.firstName} ${profile.lastName} · Data Science`}>
      <section className="hero" ref={heroRef}>
        <motion.div className="hero-glow" style={{ scale: glowScale }} aria-hidden />
        <DotField className="hero-canvas" />

        <motion.div
          className="hero-meta"
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          <span className="mono blue">{profile.tagline}</span>
          <span className="chip chip--blue label">
            <span className="dot dot--pulse" />
            {profile.status}
          </span>
        </motion.div>

        <motion.div style={{ y: nameY, opacity: nameOpacity }}>
          <SplitLines
            as="h1"
            className="h-mega hero-name"
            immediate
            play={ready}
            delay={0.1}
            stagger={0.12}
            lines={[
              <span className="row">
                <span>James</span>
                <span className="outline-text">—</span>
              </span>,
              <span className="row row--mid">
                <span className="outline-text">Patrick</span>
              </span>,
              <span className="row row--end">
                <span className="blue-text">McCrossan</span>
              </span>,
            ]}
          />
        </motion.div>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <p style={{ maxWidth: '46ch' }} className="dim">
            {profile.statement}
          </p>
          <div className="scroll-cue label">
            Scroll <i />
          </div>
        </motion.div>
      </section>

      <Marquee items={marquee} />

      <section className="section wrap">
        <div className="statement-grid">
          <div>
            <span className="label dim">[ Hej, I'm JP ]</span>
          </div>
          <div>
            <WordReveal
              className="statement"
              text="I build data systems that people can actually trust. Traceable, tested, and explained in plain English."
            />
            <FadeUp delay={0.1} className="lead dim" as="div">
              <p style={{ marginTop: 40, maxWidth: '38ch' }}>
                Backend Python developer in a highly regulated industry. Next chapter:{' '}
                <span className="blue">Copenhagen</span>.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 40 }}>
                <Link to="/about" className="btn">
                  My story <span className="arrow">→</span>
                </Link>
                <Link to="/work" className="btn btn--ghost">
                  The work <span className="arrow">→</span>
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 'clamp(80px, 14vh, 180px)' }}>
        <div className="stats">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.08} className="stat">
              <div className="stat-num">
                <Counter to={s.value} />
                {s.suffix && <small>{s.suffix}</small>}
              </div>
              <div className="label dim" style={{ marginTop: 10 }}>
                {s.label}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 'clamp(80px, 14vh, 180px)' }}>
        <div className="section-head">
          <span className="label">Index</span>
          <span className="label dim">05 sections</span>
        </div>
        <SplitLines
          className="h-xl"
          lines={['A look', <span className="outline-text">around</span>]}
        />
        <ul className="index-list" style={{ marginTop: 'clamp(40px, 8vh, 80px)' }}>
          {nav.map((n) => (
            <li key={n.to}>
              <Link to={n.to} className="index-row" data-cursor="Open">
                <span className="label">{n.num}</span>
                <h3>{n.label}</h3>
                <span style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                  <span className="desc dim">{teasers[n.to]}</span>
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
