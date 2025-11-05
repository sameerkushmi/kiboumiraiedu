import { PlaneTakeoff, ArrowRight, GraduationCap } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const destinations = [
  {
    id: 1,
    location: "Australia",
    href: "/study/australia",
    flag: "🇦🇺",
    desc: "Known for its world-class universities and multicultural environment, Australia offers students a relaxed lifestyle, strong academic standards, and post-study work opportunities.",
    highlights: ["Top Universities", "Work Opportunities", "Beach Lifestyle"],
  },
  {
    id: 2,
    location: "USA",
    href: "/study/usa",
    flag: "🇺🇸",
    desc: "Home to top-ranked universities and cutting-edge research facilities, the United States provides endless opportunities for innovation, career growth, and cultural diversity.",
    highlights: ["Ivy League", "Research Hub", "Tech Innovation"],
  },
  {
    id: 3,
    location: "United Kingdom",
    href: "/study/uk",
    flag: "🇬🇧",
    desc: "With a strong academic heritage and globally recognized degrees, the UK offers a rich cultural experience, shorter study durations, and excellent global employability.",
    highlights: [
      "Historic Universities",
      "Shorter Degrees",
      "Global Recognition",
    ],
  },
  {
    id: 4,
    location: "Canada",
    href: "/study/canada",
    flag: "🇨🇦",
    desc: "Canada stands out for its high-quality education system, affordable tuition, and welcoming immigration policies that make it a top choice for international students.",
    highlights: ["Affordable Tuition", "PR Pathways", "Safe Environment"],
  },
  {
    id: 5,
    location: "Japan",
    href: "/study/japan",
    flag: "🇯🇵",
    desc: "Blending tradition and technology, Japan offers unique educational experiences, government scholarships, and career opportunities in one of Asia's most advanced nations.",
    highlights: ["Tech Leader", "Scholarships", "Rich Culture"],
  },
  {
    id: 6,
    location: "Korea",
    href: "#",
    flag: "🇰🇷",
    desc: "South Korea combines cutting-edge innovation, affordable tuition, and a vibrant culture, making it a fast-rising destination for international learners.",
    highlights: ["K-Innovation", "Affordable", "Dynamic Culture"],
  },
];

export default function StudyDestinations() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      className="relative py-24 px-6 md:px-12 bg-fixed bg-cover bg-center mx-6 my-16 rounded-4xl overflow-hidden"
      style={{
        backgroundImage: `url('Uploads/home/hero.avif')`,
      }}
    >
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80')`,
          transform: hoveredCard ? "scale(1.05)" : "scale(1)",
        }}
      />

      {/* Gradient Overlays */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/75 to-pink-900/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}
      <div className="absolute inset-0  bg-black/60 via-transparent to-transparent" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-pulse"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 3 + "s",
              animationDuration: Math.random() * 3 + 2 + "s",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Heading Section */}
        <div className="flex items-center justify-center flex-col gap-6 text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white drop-shadow-2xl flex items-center gap-4 flex-col justify-center">
            <PlaneTakeoff size={56} className="text-background" />
            <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
              Top Study Destinations
            </span>
          </h2>

          <p className="text-lg md:text-xl max-w-3xl text-gray-100 drop-shadow-lg leading-relaxed">
            Discover the most popular global education hubs offering exceptional
            learning environments, cultural diversity, and future-ready career
            opportunities.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {destinations.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col"
            >
              {/* Card Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Link to={item.href}>
                <div className="relative z-10 flex flex-col h-full">
                  {/* Flag and Location */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                        {item.flag}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                        {item.location}
                      </h3>
                    </div>
                    <ArrowRight
                      className="text-indigo-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                      size={24}
                    />
                  </div>

                  {/* Highlights Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full border border-indigo-200"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
