import Carrer from "./Info/Carrer";
import Benefit from "./Info/Benefit";
import { languageData } from "../../../../Hooks/language";
import { useContext } from "react";
import { LanguageContext } from "../../../../Context/Context";

export default function CounsellingInfo() {

  const { language } = useContext(LanguageContext)

  return (
    <section className="px-6 py-16 my-16 mx-6 bg-gray-100 rounded-4xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          {
            language === 'en' ? languageData.en.counsellingServices : languageData.jp.counsellingServices
          }
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {
            language === 'en' ? languageData.en.counsellingInfoDesc : languageData.jp.counsellingInfoDesc
          }
        </p>
      </div>

      <Carrer />

      {/* Benefits Section */}
      <Benefit />
    </section>
  );
}
