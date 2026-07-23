import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoChevronBackOutline, IoHeart, IoHeartOutline, IoBagOutline, IoStar } from 'react-icons/io5';
import dummyImage from '../assets/dummyImage.jpeg'; // Fallback layout asset

const ProductDetailView = ({ wishlistedIds = [], setWishlistedIds, cartItems = [], setCartItems }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // State configurations for selected variants
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('L');
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // High-fidelity Mock Dataset matching your Brutalist spec
  const productData = {
    id: id,
    title: "PRINTED COTTON SHIRT",
    price: 1999,
    originalPrice: 2799,
    discount: "29% OFF",
    images: [dummyImage, dummyImage, dummyImage, dummyImage],
    description: "Purus in massa tempor nec feugiat. Congue nisi vitae suscipit tellus mauris a diam. Sem aliquam sem et tortor. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Ut tristique dui sapien eget mi proin sed libero enim sed.",
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Maroon', hex: '#4a1212' },
      { name: 'Green', hex: '#166534' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviewCount: 256,
    featuredReview: {
      author: "Theresa Webb",
      date: "May 1, 2026",
      text: "Cursus sit amet dictum sit amet justo donec enim. Commodo ullamcorper a lacus vestibulum. Its an amazing product, superior raw edge texture."
    }
  };

  const isWishlisted = wishlistedIds.includes(Number(id)) || wishlistedIds.includes(id);

  const toggleWishlist = () => {
    if (isWishlisted) {
      setWishlistedIds(wishlistedIds.filter(item => String(item) !== String(id)));
    } else {
      setWishlistedIds([...wishlistedIds, Number(id)]);
    }
  };

  const handleBuyNow = () => {
    const orderItem = {
      id: `${productData.id}-${selectedColor}-${selectedSize}`,
      title: productData.title,
      price: `₹${productData.price.toLocaleString('en-IN')}`,
      image: productData.images[0],
      color: selectedColor,
      size: selectedSize,
      quantity: 1
    };
    setCartItems([...cartItems, orderItem]);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-[#070707] text-neutral-400 font-mono pt-28 pb-24 px-4 sm:px-8 md:px-16 xl:px-24 selection:bg-neutral-800">
      
      {/* 1. Global Navigation Breadcrumb Control */}
      <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between border-b border-[#141414] pb-4">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-400 hover:text-white transition duration-200"
        >
          <IoChevronBackOutline className="text-sm" /> BACK TO CATALOG
        </button>
        <span className="text-[10px] text-neutral-600 tracking-widest uppercase">
          SKU // KLV-00{id}-2026
        </span>
      </div>

      {/* 2. Primary Layout Grid Split System */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left Aspect Media Workspace (Columns 1-7) */}
        <div className="lg:col-span-7 space-y-4 lg:sticky lg:top-28">
          <div className="relative w-full aspect-4/5 bg-[#0e0e0e] border border-[#141414] rounded-2xl overflow-hidden group">
            <img 
              src={productData.images[activeImageIdx]} 
              alt={productData.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" 
            />
            
            {/* Wishlist floating toggle overlay */}
            <button 
              onClick={toggleWishlist} 
              className="absolute top-6 right-6 bg-black/70 backdrop-blur-md p-3.5 rounded-full text-neutral-400 border border-white/5 transition hover:scale-110"
            >
              {isWishlisted ? <IoHeart className="text-base" /> : <IoHeartOutline className="text-white text-base" />}
            </button>
          </div>

          {/* Web Presentation Desktop Gallery Ribbon */}
          <div className="grid grid-cols-4 gap-4">
            {productData.images.map((img, index) => (
              <div 
                key={index}
                onClick={() => setActiveImageIdx(index)}
                className={`aspect-square bg-[#0e0e0e] border rounded-xl overflow-hidden cursor-pointer transition duration-200 hover:border-neutral-500 ${
                  activeImageIdx === index ? 'border-neutral-200 ring-1 ring-neutral-200' : 'border-[#141414]'
                }`}
              >
                <img src={img} alt="Product frame variant preview" className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Aspect Dynamic Interface Board (Columns 8-12) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Module: Header Copywriting Info */}
          <div className="border border-[#141414] bg-[#0a0a0a] rounded-xl p-6 shadow-xl">
            <h1 className="text-white text-xl sm:text-2xl font-black tracking-wider uppercase mb-3">
              {productData.title}
            </h1>
            <p className="text-xs text-neutral-500 leading-relaxed mb-4">
              {productData.description}
            </p>
            <div className="flex items-baseline gap-3 pt-2 border-t border-[#141414]">
              <span className="text-neutral-600 font-bold text-sm line-through">
                ₹{productData.originalPrice.toLocaleString('en-IN')}.00
              </span>
            </div>
          </div>

          {/* Module: Commercial Pricing and Checkouts */}
          <div className="border border-[#141414] bg-[#0a0a0a] rounded-xl p-6 flex flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-neutral-300 font-black text-2xl block tracking-wide">
                ₹{productData.price.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-neutral-500 tracking-[0.2em] block font-bold uppercase mt-0.5">
                {productData.discount}
              </span>
            </div>

            <button 
              onClick={handleBuyNow}
              className="flex-1 h-14 bg-white border border-transparent rounded-xl flex items-center justify-center gap-2.5 text-xs font-black text-black tracking-[0.25em] uppercase transition hover:bg-neutral-200 duration-150 active:scale-[0.98]"
            >
              <IoBagOutline className="text-lg" /> BUY NOW
            </button>
          </div>

          {/* Module: Industrial Configurations Matrix (Color & Size selectors side-by-side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Color Grid Module */}
            <div className="border border-[#141414] bg-[#0a0a0a] rounded-xl p-4 flex flex-col justify-center">
              <span className="text-[10px] text-neutral-500 tracking-widest uppercase font-bold mb-3 block">COLOUR</span>
              <div className="flex items-center gap-3">
                {productData.colors.map((color) => (
                  <button 
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    style={{ backgroundColor: color.hex }}
                    className={`w-7 h-7 rounded-full border-2 transition duration-200 ${
                      selectedColor === color.name ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Sizes Box Module */}
            <div className="border border-[#141414] bg-[#0a0a0a] rounded-xl p-4">
              <span className="text-[10px] text-neutral-500 tracking-widest uppercase font-bold mb-3 block">SIZE</span>
              <div className="flex gap-2 flex-wrap">
                {productData.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-8 h-8 rounded-lg border text-xs font-black flex items-center justify-center transition-all duration-150 ${
                      selectedSize === size 
                        ? 'border-yellow-500 bg-yellow-500/10 text-yellow-500' 
                        : 'border-[#1c1c1c] text-neutral-400 hover:border-neutral-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Module: Full Technical Overview Section */}
          <div className="border border-[#141414] bg-[#0a0a0a] rounded-xl p-6 shadow-xl">
            <h3 className="text-neutral-300 text-xs font-black tracking-widest uppercase mb-3">
              SPECIFICATION DETAILS
            </h3>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              Knitted from medium-weight premium open-end cotton yarn featuring high-contrast screenprint designs. Preshrunk box-fit structure with ribbed crewneck collar lining optimized for standard clean aesthetic geometry.
            </p>
          </div>

          {/* Module: Aggregated Feedback Review Grid Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            
            {/* Average Score Box Panel */}
            <div className="sm:col-span-5 border border-[#141414] bg-[#0a0a0a] rounded-xl p-4 flex flex-col justify-center items-center text-center">
              <span className="text-[10px] text-neutral-500 tracking-widest uppercase font-bold mb-1">RATING MATRIX</span>
              <span className="text-white text-3xl font-black tracking-tighter">{productData.rating}</span>
              <div className="flex gap-0.5 my-1.5 text-yellow-500 text-xs">
                <IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-neutral-700" />
              </div>
              <span className="text-[9px] text-neutral-600 tracking-wide font-bold">({productData.reviewCount} VERIFIED)</span>
            </div>

            {/* Highlighted Review Message Box */}
            <div className="sm:col-span-7 border border-[#141414] bg-[#0a0a0a] rounded-xl p-4 flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-linear-to-tr from-amber-600 to-yellow-500 shrink-0 border border-neutral-800" />
              <div className="min-w-0">
                <div className="flex items-center gap-0.5 text-yellow-500 text-[8px] mb-1">
                  <IoStar /><IoStar /><IoStar /><IoStar /><IoStar />
                </div>
                <h4 className="text-white text-[10px] font-bold truncate uppercase">{productData.featuredReview.author}</h4>
                <span className="text-[8px] text-neutral-600 font-sans block mb-1.5">{productData.featuredReview.date}</span>
                <p className="text-[9px] text-neutral-500 leading-normal italic line-clamp-2">
                  "{productData.featuredReview.text}"
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 3. Catalog Recommendations Layout (Horizontal Product Stream) */}
      <div className="max-w-7xl mx-auto border-t border-[#141414] pt-12">
        <h3 className="text-neutral-400 text-sm font-black tracking-[0.25em] uppercase mb-6">
          YOU MIGHT ALSO LIKE
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div 
              key={item}
              onClick={() => {
                navigate(`/product/${item}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#0a0a0a] border border-[#141414] rounded-xl p-3 cursor-pointer transition-all duration-300 hover:border-neutral-700 hover:-translate-y-1 group"
            >
              <div className="w-full aspect-4/5 rounded-lg bg-[#0e0e0e] overflow-hidden mb-3">
                <img 
                  src={dummyImage} 
                  alt="Recommended architectural canvas catalog view" 
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition duration-300" 
                />
              </div>
              <p className="text-[10px] text-neutral-300 font-bold tracking-wider uppercase truncate group-hover:text-white transition">
                BASEBALL CAP - RED
              </p>
              <p className="text-xs text-neutral-300 font-black mt-1">₹1,999</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetailView;