import styled from "styled-components";
import { secondary } from "../utilities/Colors";
import { hover, shadow } from "../utilities/Mixins";

export const StyledCard = styled.div`
  background: white;
  border-radius: 5px;
  transition: 200ms;
  width: 30%;
  min-width: 250px;
  margin-bottom: 2rem;
  position: relative;
  display: flex;
  flex-direction:column;
  position: relative;
  ${shadow}
  &:hover {
    ${hover}
  }

  @media only screen and (max-width: 1000px) {
    width:100%;
  }
`;

export const StyledImageCard = styled.div`
    text-align: center;
    height:200px;

    & > img {
      height: 100%;
      width: 100%;
      max-width: 400px;
       &:hover {
        ${hover}
      }
    }
`



export const CardContent = styled.div`
  padding: 2rem;
  width: 60%;
  width: 100%;
`;

export const CardTag = styled.div`
  background-color: ${secondary};
  position: absolute;
  top: 10px;
  padding: 5px 10px;
  color: white;
  font-size: 1.6rem;
  width: auto;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: 1000px) {
    order: -1;
    padding: 0;
    width: 100%;

    & > img {
      width: 100%;
    }
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
