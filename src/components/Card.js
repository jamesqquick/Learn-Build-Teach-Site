import React from "react";
import { StyledCard, CardImage, CardContent } from "../elements/Card";

export default function card(props) {
  const { overlayUrl, image, imageAlt } = props;
  return (
    <StyledCard type={props.type}>
      {/* {tag && <CardTag>{tag}</CardTag>} */}
      {overlayUrl && <a className="card-overlay" href={overlayUrl}></a>}
      <CardImage type={props.type}>
        <img src={image} alt={imageAlt} />
      </CardImage>
      <CardContent>{props.children[0] || props.children}</CardContent>
    </StyledCard>
  );
}
