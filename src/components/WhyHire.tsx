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
type Reason = { stat: string; title: string; text: string; tags: string[]; wide?: boolean; certs?: string[] }

type Props = {
  reasons?: Reason[]
  lines?: ReactNode[]
  /** small label above the heading */
  label?: string
  /** anchor id, so other sections can jump here */
  id?: string
  /** top padding: the default drops it, for use straight after another section */
  padTop?: boolean
  /** one quiet row of small tiles, no big heading or tags (used on the home page) */
  compact?: boolean
}

export default function WhyHire({
  reasons = hireReasons,
  lines = ['Proof,', <span key="k1" className="outline-text">not</span>, <span key="k2" className="blue">promises</span>],
  label = 'Why hire me',
  id,
  padTop = false,
  compact = false,
}: Props) {
  return (
    <section
      id={id}
      className={`wrap pf-section ${compact ? 'offer' : 'section'}`}
      style={padTop || compact ? undefined : { paddingTop: 0 }}
    >
      <div className="section-head">
        <span className="label">{label}</span>
        {!compact && <span className="label dim">The short version</span>}
      </div>
      {!compact && <SplitLines className="h-xl" lines={lines} />}
      <div className={`bento${compact ? ' bento--compact' : ''}`}>
        {reasons.map((r, i) => (
          <motion.article
            key={r.title}
            className={`bento-card${r.wide ? ' wide' : ''}`}
            onPointerMove={spotlight}
            initial={compact ? { opacity: 0, y: 24 } : { opacity: 0, y: 60, rotateX: -12 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-5% 0px' }}
            transition={{ duration: compact ? 0.8 : 1, ease: [0.16, 1, 0.3, 1], delay: (compact ? i : i % 3) * 0.06 }}
          >
            <div className="bento-inner">
              <div className="bento-top">
                <span className="label dim">{String(i + 1).padStart(2, '0')}</span>
                <span className="bento-stat">{r.stat}</span>
              </div>
              <h3>{r.title}</h3>
              <p className="dim">{r.text}</p>
              {r.certs && (
                <div className="bento-certs">
                  <span className="label">Microsoft Learn</span>
                  <ul>
                    {r.certs.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}
              {!compact && (
                <div className="bento-tags">
                  {r.tags.map((t) => (
                    <span key={t} className="label">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
