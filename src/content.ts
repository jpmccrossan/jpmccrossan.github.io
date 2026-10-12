// All site copy lives here so it can be edited without touching components.
// Images: drop files into /public/images and set the `image` fields, e.g. image: '/images/bjj.jpg'.

export const profile = {
  firstName: 'James-Patrick',
  lastName: 'McCrossan',
  initials: 'JP',
  tagline: 'Data Science · Python & SQL · Trustworthy Data',
  statement:
    'I turn raw data into clean, checked results and models, built in Python and SQL, that a data science team can trust and act on.',
  status: 'Relocating to Copenhagen · 2026',
  location: 'Derby, UK',
  email: 'jpdmccrossan@gmail.com',
  github: 'https://github.com/jpmccrossan',
  linkedin: 'https://www.linkedin.com/in/james-patrick-mccrossan',
  portrait: '' as string, // e.g. '/images/portrait.jpg'
}

export const nav = [
  { num: '01', label: 'About', to: '/about' },
  { num: '02', label: 'Work', to: '/work' },
  { num: '03', label: 'Stack', to: '/stack' },
  { num: '04', label: 'Beyond', to: '/beyond' },
  { num: '05', label: 'Contact', to: '/contact' },
]

export const stats = [
  { value: 50, suffix: 'KM', label: 'Charity ultra-marathon' },
  { value: 24, suffix: '', label: 'Microsoft Learn AI modules' },
  { value: 2023, suffix: '', label: 'Bilbao → Venice, solo by bike' },
  { value: 1, suffix: 'MO', label: 'Notice to start in Copenhagen' },
]

export const about = {
  intro: [
    'Day-to-day I work across Python, SQL, AI and machine learning, building data pipelines with full traceability, currently on-site in a secure, highly regulated industry.',
    'At PKF Infuse I built ETL, dashboards and NLP pipelines and explained results to partners and non-technical colleagues.',
  ],
  highlight:
    "I'm marrying my Danish fiancée next year and accommodation in Copenhagen is sorted: one month's notice and a work visa is all I need to start.",
  chapters: [
    {
      num: '01',
      title: 'Landscapes',
      years: '2018 – 2023',
      text: 'BA (Hons) Landscape Architecture, then Graduate Landscape Architect at Randall Thorp. Led landscape design on a multi-million-pound insurance-company headquarters scheme with clients and consultant teams.',
      image: '',
    },
    {
      num: '02',
      title: 'Retrained',
      years: '2023 – 2024',
      text: 'MSc Computing at Cardiff University. Dissertation: a machine learning VR kickboxing simulator in Python, TensorFlow, Unity and C#, presented at a conference with a short paper for BritCHI.',
      image: '',
    },
    {
      num: '03',
      title: 'Data & AI',
      years: '2025 – now',
      text: 'Sole developer across systems, data and AI at PKF Infuse, then backend Python on-site in the nuclear sector with Assystem. Traceable, trustworthy, production-grade.',
      image: '',
    },
    {
      num: '04',
      title: 'Copenhagen',
      years: '2026 →',
      text: 'Next stop: Denmark. Learning Danish, already fluent in the bike culture.',
      image: '',
    },
  ],
  howIWork: ['Clear communicator', 'Eye for detail', 'Team-first', 'Systems thinking', 'Driven'],
  languages: 'English, native · Danish, actively learning',
}

export type Job = {
  role: string
  org: string
  period: string
  tag?: string
  summary: string
  points: string[]
  note?: string
  current?: boolean
}

