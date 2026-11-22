import { nav } from './content'

/** The two-digit number a page has in the main navigation, for its hero chip. */
export const navNum = (to: string) => nav.find((n) => n.to === to)?.num ?? '·'
