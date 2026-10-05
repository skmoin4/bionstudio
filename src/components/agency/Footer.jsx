import { ArrowUp } from "lucide-react";
import { brand, navItems } from "./content";
import { industryPages, servicePages } from "./pages";
import { BrandMark } from "./MotionKit";
import { SocialRow } from "./Social";

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
            <span>{brand.location}</span>
          </div>
        </div>
        <div className="footer-social">
          <div className="footer-social-head">
            <strong>Say hello</strong>
            <p>Reply within a few hours, most days.</p>
          </div>
          <SocialRow />
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
