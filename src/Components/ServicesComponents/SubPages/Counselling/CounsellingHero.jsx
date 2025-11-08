import { useContext } from "react";
import HeroSection2 from "../../../HelperComponents/AboutSubComponent/HeroSection2";
import { LanguageContext } from "../../../../Context/Context";
import { languageData } from "../../../../Hooks/language";

export default function CounsellingHero() {

  const {language} = useContext(LanguageContext)
  return (
    <div>
      <HeroSection2
        title="Career Counselling"
        description="Get personalized guidance to plan your career path and achieve your study abroad goals."
        btnText={language === 'en' ? languageData.en.learnMore:languageData.jp.learnMore}
      />
    </div>
  );
}
