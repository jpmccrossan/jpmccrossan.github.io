import type { Entry } from '../types'

export default {
  order: 50,
  slug: 'automated-assessment-tool',
  kind: 'study',
  title: 'Automated Assessment Tool',
  kicker: 'MSc team project · Software engineering',
  period: '2023 – 2024',
  summary: 'A team-built Flask app for formative and summative coursework assessment. I built the student analytics.',
  intro: [
    'On my course I worked in a team to create automated assessment software for universities, for formative and summative evaluation of coursework.',
    'We had primary and secondary Belbin roles (mine were Specialist and Completer Finisher) and used a hybrid Scrumban method with Asana Gantt charts and regular meetings. We started with diagrams and planning to work out dependencies and structure for maximum modularity, then split key areas between us. I worked mainly on the student analytics page.',
  ],
  cover: { src: '/images/automated-assessment-tool/02-student-overview.jpg', caption: 'Student data overview', position: '50% 0%' },
  tags: ['Flask', 'Jinja', 'SQL', 'Plotly JS', 'Agile', 'Scrumban'],
  sections: [
    {
      heading: 'Skills',
      kicker: 'From my first portfolio website · 2024',
      points: [
        'Agile and Scrumban: a Scrum and Kanban hybrid with Gantt charts and regular team meetings.',
        'Flask: an interactive web app for students and staff to take assessments and view results.',
        'Jinja: dynamic templates.',
        'Data visualisation: I built the student analytics, showing results with Plotly JS.',
        'Databases: SQL, polymorphic database design and DB Browser for SQLite.',
      ],
    },
  ],
  gallery: {
    title: 'Screens',
    images: [
      ['01-login', 'Separate entry points for students and staff'],
      ['02-student-overview', 'Student data overview'],
      ['03-last-three-results', 'Last three results per module'],
      ['04-module-results', 'One module\'s results'],
      ['05-quiz-result', 'A single quiz result with feedback'],
    ].map(([f, caption]) => ({ src: `/images/automated-assessment-tool/${f}.jpg`, caption, position: '50% 0%' })),
  },
  related: ['cardiff-msc'],
} satisfies Entry
