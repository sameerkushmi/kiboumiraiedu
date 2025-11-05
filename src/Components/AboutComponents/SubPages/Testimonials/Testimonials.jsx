import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Aarav Sharma",
      image: "/Uploads/home/prof.jpg",
      quote:
        "Thanks to KBM Education Consultancy, I’m now pursuing my IT degree in Japan. From university selection to post-arrival guidance, they supported me like family. Their constant communication after my visa approval made me feel secure and confident.",
    },
    {
      id: 2,
      name: "Priya Karki",
      image: "/Uploads/home/prof.jpg",
      quote:
        "Getting my visa for Australia was the biggest dream of my life, and KBM made it a reality. They explained every step clearly, prepared me for the interview, and even guided me after I landed in Melbourne. Truly a life-changing experience!",
    },
    {
      id: 3,
      name: "Rohit Thapa",
      image: "/Uploads/home/prof.jpg",
      quote:
        "I’m currently studying in Toronto, and I still remember how smoothly KBM handled my Canada process. From choosing the right college to completing all documentation, they made it stress-free. Their team genuinely cares about every student.",
    },
    {
      id: 4,
      name: "Sanjana Rai",
      image: "/Uploads/home/prof.jpg",
      quote:
        "KBM guided me throughout my UK journey — from SOP writing to accommodation assistance. Even after I reached London, they followed up to ensure I was settling well. I couldn’t have asked for better support!",
    },
    {
      id: 5,
      name: "Nirajan Shrestha",
      image: "/Uploads/home/prof.jpg",
      quote:
        "I always dreamt of studying in the U.S., but the process seemed complicated. KBM made it simple and stress-free. Their guidance during the visa interview helped me gain confidence, and now I’m studying in New York happily.",
    },
    {
      id: 6,
      name: "Manisha Gurung",
      image: "/Uploads/home/prof.jpg",
      quote:
        "The consultants at KBM were professional and friendly. They provided genuine advice on course selection for Australia and helped me prepare all my documents perfectly. I highly recommend them to anyone planning to study abroad.",
    },
    {
      id: 7,
      name: "Bibek Tamang",
      image: "/Uploads/home/prof.jpg",
      quote:
        "I’m now studying business management in the UK, thanks to KBM’s expert counseling. They made sure I understood everything clearly — from university options to pre-departure sessions. Their personalized guidance really stood out.",
    },
    {
      id: 8,
      name: "Anjali Adhikari",
      image: "/Uploads/home/prof.jpg",
      quote:
        "KBM Education Consultancy helped me with every detail for my study in Japan. From language school application to part-time job guidance after arrival, they made sure I was well-prepared for a new chapter of my life.",
    },
    {
      id: 9,
      name: "Kiran Maharjan",
      image: "/Uploads/home/prof.jpg",
      quote:
        "My Canada visa process was quick and smooth thanks to KBM. They were transparent, honest, and professional from start to finish. Even now, they check in occasionally, which shows how much they care about their students.",
    },
    {
      id: 10,
      name: "Sneha Lama",
      image: "/Uploads/home/prof.jpg",
      quote:
        "Studying in Sydney has been an incredible experience. KBM made the whole process—from course counseling to flight booking—completely stress-free. I’m so grateful for their dedication and patience throughout.",
    },
    {
      id: 11,
      name: "Rajesh KC",
      image: "/Uploads/home/prof.jpg",
      quote:
        "I had almost given up on my dream of studying in the USA due to a previous visa rejection, but KBM helped me rebuild my confidence and reapply successfully. Their motivation and experience truly changed my future.",
    },
    {
      id: 12,
      name: "Asmita Bhattarai",
      image: "/Uploads/home/prof.jpg",
      quote:
        "KBM made my journey to Canada completely hassle-free. They not only handled my visa process but also provided genuine pre-departure guidance. I’m thankful for their continuous support and care.",
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
                  What Do Our Students Say?
                </h1>
                <p className="text-gray-600 text-base md:text-lg">
                  Hear from our students who experienced personal growth,
                  practical learning, and success through our programs.
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
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
