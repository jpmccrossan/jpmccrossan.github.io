// All site copy lives here so it can be edited without touching components.
// Portfolio pages live in ./portfolio.ts and application pages in ./applications.ts.
import { applicationsInNav } from './applications'
// Images: put web-ready files in /public/images and set the `image` fields, e.g. image: '/images/bjj-british-open.jpg'.
// Unedited source photos live in /originals (not committed).

export const profile = {
  firstName: 'James-Patrick',
  lastName: 'McCrossan',
  initials: 'JP',
  tagline: 'AI Engineering · LLMs & RAG · Python & Data',
  statement:
    'I build AI that a business can trust and actually use: LLM workflows, NLP on self-hosted models and agentic RAG, with the Python, data and cloud engineering around them.',
  status: 'Relocating to Copenhagen',
  location: 'Derby, UK',
  email: 'jpdmccrossan@gmail.com',
  github: 'https://github.com/jpmccrossan',
  linkedin: 'https://www.linkedin.com/in/james-patrick-mccrossan',
  portrait: '/images/portrait-shirt.jpg',
  headshot: '/images/portrait-suit.jpg',
  cv: '/cv/James-Patrick_McCrossan_CV.pdf',
}

export const nav = [
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  ...(applicationsInNav ? [{ label: 'Applications', to: '/applications' }] : []),
  { label: 'Contact', to: '/contact' },
].map((n, i) => ({ ...n, num: String(i + 1).padStart(2, '0') }))

export const stats = [
  { value: 50, suffix: 'KM', label: 'Charity ultra-marathon' },
  { value: 24, suffix: '', label: 'Microsoft Learn AI modules' },
  { value: 2023, suffix: '', label: 'Bilbao → Venice, solo by bike' },
  { value: 1, suffix: 'MO', label: 'Notice to start in Copenhagen' },
]

export const about = {
  intro: [
    'At PKF Infuse I was the sole developer across systems, data and AI. I delivered an AI platform on Azure AI Foundry with prompt-chained, multi-step workflows, built an NLP pipeline on a locally hosted Ollama LLM so private data stays in-house, and built an AI system with the M&A team that drafts information memoranda with a human in the loop.',
    'Now at Assystem I am a backend Python developer working across AI engineering, data science, full-stack applications and custom machine learning models, in both forward-deployed roles and internal projects. I built a reinforcement learning simulator in Python and TensorFlow. I use LangChain and LangGraph for orchestration. Outside work, in my own time, I build with Claude, Claude Code and Cursor every day.',
    'I also led firm-wide AI adoption: I trained colleagues on tooling and prompt engineering, ran a Copilot webinar and an AI Week, and sat with non-technical teams to decide which processes were worth rebuilding around AI.',
  ],
  // Short versions for the Portfolio profile, in plain English
  summary:
    'I am a backend Python developer working across AI engineering, data science, full-stack apps and machine learning, in forward-deployed roles and on internal projects.',
  availability:
    'I am moving to Copenhagen, where I already have a place to live. With a job offer that meets the salary needed for a Danish work visa, I can start about a month later.',
  highlight:
    "I am marrying my Danish fiancée next year, and I already have a place to live in Copenhagen. When I am offered a job that pays the salary Denmark requires for a work visa, I can apply for the visa. It usually takes about a month, and my notice period is one month, so I could start soon after.",
  chapters: [
    {
      num: '01',
      title: 'MSc Computing, Cardiff University',
      to: '/portfolio/cardiff-msc',
      years: '2023 – 2024',
      text: 'MSc Computing at Cardiff University. Dissertation: a machine learning VR kickboxing simulator in Python, TensorFlow, Unity and C#. Abstract published at MASA, and the paper published at BritCHI in November 2026.',
      image: '/images/vr-kickboxing/headset-guard.jpg',
    },
    {
      num: '02',
      title: 'Assystem & PKF Infuse',
      years: '2025 – now',
      text: "Now a backend Python developer at Assystem, working across AI engineering, data science, full-stack apps and machine learning, on-site with clients and on internal projects. Before that, sole developer across systems, data and AI at PKF Infuse: LLM workflows, self-hosted NLP and firm-wide AI adoption.",
      image: '/images/pkf-infuse/meet-jp.jpg',
      links: [
        { label: 'Assystem', to: '/portfolio/assystem' },
        { label: 'PKF Infuse', to: '/portfolio/pkf-infuse' },
      ],
    },
    {
      num: '03',
      title: 'Copenhagen',
      years: 'Next →',
      text: 'Next stop: Denmark. Learning Danish, already fluent in the bike culture.',
      image: '/images/copenhagen/little-mermaid.jpg',
    },
    {
      num: '04',
      title: 'Landscapes',
      years: '2018 – 2023',
      text: 'BA (Hons) Landscape Architecture at the University of Gloucestershire (2018 – 2021), then Graduate Landscape Architect at Randall Thorp (2022 – 2023). Led landscape design on a multi-million-pound insurance-company headquarters scheme with clients and consultant teams.',
      image: '/images/landscape/power-forest-01-masterplan.jpg',
    },
  ],
  howIWork: ['Clear communicator', 'Eye for detail', 'Team-first', 'Systems thinking', 'Driven'],
  languages: 'English, native · Danish, actively learning',
}

