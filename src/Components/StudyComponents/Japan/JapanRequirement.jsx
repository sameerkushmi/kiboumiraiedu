import React from "react";
import { GraduationCap, DollarSign, FileText, Globe } from "lucide-react";
import ReqAccordion from "../../HelperComponents/StudyReq/ReqAccordion";

const japanData = {
  title: "Requirement to Study in Japan 🇯🇵",
  subtitle:
    "Understand all key requirements before applying for your Japanese student visa.",
  backgroundImage:
    "https://images.unsplash.com/photo-1528164344705-47542687000d?w=1920",
  ctaText: "Apply Now",
  items: [
    {
      title: "Educational Requirements",
      icon: GraduationCap,
      content: [
        "Completion of at least 12 years of formal education (high school level).",
        "Official academic transcripts and certificates in English or Japanese.",
        "JLPT N5 or above preferred; N3–N2 may be required for universities.",
        "Some programs accept English-based courses depending on the institution.",
      ],
    },
    {
      title: "Financial Requirements",
      icon: DollarSign,
      content: [
        "Proof of sufficient funds to cover tuition and living expenses.",
        "A minimum balance of ¥1,000,000 is recommended in your/sponsor’s account.",
        "Recent bank statements or certificates of deposit required.",
        "Affidavit of financial support if sponsored by a parent or guardian.",
      ],
    },
    {
      title: "Other Requirements",
      icon: FileText,
      content: [
        "Valid passport (minimum 1-year validity).",
        "Medical certificate confirming good health.",
        "Statement of Purpose explaining goals and motivation.",
        "Certificate of Eligibility (COE) from the Japanese institution.",
      ],
    },
    {
      title: "Cultural & Practical Preparation",
      icon: Globe,
      content: [
        "Learn basic Japanese conversation and culture etiquette.",
        "Understand part-time work regulations and housing options.",
        "Attend orientation programs before departure.",
      ],
    },
  ],
};

export default function JapanRequirement() {
  return <ReqAccordion {...japanData} />;
}
