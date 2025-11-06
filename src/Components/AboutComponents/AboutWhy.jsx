import { useContext } from "react";
import { Link } from "react-router-dom";
import { languageData } from "../../Hooks/language";
import { LanguageContext } from "../../Context/Context";

export default function AboutWhy() {

  const {language} = useContext(LanguageContext)

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
          {
            language === 'en' ? languageData.en.aboutWhyHeader: languageData.jp.aboutWhyHeader
          }
        </h2>
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          {
            language === 'en' ? languageData.en.aboutWhyPara_1: languageData.jp.aboutWhyPara_1
          }
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-4 max-w-6xl mx-auto ">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {/* Card 1 */}
          <div className="relative h-[40vh] rounded-3xl flex items-center justify-center text-2xl font-semibold">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center rounded-3xl"
              style={{
                backgroundImage: "url('/Uploads/about/why/counselling.png')",
                zIndex: 0,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl"></div>
            </div>
            <div className="absolute bottom-3 p-4 text-background">
              <div className="text-lg font-semibold mb-1">
                {
                  language === 'en' ? languageData.en.personalizedCounselling :languageData.jp.personalizedCounselling
                }
              </div>
              <p className="text-base max-w-4xl">
                {
                  language === 'en' ? languageData.en.aboutWhyCardPara_1 :languageData.jp.aboutWhyCardPara_1
                }
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative h-[40vh] rounded-3xl flex items-center justify-center text-2xl font-semibold">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center rounded-3xl"
              style={{
                backgroundImage: "url('/Uploads/about/why/experts.jpg')",
                zIndex: 0,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl"></div>
            </div>
            <div className="absolute bottom-3 p-4 text-background">
              <div className="text-lg font-semibold mb-1">
                {
                  language === 'en' ? languageData.en.experiencedIndustryExperts:languageData.jp.experiencedIndustryExperts
                }
              </div>
              <p className="text-base max-w-4xl">
                {
                  language === 'en' ? languageData.en.abooutWhyCardPara_2:languageData.jp.abooutWhyCardPara_2
                }
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4">
          {/* Left large box */}
          <div className="relative rounded-3xl md:h-[60vh] h-[30vh] flex items-center justify-center text-2xl font-semibold">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center rounded-3xl"
              style={{
                backgroundImage: "url('/Uploads/about/why/transparent.jpg')",
                zIndex: 0,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl"></div>
            </div>
            <div className="absolute bottom-3 p-4 text-background">
              <div className="text-lg font-semibold mb-1">
                {
                  language === 'en' ? languageData.en.transparentProcess : languageData.jp.transparentProcess
                }
              </div>
              <p className="text-base max-w-4xl">
                {
                  language === 'en' ? languageData.en.aboutWhyCardPara_3 : languageData.jp.aboutWhyCardPara_3
                }
              </p>
            </div>
          </div>

          {/* Right stacked boxes */}
          <div className="grid grid-rows-2 gap-4 md:h-[60vh]">
            {/* Box 1 */}
            <div className="relative rounded-3xl flex items-center justify-center text-2xl font-semibold h-[30vh] md:h-auto">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center rounded-3xl"
                style={{
                  backgroundImage: "url('/Uploads/about/why/end.jpg')",
                  zIndex: 0,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute bottom-3 p-4 text-background">
                <div className="text-lg font-semibold mb-1">
                  {
                    language === 'en' ? languageData.en.endToEndSupport: languageData.jp.endToEndSupport
                  }
                </div>
                <p className="text-base max-w-4xl">
                  {
                    language === 'en' ? languageData.en.aboutWhyCardPara_4: languageData.jp.aboutWhyCardPara_4
                  }
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="relative rounded-3xl flex items-center justify-center text-2xl font-semibold h-[30vh] md:h-auto">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center rounded-3xl"
                style={{
                  backgroundImage: "url('/Uploads/about/why/network.webp')",
                  zIndex: 0,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute bottom-3 p-4 text-background">
                <div className="text-lg font-semibold mb-1">
                  {
                    language === 'en' ? languageData.en.globalUniversityNetwork: languageData.jp.globalUniversityNetwork
                  }
                </div>
                <p className="text-base max-w-4xl">
                  {
                    language === 'en' ? languageData.en.aboutWhyCardPara_5: languageData.jp.aboutWhyCardPara_5
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-center mt-8 flex-col text-base md:text-xl gap-3">
        <p>
          {
            language === 'en' ? languageData.en.aboutWhyCTA : languageData.jp.aboutWhyCTA
          }
        </p>
        <Link to="/about/why-choose-us">
          <button className="px-6 py-2 text-lg md:text-2xl bg-text text-white rounded-xl hover:scale-105 duration-500 ease-in-out">
            {
              language === 'en' ? languageData.en.learnMore: languageData.jp.learnMore
            }
          </button>
        </Link>
      </div>
    </section>
  );
}
