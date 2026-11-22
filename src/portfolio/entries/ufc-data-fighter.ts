import type { Entry } from '../types'

export default {
  order: 40,
  slug: 'ufc-data-fighter',
  kind: 'study',
  title: 'UFC Data Fighter',
  kicker: 'MSc coursework · Data visualisation',
  period: '2023 – 2024',
  summary:
    'Compare UFC fighters by attack, defence and body data, then put two of them in a "Data Fight".',
  intro: [
    'For my second MSc assessment we had to create a data visualisation for a mock website, "Martin\'s Cool Data Vis Website". I chose MMA data, because MMA is a passion of mine.',
    'I took the latest UFC data from Kaggle, cleaned it and built a database with DB Browser for SQLite. I categorised and ordered the data to look at fighters in a weight class by offence, defence and body data, with the option to "Data Fight": compare and contrast two fighters in the weight class.',
  ],
  cover: { src: '/images/ufc-data-fighter/11-compare-fighters.jpg', caption: 'Comparing two fighters', position: '50% 0%' },
  tags: ['Python', 'Flask', 'SQLite', 'Plotly JS', 'Data wrangling'],
  sections: [
    {
      heading: 'Skills',
      kicker: 'From my first portfolio website · 2024',
      points: [
        'Data visualisation: interactive graphics that make data exploration findings easy to understand.',
        'Plotly JS: bar, pie and scatter charts.',
        'Python: a Flask app linked to a database, using requests.',
        'Explaining complex topics in easy-to-understand ways.',
      ],
    },
  ],
  gallery: {
    title: 'Walkthrough',
    images: [
      ['01-landing-page', 'Landing page'],
      ['03-division-overview', 'Light Heavyweight division overview'],
      ['06-weight-reach-and-offence', 'Weight, reach and offence'],
      ['07-offence-and-defence', 'Offence and defence'],
      ['09-choose-two-fighters', 'Choosing two fighters'],
      ['11-compare-fighters', 'Head to head'],
      ['12-body-and-offence-comparison', 'Body data and offence compared'],
      ['14-defence-comparison', 'Defence compared'],
    ].map(([f, caption]) => ({ src: `/images/ufc-data-fighter/${f}.jpg`, caption, position: '50% 0%' })),
  },
  related: ['cardiff-msc'],
} satisfies Entry
