import React from "react";
import Accordion from "../../../HelperComponents/Accordion";
import Carrer from "./Info/Carrer";
import Benefit from "./Info/Benefit";
import InfoParallax from "./InfoParallax";

function Career() {}

export default function CounsellingInfo() {
  return (
    <section className="px-6 py-16 my-16 mx-6 bg-gray-100 rounded-4xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Counselling Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Expert guidance to help you navigate your academic journey and achieve
          your study abroad dreams with confidence.
        </p>
      </div>

      <Carrer />

      {/* Benefits Section */}
      <Benefit />
    </section>
  );
}
