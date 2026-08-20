import { useEffect, useState } from "react";

const NAV_ITEMS = [
  ["about", "About"],
  ["architecture", "Architecture"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Journey"],
  ["education", "Education"],
  ["contact", "Contact"]
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map(([id]) => document.getElementById(id)).filter(Boolean);

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const pos = window.scrollY + window.innerHeight * 0.4;
      let current = "";
      sections.forEach((s) => {
        if (pos >= s.offsetTop) current = s.id;
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-pill glass-gloss">
        <a className="nav-logo" href="#home" onClick={() => setOpen(false)}>
          MK<span className="dot">.</span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {NAV_ITEMS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Hire Me
        </a>

        <button
          className={`nav-burger ${open ? "open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}