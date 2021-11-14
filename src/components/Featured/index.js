import React from "react";
import { FeatureContainer, FeatureBtn } from "./FeaturedElements";

function Featured() {
  return (
    <FeatureContainer>
      <h1>Pie of the Day</h1>
      <p>Double-crusted, with pastry both above and below the filling</p>
      <FeatureBtn>Order Now</FeatureBtn>
    </FeatureContainer>
  );
}

export default Featured;
