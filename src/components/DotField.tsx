import { useEffect, useRef } from 'react'

// Interactive dot grid (the CV's dot motif, brought to life).
// Dots are pushed away from the pointer, light up blue near it, and a click
// sends a shockwave across the field.
export default function DotField({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const SPACING = 26
    const RADIUS = 170
    let w = 0
    let h = 0
    let dpr = 1
    let ox: Float32Array, oy: Float32Array, px: Float32Array, py: Float32Array, vx: Float32Array, vy: Float32Array
    let count = 0
    const pointer = { x: -9999, y: -9999, active: false }
    const waves: { x: number; y: number; t: number }[] = []
    let raf = 0
    let visible = true
    let time = 0

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const cols = Math.ceil(w / SPACING) + 1
      const rows = Math.ceil(h / SPACING) + 1
      count = cols * rows
      ox = new Float32Array(count)
      oy = new Float32Array(count)
      px = new Float32Array(count)
      py = new Float32Array(count)
      vx = new Float32Array(count)
      vy = new Float32Array(count)
      const offX = (w - (cols - 1) * SPACING) / 2
      const offY = (h - (rows - 1) * SPACING) / 2
      let i = 0
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          ox[i] = px[i] = offX + c * SPACING
          oy[i] = py[i] = offY + r * SPACING
          i++
        }
      }
    }

    const draw = () => {
      time += 0.016
      ctx.clearRect(0, 0, w, h)
      for (let k = waves.length - 1; k >= 0; k--) {
        waves[k].t += 14
        if (waves[k].t > Math.max(w, h) * 1.4) waves.splice(k, 1)
      }

      for (let i = 0; i < count; i++) {
        let fx = (ox[i] - px[i]) * 0.06
        let fy = (oy[i] - py[i]) * 0.06

        const dx = px[i] - pointer.x
        const dy = py[i] - pointer.y
        const d2 = dx * dx + dy * dy
        let heat = 0
        if (pointer.active && d2 < RADIUS * RADIUS) {
          const d = Math.sqrt(d2) || 1
          const f = 1 - d / RADIUS
          fx += (dx / d) * f * 6
          fy += (dy / d) * f * 6
          heat = f
        }

        for (const wv of waves) {
          const wx = ox[i] - wv.x
          const wy = oy[i] - wv.y
          const wd = Math.sqrt(wx * wx + wy * wy) || 1
          const band = 1 - Math.abs(wd - wv.t) / 60
          if (band > 0) {
            const fade = 1 - wv.t / (Math.max(w, h) * 1.4)
            fx += (wx / wd) * band * 9 * fade
            fy += (wy / wd) * band * 9 * fade
            heat = Math.max(heat, band * fade)
          }
        }

        vx[i] = (vx[i] + fx) * 0.82
        vy[i] = (vy[i] + fy) * 0.82
        px[i] += vx[i]
        py[i] += vy[i]

        // gentle idle shimmer
        const shimmer = 0.5 + 0.5 * Math.sin(time * 1.2 + ox[i] * 0.012 + oy[i] * 0.018)
        const fadeY = Math.min(1, py[i] / (h * 0.25)) // fade in from top
        const alpha = (0.1 + shimmer * 0.12) * fadeY + heat * 0.9
        const size = 1.1 + heat * 2.4

        if (heat > 0.05) {
          ctx.fillStyle = `rgba(77, 99, 255, ${Math.min(1, alpha)})`
        } else {
          ctx.fillStyle = `rgba(244, 241, 234, ${alpha})`
        }
        ctx.fillRect(px[i] - size / 2, py[i] - size / 2, size, size)
      }
    }

    const loop = () => {
      if (visible) draw()
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      pointer.x = e.clientX - r.left
      pointer.y = e.clientY - r.top
      pointer.active = pointer.y > 0 && pointer.y < r.height
    }
    const onLeave = () => (pointer.active = false)
    const onDown = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      const y = e.clientY - r.top
      if (y < 0 || y > r.height) return
      waves.push({ x: e.clientX - r.left, y, t: 0 })
    }

    build()
    const ro = new ResizeObserver(build)
    ro.observe(canvas)
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting))
    io.observe(canvas)

    if (reduce) {
      draw()
    } else {
      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerdown', onDown)
      document.addEventListener('pointerleave', onLeave)
      raf = requestAnimationFrame(loop)
      // opening shockwave from the centre
      setTimeout(() => waves.push({ x: w / 2, y: h * 0.55, t: 0 }), 2300)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden />
}
