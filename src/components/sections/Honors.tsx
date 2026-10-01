import { AFFILIATIONS, AWARDS, TRAINING } from "../../data.ts";
import { Reveal } from "../common/Reveal.tsx";
import { SectionTag } from "../common/SectionTag.tsx";

export function Honors() {
  return (
    <section id="honors" className="gn-section">
      <SectionTag num="07 —" title="Honors, Affiliations &amp; Training" />
      <div className="gn-honors-grid">
        <Reveal>
          <div className="gn-subhead">// AWARDS & CITATIONS</div>
          {AWARDS.map((a) => (
            <div className="gn-award-row" key={a}><span className="gn-award-dot" />{a}</div>
          ))}
        </Reveal>
        <div>
          <Reveal>
            <div className="gn-subhead">// AFFILIATIONS</div>
            {AFFILIATIONS.map((a) => (
              <div className="gn-mini-card" key={a}>
                <div className="gn-mini-card-title">{a}</div>
              </div>
            ))}
          </Reveal>
          <Reveal>
            <div className="gn-subhead" style={{ marginTop: "2rem" }}>// SEMINARS &amp; TRAINING</div>
            {TRAINING.map((t) => (
              <div className="gn-mini-card" key={t.title}>
                <div className="gn-mini-card-title">{t.title}</div>
                <div className="gn-mini-card-meta">{t.venue}{t.date ? ` · ${t.date}` : ""}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
