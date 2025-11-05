import React from "react";
import { Home } from "lucide-react";

export default function HeroSection2({ title, description, btnText }) {
  return (
    <section
      className="relative bg-gray-900 text-white py-20  mx-6 rounded-3xl overflow-hidden mt-[12vh]"
      style={{
        backgroundImage: `url('/Uploads/home/hero.avif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-8">
        {/* Left side - Text content */}
        <div className="space-y-6 flex flex-col items-end text-right">
          <div className="relative">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              {title}
            </h1>
          </div>

          <p className="text-gray-200 text-lg max-w-md">{description}</p>

          <div className="flex gap-4">
            <button className="bg-text transition-colors text-white px-8 py-3 rounded-lg font-medium">
              {btnText}
            </button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/Uploads/home/hero.avif"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>
    </section>
  );
}
