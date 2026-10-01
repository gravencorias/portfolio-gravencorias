import { MapPin } from "lucide-react";
import { CONTACT } from "../../data.ts";

export function Footer() {
  return (
    <footer className="gn-footer">
      <span><MapPin size={12} style={{ verticalAlign: "-2px", marginRight: "0.3rem" }} />{CONTACT.location}</span>
      <span>© {new Date().getFullYear()} Graven Niel M. Corias</span>
    </footer>
  );
}
