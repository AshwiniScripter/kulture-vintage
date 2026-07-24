import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack, IoLocationOutline, IoTrashOutline } from 'react-icons/io5';

const INITIAL_ADDRESSES = [
  {
    id: '1',
    firstName: 'Theresa',
    lastName: 'Webb',
    street: '3517 W. Gray St. Utica,',
    region: 'Pennsylvania 57867',
    email: 'Willie.Jennings@Example.Com',
    phone: '(480) 555-0103',
    country: 'India',
    isDefault: true,
  },
  {
    id: '2',
    firstName: 'Theresa',
    lastName: 'Webb',
    street: '3517 W. Gray St. Utica,',
    region: 'Pennsylvania 57867',
    email: 'Willie.Jennings@Example.Com',
    phone: '(480) 555-0103',
    country: 'India',
    isDefault: false,
  },
  {
    id: '3',
    firstName: 'Theresa',
    lastName: 'Webb',
    street: '3517 W. Gray St. Utica,',
    region: 'Pennsylvania 57867',
    email: 'Willie.Jennings@Example.Com',
    phone: '(480) 555-0103',
    country: 'India',
    isDefault: false,
  }
];

const Addresses = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([]);
  const [view, setView] = useState('list'); // 'list' or 'new'
  
  // Interactive Pin State for Map Pinning (x, y percentage offset)
  const [pinPosition, setPinPosition] = useState({ x: 50, y: 50 });

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: 'India',
    street: '',
    city: '',
    phone: '',
    email: '',
    isDefault: false,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const saved = localStorage.getItem('kv_user_addresses');
    if (saved) {
      try {
        setAddresses(JSON.parse(saved));
      } catch (e) {
        setAddresses(INITIAL_ADDRESSES);
      }
    } else {
      setAddresses(INITIAL_ADDRESSES);
    }
  }, []);

  const saveAddressesToStorage = (updatedList) => {
    setAddresses(updatedList);
    localStorage.setItem('kv_user_addresses', JSON.stringify(updatedList));
  };

  const handleSetDefault = (id) => {
    const updated = addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    }));
    saveAddressesToStorage(updated);
  };

  const handleDeleteAddress = (id) => {
    const updated = addresses.filter(addr => addr.id !== id);
    if (updated.length > 0 && !updated.some(a => a.isDefault)) {
      updated[0].isDefault = true;
    }
    saveAddressesToStorage(updated);
  };

  // Back Button Navigation Click Handler
  const handleBackClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (view === 'new') {
      setView('list');
    } else {
      navigate(-1);
    }
  };

  // Interactive Map Click Handler
  const handleMapClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPinPosition({ x, y });
  };

  const handleCreateAddress = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.street || !formData.city) return;

    const newAddressObj = {
      id: Date.now().toString(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      street: formData.street,
      region: `${formData.city}, India`,
      email: formData.email,
      phone: formData.phone ? `+91 ${formData.phone}` : '',
      country: formData.country,
      pinCoords: pinPosition,
      isDefault: formData.isDefault || addresses.length === 0,
    };

    let updatedList = [...addresses];
    if (newAddressObj.isDefault) {
      updatedList = updatedList.map(a => ({ ...a, isDefault: false }));
    }
    updatedList.push(newAddressObj);

    saveAddressesToStorage(updatedList);
    
    // Reset Form
    setFormData({
      firstName: '',
      lastName: '',
      country: 'India',
      street: '',
      city: '',
      phone: '',
      email: '',
      isDefault: false,
    });
    setPinPosition({ x: 50, y: 50 });
    setView('list');
  };

  return (
    <div className="min-h-screen bg-[#080808] pt-20 pb-24 px-4 sm:px-6 lg:px-8 text-neutral-200 font-mono">
      <div className="max-w-md md:max-w-lg mx-auto space-y-6">

        {/* TOP BAR / BACK NAVIGATION */}
        <div className="flex items-center justify-between pb-2">
          <button
            type="button"
            onClick={handleBackClick}
            className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition cursor-pointer py-2 px-1 z-20"
          >
            <IoChevronBack className="text-base" />
            <span>BACK</span>
          </button>
          
          <h1 className="text-red-600 font-black tracking-widest text-lg uppercase">
            {view === 'list' ? 'ADDRESS' : 'NEW ADDRESS'}
          </h1>

          <div className="w-8" />
        </div>

        {/* VIEW 1: ADDRESS LIST */}
        {view === 'list' && (
          <div className="space-y-4">
            {addresses.map((addr) => (
              <div 
                key={addr.id}
                onClick={() => handleSetDefault(addr.id)}
                className={`bg-[#0d0d0d] border p-5 rounded-2xl relative transition-all duration-200 cursor-pointer ${
                  addr.isDefault 
                    ? 'border-neutral-600 shadow-lg shadow-black/50' 
                    : 'border-[#1a1a1a] opacity-80 hover:opacity-100 hover:border-neutral-800'
                }`}
              >
                {addr.isDefault && (
                  <span className="absolute top-4 right-4 bg-[#2a2a2a] text-neutral-300 text-[10px] font-mono px-2.5 py-1 rounded tracking-wider uppercase">
                    Default
                  </span>
                )}

                <div className="space-y-1 pr-16">
                  <h3 className="text-white font-bold text-base tracking-wide">
                    {addr.firstName} {addr.lastName}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                    {addr.street}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {addr.region}
                  </p>
                  <p className="text-xs text-neutral-500 pt-2 tracking-wide">
                    {addr.email}
                  </p>
                  <p className="text-xs text-neutral-500 tracking-wide">
                    {addr.phone}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteAddress(addr.id);
                  }}
                  className="absolute bottom-4 right-4 text-neutral-600 hover:text-red-500 p-1 transition"
                  title="Delete address"
                >
                  <IoTrashOutline className="text-base" />
                </button>
              </div>
            ))}

            <div className="pt-6">
              <button
                type="button"
                onClick={() => setView('new')}
                className="w-full bg-[#0d0d0d] border border-neutral-800 hover:border-neutral-600 text-white text-xs font-bold py-4 rounded-xl tracking-[0.25em] uppercase transition active:scale-[0.99] cursor-pointer"
              >
                ADD A NEW ADDRESS
              </button>
            </div>
          </div>
        )}

        {/* VIEW 2: NEW ADDRESS FORM */}
        {view === 'new' && (
          <form onSubmit={handleCreateAddress} className="space-y-6 pt-2">
            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">
                BILLING DETAILS
              </h2>
              <div className="border-b border-[#1f1f1f]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First name *"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full bg-transparent border-b border-neutral-800 focus:border-red-600 py-2.5 text-xs text-white placeholder-neutral-600 outline-none transition"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name *"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full bg-transparent border-b border-neutral-800 focus:border-red-600 py-2.5 text-xs text-white placeholder-neutral-600 outline-none transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-neutral-600 block uppercase mb-1">
                Country / Region *
              </label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-800 focus:border-red-600 py-2.5 text-xs text-white outline-none cursor-pointer uppercase transition"
              >
                <option value="India" className="bg-[#111] text-white">India</option>
                <option value="United States" className="bg-[#111] text-white">United States</option>
                <option value="United Kingdom" className="bg-[#111] text-white">United Kingdom</option>
              </select>
            </div>

            <div>
              <input
                type="text"
                placeholder="Street address *"
                value={formData.street}
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-800 focus:border-red-600 py-2.5 text-xs text-white placeholder-neutral-600 outline-none transition"
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Town / City *"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-800 focus:border-red-600 py-2.5 text-xs text-white placeholder-neutral-600 outline-none transition"
                required
              />
            </div>

            <div className="flex items-center gap-2 border-b border-neutral-800 focus-within:border-red-600 transition">
              <span className="text-xs text-neutral-500 py-2.5">+91</span>
              <span className="text-neutral-700">|</span>
              <input
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-transparent py-2.5 text-xs text-white placeholder-neutral-600 outline-none"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email address *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-800 focus:border-red-600 py-2.5 text-xs text-white placeholder-neutral-600 outline-none transition"
                required
              />
            </div>

            {/* INTERACTIVE CLICKABLE LOCATION MAP MOCKUP */}
            <div className="pt-2">
              <label className="text-[10px] text-neutral-500 block uppercase mb-2">
                Choose Location (Click to set pin)
              </label>
              <div 
                onClick={handleMapClick}
                className="relative w-full h-44 bg-[#111] border border-neutral-800 rounded-xl overflow-hidden cursor-crosshair"
              >
                <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] background-size:16px_16px opacity-40" />
                <div className="absolute inset-0 bg-linear-to-tr from-neutral-900 via-neutral-900/80 to-neutral-800/20" />
                
                {/* Dynamically Positioned Marker */}
                <div 
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 flex flex-col items-center"
                  style={{ left: `${pinPosition.x}%`, top: `${pinPosition.y}%` }}
                >
                  <div className="p-2.5 rounded-full bg-red-600/20 backdrop-blur-md border border-red-500/40 text-red-500 shadow-xl">
                    <IoLocationOutline className="text-xl text-red-500 animate-bounce" />
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 z-10 bg-black/80 px-2 py-1 rounded text-[9px] text-neutral-400">
                  X: {Math.round(pinPosition.x)}% | Y: {Math.round(pinPosition.y)}%
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-neutral-400">Set Default Address</span>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, isDefault: !formData.isDefault })}
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out cursor-pointer ${
                  formData.isDefault ? 'bg-white' : 'bg-[#222]'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full transition-transform duration-200 ease-in-out ${
                    formData.isDefault ? 'translate-x-6 bg-black' : 'translate-x-0 bg-neutral-500'
                  }`}
                />
              </button>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#0d0d0d] border border-neutral-800 hover:border-neutral-500 text-white text-xs font-bold py-4 rounded-xl tracking-[0.25em] uppercase transition active:scale-[0.99] cursor-pointer"
              >
                CONFIRM
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

export default Addresses;