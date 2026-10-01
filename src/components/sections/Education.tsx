import { EDUCATION } from "../../data.ts";
import { Reveal } from "../common/Reveal.tsx";
import { SectionTag } from "../common/SectionTag.tsx";

export function Education() {
  return (
    <section id="education" className="gn-section">
      <SectionTag num="05 —" title="Education" />
      <div className="gn-ledger">
        {EDUCATION.map((e, i) => (
          <Reveal as="div" className="gn-edu-row" key={e.degree}>
            <div className="gn-ledger-num">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <div className="gn-ledger-role">{e.degree}</div>
              {e.status && <div className="gn-ledger-status">{e.status}</div>}
              <div className="gn-ledger-sub">{e.school}</div>
              <div className="gn-ledger-org">{e.location}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
