import { ArrowUp } from "lucide-react";
import { useScrolledPast } from "../../hooks.ts";

export function BackToTop() {
  const visible = useScrolledPast();
  const toTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "instant" : "smooth" });
  };
  return (
    <button type="button" className={`gn-totop${visible ? " is-visible" : ""}`} onClick={toTop} aria-label="Back to top">
      <ArrowUp size={18} />
    </button>
  );
}
