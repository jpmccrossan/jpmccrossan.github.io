import type { Entry } from '../types'

export default {
  order: 50,
  slug: 'energy-api',
  kind: 'personal',
  theme: 'data',
  title: 'Energy API',
  kicker: 'Side project · Django REST',
  period: '2025',
  summary:
    'A REST API for half-hourly UK electricity data: generation by fuel, demand, interconnector flows and carbon intensity, with a CSV ETL pipeline and rich filtering.',
  intro: [
    'A REST API over half-hourly UK electricity data from 2020 to 2023: demand, generation by fuel, interconnector flows and carbon intensity. Built with Django, Django REST framework, django-filter and PostgreSQL.',
    'Data loads through an ETL pipeline, from the command line or by uploading a CSV to the API. Clients can then filter, order, limit and paginate it to answer questions like "the ten cleanest half-hours of 2023" in one request.',
  ],
  note: "Screenshots show 2023 data from NESO's public Historic GB Generation Mix, loaded with the app's own import command. That source has no demand or interconnector figures, so those fields read 0.",
  cover: { src: '/images/energy-api/01-cleanest-half-hours.jpg', caption: 'The ten cleanest half-hours of 2023', position: '0% 0%' },
  tags: ['Python', 'Django', 'Django REST framework', 'django-filter', 'PostgreSQL', 'ETL'],
  stats: [
    { value: '2', label: 'Endpoints: query the data, and upload a CSV' },
    { value: '6', label: 'Filterable fields, with exact, range and date lookups' },
    { value: '48', label: 'Half-hours of data per day, from 2020 to 2023' },
  ],
  links: [{ label: 'Code on GitHub', href: 'https://github.com/jpmccrossan/energy-app' }],
  sections: [
    {
      heading: 'Querying the data',
      body: [
        'One endpoint, GET /api/v1/energy/, combines filters with ordering and two ways of sizing the answer: page through results with page and page_size, or take a fixed slice with total_limit (0 returns everything in one list).',
      ],
      points: [
        'Cleanest hours: ?date_time__year=2023&ordering=carbon_intensity&total_limit=10',
        'Gas dependency: ?date_time__year=2023&date_time__month=6&gas__gt=13000&page_size=5',
        'Anomalies: ?date_time__year=2023&nuclear__lt=5300&wind_perc__gt=20&total_limit=20',
      ],
      tags: ['DRF', 'django-filter', 'Pagination'],
    },
    {
      heading: 'ETL pipeline',
      body: [
        'A shared ETL function parses the CSV, converts timestamps to timezone-aware datetimes and loads each half-hour into PostgreSQL, reporting how many rows were processed and which were skipped. It runs from a management command or from a multipart upload endpoint, so the dataset can be refreshed without touching the server.',
      ],
      tags: ['ETL', 'PostgreSQL', 'Management commands'],
    },
    {
      heading: 'Built to share',
      body: [
        'Secrets come from environment variables, the data stays out of the repo, and the README explains where to get it: the full Kaggle dataset, or NESO\'s official data with an included converter script.',
      ],
    },
  ],
  gallery: {
    title: 'The API',
    note: 'NESO 2023 data',
    images: [
      { src: '/images/energy-api/01-cleanest-half-hours.jpg', caption: 'Ordered by carbon intensity, top 10', position: '0% 0%' },
      { src: '/images/energy-api/02-paginated-gas-query.jpg', caption: 'Filtered and paginated: page 2 of 80', position: '0% 0%' },
      { src: '/images/energy-api/03-low-nuclear-high-wind.jpg', caption: 'Low nuclear, high wind: an anomaly query', position: '0% 0%' },
      { src: '/images/energy-api/04-csv-upload-endpoint.jpg', caption: 'The CSV upload endpoint', position: '0% 0%' },
    ],
  },
} satisfies Entry
