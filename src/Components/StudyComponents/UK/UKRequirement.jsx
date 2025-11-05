import React from "react";
import { GraduationCap, DollarSign, FileText, Globe } from "lucide-react";

import ReqAccordion from "../../HelperComponents/StudyReq/ReqAccordion";

const australiaData = {
  title: "Requirements to Study in UK 🇬🇧",
  subtitle:
    "Find out what you need to apply for your Australian student visa and start your studies in one of the world's best education systems.",
  backgroundImage: "/Uploads/study/uk/ukreq.jpg",
  ctaText: "Apply Now",
  accentColor: "text-sky-400",
  items: [
    {
      title: "Educational Requirements",
      icon: GraduationCap,
      content: [
        "Completion of at least 12 years of formal education (equivalent to UK A-levels or International Baccalaureate).",
        "Certified copies of academic transcripts and certificates in English.",
        "For higher education, submission of English proficiency scores (IELTS, TOEFL, or PTE Academic).",
        "Universities may have specific entry requirements—check individual course prerequisites before applying.",
      ],
    },
    {
      title: "Financial Requirements",
      icon: DollarSign,
      content: [
        "Proof of sufficient funds to cover tuition fees, accommodation, and living expenses.",
        "Estimated living cost: at least £1,334 per month in London or £1,023 per month outside London (for up to 9 months).",
        "Acceptable proof includes bank statements, sponsor letters, or financial guarantee documents.",
        "Sponsored or scholarship students must provide an official confirmation letter from the sponsor or funding body.",
      ],
    },
    {
      title: "Visa & Documentation",
      icon: FileText,
      content: [
        "Valid passport with at least 6 months of remaining validity.",
        "Confirmation of Acceptance for Studies (CAS) issued by a licensed UK institution.",
        "Completed Student Visa (formerly Tier 4) application and payment of the Immigration Health Surcharge (IHS).",
        "Proof of English language proficiency and financial evidence as per UKVI guidelines.",
        "Medical test (tuberculosis clearance) may be required depending on country of residence.",
      ],
    },
    {
      title: "Cultural & Practical Preparation",
      icon: Globe,
      content: [
        "Familiarize yourself with the UK’s academic culture focused on independent study and critical thinking.",
        "Understand student work rights—up to 20 hours per week during term time and full-time during holidays.",
        "Research accommodation options such as university halls, private housing, or homestays.",
        "Learn about public transport systems, NHS healthcare registration, and emergency services before arrival.",
      ],
    },
  ],
};

export default function UKRequirement() {
  return <ReqAccordion {...australiaData} />;
}
