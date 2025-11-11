import { useContext } from "react";
import {
  Globe2,
  FileCheck,
  MessageCircle,
  ShieldCheck,
  Clock,
  UserCheck,
} from "lucide-react";
import { languageData } from "../../../../Hooks/language";
import { LanguageContext } from "../../../../Context/Context";

export default function VisaWhyUs() {

  const { language } = useContext(LanguageContext)

  const reasons = [
    {
      title: language === 'en' ? languageData.en.expertVisaConsultants : languageData.jp.expertVisaConsultants,
      description: language === 'en' ? languageData.en.visaWhyUsDesc_1 : languageData.jp.visaWhyUsDesc_1 ,
      icon: UserCheck,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: language === 'en' ? languageData.en.countrySpecificGuidance : languageData.jp.countrySpecificGuidance,
      description: language === 'en' ? languageData.en.visaWhyUsDesc_2 : languageData.jp.visaWhyUsDesc_2 ,
      icon: Globe2,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: language === 'en' ? languageData.en.errorFreeDocumentation : languageData.jp.errorFreeDocumentation,
      description: language === 'en' ? languageData.en.visaWhyUsDesc_3 : languageData.jp.visaWhyUsDesc_3 ,
      icon: FileCheck,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: language === 'en' ? languageData.en.aboutSubWhyTitle_6 : languageData.jp.aboutSubWhyTitle_6,
      description: language === 'en' ? languageData.en.visaWhyUsDesc_4 : languageData.jp.visaWhyUsDesc_4 ,
      icon: MessageCircle,
      color: "from-orange-500 to-red-500",
    },
    {
      title: language === 'en' ? languageData.en.secureConfidential : languageData.jp.secureConfidential,
      description: language === 'en' ? languageData.en.visaWhyUsDesc_5 : languageData.jp.visaWhyUsDesc_5 ,
      icon: ShieldCheck,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: language === 'en' ? languageData.en.timelyProcessing : languageData.jp.timelyProcessing,
      description: language === 'en' ? languageData.en.visaWhyUsDesc_6 : languageData.jp.visaWhyUsDesc_6 ,
      icon: Clock,
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="px-6 py-16  mx-6 bg-gray-100 rounded-3xl relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-10 blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            {
              language === 'en' ? languageData.en.visaWhyUsHeader : languageData.jp.visaWhyUsHeader
            }
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {
              language === 'en' ? languageData.en.visaWhyUsDesc : languageData.jp.visaWhyUsDesc
            }
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-200 group hover:-translate-y-2"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6  transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
