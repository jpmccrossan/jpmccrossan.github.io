import { useRef, useState, useLayoutEffect } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { research } from '../content'

// Pinned section: vertical scroll drives a horizontal filmstrip of the research.
export default function Research() {
  const section = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return
      setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth))
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (track.current) ro.observe(track.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  const x = useTransform(smooth, [0, 1], [0, -distance])
  const bar = useTransform(smooth, [0, 1], [0, 1])

  return (
    <section ref={section} className="research" style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="research-sticky">
        <div className="research-head wrap">
          <span className="chip chip--blue label">
            <span className="dot dot--pulse" />
            {research.kicker}
          </span>
          <span className="label dim">Scroll →</span>
        </div>
        <motion.div ref={track} className="research-track" style={{ x }}>
          <div className="research-intro">
            <h2 className="h-xl">
              ML VR
              <br />
              <span className="outline-text">kick</span>
              <span className="blue">boxing</span>
            </h2>
            <p className="lead dim">{research.summary}</p>
            <div className="tags">
              {research.venues.map((v) => (
                <span key={v} className="tag tag--solid">
                  {v}
                </span>
              ))}
            </div>
          </div>
          {research.slides.map((s, i) => (
            <figure key={s.image} className={`research-slide${i % 2 ? ' low' : ''}`}>
              <div className={`research-img${s.contain ? ' contain' : ''}`}>
                <img src={s.image} alt={s.caption} loading="lazy" style={{ objectPosition: s.position }} />
              </div>
              <figcaption className="label">
                <span className="blue">{String(i + 1).padStart(2, '0')}</span> {s.caption}
              </figcaption>
            </figure>
          ))}
        </motion.div>
        <div className="research-progress wrap" aria-hidden>
          <motion.i style={{ scaleX: bar }} />
        </div>
      </div>
    </section>
  )
}
