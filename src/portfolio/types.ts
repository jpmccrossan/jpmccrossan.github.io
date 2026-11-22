// Types for portfolio entries. Each entry lives in its own file in ./entries/.

export type Img = {
  src: string
  caption: string
  /** show the whole image (letterboxed) instead of cropping it */
  contain?: boolean
  /** CSS object-position, to keep the subject in frame when cropped */
  position?: string
  /** portrait photo: shown tall on the entry page instead of as a wide banner */
  portrait?: boolean
  /** with `portrait`: the frame's aspect ratio, e.g. '480 / 450' (default 3 / 4) */
  ratio?: string
}

export type Block = {
  heading: string
  /** small label above the heading, e.g. "From the MSc · 2024" */
  kicker?: string
  body?: string[]
  points?: string[]
  tags?: string[]
}

export type LinkItem = { label: string; href: string; download?: boolean }

export type Stat = { value: string; label: string }

export type Entry = {
  /** position within its section: lower comes first */
  order: number
  slug: string
  /** which Portfolio section: jobs, personal projects built alone, or studies/research/team projects */
  kind: 'work' | 'personal' | 'study'
  /** personal projects only: which themed group they sit in (see THEMES in ./index.ts) */
  theme?: 'ai' | 'data' | 'apps'
  title: string
  /** job title for work entries */
  role?: string
  kicker: string
  period: string
  /** one line, used on cards */
  summary: string
  /** opening paragraphs on the entry's own page */
  intro: string[]
  cover?: Img
  tags: string[]
  current?: boolean
  /** a caveat shown under the intro, e.g. what can't be disclosed */
  note?: string
  stats?: Stat[]
  links?: LinkItem[]
  sections: Block[]
  gallery?: { title: string; note?: string; images: Img[] }
  related?: string[]
}
