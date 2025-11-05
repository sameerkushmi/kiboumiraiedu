import { ArrowUpRight } from "lucide-react";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomeTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Aarav Sharma",
      role: "Student – Japan",
      image: "Uploads/home/prof.jpg",
      quote:
        "KBM Education Consultancy made my journey to Japan completely stress-free. From guiding me through the visa interview process to helping me understand the necessary documentation, they ensured I was always well-prepared. Even after I arrived in Japan, their support continued with accommodation arrangements, orientation sessions, and regular check-ins to make sure I was adjusting well. Thanks to their professional guidance and encouragement, I gained the confidence to start my academic journey smoothly and settle into a new culture without worry.",
      bg: "bg-text/80 text-white",
    },

    {
      id: 2,
      name: "Priya Karki",
      role: "Undergraduate Student – Australia",
      image: "Uploads/home/prof.jpg",
      quote:
        "Getting my Australian student visa was one of the happiest moments of my life! KBM guided me from course selection to post-arrival assistance. Their team stayed in touch even after I landed in Sydney, making me feel like part of a family.",
      bg: "bg-white text-gray-900 shadow-2xl",
    },
    {
      id: 3,
      name: "Rohit Thapa",
      role: "Graduate Student – United States",
      image: "Uploads/home/prof.jpg",
      quote:
        "The process of applying to U.S. universities can be overwhelming, but KBM made it effortless. After my visa approval, they continued to guide me on housing, part-time work, and adapting to the new environment. I couldn’t have done it without them.",
      bg: "bg-text/80 text-white shadow-xl",
    },
    {
      id: 4,
      name: "Sanjana Rai",
      role: "Research Scholar – United Kingdom",
      image: "Uploads/home/prof.jpg",
      quote:
        "KBM Education Consultancy provided complete support — from university selection in the UK to pre-departure orientation. Even after my arrival, they followed up to ensure everything went smoothly. Their professionalism and care are unmatched.",
      bg: "bg-blue text-white",
    },
    {
      id: 5,
      name: "Anish Gurung",
      role: "Diploma Student – Canada",
      image: "Uploads/home/prof.jpg",
      quote:
        "I’m now studying in Toronto, and it still feels unreal! KBM guided me through every stage — documentation, visa, and post-landing advice. Their encouragement gave me the confidence to start a new life here successfully.",
      bg: "bg-white text-gray-900 shadow-2xl",
    },
  ];

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 my-12 mx-6">
        <div className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10">
          <h1 className="mb-3 text-blue">Transforming Futures</h1>
          <h2 className="text-blue/80 text-2xl md:text-4xl ">
            Hear What Our Students Say About KBM
          </h2>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] gap-3">
            <div
              className={`${testimonials[0].bg} rounded-3xl p-4 sm:p-6 flex flex-col items-start justify-between min-h-[250px] sm:min-h-[300px]`}
            >
              <div className="text-sm sm:text-base">
                <p className="text-4xl md:text-6xl font-extrabold mb-7 md:mb-9">
                  Visa Granted to{" "}
                  <span className="inline-block">Australia 🇦🇺</span>
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
            1000+ Satisfied Students from KBM
          </div>
          <div>
            <Link to="/about/testimonials">
              <button className="px-4 sm:px-6 py-2 bg-background shadow-xl text-text text-base sm:text-lg font-extrabold rounded-xl flex items-center gap-2 hover:bg-gray-200 transition-colors">
                <div>View All Reviews</div>
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
