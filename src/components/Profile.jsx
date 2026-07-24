import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  IoPencil, 
  IoBagOutline, 
  IoHeartOutline, 
  IoPricetagOutline, 
  IoStarOutline,
  IoCubeOutline,
  IoChevronForward,
  IoPersonOutline,
  IoLocationOutline,
  IoCardOutline,
  IoShieldCheckmarkOutline,
  IoNotificationsOutline,
  IoHeadsetOutline,
  IoHelpCircleOutline,
  IoInformationCircleOutline,
  IoLogOutOutline,
  IoPaperPlaneOutline,
  IoCheckmarkDoneCircleOutline,
  IoRepeatOutline,
  IoCloseOutline
} from "react-icons/io5";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "Parth Bhalala",
    username: "@parth.vibes",
    bio: "Streetwear lover. Culture believer. Always evolving.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const saved = localStorage.getItem("kv_user_profile");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUser(prev => ({ ...prev, ...parsed }));
        setFormData(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error("Error loading profile", e);
      }
    }
  }, []);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUser(formData);
    localStorage.setItem("kv_user_profile", JSON.stringify(formData));
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#080808] pt-20 pb-24 px-4 sm:px-6 lg:px-8 text-neutral-200 font-sans relative">
      <div className="max-w-md md:max-w-lg mx-auto space-y-5">

        {/* 1. TOP HEADER BANNER */}
        <div className="pt-2 pb-1">
          <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-500 uppercase block mb-1">
            PROFILE
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight leading-none uppercase">
            Your style.
          </h1>
          <h1 className="text-3xl font-black text-white tracking-tight leading-none uppercase">
            Your identity.
          </h1>
        </div>

        {/* 2. PROFILE HERO CARD */}
        <div className="bg-[#111111] border border-neutral-800/80 rounded-2xl p-5 relative overflow-hidden shadow-2xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative shrink-0">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-neutral-700/80 shadow-md"
              />
            </div>

            <div className="flex-1 min-w-0 pt-0.5">
              <h2 className="text-lg font-bold text-white tracking-wide truncate">
                {user.name}
              </h2>
              <p className="text-xs text-neutral-500 font-mono mb-2">
                {user.username}
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                {user.bio}
              </p>

              <button
                onClick={() => {
                  setFormData(user);
                  setIsEditing(true);
                }}
                className="mt-3 inline-flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-neutral-800 border border-neutral-700/60 px-3 py-1.5 rounded-lg text-[11px] font-medium text-neutral-300 transition active:scale-95 cursor-pointer"
              >
                <IoPencil className="text-xs" />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-4 border-t border-neutral-800/80 pt-4 text-center">
            <div className="space-y-1">
              <IoBagOutline className="mx-auto text-lg text-neutral-400" />
              <p className="text-sm font-bold text-white font-mono">12</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Orders</p>
            </div>
            <div className="space-y-1 border-l border-neutral-800/60">
              <IoHeartOutline className="mx-auto text-lg text-neutral-400" />
              <p className="text-sm font-bold text-white font-mono">25</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Wishlist</p>
            </div>
            <div className="space-y-1 border-l border-neutral-800/60">
              <IoPricetagOutline className="mx-auto text-lg text-neutral-400" />
              <p className="text-sm font-bold text-white font-mono">3</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Coupons</p>
            </div>
            <div className="space-y-1 border-l border-neutral-800/60">
              <IoStarOutline className="mx-auto text-lg text-neutral-400" />
              <p className="text-sm font-bold text-white font-mono">580</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-wider">K Points</p>
            </div>
          </div>
        </div>

        {/* 3. ORDER OVERVIEW SECTION */}
        <div className="bg-[#111111] border border-neutral-800/80 rounded-2xl p-4 shadow-xl">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-xs font-bold text-white tracking-widest uppercase">
              Order Overview
            </h3>
            <button 
              onClick={() => navigate("/orders")}
              className="text-xs text-neutral-400 hover:text-white flex items-center gap-0.5 transition"
            >
              <span>View All</span>
              <IoChevronForward className="text-xs" />
            </button>
          </div>

          <div className="grid grid-cols-4 text-center">
            <div className="space-y-1 py-1 cursor-pointer hover:opacity-80 transition" onClick={() => navigate("/orders")}>
              <IoCubeOutline className="mx-auto text-xl text-neutral-300" />
              <p className="text-sm font-bold text-white font-mono">3</p>
              <p className="text-[10px] text-neutral-500 uppercase">Processing</p>
            </div>
            <div className="space-y-1 py-1 border-l border-neutral-800/60 cursor-pointer hover:opacity-80 transition" onClick={() => navigate("/orders")}>
              <IoPaperPlaneOutline className="mx-auto text-xl text-neutral-300" />
              <p className="text-sm font-bold text-white font-mono">2</p>
              <p className="text-[10px] text-neutral-500 uppercase">Shipped</p>
            </div>
            <div className="space-y-1 py-1 border-l border-neutral-800/60 cursor-pointer hover:opacity-80 transition" onClick={() => navigate("/orders")}>
              <IoCheckmarkDoneCircleOutline className="mx-auto text-xl text-neutral-300" />
              <p className="text-sm font-bold text-white font-mono">6</p>
              <p className="text-[10px] text-neutral-500 uppercase">Delivered</p>
            </div>
            <div className="space-y-1 py-1 border-l border-neutral-800/60 cursor-pointer hover:opacity-80 transition" onClick={() => navigate("/orders")}>
              <IoRepeatOutline className="mx-auto text-xl text-neutral-300" />
              <p className="text-sm font-bold text-white font-mono">1</p>
              <p className="text-[10px] text-neutral-500 uppercase">Returns</p>
            </div>
          </div>
        </div>

        {/* 4. ACCOUNT MENU LIST */}
        <div className="bg-[#111111] border border-neutral-800/80 rounded-2xl p-2 shadow-xl divide-y divide-neutral-800/50">
          <p className="text-[11px] font-bold text-neutral-400 tracking-widest uppercase px-3 pt-3 pb-2">
            Account Menu
          </p>

          {[
            { label: "Personal Information", icon: IoPersonOutline, path: "/personal-info" },
            { label: "Addresses", icon: IoLocationOutline, path: "/addresses" },
            { label: "Payment Methods", icon: IoCardOutline, path: "/payments" },
            { label: "Security", icon: IoShieldCheckmarkOutline, path: "/security" },
            { label: "Notification Preferences", icon: IoNotificationsOutline, path: "/notifications" },
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="w-full flex items-center justify-between p-3.5 hover:bg-neutral-800/40 rounded-xl transition cursor-pointer text-left group"
              >
                <div className="flex items-center gap-3">
                  <IconComponent className="text-lg text-neutral-400 group-hover:text-white transition" />
                  <span className="text-xs font-medium text-neutral-300 group-hover:text-white transition">
                    {item.label}
                  </span>
                </div>
                <IoChevronForward className="text-xs text-neutral-600 group-hover:text-neutral-400 transition" />
              </button>
            );
          })}
        </div>

        {/* 5. MORE ACTIONS & SUPPORT */}
        <div className="bg-[#111111] border border-neutral-800/80 rounded-2xl p-3 shadow-xl space-y-3">
          <p className="text-[11px] font-bold text-neutral-400 tracking-widest uppercase px-1 pt-1">
            More
          </p>

          <div className="grid grid-cols-3 gap-2">
            <button 
              onClick={() => navigate("/support")}
              className="flex items-center justify-center gap-1.5 bg-[#181818] hover:bg-neutral-800 border border-neutral-800 py-2.5 px-2 rounded-xl text-[11px] font-medium text-neutral-300 transition"
            >
              <IoHeadsetOutline className="text-sm" />
              <span>Help & Support</span>
            </button>
            <button 
              onClick={() => navigate("/faqs")}
              className="flex items-center justify-center gap-1.5 bg-[#181818] hover:bg-neutral-800 border border-neutral-800 py-2.5 px-2 rounded-xl text-[11px] font-medium text-neutral-300 transition"
            >
              <IoHelpCircleOutline className="text-sm" />
              <span>FAQs</span>
            </button>
            <button 
              onClick={() => navigate("/about")}
              className="flex items-center justify-center gap-1.5 bg-[#181818] hover:bg-neutral-800 border border-neutral-800 py-2.5 px-2 rounded-xl text-[11px] font-medium text-neutral-300 transition"
            >
              <IoInformationCircleOutline className="text-sm" />
              <span>About Kulture</span>
            </button>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("kv_user_profile");
              navigate("/login");
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#181818] hover:bg-red-900/20 hover:border-red-600/40 border border-neutral-800 py-3 rounded-xl text-xs font-bold text-neutral-300 hover:text-red-400 transition cursor-pointer"
          >
            <IoLogOutOutline className="text-base" />
            <span>Log Out</span>
          </button>
        </div>

      </div>

      {/* EDIT PROFILE MODAL */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#111111] border border-neutral-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <h3 className="text-sm font-bold text-white tracking-widest uppercase">Edit Profile</h3>
              <button 
                onClick={() => setIsEditing(false)}
                className="text-neutral-400 hover:text-white p-1 rounded-lg"
              >
                <IoCloseOutline className="text-xl" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="mt-4 space-y-4">
              <div>
                <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-red-600"
                  required
                />
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-red-600"
                  required
                />
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  Bio
                </label>
                <textarea
                  rows={2}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-red-600 resize-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  Avatar Image URL
                </label>
                <input
                  type="url"
                  value={formData.avatar}
                  onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                  className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-red-600"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 bg-[#181818] hover:bg-neutral-800 text-neutral-300 text-xs font-bold py-3 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-3 rounded-xl transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Profile;