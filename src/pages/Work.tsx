import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Page from '../components/Page'
import PageHero from '../components/PageHero'
import { FadeUp } from '../components/Reveal'
import { experience, profile } from '../content'

export default function Work() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Page title={`Work · ${profile.firstName} ${profile.lastName}`}>
      <PageHero
        num="02"
        kicker="Experience & education"
        aside="2018 → present"
        lines={['Work', <span key="k1" className="outline-text">so far</span>]}
      />

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="jobs">
          {experience.map((job, i) => {
            const isOpen = open === i
            return (
              <FadeUp key={job.org} delay={i * 0.06}>
                <article className={`job${isOpen ? ' open' : ''}${job.current ? ' current' : ''}`}>
                  <button
                    className="job-head"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="label dim job-num">{String(i + 1).padStart(2, '0')}</span>
                    <span>
                      <h3>{job.role}</h3>
                      <span className="org label">
                        <span className="blue">{job.org}</span>
                        {job.tag && <span className="dim bracket" style={{ marginLeft: 14 }}>{job.tag}</span>}
                        {job.current && (
                          <span className="blue" style={{ marginLeft: 14 }}>
                            ● Now
                          </span>
                        )}
                      </span>
                    </span>
                    <span className="label dim job-period">{job.period}</span>
                    <span className="job-toggle" aria-hidden>
                      <i>+</i>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="job-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                      >
                        <div className="job-body-inner">
                          <span className="spacer" />
                          <div>
                            <p className="dim" style={{ marginBottom: 20 }}>
                              {job.summary}
                            </p>
                            <ul>
                              {job.points.map((p) => (
                                <li key={p}>{p}</li>
                              ))}
                            </ul>
                          </div>
                          {job.note ? <div className="job-note">{job.note}</div> : <span />}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </FadeUp>
            )
          })}
        </div>
      </section>
    </Page>
  )
}
