import { useContext } from "react";
import HeroSection2 from "../../../HelperComponents/AboutSubComponent/HeroSection2";
import { languageData } from "../../../../Hooks/language";
import { LanguageContext } from "../../../../Context/Context";

export default function DocHero() {

  const {language} = useContext(LanguageContext)

  return (
    <div>
      <HeroSection2
        title={language === 'en' ? languageData.en.documentationHelp : languageData.jp.documentationHelp}
        description={language === 'en' ? languageData.en.docHeroDesc : languageData.jp.docHeroDesc}
        btnText={language === 'en' ? languageData.en.learnMore : languageData.jp.learnMore}
      />
    </div>
  );
}
