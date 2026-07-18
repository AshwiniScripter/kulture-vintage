import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const More = () => {
  return (
    <div className="w-full flex justify-center py-14 bg-[#0f0f0f]">
      <Link
        to="/products"
        className="inline-flex items-center gap-4 font-mono font-black tracking-widest text-red-600 hover:text-red-500 transition-colors active:scale-95 duration-200 group text-3xl md:text-4xl cursor-pointer"
      >
        MORE
        <HiOutlineArrowLongRight className="text-white text-4xl md:text-5xl group-hover:translate-x-3 transition-transform duration-300 ease-out" />
      </Link>
    </div>
  );
};

export default More;