// Work history and projects now live in ./portfolio/, one file per page.

// Home page hero. Written in short, plain sentences for readers whose first language isn't English.
export const home = {
  intro:
    'I build AI tools that companies can trust and use every day. I work with Python, data and large language models. Today I am a backend Python developer working on AI, data science, full-stack apps and machine learning, both on-site with clients and on internal projects. I am moving to Copenhagen to live with my Danish fiancée, and I am eager to find a job there.',
  personal:
    'Outside work I train Brazilian Jiu-Jitsu, go running and play board games, and I practise my Danish every day.',
  traits: ['Disciplined', 'Driven', 'Hard-working', 'Team player'],
  // "About me" tiles under "My work"
  about: [
    {
      kicker: 'On the mats',
      title: 'Brazilian Jiu-Jitsu',
      text: 'I train with my team every week, and I have competed at the BJJ British Open.',
      image: '/images/bjj-british-open.jpg',
      position: '50% 30%',
    },
    {
      kicker: 'Endurance',
      title: 'Running',
      text: 'I enjoy running, and I have run a 50 km ultra-marathon for charity.',
      image: '/images/ultra-50km-bw.jpg',
      position: '50% 25%',
    },
    {
      kicker: 'Solo by bike',
      title: 'Bilbao → Venice',
      text: 'I cycled alone across Spain, Sardinia and Italy, from Bilbao to Venice.',
      image: '/images/cycling-bilbao-venice.jpg',
      position: '50% 30%',
    },
    {
      kicker: 'Every day',
      title: 'Learning Danish',
      text: 'I read Erik Menneskesøn with my Danish fiancée every day, and I am at level 25 on Duolingo.',
      image: '',
      position: '50% 50%',
    },
  ],
}

export const skills: { group: string; primary?: boolean; items: string[] }[] = [
  {
    group: 'AI & Machine Learning',
    primary: true,
    items: ['PyTorch', 'TensorFlow', 'Keras', 'NLP', 'LLMs', 'Reinforcement learning', 'Prompt engineering', 'RAG', 'LangChain', 'LangGraph', 'Ollama', 'Azure AI Foundry', 'scikit-learn', 'Fine-tuning', 'Vector databases', 'MediaPipe', 'Claude Code', 'Cursor'],
  },
  { group: 'Python & Backend', items: ['Python', 'REST APIs', 'FastAPI', 'Flask', 'Starlette', 'Django', 'Nginx'] },
  {
    group: 'Data',
    items: ['SQL', 'Pandas', 'NumPy', 'PostgreSQL', 'SQLite', 'ETL pipelines', 'Dashboards', 'Power BI', 'Power Automate', 'Plotly JS', 'Streamlit'],
  },
  { group: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Terraform', 'Server deployment', 'Monitoring', 'systemd'] },
  { group: 'Also', items: ['Testing', 'Code review', 'Documentation', 'Agile', 'Scrum', 'React', 'TypeScript', 'JavaScript', 'htmx', 'C#', 'Unity'] },
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
  /** link to a portfolio page or an About section */
  to?: string
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
    text: 'I train with my team every week, and I have competed at the British Open.',
    image: '/images/bjj-british-open.jpg',
  },
  {
    title: '50KM Ultra',
    kicker: 'For charity',
    date: 'Completed',
    text: 'A 50km ultra-marathon run for charity.',
    image: '/images/ultra-50km-bw.jpg',
  },
]

