import { useEffect, useState } from "react";

const MESSAGES = [
  "booting gn.dev",
  "authenticating engineer: graven niel m. corias",
  "mounting stack: odoo · react · .net core",
  "status: ready",
];

export function BootSequence() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [hidden, setHidden] = useState(reduced);
  const [lines, setLines] = useState(reduced ? MESSAGES.length : 0);
  const [barWidth, setBarWidth] = useState(reduced ? 100 : 0);
  useEffect(() => {
    if (reduced) return;
    document.body.style.overflow = "hidden";
    let i = 0;
    const lineTimer = setInterval(() => {
      i += 1;
      setLines(i);
      setBarWidth(Math.min(100, (i / MESSAGES.length) * 100));
      if (i >= MESSAGES.length) {
        clearInterval(lineTimer);
        setTimeout(() => {
          setHidden(true);
          document.body.style.overflow = "";
        }, 500);
      }
    }, 420);
    return () => clearInterval(lineTimer);
  }, [reduced]);
  const last = MESSAGES.length - 1;
  return (
    <div className={`gn-boot${hidden ? " is-hidden" : ""}`}>
      <div className="gn-boot-mark">GN<span>.</span></div>
      <div className="gn-boot-lines">
        {MESSAGES.slice(0, lines).map((m, i) => (
          <div key={m} className={i === last ? "ok" : ""}>
            {i === last ? "> " : "$ "}{m}{i === last ? "" : " ... ok"}
          </div>
        ))}
      </div>
      <div className="gn-boot-bar"><i style={{ transform: `scaleX(${barWidth / 100})` }} /></div>
    </div>
  );
}
