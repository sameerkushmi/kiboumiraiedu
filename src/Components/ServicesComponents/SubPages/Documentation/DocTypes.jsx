import { useContext, useState } from "react";
import { FileText, CheckCircle, ChevronDown } from "lucide-react";
import { languageData } from "../../../../Hooks/language";
import { LanguageContext } from "../../../../Context/Context";

export default function DocTypes() {
  const [openIndex, setOpenIndex] = useState(0);
  const { language } = useContext(LanguageContext)

  const documents = [
    {
      title: language === 'en' ? languageData.en.docTypesTitle_1 : languageData.jp.docTypesTitle_1,
      description: language === 'en' ? languageData.en.docTypesDesc_1 : languageData.jp.docTypesDesc_1,
      details: [
        language === 'en' ? languageData.en.docTypesTitle_1_details_1 : languageData.jp.docTypesTitle_1_details_1,
        language === 'en' ? languageData.en.docTypesTitle_1_details_2 : languageData.jp.docTypesTitle_1_details_2,
        language === 'en' ? languageData.en.docTypesTitle_1_details_3 : languageData.jp.docTypesTitle_1_details_3,
        language === 'en' ? languageData.en.docTypesTitle_1_details_4 : languageData.jp.docTypesTitle_1_details_4,
      ],
    },
    {
      title: language === 'en' ? languageData.en.docTypesTitle_2 : languageData.jp.docTypesTitle_2,
      description: language === 'en' ? languageData.en.docTypesDesc_2 : languageData.jp.docTypesDesc_2,
      details: [
        language === 'en' ? languageData.en.docTypesTitle_2_details_1 : languageData.jp.docTypesTitle_2_details_1,
        language === 'en' ? languageData.en.docTypesTitle_2_details_2 : languageData.jp.docTypesTitle_2_details_2,
        language === 'en' ? languageData.en.docTypesTitle_2_details_3 : languageData.jp.docTypesTitle_2_details_3,
        language === 'en' ? languageData.en.docTypesTitle_2_details_4 : languageData.jp.docTypesTitle_2_details_4,
      ],
    },
    {
      title: language === 'en' ? languageData.en.financialDocuments : languageData.jp.financialDocuments,
      description: language === 'en' ? languageData.en.docTypesDesc_3 : languageData.jp.docTypesDesc_3,
      details: [
        language === 'en' ? languageData.en.docTypesTitle_3_details_1 : languageData.jp.docTypesTitle_3_details_1,
        language === 'en' ? languageData.en.docTypesTitle_3_details_2 : languageData.jp.docTypesTitle_3_details_2,
        language === 'en' ? languageData.en.docTypesTitle_3_details_3 : languageData.jp.docTypesTitle_3_details_3,
        language === 'en' ? languageData.en.docTypesTitle_3_details_4 : languageData.jp.docTypesTitle_3_details_4,
        language === 'en' ? languageData.en.docTypesTitle_3_details_5 : languageData.jp.docTypesTitle_3_details_5,
      ],
    },
    {
      title: language === 'en' ? languageData.en.docTypesTitle_4 : languageData.jp.docTypesTitle_4,
      description: language === 'en' ? languageData.en.docTypesDesc_4 : languageData.jp.docTypesDesc_4,
      details: [
        language === 'en' ? languageData.en.docTypesTitle_4_details_1 : languageData.jp.docTypesTitle_4_details_1,
        language === 'en' ? languageData.en.docTypesTitle_4_details_2 : languageData.jp.docTypesTitle_4_details_2,
        language === 'en' ? languageData.en.docTypesTitle_4_details_3 : languageData.jp.docTypesTitle_4_details_3,
        language === 'en' ? languageData.en.docTypesTitle_4_details_4 : languageData.jp.docTypesTitle_4_details_4,
        language === 'en' ? languageData.en.docTypesTitle_4_details_5 : languageData.jp.docTypesTitle_4_details_5,
      ],
    },
    {
      title: language === 'en' ? languageData.en.docTypesTitle_5 : languageData.jp.docTypesTitle_5,
      description: language === 'en' ? languageData.en.docTypesDesc_5 : languageData.jp.docTypesDesc_5,
      details: [
        language === 'en' ? languageData.en.docTypesTitle_5_details_1 : languageData.jp.docTypesTitle_5_details_1,
        language === 'en' ? languageData.en.docTypesTitle_5_details_2 : languageData.jp.docTypesTitle_5_details_2,
        language === 'en' ? languageData.en.docTypesTitle_5_details_3 : languageData.jp.docTypesTitle_5_details_3,
        language === 'en' ? languageData.en.docTypesTitle_5_details_4 : languageData.jp.docTypesTitle_5_details_4,
        language === 'en' ? languageData.en.docTypesTitle_5_details_5 : languageData.jp.docTypesTitle_5_details_5,
      ],
    },
    {
      title: language === 'en' ? languageData.en.certificateEligibility : languageData.jp.certificateEligibility,
      description: language === 'en' ? languageData.en.docTypesDesc_6 : languageData.jp.docTypesDesc_6,
      details: [
        language === 'en' ? languageData.en.docTypesTitle_6_details_1 : languageData.jp.docTypesTitle_6_details_1,
        language === 'en' ? languageData.en.docTypesTitle_6_details_2 : languageData.jp.docTypesTitle_6_details_2,
        language === 'en' ? languageData.en.docTypesTitle_6_details_3 : languageData.jp.docTypesTitle_6_details_3,
        language === 'en' ? languageData.en.docTypesTitle_6_details_4 : languageData.jp.docTypesTitle_6_details_4,
        language === 'en' ? languageData.en.docTypesTitle_6_details_5 : languageData.jp.docTypesTitle_6_details_5,
      ],
    },
    {
      title: language === 'en' ? languageData.en.passportIDVerification : languageData.jp.passportIDVerification,
      description: language === 'en' ? languageData.en.docTypesDesc_7 : languageData.jp.docTypesDesc_7,
      details: [
        language === 'en' ? languageData.en.docTypesTitle_7_details_1 : languageData.jp.docTypesTitle_7_details_1,
        language === 'en' ? languageData.en.docTypesTitle_7_details_2 : languageData.jp.docTypesTitle_7_details_2,
        language === 'en' ? languageData.en.docTypesTitle_7_details_3 : languageData.jp.docTypesTitle_7_details_3,
        language === 'en' ? languageData.en.docTypesTitle_7_details_4 : languageData.jp.docTypesTitle_7_details_4,
        language === 'en' ? languageData.en.docTypesTitle_7_details_5 : languageData.jp.docTypesTitle_7_details_5,
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
            {
              language === 'en' ? languageData.en.docTypesHeader : languageData.jp.docTypesHeader
            }
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {
              language === 'en' ? languageData.en.docTypesDesc : languageData.jp.docTypesDesc
            }
          </p>
        </div>

        {/* Accordion Section */}
        <div className="max-w-4xl mx-auto space-y-5">
          {documents.map((doc, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm border-2 rounded-2xl shadow-lg transition-all duration-300 ${openIndex === index
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
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${openIndex === index
                        ? "bg-text"
                        : "bg-background group-hover-200"
                      }`}
                  >
                    <FileText
                      className={`w-6 h-6 ${openIndex === index ? "text-white" : "text-text"
                        }`}
                    />
                  </div>
                  <span className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-text transition-colors">
                    {doc.title}
                  </span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 flex-shrink-0 transform transition-transform duration-300 ${openIndex === index ? "rotate-180 text-blue-600" : ""
                    }`}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index
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
                        {
                          language === 'en' ? languageData.en.whatsIncluded : languageData.jp.whatsIncluded
                        }:
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
                        💡
                        {
                          language === 'en' ? languageData.en.docTypesNeedHelp : languageData.jp.docTypesNeedHelp
                        }
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
                {
                  language === 'en' ? languageData.en.needHelpwithDocuments : languageData.jp.needHelpwithDocuments
                }
              </p>
              <p className="text-gray-600 text-sm">
                {
                  language === 'en' ? languageData.en.contactOurPersonalizedDocumentation : languageData.jp.contactOurPersonalizedDocumentation
                }
              </p>
            </div>
            <button className="px-6 py-3 bg-text  text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap">
              {
                language === 'en' ? languageData.en.getStarted:languageData.jp.getStarted
              }
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
