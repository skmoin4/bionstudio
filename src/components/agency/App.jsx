import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Work from "./Work";
import Footer from "./Footer";
import { BrandMark } from "./MotionKit";
import { brand } from "./content";
import {
  About,
  BionPhilosophy,
  Contact,
  FAQ,
  FinalCTA,
  Marquee,
  Process,
  Services,
  Statement,
  TechEcosystem,
  Testimonials,
  Transformation,
  WhyBion,
} from "./Sections";

function Loader({ done }) {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.65 }}
    >
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
        <BrandMark />
        <p>{brand.name}</p>
      </motion.div>
      <div className="loader-track">
        <motion.i
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.25, ease: [0.65, 0, 0.35, 1] }}
          onAnimationComplete={done}
        />
      </div>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        {brand.tagline}
      </motion.span>
    </motion.div>
  );
}

function Cursor() {
  const x = useMotionValue(-100),
    y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 34 }),
    sy = useSpring(y, { stiffness: 500, damping: 34 });
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("");
  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target.closest("a,button,[data-cursor]");
      setActive(Boolean(target));
      setLabel(target?.getAttribute("data-cursor-text") || "");
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);
  return (
    <motion.div
      className={`custom-cursor ${active ? "cursor-active" : ""} ${active && label ? "has-label" : ""}`}
      style={{ x: sx, y: sy }}
    >
      {label && <span className={`cursor-label ${active ? "show" : ""}`}>{label}</span>}
    </motion.div>
  );
}

function useLenis(enabled) {
  useEffect(() => {
    if (!enabled) return;
    let lenis;
    let frame;
    let cancelled = false;
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
      });
      const raf = (time) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    });
    return () => {
      cancelled = true;
      if (frame) cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, [enabled]);
}

export default function AgencyApp() {
  const [loading, setLoading] = useState(true);
  const reduceMotion = useReducedMotion();
  useLenis(!loading && !reduceMotion);
  return (
    <div className="agency-app">
      <AnimatePresence>{loading && <Loader done={() => setLoading(false)} />}</AnimatePresence>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Statement />
        <Services />
        <Transformation />
        <WhyBion />
        <Work />
        <BionPhilosophy />
        <TechEcosystem />
        <Process />
        <About />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
