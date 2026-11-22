import type { Entry } from '../types'

export default {
  order: 10,
  slug: 'assystem',
  kind: 'work',
  title: 'Assystem',
  role: 'Backend Python Developer',
  kicker: 'Forward-deployed and internal projects',
  period: 'Jan 2026 – Present',
  current: true,
  summary:
    'I work across AI engineering, data science, full-stack apps and custom machine learning models, both on-site with clients and on internal projects.',
  intro: [
    'I am a backend Python developer working across many roles: AI engineering, data science, full-stack applications and machine learning models built for custom use cases.',
    'I work in both forward-deployed roles, on-site with clients, and on internal projects. One client is a major nuclear company, where I work in a secure, highly regulated environment.',
  ],
  note: 'Because of the nature of the work and legal limits, this page only describes my work at a high level.',
  tags: ['Python', 'AI engineering', 'Data science', 'Machine learning', 'scikit-learn', 'TensorFlow', 'Full stack', 'FastAPI', 'Flask', 'Django', 'React', 'TypeScript', 'JavaScript', 'PostgreSQL', 'Power Automate', 'Agile', 'Scrum'],
  stats: [
    { value: 'v1', label: 'Shipped end to end, solo across the stack' },
    { value: 'ML', label: 'Custom models with scikit-learn and TensorFlow' },
    { value: '4', label: 'Roles: AI, data science, full stack and machine learning' },
  ],
  sections: [
    {
      heading: 'Many roles, one developer',
      points: [
        'AI engineering: building AI tools and workflows.',
        'Data science: analysis and models from client and internal data.',
        'Full-stack applications: back end, front end and database.',
        'Machine learning: custom models for specific use cases.',
      ],
      body: [
        'I work in forward-deployed roles, on-site with clients, and on internal Assystem projects.',
      ],
      tags: ['Python', 'AI', 'Data science', 'Machine learning'],
    },
    {
      heading: 'Full-stack applications, built the Agile way',
      body: ['I build full-stack applications from start to finish and work in Agile teams using Scrum.'],
      points: [
        'Back end: Python with FastAPI, Flask and Django.',
        'Front end: React, TypeScript and JavaScript.',
        'Databases: PostgreSQL, including database design.',
        'Ways of working: Agile and Scrum, with regular planning and reviews.',
      ],
      tags: ['FastAPI', 'Flask', 'Django', 'React', 'TypeScript', 'Agile', 'Scrum'],
    },
    {
      heading: "v1 of a nuclear company's application",
      body: [
        "I built version 1 of a major nuclear company's application from start to finish, on my own: the back end (FastAPI), the front end (React) and the database (PostgreSQL), including the API and database design.",
      ],
      tags: ['FastAPI', 'React', 'PostgreSQL'],
    },
    {
      heading: 'An internal tool for company improvements',
      body: [
        'I built an internal tool that collects ideas for improving the company and helps managers act on them.',
      ],
      points: [
        'A form where staff submit improvement ideas.',
        'Automation that records, routes and tracks each idea.',
        'A dashboard where managers review the ideas and act on them.',
      ],
      tags: ['Full stack', 'Power Automate', 'Automation', 'Dashboards'],
    },
    {
      heading: 'Machine learning models',
      body: [
        'I build machine learning models for custom use cases with scikit-learn, and I built a reinforcement learning simulator in Python and TensorFlow.',
      ],
      tags: ['scikit-learn', 'TensorFlow', 'Reinforcement learning'],
    },
    {
      heading: 'Documentation and traceable delivery',
      body: [
        'I write extensive documentation and requirements specs that keep operations and engineering aligned, and I deliver traceable tooling in a regulated setting.',
      ],
      tags: ['Documentation', 'Requirements'],
    },
  ],
} satisfies Entry
