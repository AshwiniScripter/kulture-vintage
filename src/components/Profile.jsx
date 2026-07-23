import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline, IoHeartOutline, IoBagOutline, IoLocationOutline, IoSettingsOutline, IoLogOutOutline, IoChevronForward } from "react-icons/io5";

const menuItems = [
  { icon: IoHeartOutline, label: "My Wishlist", path: "/wishlist" },
  { icon: IoBagOutline, label: "My Orders", path: "/products" },
  { icon: IoLocationOutline, label: "Saved Addresses", path: "/profile" },
  { icon: IoSettingsOutline, label: "Settings", path: "/profile" },
];

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-28 pb-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-2xl mx-auto">

        {/* Profile Header */}
        <div className="bg-[#141414] border border-neutral-900 rounded-2xl p-6 mb-6 flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0">
            <IoPersonOutline className="text-3xl text-neutral-400" />
          </div>
          <div>
            <h1 className="text-xl font-mono font-black tracking-wider uppercase text-white">
              Guest User
            </h1>
            <p className="text-xs font-mono text-neutral-500 tracking-wider mt-1">
              Sign in to manage your account
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button
            onClick={() => navigate("/wishlist")}
            className="bg-[#141414] border border-neutral-900 rounded-xl py-4 flex flex-col items-center gap-2 hover:border-neutral-700 transition cursor-pointer"
          >
            <IoHeartOutline className="text-xl text-red-600" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 uppercase">Wishlist</span>
          </button>
          <button
            onClick={() => navigate("/products")}
            className="bg-[#141414] border border-neutral-900 rounded-xl py-4 flex flex-col items-center gap-2 hover:border-neutral-700 transition cursor-pointer"
          >
            <IoBagOutline className="text-xl text-red-600" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 uppercase">Orders</span>
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="bg-[#141414] border border-neutral-900 rounded-xl py-4 flex flex-col items-center gap-2 hover:border-neutral-700 transition cursor-pointer"
          >
            <IoLocationOutline className="text-xl text-red-600" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 uppercase">Address</span>
          </button>
        </div>

        {/* Menu List */}
        <div className="bg-[#141414] border border-neutral-900 rounded-2xl overflow-hidden mb-6">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-4 px-5 py-4 hover:bg-neutral-900 transition cursor-pointer text-left ${
                idx !== menuItems.length - 1 ? "border-b border-neutral-900" : ""
              }`}
            >
              <item.icon className="text-lg text-neutral-400" />
              <span className="flex-1 text-sm font-mono font-bold tracking-wider text-neutral-200 uppercase">
                {item.label}
              </span>
              <IoChevronForward className="text-neutral-600" />
            </button>
          ))}
        </div>

        {/* Sign Out */}
        <button
          onClick={() => navigate("/")}
          className="w-full bg-[#141414] border border-neutral-900 rounded-2xl py-4 flex items-center justify-center gap-3 hover:border-red-600/30 hover:bg-red-600/5 transition cursor-pointer"
        >
          <IoLogOutOutline className="text-lg text-red-600" />
          <span className="text-sm font-mono font-bold tracking-wider text-red-600 uppercase">
            Back to Home
          </span>
        </button>

      </div>
    </div>
  );
};

export default Profile;
