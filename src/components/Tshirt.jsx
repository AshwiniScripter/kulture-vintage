import React, { useState, useEffect } from 'react';
import dummyImage from '../assets/dummyImage.jpeg'; // Replace with your T-shirt assets

// 1. T-Shirt Exclusive Product Data structured exactly like your layout mapping
const tshirtProducts = [
  {
    id: 101,
    title: "SMILEY GRAPHIC TEE - GRN",
    price: "₹1,999.00",
    image: dummyImage,
    gridClass: "col-span-2 md:col-span-3 h-52 sm:h-72 md:h-[400px]"
  },
  {
    id: 102,
    title: "SMILEY GRAPHIC TEE - BLK",
    price: "₹1,999.00",
    image: dummyImage,
    gridClass: "col-span-1 md:col-span-2 h-44 sm:h-60 md:h-[300px]"
  },
  {
    id: 103,
    title: "STAY GROOVY TEE",
    price: "₹1,899.00",
    image: dummyImage,
    gridClass: "col-span-1 row-span-2 h-[368px] sm:h-[504px] md:h-[624px]"
  },
  {
    id: 104,
    title: "GRAFFITI TEE - WHT",
    price: "₹1,999.00",
    image: dummyImage,
    gridClass: "col-span-1 md:col-span-2 h-44 sm:h-60 md:h-[300px]"
  },
  {
    id: 105,
    title: "OVERSIZED STREET TEE",
    price: "₹1,999.00",
    image: dummyImage,
    gridClass: "col-span-2 md:col-span-3 h-52 sm:h-72 md:h-[450px]"
  }
];

const Tshirt = ({ 
  cartItems, 
  setCartItems, 
  wishlistedIds, 
  setWishlistedIds 
}) => {
  const [wishlistAlert, setWishlistAlert] = useState(null);
  const [cartAlert, setCartAlert] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const triggerWishlist = (product) => {
    const isAlreadyWishlisted = wishlistedIds.includes(product.id);
    if (isAlreadyWishlisted) {
      setWishlistAlert({ title: product.title, status: 'removed' });
      setWishlistedIds(prev => prev.filter((id) => id !== product.id));
    } else {
      setWishlistAlert({ title: product.title, status: 'added' });
      setWishlistedIds(prev => [...prev, product.id]);
    }
    setTimeout(() => setWishlistAlert(null), 2500);
  };

  const triggerCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setCartAlert(product.title);
    setTimeout(() => setCartAlert(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24 text-white">
      
      {/* Toast Overlay Stack */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none max-w-sm w-full px-4 sm:px-0">
        {wishlistAlert && (
          <div className={`bg-black/90 backdrop-blur-md border rounded-xl p-4 shadow-2xl flex items-center gap-3 transition-all duration-300 ${
            wishlistAlert.status === 'added' ? 'border-red-600/50' : 'border-neutral-800'
          }`}>
            <div className={`p-2 rounded-lg ${wishlistAlert.status === 'added' ? 'bg-red-600/20' : 'bg-neutral-800'}`}>
              <svg className={`w-5 h-5 ${wishlistAlert.status === 'added' ? 'text-red-600 fill-current' : 'text-neutral-400'}`} viewBox="0 0 24 24" fill={wishlistAlert.status === 'added' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-neutral-400 uppercase tracking-wider font-mono">Wishlist</p>
              <p className="text-sm font-bold text-white truncate">{wishlistAlert.title} {wishlistAlert.status}!</p>
            </div>
          </div>
        )}

        {cartAlert && (
          <div className="bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl flex items-center gap-3 transition-all duration-300">
            <div className="bg-white/10 p-2 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-neutral-400 uppercase tracking-wider font-mono">Cart Updated</p>
              <p className="text-sm font-bold text-white truncate">{cartAlert} added!</p>
            </div>
          </div>
        )}
      </div>

      {/* Branded Section Header Title Bar (Matches Image Header Layer) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex items-center justify-between gap-4">
        <div className="bg-black/80 border border-neutral-900 w-full rounded-xl py-3.5 flex justify-center items-center shadow-md">
          <h1 className="text-2xl md:text-3xl font-mono font-black tracking-widest text-red-600 uppercase">
            T SHIRTS
          </h1>
        </div>
        
        {/* Updated Filter Icon Button matches the original reference adjustments configuration */}
        <button className="bg-black/80 border border-neutral-900 p-3.5 rounded-xl hover:bg-neutral-900 text-red-600 transition duration-300 cursor-pointer active:scale-95">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M3 12h18M3 20h18M7 2v4M17 10v4M11 18v4" />
          </svg>
        </button>
      </div>

      {/* Main Grid Component Loop View */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 auto-rows-max">
            {tshirtProducts.map((product) => {
              const isWishlisted = wishlistedIds.includes(product.id);

              return (
                <div 
                  key={product.id} 
                  className={`relative rounded-2xl md:rounded-3xl overflow-hidden group border border-neutral-900 shadow-xl bg-[#141414] transition-all duration-500 ${product.gridClass}`}
                >
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Wishlist Toggle Button */}
                  <button 
                    onClick={() => triggerWishlist(product)}
                    className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-black/70 transition-all z-10 cursor-pointer"
                  >
                    <svg className={`w-4 h-4 transition-colors duration-300 ${isWishlisted ? 'text-red-600 fill-current scale-110' : 'text-white'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </button>

                  {/* Glassmorphism Title Footer Pane */}
                  <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 bg-black/40 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-4 flex items-center justify-between border border-white/10 shadow-lg group-hover:bg-black/60 transition-colors duration-300">
                    <div className="min-w-0 flex-1 pr-2">
                      <h3 className="text-[10px] sm:text-xs md:text-sm font-mono tracking-wider text-neutral-200 uppercase font-bold truncate">
                        {product.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base font-bold text-neutral-100 font-mono mt-0.5">
                        {product.price}
                      </p>
                    </div>
                    
                    {/* Add to Cart Button */}
                    <button 
                      onClick={() => triggerCart(product)}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition active:scale-90 shrink-0 z-10 cursor-pointer"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M12 5v14m7-7H5"/>
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tshirt;