import React, { useEffect, useRef } from "react";
import Vision from "./Vision";
import Mission from "./Mission";
import Values from "./Values";

// Main Parallax Container
export default function ParallaxMain() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      sectionsRef.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        // Always apply sticky positioning
        section.style.position = "sticky";
        section.style.top = "0";
        section.style.zIndex = index;

        // Scale effect as next section approaches
        if (index < sectionsRef.current.length - 1) {
          const nextSection = sectionsRef.current[index + 1];
          if (nextSection) {
            const nextRect = nextSection.getBoundingClientRect();
            if (nextRect.top < windowHeight) {
              const scaleProgress = Math.max(
                0,
                Math.min(1, 1 - nextRect.top / windowHeight)
              );
              const scale = 1 - scaleProgress * 0.05;
              section.style.transform = `scale(${scale})`;
              section.style.filter = `brightness(${1 - scaleProgress * 0.3})`;
            } else {
              section.style.transform = "scale(1)";
              section.style.filter = "brightness(1)";
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="m-6">
      {/* Parallax Sections */}
      <div className="relative">
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="transition-all duration-300 ease-out"
        >
          <Vision />
        </div>

        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="transition-all duration-300 ease-out"
        >
          <Mission />
        </div>

        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="transition-all duration-300 ease-out"
        >
          <Values />
        </div>
      </div>

      {/* Bottom spacer */}
      {/* <div style={{ height: "50vh" }} className="bg-gray-900" /> */}
    </div>
  );
}
