import { Mail, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { CONTACT, NAV } from "../../data.ts";
import { Github, Linkedin } from "../common/BrandIcons.tsx";

interface SidebarProps {
  activeId: string;
  roleText: string;
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ activeId, roleText, collapsed, onToggle }: SidebarProps) {
  return (
    <aside className="gn-sidebar">
      <div>
        <div className="gn-sidebar-head">
          <div className="gn-mark">GN<span>.</span></div>
          <button
            className="gn-sidebar-toggle"
            onClick={onToggle}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-expanded={!collapsed}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
          </button>
        </div>
        <div className="gn-status-pip">
          <span className="gn-status-dot" />
          Available for opportunities
        </div>
        <div className="gn-sidebar-name">Graven Niel M. Corias</div>
        <div className="gn-sidebar-role">{roleText}<span className="gn-cursor-blink">|</span></div>
        <nav className="gn-nav">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={activeId === n.id ? "is-active" : ""}
              title={collapsed ? n.label : undefined} aria-label={n.label}>
              <span className="num">{n.num}</span><span className="label">{n.label}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="gn-sidebar-foot">
        <div className="gn-social-row">
          <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href={`mailto:${CONTACT.email}`} aria-label="Email"><Mail size={17} /></a>
        </div>
        <div className="gn-sidebar-loc">{CONTACT.location}</div>
      </div>
    </aside>
  );
}
