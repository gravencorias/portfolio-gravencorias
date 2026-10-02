import { AWARDS } from "../../data.ts";
import { Reveal } from "../common/Reveal.tsx";
import { SectionTag } from "../common/SectionTag.tsx";

export function Honors() {
  return (
    <section id="honors" className="gn-section">
      <SectionTag num="07 —" title="Awards &amp; Citations" />
      <Reveal className="gn-list">
        {AWARDS.map((a) => (
          <div className="gn-award-row" key={a}><span className="gn-award-dot" />{a}</div>
        ))}
      </Reveal>
    </section>
  );
}
