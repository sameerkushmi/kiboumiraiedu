import { useContext } from "react";
import MainHeroHelper from "../HelperComponents/MainHeroHelper";
import {LanguageContext} from '../../Context/Context'
import { languageData } from "../../Hooks/language";

export default function ServicesHero() {

  const {language} = useContext(LanguageContext)

  return (
    <div>
      <MainHeroHelper
        title={language === 'en' ? languageData.en.servicesHeroTitle: languageData.jp.servicesHeroTitle}
        description={language === 'en' ? languageData.en.servicesHeroDesc : languageData.jp.servicesHeroDesc}
      />
    </div>
  );
}
