import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { SplitLines } from './Reveal'

export default function PageHero({
  num,
  kicker,
  lines,
  aside,
}: {
  num: string
  kicker: string
  lines: ReactNode[]
  aside?: ReactNode
}) {
  return (
    <section className="page-hero">
      <div className="dots-bg" aria-hidden />
      <motion.div
        className="page-hero-top label"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <span className="chip chip--blue">
          {num} / {kicker}
        </span>
        {aside && <span className="dim">{aside}</span>}
      </motion.div>
      <SplitLines as="h1" className="h-mega" lines={lines} immediate delay={0.55} stagger={0.1} />
    </section>
  )
}
