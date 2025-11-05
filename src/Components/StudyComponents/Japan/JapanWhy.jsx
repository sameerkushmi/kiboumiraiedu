import StudyWhy from "../../HelperComponents/StudyReq/StudyWhy";

export default function WhyJapan() {
  const japanReasons = [
    "World-class education and career opportunities in a globally respected nation.",
    "Scholarships and strong support systems for international students.",
    "Highly innovative, technology-driven environment fostering creativity and research.",
    "Safe, clean, and well-organized society ideal for both study and work.",
    "High living standards with excellent infrastructure and healthcare.",
    "Respectful, disciplined, and teamwork-oriented work culture.",
    "Smooth transition from student life to long-term career opportunities.",
    "Rich cultural heritage blended with modern global exposure.",
    "Opportunities to learn Japanese and strengthen global employability.",
    "Government initiatives supporting international students and skilled professionals.",
  ];

  return (
    <StudyWhy
      title="Why Choose Japan 🇯🇵"
      description="Japan blends world-class education, innovation, and a respectful work culture — making it a top destination for both students and professionals."
      backgroundImage="/Uploads/home/hero/japan.png"
      reasons={japanReasons}
    />
  );
}
