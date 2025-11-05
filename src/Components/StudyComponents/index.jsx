import React from "react";
import StudyHero from "./StudyHero";
import StudyDestinations from "./StudyDestinations";
import StudyForm from "./StudyForm";
import StudyTests from "./StudyTests";

export default function index() {
  return (
    <div>
      <StudyHero />
      <StudyDestinations />
      <StudyTests />
      <StudyForm />
    </div>
  );
}
