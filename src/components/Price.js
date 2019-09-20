import React from "react";
import { Euro } from "../icons/Euro";
import Details from "./Details";

export default function Price({ value }) {
  return (
    <Details>
      <Euro />
      <Euro isGrey={value < 2} />
      <Euro isGrey={value < 3} />
    </Details>
  );
}
