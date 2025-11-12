import { useContext } from "react";
import StudyWhy from "../../HelperComponents/StudyReq/StudyWhy";
import { LanguageContext } from "../../../Context/Context";
import { languageData } from "../../../Hooks/language";

export default function WhyAustralia() {

  const {language} = useContext(LanguageContext);

  const australiaReasons = [
    language === 'en' ? languageData.en.ausWhyReasons1 : languageData.jp.ausWhyReasons1,
    language === 'en' ? languageData.en.ausWhyReasons2 : languageData.jp.ausWhyReasons2,
    language === 'en' ? languageData.en.ausWhyReasons3 : languageData.jp.ausWhyReasons3,
    language === 'en' ? languageData.en.ausWhyReasons4 : languageData.jp.ausWhyReasons4,
    language === 'en' ? languageData.en.ausWhyReasons5 : languageData.jp.ausWhyReasons5,
    language === 'en' ? languageData.en.ausWhyReasons6 : languageData.jp.ausWhyReasons6,
    language === 'en' ? languageData.en.ausWhyReasons7 : languageData.jp.ausWhyReasons7,
    language === 'en' ? languageData.en.ausWhyReasons8 : languageData.jp.ausWhyReasons8,
    language === 'en' ? languageData.en.ausWhyReasons9 : languageData.jp.ausWhyReasons9,
    language === 'en' ? languageData.en.ausWhyReasons10 : languageData.jp.ausWhyReasons10,
  ];

  return (
    <StudyWhy
      title={(language === 'en' ? languageData.en.whyChooseAustraliaTitle : languageData.jp.whyChooseAustraliaTitle)   + '🇦🇺'}
      description={language === 'en' ? languageData.en.whyChooseAustraliaDesc : languageData.jp.whyChooseAustraliaDesc}
      backgroundImage="/Uploads/home/hero/usa.jpg"
      reasons={australiaReasons}
    />
  );
}
