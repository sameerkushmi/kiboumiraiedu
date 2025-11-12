import { useContext } from "react";
import StudyWhy from "../../HelperComponents/StudyReq/StudyWhy";
import { LanguageContext } from "../../../Context/Context";
import { languageData } from "../../../Hooks/language";

export default function WhyUK() {

  const {language} = useContext(LanguageContext)

  const ukReasons = [
    language === 'en' ? languageData.en.UKWhyReason1 : languageData.jp.UKWhyReason1,
    language === 'en' ? languageData.en.UKWhyReason2 : languageData.jp.UKWhyReason2,
    language === 'en' ? languageData.en.UKWhyReason3 : languageData.jp.UKWhyReason3,
    language === 'en' ? languageData.en.UKWhyReason4 : languageData.jp.UKWhyReason4,
    language === 'en' ? languageData.en.UKWhyReason5 : languageData.jp.UKWhyReason5,
    language === 'en' ? languageData.en.UKWhyReason6 : languageData.jp.UKWhyReason6,
    language === 'en' ? languageData.en.UKWhyReason7 : languageData.jp.UKWhyReason7,
    language === 'en' ? languageData.en.UKWhyReason8 : languageData.jp.UKWhyReason8,
    language === 'en' ? languageData.en.UKWhyReason9 : languageData.jp.UKWhyReason9,
    language === 'en' ? languageData.en.UKWhyReason10 : languageData.jp.UKWhyReason10,
  ];

  return (
    <StudyWhy
      title={language === 'en' ? languageData.en.whyChooseUKTitle : languageData.jp.whyChooseUKTitle}
      description={language === 'en' ? languageData.en.whyChooseUKDesc : languageData.jp.whyChooseUKDesc}
      backgroundImage="/Uploads/study/uk/whyuk.jpg"
      reasons={ukReasons}
    />
  );
}
