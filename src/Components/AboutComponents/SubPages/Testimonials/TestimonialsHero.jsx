import { useContext } from "react";
import HeroSection2 from "../../../HelperComponents/AboutSubComponent/HeroSection2";
import { LanguageContext } from "../../../../Context/Context";
import { languageData } from "../../../../Hooks/language";

export default function TestimonialsHero() {

  const {language} = useContext(LanguageContext)

  return (
    <div>
      <HeroSection2
        title={language === 'en' ? languageData.en.testimonialsHeroHeader : languageData.jp.testimonialsHeroHeader}
        description={language === 'en' ? languageData.en.testimonialsDesc : languageData.jp.testimonialsDesc}
        btnText={language === 'en' ? languageData.en.joinNow : languageData.jp.joinNow}
      />
    </div>
  );
}
