import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

// Custom cursor: a dot that tracks exactly, and a lagging ring that grows over
// anything with a [data-cursor] attribute and shows its text (e.g. "Drag").
export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 })
  const ry = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 })
  const [label, setLabel] = useState<string | null>(null)
  const [enabled] = useState(() => window.matchMedia('(hover: hover) and (pointer: fine)').matches)

  useEffect(() => {
    if (!enabled) return
    document.body.classList.add('has-cursor')

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = (e.target as Element | null)?.closest?.('[data-cursor], a, button')
      if (!target) return setLabel(null)
      setLabel(target.getAttribute('data-cursor') ?? '')
    }
    window.addEventListener('pointermove', move)
    return () => {
      window.removeEventListener('pointermove', move)
      document.body.classList.remove('has-cursor')
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div
        className={`cursor-ring${label ? ' is-active' : label === '' ? ' is-link' : ''}`}
        style={{ x: rx, y: ry }}
      >
        <span>{label}</span>
      </motion.div>
    </>
  )
}
