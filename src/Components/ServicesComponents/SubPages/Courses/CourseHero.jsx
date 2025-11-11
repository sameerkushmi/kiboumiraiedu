import { useContext } from "react"
import { LanguageContext } from "../../../../Context/Context"
import HeroSection2 from "../../../HelperComponents/AboutSubComponent/HeroSection2"
import { languageData } from "../../../../Hooks/language"

const CourseHero = () => {

const {language} = useContext(LanguageContext)
  return (
    <div>
        <HeroSection2
            title={language === 'en' ? languageData.en.computerTraining : languageData.jp.computerTraining}
            description={language === 'en' ? languageData.en.courseHeroDesc : languageData.jp.courseHeroDesc}
            btnText={language === 'en' ? languageData.en.learnMore : languageData.jp.learnMore}
        />
    </div>
  )
}

export default CourseHero