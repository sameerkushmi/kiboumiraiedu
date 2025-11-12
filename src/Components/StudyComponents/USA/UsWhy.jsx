import { useContext } from "react";
import StudyWhy from "../../HelperComponents/StudyReq/StudyWhy";
import { LanguageContext } from "../../../Context/Context";
import { languageData } from "../../../Hooks/language";

export default function WhyUS() {

  const {language} = useContext(LanguageContext)

  const usReasons = [
    language === 'en' ? languageData.en.USWhyReason1 : languageData.jp.USWhyReason1,
    language === 'en' ? languageData.en.USWhyReason2 : languageData.jp.USWhyReason2,
    language === 'en' ? languageData.en.USWhyReason3 : languageData.jp.USWhyReason3,
    language === 'en' ? languageData.en.USWhyReason4 : languageData.jp.USWhyReason4,
    language === 'en' ? languageData.en.USWhyReason5 : languageData.jp.USWhyReason5,
    language === 'en' ? languageData.en.USWhyReason6 : languageData.jp.USWhyReason6,
    language === 'en' ? languageData.en.USWhyReason7 : languageData.jp.USWhyReason7,
    language === 'en' ? languageData.en.USWhyReason8 : languageData.jp.USWhyReason8,
    language === 'en' ? languageData.en.USWhyReason9 : languageData.jp.USWhyReason9,
    language === 'en' ? languageData.en.USWhyReason10 : languageData.jp.USWhyReason10,
  ];

  return (
    <StudyWhy
      title={language === 'en' ? languageData.en.whyChooseUSTitle : languageData.jp.whyChooseUSTitle}
      description={language === 'en' ? languageData.en.UsWhyDesc : languageData.jp.UsWhyDesc}
      backgroundImage="/Uploads/study/us/uswhy.jpg"
      reasons={usReasons}
    />
  );
}
