import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import { ArrowDown, Braces, ChartNoAxesCombined, Sparkles } from "lucide-react";
import { MagneticLink } from "./MotionKit";

const words = "We build digital experiences that make businesses impossible to ignore.".split(" ");

export default function Hero() {
  const mx = useMotionValue(0); const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 45, damping: 22 }); const sy = useSpring(my, { stiffness: 45, damping: 22 });
  const orbX = useTransform(sx, [-.5,.5], [-24,24]); const orbY = useTransform(sy, [-.5,.5], [-18,18]);
  useEffect(() => { const move = e => { mx.set(e.clientX/window.innerWidth-.5); my.set(e.clientY/window.innerHeight-.5); }; window.addEventListener("pointermove", move); return () => window.removeEventListener("pointermove", move); }, [mx,my]);
  return <section className="hero" id="home">
    <div className="hero-grid" /><motion.div className="hero-orb" style={{ x: orbX, y: orbY }} />
    <div className="hero-copy">
      <motion.p className="eyebrow" initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.75 }}>Digital experiences for ambitious businesses</motion.p>
      <h1>{words.map((word, i) => <motion.span key={`${word}-${i}`} initial={{ opacity:0, y:45, filter:"blur(12px)" }} animate={{ opacity:1, y:0, filter:"blur(0px)" }} transition={{ delay:1.45+i*.045, duration:.7, ease:[.16,1,.3,1] }} className={word === "impossible" || word === "ignore." ? "accent-word" : ""}>{word} </motion.span>)}</h1>
      <motion.div className="hero-bottom" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2.2 }}>
        <p>We design and develop high-performance websites and digital experiences that help businesses look better, build trust and grow online.</p>
        <div className="hero-actions"><MagneticLink href="#contact">Start a project</MagneticLink><MagneticLink href="#work" secondary>Explore our work</MagneticLink></div>
      </motion.div>
    </div>
    <motion.div className="hero-interface" style={{ x: orbX, y: orbY }} initial={{ opacity:0, scale:.88, rotate:4 }} animate={{ opacity:1, scale:1, rotate:0 }} transition={{ delay:1.8, duration:1.2, ease:[.16,1,.3,1] }}>
      <div className="interface-top"><span>Digital growth system</span><span className="live-dot">LIVE</span></div>
      <div className="interface-core"><div className="core-ring"><Sparkles size={25}/><span>Build<br/>different.</span></div></div>
      <div className="interface-stats"><div><Braces/><span>Custom build</span></div><div><ChartNoAxesCombined/><span>Growth led</span></div></div>
    </motion.div>
    <div className="hero-location"><span>Based in Nashik, Maharashtra</span><i /> <span>Working everywhere</span></div>
    <a className="scroll-cue" href="#about" aria-label="Scroll to introduction"><ArrowDown size={18} /></a>
  </section>;
}