import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <section className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-2xl w-full flex flex-col items-center">
          {/* Icon */}
          <div className="mb-6 animate-pulse">
            <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
              <rect x="8" y="8" width="48" height="48" rx="8" fill="#a78bfa" />
              <rect x="16" y="16" width="32" height="32" rx="4" fill="#fff" />
              <rect x="20" y="24" width="24" height="2" rx="1" fill="#a78bfa" />
              <rect x="20" y="30" width="16" height="2" rx="1" fill="#a78bfa" />
              <rect x="20" y="36" width="20" height="2" rx="1" fill="#a78bfa" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold mb-4 text-gray-800 tracking-tight text-center drop-shadow-lg">
            Getting Started With{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Digital Notebook
            </span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Welcome! Create, organize, and manage your notes effortlessly.
            <br />
            Start by adding your first note or exploring the features below.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
              Add Note
            </button>
            <button className="px-6 py-2 bg-white border border-indigo-300 text-indigo-600 rounded-full font-semibold shadow hover:bg-indigo-50 transition">
              Explore Features
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
