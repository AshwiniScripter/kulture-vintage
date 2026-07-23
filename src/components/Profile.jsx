import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline, IoMailOutline, IoCallOutline, IoLocationOutline, IoCalendarOutline, IoChevronBack } from "react-icons/io5";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    joinDate: "July 2026",
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const saved = localStorage.getItem("kv_user_profile");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleSave = () => {
    localStorage.setItem("kv_user_profile", JSON.stringify(user));
    setEditing(false);
  };

  const handleChange = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-28 pb-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="bg-[#141414] border border-neutral-900 p-3 rounded-xl hover:bg-neutral-900 text-red-600 transition cursor-pointer active:scale-95 shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <h1 className="text-xl font-mono font-black tracking-widest text-white uppercase">My Profile</h1>
        </div>

        {/* Avatar + Name */}
        <div className="bg-[#141414] border border-neutral-900 rounded-2xl p-6 mb-6 flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-neutral-800 border-2 border-red-600/30 flex items-center justify-center shrink-0">
            <IoPersonOutline className="text-3xl text-neutral-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-mono font-black tracking-wider uppercase text-white truncate">
              {user.name || "Guest User"}
            </h2>
            <p className="text-xs font-mono text-neutral-500 tracking-wider mt-1 truncate">
              {user.email || "No email added"}
            </p>
          </div>
          <button
            onClick={() => editing ? handleSave() : setEditing(true)}
            className={`text-[10px] font-mono font-bold tracking-widest uppercase px-4 py-2 rounded-lg border transition cursor-pointer shrink-0 ${
              editing
                ? "border-red-600 bg-red-600 text-white hover:bg-red-700"
                : "border-neutral-800 text-neutral-400 hover:border-neutral-600"
            }`}
          >
            {editing ? "Save" : "Edit"}
          </button>
        </div>

        {/* Profile Information */}
        <div className="bg-[#141414] border border-neutral-900 rounded-2xl overflow-hidden mb-6">
          <div className="px-5 py-3 border-b border-neutral-900">
            <p className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase">Personal Information</p>
          </div>

          {/* Full Name */}
          <div className="flex items-center gap-4 px-5 py-4 border-b border-neutral-900">
            <IoPersonOutline className="text-lg text-neutral-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-mono font-bold tracking-widest text-neutral-600 uppercase mb-1">Full Name</p>
              {editing ? (
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-transparent text-sm font-mono text-white placeholder-neutral-700 outline-none border-b border-neutral-800 focus:border-red-600 transition pb-1"
                />
              ) : (
                <p className="text-sm font-mono text-neutral-200 tracking-wider">{user.name || "Not set"}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 px-5 py-4 border-b border-neutral-900">
            <IoMailOutline className="text-lg text-neutral-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-mono font-bold tracking-widest text-neutral-600 uppercase mb-1">Email Address</p>
              {editing ? (
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-sm font-mono text-white placeholder-neutral-700 outline-none border-b border-neutral-800 focus:border-red-600 transition pb-1"
                />
              ) : (
                <p className="text-sm font-mono text-neutral-200 tracking-wider">{user.email || "Not set"}</p>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 px-5 py-4 border-b border-neutral-900">
            <IoCallOutline className="text-lg text-neutral-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-mono font-bold tracking-widest text-neutral-600 uppercase mb-1">Phone Number</p>
              {editing ? (
                <input
                  type="tel"
                  value={user.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full bg-transparent text-sm font-mono text-white placeholder-neutral-700 outline-none border-b border-neutral-800 focus:border-red-600 transition pb-1"
                />
              ) : (
                <p className="text-sm font-mono text-neutral-200 tracking-wider">{user.phone || "Not set"}</p>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4 px-5 py-4 border-b border-neutral-900">
            <IoLocationOutline className="text-lg text-neutral-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-mono font-bold tracking-widest text-neutral-600 uppercase mb-1">Address</p>
              {editing ? (
                <input
                  type="text"
                  value={user.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  placeholder="Enter your address"
                  className="w-full bg-transparent text-sm font-mono text-white placeholder-neutral-700 outline-none border-b border-neutral-800 focus:border-red-600 transition pb-1"
                />
              ) : (
                <p className="text-sm font-mono text-neutral-200 tracking-wider">{user.address || "Not set"}</p>
              )}
            </div>
          </div>

          {/* Join Date */}
          <div className="flex items-center gap-4 px-5 py-4">
            <IoCalendarOutline className="text-lg text-neutral-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-mono font-bold tracking-widest text-neutral-600 uppercase mb-1">Member Since</p>
              <p className="text-sm font-mono text-neutral-200 tracking-wider">{user.joinDate}</p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <button
          onClick={() => navigate("/")}
          className="w-full bg-[#141414] border border-neutral-900 rounded-2xl py-4 flex items-center justify-center gap-3 hover:border-neutral-700 transition cursor-pointer"
        >
          <span className="text-sm font-mono font-bold tracking-wider text-neutral-400 uppercase">
            Back to Home
          </span>
        </button>

      </div>
    </div>
  );
};

export default Profile;
