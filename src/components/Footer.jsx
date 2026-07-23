import React from 'react';
import { Link } from 'react-router-dom';
import { 
  IoLogoInstagram, 
  IoCallOutline, 
  IoLocationOutline, 
  IoArrowForward, 
  IoChevronUpOutline 
} from 'react-icons/io5';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] text-neutral-400 font-mono border-t border-[#1a1a1a] relative z-20 pt-16 pb-12 px-4 sm:px-8 md:px-16 lg:px-24">
      
      {/* 1. TOP BRANDING & SCROLL CONTROL BAR */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between border-b border-[#181818] pb-10 gap-6">
        <div>
          <span className="text-[10px] text-neutral-300 font-bold tracking-[0.3em] uppercase block mb-1">
            // OFFICIAL ARCHIVE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-widest uppercase">
            KULTURE VINTAGE
          </h2>
        </div>

        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 border border-[#222] bg-[#0d0d0d] hover:bg-neutral-900 text-white text-xs font-bold px-5 py-3 rounded-xl transition duration-200 active:scale-95 cursor-pointer"
        >
          BACK TO TOP <IoChevronUpOutline className="text-sm" />
        </button>
      </div>

      {/* 2. MAIN GRID LAYOUT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-[#181818]">
        
        {/* Col 1: Store Location & Info (Cols 1-5) */}
        <div className="md:col-span-5 space-y-6">
          <h3 className="text-xs font-black text-white tracking-[0.2em] uppercase border-l-2 border-red-600 pl-3">
            FLAGSHIP STORE
          </h3>
          
          <div className="flex items-start gap-3 bg-[#0d0d0d] border border-[#1c1c1c] p-4 rounded-xl">
            <IoLocationOutline className="text-neutral-300 text-xl shrink-0 mt-0.5" />
            <div className="text-xs text-neutral-300 leading-relaxed">
              <p className="font-bold text-white mb-1">Amba Complex</p>
              <p>Shop No. 28, 9 MG Road, Camp,</p>
              <p>Pune, Maharashtra – 411001</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#0d0d0d] border border-[#1c1c1c] p-4 rounded-xl">
            <IoCallOutline className="text-neutral-300 text-xl shrink-0" />
            <div className="text-xs">
              <span className="text-neutral-500 block text-[10px] tracking-widest uppercase">DIRECT LINE</span>
              <a 
                href="tel:+918329137605" 
                className="text-white font-bold tracking-wider hover:text-neutral-400 transition"
              >
                +91 832-9137605
              </a>
            </div>
          </div>
        </div>

        {/* Col 2: Navigation Categories (Cols 6-8) */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="text-xs font-black text-white tracking-[0.2em] uppercase border-l-2 border-red-600 pl-3">
            CATEGORIES
          </h3>
          <ul className="space-y-2.5 text-xs">
            {[
              { label: 'T-SHIRTS', path: '/tshirts' },
              { label: 'SHOES', path: '/shoes' },
              { label: 'PANTS', path: '/pants' },
              { label: 'ACCESSORIES', path: '/accessories' },
              { label: 'BELTS', path: '/belts' },
              { label: 'WATCHES', path: '/watches' },
              { label: 'SHADES', path: '/shades' },
            ].map((cat) => (
              <li key={cat.label}>
                <Link 
                  to={cat.path} 
                  className="hover:text-white transition flex items-center gap-1.5 group"
                >
                  <IoArrowForward className="text-[10px] text-neutral-600 group-hover:text-neutral-300 transition" />
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Social & Connect (Cols 9-12) */}
        <div className="md:col-span-4 space-y-4">
          <h3 className="text-xs font-black text-white tracking-[0.2em] uppercase border-l-2 border-red-600 pl-3">
            CONNECT WITH US
          </h3>
          
          <p className="text-xs text-neutral-500 leading-relaxed">
            Follow our Instagram for daily drops, vintage archive updates, and exclusive streetwear releases.
          </p>

          <a 
            href="https://instagram.com/kulture.vintage_online" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-linear-to-r from-neutral-900 to-[#121212] border border-[#222] hover:border-red-600/50 p-4 rounded-xl text-xs text-white font-bold transition group w-full"
          >
            <div className="p-2 rounded-lg bg-red-600/10 text-neutral-400 group-hover:bg-red-600 group-hover:text-white transition">
              <IoLogoInstagram className="text-lg" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] text-neutral-500 uppercase block tracking-widest">INSTAGRAM</span>
              <span className="truncate block font-mono text-sm">@kulture.vintage_online</span>
            </div>
          </a>
        </div>

      </div>

      {/* 3. BOTTOM COPYRIGHT FOOTNOTE */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-600 gap-4">
        <p>© {new Date().getFullYear()} MAKETECHBERRY. ALL RIGHTS RESERVED.</p>
        <p className="tracking-widest uppercase">
          DESIGNED FOR <span className="text-neutral-400 font-bold">Kulture Vintage</span>
        </p>
      </div>

    </footer>
  );
};

export default Footer;