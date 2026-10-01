import { useState } from "react";
import { JOURNEY, type JourneyItem } from "../../data.ts";
import { useReveal } from "../../hooks.ts";
import { Lightbox } from "../common/Lightbox.tsx";
import { SectionTag } from "../common/SectionTag.tsx";

interface JourneyNodeProps {
  item: JourneyItem;
  i: number;
  onOpenImage: (imageIndex: number) => void;
}

function JourneyNode({ item, onOpenImage }: JourneyNodeProps) {
  const [ref, visible] = useReveal<HTMLDivElement>();
  return (
    <div className={`gn-tnode gn-reveal${visible ? " is-visible" : ""}`} ref={ref}>
      <div className="gn-tnode-year">{item.year}</div>
      <div className="gn-tnode-dot" />
      <div className="gn-tnode-title">{item.title}</div>
      <p className="gn-tnode-desc">{item.description}</p>
      {item.images.length > 0 && (
        <div className="gn-tnode-shots">
          {item.images.map((src, imageIndex) => (
            <button
              type="button"
              className="gn-shot"
              key={src}
              onClick={() => onOpenImage(imageIndex)}
              aria-label={`View image ${imageIndex + 1} of ${item.images.length}: ${item.title}`}
            >
              <div className="gn-shot-bar"><i /><i /><i /></div>
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Journey() {
  const [viewer, setViewer] = useState<{ item: JourneyItem; index: number } | null>(null);
  return (
    <section id="journey" className="gn-section">
      <SectionTag num="04 —" title="My Journey" />
      <div className="gn-timeline">
        {JOURNEY.map((item, i) => (
          <JourneyNode
            item={item}
            i={i}
            key={item.year}
            onOpenImage={(index) => setViewer({ item, index })}
          />
        ))}
      </div>
      {viewer && (
        <Lightbox
          images={viewer.item.images}
          index={viewer.index}
          caption={`${viewer.item.year} — ${viewer.item.title}`}
          onIndexChange={(index) => setViewer({ ...viewer, index })}
          onClose={() => setViewer(null)}
        />
      )}
    </section>
  );
}
