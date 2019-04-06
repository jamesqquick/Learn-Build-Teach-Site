import styled from "styled-components";
import {
  primary,
  primaryLight,
  offWhite,
  secondary,
  secondaryLight
} from "../utilities/Colors";

const fontSizesMap = {
  sm: "12px",
  md: "16px",
  lg: "20px"
};

export const Button = styled.button`
  padding: 1rem 3rem;
  border-radius: 3px;
  background-color: ${props =>
    props.type === "primary" ? primaryLight : secondaryLight};
  color: ${offWhite} !important;
  font-size: 1.4rem;
  transition: background-color 250ms;
  font-size: ${props => fontSizesMap[props.size] || "14px"}

  &:hover {
    cursor: pointer;
    background-color: ${props =>
      props.type === "primary" ? primary : secondary};
  }

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
`;

export const LinkButton = styled.a`
  height: 40px;
  border: none;
  background-color: ${primaryLight};
  color: white !important;
  padding: 10px 20px;
  border-radius: 3px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    background-color: ${primary};
  }
`;
