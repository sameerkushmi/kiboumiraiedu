import React from "react";

export default function TestsHero() {
  return (
    <section className=" mx-4 md:mx-6 lg:mx-8 mt-[12vh]">
      <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-4">
        {/* Left Section */}
        <div className="flex flex-col gap-3">
          {/* Video Section */}
          <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-auto lg:h-[400px]">
            <video
              autoPlay
              muted
              loop
              src="Uploads/home/hero.mp4"
              className="w-full h-full object-cover"
            ></video>
          </div>

          {/* Three Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Popular Courses */}
            <div className="flex flex-col justify-between p-6 bg-background text-text rounded-3xl min-h-[160px]">
              <div>
                <div className="text-2xl font-bold mb-2">Popular Courses</div>
                <div className="text-sm  line-clamp-4">
                  Boost your skills with trending programs.
                </div>
              </div>
            </div>

            {/* Career Tracks */}
            <div className="flex flex-col justify-between p-6 bg-background text-text rounded-3xl min-h-[160px]">
              <div>
                <div className="text-2xl font-bold mb-2">Career Tracks</div>
                <div className="text-sm ">
                  Step-by-step guides to land your dream job.
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-col justify-between p-6 bg-background text-text rounded-3xl min-h-[160px]">
              <div>
                <div className="text-2xl font-bold mb-2">Certifications</div>
                <div className="text-sm ">
                  Earn globally recognized credentials.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Main CTA */}
        <div className="bg-background p-8 lg:p-10 rounded-3xl flex flex-col justify-between min-h-[500px] lg:min-h-full">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-text leading-tight mb-6">
              <div className="text-6xl sm:text-7xl lg:text-8xl">LEARN</div>
              <div className="text-6xl sm:text-7xl lg:text-8xl">WITHOUT</div>
              <div className="text-6xl sm:text-7xl lg:text-8xl">LIMITS</div>
            </h1>

            <p className="text-base lg:text-lg text-gray-700 mb-8 max-w-md">
              Courses, mentors, and communities designed to help you grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 bg-text text-white font-bold text-base rounded-lg transition-colors">
                Start Learning Free
              </button>
              <button className="px-6 py-3 border-2 border-black hover:bg-black hover:text-white font-bold text-base rounded-lg transition-colors">
                Browse Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
