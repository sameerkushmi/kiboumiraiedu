import React from "react";
import AboutHero from "./AboutHero";
import AboutIntro from "./AboutIntro";
import AboutWhy from "./AboutWhy";
import AboutTeam from "./AboutTeam";
import MainHeroHelper from "../HelperComponents/MainHeroHelper";

export default function Index() {
  return (
    <div>
      <AboutHero />
      <AboutIntro />
      <AboutWhy />
      <AboutTeam />
    </div>
  );
}
