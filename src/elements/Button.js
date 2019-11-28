import styled from "styled-components"

import {
  primary,
  primaryDark,
  white,
  secondary,
  secondaryDark,
} from "../utilities/Colors"
import { hover, shadow } from "../utilities/Mixins"

const fontSizesMap = {
  sm: "12px",
  md: "16px",
  lg: "20px",
}

export const Button = styled.button`
  padding: 1.5rem 3rem;
  border-radius: 5px;
  background-color: ${props =>
    props.btnType === "primary" ? primary : secondary};
  color: ${white} !important;
  transition: background-color 250ms;
  border: none;
  font-family: Roboto;
  font-weight: 700;
  font-size: ${props => fontSizesMap[props.size] || "1.6rem"};
  ${shadow}

  &:hover {
    cursor: pointer;
    background-color: ${props =>
      props.btnType === "primary" ? primaryDark : secondaryDark};
    ${hover};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
`

export const LinkButton = styled.a`
  border: none;
  background-color: ${props =>
    props.btnType === "primary" ? primary : secondary};
  color: white !important;
  padding: 1.5rem 3rem;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  border: none;
  font-size: ${props => fontSizesMap[props.size] || "1.8rem"};

  ${shadow}
  &:hover {
    cursor: pointer;
    background-color: ${props =>
      props.btnType === "primary" ? primaryDark : secondaryDark};
    ${hover}
    transform: translateY(-2px);
  }
`
