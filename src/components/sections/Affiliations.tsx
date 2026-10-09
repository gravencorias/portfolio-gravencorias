import { AFFILIATIONS } from "../../data.ts";
import { Reveal } from "../common/Reveal.tsx";
import { SectionTag } from "../common/SectionTag.tsx";

export function Affiliations() {
  return (
    <section id="affiliations" className="gn-section">
      <SectionTag num="08 —" title="Affiliations" />
      <Reveal className="gn-list">
        {AFFILIATIONS.map((a, i) => (
          <div className="gn-mini-card" key={a}>
            <div className="gn-ledger-num">{String(i + 1).padStart(2, "0")}</div>
            <div className="gn-mini-card-title">{a}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
