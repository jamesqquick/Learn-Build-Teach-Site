import styled from "styled-components";
import { secondary, primary } from "../utilities/Colors";
import { hover, shadow } from "../utilities/Mixins";


export const StyledCard = styled.div`
  background: white;
  border-radius: 5px;
  transition: 200ms;
  width: ${props => (props.type === "horizontal" ? "100%" : "30%")};
  align-items: ${props => (props.type === "horizontal" ? "center" : "")};
  min-width: 350px;
  margin-bottom: 4rem;
  position: relative;
  display: flex;
  flex-direction: ${props => (props.type === "horizontal" ? "row" : "column")};
  position: relative;
  ${shadow}
  
  &:hover {
    ${hover}

    h3 {
      color: ${primary};
    }
  }

         @media only screen and (max-width: 1200px) {width: ${props => (props.type === "horizontal" ? "100%" : "45%")};}

         @media only screen and (max-width: 1000px) {width: 100%;
           flex-direction: column;
           align-items: unset;
           }`;

export const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
         height: ${props => (props.type === "horizontal" ? "100%" : "200px")};

         img {
           width: 100%;
           height: 100%;
           object-fit: cover;
         }

         @media only screen and (max-width: 1000px) {order: -1;
           padding: 0;
           width: 100%;

           & > img {
             width: 100%;
           }}`;

export const CardOverlay = styled.div`
  position: absolute;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
