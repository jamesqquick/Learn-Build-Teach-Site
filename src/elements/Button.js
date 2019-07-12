import styled from "styled-components";
import {
  primary,
  primaryLight,
  primaryDark,
  white,
  secondary,
  secondaryDark
} from "../utilities/Colors";
import { hover, shadow } from "../utilities/Mixins";


const fontSizesMap = {
  sm: "12px",
  md: "16px",
  lg: "20px"
};

export const Button = styled.button`
  padding: 1rem 3rem;
  border-radius: 5px;
  background-color: ${props =>
    props.type === "primary" ? primary : secondary};
  color: ${white} !important;
  font-size: 1.4rem;
  transition: background-color 250ms;
  font-size: ${props => fontSizesMap[props.size] || "16px"};
    ${shadow}
  &:hover {
    cursor: pointer;
    background-color: ${props =>
      props.type === "primary" ? primaryDark : secondaryDark};
      ${hover};
  }

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
`;

export const LinkButton = styled.a`
  border: none;
  background-color: ${primary};
  color: white !important;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  ${shadow}
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    background-color: ${primaryDark};
    ${hover}
  }
`;
