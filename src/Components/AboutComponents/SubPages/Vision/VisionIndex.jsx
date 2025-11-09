import React from "react";
import VisionHero from "./VisionHero";
import Vision from "./Vision";
import Mission from "./Mission";
import Values from "./Values";
import ParallaxMain from "./ParallaxMain";

export default function VisionIndex() {
  return (
    <div>
      <VisionHero />
      {/* <Vision />
      <Mission />
      <Values /> */}
      <ParallaxMain />
    </div>
  );
}
