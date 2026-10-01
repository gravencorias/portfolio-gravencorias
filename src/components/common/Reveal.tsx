import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { useReveal } from "../../hooks.ts";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}

export function Reveal({ as: Tag = "div", className = "", children, ...rest }: RevealProps) {
  const [ref, visible] = useReveal<HTMLElement>();
  return (
    <Tag ref={ref} className={`gn-reveal${visible ? " is-visible" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
