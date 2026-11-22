import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'motion/react'
import Page from '../components/Page'
import DotField from '../components/DotField'
import Media from '../components/Media'
import ProjectCard from '../components/ProjectCard'
import OfferStack from '../components/OfferStack'
import { FadeUp, SplitLines } from '../components/Reveal'
import { home, profile } from '../content'
import { entries, findEntry } from '../portfolio'

// Featured on the home page, in this order
const FEATURED = ['vr-kickboxing', 'ashlar', 'project-hack-27']
  .map(findEntry)
  .filter((e) => e !== undefined)

export default function Home({ ready }: { ready: boolean }) {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.4])

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  })

  return (
    <Page title={`${profile.firstName} ${profile.lastName} · AI Engineering`}>
      <section className="hero" ref={heroRef}>
        <motion.div className="hero-glow" style={{ scale: glowScale }} aria-hidden />
        <DotField className="hero-canvas" />

        <motion.div className="hero-grid" style={{ y: contentY, opacity: contentOpacity }}>
          <div className="hero-inner">
            <motion.span className="chip chip--blue label" {...fade(0.3)}>
              <span className="dot dot--pulse" />
              {profile.status}
            </motion.span>

            <div className="hero-id">
              <div className="hero-id-text">
                <SplitLines
                  as="h1"
                  className="hero-name"
                  immediate
                  play={ready}
                  delay={0.1}
                  lines={[
                    <span key="hej">
                      Hej, I'm <span className="blue">JP</span>
                    </span>,
                  ]}
                />
                <motion.p className="hero-fullname" {...fade(0.4)}>
                  {profile.firstName} {profile.lastName}
                </motion.p>
                <motion.p className="hero-tagline mono" {...fade(0.5)}>
                  {profile.tagline}
                </motion.p>
              </div>
              <motion.div className="hero-photo" {...fade(0.45)}>
                <Media src={profile.headshot} alt={`${profile.firstName} ${profile.lastName}`} label="Headshot" eager />
              </motion.div>
            </div>

            <motion.p className="hero-statement dim" {...fade(0.6)}>
              {home.intro}
            </motion.p>
            <motion.p className="hero-statement dim" {...fade(0.63)}>
              {home.personal}
            </motion.p>

            <motion.div className="hero-traits" {...fade(0.65)}>
              {home.traits.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div className="hero-actions" {...fade(0.7)}>
              <Link to="/portfolio" className="btn">
                See my work <span className="arrow">→</span>
              </Link>
            </motion.div>
          </div>
          <OfferStack ready={ready} />
        </motion.div>
      </section>

      <section className="section wrap">
        <div className="section-head">
          <span className="label">Portfolio</span>
        </div>
        <SplitLines className="h-xl" stack lines={['My', <span key="k0">work</span>]} />
        <div className="pf-grid pf-grid--home">
          {FEATURED.map((e, i) => (
            <ProjectCard
              key={e.slug}
              entry={e}
              index={entries.indexOf(e)}
              delay={(i % 3) * 0.06}
              variant="cube"
            />
          ))}
        </div>
        <FadeUp>
          <Link to="/portfolio" className="btn" style={{ marginTop: 'clamp(32px, 6vh, 56px)' }}>
            See all my work <span className="arrow">→</span>
          </Link>
        </FadeUp>
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <span className="label">Outside work</span>
        </div>
        <SplitLines className="h-xl" stack lines={['About', 'me']} />
        <div className="pf-grid pf-grid--home pf-grid--four">
          {home.about.map((t, i) => (
            <FadeUp key={t.title} delay={i * 0.06} className="pf-card-wrap">
              <Link to="/about" className="pf-cube" data-cursor="Open">
                <Media src={t.image || undefined} alt={t.title} position={t.position} label={t.kicker} mark={t.image ? undefined : 'DK'} className="pf-cube-media" />
                <span className="label dim">{t.kicker}</span>
                <h3>
                  {t.title}
                  <span className="pf-card-arrow" aria-hidden>
                    →
                  </span>
                </h3>
                <p className="dim">{t.text}</p>
              </Link>
            </FadeUp>
          ))}
        </div>
        <FadeUp>
          <Link to="/about" className="btn" style={{ marginTop: 'clamp(32px, 6vh, 56px)' }}>
            More about me <span className="arrow">→</span>
          </Link>
        </FadeUp>
      </section>

    </Page>
  )
}
