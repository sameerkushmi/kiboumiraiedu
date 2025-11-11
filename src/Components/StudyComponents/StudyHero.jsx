import  { useContext } from "react";
import MainHeroHelper from "../HelperComponents/MainHeroHelper";
import { languageData } from "../../Hooks/language";
import { LanguageContext } from "../../Context/Context";

export default function StudyHero() {

  const {language} = useContext(LanguageContext)

  return (
    <>
      <MainHeroHelper
        title={language === 'en' ? languageData.en.studyHeroheader : languageData.jp.studyHeroheader}
        description={language === 'en' ? languageData.en.aboutHeroDesc : languageData.jp.aboutHeroDesc}
      />
    </>
  );
}
