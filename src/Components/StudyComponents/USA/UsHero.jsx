import { useContext } from "react";
import StudyHero from "../../HelperComponents/StudyHero/StudyHero";
import { LanguageContext } from "../../../Context/Context";
import { languageData } from "../../../Hooks/language";

export default function UsHero() {

  const {language} = useContext(LanguageContext);

  return (
    <div>
      <StudyHero
        bgImg="/Uploads/study/us/us.png"
        title={ language === 'en' ? languageData.en.USA + "🇺🇸" : languageData.jp.USA + "🇺🇸"}
        description={ language === 'en' ? languageData.en.usHeroDesc : languageData.jp.usHeroDesc}
        img="/Uploads/home/hero.avif"
        video="/Uploads/home/hero.mp4"
      />
    </div>
  );
}
