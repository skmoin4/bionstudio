import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export const reveal = {
  hidden: { opacity: 0, y: 42, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

export function Reveal({ children, className = "", delay = 0 }) {
  return <motion.div className={className} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} transition={{ delay }}>{children}</motion.div>;
}

export function SectionHeading({ kicker, children, className = "" }) {
  return (
    <Reveal className={className}>
      <p className="eyebrow">{kicker}</p>
      <h2 className="section-title">{children}</h2>
    </Reveal>
  );
}

export function MagneticLink({ href, children, secondary = false, external = false }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  const move = (event) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
  };

  return (
    <motion.a ref={ref} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={secondary ? "button button-secondary" : "button button-primary"} style={{ x: springX, y: springY }} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }} data-cursor="action">
      <span>{children}</span><ArrowUpRight size={17} />
    </motion.a>
  );
}

export function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 180, damping: 20 });
  const rotateY = useSpring(ry, { stiffness: 180, damping: 20 });
  return <motion.article ref={ref} className={className} style={{ rotateX, rotateY, transformPerspective: 1000 }} onMouseMove={(e) => { const r = ref.current?.getBoundingClientRect(); if (!r) return; rx.set(-((e.clientY-r.top)/r.height-.5)*3); ry.set(((e.clientX-r.left)/r.width-.5)*3); }} onMouseLeave={() => { rx.set(0); ry.set(0); }}>{children}</motion.article>;
}