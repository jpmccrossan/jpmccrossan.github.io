import type { Entry } from '../types'

export default {
  order: 20,
  slug: 'application-pipeline',
  kind: 'personal',
  theme: 'ai',
  title: 'Application Pipeline',
  kicker: 'Side project · Claude',
  period: '2026',
  summary:
    'A local web app that scouts job sites and drafts a tailored one-page CV and cover letter for each job, written by Claude and checked against my real experience.',
  intro: [
    'Upload your CV once. Then paste job ads, or let the app find them on the job sites you choose. For each job you get a one-page CV and a one-page cover letter, researched and written around what that company needs, using only facts from your own CV.',
    'Claude does the thinking; the app does everything mechanical. Research and writing come back as structured text, and the app validates it, renders the PDFs, measures them, and sends any problems back to Claude to fix. Everything runs on your own computer through a simple local web app.',
  ],
  note: "Screenshots use the repo's built-in fictional example person, Sam Rivera.",
  cover: { src: '/images/application-pipeline/02-home.jpg', caption: 'The home screen', position: '0% 0%' },
  tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'Claude Code', 'Claude API', 'Playwright', 'Jinja'],
  stats: [
    { value: '1 page', label: 'Every CV and letter, measured in a real browser' },
    { value: '0', label: 'Claims allowed that are not in your own facts' },
    { value: '3', label: 'Automatic fix rounds before a document is accepted' },
  ],
  links: [{ label: 'Code on GitHub', href: 'https://github.com/jpmccrossan/claude_application_pipeline' }],
  sections: [
    {
      heading: 'What it does',
      points: [
        'Paste a job ad, get a CV and cover letter: Claude researches the company and writes about what they need, with your experience as the evidence.',
        'Find jobs for you: searches the sites you configure, drops anything irrelevant, too senior or already seen, scores the rest against your facts and writes applications for the best ones.',
        'Edit by chatting: tell Claude what to change ("make paragraph 2 shorter") and the PDFs update.',
        'Track everything: a status per application and a follow-up reminder 10 days after you apply.',
      ],
    },
    {
      heading: 'Never invents things',
      body: [
        'Every claim must trace to a facts file built from your CV and edited by you. Automatic checks block claims about technologies you have not used, puffery like "passionate" or "results-driven", and gap admissions. Each document is measured in a real browser, and if it overflows one page, Claude shortens it.',
      ],
    },
    {
      heading: 'Safe by design',
      points: [
        'Least privilege: research agents only get web search and web fetch, with no shell or file access, so a malicious job ad cannot make them run anything.',
        'Local only: the server binds to this computer and refuses requests from other origins.',
        'Polite scouting: robots.txt is checked before any page is fetched, requests are spaced out, and the tool identifies itself.',
        'Two engines, one interface: Claude Code in headless mode, or the Claude API with a local tool loop.',
      ],
      tags: ['Agents', 'Least privilege', 'FastAPI'],
    },
  ],
  gallery: {
    title: 'The app',
    note: 'Fictional example person',
    images: [
      { src: '/images/application-pipeline/01-setup.jpg', caption: 'Guided setup, starting with the disclaimer', position: '50% 0%' },
      { src: '/images/application-pipeline/02-home.jpg', caption: 'Home: paste job ads, then generate', position: '0% 0%' },
      { src: '/images/application-pipeline/03-profile-and-facts.jpg', caption: 'Profile & facts: the source of truth', position: '0% 0%' },
      { src: '/images/application-pipeline/04-job-preferences.jpg', caption: 'Job preferences for the scout', position: '0% 0%' },
      { src: '/images/application-pipeline/05-job-sites.jpg', caption: 'Job sites the scout searches', position: '0% 0%' },
      { src: '/images/application-pipeline/06-find-jobs.jpg', caption: 'Find jobs: every listing, scored', position: '0% 0%' },
      { src: '/images/application-pipeline/07-example-cv.jpg', caption: 'A generated one-page CV', contain: true },
      { src: '/images/application-pipeline/08-example-letter.jpg', caption: 'A generated one-page cover letter', contain: true },
    ],
  },
} satisfies Entry
