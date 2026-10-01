import { Reveal } from "./Reveal.tsx";

export function SectionTag({ num, title }: { num: string; title: string }) {
  return (
    <Reveal>
      <div className="gn-tag">{num}</div>
      <h2 className="gn-h2">{title}</h2>
    </Reveal>
  );
}
