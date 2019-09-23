import React from "react";
import { Star } from "../icons/Star";
import Details from "./Details";
import PropTypes from "prop-types";

export default function Rating(props) {
  return (
    <Details>
      <Star />
      &nbsp;
      {props.value}
    </Details>
  );
}

Rating.propTypes = {
  value: PropTypes.number
};
