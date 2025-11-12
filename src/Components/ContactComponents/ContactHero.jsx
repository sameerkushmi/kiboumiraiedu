import { useContext } from "react";
import { languageData } from "../../Hooks/language";
import MainHeroHelper from "../HelperComponents/MainHeroHelper";
import { LanguageContext } from "../../Context/Context";

export default function ContactHero() {

  const { language } = useContext(LanguageContext)

  return (
    <>
      <MainHeroHelper
        title={language === 'en' ? languageData.en.contact : languageData.jp.contact}
        description={language === 'en' ? languageData.en.contactHeroDesc : languageData.jp.contactHeroDesc}
      />
    </>
  );
}

