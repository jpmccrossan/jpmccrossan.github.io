// Template for a new portfolio item. Copy this file to <your-slug>.ts (no leading "_") and fill it in.
// Only the fields marked "required" are needed; delete any optional ones you don't use.
import type { Entry } from '../types'

export default {
  order: 999, // required: position within its section, lower first
  slug: 'my-project', // required: the page lives at /portfolio/my-project
  kind: 'personal', // required: 'work' (jobs), 'personal' (built alone, outside work) or 'study' (studies, research, team)
  // theme: 'ai',                           // personal projects: 'ai', 'data' or 'apps'
  title: 'My project', // required
  kicker: 'Side project · Python', // required: small label above the title
  period: '2026', // required
  summary: 'One line for the card.', // required
  intro: ['Opening paragraph on the page.'], // required
  tags: ['Python'], // required
  // role: 'Job title',                       // work entries
  // current: true,                           // shows "Now"
  // note: 'A caveat, e.g. screenshots use demo data.',
  // cover: { src: '/images/my-project/cover.jpg', caption: 'What it shows' },
  // stats: [{ value: '10x', label: 'What the number means' }],
  // links: [{ label: 'Code on GitHub', href: 'https://github.com/...' }],
  sections: [
    { heading: 'A section', body: ['A paragraph.'], points: ['A bullet point.'], tags: ['Tool'] },
  ],
  // gallery: { title: 'Screens', images: [{ src: '/images/my-project/01.jpg', caption: 'What it shows' }] },
  // related: ['other-slug'],
} satisfies Entry
