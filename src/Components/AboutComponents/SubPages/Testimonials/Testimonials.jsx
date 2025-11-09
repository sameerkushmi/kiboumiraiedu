import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { languageData } from "../../../../Hooks/language";
import { LanguageContext } from '../../../../Context/Context'

export default function Testimonials() {

  const {language} = useContext(LanguageContext)

  const testimonials = [
    {
      id: 1,
      name: language === 'en' ? languageData.en.testimonialsName_1 : languageData.jp.testimonialsName_1,
      image: "/Uploads/home/prof.jpg",
      quote:language === 'en' ? languageData.en.testimonialsquote_1 : languageData.jp.testimonialsquote_1,
    },
    {
      id: 2,
      name: language === 'en' ? languageData.en.testimonialsName_2 : languageData.jp.testimonialsName_2,
      image: "/Uploads/home/prof.jpg",
      quote:language === 'en' ? languageData.en.testimonialsquote_2 : languageData.jp.testimonialsquote_2,
    },
    {
      id: 3,
      name: language === 'en' ? languageData.en.testimonialsName_3 : languageData.jp.testimonialsName_3,
      image: "/Uploads/home/prof.jpg",
      quote:language === 'en' ? languageData.en.testimonialsquote_3 : languageData.jp.testimonialsquote_3,
    },
    {
      id: 4,
      name: language === 'en' ? languageData.en.testimonialsName_4 : languageData.jp.testimonialsName_4,
      image: "/Uploads/home/prof.jpg",
      quote:language === 'en' ? languageData.en.testimonialsquote_4 : languageData.jp.testimonialsquote_4,
    },
    {
      id: 5,
      name: language === 'en' ? languageData.en.testimonialsName_5 : languageData.jp.testimonialsName_5,
      image: "/Uploads/home/prof.jpg",
      quote:language === 'en' ? languageData.en.testimonialsquote_5 : languageData.jp.testimonialsquote_5,
    },
    {
      id: 6,
      name: language === 'en' ? languageData.en.testimonialsName_6 : languageData.jp.testimonialsName_6,
      image: "/Uploads/home/prof.jpg",
      quote:language === 'en' ? languageData.en.testimonialsquote_6 : languageData.jp.testimonialsquote_6,
    },
    {
      id: 7,
      name: language === 'en' ? languageData.en.testimonialsName_7 : languageData.jp.testimonialsName_7,
      image: "/Uploads/home/prof.jpg",
      quote:language === 'en' ? languageData.en.testimonialsquote_7 : languageData.jp.testimonialsquote_7,
    },
    {
      id: 8,
      name: language === 'en' ? languageData.en.testimonialsName_8 : languageData.jp.testimonialsName_8,
      image: "/Uploads/home/prof.jpg",
      quote:language === 'en' ? languageData.en.testimonialsquote_8 : languageData.jp.testimonialsquote_8,
    },
    {
      id: 9,
      name: language === 'en' ? languageData.en.testimonialsName_9 : languageData.jp.testimonialsName_9,
      image: "/Uploads/home/prof.jpg",
      quote:language === 'en' ? languageData.en.testimonialsquote_9 : languageData.jp.testimonialsquote_9,
    },
    {
      id: 10,
      name: language === 'en' ? languageData.en.testimonialsName_10 : languageData.jp.testimonialsName_10,
      image: "/Uploads/home/prof.jpg",
      quote:language === 'en' ? languageData.en.testimonialsquote_10 : languageData.jp.testimonialsquote_10,
    },
    {
      id: 11,
      name: language === 'en' ? languageData.en.testimonialsName_11 : languageData.jp.testimonialsName_11,
      image: "/Uploads/home/prof.jpg",
      quote:language === 'en' ? languageData.en.testimonialsquote_11 : languageData.jp.testimonialsquote_11,
    },
    {
      id: 12,
      name: language === 'en' ? languageData.en.testimonialsName_12 : languageData.jp.testimonialsName_12,
      image: "/Uploads/home/prof.jpg",
      quote:language === 'en' ? languageData.en.testimonialsquote_12 : languageData.jp.testimonialsquote_12,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleTestimonials = testimonials.slice(0, visibleCount);

  return (
    <div className="min-h-screen my-12 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row">
        {/* Title Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white lg:sticky lg:top-0 lg:h-screen mb-8 lg:mb-0">
          <div className="max-w-md p-4 md:p-8 text-center lg:text-left">
            <div className="relative">
              {/* <div className="absolute -top-10 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 opacity-30"> */}
              <Link to="/" className="block h-48 w-48 opacity-25">
                <div className="absolute inset-0 bg-[url('/Uploads/main/logo.png')] bg-contain bg-center bg-no-repeat scale-125"></div>
              </Link>

              {/* Main heading */}
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  {
                    language === 'en' ? languageData.en.testimonialsHeader : languageData.jp.testimonialsHeader
                  }
                </h1>
                <p className="text-gray-600 text-base md:text-lg">
                  {
                    language === 'en' ? languageData.en.testimonialsDesc : languageData.jp.testimonialsDesc
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          {visibleTestimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                />

                {/* Quote and Name */}
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed italic mb-3 text-justify">
                    “{item.quote}”
                  </p>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    — {item.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Load More Button */}
          {visibleCount < testimonials.length && (
            <div className="flex justify-center mt-4">
              <button
                onClick={handleLoadMore}
                className="px-6 py-2 bg-text text-white rounded-full  transition-colors duration-300"
              >
                {language === 'en' ? languageData.en.viewMore : languageData.jp.viewMore}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
