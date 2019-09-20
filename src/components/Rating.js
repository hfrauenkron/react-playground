import React from "react";
import { Star } from "../icons/Star";
import Details from "./Details";

export default function Rating(props) {
  return (
    <Details>
      <Star />
      &nbsp;
      {props.value}
    </Details>
  );
}
