import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ReqAccordion({
  title,
  subtitle,
  items,
  backgroundImage,
  ctaText,
  onCtaClick,
  accentColor = "text-amber-400",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative w-full min-h-screen bg-blue overflow-hidden">
      {/* Background Image Overlay */}
      {backgroundImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      <div className="relative z-10 w-full min-h-screen py-8 px-4 sm:px-6 lg:px-8 ">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex items-center flex-col mb-12 space-y-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block  text-background px-6 py-2 text-3xl md:text-6xl font-extrabold tracking-wide"
          >
            {title}
          </motion.div>
          {subtitle && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-3xl text-white  text-xl md:text-2xl font-light tracking-wide"
            >
              {subtitle}
            </motion.h2>
          )}
        </motion.div>

        {/* Mobile/Tablet Accordion */}
        <div className="block lg:hidden space-y-4 max-w-2xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
              className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <motion.div
                animate={{
                  height: activeIndex === index ? "auto" : "96px",
                  minHeight: activeIndex === index ? "340px" : "96px",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-950"></div>
                <div className="bg-black absolute inset-0 opacity-40"></div>

                {/* Card Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-start">
                  {/* Top: Title */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {item.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="mt-6 space-y-4"
                      >
                        <ul className="space-y-3">
                          {item.content.map((point, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="text-gray-200 text-sm leading-relaxed pl-4 border-l-2 border-blue-400/50 flex items-start"
                            >
                              <span className="mr-2">•</span>
                              {point}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Horizontal Accordion */}
        <div className="hidden lg:block">
          <div className="flex h-[500px] gap-2 max-w-7xl mx-auto rounded-2xl overflow-hidden">
            {items.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    flex: isActive ? "4 1 0%" : "1 1 0%",
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.4, 0, 0.2, 1],
                    opacity: { duration: 0.3 },
                  }}
                  whileHover={!isActive ? { flex: "1.2 1 0%" } : {}}
                  onClick={() => handleSlideClick(index)}
                  className="relative cursor-pointer overflow-hidden group"
                >
                  {/* Background gradient */}
                  <motion.div
                    animate={{
                      opacity: isActive ? 0.8 : 0.6,
                      scale: isActive ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-black"
                  />

                  {/* Vertical Label */}
                  <motion.div
                    animate={{
                      opacity: isActive ? 0 : 1,
                      x: isActive ? 16 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-1/2 left-8 z-20"
                    style={{
                      transform: "rotate(-90deg) translateX(-50%)",
                      transformOrigin: "left center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="text-white font-medium text-base tracking-wider uppercase">
                      {item.title}
                    </span>
                  </motion.div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center p-12 z-20"
                      >
                        <div className="max-w-2xl w-full">
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="text-white text-3xl font-bold mb-8"
                          >
                            {item.title}
                          </motion.h3>
                          <ul className="space-y-4">
                            {item.content.map((point, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: 0.4 + i * 0.1,
                                }}
                                className="text-gray-200 text-base leading-relaxed pl-6 border-l-2 border-blue-400/50"
                              >
                                {point}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>

                  {/* Border highlight */}
                  <motion.div
                    animate={{
                      borderColor: isActive
                        ? "rgba(96, 165, 250, 0.4)"
                        : "transparent",
                    }}
                    whileHover={
                      !isActive
                        ? { borderColor: "rgba(255, 255, 255, 0.2)" }
                        : {}
                    }
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 border-2 rounded-lg pointer-events-none"
                  ></motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        {/* {ctaText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCtaClick}
              className="px-8 py-3 bg-white hover:bg-gray-200 text-black font-semibold text-sm transition-colors duration-300 shadow-lg"
            >
              {ctaText}
            </motion.button>
          </motion.div>
        )} */}
      </div>
    </section>
  );
}
