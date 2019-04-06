import React from "react";
import { StyledFeatureTitle, StyledFeatureDetails } from "../elements/Featured";
import {LinkButton} from "../elements/Button";
export const FeaturedLeft = props => {
  return (
    <StyledFeatureTitle>
      <h1>{props.title}</h1>
    </StyledFeatureTitle>
  );
};

export const FeaturedRight = props => {
  return (
    <StyledFeatureDetails>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <LinkButton href={props.linkUrl}>Check it Out!</LinkButton>
    </StyledFeatureDetails>
  );
};
