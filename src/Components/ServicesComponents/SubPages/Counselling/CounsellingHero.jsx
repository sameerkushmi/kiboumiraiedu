import { useContext } from "react";
import HeroSection2 from "../../../HelperComponents/AboutSubComponent/HeroSection2";
import { LanguageContext } from "../../../../Context/Context";
import { languageData } from "../../../../Hooks/language";

export default function CounsellingHero() {

  const {language} = useContext(LanguageContext)
  return (
    <div>
      <HeroSection2
        title={language === 'en' ? languageData.en.counsellingHeroTitle:  languageData.jp.counsellingHeroTitle}
        description={language === 'en' ? languageData.en.counsellingHeroDesc : languageData.jp.counsellingHeroDesc}
        btnText={language === 'en' ? languageData.en.learnMore:languageData.jp.learnMore}
      />
    </div>
  );
}
