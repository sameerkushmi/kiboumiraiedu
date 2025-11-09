import { useContext } from "react";
import HeroSection2 from "../../../HelperComponents/AboutSubComponent/HeroSection2";
import { LanguageContext } from "../../../../Context/Context";
import { languageData } from "../../../../Hooks/language";

export default function AboutWhyHero() {

  const {language} = useContext(LanguageContext)

  return (
    <div>
      <HeroSection2
        title={language === 'en' ? languageData.en.whyChooseKBM : languageData.jp.whyChooseKBM}
        description={language === 'en' ? languageData.en.aboutHeroDesc : languageData.jp.aboutHeroDesc}
        btnText={language === 'en' ? languageData.en.learnMore : languageData.jp.learnMore}
      />
    </div>
  );
}
