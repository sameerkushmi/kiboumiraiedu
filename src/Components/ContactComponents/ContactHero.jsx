import React from "react";
import MainHeroHelper from "../HelperComponents/MainHeroHelper";

export default function ContactHero() {
  return (
    <>
      <MainHeroHelper
        title="Contact Us"
        description="Have questions or need guidance? Reach out to our team for personalized support on study abroad programs, admissions, and student services. We're here to help you every step of the way."
      />
    </>
  );
}

// import React from "react";
// import { motion } from "framer-motion";
// import { Globe2, PlaneTakeoff, GraduationCap } from "lucide-react";

// export default function ContactHero() {
//   return (
//     <section
//       className="relative mt-[12vh] py-24 px-6 md:px-16 text-center overflow-hidden
//                  bg-cover bg-center bg-fixed"
//       style={{
//         backgroundImage: `url('https://i.ibb.co/Y7H3R7f/kbm-consultancy-bg.jpg')`,
//       }}
//     >
//       {/* Overlay for readability */}
//       <div className="absolute inset-0 bg-white bg-opacity-25 backdrop-blur-sm z-0"></div>

//       {/* Animated Gradient Circles */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse z-0"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-30 animate-pulse z-0"></div>

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 max-w-4xl mx-auto"
//       >
//         {/* Icons */}
//         <div className="flex justify-center gap-4 mb-8">
//           <Globe2 className="text-blue-600 w-10 h-10" />
//           <PlaneTakeoff className="text-yellow-500 w-10 h-10" />
//           <GraduationCap className="text-green-600 w-10 h-10" />
//         </div>

//         {/* Title */}
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-5 leading-tight">
//           <span className="text-blue-700">KBM Consultancy</span> — Your Gateway
//           to Global Education
//         </h1>

//         {/* Subtitle */}
//         <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto">
//           We guide students to success across the world — from{" "}
//           <span className="text-blue-600 font-semibold">Japan</span> to{" "}
//           <span className="text-yellow-600 font-semibold">
//             Western countries
//           </span>
//           . Explore global opportunities with confidence and expert guidance.
//         </p>

//         {/* CTA Button */}
//         <motion.a
//           href="#contact"
//           whileHover={{ scale: 1.08 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-block bg-blue-600 text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
//         >
//           Get in Touch
//         </motion.a>

//         {/* Tagline */}
//         <p className="mt-6 text-sm text-gray-600">
//           Empowering Dreams • Building Global Futures 🌍
//         </p>
//       </motion.div>
//     </section>
//   );
// }
