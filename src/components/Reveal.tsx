import type { ElementType, PointerEventHandler, ReactNode } from 'react'
import { motion } from 'motion/react'

const EASE = [0.16, 1, 0.3, 1] as const

type SplitProps = {
  lines: ReactNode[]
  as?: ElementType
  className?: string
  delay?: number
  stagger?: number
  /** animate on mount instead of when scrolled into view */
  immediate?: boolean
  play?: boolean
}

// Masked line-by-line reveal: each line slides up from behind its own clip.
export function SplitLines({
  lines,
  as: Tag = 'div',
  className,
  delay = 0,
  stagger = 0.08,
  immediate,
  play = true,
}: SplitProps) {
  const trigger = immediate
    ? { animate: play ? 'shown' : 'hidden' }
    : { whileInView: 'shown', viewport: { once: true, margin: '-10% 0px' } }
  return (
    <Tag className={className}>
      <motion.span className="split" style={{ display: 'block' }} initial="hidden" {...trigger}>
        {lines.map((line, i) => (
          <span className="split-line" key={i}>
            <motion.span
              style={{ display: 'block' }}
              variants={{
                hidden: { y: '110%', rotate: 2 },
                shown: { y: '0%', rotate: 0 },
              }}
              transition={{ duration: 1.1, ease: EASE, delay: delay + i * stagger }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}

// Simple fade-up for blocks of content.
export function FadeUp({
  children,
  delay = 0,
  className,
  as = 'div',
  onPointerMove,
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'p' | 'li' | 'section' | 'span'
  onPointerMove?: PointerEventHandler<HTMLElement>
}) {
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp
      className={className}
      onPointerMove={onPointerMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </Comp>
  )
}

// Word-by-word scroll reveal for big statements.
export function WordReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(' ')
  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ staggerChildren: 0.035 }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="split-word"
          variants={{
            hidden: { opacity: 0.12, filter: 'blur(6px)' },
            shown: { opacity: 1, filter: 'blur(0px)' },
          }}
          transition={{ duration: 0.6 }}
        >
          {w + (i < words.length - 1 ? ' ' : '')}
        </motion.span>
      ))}
    </motion.p>
  )
}
