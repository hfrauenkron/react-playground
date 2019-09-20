// width: 60px, heigth: 60px, background-color: white, border-radius, padding, color, box-shadow, flex?

// active: color und background-color inverted

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 60px;
  height: 60px;
  background-color: #547fb3;
  border-radius: 10px;
  fill: white;
  padding: 10px;
  box-shadow: 0 3pt 6px rgba(0, 0, 0, 0.15);
  font-size: 30px;
  border: none;
`;

export default function IconButtonActive({ children }) {
  return <Button>{children}</Button>;
}
