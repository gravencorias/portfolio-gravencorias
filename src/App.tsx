import "./styles.css";
import { NAV, ROLES } from "./data.ts";
import { useScrollProgress, useScrollSpy, useSidebarCollapsed, useTypewriter } from "./hooks.ts";
import { BootSequence } from "./components/effects/BootSequence.tsx";
import { CustomCursor } from "./components/effects/CustomCursor.tsx";
import { Grain } from "./components/effects/Grain.tsx";
import { Footer } from "./components/layout/Footer.tsx";
import { MobileNav } from "./components/layout/MobileNav.tsx";
import { Sidebar } from "./components/layout/Sidebar.tsx";
import { Affiliations } from "./components/sections/Affiliations.tsx";
import { Connect } from "./components/sections/Connect.tsx";
import { Education } from "./components/sections/Education.tsx";
import { Experience } from "./components/sections/Experience.tsx";
import { Hero } from "./components/sections/Hero.tsx";
import { Honors } from "./components/sections/Honors.tsx";
import { Journey } from "./components/sections/Journey.tsx";
import { Stack } from "./components/sections/Stack.tsx";
import { Training } from "./components/sections/Training.tsx";
import { Work } from "./components/sections/Work.tsx";

export default function App() {
  const progress = useScrollProgress();
  const activeId = useScrollSpy(NAV.map((n) => n.id));
  const roleText = useTypewriter(ROLES);
  const [collapsed, toggleSidebar] = useSidebarCollapsed();

  return (
    <div className={`gn-root${collapsed ? " is-collapsed" : ""}`}>
      <BootSequence />
      <Grain />
      <CustomCursor />
      <div className="gn-progress" style={{ width: `${progress}%` }} />
      <MobileNav activeId={activeId} />
      <div className="gn-shell">
        <Sidebar activeId={activeId} roleText={roleText} collapsed={collapsed} onToggle={toggleSidebar} />
        <main className="gn-main">
          <Hero />
          <Stack />
          <Experience />
          <Journey />
          <Education />
          <Work />
          <Honors />
          <Affiliations />
          <Training />
          <Connect />
          <Footer />
        </main>
      </div>
    </div>
  );
}
