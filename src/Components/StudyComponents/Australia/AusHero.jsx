import  { useContext } from "react";
import StudyHero from "../../HelperComponents/StudyHero/StudyHero";
import { LanguageContext } from "../../../Context/Context";
import { languageData } from "../../../Hooks/language";

export default function AusHero() {

  const { language} = useContext(LanguageContext);

  return (
    <div>
      <StudyHero
        bgImg="/Uploads/study/aus/aus.webp"
        title={`${language === 'en' ? languageData.en.australia : languageData.jp.australia} 🇦🇺`}
        description={language === 'en' ? languageData.en.ausHeroDesc : languageData.jp.ausHeroDesc}
        img="/Uploads/home/hero.avif"
        video="/Uploads/home/hero.mp4"
      />
    </div>
  );
}
