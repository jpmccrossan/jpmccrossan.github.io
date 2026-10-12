import { useEffect, useState } from 'react'
import { animate, motion } from 'motion/react'
import { profile } from '../content'
import { setScrollLocked } from '../hooks/useSmoothScroll'

const EASE = [0.76, 0, 0.24, 1] as const

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setScrollLocked(true)
    const controls = animate(0, 100, {
      duration: 1.9,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => {
        setTimeout(() => {
          setScrollLocked(false)
          onDone()
        }, 250)
      },
    })
    return () => {
      controls.stop()
      setScrollLocked(false)
    }
  }, [onDone])

  return (
    <motion.div
      className="preloader"
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      initial={{ clipPath: 'inset(0 0 0% 0)' }}
      transition={{ duration: 1, ease: EASE }}
    >
      <div className="preloader-top">
        <span className="label">
          {profile.firstName} {profile.lastName}
        </span>
        <span className="label dim">{profile.tagline}</span>
      </div>
      <div>
        <div className="preloader-count">
          {String(count).padStart(3, '0')}
          <small>%</small>
        </div>
        <div className="preloader-bar" style={{ marginTop: 24 }}>
          <motion.i style={{ scaleX: count / 100 }} />
        </div>
        <div className="preloader-top" style={{ marginTop: 14 }}>
          <span className="label dim">Loading clean, checked data</span>
          <span className="label blue">● {profile.status}</span>
        </div>
      </div>
    </motion.div>
  )
}
