import { useContext } from "react";
import { languageData } from "../../../../../Hooks/language";
import Accordion from "../../../../HelperComponents/Accordion";
import { LanguageContext } from "../../../../../Context/Context";

export default function Benefit() {

  const {language} = useContext(LanguageContext)

  const benefitsItems = [
    {
      title: language === 'en' ? languageData.en.benefitTitle_1 : languageData.jp.benefitTitle_1,
      content:language === 'en' ? languageData.en.benefitContent_1 : languageData.jp.benefitContent_1
    },
    {
      title: language === 'en' ? languageData.en.benefitTitle_2 : languageData.jp.benefitTitle_2,
      content:language === 'en' ? languageData.en.benefitContent_2 : languageData.jp.benefitContent_2
    },
    {
      title: language === 'en' ? languageData.en.benefitTitle_3 : languageData.jp.benefitTitle_3,
      content:language === 'en' ? languageData.en.benefitContent_3 : languageData.jp.benefitContent_3
    },
    {
      title: language === 'en' ? languageData.en.benefitTitle_4 : languageData.jp.benefitTitle_4,
      content:language === 'en' ? languageData.en.benefitContent_4 : languageData.jp.benefitContent_4
    },
    {
      title: language === 'en' ? languageData.en.benefitTitle_5 : languageData.jp.benefitTitle_5,
      content:language === 'en' ? languageData.en.benefitContent_5 : languageData.jp.benefitContent_5
    },
  ];
  return (
    <>
      <div className="max-w-6xl mx-auto bg-white shadow-2xl p-8 rounded-4xl">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {
              language === 'en' ? languageData.en.benefitHeader : languageData.jp.benefitHeader
            }
          </h2>
          <div className="w-20 h-1 bg-green-600 mb-3"></div>
          <p className="max-w-3xl text-base md:text-xl">
            {
              language === 'en' ? languageData.en.benefitDesc : languageData.jp.benefitDesc
            }
          </p>
        </div>
        <Accordion items={benefitsItems} />
      </div>
    </>
  );
}
