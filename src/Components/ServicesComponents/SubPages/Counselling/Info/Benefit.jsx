import React from "react";
import Accordion from "../../../../HelperComponents/Accordion";

export default function Benefit() {
  const benefitsItems = [
    {
      title: "Comprehensive Pre-Departure Support",
      content:
        "Preparing to study abroad goes beyond securing admission and visas. We provide guidance on travel arrangements, accommodation options, health insurance, banking, and essential documentation. Students also receive cultural orientation, tips on adjusting to a new environment, and advice on managing homesickness. This thorough pre-departure preparation ensures students arrive in their destination country confident, informed, and ready to succeed both academically and socially.",
    },
    {
      title: "Career & Internship Guidance",
      content:
        "Counseling goes beyond academics. We assist students in identifying potential career paths, internships, and part-time opportunities aligned with their field of study. We provide insights on industry trends, job prospects, and networking strategies. Students are guided on how to gain relevant work experience during studies, build resumes, and connect with professional mentors. This practical support enhances employability and prepares students for a successful career after graduation.",
    },
    {
      title: "Personalized Study Plans",
      content:
        "Each student receives a customized roadmap for success, covering test preparation, course selection, and university applications. These plans are tailored to individual strengths, weaknesses, and timelines. By following a structured study plan, students can efficiently manage preparation, track progress, and stay motivated. This methodical approach ensures they achieve their educational goals without feeling overwhelmed, while also balancing other responsibilities.",
    },
    {
      title: "Networking & Mentorship",
      content:
        "Building connections is crucial when studying abroad. We provide access to alumni networks, peer groups, and mentors who share guidance, advice, and support. These connections help students navigate academic challenges, adapt to new cultural environments, and gain industry insights. Mentorship programs offer personal encouragement, practical tips, and professional exposure, giving students confidence and a sense of belonging in a foreign country.",
    },
    {
      title: "Confidence & Clarity",
      content:
        "Many students feel uncertain about choosing the right courses, universities, or countries. Our counseling provides clear insights, step-by-step guidance, and informed recommendations, helping students make confident decisions. By addressing questions, providing evidence-based advice, and clarifying doubts, students gain a solid understanding of their options. This clarity empowers them to take ownership of their educational journey and approach challenges with assurance.",
    },
  ];
  return (
    <>
      <div className="max-w-6xl mx-auto bg-white shadow-2xl p-8 rounded-4xl">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Benefits of Counselling
          </h2>
          <div className="w-20 h-1 bg-green-600 mb-3"></div>
          <p className="max-w-3xl text-base md:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            enim repudiandae culpa nisi veniam perferendis dicta tenetur cumque.
            Ipsum, consequuntur!
          </p>
        </div>
        <Accordion items={benefitsItems} />
      </div>
    </>
  );
}
