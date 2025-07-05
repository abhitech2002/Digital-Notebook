import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-950 via-purple-900 to-pink-900 text-gray-200 py-8 mt-16 shadow-inner border-t border-purple-800">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Ancient Symbol */}
        <div className="mb-3 animate-pulse">
          <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="20" fill="#2d1a4a" stroke="#a78bfa" strokeWidth="2" />
            <path d="M24 10 L32 38 L16 38 Z" fill="#a78bfa" opacity="0.7"/>
            <circle cx="24" cy="24" r="6" fill="#fff" opacity="0.15"/>
            <path d="M24 18 A6 6 0 0 1 30 24" stroke="#fff" strokeWidth="1.5" opacity="0.5"/>
          </svg>
        </div>
        <div className="text-lg font-semibold tracking-widest mb-1" style={{ fontFamily: 'serif', letterSpacing: '0.2em' }}>
          <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent">
            Digital Notebook
          </span>
        </div>
        <div className="text-sm text-purple-200 italic mb-2">
          “In ancient scripts, wisdom is found. Let your notes become your legend.”
        </div>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
            GitHub
          </a>
          <a href="/about" className="hover:text-indigo-300 transition">
            About
          </a>
          <a href="/contact" className="hover:text-purple-300 transition">
            Contact
          </a>
        </div>
        <div className="mt-4 text-xs text-purple-300 opacity-70">
          &copy; {new Date().getFullYear()} Digital Notebook. Secrets of the ancients, crafted for you.
        </div>
      </div>
    </footer>
  );
};

export default Footer;