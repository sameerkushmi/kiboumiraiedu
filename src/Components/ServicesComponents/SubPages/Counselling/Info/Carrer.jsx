import { useContext } from "react";
import Accordion from "../../../../HelperComponents/Accordion";
import { languageData } from "../../../../../Hooks/language";
import { LanguageContext } from "../../../../../Context/Context";

export default function Carrer() {

  const {language} = useContext(LanguageContext)

  const counselingItems = [
    {
      title: language === 'en' ? languageData.en.aboutSubWhyTitle_2 : languageData.jp.aboutSubWhyTitle_2,
      content:language === 'en' ? languageData.en.carrerContent_1 : languageData.jp.carrerContent_1,
    },
    {
      title: language === 'en' ? languageData.en.carrerTitle_2: languageData.jp.carrerTitle_2,
      content:language === 'en' ? languageData.en.carrerContent_2 : languageData.jp.carrerContent_2,
    },
    {
      title: language === 'en' ? languageData.en.carrerTitle_3: languageData.jp.carrerTitle_3,
      content:language === 'en' ? languageData.en.carrerContent_3 : languageData.jp.carrerContent_3,
    },
    {
      title: language === 'en' ? languageData.en.carrerTitle_4: languageData.jp.carrerTitle_4,
      content:language === 'en' ? languageData.en.carrerContent_4 : languageData.jp.carrerContent_4,
    },
    {
      title: language === 'en' ? languageData.en.carrerTitle_5: languageData.jp.carrerTitle_5,
      content:language === 'en' ? languageData.en.carrerContent_5 : languageData.jp.carrerContent_5,
    },
  ];
  return (
    <>
      <div className="mb-16 max-w-6xl mx-auto bg-white shadow-2xl p-8 rounded-4xl">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {
              language === 'en' ? languageData.en.counsellingHeroTitle: languageData.jp.counsellingHeroTitle
            }
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-3"></div>
          <p className="max-w-3xl text-base md:text-xl">
            {
              language === 'en' ? languageData.en.carrerDesc : languageData.jp.carrerDesc
            }
          </p>
        </div>
        <Accordion items={counselingItems} />
      </div>
    </>
  );
}
