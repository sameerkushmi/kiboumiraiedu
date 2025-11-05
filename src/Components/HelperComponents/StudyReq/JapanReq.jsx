import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  GraduationCap,
  DollarSign,
  FileText,
  Globe,
} from "lucide-react";

const accordionData = [
  {
    title: "Educational Requirements",
    icon: GraduationCap,
    accent: "text-amber-400",
    content: [
      "Completion of at least 12 years of formal education (high school level).",
      "Official academic transcripts and school certificates in English or Japanese.",
      "Japanese Language Proficiency Test (JLPT N5 or above) is preferred for admission.",
      "Students applying for technical or university programs may need higher Japanese levels (N3–N2).",
      "Some institutions accept English-based courses—check specific program requirements.",
    ],
  },
  {
    title: "Financial Requirements",
    icon: DollarSign,
    accent: "text-yellow-400",
    content: [
      "Proof of sufficient funds to cover tuition and living expenses during your stay in Japan.",
      "A minimum of ¥1,000,000 (approx. USD 6,500) is recommended in your or your sponsor’s account.",
      "Bank statement or certificate of deposit issued within the last 6 months.",
      "Affidavit of financial support if funded by parents or a guardian.",
      "Scholarship or sponsorship letters can strengthen your visa application.",
    ],
  },
  {
    title: "Other Requirements",
    icon: FileText,
    accent: "text-amber-300",
    content: [
      "Valid passport with at least one year before expiration.",
      "Medical certificate confirming good physical and mental health.",
      "A clear Statement of Purpose outlining study goals and reasons for choosing Japan.",
      "Certificate of eligibility (COE) from the Japanese institution after initial approval.",
      "Passport-sized photographs for application and visa submission.",
    ],
  },
  {
    title: "Cultural & Practical Preparation",
    icon: Globe,
    accent: "text-yellow-300",
    content: [
      "Understanding of Japanese culture, manners, and lifestyle expectations.",
      "Basic Japanese conversational skills to adapt to daily life smoothly.",
      "Awareness of housing options, part-time work rules, and visa extensions.",
      "Participation in online orientation or preparatory programs before departure.",
    ],
  },
];

export default function JapanReq() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative flex items-center justify-center min-h-[80vh] overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 p-8 m-6 rounded-4xl">
      {/* Background overlay image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528164344705-47542687000d?w=1920')",
        }}
      ></div>

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-3">
            Study in Japan
          </h2>
          <p className="text-amber-100/90 text-lg">
            Understand all key requirements before applying for your Japanese
            student visa.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {accordionData.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div
                  className={`bg-stone-900/60 border border-stone-700 rounded-2xl backdrop-blur-md overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "shadow-lg shadow-amber-800/40 border-amber-600/60"
                      : "hover:shadow-md hover:shadow-amber-900/20"
                  }`}
                >
                  {/* Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  >
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-lg bg-stone-800/80 ${item.accent}`}
                    >
                      <Icon size={22} />
                    </div>
                    <span className="flex-1 text-lg font-semibold text-amber-100">
                      {item.title}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-amber-400"
                    >
                      <ChevronDown size={22} />
                    </motion.div>
                  </button>

                  {/* Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="px-6 pb-5"
                      >
                        <ul className="space-y-2 mt-2">
                          {item.content.map((point, i) => (
                            <li
                              key={i}
                              className="flex items-start text-amber-100/90 text-sm leading-relaxed"
                            >
                              <span className="mt-2 mr-3 w-1.5 h-1.5 bg-amber-400 rounded-full" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-amber-200 mb-4 text-lg">
            Ready to start your academic journey in Japan?
          </p>
          <button className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold rounded-full shadow-lg transition-transform hover:scale-105">
            Apply Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
