import React, { useState } from "react";
import { FileText, CheckCircle, ChevronDown } from "lucide-react";

export default function DocTypes() {
  const [openIndex, setOpenIndex] = useState(0);

  const documents = [
    {
      title: "Academic Transcripts & Certificates",
      description:
        "We assist in organizing and verifying your academic records to meet university and embassy requirements.",
      details: [
        "Degree certificates and mark sheets from all institutions attended",
        "Official transcripts with proper authentication and attestation",
        "Credential evaluation reports for international qualifications",
        "Grade conversion documents where required by the destination country",
      ],
    },
    {
      title: "Language Proficiency Certificates (IELTS, JLPT, TOEFL)",
      description:
        "Our team guides you in obtaining and submitting valid language certificates required for your chosen country.",
      details: [
        "IELTS for English-speaking countries (minimum band requirements vary)",
        "JLPT (N5-N1) for Japanese language programs and universities",
        "TOEFL iBT for US and Canadian institutions",
        "Other accepted tests like PTE, Duolingo English Test, or institution-specific exams",
      ],
    },
    {
      title: "Financial Documents",
      description:
        "From sponsor letters to bank statements, we ensure your financial proofs meet official formats and criteria.",
      details: [
        "Bank statements covering 6-12 months showing sufficient funds",
        "Sponsor letters from parents or guardians with income proof",
        "Property documents, fixed deposits, or investment certificates",
        "Scholarship award letters or financial aid documentation",
        "Tax returns and employment letters of sponsors",
      ],
    },
    {
      title: "Statement of Purpose (SOP) & Recommendation Letters",
      description:
        "Get expert help in crafting a strong SOP and professional recommendation letters to strengthen your application.",
      details: [
        "Personalized SOP highlighting your academic goals and career aspirations",
        "2-3 recommendation letters from professors or employers",
        "Letters formatted according to university and visa requirements",
        "Proofreading and editing services to ensure clarity and impact",
        "Guidance on addressing specific prompts and questions",
      ],
    },
    {
      title: "Medical and Police Clearance Reports",
      description:
        "We help you obtain verified health and police clearance documents necessary for your visa approval.",
      details: [
        "Medical examination from embassy-approved clinics and hospitals",
        "Vaccination records including COVID-19 and country-specific requirements",
        "Police clearance certificate from local authorities and previous residences",
        "Background verification and character certificates",
        "TB test results and chest X-rays where applicable",
      ],
    },
    {
      title: "Certificate of Eligibility (COE)",
      description:
        "Guidance on preparing and submitting your COE for Japanese visa applications with complete accuracy.",
      details: [
        "Complete COE application form with accurate information",
        "Supporting documents compiled according to immigration guidelines",
        "Coordination with Japanese educational institutions for COE issuance",
        "Tracking and follow-up until COE is received",
        "Assistance with visa application after COE approval",
      ],
    },
    {
      title: "Passport & ID Verification",
      description:
        "We review your passport and ID documents to ensure validity and compliance with embassy standards.",
      details: [
        "Passport validity check (must be valid for at least 6 months beyond travel date)",
        "Verification of personal information accuracy across all documents",
        "National ID cards, birth certificates, and citizenship documents",
        "Passport-sized photographs meeting specific country requirements",
        "Guidance on passport renewal or new issuance if necessary",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative px-6 py-20 my-16 mx-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-200 rounded-full opacity-10 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 leading-tight">
            Documents We Help With
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We guide you through every step of document preparation to ensure
            compliance, accuracy, and embassy approval. Our expert team ensures
            your documentation is complete and professionally prepared.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="max-w-4xl mx-auto space-y-5">
          {documents.map((doc, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm border-2 rounded-2xl shadow-lg transition-all duration-300 ${
                openIndex === index
                  ? "border-none shadow-xl"
                  : "border-transparent hover:border-background"
              }`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left px-6 md:px-8 py-5 focus:outline-none group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      openIndex === index
                        ? "bg-text"
                        : "bg-background group-hover-200"
                    }`}
                  >
                    <FileText
                      className={`w-6 h-6 ${
                        openIndex === index ? "text-white" : "text-text"
                      }`}
                    />
                  </div>
                  <span className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-text transition-colors">
                    {doc.title}
                  </span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 flex-shrink-0 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[800px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-6 pt-2">
                  <div className="pl-16">
                    <p className="text-gray-700 text-base leading-relaxed mb-4 font-medium">
                      {doc.description}
                    </p>

                    <div className="space-y-3 mt-4">
                      <p className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-3">
                        What's Included:
                      </p>
                      {doc.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 group/item"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500 italic">
                        💡 Need help with this document? Our team provides
                        personalized guidance and verification services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg border border-gray-200">
            <div className="text-left">
              <p className="font-semibold text-gray-900 text-lg mb-1">
                Need help with your documents?
              </p>
              <p className="text-gray-600 text-sm">
                Contact our experts for personalized documentation support
              </p>
            </div>
            <button className="px-6 py-3 bg-text  text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
