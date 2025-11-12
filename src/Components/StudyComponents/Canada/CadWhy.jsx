import { useContext } from "react";
import StudyWhy from "../../HelperComponents/StudyReq/StudyWhy";
import { LanguageContext } from "../../../Context/Context";
import { languageData } from "../../../Hooks/language";

export default function CadWhy() {

  const {language} = useContext(LanguageContext)

  const canadaReasons = [
    language === 'en' ? languageData.en.cadWhyCanadaReason1:languageData.jp.cadWhyCanadaReason1,
    language === 'en' ? languageData.en.cadWhyCanadaReason2:languageData.jp.cadWhyCanadaReason2,
    language === 'en' ? languageData.en.cadWhyCanadaReason3:languageData.jp.cadWhyCanadaReason3,
    language === 'en' ? languageData.en.cadWhyCanadaReason4:languageData.jp.cadWhyCanadaReason4,
    language === 'en' ? languageData.en.cadWhyCanadaReason5:languageData.jp.cadWhyCanadaReason5,
    language === 'en' ? languageData.en.cadWhyCanadaReason6:languageData.jp.cadWhyCanadaReason6,
    language === 'en' ? languageData.en.cadWhyCanadaReason7:languageData.jp.cadWhyCanadaReason7,
    language === 'en' ? languageData.en.cadWhyCanadaReason8:languageData.jp.cadWhyCanadaReason8,
    language === 'en' ? languageData.en.cadWhyCanadaReason9:languageData.jp.cadWhyCanadaReason9,
    language === 'en' ? languageData.en.cadWhyCanadaReason10:languageData.jp.cadWhyCanadaReason10,
  ];

  return (
    <StudyWhy
      title={language === 'en' ? languageData.en.WhyChooseCanada : languageData.jp.WhyChooseCanada}
      description={language === 'en' ? languageData.en.cadWhyDesc : languageData.jp.cadWhyDesc}
      backgroundImage="/Uploads/study/cad/cadwhy.webp"
      reasons={canadaReasons}
    />
  );
}
