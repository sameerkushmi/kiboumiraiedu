import { useState, useEffect, useContext } from "react";
import { Tabs } from "antd";
import { Star } from "lucide-react";
import { languageData } from "../../../../Hooks/language";
import { LanguageContext } from "../../../../Context/Context";

const CourseSection = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const { language } = useContext(LanguageContext)

  // ✅ Detect window resize
  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const courseTitle = [
    language === 'en' ? languageData.en.basicCourse : languageData.jp.basicCourse,
    language === 'en' ? languageData.en.advanceOfficePackage : languageData.jp.advanceOfficePackage,
    language === 'en' ? languageData.en.accountingTraining : languageData.jp.accountingTraining,
    language === 'en' ? languageData.en.graphicDesign : languageData.jp.graphicDesign,
    language === 'en' ? languageData.en.videoEditing : languageData.jp.videoEditing,
    language === 'en' ? languageData.en.advanceDiploma : languageData.jp.advanceDiploma,
  ];

  const courseList = {
    0: ["MS Paint", "MS Word", "MS Excel", "MS Powerpoint", "Typing Master", "Email"],
    1: ["MS Word", "MS Excel", "MS Powerpoint", "MS Paint", "Typing Master", "Adobe Indesign", "Adobe Photoshop", "Canva"],
    2: ["Tally ERP9", "Tally Prime", "MS Excel", "Busy Accounting"],
    3: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Indesign", "CorelDraw", "Canva"],
    4: ["Adobe Photoshop", "Adobe PremierePro"],
    5: [
      "MS Powerpoint", "MS Paint", "MS Word", "MS Excel", "Typing Master", "Email",
      "Adobe Indesign", "Adobe Photoshop", "Canva", "Tally ERP9",
      "Tally Prime", "Busy Accounting", "Adobe Illustrator", "CorelDraw",
    ],
  };

  const allCourses = [
    {
      title: "MS Powerpoint",
      img: "/Uploads/courses/ms-powerpoint.jpg",
      caption: language === 'en' ? languageData.en.MSPowerPointCaption : languageData.jp.MSPowerPointCaption,
      tagLine: language === 'en' ? languageData.en.MSPowerPointTagline : languageData.jp.MSPowerPointTagline,
      rate: "5",
    },
    {
      title: "MS Paint",
      img: "/Uploads/courses/msPaint.jpeg",
      caption: language === 'en' ? languageData.en.MSPaintCaption : languageData.jp.MSPaintCaption,
      tagLine: language === 'en' ? languageData.en.MSPaintTagline : languageData.jp.MSPaintTagline,
      rate: "5",
    },
    {
      title: "MS Word",
      img: "/Uploads/courses/ms-word.png",
      caption: language === 'en' ? languageData.en.MSWordCaption : languageData.jp.MSWordCaption,
      tagLine: language === 'en' ? languageData.en.MSWordTagline : languageData.jp.MSWordTagline,
      rate: "5",
    },
    {
      title: "MS Excel",
      img: "/Uploads/courses/ms-excel.jpeg",
      caption: language === 'en' ? languageData.en.MSExcelCaption: languageData.jp.MSExcelCaption,
      tagLine: language === 'en' ? languageData.en.MSExcelTagline: languageData.jp.MSExcelTagline,
      rate: "5",
    },
    {
      title: "Typing Master",
      img: "/Uploads/courses/typingmaster.png",
      caption: language === 'en' ? languageData.en.TypingMasterCaption: languageData.jp.TypingMasterCaption,
      tagLine: language === 'en' ? languageData.en.TypingMasterTagline: languageData.jp.TypingMasterTagline,
      rate: "5",
    },
    {
      title: "Email",
      img: "/Uploads/courses/email.png",
      caption: language === 'en' ? languageData.en.emailCaption: languageData.jp.emailCaption,
      tagLine: language === 'en' ? languageData.en.emailTagline: languageData.jp.emailTagline,
      rate: "5",
    },
    {
      title: "Adobe Indesign",
      img: "/Uploads/courses/indesign.jpg",
      caption: language === 'en' ? languageData.en.adobeIndesignCaption: languageData.jp.adobeIndesignCaption,
      tagLine: language === 'en' ? languageData.en.adobeIndesignTagline: languageData.jp.adobeIndesignTagline,
      rate: "5",
    },
    {
      title: "Adobe Photoshop",
      img: "/Uploads/courses/photoshop.png",
      caption: language === 'en' ? languageData.en.adobePhotoshopCaption: languageData.jp.adobePhotoshopCaption,
      tagLine: language === 'en' ? languageData.en.adobePhotoshopTagline: languageData.jp.adobePhotoshopTagline,
      rate: "5",
    },
    {
      title: "Canva",
      img: "/Uploads/courses/canva.jpg",
      caption: language === 'en' ? languageData.en.canvaCapiton: languageData.jp.canvaCapiton,
      tagLine: language === 'en' ? languageData.en.canvaTagline: languageData.jp.canvaTagline,
      rate: "5",
    },
    {
      title: "Tally ERP9",
      img: "/Uploads/courses/tally-erp-9.jpg",
      caption: language === 'en' ? languageData.en.tallyERP9Caption: languageData.jp.tallyERP9Caption,
      tagLine: language === 'en' ? languageData.en.tallyERP9Tagline: languageData.jp.tallyERP9Tagline,
      rate: "5",
    },
    {
      title: "Tally Prime",
      img: "/Uploads/courses/tally-prime.png",
      caption: language === 'en' ? languageData.en.tallyPrimeCaption: languageData.jp.tallyPrimeCaption,
      tagLine: language === 'en' ? languageData.en.tallyPrimeTagline: languageData.jp.tallyPrimeTagline,
      rate: "5",
    },
    {
      title: "Busy Accounting",
      img: "/Uploads/courses/busy.jpg",
      caption: language === 'en' ? languageData.en.busyAccountingCaption: languageData.jp.busyAccountingCaption,
      tagLine: language === 'en' ? languageData.en.busyAccountingTagline: languageData.jp.busyAccountingTagline,
      rate: "5",
    },
    {
      title: "Adobe Illustrator",
      img: "/Uploads/courses/illustrator.png",
      caption: language === 'en' ? languageData.en.adobeIllustratorCaption: languageData.jp.adobeIllustratorCaption,
      tagLine: language === 'en' ? languageData.en.adobeIllustratorTagline: languageData.jp.adobeIllustratorTagline,
      rate: "5",
    },
    {
      title: "CorelDraw",
      img: "/Uploads/courses/coreldraw.png",
      caption: language === 'en' ? languageData.en.coreldrwaCaption: languageData.jp.coreldrwaCaption,
      tagLine: language === 'en' ? languageData.en.coreldrwaTagline: languageData.jp.coreldrwaTagline,
      rate: "5",
    },
    {
      title: "Adobe PremierePro",
      img: "/Uploads/courses/premierepro.jpeg",
      caption: language === 'en' ? languageData.en.adobepremiereproCaption: languageData.jp.adobepremiereproCaption,
      tagLine: language === 'en' ? languageData.en.adobepremiereproTagline: languageData.jp.adobepremiereproTagline,
      rate: "5",
    },
  ];



  const renderCourses = (key) => {
    const selectedTitles = courseList[key] || [];
    const selectedCourses = allCourses.filter((c) => selectedTitles.includes(c.title));

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {selectedCourses.map((course, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-md">
                {course.title}
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                {course.caption}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{course.tagLine}</p>
              <div className="flex items-center gap-1 text-gray-600 mt-2">
                <p className="text-xs">{course.rate}</p>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-16 my-16 bg-gray-100 rounded-3xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {
            language === 'en' ? languageData.en.courseSectionHeader : languageData.jp.courseSectionHeader
          }
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          {
            language === 'en' ? languageData.en.courseSectionMainDesc : languageData.jp.courseSectionMainDesc
          }
        </p>
      </div>

      {/* Tabs */}
      <Tabs
        tabPosition={windowSize <= 720 ? "top" : "left"}
        items={courseTitle.map((title, i) => ({
          label: title,
          key: String(i),
          children: renderCourses(String(i)),
        }))}
      />
    </section>
  );
};

export default CourseSection;
