import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 bg-white/70 backdrop-blur-md shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
            <rect x="8" y="8" width="48" height="48" rx="8" fill="#6366F1" />
            <rect x="16" y="16" width="32" height="32" rx="4" fill="#fff" />
            <rect x="20" y="24" width="24" height="2" rx="1" fill="#6366F1" />
            <rect x="20" y="30" width="16" height="2" rx="1" fill="#6366F1" />
            <rect x="20" y="36" width="20" height="2" rx="1" fill="#6366F1" />
          </svg>
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Digital Notebook
          </span>
        </div>
        {/* Links */}
        <div className="flex gap-6 items-center">
          <a href="/home" className="text-gray-700 font-medium hover:text-indigo-600 transition">
            Home
          </a>
          <a href="/notes" className="text-gray-700 font-medium hover:text-indigo-600 transition">
            Notes
          </a>
          <a href="/about" className="text-gray-700 font-medium hover:text-indigo-600 transition">
            About
          </a>
          <a
            href="/profile"
            className="ml-4 px-4 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform"
          >
            Profile
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;