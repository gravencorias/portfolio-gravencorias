import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "../../data.ts";

export function MobileNav({ activeId }: { activeId: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="gn-topbar">
        <div className="gn-mark" style={{ fontSize: "1.2rem" }}>GN<span>.</span></div>
        <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={`gn-mobile-nav${open ? " is-open" : ""}`}>
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
            style={{ color: activeId === n.id ? "var(--ink)" : undefined }}>
            {n.num} — {n.label}
          </a>
        ))}
      </div>
    </>
  );
}
