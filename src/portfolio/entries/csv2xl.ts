import type { Entry } from '../types'

export default {
  order: 30,
  slug: 'csv2xl',
  kind: 'personal',
  theme: 'data',
  title: 'csv2xl',
  kicker: 'Side project · Terminal tool',
  period: '2026',
  summary:
    'Fills an Excel template from a folder of messy CSVs, from the terminal. AI proposes typed specs, a human approves, and deterministic code does the work.',
  intro: [
    'You have a blank reporting workbook (titled sheets, tables with headers, number formats, charts) and a pile of exports that don\'t quite line up. csv2xl reads the template as a specification, works out what each table needs, has Claude propose typed specs for cleaning the data and computing every column, shows you each one to approve, and then fills a copy of the template with ordinary Python. Charts, formats and merged cells survive.',
    'The model never writes code that gets executed and never touches a number. It fills in a spec from a closed set of operations, a human approves it, and an interpreter runs it. Freeze the approved specs and every later run is free, offline and byte-for-byte reproducible.',
  ],
  note: 'The screenshots are real terminal output from the bundled synthetic example, replaying approved specs offline (no model calls).',
  cover: { src: '/images/csv2xl/02-dry-run.jpg', caption: 'A dry run: evidence gathered before any model call', position: '0% 0%' },
  tags: ['Python', 'Claude API', 'pandas', 'openpyxl', 'Pydantic', 'Parquet', 'CLI'],
  stats: [
    { value: '9 steps', label: 'Four model calls; everything between them is deterministic' },
    { value: '$0', label: 'To replay approved specs: offline and reproducible' },
    { value: '0', label: 'Model-written code ever executed' },
  ],
  links: [{ label: 'Code on GitHub', href: 'https://github.com/jpmccrossan/csv2xl' }],
  sections: [
    {
      heading: 'AI proposes, you approve, code does the work',
      points: [
        'Evidence first: every CSV is profiled as one dataset, columns are matched by name not position, and value drift across files is detected before any model is asked.',
        'Typed specs: Claude proposes cleaning, enrichment, triage and per-column detail specs from a closed set of operations.',
        'Approval gates: you approve, reject or quit at each step. When the model is unsure it asks a question with its evidence printed underneath.',
        'Build and check: tables are built and checked against what the template demands, and failures cascade back to the step that can fix them.',
      ],
      tags: ['Claude API', 'Pydantic', 'pandas'],
    },
    {
      heading: 'The template is the spec',
      points: [
        'Headers are the contract: a column headed 2024 is a period the data must produce; 2024 vs 2023 is a change between periods.',
        'Number formats are instructions: a 0.0% column only ever receives a proportion.',
        'If a table needs more rows than the template reserved, rows are inserted and charts are re-pointed at the rows actually written.',
        'Commentary boxes, merged cells and formulas are recognised and never written into.',
      ],
      tags: ['openpyxl', 'Excel'],
    },
    {
      heading: 'An audit trail for every number',
      body: [
        'Each run writes the cleaned data and every table exactly as written to the workbook (as Parquet and CSV), the approved specs as reviewable JSON, an append-only ledger of what was decided and by whom, and a fingerprint of every table. Replaying a frozen bundle reproduces the same fingerprint. A table the data cannot support is left empty with a reason, collected into a data request at the end.',
      ],
      tags: ['Parquet', 'Reproducibility'],
    },
  ],
  gallery: {
    title: 'In the terminal, and the result',
    note: 'Bundled synthetic example',
    images: [
      { src: '/images/csv2xl/01-inspect.jpg', caption: 'inspect: what the template demands of any data', contain: true },
      { src: '/images/csv2xl/02-dry-run.jpg', caption: 'A dry run: evidence, drift and diagnostics, free', contain: true },
      { src: '/images/csv2xl/03-cleaning.jpg', caption: 'The cleaning spec: types, and which values are the same', contain: true },
      { src: '/images/csv2xl/04-build-check.jpg', caption: 'Build and check: a capacity clash caught before writing', contain: true },
      { src: '/images/csv2xl/05-done.jpg', caption: 'Done: charts verified, fingerprinted, $0 on replay', contain: true },
      { src: '/images/csv2xl/06-template-blank.jpg', caption: 'Before: the blank template', contain: true },
      { src: '/images/csv2xl/07-template-filled.jpg', caption: 'After: the same sheet, filled, with its chart', contain: true },
      { src: '/images/csv2xl/08-growth-chart.jpg', caption: 'A chart redrawn from the written rows', contain: true },
    ],
  },
} satisfies Entry
