import React from 'react';
import { IoCloseOutline, IoTrashOutline } from "react-icons/io5";

const CartDrawer = ({ isOpen, onClose, cartItems, setCartItems }) => {
  if (!isOpen) return null;

  // Calculate Subtotal dynamically
  const subtotal = cartItems.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return acc + (numericPrice * item.quantity);
  }, 0);

  // Update specific item quantities directly from the cart layout
  const updateQuantity = (id, amount) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + amount;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  // Completely remove an item variant
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    // FIX: Bumped z-50 to z-[200] so it dominates the viewport canvas layer
    // Ensure this top line in CartDrawer matches:
    <div className="fixed inset-0 z-[200] overflow-hidden">
      
      {/* Dark Translucent Overlay backdrop click background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111111] border-l border-neutral-900 text-white flex flex-col shadow-2xl">
          
          {/* Cart Header Section */}
          <div className="px-6 py-5 border-b border-neutral-950 flex items-center justify-between">
            <h2 className="text-xl font-mono font-black tracking-widest uppercase">YOUR CART</h2>
            <button onClick={onClose} className="p-1 hover:bg-neutral-800 rounded-lg transition">
              <IoCloseOutline className="text-3xl text-neutral-400 hover:text-white" />
            </button>
          </div>

          {/* Cart Items List Area */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-neutral-500">
                <p className="font-mono uppercase tracking-wider mb-2">Your cart is empty</p>
                <p className="text-xs">Go back and add some caps to your collection!</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 bg-[#161616] rounded-xl border border-neutral-900">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg shrink-0" />
                  
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <h4 className="font-mono text-xs font-bold uppercase truncate tracking-wider text-neutral-200">{item.title}</h4>
                      <p className="text-sm font-bold mt-1 text-red-500">{item.price}</p>
                    </div>

                    {/* Counter Adjustments block */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center bg-black/40 border border-neutral-900 rounded-md overflow-hidden">
                        <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-0.5 hover:bg-neutral-800 text-neutral-400 hover:text-white transition font-bold">-</button>
                        <span className="px-3 font-mono text-xs font-bold text-white">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-0.5 hover:bg-neutral-800 text-neutral-400 hover:text-white transition font-bold">+</button>
                      </div>
                      
                      <button onClick={() => removeItem(item.id)} className="text-neutral-500 hover:text-red-500 transition p-1">
                        <IoTrashOutline className="text-base" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout Calculations Panel Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-neutral-950 px-6 py-6 bg-[#0c0c0c] space-y-4">
              <div className="flex justify-between font-mono text-sm font-bold uppercase tracking-wider">
                <span className="text-neutral-400">Subtotal</span>
                <span className="text-white">₹{subtotal.toLocaleString('en-IN')}.00</span>
              </div>
              <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                Shipping & taxes calculated at checkout.
              </p>
              
              <button 
                onClick={() => alert("Proceeding to Mock Secure Checkout Portal!")} 
                className="w-full bg-red-600 hover:bg-red-700 active:scale-[0.99] transition font-mono font-black tracking-widest text-sm py-4 rounded-xl uppercase shadow-lg shadow-red-600/10"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;