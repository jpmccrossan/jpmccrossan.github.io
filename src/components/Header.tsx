import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { nav, profile } from '../content'
import { setScrollLocked } from '../hooks/useSmoothScroll'

const EASE = [0.76, 0, 0.24, 1] as const

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    setScrollLocked(open)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header className="chrome">
        <Link to="/" className="brand" aria-label="Home">
          <span className="brand-dots" aria-hidden>
            <i />
            <i />
            <i />
          </span>
          {profile.initials}·McCrossan
        </Link>
        <nav className="chrome-nav" aria-label="Primary">
          <div className="chrome-links label">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to}>
                <sup>{n.num}</sup>
                {n.label}
              </NavLink>
            ))}
          </div>
          <button
            className={`burger${open ? ' open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <i />
            <i />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(100% 0 0% 0)' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <ul className="menu-list">
              {[{ num: '00', label: 'Home', to: '/' }, ...nav].map((n, i) => (
                <li key={n.to}>
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 + i * 0.06 }}
                  >
                    <Link to={n.to}>
                      <span className="label">{n.num}</span>
                      {n.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            <div className="menu-foot label">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>{' '}
                ·{' '}
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </span>
              <span>{profile.location} → Copenhagen</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
