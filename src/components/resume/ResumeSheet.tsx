import type { ReactNode } from "react";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import {
  CONTACT,
  RESUME_CERTIFICATIONS,
  RESUME_EDUCATION,
  RESUME_EXPERIENCE,
  RESUME_LEADERSHIP,
  RESUME_PROFILE,
  RESUME_SKILLS,
  RESUME_WORK,
} from "../../data.ts";
import { Github, Linkedin } from "../common/BrandIcons.tsx";

const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="gn-resume-block">
      <h2 className="gn-resume-h">{title}</h2>
      {children}
    </section>
  );
}

function Entry({ title, meta, sub, children }: { title: string; meta?: string; sub: string; children?: ReactNode }) {
  return (
    <div className="gn-resume-entry">
      <div className="gn-resume-entry-head">
        <h3>{title}</h3>
        {meta && <span className="gn-resume-meta">{meta}</span>}
      </div>
      <p className="gn-resume-sub">{sub}</p>
      {children}
    </div>
  );
}

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="gn-resume-bullets">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

export function ResumeSheet() {
  return (
    <article className="gn-resume-sheet">
      <header className="gn-resume-head">
        <div>
          <h1 className="gn-resume-name">Graven Niel <span>M. Corias</span></h1>
          <p className="gn-resume-title">{RESUME_PROFILE.title}</p>
          <p className="gn-resume-focus">{RESUME_PROFILE.focus}</p>
        </div>
        <ul className="gn-resume-contact">
          <li><MapPin size={11} />{CONTACT.location}</li>
          <li><Phone size={11} /><a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a></li>
          <li><Mail size={11} /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
          <li><Globe size={11} /><a href={CONTACT.website}>{displayUrl(CONTACT.website)}</a></li>
          <li><Github size={11} /><a href={CONTACT.github}>{displayUrl(CONTACT.github)}</a></li>
          <li><Linkedin size={11} /><a href={CONTACT.linkedin}>{displayUrl(CONTACT.linkedin)}</a></li>
        </ul>
      </header>

      <Block title="Professional Summary">
        <p className="gn-resume-summary">{RESUME_PROFILE.summary}</p>
      </Block>

      <Block title="Technical Expertise">
        <dl className="gn-resume-skills">
          {RESUME_SKILLS.map((g) => (
            <div key={g.label}>
              <dt>{g.label}</dt>
              <dd>{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block title="Professional Experience">
        {RESUME_EXPERIENCE.map((r) => (
          <Entry key={r.title} title={r.title} meta={r.period} sub={r.org}>
            <Bullets items={r.bullets} />
          </Entry>
        ))}
      </Block>

      <Block title="Selected Development Work">
        <Bullets items={RESUME_WORK.map((w) => <><b>{w.title}</b> — {w.detail}</>)} />
      </Block>

      <Block title="Education">
        {RESUME_EDUCATION.map((e) => (
          <Entry key={e.degree} title={e.degree} meta={e.status} sub={`${e.school}, ${e.location}`} />
        ))}
      </Block>

      <Block title="Relevant Certifications & Training">
        <Bullets items={RESUME_CERTIFICATIONS} />
      </Block>

      <Block title="Leadership & Recognition">
        <Bullets items={RESUME_LEADERSHIP} />
      </Block>
    </article>
  );
}
