import {
  BookOpenCheck,
  ArrowRight,
  X,
  Clock,
  Target,
  Award,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const tests = [
  {
    id: 1,
    name: "IELTS",
    href: "/tests/ielts",
    icon: "🇬🇧",
    desc: "The International English Language Testing System (IELTS) is one of the most popular English proficiency exams accepted globally for study, migration, and work.",
    highlights: ["Listening", "Reading", "Writing", "Speaking"],
    duration: "2 hours 45 minutes",
    validity: "2 years",
    whyNeeded:
      "IELTS demonstrates English proficiency for academic admission, professional registration, and immigration. It's accepted by over 11,000 organizations worldwide including universities, employers, and governments.",
    requiredScores: {
      bachelor: "6.0 - 6.5 overall (with no band less than 5.5)",
      master: "6.5 - 7.0 overall (with no band less than 6.0)",
      diploma: "5.5 - 6.0 overall (with no band less than 5.0)",
    },
    format: "Paper-based or Computer-based",
    cost: "$215 - $250 USD",
  },
  {
    id: 2,
    name: "PTE",
    href: "/tests/pte",
    icon: "🗣️",
    desc: "The Pearson Test of English (PTE) evaluates your English skills using AI-based scoring, offering fast results and wide acceptance for studying abroad.",
    highlights: ["AI Scoring", "Quick Results", "Widely Accepted"],
    duration: "2 hours",
    validity: "2 years",
    whyNeeded:
      "PTE Academic uses AI technology for unbiased scoring and delivers results within 48 hours. It's recognized by thousands of institutions globally and is ideal for those seeking quick turnaround times.",
    requiredScores: {
      bachelor: "50 - 58 overall (with communicative skills at 50+)",
      master: "58 - 65 overall (with communicative skills at 58+)",
      diploma: "42 - 50 overall (with communicative skills at 42+)",
    },
    format: "Computer-based only",
    cost: "$185 - $210 USD",
  },
  {
    id: 3,
    name: "TOEFL",
    href: "/tests/toefl",
    icon: "📚",
    desc: "The Test of English as a Foreign Language (TOEFL) measures English proficiency for academic purposes, accepted by over 11,000 universities worldwide.",
    highlights: ["Academic English", "Global Recognition", "Online Test"],
    duration: "2 hours (iBT)",
    validity: "2 years",
    whyNeeded:
      "TOEFL is specifically designed for academic English and is the preferred test for North American universities. It assesses your ability to understand and use English in university settings.",
    requiredScores: {
      bachelor: "70 - 80 overall (with section scores 17+)",
      master: "85 - 100 overall (with section scores 20+)",
      diploma: "60 - 70 overall (with section scores 15+)",
    },
    format: "Internet-based (iBT) or Paper-based",
    cost: "$180 - $300 USD",
  },
  {
    id: 4,
    name: "SAT",
    href: "/tests/sat",
    icon: "🧠",
    desc: "The Scholastic Assessment Test (SAT) evaluates mathematical, reading, and writing abilities, and is a key requirement for many U.S. universities.",
    highlights: ["Math & English", "College Admissions", "Scholarship Aid"],
    duration: "3 hours (without essay)",
    validity: "5 years",
    whyNeeded:
      "The SAT is a standardized test for college admissions in the US. High scores can qualify you for merit-based scholarships and demonstrate readiness for college-level coursework.",
    requiredScores: {
      bachelor: "1200 - 1400 (competitive institutions: 1400+)",
      master: "Not typically required",
      diploma: "1000 - 1200",
    },
    format: "Paper-based or Digital",
    cost: "$60 USD (without essay), $85 USD (with essay)",
  },
  {
    id: 5,
    name: "JLPT (N5–N1)",
    href: "/tests/jlpt",
    icon: "🇯🇵",
    desc: "The Japanese Language Proficiency Test (JLPT) assesses non-native speakers' Japanese abilities, from beginner (N5) to advanced (N1), and is essential for study or work in Japan.",
    highlights: ["5 Levels", "Language Proficiency", "Study & Work in Japan"],
    duration: "105 - 170 minutes (varies by level)",
    validity: "No expiration",
    whyNeeded:
      "JLPT certification is required for academic admissions, employment, and visa applications in Japan. It validates your Japanese language proficiency from basic communication to advanced business-level fluency.",
    requiredScores: {
      bachelor: "N2 level (score 90+/180) - Upper intermediate",
      master: "N1 level (score 100+/180) - Advanced",
      diploma: "N3 level (score 95+/180) - Intermediate",
    },
    format: "Paper-based only",
    cost: "$60 - $80 USD",
  },
];

export default function StudyTests() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedTest, setSelectedTest] = useState(null);

  // 🧩 Disable background scroll when modal is open
  useEffect(() => {
    if (selectedTest) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.style.paddingRight = "";
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.style.paddingRight = "";
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedTest]);

  return (
    <section
      className="relative py-24 px-6 md:px-12 bg-fixed bg-cover bg-center mx-6 my-16 rounded-4xl overflow-hidden"
      style={{
        backgroundImage: `url('Uploads/study/tests.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

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
            <BookOpenCheck size={56} className="text-background" />
            <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
              Popular Study Tests
            </span>
          </h2>

          <p className="text-lg md:text-xl max-w-3xl text-gray-100 drop-shadow-lg leading-relaxed">
            Prepare for globally recognized tests that open doors to top
            universities and international career opportunities.
          </p>
        </div>

        {/* Test Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {tests.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedTest(item)}
              className="group relative bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col"
            >
              {/* Card Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon & Name */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <ArrowRight
                    className="text-indigo-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                    size={24}
                  />
                </div>

                {/* Highlights */}
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
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-300 overflow-hidden">
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto no-scrollbar animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => setSelectedTest(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
            >
              <X size={24} className="text-gray-600" />
            </button>

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-t-3xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl">{selectedTest.icon}</span>
                <h3 className="text-4xl font-bold text-white">
                  {selectedTest.name}
                </h3>
              </div>
              <p className="text-white/90 text-lg">{selectedTest.desc}</p>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="text-indigo-600" size={20} />
                    <h4 className="font-semibold text-gray-800">Duration</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {selectedTest.duration}
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="text-purple-600" size={20} />
                    <h4 className="font-semibold text-gray-800">Validity</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {selectedTest.validity}
                  </p>
                </div>

                <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="text-pink-600" size={20} />
                    <h4 className="font-semibold text-gray-800">Cost</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{selectedTest.cost}</p>
                </div>
              </div>

              {/* Why Needed Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-indigo-100">
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  Why is {selectedTest.name} Needed?
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedTest.whyNeeded}
                </p>
              </div>

              {/* Format */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Test Format
                </h4>
                <p className="text-gray-600">{selectedTest.format}</p>
              </div>

              {/* Required Scores */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Required Scores by Program Level
                </h4>

                <div className="space-y-3">
                  {/* Bachelor's */}
                  <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
                    <h5 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                      🎓 Bachelor's Degree
                    </h5>
                    <p className="text-gray-700">
                      {selectedTest.requiredScores.bachelor}
                    </p>
                  </div>

                  {/* Master's */}
                  <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
                    <h5 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                      📚 Master's Degree
                    </h5>
                    <p className="text-gray-700">
                      {selectedTest.requiredScores.master}
                    </p>
                  </div>

                  {/* Diploma */}
                  <div className="bg-amber-50 p-5 rounded-xl border-l-4 border-amber-500">
                    <h5 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                      📝 Diploma Programs
                    </h5>
                    <p className="text-gray-700">
                      {selectedTest.requiredScores.diploma}
                    </p>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Requirements may vary by institution
                  and country. Always check specific university requirements
                  before applying.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
