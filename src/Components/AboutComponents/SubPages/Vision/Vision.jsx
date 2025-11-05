import React from "react";

export default function Vision() {
  return (
    <section className="mx-6 bg-[#058241] text-white flex items-center py-12 md:py-20 rounded-4xl ">
      <div className="container mx-auto p-6 md:p-10">
        {/* Use grid with auto height for flexible layout */}
        <div className="grid grid-rows-[auto_auto_auto] gap-8">
          {/* (01) and Heading */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-4xl md:text-7xl font-extralight italic">
              (01)
            </div>
            <div className="text-5xl md:text-8xl font-extrabold text-center md:text-right">
              Our Vision
            </div>
          </div>

          {/* Description */}
          <div className="flex items-center justify-center text-center px-4">
            <p className="max-w-6xl text-sm sm:text-base md:text-lg leading-relaxed">
              At KBM Education Consultancy, our vision is to empower students
              across the globe to achieve their academic and professional
              aspirations through personalized guidance and unwavering support.
              We strive to provide a transparent, comprehensive, and ethical
              approach to study abroad planning, ensuring each student receives
              tailored counseling, accurate information, and practical advice
              for every step of their journey—from selecting the right courses
              and universities to visa preparation and post-arrival support. By
              fostering a culture of trust, mentorship, and excellence, we aim
              to bridge the gap between students’ ambitions and opportunities
              worldwide, helping them navigate challenges with confidence. Our
              ultimate goal is to equip every student with the knowledge,
              resources, and skills necessary to succeed academically,
              professionally, and personally in their chosen destination.
            </p>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center overflow-hidden rounded-2xl">
            <img
              src="/Uploads/about/vision/vision.jpg"
              alt="Our Vision"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
