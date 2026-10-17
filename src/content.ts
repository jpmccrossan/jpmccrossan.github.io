// All site copy lives here so it can be edited without touching components.
// Images: put web-ready files in /public/images and set the `image` fields, e.g. image: '/images/bjj-british-open.jpg'.
// Unedited source photos live in /originals (not committed).

export const profile = {
  firstName: 'James-Patrick',
  lastName: 'McCrossan',
  initials: 'JP',
  tagline: 'AI Engineering · LLMs & RAG · Python & Data',
  statement:
    'I build AI that a business can trust and actually use: LLM workflows, NLP on self-hosted models and agentic RAG, with the Python, data and cloud engineering around them.',
  status: 'Relocating to Copenhagen · 2026',
  location: 'Derby, UK',
  email: 'jpdmccrossan@gmail.com',
  github: 'https://github.com/jpmccrossan',
  linkedin: 'https://www.linkedin.com/in/james-patrick-mccrossan',
  portrait: '/images/portrait-shirt.jpg',
  headshot: '/images/portrait-suit.jpg',
  cv: '/cv/James-Patrick_McCrossan_CV.pdf',
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
    'At PKF Infuse I was the sole developer across systems, data and AI. I delivered an AI platform on Azure AI Foundry with prompt-chained, multi-step workflows, built an NLP pipeline on a locally hosted Ollama LLM with zero data leakage, and built an AI system with the M&A team that drafts information memoranda with a human in the loop.',
    'Now at Assystem I work on-site in a highly regulated nuclear environment, where I built a reinforcement learning simulator in Python and TensorFlow. I use LangChain and LangGraph for orchestration. Outside work, in my own time, I build with Claude, Claude Code and Cursor every day.',
    'I also led firm-wide AI adoption: I trained colleagues on tooling and prompt engineering, ran a Copilot webinar and an AI Week, and sat with non-technical teams to decide which processes were worth rebuilding around AI.',
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
      text: 'MSc Computing at Cardiff University. Dissertation: a machine learning VR kickboxing simulator in Python, TensorFlow, Unity and C#. Abstract published at MASA, and short paper accepted for publication at BritCHI in November.',
      image: '',
    },
    {
      num: '03',
      title: 'AI & Data',
      years: '2025 – now',
      text: 'Sole developer across systems, data and AI at PKF Infuse: LLM workflows, self-hosted NLP and firm-wide AI adoption. Then Python and reinforcement learning on-site in the nuclear sector with Assystem.',
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
    points: [
      'Python, TensorFlow, Unity and C#.',
      'Abstract published and presented at MASA.',
      'Short paper accepted for publication at BritCHI, November 2026.',
    ],
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
    items: ['PyTorch', 'TensorFlow', 'NLP', 'LLMs', 'Reinforcement learning', 'Prompt engineering', 'RAG', 'Ollama', 'Azure AI Foundry'],
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
  'PyTorch',
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
    image: '/images/cycling-bilbao-venice.jpg',
  },
  {
    title: 'Brazilian Jiu-Jitsu',
    kicker: 'British Open',
    date: 'Ongoing',
    text: 'Competed at the British Open. Training and competing as a team, week in, week out.',
    image: '/images/bjj-british-open.jpg',
  },
  {
    title: '50KM Ultra',
    kicker: 'For charity',
    date: 'Completed',
    text: 'A 50km ultra-marathon run for charity.',
    image: '/images/ultra-50km-bw.jpg',
  },
  {
    title: 'VR Kickboxing',
    kicker: 'MASA · BritCHI',
    date: '2024 – 2026',
    text: 'A machine learning VR kickboxing simulator. Abstract published at MASA; short paper accepted at BritCHI.',
    image: '/images/vr-kickboxing/system-in-action.jpg',
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
    text: 'The ML VR kickboxing simulator from my MSc (published at MASA, accepted at BritCHI), competing at the BJJ British Open, cycling Bilbao to Venice, or the 50km ultra-marathon for charity.',
  },
]

