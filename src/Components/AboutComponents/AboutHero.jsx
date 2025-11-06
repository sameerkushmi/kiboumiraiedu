import { useContext } from "react";
import MainHeroHelper from "../HelperComponents/MainHeroHelper";
import { LanguageContext } from "../../Context/Context";
import { languageData } from "../../Hooks/language";

export default function AboutHero() {

  const {language} = useContext(LanguageContext) 
  return (
    <div>
      <MainHeroHelper
        title={language === 'en' ? languageData.en.aboutKBMEducation : languageData.jp.aboutKBMEducation}
        description={language === 'en' ? languageData.en.aboutHeroDesc : languageData.jp.aboutHeroDesc}
      />
    </div>
  );
}
