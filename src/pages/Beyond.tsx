import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'motion/react'
import Page from '../components/Page'
import PageHero from '../components/PageHero'
import Media from '../components/Media'
import { FadeUp, SplitLines } from '../components/Reveal'
import { adventures, beyond, profile } from '../content'

function DragRail() {
  const outer = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [limit, setLimit] = useState(0)
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
          style={{ x }}
          data-cursor="Drag"
        >
          {adventures.map((a, i) => (
            <article className="rail-card" key={a.title}>
              <Media src={a.image} label={`${a.title} · photo`} mark={String(i + 1).padStart(2, '0')} />
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }} className="label">
                <span className="blue">{a.kicker}</span>
                <span className="dim">{a.date}</span>
              </div>
              <h3>{a.title}</h3>
              <p className="dim">{a.text}</p>
            </article>
          ))}
        </motion.div>
      </div>
      <div className="rail-progress" aria-hidden>
        <motion.i style={{ scaleX: progress }} />
      </div>
    </>
  )
}

export default function Beyond() {
  return (
    <Page title={`Beyond work · ${profile.firstName} ${profile.lastName}`}>
      <PageHero
        num="04"
        kicker="Beyond work"
        aside="Drag to explore ↓"
        lines={['Off', <span key="k1" className="outline-text">the</span>, <span key="k2" className="blue">clock</span>]}
      />

      <section style={{ paddingBottom: 'clamp(80px, 14vh, 180px)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="label">A look at</span>
            <span className="label dim">[ Drag to explore ]</span>
          </div>
        </div>
        <DragRail />
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <SplitLines
          className="h-xl"
          lines={["Coffee's", <span key="k3" className="outline-text">on me</span>]}
        />
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
