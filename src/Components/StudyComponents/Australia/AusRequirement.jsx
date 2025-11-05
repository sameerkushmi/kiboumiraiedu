import React from "react";
import { GraduationCap, DollarSign, FileText, Globe } from "lucide-react";

import ReqAccordion from "../../HelperComponents/StudyReq/ReqAccordion";

const australiaData = {
  title: "Requirements to Study in Australia 🇦🇺",
  subtitle:
    "Find out what you need to apply for your Australian student visa and start your studies in one of the world's best education systems.",
  backgroundImage: "/Uploads/study/aus/aus2.png",
  ctaText: "Apply Now",
  accentColor: "text-sky-400",
  items: [
    {
      title: "Educational Requirements",
      icon: GraduationCap,
      content: [
        "Completion of at least 12 years of formal education (or equivalent to Australian Year 12).",
        "Certified copies of academic transcripts and certificates in English.",
        "For higher education, submission of English proficiency test scores (IELTS, TOEFL, or PTE Academic).",
        "Each university has specific academic entry requirements—check course prerequisites before applying.",
      ],
    },
    {
      title: "Financial Requirements",
      icon: DollarSign,
      content: [
        "Evidence of sufficient funds to cover tuition fees, travel, and living expenses.",
        "Typically, at least AUD 24,505 per year (living cost estimate) plus tuition and travel costs.",
        "Recent bank statements, financial guarantee letters, or proof of income are accepted.",
        "Sponsored students must provide an official letter from the sponsor or scholarship provider.",
      ],
    },
    {
      title: "Visa & Documentation",
      icon: FileText,
      content: [
        "Valid passport with a minimum of 6 months remaining validity.",
        "Confirmation of Enrolment (CoE) issued by an Australian institution.",
        "Genuine Temporary Entrant (GTE) statement explaining study intentions.",
        "Overseas Student Health Cover (OSHC) proof before visa approval.",
        "Medical examination and police clearance certificates may be required.",
      ],
    },
    {
      title: "Cultural & Practical Preparation",
      icon: Globe,
      content: [
        "Understand Australia’s academic culture emphasizing research and independent learning.",
        "Learn about student work rights (up to 48 hours per fortnight during study sessions).",
        "Explore accommodation options—homestay, student housing, or private rentals.",
        "Familiarize yourself with public transport, healthcare, and local emergency contacts.",
      ],
    },
  ],
};

export default function AusRequirement() {
  return <ReqAccordion {...australiaData} />;
}
