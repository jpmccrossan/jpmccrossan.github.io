import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useTransform } from 'motion/react'
import Page from '../components/Page'
import PageHero from '../components/PageHero'
import Media from '../components/Media'
import Gallery from '../components/Gallery'
import { FadeUp, SplitLines, WordReveal } from '../components/Reveal'
import { adventures, beyond, personal, profile } from '../content'
import { navNum } from '../navNum'

// Draggable rail of adventures (from the old Beyond page). Cards with `to` link through.
function DragRail() {
  const outer = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [limit, setLimit] = useState(0)
  const dragged = useRef(false)
  const x = useMotionValue(0)
  const progress = useTransform(x, (v) => (limit ? Math.min(1, Math.max(0, -v / limit)) : 0))

  useEffect(() => {
    const measure = () => {
      if (!outer.current || !track.current) return
      setLimit(Math.max(0, track.current.scrollWidth - outer.current.clientWidth))
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (track.current) ro.observe(track.current)
    return () => ro.disconnect()
  }, [])

  return (
    <>
      <div className="rail" ref={outer}>
        <motion.div
          ref={track}
          className="rail-track"
          drag="x"
          dragConstraints={{ left: -limit, right: 0 }}
          dragElastic={0.12}
          dragTransition={{ power: 0.25, timeConstant: 300 }}
          onDragStart={() => (dragged.current = true)}
          onDragEnd={() => setTimeout(() => (dragged.current = false), 0)}
          style={{ x }}
          data-cursor="Drag"
        >
          {adventures.map((a, i) => {
            const card = (
              <>
                <Media src={a.image} label={`${a.title} · photo`} mark={String(i + 1).padStart(2, '0')} />
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }} className="label">
                  <span className="blue">{a.kicker}</span>
                  <span className="dim">{a.date}</span>
                </div>
                <h3>{a.title}</h3>
                <p className="dim">{a.text}</p>
                {a.to && <span className="label blue rail-more">Read more →</span>}
              </>
            )
            return a.to ? (
              <Link
                key={a.title}
                to={a.to}
                className="rail-card"
                draggable={false}
                onClick={(e) => dragged.current && e.preventDefault()}
              >
                {card}
              </Link>
            ) : (
              <article className="rail-card" key={a.title}>
                {card}
              </article>
            )
          })}
        </motion.div>
      </div>
      <div className="rail-progress" aria-hidden>
        <motion.i style={{ scaleX: progress }} />
      </div>
    </>
  )
}

export default function About() {
  return (
    <Page title={`About · ${profile.firstName} ${profile.lastName}`}>
      <PageHero
        num={navNum('/about')}
        kicker="About me"
        aside={`${profile.location} → Copenhagen`}
        lines={['Outside work']}
      />

      {/* What makes me */}
      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <span className="label">What I enjoy</span>
        </div>
        <WordReveal className="statement" text={personal.intro} />
        <div className="values">
          {personal.values.map((v, i) => (
            <FadeUp key={v.title} delay={i * 0.08} className="value">
              <span className="label blue">
                {String(i + 1).padStart(2, '0')} · {v.label}
              </span>
              <h3>{v.title}</h3>
              <p className="dim">{v.text}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Adventures rail */}
      <section style={{ paddingBottom: 'clamp(80px, 14vh, 180px)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="label">Off the clock</span>
            <span className="label dim">Drag to explore</span>
          </div>
        </div>
        <DragRail />
      </section>

      {/* Bilbao → Venice */}
      <section id="cycling" className="wrap" style={{ paddingBottom: 'clamp(80px, 14vh, 180px)' }}>
        <div className="section-head">
          <span className="label">Solo by bike · {personal.cycling.year}</span>
          <span className="label dim">{personal.cycling.photos.length} photos</span>
        </div>
        <SplitLines
          className="h-xl"
          lines={['Bilbao', <span key="k6" className="outline-text">→ Venice</span>]}
        />
        <div className="story">
          {personal.cycling.text.map((p, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <p className={i === 0 ? 'lead' : 'dim'}>{p}</p>
            </FadeUp>
          ))}
          <FadeUp delay={0.12}>
            <p className="label dim story-route">{personal.cycling.route}</p>
          </FadeUp>
        </div>
        <Gallery images={personal.cycling.photos} layout="reel" />
      </section>

      {/* Martial arts */}
      <section className="wrap" style={{ paddingBottom: 'clamp(80px, 14vh, 180px)' }}>
        <div className="section-head">
          <span className="label">Martial arts</span>
          <span className="label dim">Taekwondo · Kickboxing · Wrestling · BJJ</span>
        </div>
        <SplitLines className="h-xl" lines={['On the', <span key="k7" className="blue">mats</span>]} />
        <div className="story">
          {personal.combat.text.map((p, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <p className={i === 0 ? 'lead' : 'dim'}>{p}</p>
            </FadeUp>
          ))}
        </div>
        <Gallery images={personal.combat.photos} layout="reel" />
      </section>

      {/* Landscape design */}
      <section className="wrap" style={{ paddingBottom: 'clamp(80px, 14vh, 180px)' }}>
        <div className="section-head">
          <span className="label">Before software · 2018 – 2023</span>
          <span className="label dim">{personal.design.photos.length} boards</span>
        </div>
        <SplitLines className="h-xl" lines={['Landscape architecture']} />
        <div className="story">
          {personal.design.text.map((p, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <p className={i === 0 ? 'lead' : 'dim'}>{p}</p>
            </FadeUp>
          ))}
        </div>
        <Gallery images={personal.design.photos} layout="reel" />
      </section>

      {/* Support work and Italy, 2021 */}
      <section className="wrap" style={{ paddingBottom: 'clamp(80px, 14vh, 180px)' }}>
        <div className="section-head">
          <span className="label">{personal.italy.year}</span>
        </div>
        <SplitLines className="h-xl" lines={[personal.italy.title]} />
        <div className="story">
          {personal.italy.text.map((p, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <p className={i === 0 ? 'lead' : 'dim'}>{p}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Coffee */}
      <section className="wrap section" style={{ paddingTop: 0 }}>
        <SplitLines className="h-xl" lines={["Coffee's", <span key="k9" className="outline-text">on me</span>]} />
        <div className="beyond-cols" style={{ marginTop: 'clamp(40px, 8vh, 80px)' }}>
          {beyond.map((b, i) => (
            <FadeUp key={b.label} delay={i * 0.08} className="beyond-col">
              <span className="label blue">{b.label}</span>
              <p>{b.text}</p>
            </FadeUp>
          ))}
        </div>
      </section>
    </Page>
  )
}
