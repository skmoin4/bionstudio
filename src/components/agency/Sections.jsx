import { Fragment, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Plus,
  Atom,
  Cloud,
  Database,
  Feather,
  FileCode2,
  Flame,
  Hexagon,
  Layers,
  Leaf,
  Server,
  Smartphone,
  Triangle,
} from "lucide-react";
import {
  about,
  bionPrinciples,
  brand,
  capabilities,
  faqs,
  processSteps,
  services,
  stats,
  techRings,
  testimonials,
  transformation,
  whyBion,
} from "./content";
import { BrandMark, ButtonContent, MagneticLink, Reveal } from "./MotionKit";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

function Word({ children, i, total, progress, accent }) {
  const start = i / total;
  const end = Math.min(1, start + 1.6 / total);
  const opacity = useTransform(progress, [start, end], [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className={accent ? "accent-word" : ""}>
      {children}{" "}
    </motion.span>
  );
}

export function Marquee() {
  const items = [...capabilities, ...capabilities];
  return (
    <div className="marquee" aria-label="Capabilities">
      <div className="marquee-track" aria-hidden="true">
        {items.map((item, i) => (
          <span key={i}>
            {item}
            <i />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Statement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "start 0.3"] });
  const text =
    "Digital isn't just where your business lives. It's how your business is experienced.";
  const words = text.split(" ");
  return (
    <section className="section statement-section" id="statement">
      <div className="shell">
        <Reveal>
          <p className="eyebrow-mono">Our belief</p>
        </Reveal>
        <p className="statement-text" ref={ref}>
          {words.map((w, i) => (
            <Word
              key={i}
              i={i}
              total={words.length}
              progress={scrollYProgress}
              accent={w === "experienced."}
            >
              {w}
            </Word>
          ))}
        </p>
        <div className="statement-foot">
          <Reveal as="p">
            Your website, product and app are the first — often the only — impression a customer
            ever gets. We design and build them to earn trust in seconds and keep it for years.
          </Reveal>
          <Reveal delay={0.08}>
            <MagneticLink href="#services" variant="outline">
              See what we do
            </MagneticLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ index, label, children, lede }) {
  return (
    <div className="sec-head">
      <div>
        <Reveal>
          <p className="eyebrow-mono">
            <b>{index}</b> {label}
          </p>
        </Reveal>
        <Reveal delay={0.06} as="h2">
          {children}
        </Reveal>
      </div>
      {lede && (
        <Reveal delay={0.12} as="p" className="sec-lede">
          {lede}
        </Reveal>
      )}
    </div>
  );
}

export function Services() {
  return (
    <section className="section theme-light services-v2" id="services">
      <div className="shell">
        <SectionHead
          index="01"
          label="Services"
          lede="One studio for strategy, design and engineering — so nothing gets lost between the idea and the launch."
        >
          Everything a brand needs to <em>launch, scale</em> and stand out.
        </SectionHead>
        <div className="service-list-v2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04} as="article" className="service-row-v2">
              <span className="row-num">{s.n}</span>
              <h3>{s.title}</h3>
              <div className="row-copy">
                <p>{s.text}</p>
                <ul>
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <span className="row-arrow" aria-hidden="true">
                <ArrowUpRight size={18} />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Transformation() {
  return (
    <section className="section transform-section" id="approach">
      <div className="shell">
        <SectionHead
          index="02"
          label="Approach"
          lede="We don't just build websites. We take a business from first idea to a digital experience that keeps growing."
        >
          From a raw idea to a <em>living digital business.</em>
        </SectionHead>
        <ol className="transform-flow">
          {transformation.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.07} as="li" className="transform-node">
              <span className="t-num">0{i + 1}</span>
              <i />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WhyBion() {
  return (
    <section className="section why-bion" id="why">
      <div className="shell">
        <SectionHead
          index="03"
          label="Why Bion"
          lede="Four habits that separate work that merely ships from work that moves a business forward."
        >
          Four ways of working that shape <em>everything we ship.</em>
        </SectionHead>
        <div className="why-grid-v2">
          {whyBion.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08} className="why-card" as="article">
              <span className="why-num">{w.n}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BionPhilosophy() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  const tagRefs = useRef([]);
  useEffect(() => {
    const section = sectionRef.current;
    const items = itemRefs.current.filter(Boolean);
    const tags = tagRefs.current.filter(Boolean);
    if (!section || !items.length) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 65%",
        end: "bottom 65%",
        scrub: 0.6,
        onUpdate: (self) => {
          const activeIndex = Math.min(items.length - 1, Math.floor(self.progress * items.length));
          items.forEach((el, i) => el.classList.toggle("is-active", i <= activeIndex));
          tags.forEach((el, i) => el.classList.toggle("is-active", i <= activeIndex));
        },
      });
    }, section);
    return () => ctx.revert();
  }, []);
  return (
    <section className="section bion-philosophy" id="philosophy" ref={sectionRef}>
      <div className="shell">
        <div className="philosophy-head">
          <p className="eyebrow-mono">
            <b>05</b> The name
          </p>
          <h2>
            Four letters. <em>One way of working.</em>
          </h2>
        </div>
        <div className="philosophy-stage">
          <div className="philosophy-monogram">
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <line x1="50" y1="50" x2="50" y2="10" stroke="var(--border)" strokeWidth=".5" />
              <line x1="50" y1="50" x2="90" y2="50" stroke="var(--border)" strokeWidth=".5" />
              <line x1="50" y1="50" x2="50" y2="90" stroke="var(--border)" strokeWidth=".5" />
              <line x1="50" y1="50" x2="10" y2="50" stroke="var(--border)" strokeWidth=".5" />
            </svg>
            <span className="ring" />
            <BrandMark className="philosophy-brandmark" />
            <span
              className="philosophy-letter-tag"
              ref={(el) => (tagRefs.current[0] = el)}
              style={{ top: "1%", left: "50%", transform: "translateX(-50%)" }}
            >
              B
            </span>
            <span
              className="philosophy-letter-tag"
              ref={(el) => (tagRefs.current[1] = el)}
              style={{ top: "50%", right: "-2%", transform: "translateY(-50%)" }}
            >
              I
            </span>
            <span
              className="philosophy-letter-tag"
              ref={(el) => (tagRefs.current[2] = el)}
              style={{ bottom: "1%", left: "50%", transform: "translateX(-50%)" }}
            >
              O
            </span>
            <span
              className="philosophy-letter-tag"
              ref={(el) => (tagRefs.current[3] = el)}
              style={{ top: "50%", left: "-2%", transform: "translateY(-50%)" }}
            >
              N
            </span>
          </div>
          <div className="philosophy-list">
            {bionPrinciples.map((p, i) => (
              <div
                className="philosophy-item"
                key={p.word}
                ref={(el) => (itemRefs.current[i] = el)}
              >
                <span className="p-letter">{p.letter}</span>
                <div>
                  <h3>{p.word}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="philosophy-story">
          BION represents the way we approach digital work — we <b>Build</b> what businesses need,{" "}
          <b>Innovate</b> where possibilities exist, <b>Optimize</b> what can be better, and{" "}
          <b>Navigate</b> businesses toward what's next.
        </p>
      </div>
    </section>
  );
}

const techIcons = {
  Atom,
  Layers,
  FileCode2,
  Hexagon,
  Server,
  Leaf,
  Database,
  Feather,
  Smartphone,
  Flame,
  Cloud,
  Triangle,
};
const ringRadius = [18, 33, 48];
const ringSpin = [70, 95, 120];
const round2 = (n) => Math.round(n * 100) / 100;

export function TechEcosystem() {
  const [active, setActive] = useState(null);
  return (
    <section className="section tech-v2" id="tech">
      <div className="shell tech-layout">
        <div className="tech-intro">
          <Reveal>
            <p className="eyebrow-mono">
              <b>06</b> Technology
            </p>
          </Reveal>
          <Reveal delay={0.06} as="h2">
            A modern stack, <em>chosen with care.</em>
          </Reveal>
          <Reveal delay={0.1} as="p" className="tech-lede">
            One team across the whole stack. We pick technology for the problem in front of us, then
            keep it maintainable for the years after launch.
          </Reveal>
          <ul className="tech-legend">
            {techRings.map((ring, i) => (
              <li
                key={ring.label}
                className={active === i ? "is-active" : ""}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
              >
                <span className="legend-idx">0{i + 1}</span>
                <div>
                  <h3>{ring.label}</h3>
                  <p>{ring.sub}</p>
                  <span className="legend-tags">{ring.items.map((it) => it.name).join(" · ")}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={`orbit ${active !== null ? "has-active" : ""}`}>
          <div className="orbit-core">
            <span className="pulse" />
            <span className="pulse pulse-2" />
            <b>BION</b>
          </div>
          {techRings.map((ring, ri) => (
            <div
              key={ring.label}
              className={`orbit-ring ring-${ri} ${active === ri ? "is-active" : ""}`}
              style={{
                inset: `${50 - ringRadius[ri]}%`,
                "--spin": `${ringSpin[ri]}s`,
                "--dir": ri % 2 ? "reverse" : "normal",
                "--dir-inv": ri % 2 ? "normal" : "reverse",
              }}
            >
              {ring.items.map((it, ii) => {
                const angle = round2((ii / ring.items.length) * 360 + ri * 38 - 90);
                const rad = (angle * Math.PI) / 180;
                const Icon = techIcons[it.icon];
                return (
                  <Fragment key={it.name}>
                    <span className="orbit-spoke" style={{ transform: `rotate(${angle}deg)` }} />
                    <div
                      className="orbit-node"
                      style={{
                        left: `${round2(50 + 50 * Math.cos(rad))}%`,
                        top: `${round2(50 + 50 * Math.sin(rad))}%`,
                      }}
                    >
                      <div className="orbit-node-inner">
                        <span className="node-badge">
                          <Icon size={20} />
                        </span>
                        <span className="node-label">{it.name}</span>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const barRef = useRef(null);
  useEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    const bar = barRef.current;
    if (!pin || !track) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px)", () => {
      const distance = () => track.scrollWidth - window.innerWidth + 64;
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (bar) gsap.set(bar, { scaleX: self.progress });
          },
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });
    return () => mm.revert();
  }, []);
  return (
    <section className="theme-light process-v2" id="process">
      <div className="process-pin" ref={pinRef}>
        <div className="process-pin-head shell">
          <Reveal>
            <p className="eyebrow-mono">
              <b>07</b> Process
            </p>
          </Reveal>
          <Reveal delay={0.06} as="h2">
            A clear path from first call to launch — <em>and beyond.</em>
          </Reveal>
        </div>
        <div className="process-track-v2" ref={trackRef}>
          {processSteps.map((step) => (
            <div className="process-card" key={step.n}>
              <span className="p-num">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
        <div className="process-progress">
          <i ref={barRef} />
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section about-v2" id="about">
      <div className="shell about-grid-v2">
        <div>
          <Reveal>
            <p className="eyebrow-mono">
              <b>08</b> The studio
            </p>
          </Reveal>
          <Reveal delay={0.06} as="h2">
            {about.headline}
          </Reveal>
        </div>
        <div className="about-copy-v2">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="about-stats">
          {stats.map(([n, l]) => (
            <div key={l}>
              <span>{n}</span>
              <p>{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="section testimonial-v2">
      <div className="shell">
        <div className="testimonial-stage-v2">
          <Reveal>
            <p className="eyebrow-mono">
              <b>09</b> Kind words
            </p>
          </Reveal>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45 }}
            >
              <p>“{testimonials[active].quote}”</p>
              <footer>
                <b>{testimonials[active].name}</b>
                <span>{testimonials[active].role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
          <div className="testimonial-dots-v2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={active === i ? "active" : ""}
                onClick={() => setActive(i)}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section theme-light faq-v2" id="faq">
      <div className="shell faq-grid">
        <div className="faq-intro">
          <Reveal>
            <p className="eyebrow-mono">
              <b>10</b> Questions
            </p>
          </Reveal>
          <Reveal delay={0.06} as="h2">
            Things clients <em>usually ask.</em>
          </Reveal>
          <Reveal delay={0.1} as="p" className="sec-lede">
            Something else on your mind? Write to us — we reply within one working day.
          </Reveal>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={f.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <Plus size={20} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="section final-cta-v2" id="start">
      <div className="shell cta-grid">
        <div>
          <Reveal>
            <p className="eyebrow-mono">Ready when you are</p>
          </Reveal>
          <Reveal delay={0.06} as="h2">
            Let’s build
            <br />
            <em>something remarkable.</em>
          </Reveal>
          <Reveal delay={0.1} as="p">
            Have an idea, a business problem or a product you want to build? Tell us about it —
            we'll help you turn it into a digital experience worth talking about.
          </Reveal>
          <Reveal delay={0.15}>
            <div className="hero-actions">
              <MagneticLink href="#contact" variant="electric">
                Start a project
              </MagneticLink>
              <MagneticLink href={`mailto:${brand.email}`} variant="outline">
                {brand.email}
              </MagneticLink>
            </div>
          </Reveal>
        </div>
        <div className="final-cta-visual" aria-hidden="true">
          <div className="ring" />
          <div className="ring ring-2" />
          <motion.div
            className="core"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="section theme-light contact-v2" id="contact">
      <div className="shell contact-grid-v2">
        <div>
          <Reveal>
            <p className="eyebrow-mono">
              <b>11</b> Contact
            </p>
          </Reveal>
          <Reveal delay={0.06} as="h2">
            Tell us what you’re <em>building.</em>
          </Reveal>
          <Reveal delay={0.1} as="p" className="sec-lede">
            Share a few details and we'll reply within one working day with next steps — no sales
            pressure, just a straight conversation.
          </Reveal>
          <div className="contact-info-v2">
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <a href={brand.whatsapp}>Chat on WhatsApp</a>
            <p>{brand.location}</p>
          </div>
        </div>
        <form
          className="contact-form-v2"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const body = [...data.entries()]
              .filter(([, v]) => String(v).trim())
              .map(([k, v]) => `${k}: ${v}`)
              .join("\n");
            window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(
              "New project enquiry",
            )}&body=${encodeURIComponent(body)}`;
            setSent(true);
          }}
        >
          {[
            ["Name", "text"],
            ["Business name", "text"],
            ["Phone", "tel"],
            ["Email", "email"],
          ].map(([label, type]) => (
            <label key={label}>
              <span>{label}</span>
              <input type={type} name={label} required placeholder={label} />
            </label>
          ))}
          <label>
            <span>Business type</span>
            <input name="Business type" placeholder="Startup, retail, hospitality..." />
          </label>
          <label>
            <span>Services required</span>
            <select name="Service" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              {[
                "Web Experience",
                "Digital Product",
                "Mobile App",
                "Custom Software",
                "UI/UX",
                "Automation",
                "Other",
              ].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
          <label className="contact-full">
            <span>Tell us about the project</span>
            <textarea
              name="Project"
              rows="4"
              placeholder="Goals, timeline, current challenges..."
            />
          </label>
          <button className="btn btn-electric contact-submit" type="submit">
            <ButtonContent>{sent ? "Opening your email app…" : "Send enquiry"}</ButtonContent>
          </button>
          {sent && (
            <p className="form-note-v2">
              If your email app didn't open, write to us directly at {brand.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
