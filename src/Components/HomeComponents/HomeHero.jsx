import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomeHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const mediaItems = [
    {
      id: 1,
      title: "Study In Japan 🇯🇵",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, hic!",
      image: "/Uploads/home/hero/japan.png",
      video: "Uploads/home/hero.mp4",
    },
    {
      id: 2,
      title: "Study In USA 🇺🇸",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, hic!",
      image: "/Uploads/home/hero/usa.jpg",
      video: "Uploads/home/hero.mp4",
    },
    {
      id: 3,
      title: "Study In Australia 🇦🇺",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, hic!",
      image: "/Uploads/home/three.jpeg",
      video: "Uploads/home/hero.mp4",
    },
    {
      id: 4,
      title: "Study in Canada 🇨🇦",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, hic!",
      image: "/Uploads/home/four.jpeg",
      video: "Uploads/home/hero.mp4",
    },
  ];

  const handleMediaClick = (item) => {
    setSelectedMedia(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="relative h-[85vh] overflow-hidden mx-6 my-6 rounded-4xl mt-[12vh]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-left ">
          <video autoPlay muted loop className="h-full w-full object-cover">
            <source src="Uploads/home/hero.mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/20 to-black"></div>
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 h-full flex flex-col px-8 lg:px-20 max-w-[1600px] mx-auto">
          {/* Top Section - Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center items-start text-white pt-12 lg:pt-20 space-y-6"
          >
            {/* Tagline */}
            {/* <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-text backdrop-blur-sm text-white rounded-full inline-block py-2 px-6 text-sm md:text-base font-medium tracking-wide shadow-sm"
            >
              Study, Work, and Grow Worldwide
            </motion.div> */}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-7xl font-extrabold tracking-tight leading-tight line-clamp-3"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Your Global Pathway <br className="hidden sm:block" /> to
              Education & Career
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base lg:text-xl max-w-2xl text-white/90 font-light tracking-wide line-clamp-4"
            >
              We help students and professionals achieve their dreams abroad —
              whether it's Japan, USA, Australia, UK, Canada, or other
              countries. From visas and documentation to pre-departure guidance
              and cultural adaptation, we support you at every step of your
              international journey.
            </motion.p>

            {/* CTA Button */}
            <Link to="/about">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-text text-white px-10 py-4 rounded-lg font-extrabold transition w-fit tracking-wider text-md"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>

          {/* Bottom Right - Horizontal Scrollable Container */}
          <div className="flex items-end justify-end mt-auto pb-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full max-w-xl flex gap-6 overflow-x-auto pb-4"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(255, 255, 255, 0.3) transparent",
              }}
            >
              {mediaItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleMediaClick(item)}
                  className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer group flex-shrink-0 w-72 h-40"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className=" rounded-full p-4 shadow-lg"
                    >
                      <Play className="w-7 h-7 text-white fill-white" />
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 py-2 text-white">
                    <h3 className="text-xl font-medium tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={closeModal}
            whileHover={{ scale: 1.1 }}
            className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition z-10"
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative max-w-5xl w-full bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedMedia.video}
              autoPlay
              loop
              className="w-full h-auto max-h-[80vh] object-contain"
            ></video>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">{selectedMedia.title}</h2>
              <p className="text-lg text-white/90">{selectedMedia.subtitle}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
