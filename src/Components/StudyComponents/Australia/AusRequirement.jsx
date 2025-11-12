import { useContext } from "react";
import { GraduationCap, DollarSign, FileText, Globe } from "lucide-react";

import ReqAccordion from "../../HelperComponents/StudyReq/ReqAccordion";
import { LanguageContext } from "../../../Context/Context";
import { languageData } from "../../../Hooks/language";



export default function AusRequirement() {
  const {language} = useContext(LanguageContext)

const australiaData = {
  title: (language === 'en' ? languageData.en.ausRequirementTitle + "🇦🇺": languageData.jp.ausRequirementTitle + "🇦🇺"),
  subtitle:language === 'en' ? languageData.en.ausRequirementSubTitle : languageData.jp.ausRequirementSubTitle,
  backgroundImage: "/Uploads/study/aus/aus2.png",
  ctaText: "Apply Now",
  accentColor: "text-sky-400",
  items: [
    {
      title: language === 'en' ? languageData.en.japanEducationalRequirement : languageData.jp.japanEducationalRequirement,
      icon: GraduationCap,
      content: [
        language === 'en' ? languageData.en.ausRequirementContent1 : languageData.jp.ausRequirementContent1,
        language === 'en' ? languageData.en.ausRequirementContent2 : languageData.jp.ausRequirementContent2,
        language === 'en' ? languageData.en.ausRequirementContent3 : languageData.jp.ausRequirementContent3,
        language === 'en' ? languageData.en.ausRequirementContent4 : languageData.jp.ausRequirementContent4,
      ],
    },
    {
      title: language === 'en'? languageData.en.japanFinancialRequirement : languageData.jp.japanFinancialRequirement,
      icon: DollarSign,
      content: [
        language === 'en' ? languageData.en.ausFinancialRequirementContent1 : languageData.jp.ausFinancialRequirementContent1,
        language === 'en' ? languageData.en.ausFinancialRequirementContent2 : languageData.jp.ausFinancialRequirementContent2,
        language === 'en' ? languageData.en.ausFinancialRequirementContent3 : languageData.jp.ausFinancialRequirementContent3,
        language === 'en' ? languageData.en.ausFinancialRequirementContent4 : languageData.jp.ausFinancialRequirementContent4,
      ],
    },
    {
      title: language === 'en' ? languageData.en.visaDocumentation : languageData.jp.visaDocumentation,
      icon: FileText,
      content: [
        language === 'en' ? languageData.en.ausVisaDocumentationContent1 : languageData.jp.ausVisaDocumentationContent1,
        language === 'en' ? languageData.en.ausVisaDocumentationContent2 : languageData.jp.ausVisaDocumentationContent2,
        language === 'en' ? languageData.en.ausVisaDocumentationContent3 : languageData.jp.ausVisaDocumentationContent3,
        language === 'en' ? languageData.en.ausVisaDocumentationContent4 : languageData.jp.ausVisaDocumentationContent4,
        language === 'en' ? languageData.en.ausVisaDocumentationContent5 : languageData.jp.ausVisaDocumentationContent5,
      ],
    },
    {
      title: language === 'en' ? languageData.en.culturalPracticalPreparation : languageData.jp.culturalPracticalPreparation,
      icon: Globe,
      content: [
        language === 'en' ? languageData.en.ausCulturalPracticalPreparationContent1 : languageData.jp.ausCulturalPracticalPreparationContent1,
        language === 'en' ? languageData.en.ausCulturalPracticalPreparationContent2 : languageData.jp.ausCulturalPracticalPreparationContent2,
        language === 'en' ? languageData.en.ausCulturalPracticalPreparationContent3 : languageData.jp.ausCulturalPracticalPreparationContent3,
        language === 'en' ? languageData.en.ausCulturalPracticalPreparationContent4 : languageData.jp.ausCulturalPracticalPreparationContent4,
      ],
    },
  ],
};
  return <ReqAccordion {...australiaData} />;
}
