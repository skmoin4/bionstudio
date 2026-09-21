import { ArrowUp } from "lucide-react";
import { brand, navItems, services } from "./content";
import { BrandMark } from "./MotionKit";

export default function Footer() {
  return (
    <footer className="footer-v2">
      <div className="shell">
        <div className="footer-top">
          <h2>{brand.name}</h2>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <ArrowUp />
          </button>
        </div>
        <div className="footer-cols">
          <p>Digital experiences for ambitious brands — designed with care, engineered to last.</p>
          <div>
            <strong>Navigate</strong>
            {navItems.map((x) => (
              <a key={x} href={x === "Home" ? "#home" : `#${x.toLowerCase()}`}>
                {x}
              </a>
            ))}
          </div>
          <div>
            <strong>Services</strong>
            {services.slice(0, 4).map((x) => (
              <a key={x.title} href="#services">
                {x.title}
              </a>
            ))}
          </div>
          <div>
            <strong>Contact</strong>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <a href={brand.whatsapp}>WhatsApp</a>
            <span>{brand.location}</span>
          </div>
        </div>
        <div className="footer-signature">
          <BrandMark />
          <span>
            <b>B</b>uild · <b>I</b>nnovate · <b>O</b>ptimize · <b>N</b>avigate
          </span>
          <span style={{ marginLeft: "auto" }}>Digital experiences. Built for growth.</span>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {brand.name}</span>
          <span>{brand.tagline}</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
