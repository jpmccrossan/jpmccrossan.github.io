import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'motion/react'

export default function Counter({ to, duration = 2 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => c.stop()
  }, [inView, to, duration])

  return <span ref={ref}>{value}</span>
}
