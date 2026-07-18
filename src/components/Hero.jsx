import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Navbar REMOVED from here to fix duplicate layering */}
      
      <img
        src={hero}
        alt="Hero"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  );
};

export default Hero;