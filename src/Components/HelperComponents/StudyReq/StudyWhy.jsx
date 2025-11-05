import React from "react";
import { motion } from "framer-motion";

export default function StudyWhy({
  title,
  description,
  reasons,
  backgroundImage,
}) {
  return (
    <section
      className="relative py-20 px-6 md:px-12 bg-fixed bg-cover bg-center mx-6 my-16 rounded-4xl"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-4xl"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-200 mb-12"
        >
          {description}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 border border-white/20 bg-gray-600/10 backdrop-blur-md rounded-2xl"
            >
              <div className="flex items-start space-x-3">
                <span className="text-white font-semibold  text-lg md:text-2xl">
                  {index + 1}.
                </span>
                <p className="text-base md:text-xl leading-relaxed text-gray-100">
                  {reason}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
