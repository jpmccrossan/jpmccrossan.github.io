import type { ReactNode } from 'react'

/** Split a title into short lines for the mega hero heading; the last line is blue. */
export function heroLines(title: string, max = 14): ReactNode[] {
  const lines: string[] = []
  for (const word of title.split(/\s+/)) {
    const last = lines[lines.length - 1]
    if (last && `${last} ${word}`.length <= max) lines[lines.length - 1] = `${last} ${word}`
    else lines.push(word)
  }
  return lines.map((l, i) => (
    <span key={i} className={i === lines.length - 1 ? 'blue' : undefined}>
      {l}
    </span>
  ))
}
