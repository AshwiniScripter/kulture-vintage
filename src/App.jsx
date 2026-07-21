import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import ProductDetail from "./components/ProductDetail";
import ProductDetailView from "./components/ProductDetailView"; 
import Wishlist from "./components/Wishlist"; 
import More from "./components/More";
import Footer from "./components/Footer"; // 1. IMPORTED FOOTER

import Tshirt from "./components/Tshirt"; 
import Shoes from "./components/Shoes";
import Pants from "./components/Pants";
import Accessories from "./components/Accessories";
import Bandana from "./components/Bandana";
import Shades from "./components/Shades";
import Belts from "./components/Belts"; 
import Watches from "./components/Watches"; 

// A tiny internal behavior hook to instantly scroll the window to coordinates (0,0) on any location changes
function ScrollToTopSystem() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// 1. Unified Home View Layout
function Home({
  cartItems,
  setCartItems,
  wishlistedIds,
  setWishlistedIds,
}) {
  return (
    <div>
      <Hero />
      <Categories />
      <ProductGrid
        cartItems={cartItems}
        setCartItems={setCartItems}
        wishlistedIds={wishlistedIds}
        setWishlistedIds={setWishlistedIds}
      />
      <More />
    </div>
  );
}

// 2. Main Application Wrapper & Controller
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlistedIds, setWishlistedIds] = useState([]);

  const totalCartCount = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  return (
    <BrowserRouter basename="/kulture-vintage">
      {/* Listens globally inside BrowserRouter to force viewport jumps to top immediately on navigation */}
      <ScrollToTopSystem />

      <div className="bg-[#0f0f0f] min-h-screen text-white relative flex flex-col justify-between">
        <div>
          {/* Global Navigation Bar */}
          <Navbar
            cartCount={totalCartCount}
            wishlistCount={wishlistedIds.length} 
            onCartClick={() => setIsCartOpen(true)}
          />

          {/* Client Side View Routes */}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistedIds={wishlistedIds}
                  setWishlistedIds={setWishlistedIds}
                />
              }
            />

            <Route
              path="/products"
              element={
                <ProductDetail
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistedIds={wishlistedIds}
                  setWishlistedIds={setWishlistedIds}
                />
              }
            />

            {/* DYNAMIC PRODUCT SPECIFIC ROUTE PARAMETER */}
            <Route
              path="/product/:id"
              element={
                <ProductDetailView
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistedIds={wishlistedIds}
                  setWishlistedIds={setWishlistedIds}
                />
              }
            />

            {/* DEDICATED APPLICATION WISHLIST MANAGEMENT VIEW */}
            <Route 
              path="/wishlist" 
              element={
                <Wishlist 
                  wishlistedIds={wishlistedIds} 
                  setWishlistedIds={setWishlistedIds}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              } 
            />

            {/* Dedicated Catalogue View Routes */}
            <Route
              path="/tshirts"
              element={
                <Tshirt
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistedIds={wishlistedIds}
                  setWishlistedIds={setWishlistedIds}
                />
              }
            />

            <Route
              path="/shoes"
              element={
                <Shoes
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistedIds={wishlistedIds}
                  setWishlistedIds={setWishlistedIds}
                />
              }
            />

            <Route
              path="/pants"
              element={
                <Pants
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistedIds={wishlistedIds}
                  setWishlistedIds={setWishlistedIds}
                />
              }
            />

            <Route
              path="/accessories"
              element={
                <Accessories
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistedIds={wishlistedIds}
                  setWishlistedIds={setWishlistedIds}
                />
              }
            />

            <Route
              path="/belts"
              element={
                <Belts
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistedIds={wishlistedIds}
                  setWishlistedIds={setWishlistedIds}
                />
              }
            />

            <Route
              path="/bandana"
              element={
                <Bandana
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistedIds={wishlistedIds}
                  setWishlistedIds={setWishlistedIds}
                />
              }
            />

            <Route
              path="/watches"
              element={
                <Watches
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistedIds={wishlistedIds}
                  setWishlistedIds={setWishlistedIds}
                />
              }
            />

            <Route
              path="/shades"
              element={
                <Shades
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistedIds={wishlistedIds}
                  setWishlistedIds={setWishlistedIds}
                />
              }
            />
          </Routes>
        </div>

        {/* Global Slide-Out Overlay Canvas Panel */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />

        {/* 2. ADDED GLOBAL FOOTER HERE */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;