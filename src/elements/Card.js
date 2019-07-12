import styled from "styled-components";
import { secondary } from "../utilities/Colors";
import { hover, shadow } from "../utilities/Mixins";

export const StyledCard = styled.div`
  background: white;
  border: 1px solid darken($color: $off-white, $amount: 20);
  border-radius: 5px;
  display: flex;
  position: relative;
  transition: 100ms;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 2rem;
  position: relative;
  ${shadow}
  &:hover {
    ${hover}
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    position: relative;

    & > * {
      width: 100%;
    }
  }
`;

export const StyledImageCard = styled.div`
    width: 32%;
    margin-bottom: 2rem;
    text-align: center;

    & > img {
      height: auto;
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

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 2rem;

  img {
    width: 100%;
    height: auto;
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
