// Tailored pages for specific job applications, one per page at /applications/<slug>.
//
// Privacy: pages are unlisted, not private. Anyone with the link can open one, and because
// this repo and its built site are public, every application's text can be read in the code.
// Write nothing here you wouldn't want the company (or other companies) to see.
//
// To add one: copy the example below, give it a new `slug`, and fill it in.
// `listed: false` keeps it off the /applications index (reachable only by its link).

/** Show "Applications" in the main navigation. Off by default, so one employer can't browse the others. */
export const applicationsInNav = false

export type Application = {
  slug: string
  company: string
  role: string
  location?: string
  /** e.g. 'November 2026' */
  date?: string
  /** show on the /applications index */
  listed: boolean
  /** opening paragraphs: the short letter */
  intro: string[]
  /** why this company and role */
  why: { heading: string; text: string }[]
  /** what they ask for, and where you've done it; `entry` links to a portfolio page by slug */
  fit: { requirement: string; evidence: string; entry?: string }[]
  /** portfolio slugs to feature as cards */
  projects: string[]
  closing?: string
}

export const applications: Application[] = [
  {
    slug: 'example',
    company: 'Example Company',
    role: 'AI Engineer',
    location: 'Copenhagen',
    date: 'Template',
    listed: false,
    intro: [
      'This is a template application page. Copy this entry in src/applications.ts, give it the company\'s name and a new slug, and replace this text with a short letter written for that role.',
      'Everything below is placeholder text showing what each part of the page is for.',
    ],
    why: [
      { heading: 'Why this company', text: 'What draws you to this company in particular: its product, its mission, its team.' },
      { heading: 'Why this role', text: 'Why this role is the right next step, and what you would bring to it from day one.' },
      { heading: 'Why Copenhagen', text: 'Your move, your timing and how soon you can start.' },
    ],
    fit: [
      { requirement: 'A requirement from the job ad', evidence: 'Where you have done it, in one sentence.', entry: 'pkf-infuse' },
      { requirement: 'Another requirement', evidence: 'Evidence from a project or role.', entry: 'vr-kickboxing' },
      { requirement: 'A third requirement', evidence: 'Evidence, with a link to the portfolio page that proves it.', entry: 'ashlar' },
    ],
    projects: ['pkf-infuse', 'vr-kickboxing', 'ashlar'],
    closing: 'A closing line: how to reach you and when you could start.',
  },
]

export const listedApplications = applications.filter((a) => a.listed)
export const findApplication = (slug?: string) => applications.find((a) => a.slug === slug)
