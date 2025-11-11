import { useContext } from "react";
import { languageData } from "../../../../Hooks/language";
import { LanguageContext } from "../../../../Context/Context";
import HeroSection2 from "../../../HelperComponents/AboutSubComponent/HeroSection2";

export default function VisaHero() {

  const {language} = useContext(LanguageContext)

  return (
    <div>
      <HeroSection2
        title={language === 'en' ? languageData.en.visaAssistance : languageData.jp.visaAssistance}
        description={language === 'en' ? languageData.en.visaHeroDesc : languageData.jp.visaHeroDesc}
        btnText={language === 'en' ? languageData.en.learnMore : languageData.jp.learnMore}
      />
    </div>
  );
}
