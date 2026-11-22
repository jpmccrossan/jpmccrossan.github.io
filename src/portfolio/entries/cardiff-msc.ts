import type { Entry } from '../types'

export default {
  order: 30,
  slug: 'cardiff-msc',
  kind: 'study',
  title: 'MSc Computing',
  role: "Master's degree, Cardiff University",
  kicker: "Education · Master's degree",
  period: '2023 – 2024',
  summary:
    "My master's degree in Computing at Cardiff University, where I built UFC Data Fighter, the Automated Assessment Tool and my VR kickboxing research.",
  intro: [
    "I have a master's degree (MSc) in Computing from Cardiff University.",
    'This is where I built UFC Data Fighter (an interactive data visualisation) and, with my team, the Automated Assessment Tool. Both have their own pages below.',
    'My dissertation, a machine learning VR kickboxing simulator in Python, TensorFlow, Unity and C#, became an abstract published at MASA and a paper published at BCS HCI 2026 (BritCHI).',
  ],
  cover: { src: '/images/vr-kickboxing/headset-guard.jpg', caption: 'In the VR headset, in a guard stance', position: '50% 30%' },
  tags: ['Python', 'TensorFlow', 'Unity', 'C#', 'Flask', 'SQL', 'Plotly JS'],
  links: [{ label: 'Cardiff University', href: 'https://www.cardiff.ac.uk/' }],
  sections: [
    {
      heading: 'What I studied',
      body: ['My MSc covered a broad mix of computing. Alongside the course, I also studied AI in my own time.'],
      points: [
        'Data visualisation: turning data into clear, interactive charts.',
        'Algorithms: how to solve problems efficiently with code.',
        'Data science: cleaning, exploring and modelling data.',
        'AI and machine learning, which I also studied in my own time.',
        'Software engineering, databases, web development and more.',
      ],
      tags: ['Data visualisation', 'Algorithms', 'Data science', 'AI'],
    },
    {
      heading: 'Dissertation: ML VR kickboxing',
      body: [
        'A VR sparring partner that reads you back: pose estimation drives a machine learning model that predicts your next move, and an avatar opponent in Unity responds.',
      ],
      tags: ['TensorFlow', 'Unity', 'C#'],
    },
    {
      heading: 'Built during my MSc',
      body: [
        'UFC Data Fighter: an interactive data visualisation of UFC fighter data, built on my own as coursework.',
        'The Automated Assessment Tool: a Flask application for marking coursework, built as a team project.',
      ],
      tags: ['Flask', 'SQLite', 'Plotly JS', 'Agile'],
    },
  ],
  related: ['vr-kickboxing', 'ufc-data-fighter', 'automated-assessment-tool'],
} satisfies Entry
