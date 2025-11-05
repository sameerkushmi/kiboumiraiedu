import StudyWhy from "../../HelperComponents/StudyReq/StudyWhy";

export default function WhyUK() {
  const ukReasons = [
    "Home to some of the world’s oldest and most prestigious universities.",
    "High-quality education recognized globally across multiple disciplines.",
    "Vibrant international student community from all over the world.",
    "Opportunities for part-time work and internships during studies.",
    "Post-study work visa allowing graduates to gain professional experience.",
    "Rich cultural heritage and modern cities providing a dynamic lifestyle.",
    "Strong research opportunities and access to cutting-edge facilities.",
    "Safe and supportive environment for international students.",
    "Financial support and scholarships for deserving students.",
    "Excellent networking opportunities and global career prospects.",
  ];

  return (
    <StudyWhy
      title="Why Choose the UK 🇬🇧"
      description="The UK is a top destination for higher education and international careers, offering world-class universities, rich culture, and excellent global exposure."
      backgroundImage="/Uploads/study/uk/whyuk.jpg"
      reasons={ukReasons}
    />
  );
}
