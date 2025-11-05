import React from "react";
import CounsellingHero from "./CounsellingHero";
import CounsellingForm from "./CounsellingForm";
import CounsellingInfo from "./CounsellingInfo";
import CounsellingCTA from "./CounsellingCTA";

export default function CounsellingMain() {
  return (
    <div>
      <CounsellingHero />
      <CounsellingInfo />
      <CounsellingForm />
      {/* <CounsellingCTA /> */}
    </div>
  );
}
