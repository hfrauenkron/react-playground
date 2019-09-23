import React from "react";
import styled from "styled-components";

const Headline = styled.h3`
  color: black;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  border: none;
`;

export default function CardHeadline({ children }) {
  return <Headline>{children}</Headline>;
}
