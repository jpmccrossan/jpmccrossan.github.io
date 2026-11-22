import type { Entry } from '../types'

export default {
  order: 20,
  slug: 'pkf-infuse',
  kind: 'work',
  title: 'PKF Infuse',
  role: 'Systems & Data Developer',
  kicker: 'Accountancy group · Sole developer',
  period: 'Jan – Dec 2025',
  summary:
    'I was the only developer for systems, data and AI. I built full-stack apps, including the resource management system, local and Azure AI systems and daily data pipelines, and helped the whole company start using AI.',
  intro: [
    'At PKF Infuse I was the sole developer across systems, data and AI. I delivered an AI platform on Azure AI Foundry, built an NLP pipeline on a locally hosted LLM so private data stays in-house, and built an AI system with the M&A team that drafts information memoranda with a human in the loop.',
    'I also led firm-wide AI adoption: I trained colleagues on tooling and prompt engineering, ran a Copilot webinar and an AI Week, and sat with non-technical teams to decide which processes were worth rebuilding around AI.',
  ],
  cover: {
    src: '/images/pkf-infuse/meet-jp.jpg',
    caption: 'Meet JP: Systems and Data Developer at PKF Infuse',
    position: '50% 30%',
    portrait: true,
    ratio: '1 / 1',
  },
  tags: ['Azure AI Foundry', 'Azure', 'RAG', 'Vector database', 'Fine-tuning', 'Custom models', 'Ollama', 'NLP', 'Python', 'Pandas', 'PostgreSQL', 'Power BI', 'Power Automate', 'Docker', 'Jenkins', 'CI/CD', 'Monitoring'],
  stats: [
    { value: 'Secure', label: 'Systems built with Microsoft authentication' },
    { value: 'Daily', label: 'Production ETL into PostgreSQL' },
    { value: '24', label: 'Microsoft Learn AI modules' },
    { value: 'AI Week', label: 'Run for the whole firm' },
  ],
  sections: [
    {
      heading: 'LLM workflows on Azure AI Foundry',
      body: [
        'An AI platform on Azure AI Foundry: prompt-chained, multi-step workflows, MSAL auth, Blob Storage and a shared prompt library.',
      ],
      tags: ['Azure AI Foundry', 'Prompt engineering'],
    },
    {
      heading: 'Self-hosted NLP for private data',
      body: [
        'A Python NLP pipeline on a locally hosted Ollama LLM for confidential client material, with full traceability and JSONL output for fine-tuning. AI that a regulated business can actually sign off.',
      ],
      tags: ['Ollama', 'NLP', 'Python'],
    },
    {
      heading: 'Human in the loop: information memoranda',
      body: [
        'Built with the corporate finance and M&A team: an AI system that drafts information memoranda, with people in control.',
      ],
      tags: ['LLMs', 'Corporate finance'],
    },
    {
      heading: 'Production ETL and dashboards',
      body: [
        "Pandas/NumPy ETL into PostgreSQL for the firm's resource management application (Flask, React), running daily in production and feeding Power BI dashboards for partners and operational teams.",
        'An automated Azure and Power Automate pipeline feeding live Power BI CPD compliance reporting.',
      ],
      tags: ['Pandas', 'NumPy', 'PostgreSQL', 'Power BI', 'Power Automate'],
    },
    {
      heading: 'Getting a whole firm using AI',
      points: [
        'Trained colleagues on AI tooling and prompt engineering.',
        'Ran a Copilot webinar and an AI Week.',
        'Chose with non-technical teams where AI helps, and where a simpler tool is better.',
      ],
      tags: ['Adoption', 'Training', 'Communication'],
    },
    {
      heading: 'RAG, custom models and fine-tuning',
      body: ['I built AI that works with the firm\'s own knowledge, on Azure and on local machines.'],
      points: [
        'RAG: AI that answers questions from the firm\'s own documents, using a vector database.',
        'Custom models: building models for specific tasks.',
        'Fine-tuning: adapting language models to the firm\'s work.',
        'Azure cloud development: AI services and pipelines on Azure.',
        'Ollama pipelines: language models running on the firm\'s own machines.',
      ],
      tags: ['RAG', 'Vector database', 'Fine-tuning', 'Azure', 'Ollama'],
    },
    {
      heading: 'Deployment, CI/CD and monitoring',
      body: ['I took apps and AI systems all the way to production and kept them running.'],
      points: [
        'Server deployment: apps deployed and running on the firm\'s servers.',
        'Docker: apps packaged in containers.',
        'CI/CD with Jenkins: automatic testing and deployment.',
        'Monitoring: watching systems in production so problems are caught early.',
      ],
      tags: ['Docker', 'Jenkins', 'CI/CD', 'Monitoring'],
    },
    {
      heading: 'Certifications',
      body: ['Microsoft Learn CPD, 24 modules in 2025, including:'],
      points: [
        'Implement a responsible generative AI solution in Azure AI Foundry',
        'Fine-tune a language model with Azure AI Foundry',
        'Develop a RAG-based solution with your own data',
        'Evaluate generative AI performance',
        'Secure Azure AI services',
      ],
      tags: ['Microsoft Learn', 'Azure AI Foundry'],
    },
  ],
} satisfies Entry
