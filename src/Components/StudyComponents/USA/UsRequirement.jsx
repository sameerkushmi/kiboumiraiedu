import React from "react";
import { GraduationCap, DollarSign, FileText, Globe } from "lucide-react";

import ReqAccordion from "../../HelperComponents/StudyReq/ReqAccordion";

const australiaData = {
  title: "Requirements to Study in USA 🇺🇸",
  subtitle:
    "Find out what you need to apply for your Australian student visa and start your studies in one of the world's best education systems.",
  backgroundImage: "/Uploads/study/us/usreq.jpg",
  ctaText: "Apply Now",
  accentColor: "text-sky-400",
  items: [
    {
      title: "Educational Requirements",
      icon: GraduationCap,
      content: [
        "Completion of at least 12 years of formal education (equivalent to U.S. high school diploma).",
        "Certified copies of academic transcripts and certificates in English.",
        "Submission of standardized test scores if required (SAT, ACT, GRE, or GMAT depending on program).",
        "Proof of English proficiency through IELTS, TOEFL, or Duolingo English Test for international students.",
        "Each institution may have specific academic and program prerequisites—verify before applying.",
      ],
    },
    {
      title: "Financial Requirements",
      icon: DollarSign,
      content: [
        "Proof of sufficient financial resources to cover tuition, living expenses, and travel costs.",
        "Estimated annual living cost ranges from USD 10,000–18,000, excluding tuition fees.",
        "Acceptable documents include recent bank statements, sponsor letters, or Form I-134 (Affidavit of Support).",
        "Scholarship or assistantship recipients must submit official award or funding confirmation letters.",
      ],
    },
    {
      title: "Visa & Documentation",
      icon: FileText,
      content: [
        "Valid passport with at least 6 months of validity beyond intended stay.",
        "Form I-20 issued by a SEVP-approved U.S. institution for F-1 visa applicants.",
        "Completed DS-160 visa application form and SEVIS fee payment receipt.",
        "Proof of financial ability, academic transcripts, and admission letter at the visa interview.",
        "Medical records, vaccination proof, and police clearance may be required in some cases.",
      ],
    },
    {
      title: "Cultural & Practical Preparation",
      icon: Globe,
      content: [
        "Familiarize yourself with U.S. classroom culture, which values participation and critical thinking.",
        "Understand student work rights—on-campus work allowed up to 20 hours per week during semesters.",
        "Explore accommodation options including dormitories, shared apartments, or homestays.",
        "Learn about local transportation, healthcare (student insurance plans), and emergency services before arrival.",
      ],
    },
  ],
};

export default function UsRequirement() {
  return <ReqAccordion {...australiaData} />;
}
