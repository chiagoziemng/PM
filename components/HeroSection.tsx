"use client";

import { useState } from "react";

const HeroSection = () => {
  const [showOverview, setShowOverview] = useState(false);

  const handleDiscover = () => {
    setShowOverview(true);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Hotel visual representation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="relative">
          {/* Main building */}
          <div className="w-80 h-64 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-lg shadow-2xl transform rotate-3"></div>
          {/* Building details */}
          <div className="absolute top-4 left-4 right-4 h-8 bg-yellow-300 rounded opacity-80"></div>
          <div className="absolute bottom-4 left-8 right-8 h-12 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded"></div>
          {/* Windows pattern */}
          <div className="absolute inset-6 grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="bg-white/30 rounded-sm"></div>
            ))}
          </div>
        </div>
      </div>

      {!showOverview ? (
        <div className="absolute inset-0 flex items-center justify-center text-center z-10">
          <div className="max-w-4xl px-6">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Power Mike Hotel
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience luxury redefined in our globally acclaimed hospitality
              destination
            </p>
            <button
              onClick={handleDiscover}
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover Excellence
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-blue-900/95 flex items-center justify-center z-20">
          <div className="max-w-4xl px-6 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Welcome to Luxury</h2>
            <p className="text-lg mb-8">
              Discover our world-class amenities, exquisite dining, and
              unparalleled service that defines the Power Mike Hotel experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-yellow-500/20">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-2xl">🏨</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Suites</h3>
                <p>Luxuriously appointed rooms with stunning city views</p>
              </div>
              <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-yellow-500/20">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-2xl">🍽️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Fine Dining</h3>
                <p>World-class cuisine crafted by renowned chefs</p>
              </div>
              <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-yellow-500/20">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-2xl">🧘</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Spa & Wellness</h3>
                <p>Rejuvenating treatments in our luxury spa</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
