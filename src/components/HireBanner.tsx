import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'motion/react'
import Magnetic from './Magnetic'
import { profile } from '../content'

// A blue circle grows out of the dark as you scroll, revealing the hire pitch.
export default function HireBanner() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const radius = useTransform(scrollYProgress, [0, 1], [0, 150])
  const clipPath = useTransform(radius, (r) => `circle(${r}% at 50% 50%)`)
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 0])

  return (
    <section ref={ref} className="hire">
      <motion.div className="hire-bg" style={{ clipPath }} aria-hidden />
      <motion.div className="hire-content" style={{ scale, rotate }}>
        <span className="chip label" style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
          <span className="dot dot--pulse" style={{ color: 'var(--blue-hot)' }} />
          {profile.status}
        </span>
        <h2 className="h-mega hire-title">
          Available
          <br />
          <span className="outline-text">for hire</span>
        </h2>
        <p className="lead">
          Data science, ML and backend Python roles in Copenhagen. One month's notice, accommodation sorted.
        </p>
        <div className="hire-actions">
          <Magnetic>
            <Link to="/contact" className="hire-orb" data-cursor="Hire">
              Get in
              <br />
              touch
            </Link>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href={profile.cv} download className="btn">
              Download CV <span className="arrow">↓</span>
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  )
}
