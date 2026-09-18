import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { MagneticLink } from "./MotionKit";

const lines = [
  { text: "We Turn Business", accent: false },
  { text: "Ideas Into Digital", accent: false },
  { text: "Experiences.", accent: true },
];

const particles = [
  { top: "10%", left: "6%", size: 5, delay: 0 },
  { top: "78%", left: "12%", size: 4, delay: 0.6 },
  { top: "22%", left: "94%", size: 4, delay: 1.1 },
  { top: "60%", left: "88%", size: 6, delay: 1.6 },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 45, damping: 22 });
  const sy = useSpring(my, { stiffness: 45, damping: 22 });
  const ribbonX = useTransform(sx, [-0.5, 0.5], [-26, 26]);
  const ribbonY = useTransform(sy, [-0.5, 0.5], [-18, 18]);
  const panelX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const panelY = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  useEffect(() => {
    if (reduceMotion) return;
    const move = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [mx, my, reduceMotion]);

  return (
    <section className="hero" id="home">
      <div className="hero-grain" />
      <div className="hero-row">
        <div className="hero-copy">
          <motion.p
            className="eyebrow-mono"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Digital technology studio
          </motion.p>
          <h1>
            {lines.map((line, i) => (
              <span className="line" key={line.text}>
                <motion.span
                  className={line.accent ? "accent" : ""}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 0.5 + i * 0.14, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>
        <div className="hero-sub">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
          >
            Bion Studio designs and builds websites, applications and digital solutions that help
            businesses move forward.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.7 }}
          >
            <MagneticLink href="#contact" variant="electric">
              Start a project
            </MagneticLink>
            <MagneticLink href="#work" variant="outline">
              Explore our work
            </MagneticLink>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <motion.div
          className="hero-ribbon h-ribbon-a"
          style={{ x: ribbonX, y: ribbonY }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="hero-ribbon h-ribbon-b"
          style={{ x: ribbonX, y: ribbonY }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.15, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="glass-panel"
          style={{ x: panelX, y: panelY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {!reduceMotion && (
            <motion.div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                height: "40%",
                background:
                  "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--primary) 16%, transparent), transparent)",
              }}
              animate={{ top: ["-10%", "100%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 2 }}
            />
          )}
        </motion.div>
        <div className="hero-ribbon h-ribbon-c" />
        {!reduceMotion &&
          particles.map((p, i) => (
            <motion.span
              key={i}
              className="hero-node"
              style={{ top: p.top, left: p.left }}
              animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            />
          ))}
      </motion.div>

      <motion.div
        className="hero-meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
      >
        <span>
          <i /> Remote-first · Working with businesses everywhere
        </span>
        <a
          href="#services"
          className="hero-scroll-cue"
          aria-label="Scroll to explore"
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            font: ".62rem var(--font-mono)",
            textTransform: "uppercase",
            color: "var(--muted-foreground)",
          }}
        >
          Scroll to explore{" "}
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "inline-flex" }}
          >
            <ArrowDown size={13} />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
