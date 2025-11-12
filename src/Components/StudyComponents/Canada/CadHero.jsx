import { useContext } from "react";
import StudyHero from "../../HelperComponents/StudyHero/StudyHero";
import { LanguageContext } from "../../../Context/Context";
import { languageData } from "../../../Hooks/language";

export default function CadHero() {

  const {language} = useContext(LanguageContext)

  return (
    <div>
      <StudyHero
        bgImg="/Uploads/study/cad/cad2.jpg"
        title={ language === 'en' ? languageData.en.canada + '🇨🇦' : languageData.jp.canada + '🇨🇦'}
        description={language === 'en' ? languageData.en.cadHeroDesc : languageData.jp.cadHeroDesc}
        img="/Uploads/home/hero.avif"
        video="/Uploads/home/hero.mp4"
      />
    </div>
  );
}
