import { useContext } from "react";
import StudyHero from "../../HelperComponents/StudyHero/StudyHero";
import { LanguageContext } from "../../../Context/Context";
import { languageData } from "../../../Hooks/language";

export default function UkHero() {

  const {language} =  useContext(LanguageContext);

  return (
    <div>
      <StudyHero
        bgImg="/Uploads/study/uk/uk.webp"
        title={language === 'en' ? languageData.en.unitedKingdom + '🇬🇧' : languageData.jp.unitedKingdom + '🇬🇧'}
        description={language === 'en' ? languageData.en.ukHeroDesc : languageData.jp.ukHeroDesc}
        img="/Uploads/home/hero.avif"
        video="/Uploads/home/hero.mp4"
      />
    </div>
  );
}
