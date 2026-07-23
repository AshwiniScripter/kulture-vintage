import { useState, useMemo, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import {
  IoSearchOutline,
  IoHeartOutline,
  IoClose,
  IoPersonOutline,
  IoMenu,
  IoHomeOutline,
  IoSparklesOutline,
} from "react-icons/io5";
import logo from "../assets/logo.png";
import dummyImage from "../assets/dummyImage.jpeg";

const allProducts = [
  { id: 1, title: "BASEBALL CAP - RED", price: "1,999", category: "Accessories" },
  { id: 3, title: "MADNESS CAP - BLK", price: "1,899", category: "Accessories" },
  { id: 101, title: "SMILEY GRAPHIC TEE - GRN", price: "1,999", category: "T-Shirts" },
  { id: 102, title: "SMILEY GRAPHIC TEE - BLK", price: "1,999", category: "T-Shirts" },
  { id: 103, title: "STAY GROOVY TEE", price: "1,899", category: "T-Shirts" },
  { id: 104, title: "GRAFFITI TEE - WHT", price: "1,999", category: "T-Shirts" },
  { id: 105, title: "OVERSIZED STREET TEE", price: "1,999", category: "T-Shirts" },
  { id: 201, title: "CHUNKY RUNNER V1 - BLK", price: "4,500", category: "Shoes" },
  { id: 202, title: "STREET LOW SNEAKER", price: "3,999", category: "Shoes" },
  { id: 203, title: "PLATFORM BOOT - RED", price: "5,499", category: "Shoes" },
  { id: 301, title: "INDUSTRIAL UTILITY BELT", price: "1,999", category: "Belts" },
  { id: 302, title: "CLASSIC LEATHER STRAP", price: "2,499", category: "Belts" },
  { id: 303, title: "MATTE BLACK BUCKLE BELT", price: "1,750", category: "Belts" },
  { id: 401, title: "MINIMALIST CARDHOLDER", price: "1,200", category: "Accessories" },
  { id: 402, title: "STREETWEAR BEANIE", price: "899", category: "Accessories" },
  { id: 403, title: "SILVER LINK CHAIN", price: "1,599", category: "Accessories" },
  { id: 501, title: "CHRONO SPORT MATTE", price: "9,500", category: "Watches" },
  { id: 502, title: "CYBERPUNK DIGITAL V1", price: "7,999", category: "Watches" },
  { id: 503, title: "STEALTH AUTOMATIC", price: "14,499", category: "Watches" },
  { id: 601, title: "AVANT-GARDE OVAL SHADES", price: "2,800", category: "Shades" },
  { id: 602, title: "CYBER MATRIX GLASSES", price: "3,200", category: "Shades" },
  { id: 603, title: "STEALTH BLACK AVIATORS", price: "2,500", category: "Shades" },
  { id: 701, title: "CARGO UTILITY PANTS - BLK", price: "4,200", category: "Pants" },
  { id: 702, title: "RELAXED FIT DENIM", price: "3,899", category: "Pants" },
  { id: 703, title: "GOTHIC STRAP TROUSERS", price: "4,999", category: "Pants" },
  { id: 801, title: "PAISLEY STREET BANDANA", price: "890", category: "Bandana" },
  { id: 802, title: "MONOCHROME MESH MASK", price: "1,100", category: "Bandana" },
  { id: 803, title: "CRIMSON TIE-DYE WRAP", price: "950", category: "Bandana" },
];

const Navbar = ({ cartCount = 0, wishlistCount = 0, onCartClick }) => {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const profileRef = useRef(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSelect = (id) => {
    navigate(`/product/${id}`);
    setSearchOpen(false);
    setQuery("");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-150 bg-transparent">
        <div className="flex items-center justify-between px-6 pt-6">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-16 md:w-20 cursor-pointer" />
          </Link>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="text-white hover:text-red-600 transition cursor-pointer"
            >
              <IoSearchOutline className="text-4xl" />
            </button>

            <button
              type="button"
              onClick={() => navigate("/wishlist")}
              className="relative text-white hover:text-red-600 transition cursor-pointer"
            >
              <IoHeartOutline className="text-4xl" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 bg-red-600 rounded-full text-xs flex items-center justify-center pointer-events-none font-mono">
                  {wishlistCount}
                </span>
              )}
            </button>

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

            {/* Profile Icon */}
            <div className="relative" ref={profileRef}>
              <button
                type="button"
                onClick={() => setProfileOpen(!profileOpen)}
                className="text-white hover:text-red-600 transition cursor-pointer"
              >
                <IoPersonOutline className="text-4xl" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-full mt-3 w-56 bg-[#141414] border border-neutral-900 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="p-4 border-b border-neutral-900">
                    <p className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">Account</p>
                  </div>
                  <button
                    onClick={() => { navigate("/profile"); setProfileOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-neutral-900 transition cursor-pointer text-left"
                  >
                    <IoPersonOutline className="text-base text-neutral-400" />
                    <span className="text-xs font-mono font-bold tracking-wider text-neutral-200 uppercase">My Profile</span>
                  </button>
                  <button
                    onClick={() => { navigate("/wishlist"); setProfileOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-neutral-900 transition cursor-pointer text-left border-t border-neutral-900"
                  >
                    <IoHeartOutline className="text-base text-neutral-400" />
                    <span className="text-xs font-mono font-bold tracking-wider text-neutral-200 uppercase">Wishlist</span>
                  </button>
                  <button
                    onClick={() => { onCartClick(); setProfileOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-neutral-900 transition cursor-pointer text-left border-t border-neutral-900"
                  >
                    <HiOutlineShoppingCart className="text-base text-neutral-400" />
                    <span className="text-xs font-mono font-bold tracking-wider text-neutral-200 uppercase">Cart</span>
                  </button>
                  <button
                    onClick={() => { navigate("/new-arrival"); setProfileOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-neutral-900 transition cursor-pointer text-left border-t border-neutral-900"
                  >
                    <IoSparklesOutline className="text-base text-neutral-400" />
                    <span className="text-xs font-mono font-bold tracking-wider text-neutral-200 uppercase">New Arrival</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-red-600 transition cursor-pointer"
          >
            {mobileMenuOpen ? (
              <IoClose className="text-4xl" />
            ) : (
              <IoMenu className="text-4xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-0 z-[140] pt-24 px-4 md:hidden">
          <div className="bg-[#141414] border border-neutral-900 rounded-2xl shadow-2xl overflow-hidden mx-2">
            <button
              onClick={() => { setSearchOpen(true); setMobileMenuOpen(false); }}
              className="w-full flex items-center gap-4 px-5 py-4 hover:bg-neutral-900 transition cursor-pointer text-left border-b border-neutral-900"
            >
              <IoSearchOutline className="text-xl text-neutral-400" />
              <span className="text-sm font-mono font-bold tracking-wider text-neutral-200 uppercase">Search</span>
            </button>
            <button
              onClick={() => { navigate("/"); setMobileMenuOpen(false); }}
              className="w-full flex items-center gap-4 px-5 py-4 hover:bg-neutral-900 transition cursor-pointer text-left border-b border-neutral-900"
            >
              <IoHomeOutline className="text-xl text-neutral-400" />
              <span className="text-sm font-mono font-bold tracking-wider text-neutral-200 uppercase">Home</span>
            </button>
            <button
              onClick={() => { navigate("/new-arrival"); setMobileMenuOpen(false); }}
              className="w-full flex items-center gap-4 px-5 py-4 hover:bg-neutral-900 transition cursor-pointer text-left border-b border-neutral-900"
            >
              <IoSparklesOutline className="text-xl text-neutral-400" />
              <span className="text-sm font-mono font-bold tracking-wider text-neutral-200 uppercase">New Arrival</span>
            </button>
            <button
              onClick={() => { navigate("/wishlist"); setMobileMenuOpen(false); }}
              className="w-full flex items-center gap-4 px-5 py-4 hover:bg-neutral-900 transition cursor-pointer text-left border-b border-neutral-900"
            >
              <IoHeartOutline className="text-xl text-neutral-400" />
              <span className="text-sm font-mono font-bold tracking-wider text-neutral-200 uppercase">Wishlist</span>
              {wishlistCount > 0 && (
                <span className="ml-auto bg-red-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full">{wishlistCount}</span>
              )}
            </button>
            <button
              onClick={() => { onCartClick(); setMobileMenuOpen(false); }}
              className="w-full flex items-center gap-4 px-5 py-4 hover:bg-neutral-900 transition cursor-pointer text-left border-b border-neutral-900"
            >
              <HiOutlineShoppingCart className="text-xl text-neutral-400" />
              <span className="text-sm font-mono font-bold tracking-wider text-neutral-200 uppercase">Cart</span>
              {cartCount > 0 && (
                <span className="ml-auto bg-red-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full">{cartCount}</span>
              )}
            </button>
            <button
              onClick={() => { navigate("/profile"); setMobileMenuOpen(false); }}
              className="w-full flex items-center gap-4 px-5 py-4 hover:bg-neutral-900 transition cursor-pointer text-left"
            >
              <IoPersonOutline className="text-xl text-neutral-400" />
              <span className="text-sm font-mono font-bold tracking-wider text-neutral-200 uppercase">Profile</span>
            </button>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex flex-col">
          <div className="max-w-3xl w-full mx-auto px-4 pt-6 flex items-center gap-3">
            <div className="flex-1 flex items-center bg-[#141414] border border-neutral-800 rounded-xl px-4 py-3 focus-within:border-red-600 transition">
              <IoSearchOutline className="text-xl text-neutral-500 shrink-0" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, categories..."
                className="flex-1 bg-transparent text-white text-sm font-mono placeholder-neutral-600 outline-none ml-3"
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-neutral-500 hover:text-white transition cursor-pointer">
                  <IoClose className="text-lg" />
                </button>
              )}
            </div>
            <button
              onClick={() => { setSearchOpen(false); setQuery(""); }}
              className="text-neutral-400 hover:text-white text-xs font-mono font-bold tracking-wider uppercase transition cursor-pointer shrink-0"
            >
              Cancel
            </button>
          </div>

          <div className="max-w-3xl w-full mx-auto px-4 mt-4 flex-1 overflow-y-auto pb-8">
            {query.trim() === "" ? (
              <div className="flex flex-col items-center justify-center pt-20">
                <IoSearchOutline className="text-4xl text-neutral-700 mb-4" />
                <p className="text-sm font-mono font-bold tracking-wider text-neutral-600 uppercase">
                  Type to search products
                </p>
              </div>
            ) : results.length === 0 ? (
              <div className="flex flex-col items-center justify-center pt-20">
                <p className="text-sm font-mono font-bold tracking-wider text-neutral-600 uppercase">
                  No results for "{query}"
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase mb-2">
                  {results.length} {results.length === 1 ? "result" : "results"} found
                </p>
                {results.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleSelect(product.id)}
                    className="flex items-center gap-4 bg-[#141414] border border-neutral-900 hover:border-neutral-700 rounded-xl p-3 transition text-left cursor-pointer group"
                  >
                    <div className="w-14 h-14 rounded-lg bg-[#0e0e0e] overflow-hidden shrink-0 border border-neutral-800">
                      <img src={dummyImage} alt={product.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-mono font-bold text-white tracking-wider uppercase truncate">
                        {product.title}
                      </p>
                      <p className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase mt-0.5">
                        {product.category}
                      </p>
                    </div>
                    <p className="text-sm font-mono font-black text-red-600 shrink-0">
                      ₹{product.price}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
