import React from "react";
import IconButtonActive from "../components/IconButtonActive";
import Walk from "../icons/Walk";
import { Euro } from "../icons/Euro";
import { Restaurant } from "../icons/Restaurant";
import { Star } from "../icons/Star";

export default {
  title: "IconButtonActive"
};

export const WalkIcon = () => (
  <IconButtonActive>
    <Walk />
  </IconButtonActive>
);

export const EuroIcon = () => (
  <IconButtonActive>
    <Euro />
  </IconButtonActive>
);

export const RestaurantIcon = () => (
  <IconButtonActive>
    <Restaurant />
  </IconButtonActive>
);

export const StarIcon = () => (
  <IconButtonActive>
    <Star />
  </IconButtonActive>
);