export const experience: Job[] = [
  {
    role: 'Backend Python Developer',
    org: 'Assystem',
    period: 'Jan 2026 – Present',
    tag: 'Classified-ish',
    current: true,
    summary:
      'On-site client delivery in a secure, highly regulated environment · limited in what I can disclose',
    points: [
      "Built v1 of a major nuclear company's application end to end: FastAPI, React, PostgreSQL, with API and database design.",
      'Built a reinforcement learning simulator in Python and TensorFlow.',
      'Deliver traceable tooling in a regulated setting; write requirements specs keeping operations and engineering aligned.',
    ],
  },
  {
    role: 'Systems & Data Developer',
    org: 'PKF Infuse',
    period: 'Jan – Dec 2025',
    summary: 'Accountancy group work, sole developer across systems, data and AI',
    points: [
      "Built Pandas/NumPy ETL into PostgreSQL for the firm's resource management application (Flask, React), running daily in production.",
      "Built Power BI dashboards over the firm's data for partners and operational teams.",
      'Built a Python NLP pipeline on a locally hosted Ollama LLM: full traceability, zero data leakage.',
      'Automated an Azure and Power Automate pipeline feeding live Power BI CPD compliance reporting.',
      'Led firm-wide AI adoption; trained colleagues on tooling and prompt engineering.',
    ],
    note: 'CPD, Microsoft Learn (24 modules, 2025): responsible generative AI in Azure AI Foundry · fine-tuning a language model · RAG over your own data · evaluating generative AI · securing Azure AI services',
  },
  {
    role: 'MSc Computing',
    org: 'Cardiff University',
    period: '2023 – 2024',
    tag: 'Education',
    summary: 'Dissertation: a machine learning VR kickboxing simulator',
    points: ['Python, TensorFlow, Unity and C#. Presented at a conference; short paper to be published at BritCHI.'],
  },
  {
    role: 'Graduate Landscape Architect',
    org: 'Randall Thorp',
    period: '2018 – 2023',
    tag: 'Earlier life',
    summary: 'BA (Hons) Landscape Architecture, University of Gloucestershire',
    points: [
      'Led landscape design on a multi-million-pound insurance-company headquarters scheme with clients and consultant teams, then retrained into software.',
    ],
  },
]

export const skills: { group: string; primary?: boolean; items: string[] }[] = [
  {
    group: 'AI & Machine Learning',
    primary: true,
    items: ['TensorFlow', 'NLP', 'LLMs', 'Reinforcement learning', 'Prompt engineering', 'RAG', 'Ollama', 'Azure AI Foundry'],
  },
  { group: 'Python & Backend', items: ['Python', 'REST APIs', 'FastAPI', 'Flask', 'Django', 'Nginx'] },
  {
    group: 'Data',
    items: ['SQL', 'Pandas', 'NumPy', 'PostgreSQL', 'ETL pipelines', 'Dashboards', 'Power BI', 'Streamlit'],
  },
  { group: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker', 'CI/CD', 'GitHub Actions', 'Terraform'] },
  { group: 'Also', items: ['Testing', 'Code review', 'React', 'JavaScript', 'C#', 'Unity'] },
]

export const marquee = [
  'Python',
  'SQL',
  'TensorFlow',
  'FastAPI',
  'PostgreSQL',
  'RAG',
  'Ollama',
  'AWS',
  'Azure',
  'Terraform',
  'Docker',
  'Power BI',
  'React',
]

export type Adventure = {
  title: string
  kicker: string
  date: string
  text: string
  image: string
}

export const adventures: Adventure[] = [
  {
    title: 'Bilbao → Venice',
    kicker: 'Solo cycle',
    date: '2023',
    text: 'Cycled solo across Europe. A head start on Danish bike culture.',
    image: '',
  },
  {
    title: 'Brazilian Jiu-Jitsu',
    kicker: 'British Open',
    date: 'Ongoing',
    text: 'Training and competing as a team, week in, week out.',
    image: '',
  },
  {
    title: '50KM Ultra',
    kicker: 'For charity',
    date: 'Completed',
    text: 'A 50km ultra-marathon run for charity.',
    image: '',
  },
  {
    title: 'VR Kickboxing',
    kicker: 'MSc · BritCHI',
    date: '2024',
    text: 'A machine learning VR kickboxing simulator, presented at a conference.',
    image: '',
  },
  {
    title: 'Project Hack 27',
    kicker: 'Rolls-Royce hackathon',
    date: 'Two days',
    text: 'Team of six: an agentic RAG assistant and dashboards with Streamlit and local Ollama.',
    image: '',
  },
  {
    title: 'Paper Trading',
    kicker: 'Side project',
    date: 'In development',
    text: 'AI-driven automated paper trading and data systems on AWS, Python, Terraform and CI/CD end to end.',
    image: '',
  },
]

export const beyond = [
  {
    label: 'Build',
    text: 'Cloud side projects in my own time: AI-driven automated paper trading and data systems on AWS, Python, Terraform and CI/CD end to end.',
  },
  {
    label: 'Teamwork',
    text: 'Two-day Rolls-Royce hackathon (Project Hack 27), team of six: agentic RAG assistant and dashboards with Streamlit and local Ollama. Plus Brazilian Jiu-Jitsu: training and competing as a team.',
  },
  {
    label: "Coffee's on me, ask about",
    text: 'The ML VR kickboxing simulator from my MSc, competing at the BJJ British Open, cycling Bilbao to Venice, or the 50km ultra-marathon for charity.',
  },
]
