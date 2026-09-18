import { Fragment, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  about,
  bionPrinciples,
  brand,
  processSteps,
  services,
  stats,
  technologies,
  testimonials,
  transformation,
  whyBion,
} from "./content";
import { BrandMark, MagneticLink, Reveal } from "./MotionKit";

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

export function Statement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "start 0.35"] });
  const text =
    "Digital isn't just where your business lives. It's how your business is experienced.";
  const words = text.split(" ");
  return (
    <section className="statement-section" id="statement">
      <div className="shell">
        <Reveal>
          <p className="eyebrow-mono">01 / Brand statement</p>
        </Reveal>
        <p className="statement-text" ref={ref} style={{ marginTop: "1.5rem" }}>
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
      </div>
    </section>
  );
}

export function Services() {
  const [open, setOpen] = useState(0);
  return (
    <section className="services-v2" id="services">
      <div className="shell">
        <div className="services-head">
          <Reveal>
            <p className="eyebrow-mono">02 / What we do</p>
          </Reveal>
          <Reveal delay={0.06} as="h2">
            Six disciplines. One studio, built to carry a product from idea to growth.
          </Reveal>
        </div>
        <div className="service-list-v2">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <div className={`service-row-v2 ${isOpen ? "is-open" : ""}`} key={s.title}>
                <div className="row-head" onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span className="row-num">{s.n}</span>
                  <h3>{s.title}</h3>
                  <span className="row-arrow">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="row-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="row-body-inner">
                        <span />
                        <p>{s.text}</p>
                      </div>
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

export function Transformation() {
  return (
    <section className="transform-section">
      <div className="shell">
        <div className="transform-head">
          <Reveal>
            <p className="eyebrow-mono">03 / How it happens</p>
          </Reveal>
          <Reveal delay={0.06} as="h2">
            We don't just build websites. We turn businesses into digital experiences.
          </Reveal>
        </div>
        <div className="transform-flow">
          {transformation.map((step, i) => (
            <Fragment key={step}>
              <Reveal delay={i * 0.08} className="transform-node">
                <i />
                <span>{step}</span>
              </Reveal>
              {i < transformation.length - 1 && (
                <Reveal as="span" delay={i * 0.08 + 0.04} className="transform-arrow">
                  <ArrowRight size={16} />
                </Reveal>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyBion() {
  return (
    <section className="why-bion" id="why">
      <div className="shell">
        <Reveal>
          <p className="eyebrow-mono">04 / Why bion</p>
        </Reveal>
        <Reveal delay={0.06} as="h2" className="editorial-heading">
          Four ways of working that shape everything we ship.
        </Reveal>
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
    <section className="bion-philosophy" id="philosophy" ref={sectionRef}>
      <div className="shell">
        <div className="philosophy-head">
          <p className="eyebrow-mono">What bion stands for</p>
          <h2>Four principles. One digital vision.</h2>
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

export function TechEcosystem() {
  const gradId = useId();
  const total = technologies.length;
  const radius = 37;
  const round = (n) => Math.round(n * 100) / 100;
  const positions = technologies.map((t, i) => {
    const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
    return { t, x: round(50 + radius * Math.cos(angle)), y: round(50 + radius * Math.sin(angle)) };
  });
  return (
    <section className="tech-v2" id="tech">
      <div className="shell">
        <div className="tech-head">
          <Reveal>
            <p className="eyebrow-mono">06 / Technology</p>
          </Reveal>
          <Reveal delay={0.06} as="h2">
            An ecosystem built around Bion.
          </Reveal>
        </div>
        <div className="tech-graph">
          <svg className="tech-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--electric)" />
              </linearGradient>
            </defs>
            {positions.map((p) => (
              <line key={p.t} x1="50" y1="50" x2={p.x} y2={p.y} stroke={`url(#${gradId})`} />
            ))}
          </svg>
          <div className="tech-node-core">
            <span>BION</span>
          </div>
          {positions.map((p) => (
            <motion.span
              key={p.t}
              className="tech-node"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
            >
              {p.t}
            </motion.span>
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
    <section className="process-v2" id="process">
      <div className="process-pin" ref={pinRef}>
        <div className="process-pin-head shell">
          <Reveal>
            <p className="eyebrow-mono">07 / Process</p>
          </Reveal>
          <Reveal delay={0.06} as="h2">
            A journey from idea to growth.
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
    <section className="about-v2" id="about">
      <div className="shell about-grid-v2">
        <div>
          <Reveal>
            <p className="eyebrow-mono">08 / About bion</p>
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
          <div className="about-stats">
            {stats.map(([n, l]) => (
              <div key={l}>
                <span>{n}</span>
                <p>{l}</p>
              </div>
            ))}
          </div>
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
    <section className="testimonial-v2">
      <div className="shell">
        <div className="testimonial-stage-v2">
          <Reveal>
            <p className="eyebrow-mono">09 / Client voices</p>
          </Reveal>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45 }}
            >
              <p>"{testimonials[active].quote}"</p>
              <footer>
                <b>{testimonials[active].name}</b> — {testimonials[active].role}
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

export function FinalCTA() {
  return (
    <section className="final-cta-v2" id="start">
      <div className="shell cta-grid">
        <div>
          <Reveal>
            <p className="eyebrow-mono">Ready when you are</p>
          </Reveal>
          <Reveal delay={0.06} as="h2">
            Let's build
            <br />
            <em>something digital.</em>
          </Reveal>
          <Reveal delay={0.1} as="p">
            Have an idea, a business problem or a product you want to build? Let's turn it into a
            digital experience.
          </Reveal>
          <Reveal delay={0.15}>
            <div className="hero-actions">
              <MagneticLink href="#contact" variant="electric">
                Start a project
              </MagneticLink>
            </div>
          </Reveal>
        </div>
        <div className="final-cta-visual">
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
    <section className="contact-v2" id="contact">
      <div className="shell contact-grid-v2">
        <div>
          <Reveal>
            <p className="eyebrow-mono">Start a conversation</p>
          </Reveal>
          <Reveal delay={0.06} as="h2" className="editorial-heading">
            Let's build something valuable.
          </Reveal>
          <div className="contact-info-v2">
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <a href={brand.whatsapp}>{brand.phone}</a>
            <p>{brand.location}</p>
          </div>
          <div className="contact-socials-v2">
            <a href="#contact">Instagram</a>
            <a href="#contact">LinkedIn</a>
            <a href={brand.whatsapp}>WhatsApp</a>
          </div>
        </div>
        <form
          className="contact-form-v2"
          onSubmit={(e) => {
            e.preventDefault();
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
              <input type={type} required placeholder={label} />
            </label>
          ))}
          <label>
            <span>Business type</span>
            <input placeholder="Startup, retail, hospitality..." />
          </label>
          <label>
            <span>Services required</span>
            <select defaultValue="">
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
            <textarea rows="4" placeholder="Goals, timeline, current challenges..." />
          </label>
          <button className="btn btn-electric contact-submit" type="submit">
            {sent ? "Enquiry ready — we'll be in touch" : "Send enquiry"}
            <ArrowUpRight size={16} />
          </button>
          {sent && (
            <p className="form-note-v2">
              Demo form complete. Connect your preferred inbox before launch.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
