import React from "react";
import { StyledSection } from "../elements/Section";
const Section = props => {
  return (
    <StyledSection className={"section " + (props.classString || "")}>
      {props.title ? (
        <h1 className="text-center section-title">{props.title}</h1>
      ) : (
        ""
      )}
      {props.children}
    </StyledSection>
  );
};

export { Section };
