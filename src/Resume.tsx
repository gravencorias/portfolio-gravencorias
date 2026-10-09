import "./styles.css";
import { useEffect } from "react";
import { BackToTop } from "./components/common/BackToTop.tsx";
import { ResumeSheet } from "./components/resume/ResumeSheet.tsx";
import { ResumeToolbar } from "./components/resume/ResumeToolbar.tsx";

export default function Resume() {
  useEffect(() => {
    document.title = "Resume — Graven Niel M. Corias";
  }, []);

  return (
    <div className="gn-resume">
      <BackToTop />
      <ResumeToolbar />
      <main className="gn-resume-stage">
        <ResumeSheet />
      </main>
    </div>
  );
}
