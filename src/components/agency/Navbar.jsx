import { AnimatePresence, motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { brand, navItems } from "./content";
import { BrandMark, ButtonContent } from "./MotionKit";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const hrefFor = (item) => (item === "Home" ? "#home" : `#${item.toLowerCase()}`);
  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
        <a href="#home" className="wordmark" aria-label={`${brand.name} home`}>
          <BrandMark />
          <span>{brand.name}</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={hrefFor(item)}>
              {item}
            </a>
          ))}
        </nav>
        <a className="btn btn-electric nav-cta" href="#contact">
          <ButtonContent>Start a project</ButtonContent>
        </a>
        <button className="menu-toggle" onClick={() => setOpen(true)} aria-label="Open menu">
          <i />
          <i />
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: "circle(0% at 92% 6%)" }}
            animate={{ clipPath: "circle(150% at 92% 6%)" }}
            exit={{ clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mobile-menu-head">
              <span className="wordmark">
                <BrandMark />
                {brand.shortName}
              </span>
              <button
                className="menu-toggle"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>
            <nav aria-label="Mobile navigation">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={hrefFor(item)}
                  onClick={() => setOpen(false)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.18 + i * 0.06 }}
                >
                  {item}
                  <span>0{i + 1}</span>
                </motion.a>
              ))}
            </nav>
            <div className="mobile-menu-foot">
              <span>{brand.location}</span>
              <span>{brand.email}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
