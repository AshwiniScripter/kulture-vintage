import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import ProductDetail from "./components/ProductDetail";
import More from "./components/More";

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
      
      {/* Renders the "MORE ->" link component right below the product grid */}
      <More />
    </div>
  );
}

// 2. Main Application Wrapper & Controller
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlistedIds, setWishlistedIds] = useState([]);

  // Dynamically calculate cart badge count globally
  const totalCartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <BrowserRouter>
      <div className="bg-[#0f0f0f] min-h-screen text-white relative">
        
        {/* Global Navigation Bar */}
        <Navbar
          cartCount={totalCartCount}
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
        </Routes>

        {/* Global Slide-Out Overlay Canvas Panel */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;