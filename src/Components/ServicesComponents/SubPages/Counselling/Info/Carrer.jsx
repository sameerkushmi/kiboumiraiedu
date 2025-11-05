import React from "react";
import Accordion from "../../../../HelperComponents/Accordion";

export default function Carrer() {
  const counselingItems = [
    {
      title: "Personalized Guidance",
      content:
        "Every student is unique, with different academic backgrounds, learning styles, and career aspirations. We provide one-on-one guidance tailored to each student’s needs. This includes analyzing grades, skills, interests, and future ambitions to recommend the most suitable study paths. By understanding their personal and professional goals, we help students choose the right courses, universities, and countries, ensuring their education aligns with long-term career objectives. This personalized approach prevents generic advice and maximizes the student’s chances of success abroad.",
    },
    {
      title: "Course & University Selection",
      content:
        "Selecting the right course and university is critical for academic success and career growth. Our counselors provide in-depth analysis of universities’ curriculum, faculty expertise, campus life, and internship opportunities. We explain the differences between programs, highlight global rankings, and suggest courses that match the student’s interests and strengths. We also advise on universities that provide strong research opportunities, international exposure, and industry connections, helping students make informed choices that enhance their employability.",
    },
    {
      title: "Visa & Immigration Support",
      content:
        "Obtaining a student visa can be complicated and stressful. We guide students step by step through visa procedures, document preparation, and submission timelines. This includes guidance on visa interviews, financial proofs, health insurance requirements, and legal compliance. Our support reduces the risk of errors, delays, or rejection, ensuring a smooth and stress-free visa process. Students gain confidence knowing they have professional backing and clear instructions for a successful application.",
    },
    {
      title: "Test Preparation Advice",
      content:
        "Standardized tests such as IELTS, TOEFL, PTE, SAT, and JLPT often determine admission eligibility. We assist students in selecting the tests required for their chosen programs and countries. Beyond this, we provide strategies for efficient preparation, suggest high-quality study resources, and design personalized study schedules. Students learn how to focus on their weak areas, manage time effectively, and maximize scores, increasing their chances of admission into competitive programs. Our guidance ensures they are fully prepared and confident on exam day.",
    },
    {
      title: "Financial Planning & Scholarships",
      content:
        "Studying abroad requires careful financial planning to cover tuition, accommodation, living expenses, and other costs. We help students create a detailed budget tailored to their destination, program, and lifestyle. We also identify scholarship opportunities, grants, and financial aid options available from universities, governments, or private institutions. By understanding these opportunities and learning to manage expenses wisely, students can reduce financial stress, make informed decisions, and explore ways to fund their education efficiently.",
    },
  ];
  return (
    <>
      <div className="mb-16 max-w-6xl mx-auto bg-white shadow-2xl p-8 rounded-4xl">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Career Counselling
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-3"></div>
          <p className="max-w-3xl text-base md:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            enim repudiandae culpa nisi veniam perferendis dicta tenetur cumque.
            Ipsum, consequuntur!
          </p>
        </div>
        <Accordion items={counselingItems} />
      </div>
    </>
  );
}