export const beyond = [
  {
    label: 'Ask me about',
    text: 'Cycling alone from Bilbao to Venice, competing at the BJJ British Open, or running 50 km for charity.',
  },
  {
    label: 'Play a game with me',
    text: 'Bring a deck: Star Realms, the Star Wars deck-building game or Magic: The Gathering.',
  },
  {
    label: 'Speak Danish with me',
    text: 'I am learning every day and I am happy to practise.',
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
    stat: 'Secure',
    title: 'Secure systems',
    text: 'I built secure systems using Microsoft authentication, and AI on the firm\'s own machines so confidential client material stays in-house.',
    tags: ['Microsoft authentication', 'Ollama'],
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
// "What I offer" on the home page: a capability headline, the evidence, and any relevant courses.
// Course names are as listed on the CV (Microsoft Learn CPD, 24 modules, 2025).
export const hireReasons = [
  {
    stat: 'Ship',
    title: 'I ship products from prototype to production',
    text: 'From the first version to a live system that people use every day. I built version 1 of an app for a large nuclear company. At PKF Infuse I built full-stack apps: the firm\'s resource management system, local AI systems, an AI platform on Azure AI Foundry, and more.',
    tags: ['FastAPI', 'Flask', 'React', 'PostgreSQL', 'Azure AI Foundry'],
  },
  {
    stat: 'Secure',
    title: 'Monitoring, analytics and security',
    text: 'Live Power BI reporting, including automated compliance tracking. AI that runs on the company\'s own machines, so private data never leaves, with every step traceable. Today I work on-site in a secure, highly regulated industry.',
    tags: ['Power BI', 'Azure', 'Power Automate'],
    certs: ['Secure Azure AI services', 'Evaluate generative AI performance'],
  },
  {
    stat: 'AI',
    title: 'AI tools people can trust',
    text: 'Multi-step AI workflows on Azure AI Foundry, private text analysis on a local language model, and AI assistants that answer questions from a company\'s own data.',
    tags: ['LLMs', 'RAG', 'Ollama', 'Azure AI Foundry'],
    certs: [
      'Implement a responsible generative AI solution in Azure AI Foundry',
      'Fine-tune a language model with Azure AI Foundry',
      'Develop a RAG-based solution with your own data',
    ],
  },
  {
    stat: 'Daily',
    title: 'Data pipelines and reports',
    text: 'Python and SQL pipelines that load company data into PostgreSQL every day and feed the Power BI reports that partners and teams use.',
    tags: ['Python', 'SQL', 'Pandas', 'Power BI'],
  },
  {
    stat: '2×',
    title: 'Published research',
    text: 'My VR kickboxing abstract was published at MASA, the Martial Arts Studies Association conference, and my paper was published at BritCHI, the UK\'s HCI conference. HCI means human–computer interaction: how people use technology. BritCHI is run by the BCS, the British Computer Society.',
    tags: ['TensorFlow', 'Unity', 'HCI'],
  },
  {
    stat: 'Team',
    title: 'A disciplined team player',
    text: 'I led AI training for a whole company and explain technical results in simple words. I ran a 50 km ultra-marathon for charity and train in Brazilian Jiu-Jitsu with my team every week.',
    tags: ['Training', 'Teamwork', 'Discipline'],
  },
]

// Featured research: pinned horizontal-scroll case study on the landing page.
export const research = {
  kicker: 'Featured research',
  title: 'ML VR kickboxing',
  summary:
    'A VR sparring partner that reads you back. Pose estimation drives a machine learning model that predicts your next move, and an avatar that fights like a person.',
  venues: ['Abstract published · MASA', 'Paper published · BritCHI, Nov 2026'],
  slides: [
    { image: '/images/masa-presenting.jpg', caption: 'Presenting the work at MASA', position: '20% 40%' },
    { image: '/images/vr-kickboxing/mediapipe-landmarks.jpg', caption: '33 body landmarks with MediaPipe', contain: true },
    { image: '/images/vr-kickboxing/pose-guard.jpg', caption: 'Live pose capture: guard' },
    { image: '/images/vr-kickboxing/pose-garden.jpg', caption: 'Streaming pose landmarks to Unity' },
    { image: '/images/vr-kickboxing/avatar-animations.jpg', caption: 'Predictions driving the Unity avatar' },
    { image: '/images/vr-kickboxing/system-in-action.jpg', caption: 'The system in action' },
  ] as { image: string; caption: string; position?: string; contain?: boolean }[],
}

// About: the personal side, merged in from "Beyond" and the first (2024) website.
type Photo = { src: string; caption: string; contain?: boolean; position?: string }

export const personal = {
  intro:
    'Outside work I train Brazilian Jiu-Jitsu, go running and play board games. I am also learning Danish every day.',
  values: [
    {
      label: 'On the mats',
      title: 'Brazilian Jiu-Jitsu',
      text: 'I train with my team every week, and I have competed at the British Open. Years of martial arts (Taekwondo, kickboxing, wrestling and BJJ) taught me discipline, focus and respect.',
    },
    {
      label: 'Endurance',
      title: 'Running',
      text: 'I enjoy running, and I have run a 50 km ultra-marathon for charity.',
    },
    {
      label: 'Game night',
      title: 'Board games',
      text: 'I enjoy strategy and deck-building games like Star Realms, the Star Wars deck-building game and Magic: The Gathering.',
    },
    {
      label: 'Every day',
      title: 'Learning Danish',
      text: 'I am actively learning Danish. Every day I read Erik Menneskesøn with my Danish fiancée, and I am at level 25 on Duolingo.',
    },
  ],
  cycling: {
    title: 'Bilbao → Venice',
    year: '2023',
    text: [
      'I cycled solo across Europe: a ferry from Portsmouth to Bilbao, then through Spain and Sardinia into Italy, finishing in Venice and flying home to Birmingham.',
      'I met many fascinating people and made countless memories: sleeping under the stars, swimming in crystal-clear water, and exploring cities like Barcelona, Rome and Venice. A head start on Danish bike culture.',
    ],
    route: 'Portsmouth · Bilbao · Logroño · Pamplona · Zaragoza · Lleida · Barcelona · Porto Torres · Alghero · Cagliari · Rome · Florence · Bologna · Venice',
    photos: [
      { src: '/images/cycling/00-route-map.jpg', caption: 'The route', contain: true },
      { src: '/images/cycling-bilbao-venice.jpg', caption: 'With the bike', position: '50% 30%' },
      { src: '/images/cycling/02-loaded-bike-in-town.jpg', caption: 'Fully loaded, in an old-town street', position: '50% 60%' },
      { src: '/images/cycling/04-bilbao-guggenheim-puppy.jpg', caption: "Jeff Koons' Puppy at the Guggenheim, Bilbao" },
      { src: '/images/cycling/05-mountain-road.jpg', caption: 'Open road below the mountains' },
      { src: '/images/cycling/06-bullring-festival.jpg', caption: 'A bullring crowd in white and red' },
      { src: '/images/cycling/08-barcelona-sagrada-familia.jpg', caption: 'The Sagrada Família, Barcelona' },
      { src: '/images/cycling/09-rocky-coast.jpg', caption: 'A rocky stretch of coast' },
      { src: '/images/cycling/10-beach.jpg', caption: 'A quiet beach' },
      { src: '/images/cycling/11-rome-colosseum.jpg', caption: 'The Colosseum, Rome' },
      { src: '/images/cycling/12-annunciation-painting.jpg', caption: "Leonardo's Annunciation, Uffizi, Florence" },
      { src: '/images/cycling/13-medieval-piazza.jpg', caption: 'A medieval piazza' },
      { src: '/images/cycling/14-sunset-over-water.jpg', caption: 'Sunset over the water' },
      { src: '/images/cycling/03-harbour.jpg', caption: 'A harbour on the way' },
      { src: '/images/cycling/07-church-steps.jpg', caption: 'Steps up to a historic church' },
    ] as Photo[],
  },
  combat: {
    title: 'On the mats',
    text: [
      "Martial arts have been part of my life for years: Taekwondo, kickboxing, wrestling and Brazilian Jiu-Jitsu. I keep working on my technique, and I enjoy both training and sparring.",
      "Now I train in Brazilian Jiu-Jitsu with my team every week, and I have competed at the British Open.",
    ],
    photos: [
      { src: '/images/bjj-british-open.jpg', caption: 'At the BJJ British Open' },
      { src: '/images/mma-predators-gym.jpg', caption: 'Predators Mixed Martial Arts Gym', contain: true },
    ] as Photo[],
  },
  italy: {
    year: '2021',
    title: 'Support work and Italy',
    text: [
      'After my BA, I worked as a general support worker.',
      'Then I travelled around Italy, exploring Naples, Florence, Milan, Verona and more.',
    ],
  },
  design: {
    title: 'Landscape architecture',
    text: [
      'Before software I designed landscapes: a BA (Hons) in Landscape Architecture at the University of Gloucestershire from 2018 to 2021, then Graduate Landscape Architect at Randall Thorp in Manchester from 2022 to 2023.',
      'I led landscape design on a multi-million-pound insurance-company headquarters scheme with clients and consultant teams. The work gave me teamwork, deadlines, client work, an organised workflow and creative design problem-solving, and I bring all of it to software. These "Power Forest" boards are from my BA at the University of Gloucestershire.',
    ],
    photos: [
      { src: '/images/landscape/power-forest-01-masterplan.jpg', caption: 'Power Forest (BA project): masterplan', contain: true },
      { src: '/images/landscape/power-forest-02-construction-drawing.jpg', caption: 'Construction drawing', contain: true },
      { src: '/images/landscape/power-forest-03-design-details.jpg', caption: 'Design details', contain: true },
      { src: '/images/landscape/power-forest-04-board.jpg', caption: 'Presentation board', contain: true },
      { src: '/images/landscape/power-forest-05-energetic-exchange.jpg', caption: 'Energetic Exchange', contain: true },
    ] as Photo[],
  },
}
