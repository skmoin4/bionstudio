import { ArrowUp } from "lucide-react";
import { brand, navItems } from "./content";
import { industryPages, servicePages } from "./pages";
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
              <a key={x.label} href={x.href}>
                {x.label}
              </a>
            ))}
          </div>
          <div>
            <strong>Services</strong>
            {servicePages.slice(0, 7).map((x) => (
              <a key={x.slug} href={`/services/${x.slug}`}>
                {x.navTitle}
              </a>
            ))}
            <a href="/services" className="footer-all">
              All {servicePages.length} services →
            </a>
          </div>
          <div>
            <strong>Industries</strong>
            {industryPages.slice(0, 7).map((x) => (
              <a key={x.slug} href={`/industries/${x.slug}`}>
                {x.navTitle}
              </a>
            ))}
            <a href="/industries" className="footer-all">
              All {industryPages.length} industries →
            </a>
          </div>
          <div>
            <strong>Contact</strong>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <a href={brand.phoneHref}>{brand.phone}</a>
            <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href={brand.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={brand.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
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
          <span>
            <a href="/privacy-policy">Privacy Policy</a> · All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
