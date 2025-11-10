import { useContext, useState } from "react";
import {
  UserCheck,
  BookOpen,
  GraduationCap,
  Globe2,
  FileCheck,
  MessageSquare,
  PlaneTakeoff,
  Languages,
  HelpingHand,
  Trophy,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {LanguageContext} from '../../Context/Context'
import { languageData } from "../../Hooks/language";

export default function OurServices() {
  const {language} = useContext(LanguageContext)
  const [activeService, setActiveService] = useState("consultation");
  const [openAccordion, setOpenAccordion] = useState(null);

  const services = [
    {
      id: "consultation",
      title: language === 'en' ? languageData.en.ourServicesTitle_1:languageData.jp.ourServicesTitle_1,
      icon: UserCheck,
      content: {
      title: language === 'en' ? languageData.en.ourServicesSubTitle_1:languageData.jp.ourServicesSubTitle_1,
        description:language === 'en' ? languageData.en.ourServicesDesc_1: languageData.jp.ourServicesDesc_1,
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
        offers: [
          language === 'en' ? languageData.en.ourServicesConsultationOffer_1 : languageData.jp.ourServicesConsultationOffer_1 ,
          language === 'en' ? languageData.en.ourServicesConsultationOffer_2 : languageData.jp.ourServicesConsultationOffer_2 ,
          language === 'en' ? languageData.en.ourServicesConsultationOffer_3 : languageData.jp.ourServicesConsultationOffer_3 ,
          language === 'en' ? languageData.en.ourServicesConsultationOffer_4 : languageData.jp.ourServicesConsultationOffer_4 ,
          language === 'en' ? languageData.en.ourServicesConsultationOffer_5 : languageData.jp.ourServicesConsultationOffer_5 ,
        ],
      },
    },
    {
      id: "course-guidance",
      title: language === 'en' ? languageData.en.ourServicesTitle_2:languageData.jp.ourServicesTitle_2,
      icon: BookOpen,
      content: {
      title: language === 'en' ? languageData.en.ourServicesTitle_2:languageData.jp.ourServicesTitle_2,
        description:language === 'en' ? languageData.en.ourServicesDesc_2: languageData.jp.ourServicesDesc_2,
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
        offers: [
          language === 'en' ? languageData.en.ourServicesCourseGuidanceOffer_1:languageData.jp.ourServicesCourseGuidanceOffer_1,
          language === 'en' ? languageData.en.ourServicesCourseGuidanceOffer_2:languageData.jp.ourServicesCourseGuidanceOffer_2,
          language === 'en' ? languageData.en.ourServicesCourseGuidanceOffer_3:languageData.jp.ourServicesCourseGuidanceOffer_3,
          language === 'en' ? languageData.en.ourServicesCourseGuidanceOffer_4:languageData.jp.ourServicesCourseGuidanceOffer_4,
          language === 'en' ? languageData.en.ourServicesCourseGuidanceOffer_5:languageData.jp.ourServicesCourseGuidanceOffer_5,
        ],
      },
    },
    {
      id: "test-prep",
      title: language === 'en' ? languageData.en.ourServicesTitle_3: languageData.jp.ourServicesTitle_3,
      icon: GraduationCap,
      content: {
        title: language === 'en' ? languageData.en.ourServicesSubTitle_3: languageData.jp.ourServicesSubTitle_3,
        description:language === 'en' ? languageData.en.ourServicesDesc_3: languageData.jp.ourServicesDesc_3,
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        offers: [
          language === 'en' ? languageData.en.ourServicesTestPreOffer_1: languageData.jp.ourServicesTestPreOffer_1,
          language === 'en' ? languageData.en.ourServicesTestPreOffer_2: languageData.jp.ourServicesTestPreOffer_2,
          language === 'en' ? languageData.en.ourServicesTestPreOffer_3: languageData.jp.ourServicesTestPreOffer_3,
          language === 'en' ? languageData.en.ourServicesTestPreOffer_4: languageData.jp.ourServicesTestPreOffer_4,
          language === 'en' ? languageData.en.ourServicesTestPreOffer_5: languageData.jp.ourServicesTestPreOffer_5,
        ],
      },
    },
    {
      id: "university-selection",
      title: language === 'en' ? languageData.en.ourServicesTitle_4: languageData.jp.ourServicesTitle_4,
      icon: Globe2,
      content: {
      title: language === 'en' ? languageData.en.ourServicesTitle_4: languageData.jp.ourServicesTitle_4,
        description:language === 'en' ? languageData.en.ourServicesDesc_4: languageData.jp.ourServicesDesc_4,
        image:
          "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        offers: [
          language === 'en' ? languageData.en.ourServicesUniversitySelctionOffer_1:languageData.jp.ourServicesUniversitySelctionOffer_1,
          language === 'en' ? languageData.en.ourServicesUniversitySelctionOffer_2:languageData.jp.ourServicesUniversitySelctionOffer_2,
          language === 'en' ? languageData.en.ourServicesUniversitySelctionOffer_3:languageData.jp.ourServicesUniversitySelctionOffer_3,
          language === 'en' ? languageData.en.ourServicesUniversitySelctionOffer_4:languageData.jp.ourServicesUniversitySelctionOffer_4,
          language === 'en' ? languageData.en.ourServicesUniversitySelctionOffer_5:languageData.jp.ourServicesUniversitySelctionOffer_5,
        ],
      },
    },
    {
      id: "documentation",
      title: language === 'en' ? languageData.en.ourServicesTitle_5: languageData.jp.ourServicesTitle_5,
      icon: FileCheck,
      content: {
      title: language === 'en' ? languageData.en.ourServicesTitle_5: languageData.jp.ourServicesTitle_5,
        description:language === 'en' ? languageData.en.ourServicesDesc_5: languageData.jp.ourServicesDesc_5,
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        offers: [
          language === 'en'? languageData.en.ourServicesDocumentationOffer_1: languageData.jp.ourServicesDocumentationOffer_1,
          language === 'en'? languageData.en.ourServicesDocumentationOffer_2: languageData.jp.ourServicesDocumentationOffer_2,
          language === 'en'? languageData.en.ourServicesDocumentationOffer_3: languageData.jp.ourServicesDocumentationOffer_3,
          language === 'en'? languageData.en.ourServicesDocumentationOffer_4: languageData.jp.ourServicesDocumentationOffer_4,
          language === 'en'? languageData.en.ourServicesDocumentationOffer_5: languageData.jp.ourServicesDocumentationOffer_5,
        ],
      },
    },
    {
      id: "interview-prep",
      title: language === 'en' ? languageData.en.ourServicesTitle_6: languageData.jp.ourServicesTitle_6,
      icon: MessageSquare,
      content: {
        title: language === 'en' ? languageData.en.ourServicesSubTitle_6: languageData.jp.ourServicesSubTitle_6,
        description:language === 'en' ? languageData.en.ourServicesDesc_6: languageData.jp.ourServicesDesc_6,
        image:
          "https://images.unsplash.com/photo-1600718373744-878dfc0a6f52?w=800&q=80",
        offers: [
          language === 'en'? languageData.en.ourServicesInterviewPrepOffer_1: languageData.jp.ourServicesInterviewPrepOffer_1,
          language === 'en'? languageData.en.ourServicesInterviewPrepOffer_2: languageData.jp.ourServicesInterviewPrepOffer_2,
          language === 'en'? languageData.en.ourServicesInterviewPrepOffer_3: languageData.jp.ourServicesInterviewPrepOffer_3,
          language === 'en'? languageData.en.ourServicesInterviewPrepOffer_4: languageData.jp.ourServicesInterviewPrepOffer_4,
          language === 'en'? languageData.en.ourServicesInterviewPrepOffer_5: languageData.jp.ourServicesInterviewPrepOffer_5,
        ],
      },
    },
    {
      id: "pre-departure",
      title: language === 'en' ? languageData.en.ourServicesTitle_7:languageData.jp.ourServicesTitle_7,
      icon: PlaneTakeoff,
      content: {
        title: language === 'en' ? languageData.en.ourServicesTitle_7:languageData.jp.ourServicesTitle_7,
        description:language === 'en' ? languageData.en.ourServicesDesc_7: languageData.jp.ourServicesDesc_7,
        image:
          "https://images.unsplash.com/photo-1600566752187-2b3b6f0b1b12?w=800&q=80",
        offers: [
          language === 'en' ? languageData.en.ourServicesPreDepartureOffer_1:languageData.jp.ourServicesPreDepartureOffer_1,
          language === 'en' ? languageData.en.ourServicesPreDepartureOffer_2:languageData.jp.ourServicesPreDepartureOffer_2,
          language === 'en' ? languageData.en.ourServicesPreDepartureOffer_3:languageData.jp.ourServicesPreDepartureOffer_3,
          language === 'en' ? languageData.en.ourServicesPreDepartureOffer_4:languageData.jp.ourServicesPreDepartureOffer_4,
          language === 'en' ? languageData.en.ourServicesPreDepartureOffer_5:languageData.jp.ourServicesPreDepartureOffer_5,
        ],
      },
    },
    {
      id: "cultural-training",
      title: language === 'en' ? languageData.en.ourServicesTitle_8 : languageData.jp.ourServicesTitle_8,
      icon: Languages,
      content: {
        title: language === 'en' ? languageData.en.ourServicesTitle_8 : languageData.jp.ourServicesTitle_8,
        description:language === 'en' ? languageData.en.ourServicesDesc_8: languageData.jp.ourServicesDesc_8,
        image:
          "https://images.unsplash.com/photo-1600566752600-b6d06aa0991a?w=800&q=80",
        offers: [
          language === 'en' ? languageData.en.ourServicesCultureTrainingOffer_1:languageData.jp.ourServicesCultureTrainingOffer_1,
          language === 'en' ? languageData.en.ourServicesCultureTrainingOffer_2:languageData.jp.ourServicesCultureTrainingOffer_2,
          language === 'en' ? languageData.en.ourServicesCultureTrainingOffer_3:languageData.jp.ourServicesCultureTrainingOffer_3,
          language === 'en' ? languageData.en.ourServicesCultureTrainingOffer_4:languageData.jp.ourServicesCultureTrainingOffer_4,
          language === 'en' ? languageData.en.ourServicesCultureTrainingOffer_5:languageData.jp.ourServicesCultureTrainingOffer_5,
        ],
      },
    },
    {
      id: "post-arrival",
      title: language === 'en' ? languageData.en.ourServicesTitle_9 : languageData.jp.ourServicesTitle_9,
      icon: HelpingHand,
      content: {
        title: language === 'en' ? languageData.en.ourServicesTitle_9 : languageData.jp.ourServicesTitle_9,
        description:language === 'en' ? languageData.en.ourServicesDesc_9: languageData.jp.ourServicesDesc_9,
        image:
          "https://images.unsplash.com/photo-1590959651373-a3db0f1d7c61?w=800&q=80",
        offers: [
          language === 'en' ? languageData.en.ourServicesPostArrivalOffer_1:languageData.jp.ourServicesPostArrivalOffer_1 ,
          language === 'en' ? languageData.en.ourServicesPostArrivalOffer_2:languageData.jp.ourServicesPostArrivalOffer_2 ,
          language === 'en' ? languageData.en.ourServicesPostArrivalOffer_3:languageData.jp.ourServicesPostArrivalOffer_3 ,
          language === 'en' ? languageData.en.ourServicesPostArrivalOffer_4:languageData.jp.ourServicesPostArrivalOffer_4 ,
          language === 'en' ? languageData.en.ourServicesPostArrivalOffer_5:languageData.jp.ourServicesPostArrivalOffer_5 ,
        ],
      },
    },
    {
      id: "scholarships",
      title: language === 'en' ? languageData.en.ourServicesTitle_10 : languageData.jp.ourServicesTitle_10,
      icon: Trophy,
      content: {
        title: language === 'en' ? languageData.en.ourServicesTitle_10 : languageData.jp.ourServicesTitle_10,
        description:language === 'en' ? languageData.en.ourServicesDesc_10 : languageData.jp.ourServicesDesc_10,
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        offers: [
          language === 'en' ? languageData.en.ourServicesScholarshipOffer_1: languageData.jp.ourServicesScholarshipOffer_1,
          language === 'en' ? languageData.en.ourServicesScholarshipOffer_2: languageData.jp.ourServicesScholarshipOffer_2,
          language === 'en' ? languageData.en.ourServicesScholarshipOffer_3: languageData.jp.ourServicesScholarshipOffer_3,
          language === 'en' ? languageData.en.ourServicesScholarshipOffer_4: languageData.jp.ourServicesScholarshipOffer_4,
          language === 'en' ? languageData.en.ourServicesScholarshipOffer_5: languageData.jp.ourServicesScholarshipOffer_5,
        ],
      },
    },
  ];

  const activeContent = services.find((s) => s.id === activeService)?.content;
  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="px-6 py-16 my-16 mx-6 bg-blue/10 rounded-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          {
            language === 'en' ? languageData.en.ourServicesHeader: languageData.jp.ourServicesHeader
          }
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {
            language === 'en' ? languageData.en.ourServicesDesc: languageData.jp.ourServicesDesc
          }
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-[35%_65%] gap-8">
          {/* Left Side */}
          <div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-extralight text-gray-900 mb-1">
                {
                  language === 'en' ? languageData.en.KBMServices: languageData.jp.KBMServices
                }
              </h2>
              <div className="h-[2px] w-full bg-black mb-3" />
            </div>
            <div className="flex flex-col gap-3">
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = activeService === service.id;
                return (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`flex items-center justify-between px-6 py-4 rounded-lg border-2 ${
                      isActive
                        ? "bg-blue text-white border-blue"
                        : "bg-white text-gray-700 border-gray-200 hover:border-blue"
                    }`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{service.title}</span>
                    </div>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: isActive ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-full overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {activeContent?.title}
                  </h3>

                  <motion.div
                    className="mb-6 rounded-xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <img
                      src={activeContent?.image}
                      alt={activeContent?.title}
                      className="w-full h-80 object-cover"
                    />
                  </motion.div>

                  <motion.p
                    className="text-lg text-gray-600 leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    {activeContent?.description}
                  </motion.p>

                  {/* Offers List */}
                  <motion.ul
                    className="list-disc pl-6 text-gray-700 space-y-2 text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {activeContent?.offers?.map((offer, i) => (
                      <li key={i}>{offer}</li>
                    ))}
                  </motion.ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {
            }
          </h2>

          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOpen = openAccordion === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-200"
                >
                  <motion.button
                    onClick={() => toggleAccordion(service.id)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50"
                    whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-emerald-800" />
                      <span className="font-semibold text-gray-900">
                        {service.title}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {service.content.title}
                          </h3>

                          <motion.div
                            className="mb-4 rounded-lg overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                          >
                            <img
                              src={service.content.image}
                              alt={service.content.title}
                              className="w-full h-64 object-cover"
                            />
                          </motion.div>

                          <motion.p
                            className="text-base text-gray-600 leading-relaxed mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                          >
                            {service.content.description}
                          </motion.p>

                          {/* Offers List for Mobile */}
                          <motion.ul
                            className="list-disc pl-6 text-gray-700 space-y-2 text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                          >
                            {service.content.offers?.map((offer, i) => (
                              <li key={i}>{offer}</li>
                            ))}
                          </motion.ul>
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
    </section>
  );
}
