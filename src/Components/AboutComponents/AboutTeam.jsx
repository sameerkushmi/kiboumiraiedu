import { useContext } from "react";
import { languageData } from "../../Hooks/language";
import { motion } from "framer-motion";
import { LanguageContext } from "../../Context/Context";

export default function AboutTeam() {

  const {language} = useContext(LanguageContext)

  return (
    <section className="container mx-auto px-4 py-20">
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
            {
              language === 'en' ? languageData.en.aboutTeamHeader: languageData.jp.aboutTeamHeader
            }
          </h2>
          <p className="text-justify text-lg">
            {
              language === 'en' ? languageData.en.at : languageData.jp.at
            }
            {" "}
            <span className="font-semibold text-blue-700">
            {
              language === 'en' ? languageData.en.KBM: languageData.jp.KBM
            }
            {
              language === 'en' ? languageData.en.consultancy: languageData.jp.consultancy
            }
            </span>
            {
              language === 'en' ? languageData.en.aboutTeamPara_1: languageData.jp.aboutTeamPara_1
            }
            <br />
            <br />
            {
              language === 'en' ? languageData.en.aboutTeamPara_2: languageData.jp.aboutTeamPara_2
            }
            <br />
            <br />
            {
              language === 'en' ? languageData.en.aboutIntroPara_3: languageData.jp.aboutIntroPara_3
            }
          </p>

          <button className="text-lg px-4 py-1 rounded-xl bg-text text-white hover:scale-105 duration-300">
            {
              language === 'en' ? languageData.en.meetOurInstructors: languageData.jp.meetOurInstructors
            }
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
