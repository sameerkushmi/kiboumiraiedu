import { useContext } from "react";
import { languageData } from "../../../../Hooks/language";
import HeroSection2 from "../../../HelperComponents/AboutSubComponent/HeroSection2";
import {LanguageContext} from '../../../../Context/Context'

export default function UniSelhero() {

  const {language} = useContext(LanguageContext)

  return (
    <div>
      <HeroSection2
        title={language === 'en' ? languageData.en.uniSelheroTitle: languageData.jp.uniSelheroTitle}
        description={language === 'en' ? languageData.en.uniSelheroDesc : languageData.jp.uniSelheroDesc}
        btnText={language === 'en' ? languageData.en.learnMore : languageData.jp.learnMore}
      />
    </div>
  );
}
