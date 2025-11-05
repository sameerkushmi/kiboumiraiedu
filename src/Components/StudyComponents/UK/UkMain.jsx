import React from "react";
import { SiUnpkg } from "react-icons/si";
import UkHero from "./UkHero";
import UKRequirement from "./UKRequirement";
import UKWhy from "./UKWhy";
import UKForm from "./UKForm";

export default function UkMain() {
  return (
    <div>
      <UkHero />
      <UKRequirement />
      <UKWhy />
      <UKForm />
    </div>
  );
}
