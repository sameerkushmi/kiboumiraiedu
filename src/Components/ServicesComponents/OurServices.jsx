import React, { useState } from "react";
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

export default function OurServices() {
  const [activeService, setActiveService] = useState("consultation");
  const [openAccordion, setOpenAccordion] = useState(null);

  const services = [
    {
      id: "consultation",
      title: "1-on-1 Personalized Consultation",
      icon: UserCheck,
      content: {
        title: "Personalized Consultation",
        description:
          "Your journey begins with a private one-on-one consultation where our experienced counselors take time to understand your academic background, career aspirations, financial capability, and preferred destination. This step ensures that your study abroad plan is uniquely crafted for your goals rather than following a one-size-fits-all approach. Our expert team provides realistic insights, helps you clarify doubts, and builds a roadmap that aligns with your ambitions.",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
        offers: [
          "Comprehensive academic and financial profiling",
          "Detailed discussion on study destinations and goals",
          "Personalized study abroad roadmap",
          "Guidance on course eligibility and requirements",
          "Initial advice on scholarships and budgeting",
        ],
      },
    },
    {
      id: "course-guidance",
      title: "Course & Career Guidance",
      icon: BookOpen,
      content: {
        title: "Course & Career Guidance",
        description:
          "Choosing the right course is crucial to building a successful career abroad. Our counselors analyze your academic interests, skill set, and future aspirations to help you identify the best-fit programs across top global universities. We also consider job market trends, internship opportunities, and future prospects to ensure your education investment pays off long-term.",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
        offers: [
          "Career-oriented course selection assistance",
          "Guidance on high-demand programs globally",
          "Comparison of universities and course structures",
          "Future job market and PR pathway insights",
          "Expert advice on aligning course with career goals",
        ],
      },
    },
    {
      id: "test-prep",
      title: "Test Preparation Support",
      icon: GraduationCap,
      content: {
        title: "Test Preparation",
        description:
          "Many international universities require standardized test scores such as IELTS, TOEFL, or JLPT. We provide expert-led preparation support to help you achieve competitive results. Our training covers exam strategy, time management, and personalized practice to strengthen your performance and confidence.",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        offers: [
          "IELTS, TOEFL, PTE, and JLPT preparation support",
          "Customized study plans and mock tests",
          "Expert-led grammar, vocabulary, and speaking sessions",
          "One-on-one progress tracking and feedback",
          "Access to study materials and practice resources",
        ],
      },
    },
    {
      id: "university-selection",
      title: "University & Country Selection",
      icon: Globe2,
      content: {
        title: "University & Country Selection",
        description:
          "Selecting the right university and country determines your academic experience and long-term success. We analyze your academic background, field of interest, and financial plans to shortlist universities that fit your profile. Our global insights ensure you make informed decisions about where and what to study.",
        image:
          "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        offers: [
          "Profile-based university shortlisting",
          "Comparison of living costs and tuition fees",
          "Advice on country-specific admission requirements",
          "Guidance on scholarship and funding options",
          "Recommendations for safe and student-friendly destinations",
        ],
      },
    },
    {
      id: "documentation",
      title: "Documentation & Application Assistance",
      icon: FileCheck,
      content: {
        title: "Documentation & Application Assistance",
        description:
          "Proper documentation plays a vital role in your admission and visa process. Our dedicated team ensures that all your academic, financial, and identification documents meet the exact requirements of universities and embassies. We assist you in drafting statements of purpose (SOPs), resumes, and recommendation letters that make your application stand out.",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        offers: [
          "End-to-end assistance with application forms",
          "SOP, resume, and reference letter guidance",
          "Document verification and formatting support",
          "University and embassy submission tracking",
          "Error-free document preparation for visa compliance",
        ],
      },
    },
    {
      id: "interview-prep",
      title: "Visa & University Interview Prep",
      icon: MessageSquare,
      content: {
        title: "Interview Preparation",
        description:
          "Interviews are often the final step before admission or visa approval. Our experts train you to communicate clearly, handle difficult questions confidently, and present your intent effectively. With mock sessions and feedback, you’ll be fully prepared to make a positive impression before the university panel or embassy officials.",
        image:
          "https://images.unsplash.com/photo-1600718373744-878dfc0a6f52?w=800&q=80",
        offers: [
          "Mock interviews for visa and university preparation",
          "Feedback on communication and confidence",
          "Tips for handling tricky questions professionally",
          "Training on required documents and interview etiquette",
          "Cultural briefing for country-specific interviews",
        ],
      },
    },
    {
      id: "pre-departure",
      title: "Pre-departure Orientation",
      icon: PlaneTakeoff,
      content: {
        title: "Pre-departure Orientation",
        description:
          "Before you board your flight, we ensure you’re well-prepared for the journey ahead. Our pre-departure session covers essential travel tips, cultural guidance, financial management advice, and what to expect during your first few weeks abroad. It helps you transition smoothly into your new environment.",
        image:
          "https://images.unsplash.com/photo-1600566752187-2b3b6f0b1b12?w=800&q=80",
        offers: [
          "Detailed briefing on travel and arrival procedures",
          "Advice on accommodation, banking, and SIM setup",
          "Guidelines on safety and student rights abroad",
          "Tips for managing culture shock and homesickness",
          "Checklist of essentials before departure",
        ],
      },
    },
    {
      id: "cultural-training",
      title: "Cultural & Language Training",
      icon: Languages,
      content: {
        title: "Cultural & Language Training",
        description:
          "Studying abroad means adapting to new cultures and languages. We provide interactive cultural orientation and beginner-level language training to help students settle easily and communicate effectively. These sessions enhance confidence and foster a respectful understanding of your host country’s customs.",
        image:
          "https://images.unsplash.com/photo-1600566752600-b6d06aa0991a?w=800&q=80",
        offers: [
          "Basic language and communication training",
          "Cultural etiquette and social norms orientation",
          "Workplace behavior and academic communication guidance",
          "Interactive workshops with experienced mentors",
          "Cultural integration and adaptation strategies",
        ],
      },
    },
    {
      id: "post-arrival",
      title: "Post-arrival Support",
      icon: HelpingHand,
      content: {
        title: "Post-arrival Support",
        description:
          "Our relationship doesn’t end once you arrive at your destination. We continue supporting you during your early months abroad by assisting with accommodation setup, part-time job search, and local adjustments. You can always reach out for emergency or guidance support whenever needed.",
        image:
          "https://images.unsplash.com/photo-1590959651373-a3db0f1d7c61?w=800&q=80",
        offers: [
          "Airport pickup coordination and accommodation support",
          "Guidance on local transportation and registration",
          "Help with opening bank accounts and part-time jobs",
          "Emergency contact and welfare assistance",
          "Continuous communication support from home office",
        ],
      },
    },
    {
      id: "scholarships",
      title: "Scholarship & Financial Guidance",
      icon: Trophy,
      content: {
        title: "Scholarship & Financial Guidance",
        description:
          "Education abroad can be expensive, but we make it manageable. Our counselors help you explore scholarship opportunities, tuition discounts, and financial aid options available across universities. We guide you through the complete application process so you can focus on your studies without unnecessary stress.",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        offers: [
          "Scholarship eligibility assessment",
          "Guidance on need-based and merit-based funding",
          "Assistance with scholarship essays and forms",
          "Tips to strengthen your financial profile",
          "Information on tuition fee waivers and grants",
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
          Our Core Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Expert guidance to help you navigate your academic journey and achieve
          your study abroad dreams with confidence.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-[35%_65%] gap-8">
          {/* Left Side */}
          <div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-extralight text-gray-900 mb-1">
                KBM's Services
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
            Our Core Services
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
