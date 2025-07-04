import React from "react";

const StartPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
            <div className="backdrop-blur-md rounded-3xl shadow-2xl p-10 flex flex-col items-center max-w-lg w-full">
                {/* Animated Notebook Icon */}
                <div className="mb-6 animate-bounce">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <rect x="8" y="8" width="48" height="48" rx="8" fill="#6366F1" />
                        <rect x="16" y="16" width="32" height="32" rx="4" fill="#fff" />
                        <rect x="20" y="24" width="24" height="2" rx="1" fill="#6366F1" />
                        <rect x="20" y="30" width="16" height="2" rx="1" fill="#6366F1" />
                        <rect x="20" y="36" width="20" height="2" rx="1" fill="#6366F1" />
                    </svg>
                </div>
                <h1 className="text-5xl font-extrabold mb-4 text-gray-800 drop-shadow-lg tracking-tight">
                    Digital Notebook
                </h1>
                <p className="text-xl text-gray-700 mb-8 text-center">
                    Organize your thoughts, ideas, and notes in a beautiful, distraction-free space.
                </p>
                <a
                    href="home"
                    className="mt-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
}

export default StartPage;