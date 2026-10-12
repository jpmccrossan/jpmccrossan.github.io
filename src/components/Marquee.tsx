import { useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from 'motion/react'

// Infinite marquee that speeds up (and reverses) with scroll velocity.
export default function Marquee({
  items,
  speed = 60,
  reverse = false,
}: {
  items: string[]
  speed?: number
  reverse?: boolean
}) {
  const x = useMotionValue(0)
  const { scrollY } = useScroll()
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 })
  const boost = useTransform(velocity, [-1500, 0, 1500], [-4, 0, 4], { clamp: false })
  const dir = useRef(reverse ? -1 : 1)
  const trackRef = useRef<HTMLDivElement>(null)

  useAnimationFrame((_, delta) => {
    const half = (trackRef.current?.scrollWidth ?? 0) / 2
    if (!half) return
    const b = boost.get()
    if (b < -0.2) dir.current = reverse ? 1 : -1
    else if (b > 0.2) dir.current = reverse ? -1 : 1
    const move = dir.current * speed * (delta / 1000) * (1 + Math.abs(b))
    x.set(wrap(-half, 0, x.get() - move))
  })

  const row = items.map((item, i) => (
    <span className="marquee-item" key={i}>
      {item}
      <span className="marquee-star" aria-hidden>
        ✦
      </span>
    </span>
  ))

  return (
    <div className="marquee" aria-label={items.join(', ')}>
      <motion.div className="marquee-track" ref={trackRef} style={{ x }} aria-hidden>
        {row}
        {row}
      </motion.div>
    </div>
  )
}
