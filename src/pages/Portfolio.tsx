import Page from '../components/Page'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import StackGrid from '../components/StackGrid'
import WhyHire from '../components/WhyHire'
import Marquee from '../components/Marquee'
import ProfileIntro from '../components/ProfileIntro'
import ThemeGroups from '../components/ThemeGroups'
import { SplitLines } from '../components/Reveal'
import { scrollToId } from '../hooks/useSmoothScroll'
import { aboutHireReasons, profile, skills } from '../content'
import { navNum } from '../navNum'
import { personalEntries, studyEntries, workEntries } from '../portfolio'

const SECTIONS = [
  { id: 'person', label: 'The person behind the work', count: 0 },
  { id: 'work', label: 'Industry experience', count: workEntries.length },
  { id: 'personal', label: 'Personal projects', count: personalEntries.length },
  { id: 'studies', label: 'Studies & team projects', count: studyEntries.length },
  { id: 'stack', label: 'Stack', count: skills.length },
]

export default function Portfolio() {
  return (
    <Page title={`Portfolio · ${profile.firstName} ${profile.lastName}`}>
      <PageHero
        num={navNum('/portfolio')}
        kicker="Portfolio"
        aside={`${workEntries.length + personalEntries.length + studyEntries.length} pages · work, projects, studies`}
        lines={['Portfolio']}
      />

      <nav className="wrap pf-tabs label" aria-label="Portfolio sections">
        {SECTIONS.map((s, i) => (
          <button key={s.id} onClick={() => scrollToId(s.id)}>
            <span className="dim">{String(i + 1).padStart(2, '0')}</span> {s.label}
            {s.count > 0 && <sup className="blue">{s.count}</sup>}
          </button>
        ))}
      </nav>

      <section id="person" className="wrap pf-section profile-section">
        <div className="section-head">
          <span className="label">01 · Who I am at work</span>
        </div>
        <ProfileIntro />
      </section>

      <section id="work" className="wrap section pf-section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <span className="label">02 · Industry experience</span>
          <span className="label dim">My jobs</span>
        </div>
        <SplitLines className="h-xl" lines={['Industry experience']} />
        <div className="pf-grid pf-grid--work">
          {workEntries.map((e, i) => (
            <ProjectCard key={e.slug} entry={e} index={i} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </section>

      <section id="personal" className="wrap section pf-section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <span className="label">03 · Personal projects</span>
          <span className="label dim">Built on my own, outside work</span>
        </div>
        <SplitLines className="h-xl" lines={['What I build in my own time']} />
        <p className="lead dim pf-section-intro">Things I built on my own, in my own time.</p>
        <ThemeGroups />
      </section>

      <section id="studies" className="wrap section pf-section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <span className="label">04 · Studies & team projects</span>
          <span className="label dim">Master's degree, research and teamwork</span>
        </div>
        <SplitLines className="h-xl" lines={['Studies, research and team projects']} />
        <p className="lead dim pf-section-intro">
          My master's degree in Computing, my published research, and projects I built as part of a team, newest first.
        </p>
        <ol className="timeline">
          {studyEntries.map((e, i) => (
            <li key={e.slug} className="timeline-item">
              <span className="timeline-date label">{e.period}</span>
              <span className="timeline-dot" aria-hidden />
              <ProjectCard entry={e} index={i} delay={0.05} variant="cube" />
            </li>
          ))}
        </ol>
      </section>

      <WhyHire
        reasons={aboutHireReasons}
        lines={['AI that', <span key="k4" className="outline-text">people</span>, <span key="k5" className="blue">use</span>]}
      />

      <section id="stack" className="wrap section pf-section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <span className="label">05 · Stack</span>
          <span className="label dim">{skills.reduce((n, g) => n + g.items.length, 0)} tools · {skills.length} disciplines</span>
        </div>
        <SplitLines className="h-xl" lines={['The stack']} />
        <div style={{ marginTop: 'clamp(40px, 8vh, 80px)' }}>
          <StackGrid />
        </div>
      </section>


      <Marquee items={skills.flatMap((g) => g.items).slice(0, 14)} reverse speed={50} />
    </Page>
  )
}
