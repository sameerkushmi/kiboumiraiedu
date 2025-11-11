import { Link } from "react-router-dom";
import { languageData } from "../../../../Hooks/language";
import { useContext } from "react";
import { LanguageContext } from "../../../../Context/Context";

export default function VisaCTA() {

  const {language} = useContext(LanguageContext)

  return (
    <>
      <div className="mt-14 m-6">
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {
                language === 'en' ? languageData.en.visaCTAHeader : languageData.jp.visaCTAHeader
              }
            </h3>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              {
                language === 'en' ? languageData.en.visaCTADesc : languageData.jp.visaCTADesc
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                  {
                    language === 'en' ? languageData.en.bookConsultation : languageData.jp.bookConsultation
                  }
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
