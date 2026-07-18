import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../assets/logo.png";

const Navbar = ({ cartCount = 0, onCartClick }) => {
  return (
    // Switched to fixed and boosted z-index to z-[150] so elements sit safely below it
    <nav className="absolute top-0 left-0 w-full z-[150] bg-transparent">
      <div className="flex items-center justify-between px-6 pt-6">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-16 md:w-20 cursor-pointer"
          />
        </Link>

        {/* Right Icons */}
        <div className="flex items-center gap-5">

          <button
            type="button"
            className="text-white hover:text-red-600 transition cursor-pointer"
          >
            <IoSearchOutline className="text-4xl" />
          </button>

          <button
            type="button"
            onClick={onCartClick}
            className="relative text-white hover:text-red-600 transition cursor-pointer"
          >
            <HiOutlineShoppingCart className="text-4xl" />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 bg-red-600 rounded-full text-xs flex items-center justify-center pointer-events-none">
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;