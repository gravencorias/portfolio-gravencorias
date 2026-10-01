import { LANGUAGES, SKILLS, TECH_TAGS, type Skill } from "../../data.ts";
import { useReveal } from "../../hooks.ts";
import { Reveal } from "../common/Reveal.tsx";
import { SectionTag } from "../common/SectionTag.tsx";

function SkillRow({ skill }: { skill: Skill }) {
  const [ref, visible] = useReveal<HTMLDivElement>();
  return (
    <div className="gn-skill-row" ref={ref}>
      <div className="gn-skill-top">
        <b>{skill.label}</b>
        <span>{skill.percent}%</span>
      </div>
      <div className="gn-skill-track">
        <div className="gn-skill-fill" style={{ width: visible ? `${skill.percent}%` : "0%" }} />
      </div>
    </div>
  );
}

export function Stack() {
  return (
    <section id="stack" className="gn-section">
      <SectionTag num="02 —" title="Stack &amp; Proficiency" />
      <div className="gn-skills-grid">
        <div>
          <div className="gn-subhead">// PROFICIENCY</div>
          {SKILLS.map((s) => <SkillRow key={s.label} skill={s} />)}
        </div>
        <Reveal>
          <div className="gn-subhead">// TECH TAGS</div>
          <div className="gn-tagcloud">
            {TECH_TAGS.map((t) => <span key={t} className="gn-tagchip">{t}</span>)}
          </div>
          <div className="gn-langs">
            {LANGUAGES.map((l) => <span key={l} className="gn-langchip">{l.toUpperCase()}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
