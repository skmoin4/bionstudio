import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Work from "./Work";
import Footer from "./Footer";
import { Cursor, useLenis } from "./SiteShell";
import { BrandMark } from "./MotionKit";
import { brand } from "./content";
import {
  About,
  BionPhilosophy,
  Contact,
  FAQ,
  FinalCTA,
  Marquee,
  Process,
  Services,
  Statement,
  TechEcosystem,
  Testimonials,
  Transformation,
  WhyBion,
} from "./Sections";

function Loader({ done }) {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.65 }}
    >
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
        <BrandMark />
        <p>{brand.name}</p>
      </motion.div>
      <div className="loader-track">
        <motion.i
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.25, ease: [0.65, 0, 0.35, 1] }}
          onAnimationComplete={done}
        />
      </div>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        {brand.tagline}
      </motion.span>
    </motion.div>
  );
}

export default function AgencyApp() {
  const [loading, setLoading] = useState(true);
  const reduceMotion = useReducedMotion();
  useLenis(!loading && !reduceMotion);
  return (
    <div className="agency-app">
      <AnimatePresence>{loading && <Loader done={() => setLoading(false)} />}</AnimatePresence>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Statement />
        <Services />
        <Transformation />
        <WhyBion />
        <Work />
        <BionPhilosophy />
        <TechEcosystem />
        <Process />
        <About />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
