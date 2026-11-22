import type { Entry } from '../types'

export default {
  order: 80,
  slug: 'first-website',
  kind: 'personal',
  theme: 'apps',
  title: 'My first portfolio website',
  kicker: 'Old site · 2024 · Retired',
  period: 'Sep – Oct 2024',
  summary:
    'My first portfolio website, built in 2024 at the end of my MSc. A separate, older site, since replaced by this one and no longer online.',
  intro: [
    'My first portfolio website, built in September and October 2024 at the end of my MSc. It is not this site: it was a separate React app with its own design, and it has since been retired. This site replaced it in 2026.',
    'I built it from scratch with React, JavaScript, CSS and HTML, and deployed it on GitHub Pages. It had a video hero, project cards, a "Tech Stack Snapshot" page, project pages with image carousels, and an About page.',
  ],
  note: 'Retired: this site is no longer online. The code remains on GitHub, and its projects and photos now live on this site.',
  cover: { src: '/images/portfolio-website/v1-01-home.jpg', caption: 'The 2024 home page, with its video hero' },
  tags: ['React', 'JavaScript', 'Bootstrap', 'MUI', 'Font Awesome', 'GitHub Pages'],
  links: [{ label: 'Code on GitHub', href: 'https://github.com/jpmccrossan/react-website-portfolio' }],
  sections: [
    {
      heading: 'Skills',
      kicker: 'From the 2024 site',
      points: [
        'React: learned and used React, including components.',
        'GitHub: version control and forks.',
        'GitHub Pages: deployment.',
        'Libraries: React, Bootstrap, Font Awesome and MUI.',
      ],
    },
    {
      heading: 'Where its content went',
      body: [
        'Its project write-ups and photos (the VR kickboxing build, UFC Data Fighter, the Automated Assessment Tool and Bilbao to Venice) now live on this site, marked where they come from 2024.',
      ],
    },
  ],
  gallery: {
    title: 'The 2024 site',
    images: [
      { src: '/images/portfolio-website/v1-01-home.jpg', caption: '2024: home page with the video hero' },
      { src: '/images/portfolio-website/v1-02-project-cards.jpg', caption: '2024: project cards' },
      { src: '/images/portfolio-website/v1-03-tech-stack-snapshot.jpg', caption: '2024: the tech stack snapshot' },
    ],
  },
  related: ['this-website'],
} satisfies Entry
