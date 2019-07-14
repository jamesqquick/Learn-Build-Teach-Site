import React from "react";
import { StyledSection } from "../elements/Section";

export const SECTION_TYPES = {
  DARK: "DARK",
  LIGHT: "LIGHT"
}
const Section = props => {
  return <StyledSection className="section" type={props.type}>
      {props.title && <h1 className="text-center section-title">
          {props.title}
        </h1>}
      {props.subtitle && <h4 className="text-center section-subtitle">
          {props.subtitle}
        </h4>}
      {props.children}
    </StyledSection>;
};

export { Section };
