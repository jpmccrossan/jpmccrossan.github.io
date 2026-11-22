import { FadeUp } from './Reveal'
import { skills } from '../content'

// The stack as simple rows: group name on the left, its skills as pills on the right.
export default function StackGrid() {
  return (
    <div className="stack-list">
      {skills.map((g, i) => (
        <FadeUp key={g.group} delay={i * 0.04} className="stack-row">
          <div className="stack-row-head">
            <h3>{g.group}</h3>
            <span className="label dim">{g.items.length} skills</span>
          </div>
          <div className="tags stack-pills">
            {g.items.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </FadeUp>
      ))}
    </div>
  )
}
