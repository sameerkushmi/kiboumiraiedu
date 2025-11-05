import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const content = [
  {
    id: 1,
    name: "Counseling",
    fullName: "Personalized Career & Study Counseling",
    tags: ["Guidance", "Career Planning", "University Selection"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    description:
      "We provide one-on-one counseling sessions to help students choose the right country, university, and course based on their academic background and career goals. Our experienced counselors ensure you make informed decisions for your future abroad.",
    href: "/services/career-counseling",
  },
  {
    id: 2,
    name: "Documentation",
    fullName: "Document Preparation & Application Support",
    tags: ["SOP", "Financial Documents", "Application Forms"],
    image: "/Uploads/home/services/docs.avif",
    description:
      "From preparing your Statement of Purpose to organizing financial and academic documents, our team ensures that every paper meets embassy and university standards. We guide you through every step of the application process with accuracy and care.",
    href: "/services/documentation",
  },
  {
    id: 3,
    name: "Visa Processing",
    fullName: "Visa Application & Interview Preparation",
    tags: ["Visa Filing", "Interview Guidance", "Embassy Support"],
    image: "/Uploads/home/services/vias.png",
    description:
      "Our experts assist in preparing all necessary visa documents and offer mock interview sessions to build your confidence. We stay updated with the latest immigration rules to ensure a smooth visa approval process.",
    href: "/services/visa-assistance",
  },
];

export default function HomeServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const imageVariants = {
    enter: {
      scale: 1.2,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0.8,
      opacity: 0,
    },
  };

  const currentContent = content[currentIndex];

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % content.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + content.length) % content.length);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-12 flex items-center flex-col gap-4">
        <h1 className="text-4xl lg:text-5xl text-center font-extrabold text-blue leading-tight ">
          Explore Our Services
        </h1>
        <p className="max-w-3xl text-center text-base md:text-lg mx-auto">
          KBM Education Consultancy helps students and professionals achieve
          their dreams abroad. We provide visa assistance, mentorship, and
          career guidance for Japan, USA, Australia, UK, Canada, and more.
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-12 min-h-[500px] rounded-4xl shadow-2xl relative">
        {/* Navigation Arrow - Left */}
        <button
          onClick={goToPrev}
          className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-amber-50 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg z-20 border border-gray-200"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-amber-500" />
        </button>

        {/* Left Image Section - 40% */}
        <div className="col-span-5 relative overflow-hidden ">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img
                src={currentContent.image}
                alt={currentContent.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-transparent"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Content Section - 60% */}
        <div className="col-span-7 bg-white overflow-hidden relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="p-8 lg:p-12 relative z-10"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-5xl lg:text-6xl font-bold text-blue mb-2">
                    {currentContent.name}
                  </h2>
                  <p className="text-xl text-gray-700 font-medium">
                    {currentContent.fullName}
                  </p>
                </div>

                <div className="flex gap-3 flex-wrap">
                  {currentContent.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-6 py-2 bg-text/10 text-text rounded-full font-medium text-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed text-justify">
                  {currentContent.description}
                </p>
                <Link to={currentContent.href}>
                  <button className="bg-text text-white text-lg font-extrabold px-4 py-1 rounded-sm">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Large Background Number */}
          <div className="absolute bottom-0 right-6 text-[250px] font-bold text-blue/10 leading-none pointer-events-none">
            0{currentContent.id}
          </div>
        </div>

        {/* Navigation Arrow - Right */}
        <button
          onClick={goToNext}
          className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-amber-50 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg z-20 border border-gray-200"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-amber-500" />
        </button>
      </div>

      {/* Mobile Layout - Horizontal Carousel */}
      <div className="md:hidden relative">
        {/* Navigation Arrow - Left Mobile */}
        <button
          onClick={goToPrev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white hover:bg-amber-50 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg z-20 border border-gray-200"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-amber-500" />
        </button>

        <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-6"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={currentContent.image}
                  alt={currentContent.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-500/20"></div>

                {/* Navigation Arrows on Mobile */}
                {/* <button
                  onClick={goToPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5 text-amber-500" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5 text-amber-500" />
                </button> */}
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-4xl font-bold text-blue mb-1">
                      {currentContent.name}
                    </h2>
                    <p className="text-lg text-gray-700 font-medium">
                      {currentContent.fullName}
                    </p>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {currentContent.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 bg-background text-text rounded-full font-medium text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm">
                    {currentContent.description}
                  </p>
                  <Link to={currentContent.href}>
                    <button className="bg-text text-white font-lg font-extrabold px-4 py-1 rounded-sm">
                      Learn More
                    </button>
                  </Link>
                </div>

                {/* Large Background Number */}
                <div className="absolute bottom-0 right-0 text-[120px] font-bold text-blue/20 leading-none pointer-events-none">
                  0{currentContent.id}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 pb-6">
            {content.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-amber-500 scale-125"
                    : "bg-amber-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrow - Right Mobile */}
        <button
          onClick={goToNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white hover:bg-amber-50 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg z-20 border border-gray-200"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-amber-500" />
        </button>
      </div>
    </section>
  );
}
