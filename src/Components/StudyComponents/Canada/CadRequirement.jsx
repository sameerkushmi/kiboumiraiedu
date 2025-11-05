import React from "react";
import { GraduationCap, DollarSign, FileText, Globe } from "lucide-react";

import ReqAccordion from "../../HelperComponents/StudyReq/ReqAccordion";

const australiaData = {
  title: "Requirements to Study in Canada 🇨🇦",
  subtitle:
    "Find out what you need to apply for your Australian student visa and start your studies in one of the world's best education systems.",
  backgroundImage: "/Uploads/study/cad/cad.jpg",
  ctaText: "Apply Now",
  accentColor: "text-sky-400",
  items: [
    {
      title: "Educational Requirements",
      icon: GraduationCap,
      content: [
        "Completion of at least 12 years of formal education (equivalent to Canadian high school diploma).",
        "Certified copies of academic transcripts and certificates translated into English or French.",
        "For post-secondary or graduate programs, submission of English or French language proficiency scores (IELTS, TOEFL, or TEF).",
        "Each college or university may have specific academic entry requirements—check course prerequisites before applying.",
      ],
    },
    {
      title: "Financial Requirements",
      icon: DollarSign,
      content: [
        "Proof of sufficient funds to cover tuition, living expenses, and return transportation.",
        "Minimum financial requirement: CAD 20,635 per year (outside Quebec) or as per IRCC guidelines.",
        "Acceptable proof includes recent bank statements, GIC (Guaranteed Investment Certificate), or sponsor letters.",
        "Sponsored or scholarship students must provide official documentation confirming financial support.",
      ],
    },
    {
      title: "Visa & Documentation",
      icon: FileText,
      content: [
        "Valid passport with at least 6 months of remaining validity.",
        "Letter of Acceptance (LOA) from a Designated Learning Institution (DLI) in Canada.",
        "Completed Study Permit application with Statement of Purpose (SOP).",
        "Proof of payment for tuition fees and GIC (if applicable).",
        "Medical examination and police clearance certificates may be required depending on country of residence.",
      ],
    },
    {
      title: "Cultural & Practical Preparation",
      icon: Globe,
      content: [
        "Familiarize yourself with Canada’s multicultural and inclusive academic environment.",
        "Understand student work rights—up to 20 hours per week during study and full-time during scheduled breaks.",
        "Research accommodation options such as on-campus housing, homestay, or private rentals.",
        "Learn about public transport, healthcare (e.g., provincial health insurance), and emergency contacts before arrival.",
      ],
    },
  ],
};

export default function CadRequirement() {
  return <ReqAccordion {...australiaData} />;
}
