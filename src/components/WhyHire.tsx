import type { PointerEvent, ReactNode } from 'react'
import { motion } from 'motion/react'
import { hireReasons } from '../content'
import { SplitLines } from './Reveal'

function spotlight(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

// Bento grid of proof points, each card with a cursor-tracking glow border.
type Props = {
  reasons?: typeof hireReasons
  lines?: ReactNode[]
}

export default function WhyHire({
  reasons = hireReasons,
  lines = ['Proof,', <span key="k1" className="outline-text">not</span>, <span key="k2" className="blue">promises</span>],
}: Props) {
  return (
    <section className="wrap section" style={{ paddingTop: 0 }}>
      <div className="section-head">
        <span className="label">Why hire me</span>
        <span className="label dim">[ The short version ]</span>
      </div>
      <SplitLines className="h-xl" lines={lines} />
      <div className="bento">
        {reasons.map((r, i) => (
          <motion.article
            key={r.title}
            className={`bento-card${r.wide ? ' wide' : ''}`}
            onPointerMove={spotlight}
            initial={{ opacity: 0, y: 60, rotateX: -12 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.08 }}
          >
            <div className="bento-inner">
              <div className="bento-top">
                <span className="label dim">{String(i + 1).padStart(2, '0')}</span>
                <span className="bento-stat">{r.stat}</span>
              </div>
              <h3>{r.title}</h3>
              <p className="dim">{r.text}</p>
              <div className="bento-tags">
                {r.tags.map((t) => (
                  <span key={t} className="label">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
