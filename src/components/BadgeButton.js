import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BadgeButton = styled.button`
  height: 21px;
  width: 91px;
  background-color: #547fb3;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  border: none;
`;

export default function Badge({ children }) {
  return <BadgeButton>{children}</BadgeButton>;
}

Badge.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};
