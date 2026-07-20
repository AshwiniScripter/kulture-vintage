import React from "react";
import { useNavigate } from "react-router-dom";
import tshirt from "../assets/Category/tshirt.png";
import shoes from "../assets/Category/shoes.png";
import pants from "../assets/Category/pants.png";
import accessories from "../assets/Category/accessories.png";
import belt from "../assets/Category/belt.jpeg";
import watch from "../assets/Category/watch.jpeg";
import chain from "../assets/Category/bandana.jpeg";
import shades from "../assets/Category/shades.jpeg";

const Categories = () => {
  const navigate = useNavigate();

  // Updated routing function to forward users directly to their dedicated pages
  const handleCategoryClick = (categoryName) => {
    switch (categoryName) {
      case "tshirts":
        navigate("/tshirts");
        break;
      case "shoes":
        navigate("/shoes");
        break;
      case "pants":
        navigate("/pants");
        break;
      case "accessories":
        navigate("/accessories");
        break;
      case "belts":
        navigate("/belts");
        break;
      case "bandana":
        navigate("/bandana");
        break;
      case "watches":
        navigate("/watches");
        break;
      case "shades":
        navigate("/shades");
        break;
      default:
        navigate("/products");
    }
  };

  return (
    <section className="bg-[#0f0f0f] py-10 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-6">

        {/* Heading */}
        <div className="bg-black rounded-xl py-4 sm:py-6 shadow-xl border border-neutral-900/50">
          <h1 className="text-center text-red-600 text-3xl sm:text-5xl lg:text-6xl font-black tracking-widest uppercase selection:bg-red-600 selection:text-white">
            CATEGORY
          </h1>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          {/* LEFT COLUMN (T-shirts & Bottom Asymmetric Sub-Section) */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Tshirt Card */}
            <div className="relative h-80 sm:h-112.5 lg:h-125 rounded-2xl overflow-hidden group border border-neutral-900 shadow-lg">
              <img
                src={tshirt}
                alt="T-Shirts"
                className="w-full h-full object-cover group-hover:scale-105 duration-500 ease-out transition-transform"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl p-0 overflow-hidden">
                <button
                  onClick={() => handleCategoryClick("tshirts")}
                  className="w-full text-center text-red-600 text-2xl sm:text-4xl lg:text-5xl font-black tracking-wider py-4 transition-colors duration-300 hover:text-red-500 hover:bg-white/5 active:bg-white/10 cursor-pointer block"
                >
                  UPPER WARE
                </button>
              </div>
            </div>

            {/* Sub-Section Layout: Accessories on Left + 2x2 Grid on Right */}
            <div className="grid grid-cols-3 gap-4">

              {/* Column 1: Accessories Card */}
              <div className="relative h-44 sm:h-64 lg:h-72 rounded-xl overflow-hidden group border border-neutral-900">
                <img
                  src={accessories}
                  alt="Accessories"
                  className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                />
                <div className="absolute bottom-3 left-2 right-2 bg-black/50 backdrop-blur-sm rounded-lg border border-white/5 overflow-hidden">
                  <button
                    onClick={() => handleCategoryClick("accessories")}
                    className="w-full text-center text-red-600 text-xs sm:text-sm lg:text-base font-black tracking-widest py-2 hover:text-red-500 hover:bg-white/5 active:bg-white/10 cursor-pointer block"
                  >
                    ACCESSORIES
                  </button>
                </div>
              </div>

              {/* Columns 2 & 3: 2x2 Nested Grid Area */}
              <div className="col-span-2 grid grid-cols-2 gap-4 h-44 sm:h-64 lg:h-72">
                
                {/* Belts */}
                <div className="relative rounded-xl overflow-hidden group border border-neutral-900">
                  <img
                    src={belt}
                    alt="Belts"
                    className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                  />
                  <div className="absolute bottom-2 left-1 right-1 bg-black/50 backdrop-blur-sm rounded border border-white/5 overflow-hidden">
                    <button
                      onClick={() => handleCategoryClick("belts")}
                      className="w-full text-center text-red-600 text-[10px] sm:text-xs lg:text-sm font-black tracking-wider py-1 hover:text-red-500 hover:bg-white/5 active:bg-white/10 cursor-pointer block"
                    >
                      BELTS
                    </button>
                  </div>
                </div>

                {/* Bandana */}
                <div className="relative rounded-xl overflow-hidden group border border-neutral-900">
                  <img
                    src={chain}
                    alt="Bandana"
                    className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                  />
                  <div className="absolute bottom-2 left-1 right-1 bg-black/50 backdrop-blur-sm rounded border border-white/5 overflow-hidden">
                    <button
                      onClick={() => handleCategoryClick("bandana")}
                      className="w-full text-center text-red-600 text-[10px] sm:text-xs lg:text-sm font-black tracking-wider py-1 hover:text-red-500 hover:bg-white/5 active:bg-white/10 cursor-pointer block"
                    >
                      BANDANA
                    </button>
                  </div>
                </div>

                {/* Watches */}
                <div className="relative rounded-xl overflow-hidden group border border-neutral-900">
                  <img
                    src={watch}
                    alt="Watches"
                    className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                  />
                  <div className="absolute bottom-2 left-1 right-1 bg-black/50 backdrop-blur-sm rounded border border-white/5 overflow-hidden">
                    <button
                      onClick={() => handleCategoryClick("watches")}
                      className="w-full text-center text-red-600 text-[10px] sm:text-xs lg:text-sm font-black tracking-wider py-1 hover:text-red-500 hover:bg-white/5 active:bg-white/10 cursor-pointer block"
                    >
                      WATCHES
                    </button>
                  </div>
                </div>

                {/* Shades */}
                <div className="relative rounded-xl overflow-hidden group border border-neutral-900">
                  <img
                    src={shades}
                    alt="Shades"
                    className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                  />
                  <div className="absolute bottom-2 left-1 right-1 bg-black/50 backdrop-blur-sm rounded border border-white/5 overflow-hidden">
                    <button
                      onClick={() => handleCategoryClick("shades")}
                      className="w-full text-center text-red-600 text-[10px] sm:text-xs lg:text-sm font-black tracking-wider py-1 hover:text-red-500 hover:bg-white/5 active:bg-white/10 cursor-pointer block"
                    >
                      SHADES
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Shoes & Tall Pants Box Layout) */}
          <div className="flex flex-col gap-6">

            {/* Shoes Card */}
            <div className="relative h-44 sm:h-60 lg:h-64 rounded-xl overflow-hidden group border border-neutral-900 shadow-lg">
              <img
                src={shoes}
                alt="Shoes"
                className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-black/40 backdrop-blur-sm rounded-lg border border-white/5 overflow-hidden">
                <button
                  onClick={() => handleCategoryClick("shoes")}
                  className="w-full text-center text-red-600 text-sm sm:text-lg lg:text-xl font-black tracking-widest py-2.5 hover:text-red-500 hover:bg-white/5 active:bg-white/10 cursor-pointer block"
                >
                  SHOES
                </button>
              </div>
            </div>

            {/* Pants Card */}
            <div className="relative flex-1 min-h-87.5 lg:min-h-0 rounded-2xl overflow-hidden group border border-neutral-900 shadow-lg">
              <img
                src={pants}
                alt="Pants"
                className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
                <button
                  onClick={() => handleCategoryClick("pants")}
                  className="w-full text-center text-red-600 text-xl sm:text-3xl lg:text-4xl font-black tracking-wider py-3 hover:text-red-500 hover:bg-white/5 active:bg-white/10 cursor-pointer block"
                >
                  BOTTOM WARE
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Call-to-Action Buttons */}
        <div className="grid grid-cols-2 gap-6 mt-2">
          <button
            onClick={() => navigate("/products")}
            className="bg-black border border-neutral-900/60 rounded-xl py-4 sm:py-6 text-red-600 text-xl sm:text-3xl lg:text-4xl font-black tracking-widest hover:bg-red-600 hover:text-white active:scale-[0.99] transition duration-300 shadow-xl cursor-pointer"
          >
            PRODUCTS
          </button>
          <button className="bg-black border border-neutral-900/60 rounded-xl py-4 sm:py-6 text-red-600 text-xl sm:text-3xl lg:text-4xl font-black tracking-widest hover:bg-red-600 hover:text-white active:scale-[0.99] transition duration-300 shadow-xl cursor-pointer">
            NEW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;