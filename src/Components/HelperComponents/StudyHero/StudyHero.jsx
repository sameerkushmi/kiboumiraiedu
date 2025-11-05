import React, { useState, useEffect } from "react";

export default function StudyHero({ title, description, bgImg, img, video }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="mx-6 mt-[12vh] mb-12 ">
      <div className="">
        <div className="relative bg-white rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden border border-gray-100 shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${bgImg})` }}
          ></div>

          {/* Optional overlay for better contrast */}
          <div className="absolute inset-0 bg-white/40  rounded-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column - Large Image */}
            <div
              className={`order-2 lg:order-1 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={video}
                    className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-105 transition duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div
              className={`order-1 lg:order-2 space-y-8 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Title */}
              <div className="text-left">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-none tracking-tight">
                  Study in {title}
                  {/* <span className=" mt-1">Japan</span> */}
                </h1>
              </div>

              {/* Bottom section with image and text */}
              <div className="grid grid-cols-5 gap-6 items-start pt-4">
                {/* Small Image - takes 2 columns */}
                <div className="col-span-2">
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                      <img
                        src={img}
                        alt="Study in Japan"
                        className="w-full h-full object-cover aspect-square transform group-hover:scale-110 transition duration-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Description - takes 3 columns */}
                <div className="col-span-3 pt-2">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-6">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
