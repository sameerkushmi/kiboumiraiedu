import { useContext } from "react"
import { LanguageContext } from "../../../../Context/Context"
import HeroSection2 from "../../../HelperComponents/AboutSubComponent/HeroSection2"
import { languageData } from "../../../../Hooks/language"

const CourseHero = () => {

const {language} = useContext(LanguageContext)
  return (
    <div>
        <HeroSection2
            title={`Computer Training`}
            description={`Unlock your potential in technology! Our computer courses are designed for beginners and professionals who want to master practical computer skills, coding, and IT tools step by step.`}
            btnText={language === 'en' ? languageData.en.learnMore : languageData.jp.learnMore}
        />
    </div>
  )
}

export default CourseHero