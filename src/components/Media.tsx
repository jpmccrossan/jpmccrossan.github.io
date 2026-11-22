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
  position,
  eager = false,
}: {
  src?: string
  alt?: string
  label: string
  mark?: string
  className?: string
  parallax?: boolean
  /** CSS object-position, to keep the subject in frame when cropped */
  position?: string
  /** load immediately (for images in the first screen) */
  eager?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // Parallax is switched off site-wide: photos are never zoomed or shifted.
  const y = useTransform(scrollYProgress, [0, 1], parallax ? ['0%', '0%'] : ['0%', '0%'])

  return (
    <div ref={ref} className={`media ${className}`}>
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          style={{ y, objectPosition: position }}
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
