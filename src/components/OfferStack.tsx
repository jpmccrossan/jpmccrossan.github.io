import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { hireReasons } from '../content'

const EASE = [0.76, 0, 0.24, 1] as const

// "What I offer" as a stack of slim rows beside the hero. Click a row to open its detail and courses.
export default function OfferStack({ ready = true }: { ready?: boolean }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="offer-stack" id="offer">
      <span className="label dim offer-label">What I offer</span>
      {hireReasons.map((r, i) => {
        const isOpen = open === i
        return (
          <motion.div
            key={r.title}
            className={`offer-item${isOpen ? ' open' : ''}`}
            initial={{ opacity: 0, x: 24 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="offer-head" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
              <span className="offer-stat">{r.stat}</span>
              <span className="offer-title">{r.title}</span>
              <span className="offer-toggle" aria-hidden>
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="offer-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <div className="offer-body-inner">
                    <p className="dim">{r.text}</p>
                    {'certs' in r && r.certs && (
                      <div className="bento-certs">
                        <span className="label">Microsoft Learn</span>
                        <ul>
                          {r.certs.map((c) => (
                            <li key={c}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
