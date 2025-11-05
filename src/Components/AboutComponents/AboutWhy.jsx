import React from "react";
import { Link } from "react-router-dom";

export default function AboutWhy() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
          What Makes KBM Stand Out?
        </h2>
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          At KBM Education Consultancy, we go beyond counseling — we build
          lifelong partnerships with students. With expert advisors, a
          transparent process, and personalized guidance, we help you turn your
          study abroad dream into reality.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-4 max-w-6xl mx-auto ">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {/* Card 1 */}
          <div className="relative h-[40vh] rounded-3xl flex items-center justify-center text-2xl font-semibold">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center rounded-3xl"
              style={{
                backgroundImage: "url('/Uploads/about/why/counselling.png')",
                zIndex: 0,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl"></div>
            </div>
            <div className="absolute bottom-3 p-4 text-background">
              <div className="text-lg font-semibold mb-1">
                Personalized Counselling
              </div>
              <p className="text-base max-w-4xl">
                Every student is unique — and so is our guidance. We offer
                one-on-one counseling sessions to help you choose the right
                destination, course, and institution that aligns with your
                goals.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative h-[40vh] rounded-3xl flex items-center justify-center text-2xl font-semibold">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center rounded-3xl"
              style={{
                backgroundImage: "url('/Uploads/about/why/experts.jpg')",
                zIndex: 0,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl"></div>
            </div>
            <div className="absolute bottom-3 p-4 text-background">
              <div className="text-lg font-semibold mb-1">
                Experienced Industry Experts
              </div>
              <p className="text-base max-w-4xl">
                Our team of seasoned counselors and education experts bring
                years of experience guiding students to top universities in
                Japan, Australia, the UK, the USA, and Canada.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4">
          {/* Left large box */}
          <div className="relative rounded-3xl md:h-[60vh] h-[30vh] flex items-center justify-center text-2xl font-semibold">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center rounded-3xl"
              style={{
                backgroundImage: "url('/Uploads/about/why/transparent.jpg')",
                zIndex: 0,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl"></div>
            </div>
            <div className="absolute bottom-3 p-4 text-background">
              <div className="text-lg font-semibold mb-1">
                Transparent Process
              </div>
              <p className="text-base max-w-4xl">
                We believe in honesty and clarity. From documentation to visa
                filing, you’ll always know what’s happening at each stage — no
                hidden fees, no surprises.
              </p>
            </div>
          </div>

          {/* Right stacked boxes */}
          <div className="grid grid-rows-2 gap-4 md:h-[60vh]">
            {/* Box 1 */}
            <div className="relative rounded-3xl flex items-center justify-center text-2xl font-semibold h-[30vh] md:h-auto">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center rounded-3xl"
                style={{
                  backgroundImage: "url('/Uploads/about/why/end.jpg')",
                  zIndex: 0,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute bottom-3 p-4 text-background">
                <div className="text-lg font-semibold mb-1">
                  End-to-End Support
                </div>
                <p className="text-base max-w-4xl">
                  From counseling to pre-departure briefings, we support you
                  every step of the way — even after you arrive in your chosen
                  country.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="relative rounded-3xl flex items-center justify-center text-2xl font-semibold h-[30vh] md:h-auto">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center rounded-3xl"
                style={{
                  backgroundImage: "url('/Uploads/about/why/network.webp')",
                  zIndex: 0,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute bottom-3 p-4 text-background">
                <div className="text-lg font-semibold mb-1">
                  Global University Network
                </div>
                <p className="text-base max-w-4xl">
                  We partner with a wide range of reputed universities and
                  institutions worldwide, offering students access to the best
                  academic programs and scholarship opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-center mt-8 flex-col text-base md:text-xl gap-3">
        <p>Discover how KBM can guide your study abroad journey</p>
        <Link to="/about/why-choose-us">
          <button className="px-6 py-2 text-lg md:text-2xl bg-text text-white rounded-xl hover:scale-105 duration-500 ease-in-out">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
}
