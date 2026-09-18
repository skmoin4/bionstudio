import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "./content";
import { SectionHeading, TiltCard } from "./MotionKit";

export default function Work() {
  return <section className="section work-section" id="work"><div className="section-shell">
    <SectionHeading kicker="03 / Selected work">Ideas made tangible.</SectionHeading>
    <p className="demo-note">Concept work — created to demonstrate our capability, not client commissions.</p>
    <div className="project-list">{projects.map((project, i) => <TiltCard className={`project ${i%2 ? "project-offset" : ""}`} key={project.title}>
      <motion.div className="project-image-wrap" initial={{ clipPath:"inset(0 0 100% 0)" }} whileInView={{ clipPath:"inset(0 0 0% 0)" }} viewport={{ once:true, amount:.2 }} transition={{ duration:1, ease:[.16,1,.3,1] }}>
        <motion.img src={project.image} alt={`${project.title} fictional ${project.category.toLowerCase()} concept`} loading="lazy" width="1600" height="1000" whileHover={{ scale:1.045 }} transition={{ duration:.7 }} />
        <span className="project-index">0{i+1}</span><span className="project-open"><ArrowUpRight/></span>
      </motion.div>
      <div className="project-meta"><div><p>{project.category}</p><h3>{project.title}</h3></div><p>{project.description}</p><div className="tech-tags">{project.tech.map(t=><span key={t}>{t}</span>)}</div></div>
    </TiltCard>)}</div>
  </div></section>;
}