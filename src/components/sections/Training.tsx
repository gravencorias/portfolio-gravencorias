import { TRAINING } from "../../data.ts";
import { Reveal } from "../common/Reveal.tsx";
import { SectionTag } from "../common/SectionTag.tsx";

export function Training() {
  return (
    <section id="training" className="gn-section">
      <SectionTag num="09 —" title="Seminars &amp; Training" />
      <Reveal className="gn-list">
        {TRAINING.map((t) => (
          <div className="gn-mini-card" key={t.title}>
            <div className="gn-mini-card-title">{t.title}</div>
            <div className="gn-mini-card-meta">{t.venue}{t.date ? ` · ${t.date}` : ""}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
