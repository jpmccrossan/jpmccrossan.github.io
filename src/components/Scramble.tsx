import { useCallback, useEffect, useRef, useState } from 'react'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=<>/'

// Text that "decodes" from random glyphs: on first view, and again on hover
// of the nearest link/button (or of itself).
export default function Scramble({ text, className }: { text: string; className?: string }) {
  const [out, setOut] = useState(text)
  const ref = useRef<HTMLSpanElement>(null)
  const raf = useRef(0)

  const run = useCallback(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    cancelAnimationFrame(raf.current)
    const start = performance.now()
    const dur = 420 + text.length * 18
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur)
      const reveal = Math.floor(p * text.length)
      let s = ''
      for (let i = 0; i < text.length; i++) {
        const ch = text[i]
        s += i < reveal || ch === ' ' ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0]
      }
      setOut(s)
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
  }, [text])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const host = el.closest('a, button') ?? el
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        run()
        io.disconnect()
      }
    })
    io.observe(el)
    host.addEventListener('pointerenter', run)
    return () => {
      io.disconnect()
      host.removeEventListener('pointerenter', run)
      cancelAnimationFrame(raf.current)
    }
  }, [run])

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden>{out}</span>
    </span>
  )
}
