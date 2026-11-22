import type { Entry } from '../types'

export default {
  order: 60,
  slug: 'focus-app',
  kind: 'personal',
  theme: 'apps',
  title: 'Focus',
  kicker: 'Side project · iPhone app',
  period: '2026',
  summary:
    'A privacy-first productivity app for the iPhone home screen: tasks, habits and long-term goals, with no accounts, no backend and no data leaving the device.',
  intro: [
    'A lightweight, privacy-first productivity app that lives on your iPhone home screen. No accounts, no backend, no subscriptions: everything stays on your device.',
    'It is a single-file progressive web app (HTML, CSS and JavaScript) with no frameworks, no build step and no dependencies, hosted on GitHub Pages and working offline after the first load.',
  ],
  note: 'Screenshots show illustrative demo data.',
  cover: { src: '/images/focus-app/01-dashboard.jpg', caption: 'The daily dashboard', position: '50% 0%', portrait: true },
  tags: ['JavaScript', 'HTML', 'CSS', 'PWA', 'Service Worker', 'localStorage', 'GitHub Pages'],
  stats: [
    { value: '1 file', label: 'The whole app, with no frameworks or build step' },
    { value: '0', label: 'Accounts, servers or trackers' },
    { value: 'Offline', label: 'Works offline after the first load' },
  ],
  links: [
    { label: 'Open the live app', href: 'https://jpmccrossan.github.io/FocusApp/focus.html' },
    { label: 'Code on GitHub', href: 'https://github.com/jpmccrossan/FocusApp' },
  ],
  sections: [
    {
      heading: 'Today, tasks and goals',
      points: [
        "A daily dashboard with a progress ring for today's tasks and at-a-glance stats.",
        'Tasks with deadlines and notes, linked to long-term goals, exportable to the iPhone calendar as .ics files.',
        'Goals with categories, deadlines, a progress slider and a count of linked tasks done.',
      ],
    },
    {
      heading: 'Habits that respect rest days',
      body: [
        'Habits run on flexible schedules (every day, chosen weekdays or once a month) with a 7-day history. The streak counter only counts scheduled days, so a rest day never breaks a streak.',
      ],
    },
    {
      heading: 'Your data stays yours',
      points: [
        'Everything is stored on the device in localStorage, with no analytics, tracking or ads.',
        "Today's events sync from a public iCloud calendar link, with no OAuth and no API keys.",
        'Full CSV export and import of tasks, habits and goals.',
      ],
      tags: ['Privacy', 'Offline-first'],
    },
  ],
  gallery: {
    title: 'The app',
    note: 'Demo data',
    images: [
      { src: '/images/focus-app/01-dashboard.jpg', caption: 'Today: progress, stats and tasks', contain: true },
      { src: '/images/focus-app/02-habits.jpg', caption: 'Habits, split by what is due today', contain: true },
      { src: '/images/focus-app/03-goals.jpg', caption: 'Long-term goals with progress', contain: true },
      { src: '/images/focus-app/04-settings.jpg', caption: 'Setup, data and CSV export', contain: true },
    ],
  },
} satisfies Entry
