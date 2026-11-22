import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import ProjectCard from './ProjectCard'
import { THEMES, personalEntries } from '../portfolio'

const EASE = [0.76, 0, 0.24, 1] as const

// Personal projects grouped by theme. Each group opens and closes; the first starts open.
export default function ThemeGroups() {
  const [open, setOpen] = useState<string[]>([THEMES[0].id])
  const toggle = (id: string) => setOpen((o) => (o.includes(id) ? o.filter((x) => x !== id) : [...o, id]))

  return (
    <div className="themes">
      {THEMES.map((t) => {
        const items = personalEntries.filter((e) => e.theme === t.id)
        if (!items.length) return null
        const isOpen = open.includes(t.id)
        return (
          <div key={t.id} className={`theme${isOpen ? ' open' : ''}`}>
            <button className="theme-head" onClick={() => toggle(t.id)} aria-expanded={isOpen}>
              <span className="theme-title">
                {t.label}
                <span className="theme-count">{items.length}</span>
              </span>
              <span className="theme-blurb dim">{isOpen ? t.blurb : items.map((e) => e.title).join(' · ')}</span>
              <span className="theme-toggle" aria-hidden>
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="theme-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.55, ease: EASE }}
                >
                  <div className="pf-grid theme-grid">
                    {items.map((e, i) => (
                      <ProjectCard key={e.slug} entry={e} index={i} delay={(i % 3) * 0.06} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
