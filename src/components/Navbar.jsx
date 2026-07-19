import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Imported useNavigate for redirection
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline, IoHeartOutline } from "react-icons/io5"; // Added IoHeartOutline
import logo from "../assets/logo.png";

const Navbar = ({ cartCount = 0, wishlistCount = 0, onCartClick }) => {
  const navigate = useNavigate();

  return (
  
    <nav className="absolute top-0 left-0 w-full z-150 bg-transparent">
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

          {/* Search Button */}
          <button
            type="button"
            className="text-white hover:text-red-600 transition cursor-pointer"
          >
            <IoSearchOutline className="text-4xl" />
          </button>

          {/* Wishlist Button */}
          <button
            type="button"
            onClick={() => navigate('/wishlist')} // Redirects to a /wishlist route
            className="relative text-white hover:text-red-600 transition cursor-pointer"
          >
            <IoHeartOutline className="text-4xl" />

            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 bg-red-600 rounded-full text-xs flex items-center justify-center pointer-events-none font-mono">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            type="button"
            onClick={onCartClick}
            className="relative text-white hover:text-red-600 transition cursor-pointer"
          >
            <HiOutlineShoppingCart className="text-4xl" />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 bg-red-600 rounded-full text-xs flex items-center justify-center pointer-events-none font-mono">
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