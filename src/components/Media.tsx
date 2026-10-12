import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

// Image slot with a styled placeholder until a real `src` is supplied.
// Set `parallax` for a subtle scroll-linked drift inside the frame.
export default function Media({
  src,
  alt = '',
  label,
  mark,
  className = '',
  parallax = false,
}: {
  src?: string
  alt?: string
  label: string
  mark?: string
  className?: string
  parallax?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], parallax ? ['-8%', '8%'] : ['0%', '0%'])

  return (
    <div ref={ref} className={`media ${className}`}>
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ y, scale: parallax ? 1.18 : 1 }}
        />
      ) : (
        <div className="media-ph">
          <span className="label dim bracket">{label}</span>
          {mark && <span className="media-ph-mark">{mark}</span>}
        </div>
      )}
    </div>
  )
}
