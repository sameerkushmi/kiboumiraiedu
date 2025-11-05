import React from "react";
import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="relative bg-white text-black overflow-hidden ">
      {/* Angled Background with Parallax Effect */}
      <motion.div
        className="absolute inset-0 w-full h-[75vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 90%)",
            backgroundImage: "url('Uploads/home/one.jpeg')",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900/60 via-purple-900/50 to-black/60"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 90%)",
          }}
        />
        <motion.div
          className="absolute inset-0 w-full h-full opacity-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 90%)",
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24 max-w-[1600px]">
        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Image Gallery - 40% */}
          <motion.div
            className="col-span-12 lg:col-span-5 relative"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative bg-white/80 backdrop-blur-xl p-2  rounded-[2.5rem] shadow-2xl border border-white/20">
              <div className="grid grid-cols-5 grid-rows-4 gap-4 h-[500px]">
                <motion.div
                  className="col-span-3 row-span-4 relative overflow-hidden rounded-3xl group"
                  whileHover={{ scale: 1.02, rotate: 0.5 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <img
                    src="Uploads/home/hero.avif"
                    alt="KBM Education Consultancy"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                <motion.div
                  className="col-span-2 row-span-2 relative overflow-hidden rounded-3xl group"
                  whileHover={{ scale: 1.02, rotate: -0.5 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                >
                  <img
                    src="Uploads/about/intro1.png"
                    alt="Student Success"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                <motion.div
                  className="col-span-2 row-span-2 relative overflow-hidden rounded-3xl group"
                  whileHover={{ scale: 1.02, rotate: 0.5 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                >
                  <img
                    src="Uploads/about/intro2.jpeg"
                    alt="Expert Guidance"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-bl from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 -z-10" />
            </div>
          </motion.div>

          {/* Content Box - 60% */}
          <motion.div
            className="col-span-12 lg:col-span-7 relative"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="bg-white rounded-[2.5rem] p-10 lg:p-12 shadow-2xl border border-gray-100/50 relative overflow-hidden max-h-[600px]">
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)",
                    backgroundSize: "30px 30px",
                  }}
                />
              </div>

              <motion.h1
                className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 text-gray-900 leading-tight relative"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                We're{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    KBM Education
                  </span>
                </span>{" "}
                Consultancy
              </motion.h1>

              <motion.div
                className="space-y-4 text-gray-700 text-base lg:text-lg leading-relaxed relative overflow-y-auto max-h-[380px] pr-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-1 first-letter:float-left">
                  KBM Education Consultancy is committed to empowering students
                  to achieve their dreams of studying abroad. With years of
                  experience, we provide trusted guidance in university
                  selection, visa processing, and pre-departure support for
                  destinations including Japan, Australia, the UK, the USA, and
                  Canada.
                </p>

                <p>
                  Our dedicated team ensures each student receives personalized
                  counseling and continuous support throughout their academic
                  journey — from choosing the right course to settling into a
                  new environment abroad.
                </p>

                <p className="italic">
                  “Guiding your journey beyond borders — from aspirations to
                  global success.”
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
