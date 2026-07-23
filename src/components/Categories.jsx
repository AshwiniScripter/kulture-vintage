import React from "react";
import { useNavigate } from "react-router-dom";
import tshirt from "../assets/Category/tshirt.png";
import shoes from "../assets/Category/shoes.png";
import pants from "../assets/Category/pants.png";
import accessories from "../assets/Category/accessories.png";

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
      default:
        navigate("/new-arrival");
    }
  };

  return (
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

          {/* LEFT COLUMN (T-shirts & Bottom Asymmetric Sub-Section) */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Tshirt Card */}
            <div className="relative h-80 sm:h-112.5 lg:h-125 rounded-2xl overflow-hidden group border border-neutral-900 shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <img
                src={tshirt}
                alt="T-Shirts"
                className="w-full h-full object-cover group-hover:scale-105 duration-500 ease-out transition-transform"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl p-0 overflow-hidden">
                <button
                  onClick={() => handleCategoryClick("tshirts")}
                  className="w-full text-center text-neutral-300 text-2xl sm:text-4xl lg:text-5xl font-black tracking-wider py-4 transition-colors duration-300 hover:text-neutral-400 hover:bg-white/5 active:bg-white/10 cursor-pointer block"
                >
                  UPPER WEAR
                </button>
              </div>
            </div>

            {/* Accessories Broad Section */}
            <div className="relative h-44 sm:h-64 lg:h-72 rounded-xl overflow-hidden group border border-neutral-900" data-aos="fade-up" data-aos-delay="200">
              <img
                src={accessories}
                alt="Accessories"
                className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-black/50 backdrop-blur-sm rounded-lg border border-white/5 overflow-hidden">
                <button
                  onClick={() => handleCategoryClick("accessories")}
                  className="w-full text-center text-neutral-300 text-xs sm:text-lg lg:text-xl font-black tracking-widest py-2.5 hover:text-neutral-400 hover:bg-white/5 active:bg-white/10 cursor-pointer block"
                >
                  ACCESSORIES
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Shoes & Tall Pants Box Layout) */}
          <div className="flex flex-col gap-6">

            {/* Shoes Card */}
            <div className="relative h-44 sm:h-60 lg:h-64 rounded-xl overflow-hidden group border border-neutral-900 shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <img
                src={shoes}
                alt="Shoes"
                className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-black/40 backdrop-blur-sm rounded-lg border border-white/5 overflow-hidden">
                <button
                  onClick={() => handleCategoryClick("shoes")}
                  className="w-full text-center text-neutral-300 text-sm sm:text-lg lg:text-xl font-black tracking-widest py-2.5 hover:text-neutral-400 hover:bg-white/5 active:bg-white/10 cursor-pointer block"
                >
                  SHOES
                </button>
              </div>
            </div>

            {/* Pants Card */}
            <div className="relative flex-1 min-h-87.5 lg:min-h-0 rounded-2xl overflow-hidden group border border-neutral-900 shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <img
                src={pants}
                alt="Pants"
                className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
                <button
                  onClick={() => handleCategoryClick("pants")}
                  className="w-full text-center text-neutral-300 text-xl sm:text-3xl lg:text-4xl font-black tracking-wider py-3 hover:text-neutral-400 hover:bg-white/5 active:bg-white/10 cursor-pointer block"
                >
                  BOTTOM WEAR
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Call-to-Action Button */}
        <div className="mt-2" data-aos="fade-up" data-aos-delay="500">
          <button
            onClick={() => navigate("/new-arrival")}
            className="w-full bg-black border border-neutral-900/60 rounded-xl py-4 sm:py-6 text-neutral-300 text-xl sm:text-3xl lg:text-4xl font-black tracking-widest hover:bg-red-600 hover:text-white active:scale-[0.99] transition duration-300 shadow-xl cursor-pointer"
          >
            NEW ARRIVAL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;