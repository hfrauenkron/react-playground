import React from "react";
import styled from "styled-components";

const DetailsDiv = styled.div`
  display: flex;
  align-items: center;
  /* width: 60px; */
  height: 19px;
  fill: #547fb3;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
`;

export default function Details({ children }) {
  return <DetailsDiv>{children}</DetailsDiv>;
}
