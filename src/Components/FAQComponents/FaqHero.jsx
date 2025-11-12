import { useContext } from "react";
import HeroSection2 from "../HelperComponents/AboutSubComponent/HeroSection2";
import { languageData } from "../../Hooks/language";
import { LanguageContext } from "../../Context/Context";

export default function FaqHero() {

  const {language} = useContext( LanguageContext)

  return (
    <div>
      <HeroSection2
        title={language === 'en' ? languageData.en.FAQ : languageData.jp.FAQ}
        description={language === 'en' ? languageData.en.faqHeroDesc : languageData.jp.faqHeroDesc}
        btnText={language === 'en' ? languageData.en.contact : languageData.jp.contact}
      />
    </div>
  );
}
