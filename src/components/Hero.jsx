import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import hero from "../assets/hero.png";

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.85, 1], ["0vh", "50vh", "0vh"]);

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden z-10" data-aos="fade-up">
      {/* Background Hero Image */}
      <img
        src={hero}
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Text Container */}
      <motion.div 
        style={{ y: textY }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-1 z-30 select-none pointer-events-none"
      >
        {/* Line 1: PAIN TO */}
        <h1 
          className="text-[7.5rem] sm:text-[11rem] md:text-[15rem] lg:text-[20rem] font-black uppercase leading-[0.72]
                     bg-linear-to-b from-[#ff0000] via-[#cc0000] to-[#400000] bg-clip-text text-transparent
                     drop-shadow-[0_8px_20px_rgba(0,0,0,0.95)] transform scale-y-150 origin-center"
          style={{
            fontFamily: "'Creepster', cursive, 'Impact', sans-serif",
            filter: "contrast(170%) brightness(100%)",
            letterSpacing: "0.12em", // Adds explicit space between letters
          }}
        >
          PAIN TO
        </h1>

        <br />
        <br />

        {/* Line 2: PURPOSE */}
        <h1 
          className="text-[6.8rem] sm:text-[10rem] md:text-[14rem] lg:text-[18.5rem] font-black uppercase leading-[0.72] mt-8 sm:mt-12
                     bg-linear-to-b from-[#ff0000] via-[#cc0000] to-[#300000] bg-clip-text text-transparent
                     drop-shadow-[0_8px_20px_rgba(0,0,0,0.95)] transform scale-y-150 origin-center"
          style={{
            fontFamily: "'Creepster', cursive, 'Impact', sans-serif",
            filter: "contrast(170%) brightness(100%)",
            letterSpacing: "0.08em", // Balanced spacing for the longer word
          }}
        >
          PURPOSE
        </h1>
      </motion.div>
    </section>
  );
};

export default Hero;