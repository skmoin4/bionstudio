import { useId, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function BrandMark({ className = "" }) {
  const id = useId();
  return (
    <span className={`brand-mark ${className}`}>
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id={id} x1="10%" y1="0%" x2="95%" y2="100%">
            <stop offset="0%" stopColor="var(--navy)" />
            <stop offset="48%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--electric)" />
          </linearGradient>
        </defs>
        <path d="M14 6h27L21 28H8V17a11 11 0 0 1 6-11z" fill={`url(#${id})`} />
        <path d="M17 34h27L24 56H11V45a11 11 0 0 1 6-11z" fill={`url(#${id})`} opacity=".92" />
      </svg>
    </span>
  );
}

export const reveal = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}

export function ButtonContent({ children }) {
  return (
    <>
      <span className="btn-label">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
      <span className="btn-icon" aria-hidden="true">
        <ArrowUpRight size={16} />
        <ArrowUpRight size={16} />
      </span>
    </>
  );
}

const variantClass = {
  solid: "btn-solid",
  electric: "btn-electric",
  outline: "btn-outline",
  "outline-light": "btn-outline-light",
};

export function MagneticLink({ href, children, variant = "solid", external = false, cursorLabel }) {
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
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`btn ${variantClass[variant]}`}
      style={{ x: springX, y: springY }}
      onMouseMove={move}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      data-cursor="action"
      data-cursor-text={cursorLabel}
    >
      <ButtonContent>{children}</ButtonContent>
    </motion.a>
  );
}
