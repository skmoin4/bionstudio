import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "./content";
import { Reveal } from "./MotionKit";

function CaseStudy({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  return (
    <article className={`case-study ${index % 2 ? "is-reversed" : ""}`} ref={ref}>
      <div className="case-grid">
        <motion.div
          className="case-media"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={{
              hidden: { clipPath: "inset(0 0 100% 0)" },
              show: {
                clipPath: "inset(0 0 0% 0)",
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            style={{ height: "100%" }}
          >
            <motion.img
              src={project.image}
              alt={`${project.title} — fictional ${project.industry.toLowerCase()} concept`}
              width="1200"
              height="900"
              style={{ y }}
            />
          </motion.div>
          <span className="case-index">{project.n} · Concept project</span>
        </motion.div>
        <div className="case-copy">
          <Reveal>
            <p className="case-industry">{project.industry}</p>
          </Reveal>
          <Reveal delay={0.06} as="h3">
            {project.title}
          </Reveal>
          <Reveal delay={0.1}>
            <p>{project.built}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="case-tech">
              {[...new Set([...project.scope, ...project.tech])].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <a className="case-link" href="#contact" data-cursor="action" data-cursor-text="View">
              <span>View case study</span>
              <span className="case-link-icon" aria-hidden="true">
                <ArrowUpRight size={14} />
                <ArrowUpRight size={14} />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section className="section theme-light work-v2" id="work">
      <div className="shell">
        <div className="work-head">
          <Reveal>
            <p className="eyebrow-mono">
              <b>04</b> Selected work
            </p>
          </Reveal>
          <Reveal delay={0.06} as="h2">
            Recent work, <em>made tangible.</em>
          </Reveal>
        </div>
        {projects.map((project, i) => (
          <CaseStudy project={project} index={i} key={project.title} />
        ))}
      </div>
    </section>
  );
}
