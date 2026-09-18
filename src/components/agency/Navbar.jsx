import { AnimatePresence, motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { brand, navItems } from "./content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const hrefFor = (item) => item === "Home" ? "#home" : `#${item.toLowerCase()}`;
  return <>
    <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#home" className="wordmark" aria-label={`${brand.name} home`}><span className="brand-mark">N</span><span>{brand.name}</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => <a key={item} href={hrefFor(item)}>{item}</a>)}
      </nav>
      <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
    </header>
    <AnimatePresence>
      {open && <motion.div className="mobile-menu" initial={{ clipPath: "circle(0% at 90% 5%)" }} animate={{ clipPath: "circle(150% at 90% 5%)" }} exit={{ clipPath: "circle(0% at 90% 5%)" }} transition={{ duration: .7, ease: [0.76,0,0.24,1] }}>
        <div className="mobile-menu-head"><span className="wordmark"><span className="brand-mark">N</span>{brand.shortName}</span><button className="menu-toggle" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div>
        <nav aria-label="Mobile navigation">{navItems.map((item, i) => <motion.a key={item} href={hrefFor(item)} onClick={() => setOpen(false)} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .18 + i * .07 }}>{item}<span>0{i+1}</span></motion.a>)}</nav>
        <p>{brand.location}</p>
      </motion.div>}
    </AnimatePresence>
  </>;
}