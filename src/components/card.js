import React from "react";
import { withPrefix } from "gatsby";
import { StyledCard, CardTag, CardImage, CardContent } from "../elements/Card";

export default function card(props) {
  const { overlayUrl, imgName, imageAlt, tag } = props;
  return (
    <StyledCard>
      {tag && <CardTag>{tag}</CardTag>}
      {overlayUrl && <a className="card-overlay" href={overlayUrl} />}
      <CardImage>
        <img src={withPrefix(`/${imgName}`)} alt={imageAlt} />
      </CardImage>
      <CardContent>{props.children[0] || props.children}</CardContent>
    </StyledCard>
  );
}
