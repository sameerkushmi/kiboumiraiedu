import { useContext, useEffect, useState } from "react";
import {
  BookOpenCheck,
  ArrowRight,
  X,
  Clock,
  Target,
  Award,
} from "lucide-react";
import { LanguageContext } from "../../Context/Context";
import { languageData } from "../../Hooks/language";



export default function StudyTests() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedTest, setSelectedTest] = useState(null);
  const { language } = useContext(LanguageContext)

  const tests = [
    {
      id: 1,
      name: "IELTS",
      href: "/tests/ielts",
      icon: "🇬🇧",
      desc: language === 'en' ? languageData.en.studyTestDesc_1 : languageData.jp.studyTestDesc_1,
      highlights: [
        language === 'en' ? languageData.en.listening : languageData.jp.listening,
        language === 'en' ? languageData.en.reading : languageData.jp.reading,
        language === 'en' ? languageData.en.wrinting : languageData.jp.wrinting,
        language === 'en' ? languageData.en.speaking : languageData.jp.speaking,
      ],
      duration: language === 'en' ? languageData.en.studyTestDuration_1 : languageData.jp.studyTestDuration_1,
      validity: language === 'en' ? languageData.en.twoYear : languageData.jp.twoYear,
      whyNeeded: language === 'en' ? languageData.en.studyTestWhyNeeded_1 : languageData.jp.studyTestWhyNeeded_1,
      requiredScores: {
        bachelor: language === 'en' ? languageData.en.studyTestBachelorScore_1 : languageData.jp.studyTestBachelorScore_1,
        master: language === 'en' ? languageData.en.studyTestMasterScore_1 : languageData.jp.studyTestMasterScore_1,
        diploma: language === 'en' ? languageData.en.studyTestDiplomaScore_1 : languageData.jp.studyTestDiplomaScore_1,
      },
      format: language === 'en' ? languageData.en.studyTestsFormat_1 : languageData.jp.studyTestsFormat_1,
      cost: "$215 - $250 USD",
    },
    {
      id: 2,
      name: "PTE",
      href: "/tests/pte",
      icon: "🗣️",
      desc: language === 'en' ? languageData.en.studyTestsDesc_2 : languageData.jp.studyTestDesc_2,
      highlights: [
        language === 'en' ? languageData.en.aiScoring : languageData.jp.aiScoring,
        language === 'en' ? languageData.en.quickResults : languageData.jp.quickResults,
        language === 'en' ? languageData.en.widelyAccepted : languageData.jp.widelyAccepted,
      ],
      duration: language === 'en' ? languageData.en.studyTestDuration_2 : languageData.jp.studyTestDuration_2,
      validity: language === 'en' ? languageData.en.twoYear : languageData.jp.twoYear,
      whyNeeded: language === 'en' ? languageData.en.studyTestWhyNeeded_2 : languageData.jp.studyTestWhyNeeded_2,
      requiredScores: {
        bachelor: language === 'en' ? languageData.en.studyTestBachelorScore_2 : languageData.jp.studyTestBachelorScore_2,
        master: language === 'en' ? languageData.en.studyTestMasterScore_2 : languageData.jp.studyTestMasterScore_2,
        diploma: language === 'en' ? languageData.en.studyTestDiplomaScore_2 : languageData.jp.studyTestDiplomaScore_2,
      },
      format: language === 'en' ? languageData.en.studyTestsFormat_2 : languageData.jp.studyTestsFormat_2,
      cost: "$185 - $210 USD",
    },
    {
      id: 3,
      name: "TOEFL",
      href: "/tests/toefl",
      icon: "📚",
      desc: language === 'en' ? languageData.en.studyTestsDesc_3 : languageData.jp.studyTestsDesc_3,
      highlights: [
        language === 'en' ? languageData.en.academicEnglish : languageData.jp.academicEnglish,
        language === 'en' ? languageData.en.globalRecognition : languageData.jp.globalRecognition,
        language === 'en' ? languageData.en.onlineTest : languageData.jp.onlineTest,
      ],
      duration: `${language === 'en' ? languageData.en.studyTestDuration_2 : languageData.jp.studyTestDuration_2}(iBT)`,
      validity: language === 'en' ? languageData.en.twoYear : languageData.jp.twoYear,
      whyNeeded: language === 'en' ? languageData.en.studyTestsWhyNeeded_3 : languageData.jp.studyTestsWhyNeeded_3,
      requiredScores: {
        bachelor: language === 'en' ? languageData.en.studyTestBachelorScore_3 : languageData.jp.studyTestBachelorScore_3,
        master: language === 'en' ? languageData.en.studyTestMasterScore_3 : languageData.jp.studyTestMasterScore_3,
        diploma: language === 'en' ? languageData.en.studyTestDiplomaScore_3 : languageData.jp.studyTestDiplomaScore_3,
      },
      format: language === 'en' ? languageData.en.studyTestsFormat_3 : languageData.jp.studyTestsFormat_3,
      cost: "$180 - $300 USD",
    },
    {
      id: 4,
      name: "SAT",
      href: "/tests/sat",
      icon: "🧠",
      desc: language === 'en' ? languageData.en.studyTestsDesc_4 : languageData.jp.studyTestsDesc_4,
      highlights: [
        language === 'en' ? languageData.en.mathEnglish : languageData.jp.mathEnglish,
        language === 'en' ? languageData.en.collegeAdmissions : languageData.jp.collegeAdmissions,
        language === 'en' ? languageData.en.scholarshipAid : languageData.jp.scholarshipAid,
      ],
      duration: language === 'en' ? languageData.en.studyTestDuration_4 : languageData.jp.studyTestDuration_4,
      validity: language === 'en' ? languageData.en.fiveYear : languageData.jp.fiveYear,
      whyNeeded: language === 'en' ? languageData.en.studyTestsWhyNeeded_4 : languageData.jp.studyTestsWhyNeeded_4,
      requiredScores: {
        bachelor: language === 'en' ? languageData.en.studyTestBachelorScore_4 : languageData.jp.studyTestBachelorScore_4,
        master: language === 'en' ? languageData.en.studyTestMasterScore_4 : languageData.jp.studyTestMasterScore_4,
        diploma: "1000 - 1200",
      },
      format: language === 'en' ? languageData.en.studyTestsFormat_4 : languageData.jp.studyTestsFormat_4,
      cost: "$60 USD (without essay), $85 USD (with essay)",
    },
    {
      id: 5,
      name: "JLPT (N5–N1)",
      href: "/tests/jlpt",
      icon: "🇯🇵",
      desc: language === 'en' ? languageData.en.studyTestsDesc_5 : languageData.jp.studyTestsDesc_5,
      highlights: [
        language === 'en' ? languageData.en.fiveLevels : languageData.jp.fiveLevels,
        language === 'en' ? languageData.en.languageProficiency : languageData.jp.languageProficiency,
        language === 'en' ? languageData.en.studyWorkInJapan : languageData.jp.studyWorkInJapan,
      ],
      duration: language === 'en' ? languageData.en.studyTestDuration_5 : languageData.jp.studyTestDuration_5,
      validity: language === 'en' ? languageData.en.noExpiration : languageData.jp.noExpiration,
      whyNeeded: language === 'en' ? languageData.en.studyTestsWhyNeeded_5 : languageData.jp.studyTestsWhyNeeded_5,
      requiredScores: {
        bachelor: language === 'en' ? languageData.en.studyTestBachelorScore_5 : languageData.jp.studyTestBachelorScore_5,
        master: language === 'en' ? languageData.en.studyTestMasterScore_5 : languageData.jp.studyTestMasterScore_5,
        diploma: language === 'en' ? languageData.en.studyTestDiplomaScore_5 : languageData.jp.studyTestDiplomaScore_5,
      },
      format: language === 'en' ? languageData.en.studyTestsFormat_5 : languageData.jp.studyTestsFormat_5,
      cost: "$60 - $80 USD",
    },
  ];

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
              {
                language === 'en' ? languageData.en.popularStudyTests : languageData.jp.popularStudyTests
              }
            </span>
          </h2>

          <p className="text-lg md:text-xl max-w-3xl text-gray-100 drop-shadow-lg leading-relaxed">
            {
              language === 'en' ? languageData.en.studyTestsMainDesc : languageData.jp.studyTestsMainDesc
            }
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
                  {
                    language === 'en' ? languageData.en.whyIs : languageData.jp.whyIs
                  } {selectedTest.name} 
                  {
                    language === 'en' ? languageData.en.needed : languageData.jp.needed
                  }
                  ?
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedTest.whyNeeded}
                </p>
              </div>

              {/* Format */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  {
                    language === 'en' ? languageData.en.testFormat : languageData.jp.testFormat
                  }
                </h4>
                <p className="text-gray-600">{selectedTest.format}</p>
              </div>

              {/* Required Scores */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  {
                    language === 'en' ? languageData.en.requiredScoresHeader : languageData.jp.requiredScoresHeader
                  }
                </h4>

                <div className="space-y-3">
                  {/* Bachelor's */}
                  <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
                    <h5 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                      🎓
                      {
                        language === 'en' ? languageData.en.bachelors : languageData.jp.bachelors
                      }
                      {
                        language === 'en' ? languageData.en.degree : languageData.jp.degree
                      }
                    </h5>
                    <p className="text-gray-700">
                      {selectedTest.requiredScores.bachelor}
                    </p>
                  </div>

                  {/* Master's */}
                  <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
                    <h5 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                      📚 
                      {
                        language === 'en' ? languageData.en.masters : languageData.jp.masters
                      }
                      {
                        language === 'en' ? languageData.en.degree : languageData.jp.degree
                      }
                    </h5>
                    <p className="text-gray-700">
                      {selectedTest.requiredScores.master}
                    </p>
                  </div>

                  {/* Diploma */}
                  <div className="bg-amber-50 p-5 rounded-xl border-l-4 border-amber-500">
                    <h5 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                      📝 
                      {
                        language === 'en' ? languageData.en.diplomaProgram : languageData.jp.diplomaProgram
                      }
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
                  <strong>{language === 'en' ? languageData.en.note : languageData.jp.note}</strong> 
                  {
                    language === 'en' ? languageData.en.studyTestsNote : languageData.jp.studyTestsNote
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
