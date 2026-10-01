import { Mail, Phone } from "lucide-react";
import { CONTACT } from "../../data.ts";
import { Github, Linkedin } from "../common/BrandIcons.tsx";
import { Reveal } from "../common/Reveal.tsx";

export function Connect() {
  return (
    <section id="connect" className="gn-section">
      <Reveal className="gn-connect">
        <div className="gn-tag">08 —</div>
        <h2>Ready to build something great together?</h2>
        <p className="gn-hero-bio" style={{ marginTop: "1.2rem" }}>
          Open to new roles in full-stack development, ERP solutions, or QA
          engineering. If that sounds like a fit, say hello.
        </p>
        <div className="gn-connect-ctas">
          <a className="gn-btn gn-btn-primary" href={`mailto:${CONTACT.email}`}>
            <Mail size={16} /> {CONTACT.email}
          </a>
          <a className="gn-btn gn-btn-ghost" href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>
            <Phone size={16} /> {CONTACT.phone}
          </a>
        </div>
        <div className="gn-social-row" style={{ marginTop: "2.2rem" }}>
          <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
        </div>
      </Reveal>
    </section>
  );
}
