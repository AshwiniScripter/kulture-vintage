import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoChevronBackOutline, IoHeart, IoHeartOutline, IoBagOutline } from 'react-icons/io5';
import { getProducts } from '../services/api';

const ProductDetailView = ({ wishlistedIds = [], setWishlistedIds, cartItems = [], setCartItems }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('L');
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let cancelled = false;
    setLoading(true);
    getProducts()
      .then((allProducts) => {
        if (cancelled) return;
        const found = allProducts.find(p => String(p.id) === String(id));
        setProductData(found || null);
      })
      .catch(() => { if (!cancelled) setProductData(null); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [id]);

  const isWishlisted = wishlistedIds.includes(productData?.id) || wishlistedIds.includes(id);

  const toggleWishlist = () => {
    if (!productData) return;
    if (isWishlisted) {
      setWishlistedIds(wishlistedIds.filter(item => String(item) !== String(id)));
    } else {
      setWishlistedIds([...wishlistedIds, productData.id]);
    }
  };

  const handleBuyNow = () => {
    if (!productData) return;
    const orderItem = {
      id: `${productData.id}-${selectedColor}-${selectedSize}`,
      productId: productData.id,
      title: productData.title,
      price: productData.priceNum,
      priceDisplay: productData.priceDisplay,
      image: productData.image,
      color: selectedColor,
      size: selectedSize,
      quantity: 1
    };
    setCartItems([...cartItems, orderItem]);
    navigate('/cart');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-neutral-400 font-mono pt-28 pb-24 px-4 sm:px-8 md:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-8 w-48 bg-neutral-800/40 rounded-lg" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-4">
                <div className="w-full aspect-4/5 bg-neutral-800/40 rounded-2xl" />
                <div className="grid grid-cols-4 gap-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-neutral-800/40 rounded-xl" />
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 space-y-5">
                <div className="h-32 bg-neutral-800/40 rounded-xl" />
                <div className="h-20 bg-neutral-800/40 rounded-xl" />
                <div className="h-24 bg-neutral-800/40 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-neutral-400 font-mono pt-28 pb-24 px-4 sm:px-8 md:px-16 xl:px-24 flex flex-col items-center justify-center">
        <p className="text-neutral-500 text-sm tracking-widest uppercase mb-4">Product not found</p>
        <button onClick={() => navigate(-1)} className="text-xs font-bold tracking-[0.2em] text-neutral-400 hover:text-white transition">
          GO BACK
        </button>
      </div>
    );
  }

  const productImages = productData.images && productData.images.length > 0 
    ? productData.images 
    : [productData.image].filter(Boolean);

  const displayImages = productImages.length > 0 ? productImages : [null];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-neutral-400 font-mono pt-28 pb-24 px-4 sm:px-8 md:px-16 xl:px-24 selection:bg-neutral-800">
      
      {/* 1. Global Navigation Breadcrumb Control */}
      <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between border-b border-[#141414] pb-4">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-400 hover:text-white transition duration-200"
        >
          <IoChevronBackOutline className="text-sm" /> BACK TO CATALOG
        </button>
        <span className="text-[10px] text-neutral-600 tracking-widest uppercase">
          SKU // {productData.id}
        </span>
      </div>

      {/* 2. Primary Layout Grid Split System */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left Aspect Media Workspace (Columns 1-7) */}
        <div className="lg:col-span-7 space-y-4 lg:sticky lg:top-28">
          <div className="relative w-full aspect-4/5 bg-[#0e0e0e] border border-[#141414] rounded-2xl overflow-hidden group">
            {displayImages[activeImageIdx] ? (
              <img 
                src={displayImages[activeImageIdx]} 
                alt={productData.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-neutral-600 text-xs font-mono">NO IMAGE</span>
              </div>
            )}
            
            <button 
              onClick={toggleWishlist} 
              className="absolute top-6 right-6 bg-black/70 backdrop-blur-md p-3.5 rounded-full text-neutral-400 border border-white/5 transition hover:scale-110"
            >
              {isWishlisted ? <IoHeart className="text-base" /> : <IoHeartOutline className="text-white text-base" />}
            </button>
          </div>

          {displayImages.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {displayImages.map((img, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveImageIdx(index)}
                  className={`aspect-square bg-[#0e0e0e] border rounded-xl overflow-hidden cursor-pointer transition duration-200 hover:border-neutral-500 ${
                    activeImageIdx === index ? 'border-neutral-200 ring-1 ring-neutral-200' : 'border-[#141414]'
                  }`}
                >
                  {img ? (
                    <img src={img} alt="Product variant preview" className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-neutral-600 text-[10px] font-mono">N/A</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Aspect Dynamic Interface Board (Columns 8-12) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Module: Header Copywriting Info */}
          <div className="border border-[#141414] bg-[#0a0a0a] rounded-xl p-6 shadow-xl">
            <h1 className="text-white text-xl sm:text-2xl font-black tracking-wider uppercase mb-3">
              {productData.title}
            </h1>
            {productData.description && (
              <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                {productData.description}
              </p>
            )}
            {productData.originalPrice > productData.priceNum && (
              <div className="flex items-baseline gap-3 pt-2 border-t border-[#141414]">
                <span className="text-neutral-600 font-bold text-sm line-through">
                  ₹{productData.originalPrice.toLocaleString('en-IN')}.00
                </span>
              </div>
            )}
          </div>

          {/* Module: Commercial Pricing and Checkouts */}
          <div className="border border-[#141414] bg-[#0a0a0a] rounded-xl p-6 flex flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-neutral-300 font-black text-2xl block tracking-wide">
                ₹{productData.priceNum.toLocaleString('en-IN')}
              </span>
              {productData.discount && (
                <span className="text-[10px] text-neutral-500 tracking-[0.2em] block font-bold uppercase mt-0.5">
                  {productData.discount}
                </span>
              )}
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
            {productData.sizes && productData.sizes.length > 0 && (
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
            )}

          </div>

          {/* Module: Full Technical Overview Section */}
          {productData.description && (
            <div className="border border-[#141414] bg-[#0a0a0a] rounded-xl p-6 shadow-xl">
              <h3 className="text-neutral-300 text-xs font-black tracking-widest uppercase mb-3">
                SPECIFICATION DETAILS
              </h3>
              <p className="text-[11px] text-neutral-500 leading-relaxed">
                {productData.description}
              </p>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};

export default ProductDetailView;
