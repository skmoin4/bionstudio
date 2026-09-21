import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";
import { ArrowDown, Check } from "lucide-react";
import hotelImage from "../../assets/hotel-project.jpg";
import restaurantImage from "../../assets/restaurant-project.jpg";
import commerceImage from "../../assets/commerce-project.jpg";
import { MagneticLink } from "./MotionKit";

const lines = [
  { text: "We craft digital", accent: false },
  { text: "experiences for", accent: false },
  { text: "ambitious brands.", accent: true },
];

const particles = [
  { top: "6%", left: "4%", delay: 0 },
  { top: "86%", left: "44%", delay: 0.6 },
  { top: "14%", left: "96%", delay: 1.1 },
  { top: "58%", left: "-3%", delay: 1.6 },
];

const ease = [0.16, 1, 0.3, 1];

const slides = [
  {
    url: "bionstudio.in / aurelia-retreat",
    brand: "AURELIA",
    action: "Book",
    kicker: "LUXURY RETREAT",
    headline: "Stay somewhere worth remembering.",
    cta: "Book your stay",
    chips: ["Direct booking", "Immersive gallery", "Guest reviews"],
    image: hotelImage,
    score: 98,
    metric: "Direct bookings",
    value: "+42%",
    line: "M0 36 L20 32 L38 34 L58 24 L80 26 L100 14 L120 10 L140 3",
  },
  {
    url: "bionstudio.in / house-of-ember",
    brand: "EMBER",
    action: "Reserve",
    kicker: "FIRE-LED DINING",
    headline: "A table worth the wait.",
    cta: "Reserve a table",
    chips: ["Online reservations", "Seasonal menu", "Local SEO"],
    image: restaurantImage,
    score: 96,
    metric: "Weekly covers",
    value: "+31%",
    line: "M0 34 L20 30 L38 32 L58 26 L80 20 L100 22 L120 12 L140 6",
  },
  {
    url: "bionstudio.in / form-object",
    brand: "FORM / OBJECT",
    action: "Cart",
    kicker: "NEW COLLECTION",
    headline: "Objects with quiet presence.",
    cta: "Shop the edit",
    chips: ["Fast checkout", "Product stories", "Analytics"],
    image: commerceImage,
    score: 99,
    metric: "Conversion rate",
    value: "+27%",
    line: "M0 38 L20 34 L38 30 L58 32 L80 20 L100 16 L120 8 L140 4",
  },
];

