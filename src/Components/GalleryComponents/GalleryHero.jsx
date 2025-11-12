import { useContext } from "react";
import { languageData } from "../../Hooks/language";
import MainHeroHelper from "../HelperComponents/MainHeroHelper";
import { LanguageContext } from "../../Context/Context";

export default function GalleryHero() {

  const { language } = useContext(LanguageContext)

  return (
    <div>
      <MainHeroHelper
        title={language === 'en' ? languageData.en.MemoriesatKBM : languageData.jp.MemoriesatKBM}
        description={language === 'en' ? languageData.en.galleryHeroDesc : languageData.jp.galleryHeroDesc}
      />
    </div>
  );
}
