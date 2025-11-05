import React from "react";

export default function HeroSection() {
  return (
    <>
      <section className="relative h-[70vh]  mt-[10vh]">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center rounded-4xl"
          style={{
            backgroundImage: "url('/Uploads/about/hero.jpg')",
            zIndex: 0,
          }}
        ></div>

        <div className="absolute bg-gradient-to-r from-black  to-transparent inset-0 rounded-4xl" />
        <div className="absolute text-white left-6 bottom-10">
          <div className="flex flex-col items-start gap-6 ">
            <h1 className="text4xl md:text-7xl font-extrabold">Our Team</h1>
            <p className="max-w-3xl text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quibusdam, animi quo eum ipsam dolores explicabo sunt, nam quasi
              eius voluptatum ad! Vitae repellat provident blanditiis inventore
              ullam. Dicta, sapiente?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
