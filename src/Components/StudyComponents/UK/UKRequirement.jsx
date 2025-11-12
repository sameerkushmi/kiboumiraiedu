import { useContext } from "react";
import { GraduationCap, DollarSign, FileText, Globe } from "lucide-react";

import ReqAccordion from "../../HelperComponents/StudyReq/ReqAccordion";
import { languageData } from "../../../Hooks/language";
import { LanguageContext } from "../../../Context/Context";



export default function UKRequirement() {

  const {language} = useContext(LanguageContext)

  const australiaData = {
  title: language === 'en' ? languageData.en.UKRequirementTitle + "🇬🇧" : languageData.jp.ukRequirementTitle + '🇬🇧',
  subtitle: language === 'en' ? languageData.en.UKRequirementSubTitle : languageData.jp.UKRequirementSubTitle,
  backgroundImage: "/Uploads/study/uk/ukreq.jpg",
  ctaText: "Apply Now",
  accentColor: "text-sky-400",
  items: [
    {
      title: language === 'en' ? languageData.en.japanEducationalRequirement : languageData.jp.japanEducationalRequirement,
      icon: GraduationCap,
      content: [
        language === 'en' ? languageData.en.UKRequirementContent1 : languageData.jp.UKRequirementContent1,
        language === 'en' ? languageData.en.UKRequirementContent2 : languageData.jp.UKRequirementContent2,
        language === 'en' ? languageData.en.UKRequirementContent3 : languageData.jp.UKRequirementContent3,
        language === 'en' ? languageData.en.UKRequirementContent4 : languageData.jp.UKRequirementContent4,
      ],
    },
    {
      title: language === 'en' ? languageData.en.japanFinancialRequirement : languageData.jp.japanFinancialRequirement,
      icon: DollarSign,
      content: [
        language === 'en' ? languageData.en.UKFinancialRequirementContent1 : languageData.jp.UKFinancialRequirementContent1,
        language === 'en' ? languageData.en.UKFinancialRequirementContent2 : languageData.jp.UKFinancialRequirementContent2,
        language === 'en' ? languageData.en.UKFinancialRequirementContent3 : languageData.jp.UKFinancialRequirementContent3,
        language === 'en' ? languageData.en.UKFinancialRequirementContent4 : languageData.jp.UKFinancialRequirementContent4,
      ],
    },
    {
      title: language === 'en' ? languageData.en.visaDocumentation : languageData.jp.visaDocumentation,
      icon: FileText,
      content: [
        language === 'en' ? languageData.en.UKVisaDocumentationContent1 : languageData.jp.UKVisaDocumentationContent1,
        language === 'en' ? languageData.en.UKVisaDocumentationContent2 : languageData.jp.UKVisaDocumentationContent2,
        language === 'en' ? languageData.en.UKVisaDocumentationContent3 : languageData.jp.UKVisaDocumentationContent3,
        language === 'en' ? languageData.en.UKVisaDocumentationContent4 : languageData.jp.UKVisaDocumentationContent4,
        language === 'en' ? languageData.en.UKVisaDocumentationContent5 : languageData.jp.UKVisaDocumentationContent5,
      ],
    },
    {
      title: language === 'en' ? languageData.en.culturalPracticalPreparation : languageData.jp.culturalPracticalPreparation,
      icon: Globe,
      content: [
        language === 'en' ? languageData.en.UKCulturalPracticalPreparationContent1 : languageData.jp.UKCulturalPracticalPreparationContent1,
        language === 'en' ? languageData.en.UKCulturalPracticalPreparationContent2 : languageData.jp.UKCulturalPracticalPreparationContent2,
        language === 'en' ? languageData.en.UKCulturalPracticalPreparationContent3 : languageData.jp.UKCulturalPracticalPreparationContent3,
        language === 'en' ? languageData.en.UKCulturalPracticalPreparationContent4 : languageData.jp.UKCulturalPracticalPreparationContent4,
      ],
    },
  ],
};

  return <ReqAccordion {...australiaData} />;
}
