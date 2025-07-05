import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 pt-24 pb-16 relative overflow-hidden">
        {/* Ancient runes background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-1/4 top-1/4 text-8xl opacity-10 select-none animate-pulse text-pink-300 font-serif">
            𓂀
          </div>
          <div className="absolute right-1/4 bottom-1/4 text-7xl opacity-10 select-none animate-spin-slow text-indigo-400 font-serif">
            ᚠ
          </div>
          <div className="absolute left-10 bottom-10 text-6xl opacity-10 select-none animate-bounce text-purple-400 font-serif">
            ☥
          </div>
        </div>
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-xl mx-auto bg-gradient-to-b from-yellow-50/90 via-yellow-100/95 to-yellow-200/90 border-x-8 border-yellow-900 rounded-3xl shadow-2xl py-12 px-8 flex flex-col items-center"
            style={{
              fontFamily: "serif",
              backgroundImage:
                "repeating-linear-gradient(0deg,rgba(120,80,20,0.06),rgba(120,80,20,0.06) 1px,transparent 1px,transparent 32px)",
            }}
          >
            {/* Avatar */}
            <div className="mb-6">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-200 flex items-center justify-center shadow-xl border-4 border-yellow-900">
                <span className="text-6xl select-none">🧙‍♂️</span>
              </div>
            </div>
            <h1 className="text-3xl font-extrabold mb-2 text-transparent bg-gradient-to-r from-purple-500 via-indigo-400 to-pink-400 bg-clip-text tracking-widest drop-shadow-lg text-center">
              The Modern Scribe
            </h1>
            <p className="text-lg text-purple-900 mb-6 text-center italic">
              “Keeper of scrolls, seeker of wisdom.”
            </p>
            <div className="w-full flex flex-col gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-bold text-yellow-900">Name:</span>
                <span className="text-purple-900">Alex Ancient</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-yellow-900">Email:</span>
                <span className="text-purple-900">alex@digitalnotebook.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-yellow-900">Joined:</span>
                <span className="text-purple-900">July 2025</span>
              </div>
            </div>
            <button className="px-8 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform tracking-widest">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;