import { useContext } from "react";
import HeroSection2 from "../../../HelperComponents/AboutSubComponent/HeroSection2";
import { LanguageContext } from "../../../../Context/Context";
import { languageData } from "../../../../Hooks/language";

export default function VisionHero() {

  const { language } = useContext(LanguageContext)

  return (
    <div>
      <HeroSection2
        title={ language === 'en' ? languageData.en.ourMissionVision: languageData.jp.ourMissionVision}
        description={language === 'en' ? languageData.en.visionHeroDesc: languageData.jp.visionHeroDesc}
        btnText={language === 'en' ? languageData.en.learnMore : languageData.jp.learnMore}
      />
    </div>
  );
}
