import type { Entry } from '../types'

export default {
  order: 20,
  slug: 'project-hack-27',
  kind: 'study',
  title: 'Project Hack 27',
  kicker: 'Hackathon · Rolls-Royce',
  period: '22–23 Apr 2026',
  summary:
    'Team of six, two days: "The Assumptionisator", live cost intelligence and deliverability tracking for jet engine projects, with a local AI that answers questions from the data.',
  intro: [
    'A two-day hackathon at the Rolls-Royce L&D Centre in Derby, in a team of six ("Clearly We Assumed"). The challenge: the assumptions behind project delivery, applied to Rolls-Royce engines. We took that ambiguous business problem to a working agentic RAG assistant with dashboards, built with Streamlit and a local Ollama model.',
    'Jet engine projects rely on hundreds of assumptions about material costs, energy prices, exchange rates, supplier reliability and team capacity. When they drift, the project is at risk. The Assumptionisator brings them into one place, tracks them against live market data, and lets the team log their confidence over time, giving each project a single deliverability score visible from the shop floor to the C-suite.',
  ],
  note: 'Screenshots are from the app running locally with live market data fetched on the day they were taken.',
  cover: { src: '/images/project-hack-27/02-deliverability.jpg', caption: 'The deliverability dashboard', position: '0% 0%' },
  tags: ['Python', 'Streamlit', 'Ollama', 'RAG', 'SQLite', 'Plotly', 'yfinance', 'Teamwork'],
  stats: [
    { value: '2 days', label: 'Problem to working app' },
    { value: '6', label: 'People on the team' },
    { value: '128', label: 'Assumptions tracked: 104 market cost, 24 internal' },
    { value: '0', label: 'Data leaving the machine: all AI runs locally' },
  ],
  links: [{ label: 'Code on GitHub', href: 'https://github.com/jpmccrossan/Project_Hack_27_V2' }],
  sections: [
    {
      heading: 'One score per project',
      body: [
        'Every project gets a card with budget against live market cost, a red, amber or green status, market drift, the team\'s confidence and a composite 0–100 deliverability score. Three roles (general project working, project manager and C-suite) log confidence independently, and the composite is their average, on the JIC probability scale from "Critical" to "Almost certain".',
      ],
      tags: ['Streamlit', 'Plotly'],
    },
    {
      heading: 'Assumptions against live prices',
      points: [
        'External assumptions: material and energy costs locked in at project start, compared with live prices from Yahoo Finance, with the drift shown for each.',
        'Internal assumptions: a team-managed tracker with confidence reviews, internal and external drift, owners and a review schedule.',
        'A market dashboard of metals, energy, FX and macro indicators, mapped to the jet engine components that depend on them.',
      ],
      tags: ['yfinance', 'World Bank API', 'SQLite'],
    },
    {
      heading: 'Local AI that reasons from the data',
      points: [
        'Ask questions in plain English: the AI writes SQL against the live database, runs it read-only, and reasons from the real numbers to answer.',
        'An AI assessment classifies every assumption as a risk, an assumption or both, with a risk level and a one-sentence rationale.',
        'All inference runs on-device through Ollama, so no data leaves the machine.',
      ],
      tags: ['Ollama', 'Agentic RAG', 'Text-to-SQL'],
    },
  ],
  gallery: {
    title: 'The Assumptionisator',
    note: 'Live data',
    images: [
      { src: '/images/project-hack-27/01-home.jpg', caption: 'Home: the four tools and system status', position: '0% 0%' },
      { src: '/images/project-hack-27/02-deliverability.jpg', caption: 'Deliverability: one score per project', position: '0% 0%' },
      { src: '/images/project-hack-27/03-assumptions-register.jpg', caption: 'Assumptions register against live prices', position: '0% 0%' },
      { src: '/images/project-hack-27/04-market-cost-dashboard.jpg', caption: 'Market cost dashboard', position: '0% 0%' },
      { src: '/images/project-hack-27/05-ai-data-chat.jpg', caption: 'AI data chat, on a local Ollama model', position: '0% 0%' },
      { src: '/images/project-hack-27/06-technical-docs.jpg', caption: 'Built-in technical documentation', position: '0% 0%' },
    ],
  },
} satisfies Entry
