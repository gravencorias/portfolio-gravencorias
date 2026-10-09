import { ArrowLeft, Download, Printer } from "lucide-react";
import { RESUME_PROFILE } from "../../data.ts";

export function ResumeToolbar() {
  const fileName = RESUME_PROFILE.pdf.split("/").pop();
  return (
    <header className="gn-resume-toolbar">
      <a className="gn-resume-back" href="/" aria-label="Back to portfolio">
        <ArrowLeft size={16} /> <span>Back to portfolio</span>
      </a>
      <span className="gn-resume-file">~/gn/{fileName}</span>
      <div className="gn-resume-actions">
        <button type="button" className="gn-btn gn-btn-ghost gn-btn-sm" onClick={() => window.print()}>
          <Printer size={16} /> Print
        </button>
        <a className="gn-btn gn-btn-primary gn-btn-sm" href={RESUME_PROFILE.pdf} download={fileName}>
          <Download size={16} /> Download PDF
        </a>
      </div>
    </header>
  );
}
