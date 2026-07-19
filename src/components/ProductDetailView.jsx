import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoHeartOutline, IoHeart, IoChevronBackOutline, IoBagAddOutline } from 'react-icons/io5';
import dummyImage from '../assets/Category/tshirt.png'; // Make sure paths align with your assets

const ProductDetailView = ({ cartItems, setCartItems, wishlistedIds, setWishlistedIds }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Dynamic states for interactive options
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('L');
  const [mainImage, setMainImage] = useState(dummyImage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Placeholder static single product data modeled after the layout image
  const product = {
    id: id || "101",
    title: "PRINTED COTTON SHIRT",
    subtitle: "Parvo in maecenas tempor nam feugiat. Congue nisl vitae suscipit tellus mauris a diam.",
    price: 1999,
    originalPrice: 2799,
    discount: "29% OFF",
    colors: [
      { name: 'black', class: 'bg-black border-white' },
      { name: 'darkred', class: 'bg-red-950 border-neutral-700' },
      { name: 'green', class: 'bg-green-800 border-neutral-700' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: "Parvo in maecenas tempor nam feugiat. Congue nisl vitae suscipit tellus mauris a diam. Nibh aliquet cras et luctus. Quis varius sed vulputate odio ut enim. Ultrices dui sapien eget mi proin sed libero enim sed.",
    rating: 4.8,
    reviewCount: 256,
    featuredReview: {
      author: "Theresa Webb",
      date: "May 1, 2026",
      stars: 5,
      comment: "Cursus sit amet dictum sit amet justo donec enim. Commodo ullamcorper a lacus vestibulum sed."
    }
  };

  const isWishlisted = wishlistedIds.includes(Number(product.id));

  const toggleWishlist = () => {
    if (isWishlisted) {
      setWishlistedIds(wishlistedIds.filter(favId => favId !== Number(product.id)));
    } else {
      setWishlistedIds([...wishlistedIds, Number(product.id)]);
    }
  };

  const handleAddToCart = () => {
    const cartProduct = {
      id: `${product.id}-${selectedColor}-${selectedSize}`,
      title: product.title,
      price: `₹${product.price.toLocaleString('en-IN')}.00`,
      image: mainImage,
      color: selectedColor,
      size: selectedSize
    };
    setCartItems([...cartItems, cartProduct]);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-neutral-300 font-mono pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition mb-6 uppercase text-sm tracking-wider"
        >
          <IoChevronBackOutline className="text-xl" /> Back
        </button>

        {/* Main Grid: Left Media Layout + Right Product Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* LEFT COLUMN: Media Showcase Layout */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 aspect-4/5">
              <img src={mainImage} alt={product.title} className="w-full h-full object-cover" />
              
              {/* Floating Wishlist Button */}
              <button 
                onClick={toggleWishlist}
                className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-full text-white hover:text-red-600 transition border border-white/10"
              >
                {isWishlisted ? <IoHeart className="text-xl text-red-600" /> : <IoHeartOutline className="text-xl" />}
              </button>
            </div>

            {/* Thumbnail Navigation Row */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((thumb, index) => (
                <div 
                  key={index}
                  onClick={() => setMainImage(dummyImage)}
                  className={`aspect-square rounded-xl overflow-hidden bg-neutral-900 border cursor-pointer transition ${index === 3 ? 'relative' : ''} border-neutral-800 hover:border-red-600`}
                >
                  <img src={dummyImage} alt="thumbnail" className="w-full h-full object-cover opacity-60" />
                  {index === 3 && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-lg font-bold text-neutral-400">
                      +5
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Info, Sizing, Purchasing Actions */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-widest uppercase mb-2">
                {product.title}
              </h1>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-sans">
                {product.subtitle}
              </p>
            </div>

            <div className="border-t border-b border-neutral-900 py-4 flex flex-col gap-1">
              <span className="text-neutral-500 line-through text-sm font-sans">₹{product.originalPrice}.00</span>
              <div className="flex items-baseline gap-4">
                <span className="text-2xl sm:text-3xl font-black text-white">₹{product.price.toLocaleString('en-IN')}</span>
                <span className="text-red-500 font-bold text-sm tracking-widest bg-red-950/40 px-2 py-0.5 rounded border border-red-900/30">{product.discount}</span>
              </div>
            </div>

            {/* Color Swatch Selection */}
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-3">Colour</h3>
              <div className="flex gap-4">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${color.class} ${
                      selectedColor === color.name ? 'scale-125 ring-2 ring-red-600 ring-offset-2 ring-offset-[#0f0f0f]' : 'opacity-80'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Size Configuration Area */}
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-12 h-10 px-3 flex items-center justify-center border text-sm font-bold rounded transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-red-600 bg-red-600/10 text-red-500'
                        : 'border-neutral-800 bg-black text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Checkout Action Control Group */}
            <div className="flex gap-4 pt-2">
              <button 
                onClick={handleAddToCart}
                className="flex items-center justify-center border border-neutral-800 bg-black hover:bg-neutral-900 text-white rounded-xl px-6 h-14 transition duration-300 group"
              >
                <IoBagAddOutline className="text-2xl group-hover:text-red-500 transition" />
              </button>
              <button className="flex-1 bg-white hover:bg-neutral-200 text-black font-black tracking-widest text-sm rounded-xl h-14 uppercase transition duration-300">
                Buy Now
              </button>
            </div>

            <hr className="border-neutral-950 my-2" />

            {/* Description Submodule */}
            <div>
              <h2 className="text-lg font-black text-white tracking-widest uppercase mb-2">Description</h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                {product.description}
              </p>
            </div>

            {/* Reviews Metric Module */}
            <div className="border border-neutral-900 bg-black rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xs font-bold text-neutral-400 tracking-widest uppercase mb-1">Reviews</h3>
                <div className="text-3xl font-black text-white mb-1">{product.rating}</div>
                <div className="text-red-500 text-sm mb-1">★★★★★</div>
                <div className="text-[10px] text-neutral-500 font-sans">({product.reviewCount} Reviews)</div>
              </div>
              <div className="border-t sm:border-t-0 sm:border-l border-neutral-900 pt-4 sm:pt-0 sm:pl-4 flex flex-col gap-1 font-sans">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white font-mono">{product.featuredReview.author}</span>
                  <span className="text-neutral-500 text-[10px]">{product.featuredReview.date}</span>
                </div>
                <div className="text-red-500 text-xs">★★★★★</div>
                <p className="text-[11px] text-neutral-400 leading-normal italic">
                  "{product.featuredReview.comment}"
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section: Cross-Sell Carousel Mockup */}
        <div className="mt-16 pt-8 border-t border-neutral-900">
          <h2 className="text-xl font-black tracking-widest text-white uppercase mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group border border-neutral-900 bg-black rounded-xl overflow-hidden cursor-pointer">
                <div className="aspect-4/5 bg-neutral-900 overflow-hidden">
                  <img src={dummyImage} alt="Recommendation" className="w-full h-full object-cover group-hover:scale-105 duration-300 transition-transform" />
                </div>
                <div className="p-3">
                  <h4 className="text-xs font-black tracking-wider text-white truncate uppercase mb-1">PRINTED COTTON SHIRT</h4>
                  <p className="text-xs font-bold text-neutral-400">₹1,999.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailView;