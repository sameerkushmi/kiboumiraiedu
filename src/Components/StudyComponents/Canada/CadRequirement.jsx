import { useContext } from "react";
import { GraduationCap, DollarSign, FileText, Globe } from "lucide-react";

import ReqAccordion from "../../HelperComponents/StudyReq/ReqAccordion";
import { languageData } from "../../../Hooks/language";
import { LanguageContext } from "../../../Context/Context";



export default function CadRequirement() {

  const {language} = useContext(LanguageContext)

  const australiaData = {
  title: language === 'en' ? languageData.en.cadRequirementTitle : languageData.jp.cadRequirementTitle,
  subtitle:language === 'en' ? languageData.en.cadRequirementSubTitle : languageData.jp.cadRequirementSubTitle ,
  backgroundImage: "/Uploads/study/cad/cad.jpg",
  ctaText: "Apply Now",
  accentColor: "text-sky-400",
  items: [
    {
      title: language === 'en' ? languageData.en.japanEducationalRequirement : languageData.jp.japanEducationalRequirement,
      icon: GraduationCap,
      content: [
        language === 'en' ? languageData.en.cadRequirementContent1:languageData.jp.cadRequirementContent1,
        language === 'en' ? languageData.en.cadRequirementContent2:languageData.jp.cadRequirementContent2,
        language === 'en' ? languageData.en.cadRequirementContent3:languageData.jp.cadRequirementContent3,
        language === 'en' ? languageData.en.cadRequirementContent4:languageData.jp.cadRequirementContent4,
      ],
    },
    {
      title: language === 'en' ? languageData.en.japanFinancialRequirement : languageData.jp.japanFinancialRequirement,
      icon: DollarSign,
      content: [
        language === 'en' ? languageData.en.cadFinancialRequirementContent1 : languageData.jp.cadFinancialRequirementContent1,
        language === 'en' ? languageData.en.cadFinancialRequirementContent2 : languageData.jp.cadFinancialRequirementContent2,
        language === 'en' ? languageData.en.cadFinancialRequirementContent3 : languageData.jp.cadFinancialRequirementContent3,
        language === 'en' ? languageData.en.cadFinancialRequirementContent4 : languageData.jp.cadFinancialRequirementContent4,
      ],
    },
    {
      title: language === 'en' ? languageData.en.visaDocumentation : languageData.jp.visaDocumentation,
      icon: FileText,
      content: [
        language === 'en' ? languageData.en.cadVisaDocumentationContent1 : languageData.jp.cadVisaDocumentationContent1,
        language === 'en' ? languageData.en.cadVisaDocumentationContent2 : languageData.jp.cadVisaDocumentationContent2,
        language === 'en' ? languageData.en.cadVisaDocumentationContent3 : languageData.jp.cadVisaDocumentationContent3,
        language === 'en' ? languageData.en.cadVisaDocumentationContent4 : languageData.jp.cadVisaDocumentationContent4,
        language === 'en' ? languageData.en.cadVisaDocumentationContent5 : languageData.jp.cadVisaDocumentationContent5,
      ],
    },
    {
      title: language === 'en' ? languageData.en.culturalPracticalPreparation : languageData.jp.culturalPracticalPreparation,
      icon: Globe,
      content: [
        language === 'en' ? languageData.en.cadCulturalPreparationContent1 : languageData.jp.cadCulturalPreparationContent1,
        language === 'en' ? languageData.en.cadCulturalPreparationContent2 : languageData.jp.cadCulturalPreparationContent2,
        language === 'en' ? languageData.en.cadCulturalPreparationContent3 : languageData.jp.cadCulturalPreparationContent3,
        language === 'en' ? languageData.en.cadCulturalPreparationContent4 : languageData.jp.cadCulturalPreparationContent4,
      ],
    },
  ],
};

  return <ReqAccordion {...australiaData} />;
}
