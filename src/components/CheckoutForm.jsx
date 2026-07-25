import React, { useState, useEffect } from 'react';
import { IoCloseOutline, IoCheckmarkCircleOutline, IoAlertCircleOutline } from 'react-icons/io5';
import { createOrder } from '../services/api';

const STORAGE_KEY = 'kv_checkout_customer';

const getSavedCustomer = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

const CheckoutForm = ({ isOpen, onClose, cartItems, setCartItems, orderTotal }) => {
  const saved = getSavedCustomer();

  const [form, setForm] = useState({
    customer_name: saved?.customer_name || '',
    customer_email: saved?.customer_email || '',
    customer_phone: saved?.customer_phone || '',
    shipping_address: saved?.shipping_address || '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (isOpen) {
      const s = getSavedCustomer();
      if (s) setForm(s);
      setResult(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isFormValid = form.customer_name.trim() && form.customer_email.trim() && form.customer_phone.trim() && form.shipping_address.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || cartItems.length === 0) return;

    setSubmitting(true);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));

      const payload = {
        customer_name: form.customer_name.trim(),
        customer_email: form.customer_email.trim(),
        customer_phone: form.customer_phone.trim(),
        shipping_address: form.shipping_address.trim(),
        items: cartItems.map(item => ({
          product: String(item.productId || item.id),
          size: item.size || 'M',
          quantity: item.quantity || 1,
        })),
      };

      const response = await createOrder(payload);
      setResult({ success: true, orderId: response?.name || response?.order_id || response?.message });
      setCartItems([]);
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      setResult({ success: false, error: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[300] overflow-hidden font-mono">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-[#0a0a0a] border border-neutral-900 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-neutral-900 flex items-center justify-between sticky top-0 bg-[#0a0a0a] z-10 rounded-t-2xl">
            <h2 className="text-lg font-normal tracking-[0.2em] uppercase">CHECKOUT</h2>
            <button onClick={onClose} className="p-1 hover:bg-neutral-800 rounded-lg transition">
              <IoCloseOutline className="text-2xl text-neutral-400 hover:text-white" />
            </button>
          </div>

          {/* Success State */}
          {result?.success && (
            <div className="px-6 py-12 flex flex-col items-center text-center">
              <IoCheckmarkCircleOutline className="text-5xl text-green-500 mb-4" />
              <h3 className="text-white text-lg font-bold tracking-wider uppercase mb-2">ORDER PLACED</h3>
              <p className="text-xs text-neutral-500 tracking-wide mb-1">Your order has been confirmed.</p>
              {result.orderId && (
                <p className="text-xs text-neutral-400 tracking-wider mt-2">
                  Order ID: <span className="text-white font-bold">{result.orderId}</span>
                </p>
              )}
              <button
                onClick={onClose}
                className="mt-8 px-8 py-3 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-neutral-200 transition"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          )}

          {/* Error State */}
          {result?.success === false && (
            <div className="px-6 py-12 flex flex-col items-center text-center">
              <IoAlertCircleOutline className="text-5xl text-red-500 mb-4" />
              <h3 className="text-white text-lg font-bold tracking-wider uppercase mb-2">ORDER FAILED</h3>
              <p className="text-xs text-neutral-500 tracking-wide mb-4">{result.error}</p>
              <button
                onClick={() => setResult(null)}
                className="px-6 py-2.5 bg-neutral-800 text-white text-xs font-bold tracking-wider uppercase rounded-xl hover:bg-neutral-700 transition"
              >
                TRY AGAIN
              </button>
            </div>
          )}

          {/* Form */}
          {!result && (
            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
              
              {/* Order Items Summary */}
              <div className="bg-[#0f0f0f] border border-neutral-900 rounded-xl p-4 mb-4">
                <h3 className="text-[10px] text-neutral-500 tracking-widest uppercase font-bold mb-3">ORDER ITEMS</h3>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <span className="text-neutral-300 truncate flex-1 mr-2">
                        {item.title} <span className="text-neutral-600">x{item.quantity}</span>
                      </span>
                      <span className="text-neutral-400 shrink-0">
                        {item.priceDisplay || `₹${(item.price || 0).toLocaleString('en-IN')}`}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-neutral-800 mt-3 pt-3 flex justify-between text-xs font-bold text-white tracking-wider">
                  <span>TOTAL</span>
                  <span>₹{orderTotal?.toLocaleString('en-IN') || '0'}</span>
                </div>
              </div>

              {/* Customer Name */}
              <div>
                <label className="text-[10px] text-neutral-500 tracking-widest uppercase font-bold block mb-1.5">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  name="customer_name"
                  value={form.customer_name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-[#111] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition font-mono"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-[10px] text-neutral-500 tracking-widest uppercase font-bold block mb-1.5">
                  EMAIL *
                </label>
                <input
                  type="email"
                  name="customer_email"
                  value={form.customer_email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-[#111] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition font-mono"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-[10px] text-neutral-500 tracking-widest uppercase font-bold block mb-1.5">
                  PHONE *
                </label>
                <input
                  type="tel"
                  name="customer_phone"
                  value={form.customer_phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                  required
                  className="w-full bg-[#111] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition font-mono"
                />
              </div>

              {/* Shipping Address */}
              <div>
                <label className="text-[10px] text-neutral-500 tracking-widest uppercase font-bold block mb-1.5">
                  SHIPPING ADDRESS *
                </label>
                <textarea
                  name="shipping_address"
                  value={form.shipping_address}
                  onChange={handleChange}
                  placeholder="Full address with pincode"
                  required
                  rows={3}
                  className="w-full bg-[#111] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition font-mono resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!isFormValid || submitting}
                className={`w-full h-14 rounded-xl flex items-center justify-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase transition-all duration-200 ${
                  isFormValid && !submitting
                    ? 'bg-white text-black hover:bg-neutral-200 active:scale-[0.98]'
                    : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                }`}
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                      <path d="M12 2a10 10 0 019.95 9" strokeLinecap="round" />
                    </svg>
                    PLACING ORDER...
                  </span>
                ) : (
                  'PLACE ORDER'
                )}
              </button>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
