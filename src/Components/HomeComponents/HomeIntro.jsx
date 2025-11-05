import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/Context";
import { languageData } from "../../Hooks/language";

export default function HomeIntro() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "500+", label: "Happy Students" },
    { value: "90%", label: "Success Rate" },
  ];

  const {language} = useContext(LanguageContext)

  return (
    <section className="container mx-auto px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-8">
        {/* Left Side - Stats and Image */}
        <div className="flex items-center ">
          <div className="w-full space-y-8 flex items-center">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-xl rounded-l-2xl p-8 space-y-6 border border-gray-100"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  <span className="block text-gray-600 text-sm font-medium tracking-wide mt-1">
                    {stat.label}
                  </span>
                  {index < stats.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-gray-200 to-transparent mt-6"></div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-[70vh] overflow-hidden shadow-lg"
            >
              <img
                src="Uploads/home/intro2.png"
                alt="Travel Experience"
                className="h-full w-full object-cover  transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center space-y-6 bg-gray-100 p-6 rounded-2xl"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {
              language === "en" ? languageData.en.weareKBM : languageData.jp.weareKBM
            }
          </h1>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="text-lg ">
              {
                language === "en" ? languageData.en.para_1_KBM : languageData.jp.para_1_KBM
              }
            </p>

            <p className="text-lg ">
                            {
                language === "en" ? languageData.en.para_2_KBM : languageData.jp.para_2_KBM
              }
            </p>
          </div>

          <div className="pt-4">
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-text text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
              {
                language === "en" ? languageData.en.learnMore : languageData.jp.learnMore
              }
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
