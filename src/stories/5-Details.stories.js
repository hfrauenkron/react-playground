import React from "react";
import Details from "../components/Details";
import Price from "../components/Price";
import Rating from "../components/Rating";
import Distance from "../components/Distance";

export default {
  title: "Details"
};

export const PriceLow = () => <Price value={1} />;
export const PriceMedium = () => <Price value={2} />;
export const PriceHigh = () => <Price value={3} />;

export const DistanceHigh = () => <Distance value="10min" />;

export const DistanceLow = () => <Distance value="2min" />;

export const RatingHigh = () => <Rating value={4.8} />;

export const RatingLow = () => <Rating value={2.7} />;

// export const PriceLowest = () => (
//   <Details>
//     <Euro />
//     <Euro isGrey={true} />
//     <Euro isGrey={true} />
//   </Details>
// );

// export const PriceMedium = () => (
//   <Details>
//     <Euro />
//     <Euro />
//     <Euro isGrey={true} />
//   </Details>
// );

// export const PriceHigh = () => (
//   <Details>
//     <Euro />
//     <Euro />
//     <Euro />
//   </Details>
// );
