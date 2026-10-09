import { TRAINING } from "../../data.ts";
import { Reveal } from "../common/Reveal.tsx";
import { SectionTag } from "../common/SectionTag.tsx";

export function Training() {
  return (
    <section id="training" className="gn-section">
      <SectionTag num="09 —" title="Seminars &amp; Training" />
      <Reveal className="gn-list">
        {TRAINING.map((t, i) => (
          <div className="gn-mini-card" key={t.title}>
            <div className="gn-ledger-num">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <div className="gn-mini-card-title">{t.title}</div>
              <div className="gn-mini-card-meta">{t.venue}{t.date ? ` · ${t.date}` : ""}</div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
