import { ArrowUpRight } from "lucide-react";
import { CONTACT, ROLES, STATS, type Stat as StatData } from "../../data.ts";
import { useCountUp, useReveal, useTypewriter } from "../../hooks.ts";
import { Reveal } from "../common/Reveal.tsx";

function Stat({ stat, start }: { stat: StatData; start: boolean }) {
  const value = useCountUp(stat.value, start);
  return (
    <div>
      <div className="gn-stat-value">{value}{stat.suffix}</div>
      <div className="gn-stat-label">{stat.label}</div>
    </div>
  );
}

export function Hero() {
  const roleText = useTypewriter(ROLES);
  const [statsRef, statsVisible] = useReveal<HTMLDivElement>(0.4);
  return (
    <section id="profile" className="gn-section gn-hero">
      <Reveal>
        <div className="gn-hero-badge">
          <span className="gn-status-dot" style={{ background: "var(--signal)" }} />
          AVAILABLE FOR OPPORTUNITIES
        </div>
        <h1>Graven Niel <span>M. Corias</span></h1>
        <p className="gn-hero-role">
          <span style={{ color: "var(--ink-faint)" }}>const role = </span>
          <b>"{roleText}"</b><span className="gn-cursor-blink">|</span>
        </p>
        <p className="gn-hero-bio">
          4+ years building ERP systems and scalable web applications at Davao
          City Water District — from Odoo/Python internals to React TS and
          .NET Core APIs. Focused on clean architecture and interfaces people
          actually enjoy using.
        </p>
        <div className="gn-hero-ctas">
          <a className="gn-btn gn-btn-primary" href="#work">View the work <ArrowUpRight size={16} /></a>
          <a className="gn-btn gn-btn-ghost" href={`mailto:${CONTACT.email}`}>Get in touch</a>
        </div>
        <div className="gn-stats" ref={statsRef}>
          {STATS.map((s) => (
            <Stat key={s.label} stat={s} start={statsVisible} />
          ))}
        </div>
      </Reveal>
      <Reveal>
        <div className="gn-frame">
          <div className="gn-frame-bar">
            <div className="gn-frame-dots"><i /><i /><i /></div>
            <span>~/gn --status</span>
          </div>
          <div className="gn-frame-photo-wrap">
            <img src="/assets/hero.jpg" alt="Graven Niel M. Corias" />
            <div className="gn-scanline" />
            <div className="gn-frame-hud tl">STATUS: ACTIVE</div>
            <div className="gn-frame-hud br">DAVAO CITY, PH</div>
          </div>
          <div className="gn-frame-readout">
            <span>UPTIME: 4+ YRS</span>
            <span>STACK: ODOO / REACT / .NET</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
