import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Imported for redirection logic
import tshirt from "../assets/Category/tshirt.png";
import shoes from "../assets/Category/shoes.png";
import pants from "../assets/Category/pants.png";
import accessories from "../assets/Category/accessories.png";
import belt from "../assets/Category/belt.jpeg";
import watch from "../assets/Category/watch.jpeg";
import chain from "../assets/Category/bandana.jpeg";
import shades from "../assets/Category/shades.jpeg";
import ProductGrid from './ProductGrid';

const ProductDetail = ({ 
  cartItems, 
  setCartItems, 
  wishlistedIds, 
  setWishlistedIds 
}) => {
  const navigate = useNavigate(); 
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#0f0f0f] pt-24 pb-24">

      {/* Embedded Categories Component Wrapper */}
      <section className="bg-[#0f0f0f] py-10 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl w-full mx-auto flex flex-col gap-6">
      
          {/* Heading */}
          <div className="bg-black rounded-xl py-4 sm:py-6 shadow-xl border border-neutral-900/50" data-aos="fade-up">
            <h1 className="text-center text-neutral-300 text-3xl sm:text-5xl lg:text-6xl font-black tracking-widest uppercase selection:bg-neutral-700 selection:text-white">
              CATEGORY
            </h1>
          </div>
      
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      
            <div className="lg:col-span-2 flex flex-col gap-6">
      
              {/* Tshirt Card */}
              <div 
                onClick={() => navigate('/tshirts')} 
                className="relative h-80 sm:h-112.5 lg:h-125 rounded-2xl overflow-hidden group border border-neutral-900 shadow-lg cursor-pointer"
                data-aos="fade-up" data-aos-delay="100"
              >
                <img
                  src={tshirt}
                  alt="T-Shirts"
                  className="w-full h-full object-cover group-hover:scale-105 duration-500 ease-out transition-transform"
                />
                <div className="absolute bottom-5 left-5 right-5 bg-black/40 backdrop-blur-md rounded-xl py-4 border border-white/10 shadow-2xl">
                  <h2 className="text-center text-neutral-300 text-2xl sm:text-4xl lg:text-5xl font-black tracking-wider transition-colors duration-300 group-hover:text-neutral-400">
                    UPPER WARE
                  </h2>
                </div>
              </div>
      
              {/* Sub-Section Layout: Accessories on Left + 2x2 Grid on Right */}
              <div className="grid grid-cols-3 gap-4">
      
                {/* Column 1: Accessories Card */}
                <div 
                  onClick={() => navigate('/accessories')} 
                  className="relative h-44 sm:h-64 lg:h-72 rounded-xl overflow-hidden group border border-neutral-900 cursor-pointer"
                  data-aos="fade-up" data-aos-delay="200"
                >
                  <img
                    src={accessories}
                    alt="Accessories"
                    className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                  />
                  <div className="absolute bottom-3 left-2 right-2 bg-black/50 backdrop-blur-sm rounded-lg py-2 border border-white/5">
                    <p className="text-center text-neutral-300 text-xs sm:text-sm lg:text-base font-black tracking-widest">
                      ACCESSORIES
                    </p>
                  </div>
                </div>
      
                {/* Columns 2 & 3: 2x2 Nested Grid Area for Belts, Bandana, Watches, Shades */}
                <div className="col-span-2 grid grid-cols-2 gap-4 h-44 sm:h-64 lg:h-72">
                  
                  {/* [Row 1, Item 1] Belts */}
                  <div 
                    onClick={() => navigate('/belts')} 
                    className="relative rounded-xl overflow-hidden group border border-neutral-900 cursor-pointer"
                    data-aos="fade-up" data-aos-delay="300"
                  >
                    <img
                      src={belt}
                      alt="Belts"
                      className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                    />
                    <div className="absolute bottom-2 left-1 right-1 bg-black/50 backdrop-blur-sm rounded py-1 border border-white/5">
                      <p className="text-center text-neutral-300 text-[10px] sm:text-xs lg:text-sm font-black tracking-wider">
                        BELTS
                      </p>
                    </div>
                  </div>
      
                  {/* [Row 1, Item 2] Bandana */}
                  <div 
                    onClick={() => navigate('/bandana')} 
                    className="relative rounded-xl overflow-hidden group border border-neutral-900 cursor-pointer"
                    data-aos="fade-up" data-aos-delay="400"
                  >
                    <img
                      src={chain}
                      alt="Bandana"
                      className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                    />
                    <div className="absolute bottom-2 left-1 right-1 bg-black/50 backdrop-blur-sm rounded py-1 border border-white/5">
                      <p className="text-center text-neutral-300 text-[10px] sm:text-xs lg:text-sm font-black tracking-wider">
                        BANDANA
                      </p>
                    </div>
                  </div>
      
                  {/* [Row 2, Item 1] Watches */}
                  <div 
                    onClick={() => navigate('/watches')} 
                    className="relative rounded-xl overflow-hidden group border border-neutral-900 cursor-pointer"
                    data-aos="fade-up" data-aos-delay="500"
                  >
                    <img
                      src={watch}
                      alt="Watches"
                      className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                    />
                    <div className="absolute bottom-2 left-1 right-1 bg-black/50 backdrop-blur-sm rounded py-1 border border-white/5">
                      <p className="text-center text-neutral-300 text-[10px] sm:text-xs lg:text-sm font-black tracking-wider">
                        WATCHES
                      </p>
                    </div>
                  </div>
      
                  {/* [Row 2, Item 2] Shades */}
                  <div 
                    onClick={() => navigate('/shades')} 
                    className="relative rounded-xl overflow-hidden group border border-neutral-900 cursor-pointer"
                    data-aos="fade-up" data-aos-delay="600"
                  >
                    <img
                      src={shades}
                      alt="Shades"
                      className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                    />
                    <div className="absolute bottom-2 left-1 right-1 bg-black/50 backdrop-blur-sm rounded py-1 border border-white/5">
                      <p className="text-center text-neutral-300 text-[10px] sm:text-xs lg:text-sm font-black tracking-wider">
                        SHADES
                      </p>
                    </div>
                  </div>
      
                </div>
      
              </div>
      
            </div>
      
            {/* RIGHT COLUMN (Shoes & Tall Pants Box Layout) */}
            <div className="flex flex-col gap-6">
      
              {/* Shoes Card */}
              <div 
                onClick={() => navigate('/shoes')} 
                className="relative h-44 sm:h-60 lg:h-64 rounded-xl overflow-hidden group border border-neutral-900 shadow-lg cursor-pointer"
                data-aos="fade-up" data-aos-delay="700"
              >
                <img
                  src={shoes}
                  alt="Shoes"
                  className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-black/40 backdrop-blur-sm rounded-lg py-2.5 border border-white/5">
                  <h3 className="text-center text-neutral-300 text-sm sm:text-lg lg:text-xl font-black tracking-widest">
                    SHOES
                  </h3>
                </div>
              </div>
      
              {/* Pants Card */}
              <div 
                onClick={() => navigate('/pants')} 
                className="relative flex-1 min-h-87.5 lg:min-h-0 rounded-2xl overflow-hidden group border border-neutral-900 shadow-lg cursor-pointer"
                data-aos="fade-up" data-aos-delay="800"
              >
                <img
                  src={pants}
                  alt="Pants"
                  className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                />
                <div className="absolute bottom-5 left-5 right-5 bg-black/40 backdrop-blur-md rounded-xl py-3 border border-white/10">
                  <h2 className="text-center text-neutral-300 text-xl sm:text-3xl lg:text-4xl font-black tracking-wider">
                    LOWER WARE
                  </h2>
                </div>
              </div>
      
            </div>
      
          </div>
      
        </div>
      </section>

      <div className="mt-8 bg-black rounded-xl py-4 sm:py-6 shadow-xl border border-neutral-900/50" data-aos="fade-up">
        <h1 className="text-center text-neutral-300 text-3xl sm:text-5xl lg:text-6xl font-black tracking-widest uppercase selection:bg-neutral-700 selection:text-white">
          ALL PRODUCTS
        </h1>
      </div>
      <ProductGrid
        cartItems={cartItems}
        setCartItems={setCartItems}
        wishlistedIds={wishlistedIds}
        setWishlistedIds={setWishlistedIds}
      />
    </div>
  );
};

export default ProductDetail;