import { useState, useEffect } from "react";
import { Tabs } from "antd";
import { Star } from "lucide-react";

const CourseSection = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  // ✅ Detect window resize
  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const courseTitle = [
    "Basic Course",
    "Advance Office Package",
    "Accounting Training",
    "Graphic Design",
    "Video Editing",
    "Advance Diploma & Job Oriented Course",
  ];

  const courseList = {
    0: ["MS Paint", "MS Word", "MS Excel", "MS Powerpoint", "Typing Master", "Email"],
    1: ["MS Word", "MS Excel", "MS Powerpoint", "MS Paint", "Typing Master", "Adobe Indesign", "Adobe Photoshop", "Canva"],
    2: ["Tally ERP9", "Tally Prime", "MS Excel", "Busy Accounting"],
    3: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Indesign", "CorelDraw", "Canva"],
    4: ["Adobe Photoshop", "Adobe PremierePro"],
    5: [
      "MS Powerpoint", "MS Paint", "MS Word", "MS Excel", "Typing Master", "Email",
      "Adobe Indesign", "Adobe Photoshop", "Canva", "Tally ERP9",
      "Tally Prime", "Busy Accounting", "Adobe Illustrator", "CorelDraw",
    ],
  };

  const allCourses = [
    { title: "MS Powerpoint", img: "/Uploads/courses/ms-powerpoint.jpg", caption: "Create Powerful Slides, Tell Impactful Stories", tagLine: "From classrooms to boardrooms — PowerPoint skills that shine anywhere.", rate: "5" },
    { title: "MS Paint", caption: "Start Your Art Journey with Microsoft Paint.", tagLine: "Bring Your Imagination to Life with MS Paint.", img: "/Uploads/courses/msPaint.jpeg", rate: "5" },
    { title: "MS Word", img: "/Uploads/courses/ms-word.png", caption: "Boost Your Office Skills with Our MS Word Course.", tagLine: "From reports to resumes — create with confidence in MS Word.", rate: "5" },
    { title: "MS Excel", img: "/Uploads/courses/ms-excel.jpeg", caption: "The Complete MS Excel Course for Students & Professionals.", tagLine: "From formulas to dashboards — become an Excel powerhouse.", rate: "5" },
    { title: "Typing Master", img: "/Uploads/courses/typingmaster.png", caption: "Boost Your Typing Speed and Accuracy.", tagLine: "Type faster, smarter, and confidently with Typing Master.", rate: "5" },
    { title: "Email", img: "/Uploads/courses/email.png", caption: "Professional Communication Starts with Email.", tagLine: "From Inbox to Impact — Master Professional Emailing.", rate: "5" },
    { title: "Adobe Indesign", img: "/Uploads/courses/indesign.jpg", caption: "Design Smarter. Publish Better. Master InDesign.", tagLine: "Turn your passion for design into real-world publishing skills.", rate: "5" },
    { title: "Adobe Photoshop", img: "/Uploads/courses/photoshop.png", caption: "Transform your photos and your career with Photoshop skills.", tagLine: "Design Stunning Graphics and Bring Your Ideas to Life.", rate: "5" },
    { title: "Canva", img: "/Uploads/courses/canva.jpg", caption: "Design Smarter, Faster, and Easier with Canva.", tagLine: "From ideas to amazing designs — Start your Canva journey now!", rate: "5" },
    { title: "Tally ERP9", img: "/Uploads/courses/tally-erp-9.jpg", caption: "Upgrade Your Accounting Skills with Practical Tally Training.", tagLine: "Master Business Accounting with Tally ERP 9.", rate: "5" },
    { title: "Tally Prime", img: "/Uploads/courses/tally-prime.png", caption: "Step-by-step Tally training for students, accountants, and business owners", tagLine: "Simplify Accounting, Amplify Growth.", rate: "5" },
    { title: "Busy Accounting", img: "/Uploads/courses/busy.jpg", caption: "Professional Accounting Made Easy with Busy Accounting.", tagLine: "Perfect course for students, accountants, and business owners.", rate: "5" },
    { title: "Adobe Illustrator", img: "/Uploads/courses/illustrator.png", caption: "Learn Vector Design, Logo Creation & Digital Illustration with Illustrator.", tagLine: "Create Limitless Designs with Illustrator.", rate: "5" },
    { title: "CorelDraw", img: "/Uploads/courses/coreldraw.png", caption: "Master CorelDRAW — The Complete Graphic Design Solution.", tagLine: "Design. Draw. Dominate.", rate: "5" },
    { title: "Adobe PremierePro", img: "/Uploads/courses/premierepro.jpeg", caption: "Learn Professional Video Editing from Start to Finish.", tagLine: "Perfect course for creators, filmmakers, and professionals.", rate: "5" },
  ];


  const renderCourses = (key) => {
    const selectedTitles = courseList[key] || [];
    const selectedCourses = allCourses.filter((c) => selectedTitles.includes(c.title));

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {selectedCourses.map((course, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-md">
                {course.title}
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                {course.caption}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{course.tagLine}</p>
              <div className="flex items-center gap-1 text-gray-600 mt-2">
                <p className="text-xs">{course.rate}</p>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-16 my-16 bg-gray-100 rounded-3xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Our Best Courses
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Master computers. Build skills. Shape your future.
        </p>
      </div>

      {/* Tabs */}
      <Tabs
        tabPosition={windowSize <= 720 ? "top" : "left"}
        items={courseTitle.map((title, i) => ({
          label: title,
          key: String(i),
          children: renderCourses(String(i)),
        }))}
      />
    </section>
  );
};

export default CourseSection;
