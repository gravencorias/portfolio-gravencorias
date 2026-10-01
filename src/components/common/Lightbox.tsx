import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: string[];
  index: number;
  caption?: string;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export function Lightbox({ images, index, caption, onIndexChange, onClose }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = images.length;
  const hasMany = count > 1;
  const prev = () => onIndexChange((index - 1 + count) % count);
  const next = () => onIndexChange((index + 1) % count);

  // Esc closes, arrows step; lock page scroll and restore focus on close.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (hasMany && e.key === "ArrowLeft") onIndexChange((index - 1 + count) % count);
      else if (hasMany && e.key === "ArrowRight") onIndexChange((index + 1) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, count, hasMany, onIndexChange, onClose]);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  return createPortal(
    <div className="gn-lightbox" role="dialog" aria-modal="true" aria-label={caption ?? "Image viewer"} onClick={onClose}>
      <button ref={closeRef} className="gn-lightbox-btn gn-lightbox-close" onClick={onClose} aria-label="Close">
        <X size={20} />
      </button>
      {hasMany && (
        <button className="gn-lightbox-btn gn-lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image">
          <ChevronLeft size={22} />
        </button>
      )}
      <figure className="gn-lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={images[index]} alt={caption ? `${caption} — image ${index + 1}` : ""} />
        <figcaption>
          {caption && <span>{caption}</span>}
          {hasMany && <span className="gn-lightbox-count">{index + 1} / {count}</span>}
        </figcaption>
      </figure>
      {hasMany && (
        <button className="gn-lightbox-btn gn-lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image">
          <ChevronRight size={22} />
        </button>
      )}
    </div>,
    document.body
  );
}
