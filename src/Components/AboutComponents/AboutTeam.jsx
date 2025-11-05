import React from "react";
import { motion } from "framer-motion";

export default function AboutTeam() {
  return (
    <section className="container mx-auto px-4 py-20">
      {/* Heading */}
      {/* <motion.div
        className="text-3xl md:text-5xl font-extrabold text-center md:text-left mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Who are behind Your Success?
      </motion.div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}

        <motion.div
          className="space-y-6 text-gray-700 "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Who’s Behind Your Success?
          </h2>
          <p className="text-justify text-lg">
            At{" "}
            <span className="font-semibold text-blue-700">
              KBM Education Consultancy
            </span>
            , our team of experienced counsellors, academic advisors, and
            international education experts are dedicated to helping you achieve
            your study abroad dreams. Each of our professionals brings years of
            experience in guiding students toward the right universities and
            programs in Japan, the USA, Australia, the UK, Canada, and beyond.
            <br />
            <br />
            We believe that success begins with personalized mentorship. From
            career counselling to application assistance, visa processing, and
            pre-departure sessions, our experts walk beside you at every step of
            your journey. Our mission is to ensure that every student receives
            transparent advice, genuine guidance, and lifelong support even
            after reaching their destination.
            <br />
            <br />
            With KBM, your goals are nurtured by people who truly care about
            your success — because your achievement is our greatest reward.
          </p>

          <button className="text-lg px-4 py-1 rounded-xl bg-text text-white hover:scale-105 duration-300">
            Meet Our Instructors
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-rows-2 gap-4">
            <motion.div
              className="h-60 overflow-hidden rounded-3xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="Uploads/home/intro2.png"
                alt="Team Member 1"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              className="h-60 overflow-hidden rounded-3xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="Uploads/home/hero2.png"
                alt="Team Member 2"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            className="h-full overflow-hidden rounded-3xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="Uploads/home/hero.avif"
              alt="Team Member 3"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
