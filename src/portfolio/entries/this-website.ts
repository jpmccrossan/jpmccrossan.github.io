import type { Entry } from '../types'

export default {
  order: 70,
  slug: 'this-website',
  kind: 'personal',
  theme: 'apps',
  title: 'This website',
  kicker: 'Current site · 2026',
  period: 'Oct 2026 → now',
  summary:
    'The site you are on: rebuilt from scratch in 2026 with React 19, TypeScript and Vite. A new codebase, not an update of my 2024 site.',
  intro: [
    'The site you are on now, built from scratch in 2026 at jpmccrossan.github.io. It replaced my first portfolio website from 2024, which has its own page here; the two share no code or design.',
    'It is built with React 19, TypeScript and Vite, with Motion for animation and Lenis for smooth scrolling. All the copy lives in data files, so content changes never touch components, and every push to main builds and publishes it to GitHub Pages through GitHub Actions.',
  ],
  cover: { src: '/images/this-website/01-home.jpg', caption: 'The home page', position: '50% 0%' },
  tags: ['React 19', 'TypeScript', 'Vite', 'Motion', 'Lenis', 'GitHub Actions', 'GitHub Pages'],
  links: [{ label: 'Code on GitHub', href: 'https://github.com/jpmccrossan/jpmccrossan.github.io' }],
  sections: [
    {
      heading: 'What is on it',
      points: [
        'A portfolio with a page for every role, project and piece of research.',
        'A downloadable paper, poster and pitch for the VR kickboxing research.',
        'An About page covering the person as well as the CV.',
        'Tailored pages for job applications, shared directly with each company.',
      ],
    },
    {
      heading: 'How it is built',
      body: [
        'Pages are generated from data: each portfolio page is one entry in a TypeScript file, rendered by a shared template with a gallery, stats and related pages. Adding a project means adding an entry, not writing a page.',
      ],
      tags: ['React', 'TypeScript', 'Data-driven pages'],
    },
    {
      heading: 'Not my first portfolio website',
      body: [
        'This is a separate, newer site. My first portfolio website (2024) was a different React app with a different design, and it is no longer online. Its page is linked below.',
      ],
    },
  ],
  gallery: {
    title: 'This site',
    images: [
      { src: '/images/this-website/01-home.jpg', caption: 'Home' },
      { src: '/images/this-website/02-portfolio.jpg', caption: 'The portfolio index' },
      { src: '/images/this-website/03-project-page.jpg', caption: 'A project page' },
      { src: '/images/this-website/04-about.jpg', caption: 'About' },
    ],
  },
  related: ['first-website'],
} satisfies Entry
