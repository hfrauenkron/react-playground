import React from "react";
import Details from "../components/Details";
import Walk from "../icons/Walk";
import { Star } from "../icons/Star";
import { Euro } from "../icons/Euro";

export default {
  title: "Details"
};

export const Distance = () => (
  <Details>
    <Walk />
    &nbsp;2min
  </Details>
);

export const Rating = () => (
  <Details>
    <Star />
    &nbsp;4.7
  </Details>
);

export const PriceLow = () => (
  <Details>
    <Euro />
    <Euro isGrey={true} />
    <Euro isGrey={true} />
  </Details>
);

export const PriceMedium = () => (
  <Details>
    <Euro />
    <Euro />
    <Euro isGrey={true} />
  </Details>
);

export const PriceHigh = () => (
  <Details>
    <Euro />
    <Euro />
    <Euro />
  </Details>
);
