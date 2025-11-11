import { useContext, useState } from "react";
import { PlaneTakeoff, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { languageData } from "../../Hooks/language";
import { LanguageContext } from "../../Context/Context";


export default function StudyDestinations() {
  const { language } = useContext(LanguageContext)
  const [hoveredCard, setHoveredCard] = useState(null);

  const destinations = [
    {
      id: 1,
      location: language === 'en' ? languageData.en.australia : languageData.jp.australia,
      href: "/study/australia",
      flag: "🇦🇺",
      desc: language === 'en' ? languageData.en.studyDestinationDesc_1 : languageData.jp.studyDestinationDesc_1,
      highlights: [
        language === 'en' ? languageData.en.topUniversities : languageData.jp.topUniversities,
        language === 'en' ? languageData.en.workOpportunities : languageData.jp.workOpportunities,
        language === 'en' ? languageData.en.beachLifestyle : languageData.jp.beachLifestyle,
      ],
    },
    {
      id: 2,
      location: language === 'en' ? languageData.en.USA : languageData.jp.USA,
      href: "/study/usa",
      flag: "🇺🇸",
      desc: language === 'en' ? languageData.en.studyDestinationDesc_2 : languageData.jp.studyDestinationDesc_2,
      highlights: [
        language === 'en' ? languageData.en.ivyLeague : languageData.jp.ivyLeague,
        language === 'en' ? languageData.en.researchHub : languageData.jp.researchHub,
        language === 'en' ? languageData.en.techInnovation : languageData.jp.techInnovation,
      ],
    },
    {
      id: 3,
      location: language === 'en' ? languageData.en.unitedKingdom : languageData.jp.unitedKingdom,
      href: "/study/uk",
      flag: "🇬🇧",
      desc: language === 'en' ? languageData.en.studyDestinationDesc_3 : languageData.jp.studyDestinationDesc_3,
      highlights: [
        language === 'en' ? languageData.en.historicUniversities : languageData.jp.historicUniversities,
        language === 'en' ? languageData.en.shorterDegrees : languageData.jp.shorterDegrees,
        language === 'en' ? languageData.en.globalRecognition : languageData.jp.globalRecognition,
      ],
    },
    {
      id: 4,
      location: language === 'en' ? languageData.en.canada : languageData.jp.canada,
      href: "/study/canada",
      flag: "🇨🇦",
      desc: language === 'en' ? languageData.en.studyDestinationDesc_4 : languageData.jp.studyDestinationDesc_4,
      highlights: [
        language === 'en' ? languageData.en.affordableTuition : languageData.jp.affordableTuition,
        language === 'en' ? languageData.en.PRPathways : languageData.jp.PRPathways,
        language === 'en' ? languageData.en.safeEnvironment : languageData.jp.safeEnvironment,
      ],
    },
    {
      id: 5,
      location: language === 'en' ? languageData.en.japan : languageData.jp.japan,
      href: "/study/japan",
      flag: "🇯🇵",
      desc: language === 'en' ? languageData.en.studyDestinationDesc_5 : languageData.jp.studyDestinationDesc_5,
      highlights: [
        language === 'en' ? languageData.en.teachLeader : languageData.jp.teachLeader,
        language === 'en' ? languageData.en.scholarships : languageData.jp.scholarships,
        language === 'en' ? languageData.en.richCulture : languageData.jp.richCulture,
      ],
    },
    {
      id: 6,
      location: language === 'en' ? languageData.en.korea : languageData.jp.korea,
      href: "#",
      flag: "🇰🇷",
      desc: language === 'en' ? languageData.en.studyDestinationDesc_6 : languageData.jp.studyDestinationDesc_6,
      highlights: [
        language === 'en' ? languageData.en.KInnovation : languageData.jp.KInnovation,
        language === 'en' ? languageData.en.affordable : languageData.jp.affordable,
        language === 'en' ? languageData.en.dynamicCulture : languageData.jp.dynamicCulture,
      ],
    },
  ];

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
              {
                language === 'en' ? languageData.en.studyDestinationHeader : languageData.jp.studyDestinationHeader
              }
            </span>
          </h2>

          <p className="text-lg md:text-xl max-w-3xl text-gray-100 drop-shadow-lg leading-relaxed">
            {
              language === 'en' ? languageData.en.studyDestinationMainDesc : languageData.jp.studyDestinationMainDesc
            }
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
