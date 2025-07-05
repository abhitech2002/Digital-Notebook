import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 relative overflow-hidden pt-24 pb-16">
          {/* Ancient runes and symbols background */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute left-1/4 top-1/4 text-8xl opacity-10 select-none animate-pulse text-pink-200 font-serif">
              𓂀
            </div>
            <div className="absolute right-1/4 bottom-1/4 text-7xl opacity-10 select-none animate-spin-slow text-indigo-300 font-serif">
              ᚠ
            </div>
            <div className="absolute left-10 bottom-10 text-6xl opacity-10 select-none animate-bounce text-purple-300 font-serif">
              ☥
            </div>
          </div>
          {/* Hero Section */}
          <div className="relative z-10 flex flex-col items-center w-full max-w-3xl px-6 py-12">
            {/* Glowing notebook icon with mystical aura */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 blur-2xl opacity-40 animate-pulse pointer-events-none" style={{background: "radial-gradient(circle, #a78bfa55 0%, transparent 70%)"}} />
              <svg width="80" height="80" viewBox="0 0 64 64" fill="none" className="mx-auto drop-shadow-2xl">
                <rect x="8" y="12" width="48" height="40" rx="12" fill="#a78bfa" />
                <rect x="14" y="18" width="36" height="28" rx="6" fill="#fff" opacity="0.92" />
                <path d="M32 18 V46" stroke="#a78bfa" strokeWidth="2.5" opacity="0.7"/>
                <path d="M20 24 H44" stroke="#a78bfa" strokeWidth="2" opacity="0.5"/>
                <path d="M20 30 H44" stroke="#a78bfa" strokeWidth="2" opacity="0.4"/>
                <path d="M20 36 H44" stroke="#a78bfa" strokeWidth="2" opacity="0.3"/>
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-gradient-to-r from-purple-200 via-indigo-100 to-pink-200 bg-clip-text tracking-widest font-serif drop-shadow-xl text-center">
              Welcome, Modern Scribe
            </h1>
            <p className="text-2xl md:text-3xl text-purple-100 mb-8 text-center italic font-serif drop-shadow">
              “Begin your legend. Let your notes echo through the ages.”
            </p>
            <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center mb-8">
              <div className="bg-white/5 rounded-2xl px-6 py-4 shadow-lg border border-purple-700/40 flex-1 min-w-[220px]">
                <span className="block mb-2 text-xl font-bold tracking-widest text-pink-200 font-serif">𓆸 What Awaits You</span>
                <ul className="list-disc list-inside text-purple-100 text-left font-mono space-y-1">
                  <li>Enchanted note organization</li>
                  <li>Runic search for lost thoughts</li>
                  <li>Spellbinding themes & customization</li>
                  <li>Guarded privacy for your secrets</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 items-center mt-6 md:mt-0">
                <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform tracking-widest text-lg">
                  Add Note
                </button>
                <button className="px-8 py-3 bg-white/10 border border-indigo-300 text-indigo-100 rounded-full font-semibold shadow hover:bg-indigo-50/10 transition tracking-widest text-lg">
                  Explore Features
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
