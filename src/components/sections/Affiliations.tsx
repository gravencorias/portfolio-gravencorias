import { AFFILIATIONS } from "../../data.ts";
import { Reveal } from "../common/Reveal.tsx";
import { SectionTag } from "../common/SectionTag.tsx";

export function Affiliations() {
  return (
    <section id="affiliations" className="gn-section">
      <SectionTag num="08 —" title="Affiliations" />
      <Reveal className="gn-list">
        {AFFILIATIONS.map((a) => (
          <div className="gn-mini-card" key={a}>
            <div className="gn-mini-card-title">{a}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
