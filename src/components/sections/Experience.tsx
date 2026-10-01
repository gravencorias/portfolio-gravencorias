import { EXPERIENCE } from "../../data.ts";
import { Reveal } from "../common/Reveal.tsx";
import { SectionTag } from "../common/SectionTag.tsx";

export function Experience() {
  return (
    <section id="experience" className="gn-section">
      <SectionTag num="03 —" title="Work Experience" />
      <div className="gn-ledger">
        {EXPERIENCE.map((e, i) => (
          <Reveal as="div" className="gn-ledger-row" key={e.role}>
            <div className="gn-ledger-num">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <div className="gn-ledger-role">{e.role}</div>
              <div className="gn-ledger-sub">{e.subtitle}</div>
              <div className="gn-ledger-org">{e.org}</div>
            </div>
            <div className="gn-ledger-period">{e.period}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
