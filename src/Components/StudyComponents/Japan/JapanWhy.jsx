import { useContext } from "react";
import { LanguageContext } from "../../../Context/Context";
import { languageData } from "../../../Hooks/language";
import StudyWhy from "../../HelperComponents/StudyReq/StudyWhy";

export default function WhyJapan() {
  const { language } = useContext(LanguageContext);
  const japanReasons = [
    language === 'en' ? languageData.en.japanWhyBullets1 : languageData.jp.japanWhyBullets1,
    language === 'en' ? languageData.en.japanWhyBullets2 : languageData.jp.japanWhyBullets2,
    language === 'en' ? languageData.en.japanWhyBullets3 : languageData.jp.japanWhyBullets3,
    language === 'en' ? languageData.en.japanWhyBullets4 : languageData.jp.japanWhyBullets4,
    language === 'en' ? languageData.en.japanWhyBullets5 : languageData.jp.japanWhyBullets5,
    language === 'en' ? languageData.en.japanWhyBullets6 : languageData.jp.japanWhyBullets6,
    language === 'en' ? languageData.en.japanWhyBullets7 : languageData.jp.japanWhyBullets7,
    language === 'en' ? languageData.en.japanWhyBullets8 : languageData.jp.japanWhyBullets8,
    language === 'en' ? languageData.en.japanWhyBullets9 : languageData.jp.japanWhyBullets9,
    language === 'en' ? languageData.en.japanWhyBullets10 : languageData.jp.japanWhyBullets10,
  ];

  return (
    <StudyWhy
      title= {(language === 'en' ? languageData.en.japanWhyTitle : languageData.jp.japanWhyTitle) +'🇯🇵'}
      description={language === 'en' ? languageData.en.japanWhyDesc : languageData.jp.japanWhyDesc}
      backgroundImage="/Uploads/home/hero/japan.png"
      reasons={japanReasons}
    />
  );
}
