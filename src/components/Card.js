import React from "react";
import { withPrefix } from "gatsby";
import { StyledCard, CardImage, CardContent } from "../elements/Card";

export default function card(props) {
  const { overlayUrl, imgName, imageAlt } = props;
  return <StyledCard type={props.type}>
      {/* {tag && <CardTag>{tag}</CardTag>} */}
      {overlayUrl && <a className="card-overlay" href={overlayUrl} />}
      <CardImage type={props.type}>
        <img src={withPrefix(`/${imgName}`)} alt={imageAlt} />
      </CardImage>
      <CardContent>{props.children[0] || props.children}</CardContent>
    </StyledCard>;
}
