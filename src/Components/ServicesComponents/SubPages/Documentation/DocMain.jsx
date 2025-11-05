import React from "react";
import DocHero from "./DocHero";
import DocTypes from "./DocTypes";
import DocProcess from "./DocProcess";

export default function DocMain() {
  return (
    <div>
      <DocHero />
      <DocTypes />
      <DocProcess />
    </div>
  );
}
