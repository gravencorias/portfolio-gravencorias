import { useEffect, useRef, useState, type RefObject } from "react";

export const useReveal = <T extends Element = HTMLDivElement>(
  threshold = 0.15
): [RefObject<T | null>, boolean] => {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
};

export const useTypewriter = (words: string[], typeSpeed = 48, deleteSpeed = 26, hold = 1600): string => {
  const [text, setText] = useState(words[0] ?? "");
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || words.length === 0) return;
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;
    const tick = () => {
      const current = words[wordIndex];
      if (deleting) {
        charIndex -= 1;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timeoutId = setTimeout(tick, deleteSpeed);
          return;
        }
        timeoutId = setTimeout(tick, deleteSpeed);
      } else {
        charIndex += 1;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, hold);
          return;
        }
        timeoutId = setTimeout(tick, typeSpeed);
      }
    };
    timeoutId = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timeoutId);
  }, [words, typeSpeed, deleteSpeed, hold]);
  return text;
};

export const useCountUp = (target: number, start: boolean, duration = 1200): number => {
  const reduced = useRef(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (reduced.current) {
      setValue(target);
      return;
    }
    let raf: number;
    const t0 = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return value;
};

export const useScrollSpy = (ids: string[]): string => {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) {
          current = id;
        }
      }
      // On tall screens the last section can't scroll up to the 40% line, so treat the page bottom as reaching it.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom && document.getElementById(ids[ids.length - 1])) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    handler();
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [ids]);
  return active;
};

const SIDEBAR_KEY = "gn-sidebar-collapsed";

/** Desktop sidebar collapsed state, remembered in localStorage. */
export const useSidebarCollapsed = (): [boolean, () => void] => {
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem(SIDEBAR_KEY) === "1";
    } catch {
      return false;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(SIDEBAR_KEY, collapsed ? "1" : "0");
    } catch {
      // storage unavailable (private mode etc.) — the toggle still works for this visit
    }
  }, [collapsed]);
  return [collapsed, () => setCollapsed((c) => !c)];
};

export const useScrollProgress = (): number => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return progress;
};
