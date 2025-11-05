import StudyWhy from "../../HelperComponents/StudyReq/StudyWhy";

export default function CadWhy() {
  const canadaReasons = [
    "High-quality education with internationally recognized degrees.",
    "Welcoming, multicultural society with a safe environment for students.",
    "Opportunities for part-time work during studies to gain experience.",
    "Post-graduation work permits and pathways to permanent residency.",
    "Vibrant student communities with cultural and recreational activities.",
    "Modern infrastructure, advanced research facilities, and technology-driven learning.",
    "Generous scholarships and financial support options for international students.",
    "Strong economy with demand for skilled graduates across multiple industries.",
    "Beautiful natural landscapes and high quality of life.",
    "Supportive policies for international students, including healthcare and housing assistance.",
  ];

  return (
    <StudyWhy
      title="Why Choose Canada 🇨🇦"
      description="Canada is known for its top-quality education, safe environment, and excellent career opportunities, making it a top choice for international students."
      backgroundImage="/Uploads/study/cad/cadwhy.webp"
      reasons={canadaReasons}
    />
  );
}
