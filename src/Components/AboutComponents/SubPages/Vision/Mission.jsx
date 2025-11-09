import { useContext } from "react";
import { LanguageContext } from "../../../../Context/Context";
import { languageData } from "../../../../Hooks/language";

export default function Mission() {

  const {language}  = useContext(LanguageContext)
  
  return (
    <section className="mx-6 bg-blue text-white flex items-center py-12 md:py-20 rounded-4xl">
      <div className="container mx-auto p-6 md:p-10">
        {/* Use grid to divide height equally among 3 rows */}
        <div className="grid grid-rows-[auto_auto_auto] gap-8">
          {/* (02) and Heading */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-4xl md:text-7xl font-extralight italic">
              (02)
            </div>
            <div className="text-5xl md:text-8xl font-extrabold text-center md:text-right">
              {
                language === 'en' ? languageData.en.ourMission: languageData.jp.ourMission
              }

            </div>
          </div>

          {/* Description */}
          <div className="flex items-center justify-center text-center px-4">
            <p className="max-w-6xl text-sm sm:text-base md:text-lg leading-relaxed">
              {
                language === 'en' ? languageData.en.ourMissionDesc : languageData.jp.ourMissionDesc
              }
            </p>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center overflow-hidden rounded-2xl">
            <img
              src="/Uploads/about/vision/mission.jpg"
              alt="Our Vision"
              className="w-full h-[400px] md:h-[500px] object-cover object-top rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
