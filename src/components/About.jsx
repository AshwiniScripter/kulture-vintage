import React from "react";
import aboutBanner from "../assets/about-us.png";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-28 sm:pt-36 pb-16 px-4 md:px-12 max-w-4xl mx-auto font-mono selection:bg-red-600 selection:text-white">
      
      {/* 1. Header Banner Image */}
      <div className="w-full mb-8 flex justify-center">
        <img 
          src={aboutBanner} 
          alt="About Kulture Vintage" 
          className="w-full h-auto object-contain rounded-xl"
        />
      </div>

      {/* 2. Content Cards Matching Image Styling */}
      <div className="space-y-6">
        
        {/* OUR BELIEF */}
        <div className="bg-[#080808] border border-neutral-900 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-normal tracking-[0.25em] uppercase mb-6 text-white flex items-center gap-3">
            <span className="border-b border-white pb-1">OUR</span> 
            <span>BELIEF</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#a1a1a1] font-mono leading-relaxed tracking-wider">
            Kulture Vintage was built with one belief: fashion is more than what you wear—it’s how you express who you are.
          </p>
        </div>

        {/* OUR BRAND */}
        <div className="bg-[#080808] border border-neutral-900 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-normal tracking-[0.25em] uppercase mb-6 text-white flex items-center gap-3">
            <span className="border-b border-white pb-1">OUR</span> 
            <span>BRAND</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#a1a1a1] font-mono leading-relaxed tracking-wider">
            We’re creating a brand where streetwear, individuality, and culture come together. Every collection is designed to inspire confidence, celebrate creativity, and help people build their own identity through style.
          </p>
        </div>

        {/* OUR PROMISE */}
        <div className="bg-[#080808] border border-neutral-900 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-normal tracking-[0.25em] uppercase mb-6 text-white flex items-center gap-3">
            <span className="border-b border-white pb-1">OUR</span> 
            <span>PROMISE</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#a1a1a1] font-mono leading-relaxed tracking-wider">
            For us, clothing isn’t just a product—it’s a statement. We believe the right outfit can change the way you feel, the way you move, and the way the world sees you. That’s why we focus on creating timeless pieces that blend quality, comfort, and effortless style.
          </p>
        </div>

        {/* OUR VISION */}
        <div className="bg-[#080808] border border-neutral-900 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-normal tracking-[0.25em] uppercase mb-6 text-white flex items-center gap-3">
            <span className="border-b border-white pb-1">OUR</span> 
            <span>VISION</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#a1a1a1] font-mono leading-relaxed tracking-wider">
            As we continue to grow, our vision goes beyond fashion. We’re building a community of creators, dreamers, and trendsetters who believe in authenticity over trends and confidence over conformity.
          </p>
        </div>

        {/* CALLOUT CARD */}
        <div className="bg-[#080808] border border-neutral-900 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <h3 className="text-lg sm:text-2xl font-normal tracking-[0.2em] uppercase text-white leading-snug mb-4">
            THIS IS MORE THAN A BRAND.<br />
            THIS IS A CULTURE.
          </h3>
          <p className="text-xs sm:text-sm text-[#a1a1a1] font-mono tracking-wider">
            Welcome to Kulture Vintage.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;