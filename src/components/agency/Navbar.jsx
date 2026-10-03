import { AnimatePresence, motion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BedDouble,
  Boxes,
  ChevronDown,
  Globe,
  LayoutDashboard,
  MessageCircle,
  PenTool,
  ShoppingBag,
  Smartphone,
  Sparkles,
  UtensilsCrossed,
  Workflow,
  X,
} from "lucide-react";
import { brand, navItems } from "./content";
import { industryPages, servicePages } from "./pages";
import { BrandMark, ButtonContent } from "./MotionKit";

const icons = {
  Globe,
  LayoutDashboard,
  Smartphone,
  Boxes,
  PenTool,
  Workflow,
  BedDouble,
  UtensilsCrossed,
  ShoppingBag,
};

export const menus = {
  services: {
    title: "Our services",
    sub: "Everything you need to build and grow online",
    all: { href: "/#services", label: "View all services" },
    cols: 3,
    items: servicePages.map((s) => ({
      href: `/services/${s.slug}`,
      icon: s.icon,
      title: s.navTitle,
      text: s.navDesc,
    })),
  },
  industries: {
    title: "Industries we serve",
    sub: "Solutions shaped around how your business works",
    all: { href: "/#solutions", label: "See all solutions" },
    cols: 3,
    items: industryPages.map((s) => ({
      href: `/industries/${s.slug}`,
      icon: s.icon,
      image: s.image,
      title: s.navTitle,
      text: s.navDesc,
    })),
  },
};

function MegaPanel({ menu, onEnter, onLeave }) {
  const m = menus[menu];
  return (
    <motion.div
      className="mega-wrap"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mega" id={`mega-${menu}`}>
        <div className="mega-head">
          <span className="mega-badge" aria-hidden="true">
            <Sparkles size={20} />
          </span>
          <div>
            <strong>{m.title}</strong>
            <p>{m.sub}</p>
          </div>
          <a className="mega-all" href={m.all.href}>
            {m.all.label} <ArrowRight size={15} />
          </a>
        </div>
        <div className={`mega-grid ${m.items.some((x) => x.image) ? "has-media" : ""}`}>
          {m.items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <a key={item.href} href={item.href} className="mega-item">
                {item.image ? (
                  <span className="mega-thumb">
                    <img src={item.image} alt="" width="320" height="200" loading="lazy" />
                    <span className="mega-ico">
                      <Icon size={17} />
                    </span>
                  </span>
                ) : (
                  <span className="mega-ico">
                    <Icon size={18} />
                  </span>
                )}
                <span className="mega-copy">
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </span>
              </a>
            );
          })}
        </div>
        <div className="mega-foot">
          <div>
            <b>Not sure what you need?</b>
            <span>Tell us your goal — we'll suggest the right solution, free.</span>
          </div>
          <div className="mega-foot-actions">
            <a className="mega-wa" href={brand.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a className="btn btn-electric mega-cta" href="/contact">
              <ButtonContent>Get free consultation</ButtonContent>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Navbar({ solid = false }) {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(null);
  const [mobileSub, setMobileSub] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);
  const headerRef = useRef(null);
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
  useEffect(() => {
    if (!drop) return;
    const onKey = (e) => e.key === "Escape" && setDrop(null);
    const onDown = (e) => {
      if (!headerRef.current?.contains(e.target)) setDrop(null);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [drop]);

  const show = (menu) => {
    clearTimeout(closeTimer.current);
    setDrop(menu);
  };
  const hide = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDrop(null), 160);
  };
  const keep = () => clearTimeout(closeTimer.current);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <header
        ref={headerRef}
        className={`site-nav ${scrolled || solid ? "is-scrolled" : ""} ${drop ? "has-drop" : ""}`}
      >
        <a href="/" className="wordmark" aria-label={`${brand.name} home`}>
          <BrandMark />
          <span>{brand.name}</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) =>
            item.menu ? (
              <div
                key={item.label}
                className="nav-drop"
                onMouseEnter={() => show(item.menu)}
                onMouseLeave={hide}
              >
                <button
                  type="button"
                  className={drop === item.menu ? "is-open" : ""}
                  aria-expanded={drop === item.menu}
                  aria-controls={`mega-${item.menu}`}
                  onClick={() => (drop === item.menu ? setDrop(null) : show(item.menu))}
                >
                  {item.label}
                  <ChevronDown size={14} aria-hidden="true" />
                </button>
              </div>
            ) : (
              <a key={item.label} href={item.href} onMouseEnter={() => drop && hide()}>
                {item.label}
              </a>
            ),
          )}
        </nav>
        <a className="btn btn-electric nav-cta" href="/contact">
          <ButtonContent>Start a project</ButtonContent>
        </a>
        <button className="menu-toggle" onClick={() => setOpen(true)} aria-label="Open menu">
          <i />
          <i />
        </button>
        <AnimatePresence>
          {drop && <MegaPanel key={drop} menu={drop} onEnter={keep} onLeave={hide} />}
        </AnimatePresence>
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
                <motion.div
                  key={item.label}
                  className="m-item"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.18 + i * 0.06 }}
                >
                  {item.menu ? (
                    <>
                      <button
                        type="button"
                        className={`m-link ${mobileSub === item.menu ? "is-open" : ""}`}
                        aria-expanded={mobileSub === item.menu}
                        onClick={() => setMobileSub(mobileSub === item.menu ? null : item.menu)}
                      >
                        {item.label}
                        <span>
                          0{i + 1} <ChevronDown size={14} />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileSub === item.menu && (
                          <motion.div
                            className="m-sub"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          >
                            {menus[item.menu].items.map((sub) => {
                              const Icon = icons[sub.icon];
                              return (
                                <a key={sub.href} href={sub.href} onClick={() => setOpen(false)}>
                                  <span className="mega-ico">
                                    <Icon size={16} />
                                  </span>
                                  <span>
                                    <b>{sub.title}</b>
                                    <small>{sub.text}</small>
                                  </span>
                                </a>
                              );
                            })}
                            <a className="m-sub-all" href={menus[item.menu].all.href} onClick={() => setOpen(false)}>
                              {menus[item.menu].all.label} <ArrowRight size={14} />
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a className="m-link" href={item.href} onClick={() => setOpen(false)}>
                      {item.label}
                      <span>0{i + 1}</span>
                    </a>
                  )}
                </motion.div>
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