function FloatCard({ className, delay, x, y, bob = 6, children }) {
  return (
    <motion.div className={`float-card ${className}`} style={{ x, y }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay, duration: 0.9, ease }}
      >
        <motion.div
          animate={{ y: [0, -bob, 0] }}
          transition={{ duration: 5 + bob / 3, repeat: Infinity, ease: "easeInOut", delay }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [slide, setSlide] = useState(0);
  const [ticks, setTicks] = useState(0);
  const go = (i) => {
    setSlide(i);
    setTicks((t) => t + 1);
  };
  useEffect(() => {
    if (reduceMotion) return;
    const t = setInterval(() => {
      setSlide((n) => (n + 1) % slides.length);
      setTicks((n) => n + 1);
    }, 5200);
    return () => clearInterval(t);
  }, [reduceMotion, ticks]);
  const cur = slides[slide];
  const drawDelay = ticks === 0 ? 2.3 : 0.25;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 45, damping: 22 });
  const sy = useSpring(my, { stiffness: 45, damping: 22 });
  const ribbonX = useTransform(sx, [-0.5, 0.5], [-26, 26]);
  const ribbonY = useTransform(sy, [-0.5, 0.5], [-18, 18]);
  const panelX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const panelY = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const cardX = useTransform(sx, [-0.5, 0.5], [22, -22]);
  const cardY = useTransform(sy, [-0.5, 0.5], [14, -14]);
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
      <div className="hero-grid">
        <div className="hero-row">
          <div className="hero-copy">
            <motion.p
              className="eyebrow-mono"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Design & engineering studio
            </motion.p>
            <h1>
              {lines.map((line, i) => (
                <span className="line" key={line.text}>
                  <motion.span
                    className={line.accent ? "accent" : ""}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: 0.5 + i * 0.14, duration: 0.9, ease }}
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
              Bion Studio designs and builds premium websites, web apps and mobile products for
              founders and businesses who care how their brand is experienced.
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
                View our work
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
            transition={{ delay: 1, duration: 1.1, ease }}
          />
          <motion.div
            className="hero-ribbon h-ribbon-b"
            style={{ x: ribbonX, y: ribbonY }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.15, duration: 1.1, ease }}
          />

          <motion.div
            className="mock-browser"
            style={{ x: panelX, y: panelY }}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.9, ease }}
          >
            <div className="mock-bar">
              <i />
              <i />
              <i />
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={cur.url}
                  className="mock-url"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {cur.url}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="mock-body">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={slide}
                  initial={{ opacity: 0, x: 48 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -48 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <div className="mock-nav">
                    <b>{cur.brand}</b>
                    <span />
                    <span />
                    <span />
                    <em>{cur.action}</em>
                  </div>
                  <div className="mock-hero">
                    <img src={cur.image} alt="" width="800" height="500" />
                    <div className="mock-hero-copy">
                      <small>{cur.kicker}</small>
                      <strong>{cur.headline}</strong>
                      <em>{cur.cta}</em>
                    </div>
                  </div>
                  <div className="mock-row">
                    {cur.chips.map((t) => (
                      <div key={t}>
                        <i />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            {!reduceMotion && (
              <motion.span
                className="mock-scan"
                animate={{ top: ["-20%", "110%"] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "linear", delay: 2.4 }}
              />
            )}
          </motion.div>

          <FloatCard className="f-score" delay={1.7} x={cardX} y={cardY} bob={7}>
            <div className="score-ring">
              <svg viewBox="0 0 44 44" aria-hidden="true">
                <circle cx="22" cy="22" r="18" className="score-track" />
                <motion.circle
                  key={slide}
                  cx="22"
                  cy="22"
                  r="18"
                  className="score-fill"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: cur.score / 100 }}
                  transition={{ delay: drawDelay - 0.2, duration: 1.2, ease }}
                />
              </svg>
              <b>{cur.score}</b>
            </div>
            <div className="score-copy">
              <strong>Performance</strong>
              <span>Lighthouse score</span>
            </div>
          </FloatCard>

          <FloatCard className="f-growth" delay={1.9} x={cardX} y={cardY} bob={9}>
            <div className="growth-head">
              <span>{cur.metric}</span>
              <b>{cur.value}</b>
            </div>
            <svg viewBox="0 0 140 44" className="growth-chart" aria-hidden="true">
              <defs>
                <linearGradient id="growthArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity=".25" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={`${cur.line} L140 44 L0 44 Z`} fill="url(#growthArea)" />
              <motion.path
                key={slide}
                d={cur.line}
                className="growth-line"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: drawDelay, duration: 1.4, ease }}
              />
            </svg>
          </FloatCard>

          <FloatCard className="f-live" delay={2.1} x={cardX} y={cardY} bob={5}>
            <span className="live-dot" />
            <span>Live in production</span>
            <Check size={13} />
          </FloatCard>

          {!reduceMotion &&
            particles.map((p, i) => (
              <motion.span
                key={i}
                className="hero-node"
                style={{ top: p.top, left: p.left }}
                animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: p.delay,
                }}
              />
            ))}
          <div className="hero-dots" role="tablist" aria-label="Featured projects">
            {slides.map((sl, i) => (
              <button
                key={sl.url}
                type="button"
                role="tab"
                aria-selected={slide === i}
                aria-label={`Show ${sl.brand.toLowerCase()} project`}
                className={slide === i ? "is-active" : ""}
                onClick={() => go(i)}
              >
                <i key={slide === i ? `a${ticks}` : "i"} />
              </button>
            ))}
          </div>
        </motion.div>
      </div>

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
