import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "../../data.ts";
import { SectionTag } from "../common/SectionTag.tsx";

function ProjectCard({ project, i }: { project: Project; i: number }) {
  return (
    <div className="gn-pcard">
      {project.link && (
        <a className="gn-pcard-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} />
      )}
      <div className="gn-pcard-index">{String(i + 1).padStart(2, "0")}</div>
      <div className="gn-pcard-bar" style={{ background: project.color }} />
      <h3>{project.title}{project.link && <ArrowUpRight size={14} style={{ color: "var(--ink-faint)" }} />}</h3>
      <p>{project.desc}</p>
      <div className="gn-pcard-tags">
        {project.tags.map((t) => (
          <span key={t} className="gn-pcard-tag" style={{ borderColor: `${project.color}55`, color: project.color, background: `${project.color}14` }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="gn-section">
      <SectionTag num="06 —" title="Capstone &amp; Projects" />
      <div className="gn-project-grid">
        {PROJECTS.map((p, i) => <ProjectCard project={p} i={i} key={p.title} />)}
      </div>
    </section>
  );
}
