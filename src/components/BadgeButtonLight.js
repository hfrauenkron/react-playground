import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BadgeButtonLight = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  height: 21px;
  width: 91px;
  background-color: white;
  color: #547fb3;
  font-size: 16px;
  border-width: 2px;
  border-color: #547fb3;
  border-radius: 5px;
`;

export default function BadgeLight({ children }) {
  return <BadgeButtonLight>{children}</BadgeButtonLight>;
}

BadgeLight.propTypes = {
  children: PropTypes.string
};
