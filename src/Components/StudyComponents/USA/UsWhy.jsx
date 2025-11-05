import StudyWhy from "../../HelperComponents/StudyReq/StudyWhy";

export default function WhyUS() {
  const usReasons = [
    "Home to globally ranked universities and top research institutions.",
    "Wide variety of courses and flexible learning programs.",
    "Innovative and technology-driven environment for students and professionals.",
    "Part-time work and internship opportunities during studies.",
    "Strong post-graduation employment prospects with STEM OPT programs.",
    "Diverse and multicultural society welcoming international students.",
    "High-quality infrastructure and world-class campus facilities.",
    "Abundant scholarship and financial aid opportunities.",
    "Vibrant student life with cultural, social, and networking opportunities.",
    "Global recognition of US degrees boosting career prospects worldwide.",
  ];

  return (
    <StudyWhy
      title="Why Choose the US 🇺🇸"
      description="The United States provides excellent education, professional opportunities, and global recognition — making it ideal for ambitious students and professionals."
      backgroundImage="/Uploads/study/us/uswhy.jpg"
      reasons={usReasons}
    />
  );
}
