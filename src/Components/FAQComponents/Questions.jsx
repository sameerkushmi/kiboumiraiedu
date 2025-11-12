import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { languageData } from "../../Hooks/language";
import { LanguageContext } from "../../Context/Context";

export default function Question() {
  const {language} = useContext(LanguageContext)
  const [openIndex, setOpenIndex] = useState(null);

 const faqs = [
  {
    number: "01",
    question: language === 'en' ? languageData.en.QNA1 : languageData.jp.QNA1,
    subtitle: language === 'en' ? languageData.en.questionSubtitle1 : languageData.jp.questionSubtitle1,
    answer: language === 'en' ? languageData.en.questionAnswer1 : languageData.jp.questionAnswer1,
  },
  {
    number: "02",
    question: language === 'en' ? languageData.en.QNA2 : languageData.jp.QNA2,
    subtitle: language === 'en' ? languageData.en.questionSubtitle2 : languageData.jp.questionSubtitle2,
    answer: language === 'en' ? languageData.en.questionAnswer2 : languageData.jp.questionAnswer2,
  },
  {
    number: "03",
    question: language === 'en' ? languageData.en.QNA3 : languageData.jp.QNA3,
    subtitle: language === 'en' ? languageData.en.questionSubtitle3 : languageData.jp.questionSubtitle3,
    answer: language === 'en' ? languageData.en.questionAnswer3 : languageData.jp.questionAnswer3,
  },
  {
    number: "04",
    question: language === 'en' ? languageData.en.QNA4 : languageData.jp.QNA4,
    subtitle: language === 'en' ? languageData.en.questionSubtitle4 : languageData.jp.questionSubtitle4,
    answer: language === 'en' ? languageData.en.questionAnswer4 : languageData.jp.questionAnswer4,
  },
  {
    number: "05",
    question: language === 'en' ? languageData.en.QNA5 : languageData.jp.QNA5,
    subtitle: language === 'en' ? languageData.en.questionSubtitle5 : languageData.jp.questionSubtitle5,
    answer: language === 'en' ? languageData.en.questionAnswer5 : languageData.jp.questionAnswer5,
  },
  {
    number: "06",
    question: language === 'en' ? languageData.en.QNA6 : languageData.jp.QNA6,
    subtitle: language === 'en' ? languageData.en.questionSubtitle6 : languageData.jp.questionSubtitle6,
    answer: language === 'en' ? languageData.en.questionAnswer6 : languageData.jp.questionAnswer6,
  },
  {
    number: "07",
    question: language === 'en' ? languageData.en.QNA7 : languageData.jp.QNA7,
    subtitle: language === 'en' ? languageData.en.questionSubtitle7 : languageData.jp.questionSubtitle7,
    answer: language === 'en' ? languageData.en.questionAnswer7 : languageData.jp.questionAnswer7,
  },
  {
    number: "08",
    question: language === 'en' ? languageData.en.QNA8 : languageData.jp.QNA8,
    subtitle: language === 'en' ? languageData.en.questionSubtitle8 : languageData.jp.questionSubtitle8,
    answer: language === 'en' ? languageData.en.questionAnswer8 : languageData.jp.questionAnswer8,
  },
  {
    number: "09",
    question: language === 'en' ? languageData.en.QNA9 : languageData.jp.QNA9,
    subtitle: language === 'en' ? languageData.en.questionSubtitle9 : languageData.jp.questionSubtitle9,
    answer: language === 'en' ? languageData.en.questionAnswer9 : languageData.jp.questionAnswer9,
  },
  {
    number: "10",
    question: language === 'en' ? languageData.en.QNA10 : languageData.jp.QNA10,
    subtitle: language === 'en' ? languageData.en.questionSubtitle10 : languageData.jp.questionSubtitle10,
    answer: language === 'en' ? languageData.en.questionAnswer10 : languageData.jp.questionAnswer10,
  },
  {
    number: "11",
    question: language === 'en' ? languageData.en.QNA11 : languageData.jp.QNA11,
    subtitle: language === 'en' ? languageData.en.questionSubtitle11 : languageData.jp.questionSubtitle11,
    answer: language === 'en' ? languageData.en.questionAnswer11 : languageData.jp.questionAnswer11,
  },
  {
    number: "12",
    question: language === 'en' ? languageData.en.QNA12 : languageData.jp.QNA12,
    subtitle: language === 'en' ? languageData.en.questionSubtitle12 : languageData.jp.questionSubtitle12,
    answer: language === 'en' ? languageData.en.questionAnswer12 : languageData.jp.questionAnswer12,
  },
  {
    number: "13",
    question: language === 'en' ? languageData.en.QNA13 : languageData.jp.QNA13,
    subtitle: language === 'en' ? languageData.en.questionSubtitle13 : languageData.jp.questionSubtitle13,
    answer: language === 'en' ? languageData.en.questionAnswer13 : languageData.jp.questionAnswer13,
  },
  {
    number: "14",
    question: language === 'en' ? languageData.en.QNA14 : languageData.jp.QNA14,
    subtitle: language === 'en' ? languageData.en.questionSubtitle14 : languageData.jp.questionSubtitle14,
    answer: language === 'en' ? languageData.en.questionAnswer14 : languageData.jp.questionAnswer14,
  },
  {
    number: "15",
    question: language === 'en' ? languageData.en.QNA15 : languageData.jp.QNA15,
    subtitle: language === 'en' ? languageData.en.questionSubtitle15 : languageData.jp.questionSubtitle15,
    answer: language === 'en' ? languageData.en.questionAnswer15 : languageData.jp.questionAnswer15,
  },
];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen my-12 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row">
        {/* Title Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white lg:sticky lg:top-0 lg:h-screen mb-8 lg:mb-0">
          <div className="max-w-md p-4 md:p-8 text-center lg:text-left">
            <div className="relative">
              <Link to="/" className="block h-48 w-48 opacity-25">
                <div className="absolute inset-0 bg-[url('/Uploads/main/logo.png')] bg-contain bg-center bg-no-repeat scale-125"></div>
              </Link>

              {/* Main heading */}
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  {
                    language === 'en' ? languageData.en.questionHeader : languageData.jp.questionHeader
                  }
                </h1>
                <p className="text-gray-600 text-base md:text-lg">
                 {
                  language === 'en' ? languageData.en.questionDesc : languageData.jp.questionDesc
                 }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
                  >
                    <div className="flex items-start gap-4 text-left flex-1">
                      {/* Number */}
                      <div className="text-text font-extrabold text-2xl">
                        {faq.number}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">
                          {faq.question}
                        </h3>
                        <p className="text-gray-500 text-sm">{faq.subtitle}</p>
                      </div>
                    </div>

                    {/* Toggle Icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 ml-4"
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-gray-400" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400" />
                      )}
                    </motion.div>
                  </button>

                  {/* Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: { duration: 0.3, ease: "easeOut" },
                            opacity: { duration: 0.2, delay: 0.1 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.2, ease: "easeIn" },
                            opacity: { duration: 0.1 },
                          },
                        }}
                        className="overflow-hidden border-t border-gray-100"
                      >
                        <div className="p-6 pl-20">
                          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
