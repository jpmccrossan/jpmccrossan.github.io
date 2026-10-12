import { useEffect, type ReactNode } from 'react'
import { motion } from 'motion/react'
import Footer from './Footer'
import { scrollToTop } from '../hooks/useSmoothScroll'

const EASE = [0.76, 0, 0.24, 1] as const

// Wraps every route: blue + ink panels wipe in on exit and peel away on enter.
export default function Page({ children, title }: { children: ReactNode; title: string }) {
  useEffect(() => {
    scrollToTop()
    document.title = title
  }, [title])

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.01 } }}
        exit={{ opacity: 1, transition: { duration: 0.9 } }}
      >
        {children}
        <Footer />
      </motion.main>

      {/* exit cover */}
      <motion.div
        className="wipe"
        aria-hidden
        style={{ originY: 1 }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.55, ease: EASE }}
      />
      <motion.div
        className="wipe wipe--ink"
        aria-hidden
        style={{ originY: 1 }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.55, ease: EASE, delay: 0.25 }}
      />
      {/* enter reveal: ink (on top) peels first, then blue */}
      <motion.div
        className="wipe"
        aria-hidden
        style={{ originY: 0 }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
      />
      <motion.div
        className="wipe wipe--ink"
        aria-hidden
        style={{ originY: 0 }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
      />
    </>
  )
}
