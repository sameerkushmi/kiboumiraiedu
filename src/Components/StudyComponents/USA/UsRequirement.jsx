import { useContext } from "react";
import { GraduationCap, DollarSign, FileText, Globe } from "lucide-react";  
import ReqAccordion from "../../HelperComponents/StudyReq/ReqAccordion";
import { languageData } from "../../../Hooks/language";
import { LanguageContext } from "../../../Context/Context";



export default function UsRequirement() {

  const {language} = useContext(LanguageContext)

  const australiaData = {
  title: language === 'en' ? languageData.en.usRequirementTitle : languageData.jp.usRequirementTitle,
  subtitle: language === 'en' ? languageData.en.usRequirementSubTitle : languageData.jp.usRequirementSubTitle,
  backgroundImage: "/Uploads/study/us/usreq.jpg",
  ctaText: "Apply Now",
  accentColor: "text-sky-400",
  items: [
    {
      title: language === 'en' ? languageData.en.japanEducationalRequirement : languageData.jp.japanEducationalRequirement,
      icon: GraduationCap,
      content: [
        language === 'en' ? languageData.en.USRequirementContent1 : languageData.jp.USRequirementContent1,
        language === 'en' ? languageData.en.USRequirementContent2 : languageData.jp.USRequirementContent2,
        language === 'en' ? languageData.en.USRequirementContent3 : languageData.jp.USRequirementContent3,
        language === 'en' ? languageData.en.USRequirementContent4 : languageData.jp.USRequirementContent4,
        language === 'en' ? languageData.en.USRequirementContent5 : languageData.jp.USRequirementContent5,
      ],
    },
    {
      title: language === 'en' ? languageData.en.japanFinancialRequirement : languageData.jp.japanFinancialRequirement,
      icon: DollarSign,
      content: [
        language === 'en' ? languageData.en.USFinancialRequirementContent1 : languageData.jp.USFinancialRequirementContent1,
        language === 'en' ? languageData.en.USFinancialRequirementContent2 : languageData.jp.USFinancialRequirementContent2,
        language === 'en' ? languageData.en.USFinancialRequirementContent3 : languageData.jp.USFinancialRequirementContent3,
        language === 'en' ? languageData.en.USFinancialRequirementContent4 : languageData.jp.USFinancialRequirementContent4,
      ],
    },
    {
      title: language === 'en' ? languageData.en.visaDocumentation : languageData.jp.visaDocumentation,
      icon: FileText,
      content: [
        language === 'en' ? languageData.en.USVisaDocumentationContent1 : languageData.jp.USVisaDocumentationContent1,
        language === 'en' ? languageData.en.USVisaDocumentationContent2 : languageData.jp.USVisaDocumentationContent2,
        language === 'en' ? languageData.en.USVisaDocumentationContent3 : languageData.jp.USVisaDocumentationContent3,
        language === 'en' ? languageData.en.USVisaDocumentationContent4 : languageData.jp.USVisaDocumentationContent4,
      ],
    },
    {
      title: language === 'en' ? languageData.en.culturalPracticalPreparation : languageData.jp.culturalPracticalPreparation,
      icon: Globe,
      content: [
        language === 'en' ? languageData.en.USCulturalPracticalPreparationContent1 : languageData.jp.USCulturalPracticalPreparationContent1,
        language === 'en' ? languageData.en.USCulturalPracticalPreparationContent2 : languageData.jp.USCulturalPracticalPreparationContent2,
        language === 'en' ? languageData.en.USCulturalPracticalPreparationContent3 : languageData.jp.USCulturalPracticalPreparationContent3,
        language === 'en' ? languageData.en.USCulturalPracticalPreparationContent4 : languageData.jp.USCulturalPracticalPreparationContent4,
      ],
    },
  ],
};
  return <ReqAccordion {...australiaData} />;
}
