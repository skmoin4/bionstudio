import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export function Cursor() {
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

export function useLenis(enabled) {
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

// Shared chrome for the inner pages (services, industries, contact, legal).
export default function SiteShell({ children, solidNav = false }) {
  const reduceMotion = useReducedMotion();
  useLenis(!reduceMotion);
  return (
    <div className="agency-app">
      <Cursor />
      <Navbar solid={solidNav} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
