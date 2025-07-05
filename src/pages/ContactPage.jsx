import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 relative overflow-hidden pt-24 pb-16">
        {/* Ancient runes and symbols background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-1/3 top-1/4 text-8xl opacity-10 select-none animate-pulse text-pink-300 font-serif">
            ᚨ
          </div>
          <div className="absolute right-1/4 bottom-1/3 text-7xl opacity-10 select-none animate-spin-slow text-indigo-400 font-serif">
            ☯
          </div>
          <div className="absolute left-10 bottom-10 text-6xl opacity-10 select-none animate-bounce text-purple-400 font-serif">
            𓂀
          </div>
        </div>
        {/* Scroll-like Contact Section */}
        <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
          {/* Scroll edges top */}
          <div className="w-full flex justify-between items-center mb-[-32px]">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700 shadow-2xl border-4 border-yellow-900 opacity-80 blur-[1px]" />
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700 shadow-2xl border-4 border-yellow-900 opacity-80 blur-[1px]" />
          </div>
          <section
            className="w-full bg-gradient-to-b from-yellow-50/90 via-yellow-100/95 to-yellow-200/90 border-x-8 border-yellow-900 rounded-t-3xl rounded-b-3xl shadow-2xl py-12 px-6 md:px-12 flex flex-col items-center"
            style={{
              fontFamily: "serif",
              backgroundImage:
                "repeating-linear-gradient(0deg,rgba(120,80,20,0.06),rgba(120,80,20,0.06) 1px,transparent 1px,transparent 32px)",
            }}
          >
            {/* Ancient Scroll Icon */}
            <div className="mb-6 animate-fade-in">
              <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
                <rect x="12" y="16" width="40" height="32" rx="8" fill="#a78bfa" />
                <rect x="18" y="22" width="28" height="20" rx="4" fill="#fff" opacity="0.85" />
                <path d="M18 28 H46" stroke="#a78bfa" strokeWidth="2" opacity="0.6"/>
                <path d="M18 34 H46" stroke="#a78bfa" strokeWidth="1.5" opacity="0.4"/>
                <path d="M18 40 H38" stroke="#a78bfa" strokeWidth="1.5" opacity="0.3"/>
                <ellipse cx="32" cy="16" rx="6" ry="2" fill="#fff" opacity="0.25"/>
              </svg>
            </div>
            <h1 className="text-4xl font-extrabold mb-2 text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text tracking-widest font-serif drop-shadow-lg text-center">
              Contact the Scribes
            </h1>
            <p className="text-lg text-purple-900 mb-6 text-center italic font-serif">
              “Send your message through the mists of time.”
            </p>
            <form className="w-full max-w-md flex flex-col gap-5 text-purple-900 font-mono">
              <div>
                <label className="block mb-1 text-purple-700 tracking-widest font-bold" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-400 text-purple-900 font-semibold placeholder-purple-400"
                  placeholder="Your ancient name..."
                />
              </div>
              <div>
                <label className="block mb-1 text-purple-700 tracking-widest font-bold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-400 text-purple-900 font-semibold placeholder-purple-400"
                  placeholder="Your scroll address..."
                />
              </div>
              <div>
                <label className="block mb-1 text-purple-700 tracking-widest font-bold" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-400 text-purple-900 font-semibold placeholder-purple-400"
                  placeholder="Inscribe your message here..."
                />
              </div>
              <button
                type="submit"
                className="mt-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform tracking-widest"
              >
                Send Rune
              </button>
            </form>
            <div className="mt-8 text-xs text-purple-700 opacity-80 font-serif text-center">
              Or reach us by carrier owl at <span className="underline">ancients@digitalnotebook.com</span>
            </div>
          </section>
          {/* Scroll edges bottom */}
          <div className="w-full flex justify-between items-center mt-[-32px]">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700 shadow-2xl border-4 border-yellow-900 opacity-80 blur-[1px]" />
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700 shadow-2xl border-4 border-yellow-900 opacity-80 blur-[1px]" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;