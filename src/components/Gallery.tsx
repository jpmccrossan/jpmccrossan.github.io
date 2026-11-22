import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { setScrollLocked } from '../hooks/useSmoothScroll'

export type GalleryImage = { src: string; caption: string; contain?: boolean; position?: string }

const EASE = [0.76, 0, 0.24, 1] as const

// Captioned images, as a grid or a horizontal reel. Click any image to open it full size;
// arrow keys step through, Escape closes.
export default function Gallery({
  images,
  columns = 3,
  layout = 'grid',
}: {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
  /** 'reel': one scrolling row, so visitors can browse without scrolling past every image.
   *  'single': one image shown whole at its natural shape, with its caption */
  layout?: 'grid' | 'reel' | 'single'
}) {
  const [open, setOpen] = useState<number | null>(null)
  const reel = useRef<HTMLDivElement>(null)
  const scrollReel = (dir: 1 | -1) =>
    reel.current?.scrollBy({ left: dir * reel.current.clientWidth * 0.8, behavior: 'smooth' })

  useEffect(() => {
    if (open === null) return
    setScrollLocked(true)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((i) => (i === null ? i : (i + 1) % images.length))
      if (e.key === 'ArrowLeft') setOpen((i) => (i === null ? i : (i - 1 + images.length) % images.length))
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      setScrollLocked(false)
    }
  }, [open, images.length])

  const current = open === null ? null : images[open]

  const items = images.map((img, i) =>
    layout === 'reel' ? (
      <figure key={img.src} className="reel-item">
        <button
          className={`reel-img${img.contain ? ' contain' : ''}`}
          onClick={() => setOpen(i)}
          aria-label={`Open image: ${img.caption}`}
          data-cursor="View"
        >
          <img src={img.src} alt={img.caption} loading="lazy" draggable={false} />
        </button>
        <figcaption className="label dim">{img.caption}</figcaption>
      </figure>
    ) : null,
  )

  return (
    <>
      {layout === 'single' && images[0] ? (
        <figure className="single-img">
          <button onClick={() => setOpen(0)} aria-label={`Open image: ${images[0].caption}`} data-cursor="View">
            <img src={images[0].src} alt={images[0].caption} loading="lazy" />
          </button>
          <figcaption className="label dim">{images[0].caption}</figcaption>
        </figure>
      ) : layout === 'reel' ? (
        <div className="reel-wrap">
          <div className="reel" ref={reel} tabIndex={0} aria-label="Photo reel, scroll sideways">
            {items}
          </div>
          <div className="reel-bar">
            <span className="label dim">
              {images.length} photos · scroll or use the arrows
            </span>
            <span className="reel-arrows">
              <button onClick={() => scrollReel(-1)} aria-label="Scroll back">
                ←
              </button>
              <button onClick={() => scrollReel(1)} aria-label="Scroll forward">
                →
              </button>
            </span>
          </div>
        </div>
      ) : (
      <div className={`gallery gallery--${columns}`}>
        {images.map((img, i) => (
          <motion.figure
            key={img.src}
            className="gallery-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-5% 0px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: (i % columns) * 0.06 }}
          >
            <button
              className={`gallery-img${img.contain ? ' contain' : ''}`}
              onClick={() => setOpen(i)}
              aria-label={`Open image: ${img.caption}`}
              data-cursor="View"
            >
              <img src={img.src} alt={img.caption} loading="lazy" style={{ objectPosition: img.position }} />
            </button>
            <figcaption className="label">
              <span className="blue">{String(i + 1).padStart(2, '0')}</span> {img.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
      )}

      <AnimatePresence>
        {current && open !== null && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={current.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setOpen(null)}
          >
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.caption}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="lightbox-bar label" onClick={(e) => e.stopPropagation()}>
              <span>
                <span className="blue">
                  {String(open + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </span>{' '}
                {current.caption}
              </span>
              <span className="lightbox-actions">
                {images.length > 1 && (
                  <>
                    <button onClick={() => setOpen((open - 1 + images.length) % images.length)} aria-label="Previous image">
                      ←
                    </button>
                    <button onClick={() => setOpen((open + 1) % images.length)} aria-label="Next image">
                      →
                    </button>
                  </>
                )}
                <button onClick={() => setOpen(null)} aria-label="Close">
                  Close ✕
                </button>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
