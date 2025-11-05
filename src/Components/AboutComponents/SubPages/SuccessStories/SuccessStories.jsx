import React, { useState } from "react";
import HeroSection2 from "../../../HelperComponents/AboutSubComponent/HeroSection2";

export default function SuccessStories() {
  // Array of success stories
  const successStories = [
    { id: 1, image: "/Uploads/home/success1.jpg", title: "Story 1" },
    { id: 2, image: "/Uploads/home/success2.jpg", title: "Story 2" },
    { id: 3, image: "/Uploads/home/success3.jpg", title: "Story 3" },
    { id: 4, image: "/Uploads/home/success4.jpg", title: "Story 4" },
    { id: 5, image: "/Uploads/home/success5.jpg", title: "Story 5" },
    { id: 6, image: "/Uploads/home/success6.jpg", title: "Story 6" },
    { id: 7, image: "/Uploads/home/success7.jpg", title: "Story 7" },
    { id: 8, image: "/Uploads/home/success8.jpg", title: "Story 8" },
    { id: 9, image: "/Uploads/home/success9.jpg", title: "Story 9" },
    { id: 10, image: "/Uploads/home/success10.jpg", title: "Story 10" },
    { id: 11, image: "/Uploads/home/success11.jpg", title: "Story 11" },
    { id: 12, image: "/Uploads/home/success12.jpg", title: "Story 12" },
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleStories = successStories.slice(0, visibleCount);

  return (
    <div>
      <HeroSection2
        title="Our Success Stories"
        description="Discover how KBM Education Consultancy has guided students to achieve their study abroad dreams with confidence and success."
        // btnText="Learn More"
      />
      <section className="container mx-auto my-12">
        {/* Heading */}
        <div className="mb-12 flex items-center flex-col gap-4">
          <h1 className="text-4xl lg:text-5xl text-center font-bold text-gray-900 leading-tight">
            Celebrating Our Students' Achievements
          </h1>
          <p className="max-w-3xl text-center text-base md:text-lg">
            See how KBM Education Consultancy has helped students fulfill their
            dreams of studying abroad and achieving success in their academic
            journey.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleStories.map((story) => (
            <div
              key={story.id}
              className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < successStories.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-text text-white rounded-full  transition-colors duration-300"
            >
              View More
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
