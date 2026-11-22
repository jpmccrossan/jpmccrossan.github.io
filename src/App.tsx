import { useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'motion/react'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Header from './components/Header'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import ProjectPage from './pages/ProjectPage'
import About from './pages/About'
import Applications from './pages/Applications'
import ApplicationPage from './pages/ApplicationPage'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()
  const [loaded, setLoaded] = useState(false)
  useSmoothScroll()

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{!loaded && <Preloader onDone={() => setLoaded(true)} />}</AnimatePresence>
      <Cursor />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home ready={loaded} />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/applications/:slug" element={<ApplicationPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* Old pages, merged into Portfolio and About */}
          <Route path="/work" element={<Navigate to="/portfolio" replace />} />
          <Route path="/stack" element={<Navigate to="/portfolio" replace />} />
          <Route path="/beyond" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <div className="grain" aria-hidden />
    </MotionConfig>
  )
}
