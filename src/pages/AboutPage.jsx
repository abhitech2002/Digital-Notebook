import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 relative overflow-hidden pt-24 pb-16">
        {/* Ancient glowing runes background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-1/4 top-1/3 text-7xl opacity-10 select-none animate-pulse text-purple-400 font-serif">
            𓂀
          </div>
          <div className="absolute right-1/4 bottom-1/4 text-8xl opacity-10 select-none animate-spin-slow text-pink-400 font-serif">
            ᚠ
          </div>
          <div className="absolute left-10 bottom-10 text-6xl opacity-10 select-none animate-bounce text-indigo-400 font-serif">
            ☥
          </div>
        </div>
        {/* Scroll-like About Section */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-2">
          <div className="w-full max-w-4xl mx-auto py-12 px-4 md:px-16 flex flex-col items-center">
            {/* Scroll edges */}
            <div className="w-full flex justify-between items-center mb-[-32px]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700 shadow-2xl border-4 border-yellow-900 opacity-80 blur-[1px]" />
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700 shadow-2xl border-4 border-yellow-900 opacity-80 blur-[1px]" />
            </div>
            <div
              className="w-full bg-gradient-to-b from-yellow-50/90 via-yellow-100/95 to-yellow-200/90 border-x-8 border-yellow-900 rounded-t-3xl rounded-b-3xl shadow-2xl py-12 px-6 md:px-16 flex flex-col items-center"
              style={{
                fontFamily: "serif",
                backgroundImage:
                  "repeating-linear-gradient(0deg,rgba(120,80,20,0.06),rgba(120,80,20,0.06) 1px,transparent 1px,transparent 32px)",
              }}
            >
              {/* Ancient Book Icon */}
              <div className="mb-6 animate-fade-in">
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
                  <rect x="8" y="12" width="48" height="40" rx="8" fill="#a78bfa" />
                  <rect x="14" y="18" width="36" height="28" rx="4" fill="#fff" opacity="0.85" />
                  <path d="M32 18 V46" stroke="#a78bfa" strokeWidth="2" opacity="0.7"/>
                  <path d="M20 24 H44" stroke="#a78bfa" strokeWidth="1.5" opacity="0.5"/>
                  <path d="M20 30 H44" stroke="#a78bfa" strokeWidth="1.5" opacity="0.4"/>
                  <path d="M20 36 H44" stroke="#a78bfa" strokeWidth="1.5" opacity="0.3"/>
                </svg>
              </div>
              <h1 className="text-4xl font-extrabold mb-2 text-transparent bg-gradient-to-r from-purple-500 via-indigo-400 to-pink-400 bg-clip-text tracking-widest drop-shadow-lg text-center">
                About Digital Notebook
              </h1>
              <p className="text-lg text-purple-900 mb-6 text-center italic">
                “Where ancient wisdom meets modern clarity.”
              </p>
              <div className="text-md text-purple-900 leading-relaxed text-center font-mono mb-4">
                <span className="block mb-2 text-xl font-bold tracking-widest text-pink-500 font-serif">𓆸 Our Story</span>
                In the shadowed halls of forgotten libraries, legends spoke of a tome that could hold every thought, dream, and secret. <br />
                Digital Notebook is inspired by these ancient myths—crafted to be your personal grimoire for ideas, notes, and inspiration.<br />
                <span className="block mt-4 mb-2 text-xl font-bold tracking-widest text-indigo-500 font-serif">☥ Our Mission</span>
                To empower modern scribes with a space as timeless as the pyramids and as boundless as the stars.<br />
                <span className="block mt-4 mb-2 text-xl font-bold tracking-widest text-purple-600 font-serif">ᚠ Features</span>
                <ul className="list-disc list-inside text-purple-800 text-left mx-auto max-w-xs">
                  <li>Enchanted note organization</li>
                  <li>Runic search for lost thoughts</li>
                  <li>Spellbinding themes & customization</li>
                  <li>Guarded privacy for your secrets</li>
                </ul>
              </div>
              <div className="mt-6 text-xs text-purple-700 opacity-80 font-serif text-center">
                &copy; {new Date().getFullYear()} Digital Notebook — Crafted in the spirit of the ancients.
              </div>
            </div>
            {/* Scroll edges bottom */}
            <div className="w-full flex justify-between items-center mt-[-32px]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700 shadow-2xl border-4 border-yellow-900 opacity-80 blur-[1px]" />
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700 shadow-2xl border-4 border-yellow-900 opacity-80 blur-[1px]" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;