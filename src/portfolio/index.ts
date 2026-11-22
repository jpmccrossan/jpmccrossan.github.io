// Portfolio entries: one file per page in ./entries/, picked up automatically.
//
// To add a portfolio item:
//   1. Copy ./entries/_template.ts to ./entries/<your-slug>.ts and fill it in.
//   2. Put its images in /public/images/<your-slug>/.
// That's it: its card appears in Portfolio (under Work, Personal projects or Studies, by `kind`), sorted by `order`,
// and its page appears at /portfolio/<your-slug>. Files starting with "_" are ignored.

import type { Entry } from './types'

export type { Block, Entry, Img, LinkItem, Stat } from './types'

const modules = import.meta.glob<{ default: Entry }>(['./entries/*.ts', '!./entries/_*.ts'], { eager: true })

const byOrder = (a: Entry, b: Entry) => a.order - b.order || a.title.localeCompare(b.title)

const all = Object.values(modules).map((m) => m.default)
const ofKind = (kind: Entry['kind']) => all.filter((e) => e.kind === kind).sort(byOrder)

export const workEntries = ofKind('work')
export const personalEntries = ofKind('personal')
export const studyEntries = ofKind('study')
export const entries: Entry[] = [...workEntries, ...personalEntries, ...studyEntries]
export const findEntry = (slug?: string) => entries.find((e) => e.slug === slug)

// Themed groups for personal projects, in display order
export const THEMES = [
  { id: 'ai', label: 'AI and agents', blurb: 'Tools built with and around AI models and coding agents.' },
  { id: 'data', label: 'Data tools and APIs', blurb: 'Turning messy data into something structured and useful.' },
  { id: 'apps', label: 'Apps and websites', blurb: 'Things people use directly, on a phone or in a browser.' },
] as const
