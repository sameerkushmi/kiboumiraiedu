import React, { useContext } from "react";
import StudyHero from "../../HelperComponents/StudyHero/StudyHero";
import { languageData } from "../../../Hooks/language";
import {LanguageContext} from '../../../Context/Context'

export default function JapanHero() {

  const {language} = useContext(LanguageContext)

  return (
    <div>
      <StudyHero
        bgImg="/Uploads/study/jap/jap.jpg"
        title={`${ language === 'en' ? languageData.en.japan : languageData.jp.japan}  🇯🇵`}
        description= {language === 'en' ? languageData.en.japanHeroDescription : languageData.jp.japanHeroDescription}
        img="/Uploads/home/hero.avif"
        video="/Uploads/home/hero.mp4"
      />
    </div>
  );
}
