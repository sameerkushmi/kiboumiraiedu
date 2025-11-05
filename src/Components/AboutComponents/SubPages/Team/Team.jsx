import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroSection2 from "../../../HelperComponents/AboutSubComponent/HeroSection2";

const teamMembers = [
  {
    id: 1,
    name: "Suman Tamang",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    description:
      "As the visionary behind KBM Education Consultancy, Suman Tamang has guided hundreds of students toward achieving their study abroad dreams. With a deep understanding of international education systems and years of leadership experience, he ensures that every student receives transparent, ethical, and personalized guidance throughout their journey.",
  },
  {
    id: 2,
    name: "Rajib Raj Tamang",
    role: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    description:
      "Rajib Raj Tamang oversees the daily operations and strategic direction of KBM. His leadership focuses on maintaining excellence across departments—from counseling and documentation to visa assistance—ensuring that every student experiences a smooth and reliable process from start to finish.",
  },
  {
    id: 3,
    name: "Anil Chaudhary",
    role: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    description:
      "With a strong background in student counseling and international partnerships, Anil Chaudhary brings extensive expertise in matching students with the right institutions. His approach blends practical advice with empathy, helping students choose the best academic path for their goals and aspirations.",
  },
  {
    id: 4,
    name: "—",
    role: "Front Desk Officer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
    description:
      "As the first point of contact at KBM, our Front Desk Officer ensures that every student feels welcomed and guided from the moment they walk in. With a friendly approach and excellent communication skills, they assist with inquiries, appointments, and initial counseling coordination.",
  },
  {
    id: 5,
    name: "—",
    role: "Language Instructor",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop",
    description:
      "Our experienced Language Instructor provides comprehensive training for Japanese, English, and other language proficiency exams. With an engaging and supportive teaching style, they prepare students not only to pass tests but also to communicate confidently in their new academic and cultural environment.",
  },
];

export default function TeamMembers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const getOrderedMembers = () => {
    const ordered = [];
    for (let i = 0; i < teamMembers.length; i++) {
      const index = (activeIndex + i) % teamMembers.length;
      ordered.push(teamMembers[index]);
    }
    return ordered;
  };

  const orderedMembers = getOrderedMembers();
  const activeMember = orderedMembers[0];
  const nextThree = orderedMembers.slice(1, 4);

  return (
    <>
      <HeroSection2
        title="Meet Our Dedicated Team"
        description="Our team at KBM Education Consultancy is committed to guiding students every step of the way. From personalized counseling to visa assistance and language preparation, we combine expertise and passion to help students achieve their dreams abroad."
        // btnText="Learn More"
      />

      <section className="min-h-screen bg-gray-50 relative py-20 px-6">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-16 flex items-center flex-col">
            <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-4 text-center">
              Our Team
            </h2>
            <p className="text-center max-w-3xl text-lg md:text-xl">
              Our expert team provides personalized guidance and support to help
              students succeed in their study abroad journey, from course
              selection to visa and exam preparation.
            </p>
          </div>

          <div className="flex items-center justify-between mb-8">
            <button
              onClick={handlePrev}
              className="px-4 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 font-medium shadow-sm"
            >
              <ChevronLeft size={20} />
              Previous
            </button>
            <button
              onClick={handleNext}
              className=" px-4 bg-green  text-white py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 font-medium shadow-sm"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Active Member Photo */}
            <div className="relative">
              <div className="aspect-[1/1] rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
                <img
                  key={activeMember.id}
                  src={activeMember.image}
                  alt={activeMember.name}
                  className="w-full h-full object-cover transition-all duration-500"
                  style={{
                    opacity: 1,
                    transform: `translateX(${direction * 0}px)`,
                  }}
                />
              </div>
            </div>

            {/* Right Side - Description and Next Members */}
            <div className="flex flex-col h-full space-y-8">
              {/* Active Member Description */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">
                    {activeMember.name}
                  </h3>
                  <p className="text-lg text-green font-medium">
                    {activeMember.role}
                  </p>
                </div>
                <div className="h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                  <p className="text-gray-700 text-lg leading-relaxed pr-2">
                    {activeMember.description}
                  </p>
                </div>
              </div>

              {/* Bottom Right - Next 3 Members */}
              <div className="space-y-6">
                <div className="space-y-3">
                  {nextThree.map((member, idx) => (
                    <div
                      key={member.id}
                      className="group cursor-pointer bg-white hover:bg-gray-50 border border-gray-200 rounded-xl p-4 transition-all duration-300 flex items-center gap-4 shadow-sm hover:shadow-md"
                      onClick={() => {
                        setDirection(1);
                        setActiveIndex(
                          (activeIndex + idx + 1) % teamMembers.length
                        );
                      }}
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-900 font-semibold truncate">
                          {member.name}
                        </p>
                        <p className="text-green text-sm truncate">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
