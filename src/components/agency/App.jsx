import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Work from "./Work";
import Footer from "./Footer";
import { About, Contact, FAQ, FinalCTA, HotelDemo, Marquee, Process, Services, TeamAndTech, Testimonials, WhyUs } from "./Sections";

function Loader({ done }) { return <motion.div className="loader" initial={{opacity:1}} exit={{opacity:0}} transition={{duration:.65}} onAnimationComplete={()=>{}}><motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}}><span className="brand-mark">N</span><p>NEXORA STUDIO</p></motion.div><div className="loader-track"><motion.i initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:1.25,ease:[.65,0,.35,1]}} onAnimationComplete={done}/></div><motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2}}>Creating signal from noise</motion.span></motion.div>; }

function Cursor() { const x=useMotionValue(-100), y=useMotionValue(-100); const sx=useSpring(x,{stiffness:500,damping:34}), sy=useSpring(y,{stiffness:500,damping:34}); const [active,setActive]=useState(false); useEffect(()=>{const move=e=>{x.set(e.clientX);y.set(e.clientY);setActive(Boolean(e.target.closest("a,button,[data-cursor]")))};window.addEventListener("pointermove",move);return()=>window.removeEventListener("pointermove",move)},[x,y]); return <motion.div className={`custom-cursor ${active?"cursor-active":""}`} style={{x:sx,y:sy}}/>; }

export default function AgencyApp() {
  const [loading,setLoading]=useState(true);
  return <div className="agency-app"><AnimatePresence>{loading&&<Loader done={()=>setLoading(false)}/>}</AnimatePresence><Cursor/><Navbar/><main><Hero/><Marquee/><About/><Services/><WhyUs/><Work/><HotelDemo/><Process/><TeamAndTech/><Testimonials/><FAQ/><FinalCTA/><Contact/></main><Footer/></div>;
}