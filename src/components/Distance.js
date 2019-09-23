import React from "react";
import Walk from "../icons/Walk";
import Details from "./Details";
import PropTypes from "prop-types";

export default function Distance(props) {
  return (
    <Details>
      <Walk />
      &nbsp;
      {props.value}
    </Details>
  );
}

Details.propTypes = {
  value: PropTypes.number
};
