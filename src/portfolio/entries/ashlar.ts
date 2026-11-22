import type { Entry } from '../types'

export default {
  order: 10,
  slug: 'ashlar',
  kind: 'personal',
  theme: 'ai',
  title: 'Ashlar v2',
  kicker: 'Side project · AI agents',
  period: '2026 · Paper trading',
  summary:
    'An automatic trading system that I built with AI coding agents. Strict rules in the code mean an AI never decides whether a trade is made.',
  intro: [
    'I designed and built aiwf, a framework in which AI coding agents do the building while deterministic checks, recorded decisions and my own sign-off keep control. On top of it I built Ashlar v2, an automated trading system for London-listed funds.',
    'It decides from daily prices, sizes every position by risk, and trades through a broker\'s API, starting on a practice (paper) account. Live money comes only after a long paper record and my explicit approval.',
  ],
  note: 'All figures in the screenshots are demo data for illustration. The system itself is built and working.',
  cover: { src: '/images/ashlar/01-command-room.jpg', caption: 'The dashboard command room (demo data)' },
  tags: ['Python', 'AI agents', 'Claude Code', 'PostgreSQL', 'Starlette', 'htmx', 'systemd', 'Algorithmic trading', 'Risk management'],
  stats: [
    { value: '2,500+', label: 'Commits in the first six weeks' },
    { value: '1,700+', label: 'Automated tests in the trading system' },
    { value: '96%', label: 'Test coverage, higher on every money-path file' },
    { value: '0', label: 'AI calls on any path that sends an order' },
  ],
  sections: [
    {
      heading: 'aiwf: my AI working framework',
      body: [
        'A kernel, a quality gate, a shipping tool, a health monitor, a control room and a decision record. AI agents work in parallel, each in its own working copy, and every change lands only through the same gate: lint, strict typing, the full test suite, coverage floors, complexity and size limits, and import contracts between layers.',
        'Nothing an agent says counts as done until a check on the real machine shows it, and every failure gets a proven root cause and an automatic check that stops it recurring.',
      ],
    },
    {
      heading: 'Where AI may and may not act',
      body: [
        'No model call sits on any path that decides whether code runs, whether a job is healthy, whether a strategy is approved, or whether an order is sent.',
      ],
      points: [
        'AI may write code and tests, as changes that must pass the gate.',
        'AI may propose strategy ideas, registered before they are tested, and draft summaries and reviews.',
        'AI must not place orders, approve strategies, change limits, deploy, or mark anything done.',
      ],
    },
    {
      heading: 'The trading system',
      body: [
        'Built in fixed layers, each relying only on the one below: data (every row stamped with when it became known), a library of small rule-based strategies, risk sizing, a backtester and a judge that scores strategies only on unseen data and counts every trial, approvals tied to a fingerprint of each strategy\'s code, an order gateway (halt check, risk gate, one send, reconciliation with the broker), a daily trader with off-machine heartbeats, and a dashboard with a kill switch.',
      ],
    },
    {
      heading: 'Money rules held in code',
      body: [
        'Hard limits on risk per trade, total open risk, exposure, daily loss and drawdown live in the risk gate, never in a prompt. Orders are never retried automatically, and the book is reconciled with the broker after every order.',
      ],
    },
    {
      heading: 'Where it runs',
      kicker: 'v1 → v2',
      body: [
        'Earlier versions of the system ran in the cloud on AWS, with Python, Terraform and CI/CD end to end. Ashlar v2 runs on my own machine as systemd services, with off-machine heartbeats watching it.',
      ],
      tags: ['AWS', 'Terraform', 'CI/CD', 'systemd'],
    },
  ],
  gallery: {
    title: 'The dashboard',
    note: 'Demo data for illustration.',
    images: [
      ['02-command-room-kill-switch', 'Command room: the kill switch'],
      ['04-live-candles', 'Live: candles view'],
      ['08-strategies-compare', 'Strategies: compare'],
      ['09-strategies-detail', 'Strategies: detail'],
      ['11-research-idea', 'Research: an idea'],
      ['14-simulations', 'Simulations'],
      ['16-updates-daily-brief', 'Updates: daily brief'],
      ['19-agent', 'Agent'],
    ].map(([f, caption]) => ({ src: `/images/ashlar/${f}.jpg`, caption })),
  },
} satisfies Entry
