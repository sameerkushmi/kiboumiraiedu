import React from "react";
import CadHero from "./CadHero";
import CadRequirement from "./CadRequirement";
import CadWhy from "./CadWhy";
import CadForm from "./CadForm";

export default function CadMain() {
  return (
    <div>
      <CadHero />
      <CadRequirement />
      <CadWhy />
      <CadForm />
    </div>
  );
}