// "Why hire me" bento on the About page, focused on AI work.
export const aboutHireReasons = [
  {
    stat: 'Multi-step',
    title: 'LLM workflows, delivered',
    text: 'An AI platform on Azure AI Foundry: prompt-chained workflows, MSAL auth, Blob Storage and a shared prompt library.',
    tags: ['Azure AI Foundry', 'Prompt engineering'],
    wide: true,
  },
  {
    stat: '0',
    title: 'Bytes of data leaked',
    text: 'NLP on a locally hosted Ollama LLM for confidential client material, with full traceability and JSONL output for fine-tuning.',
    tags: ['Ollama', 'NLP'],
  },
  {
    stat: 'M&A',
    title: 'Human in the loop',
    text: 'Built with the corporate finance and M&A team: an AI system that drafts information memoranda, with people in control.',
    tags: ['LLMs', 'Corporate finance'],
  },
  {
    stat: '2 days',
    title: 'Agentic RAG, fast',
    text: 'Rolls-Royce hackathon, team of six: an ambiguous business problem to a working agentic RAG assistant with dashboards.',
    tags: ['RAG', 'Streamlit', 'Ollama'],
  },
  {
    stat: 'AI Week',
    title: 'Gets people using AI',
    text: 'Trained colleagues, ran a Copilot webinar and an AI Week, and chose with them where AI helps and where a simpler tool is better.',
    tags: ['Adoption', 'Training'],
  },
]

// "Why hire me" bento on the landing page. `stat` is the big headline figure.
export const hireReasons = [
  {
    stat: 'v1',
    title: 'Ships end to end',
    text: "Built v1 of a major nuclear company's application solo across the stack: FastAPI, React, PostgreSQL, API and database design.",
    tags: ['FastAPI', 'React', 'PostgreSQL'],
    wide: true,
  },
  {
    stat: '0',
    title: 'Bytes of data leaked',
    text: 'NLP pipeline on a locally hosted Ollama LLM with full traceability. AI that a regulated business can actually sign off.',
    tags: ['LLMs', 'Ollama', 'NLP'],
  },
  {
    stat: 'Daily',
    title: 'Production data',
    text: 'Pandas/NumPy ETL into PostgreSQL running daily in production, feeding Power BI dashboards for partners.',
    tags: ['ETL', 'Power BI'],
  },
  {
    stat: '2×',
    title: 'Published research',
    text: 'ML VR kickboxing simulator: abstract published at MASA, short paper accepted at BritCHI (November 2026).',
    tags: ['TensorFlow', 'Unity', 'HCI'],
  },
  {
    stat: 'Firm-wide',
    title: 'Multiplies the team',
    text: 'Led firm-wide AI adoption and trained colleagues on tooling and prompt engineering. Explains results to non-technical partners.',
    tags: ['Communication', 'Training'],
  },
]

// Featured research: pinned horizontal-scroll case study on the landing page.
export const research = {
  kicker: 'Featured research',
  title: 'ML VR kickboxing',
  summary:
    'A VR sparring partner that reads you back. Pose estimation drives a machine learning model that predicts your next move, and an avatar that fights like a person.',
  venues: ['Abstract · MASA', 'Short paper · BritCHI, Nov 2026'],
  slides: [
    { image: '/images/masa-presenting.jpg', caption: 'Presenting the work at MASA', position: '20% 40%' },
    { image: '/images/vr-kickboxing/mediapipe-landmarks.jpg', caption: '33 body landmarks with MediaPipe', contain: true },
    { image: '/images/vr-kickboxing/pose-guard.jpg', caption: 'Live pose capture: guard' },
    { image: '/images/vr-kickboxing/pose-garden.jpg', caption: 'Data collection in the wild' },
    { image: '/images/vr-kickboxing/avatar-animations.jpg', caption: 'Predictions driving the Unity avatar' },
    { image: '/images/vr-kickboxing/system-in-action.jpg', caption: 'The system in action' },
  ] as { image: string; caption: string; position?: string; contain?: boolean }[],
}
