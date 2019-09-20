import React from "react";
import IconButton from "../components/IconButton";
import Walk from "../icons/Walk";
import { Euro } from "../icons/Euro";
import { Restaurant } from "../icons/Restaurant";

export default {
  title: "IconButton"
};

export const WalkIcon = () => (
  <IconButton>
    <Walk />
  </IconButton>
);

export const EuroIcon = () => (
  <IconButton>
    <Euro />
  </IconButton>
);

export const RestaurantIcon = () => (
  <IconButton>
    <Restaurant />
  </IconButton>
);

// function Inactive() {
//   return <IconButton/>
// }
