import { ArrowUpRight } from "lucide-react";
import { useContext } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/Context";
import { languageData } from "../../Hooks/language";

export default function HomeTestimonials() {

  const {language} = useContext(LanguageContext)
  const testimonials = [
    {
      id: 1,
      name: language === 'en' ? languageData.en.AaravSharma : languageData.jp.AaravSharma,
      role:language === 'en' ? languageData.en.studentJapan : languageData.jp.studentJapan,
      image: "Uploads/home/prof.jpg",
      quote:language === 'en' ? languageData.en.homeTestimonialsQuote_1 : languageData.jp.homeTestimonialsQuote_1,
      bg: "bg-text/80 text-white",
    },

    {
      id: 2,
      name: language === 'en' ? languageData.en.priyaKarki : languageData.jp.priyaKarki,
      role: language === 'en' ? languageData.en.undergraduateStudentAustralia : languageData.jp.undergraduateStudentAustralia,
      image: "Uploads/home/prof.jpg",
      quote:language === 'en' ? languageData.en.homeTestimonialsQuote_2 : languageData.jp.homeTestimonialsQuote_2,
      bg: "bg-white text-gray-900 shadow-2xl",
    },
    {
      id: 3,
      name: language === 'en' ? languageData.en.rohitThapa : languageData.jp.rohitThapa,
      role: language === 'en' ? languageData.en.graduateUnitedStates : languageData.jp.graduateUnitedStates,
      image: "Uploads/home/prof.jpg",
      quote:language === 'en' ? languageData.en.homeTestimonialsQuote_3 : languageData.jp.homeTestimonialsQuote_3,
      bg: "bg-text/80 text-white shadow-xl",
    },
    {
      id: 4,
      name: language === 'en' ? languageData.en.sanjanaRai : languageData.jp.sanjanaRai,
      role: language === 'en' ? languageData.en.researchUnitedKingdom : languageData.jp.researchUnitedKingdom,
      image: "Uploads/home/prof.jpg",
      quote: language === 'en' ? languageData.en.homeTestimonialsQuote_4 : languageData.jp.homeTestimonialsQuote_4,
      bg: "bg-blue text-white",
    },
    // {
    //   id: 5,
    //   name: "Anish Gurung",
    //   role: "Diploma Student – Canada",
    //   image: "Uploads/home/prof.jpg",
    //   quote:
    //     "I’m now studying in Toronto, and it still feels unreal! KBM guided me through every stage — documentation, visa, and post-landing advice. Their encouragement gave me the confidence to start a new life here successfully.",
    //   bg: "bg-white text-gray-900 shadow-2xl",
    // },
  ];

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 my-12 mx-6">
        <div className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10">
          <h1 className="mb-3 text-blue">
            {
              language === 'en' ? languageData.en.transformingFutures : languageData.jp.transformingFutures
            }
          </h1>
          <h2 className="text-blue/80 text-2xl md:text-4xl ">
            {
              language === 'en' ? languageData.en.homeTestimonialHeader : languageData.jp.homeTestimonialHeader
            }
          </h2>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] gap-3">
            <div
              className={`${testimonials[0].bg} rounded-3xl p-4 sm:p-6 flex flex-col items-start justify-between min-h-[250px] sm:min-h-[300px]`}
            >
              <div className="text-sm sm:text-base">
                <p className="text-4xl md:text-6xl font-extrabold mb-7 md:mb-9">
                  {
                    language === 'en' ? languageData.en.visaGranted : languageData.jp.visaGranted
                  }
                  {" "}
                  <span className="inline-block">
                    {
                      language === 'en' ? languageData.en.visaGranted : languageData.jp.visaGranted
                    } 
                    🇦🇺</span>
                </p>

                <span className="block pr-2 mb-2">
                  <FaQuoteLeft />
                </span>
                {testimonials[0].quote}
              </div>
              <div className="flex gap-3 mt-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                  <img
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    className="overflow-hidden rounded-full h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-sm sm:text-base">
                  <div className="font-semibold">{testimonials[0].name}</div>
                  <div className="text-white">{testimonials[0].role}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-rows-1 lg:grid-rows-2 gap-3">
              <div
                className={`${testimonials[1].bg} rounded-3xl p-4 sm:p-6 flex flex-col items-start justify-between min-h-[250px] sm:min-h-[300px]`}
              >
                <div className="text-sm sm:text-base">
                  <span className="block pr-2 mb-2">
                    <FaQuoteLeft />
                  </span>
                  {testimonials[1].quote}
                </div>
                <div className="flex gap-3 mt-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                    <img
                      src={testimonials[1].image}
                      alt={testimonials[1].name}
                      className="overflow-hidden rounded-full h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-sm sm:text-base">
                    <div className="font-semibold">{testimonials[1].name}</div>
                    <div className="text-gray-600">{testimonials[1].role}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  className={`${testimonials[2].bg} rounded-3xl p-4 sm:p-6 flex flex-col items-start justify-between min-h-[250px]`}
                >
                  <div className="text-sm sm:text-base">
                    <span className="block pr-2 mb-2">
                      <FaQuoteLeft />
                    </span>
                    {testimonials[2].quote}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                      <img
                        src={testimonials[2].image}
                        alt={testimonials[2].name}
                        className="overflow-hidden rounded-full h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col text-sm sm:text-base">
                      <div className="font-semibold">
                        {testimonials[2].name}
                      </div>
                      <div className="text-white">{testimonials[2].role}</div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${testimonials[3].bg} rounded-3xl p-4 sm:p-6 flex flex-col items-start justify-between min-h-[250px]`}
                >
                  <div className="text-sm sm:text-base">
                    <span className="block pr-2 mb-2">
                      <FaQuoteLeft />
                    </span>
                    {testimonials[3].quote}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                      <img
                        src={testimonials[3].image}
                        alt={testimonials[3].name}
                        className="overflow-hidden rounded-full h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col text-sm sm:text-base">
                      <div className="font-semibold">
                        {testimonials[3].name}
                      </div>
                      <div className="">{testimonials[3].role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-4 sm:gap-0 mt-6 mb-16">
          <div className="text-base sm:text-lg text-center sm:text-left">
            {
              language === 'en' ? languageData.en.satisfiedStudents : languageData.jp.satisfiedStudents
            }
          </div>
          <div>
            <Link to="/about/testimonials">
              <button className="px-4 sm:px-6 py-2 bg-background shadow-xl text-text text-base sm:text-lg font-extrabold rounded-xl flex items-center gap-2 hover:bg-gray-200 transition-colors">
                <div>
                  {
                    language === 'en' ? languageData.en.viewAllReviews : languageData.jp.viewAllReviews
                  }
                </div>
                <div className="border rounded-full p-1">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
