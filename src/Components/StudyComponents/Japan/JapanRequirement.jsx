import React from "react";
import { GraduationCap, DollarSign, FileText, Globe } from "lucide-react";
import ReqAccordion from "../../HelperComponents/StudyReq/ReqAccordion";
import { LanguageContext } from "../../../Context/Context"; 
import { languageData } from "../../../Hooks/language"; 



export default function JapanRequirement() {

  const { language } = React.useContext(LanguageContext); 

  const japanData = {
  title: (language=== 'en' ? languageData.en.japanRequirementTitle : languageData.jp.japanRequirementTitle) + '🇯🇵',
  subtitle:
    language=== 'en' ? languageData.en.japanRequirementSubTitle : languageData.jp.japanRequirementSubTitle,
  backgroundImage:
    "https://images.unsplash.com/photo-1528164344705-47542687000d?w=1920",
  ctaText: "Apply Now",
  items: [
    {
      title: language=== 'en' ? languageData.en.japanEducationalRequirement : languageData.jp.japanEducationalRequirement,
      icon: GraduationCap,
      content: [
        language=== 'en' ? languageData.en.japanEducationalRequirementContent1: languageData.jp.japanEducationalRequirementContent1,
        language=== 'en' ? languageData.en.japanEducationalRequirementContent2 : languageData.jp.japanEducationalRequirementContent2,
        language=== 'en' ? languageData.en.japanEducationalRequirementContent3 : languageData.jp.japanEducationalRequirementContent3,
        language=== 'en' ? languageData.en.japanEducationalRequirementContent4 : languageData.jp.japanEducationalRequirementContent4,
      ],
    },
    {
      title: language=== 'en' ? languageData.en.japanFinancialRequirement : languageData.jp.japanFinancialRequirement,
      icon: DollarSign,
      content: [
        language=== 'en' ? languageData.en.japanFinancialRequirementContent1 : languageData.jp.japanFinancialRequirementContent1,
        language=== 'en' ? languageData.en.japanFinancialRequirementContent2 : languageData.jp.japanFinancialRequirementContent2,
        language=== 'en' ? languageData.en.japanFinancialRequirementContent3 : languageData.jp.japanFinancialRequirementContent3,
        language=== 'en' ? languageData.en.japanFinancialRequirementContent4 : languageData.jp.japanFinancialRequirementContent4,
      ],
    },
    {
      title: language=== 'en' ? languageData.en.japanOtherRequirement : languageData.jp.japanOtherRequirement,
      icon: FileText,
      content: [
        language=== 'en' ? languageData.en.japanOtherRequirementContent1 : languageData.jp.japanOtherRequirementContent1,
        language=== 'en' ? languageData.en.japanOtherRequirementContent2 : languageData.jp.japanOtherRequirementContent2,
        language=== 'en' ? languageData.en.japanOtherRequirementContent3 : languageData.jp.japanOtherRequirementContent3,
        language=== 'en' ? languageData.en.japanOtherRequirementContent4 : languageData.jp.japanOtherRequirementContent4,
      ],
    },
    {
      title: language=== 'en' ? languageData.en.japanCulturalRequirement : languageData.jp.japanCulturalRequirement,
      icon: Globe,
      content: [
        language=== 'en' ? languageData.en.japanCulturalRequirementContent1 : languageData.jp.japanCulturalRequirementContent1,
        language=== 'en' ? languageData.en.japanCulturalRequirementContent2 : languageData.jp.japanCulturalRequirementContent2,
        language=== 'en' ? languageData.en.japanCulturalRequirementContent3 : languageData.jp.japanCulturalRequirementContent3,
      ],
    },
  ],
};
  return <ReqAccordion {...japanData} />;
}
