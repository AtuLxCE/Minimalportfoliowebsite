import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{ href: "#projects", label: "Work" }, { href: "#workshops", label: "Workshops" }, { href: "#about", label: "About" }, { href: "/Atul_Shreewastav_Resume.pdf", label: "Resume" }, { href: "#contact", label: "Contact" }];
  return (
    <header className="site-header">
      <nav className="page-width navigation" aria-label="Main navigation">
        <a href="#top" className="wordmark" onClick={() => setIsOpen(false)}>atul<span>.</span></a>
        <div className="nav-controls">
          <div className="desktop-links">{navLinks.map((link) => <a key={link.href} href={link.href} download={link.label === "Resume" || undefined}>{link.label}</a>)}</div>
          <ThemeToggle />
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="mobile-navigation">{isOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {isOpen && <div id="mobile-navigation" className="mobile-links" onKeyDown={(event) => { if (event.key === "Escape") setIsOpen(false); }}>{navLinks.map((link) => <a key={link.href} href={link.href} download={link.label === "Resume" || undefined} onClick={() => setIsOpen(false)}>{link.label}</a>)}</div>}
      </nav>
    </header>
  );
}
