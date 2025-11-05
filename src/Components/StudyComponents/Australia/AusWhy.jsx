import StudyWhy from "../../HelperComponents/StudyReq/StudyWhy";

export default function WhyAustralia() {
  const australiaReasons = [
    "Globally recognized universities offering a wide range of academic programs.",
    "High quality of education supported by advanced teaching and research facilities.",
    "Welcoming multicultural society with students from all around the world.",
    "Opportunity to work part-time while studying to gain international experience.",
    "Strong post-study work rights and pathway to permanent residency.",
    "Safe, clean, and friendly cities ranked among the best in the world for students.",
    "Vibrant lifestyle with beautiful beaches, nature, and modern infrastructure.",
    "Excellent healthcare system and support services for international students.",
    "Scholarships and financial aid opportunities available for deserving students.",
    "Strong economy and demand for skilled professionals across multiple industries.",
  ];

  return (
    <StudyWhy
      title="Why Choose Australia 🇦🇺"
      description="Australia stands out as one of the best destinations for higher education and skilled careers — offering academic excellence, global exposure, and a high quality of life."
      backgroundImage="/Uploads/home/hero/usa.jpg"
      reasons={australiaReasons}
    />
  );
}
