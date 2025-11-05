import React from "react";

export default function HomeCta() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: "url('/Uploads/home/three.jpeg')",
        }}
      ></div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-radial from-black/30 from-20% to-black"></div>

      {/* Text Content */}
      <div className="relative text-center z-10">
        <div className="flex items-center flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Start Your Aborad Jounry
          </h1>
          <p className="text-lg md:text-xl max-w-3xl ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            mollitia, assumenda ad ipsam facere quaerat ullam iusto quo
          </p>
          <button className="text-xl md:text-3xl px-4 py-1 bg-white text-primary rounded-2xl">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
