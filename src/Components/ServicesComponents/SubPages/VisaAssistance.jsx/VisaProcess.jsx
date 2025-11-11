import {
  ClipboardList,
  FileSearch,
  FileSignature,
  FileCheck,
  PlaneTakeoff,
} from "lucide-react";
import { languageData } from "../../../../Hooks/language";
import { useContext } from "react";
import { LanguageContext } from "../../../../Context/Context";

export default function VisaProcess() {

  const {language} = useContext(LanguageContext)

  const steps = [
    {
      title: language === 'en' ? languageData.en.visaProcessTitle_1 : languageData.jp.visaProcessTitle_1,
      description:language === 'en' ? languageData.en.visaProcessDesc_1 : languageData.jp.visaProcessDesc_1,
      icon: ClipboardList,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: language === 'en' ? languageData.en.visaProcessTitle_2 : languageData.jp.visaProcessTitle_2,
      description:language === 'en' ? languageData.en.visaProcessDesc_2 : languageData.jp.visaProcessDesc_2,
      icon: FileSearch,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: language === 'en' ? languageData.en.visaProcessTitle_3 : languageData.jp.visaProcessTitle_3,
      description:language === 'en' ? languageData.en.visaProcessDesc_3 : languageData.jp.visaProcessDesc_3,
      icon: FileSignature,
      color: "from-orange-500 to-red-500",
    },
    {
      title: language === 'en' ? languageData.en.visaProcessTitle_4 : languageData.jp.visaProcessTitle_4,
      description:language === 'en' ? languageData.en.visaProcessDesc_4 : languageData.jp.visaProcessDesc_4,
      icon: FileCheck,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: language === 'en' ? languageData.en.visaProcessTitle_5 : languageData.jp.visaProcessTitle_5,
      description:language === 'en' ? languageData.en.visaProcessDesc_5 : languageData.jp.visaProcessDesc_5,
      icon: PlaneTakeoff,
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section className="relative px-6 py-20 my-16 mx-6 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 rounded-3xl overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-10 blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 rounded-full opacity-10 blur-3xl translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-200 rounded-full opacity-10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {
              language === 'en' ? languageData.en.visaProcessHeader : languageData.jp.visaProcessHeader
            }
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {
              language === 'en' ? languageData.en.visaProcessDesc : languageData.jp.visaProcessDesc
            }
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 mx-20"></div>

          <div className="grid grid-cols-5 gap-8 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-200 group hover:-translate-y-2">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="text-center mb-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-bold text-sm">
                        {idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 text-center leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet layout */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-200 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-bold text-sm">
                        {idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden space-y-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative pl-16">
                {idx < steps.length - 1 && (
                  <div className="absolute left-7 top-16 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-200"></div>
                )}
                <div
                  className={`absolute left-0 top-0 w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-700 font-bold text-sm">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 leading-snug flex-1">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
