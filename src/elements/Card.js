import styled from "styled-components"
import { secondary, primary } from "../utilities/Colors"
import { hover, shadow } from "../utilities/Mixins"

export const StyledCard = styled.div`
  background: white;
  border-radius: 5px;
  transition: 200ms;
  align-items: ${props => (props.type === "horizontal" ? "center" : "")};
  position: relative;
  display: flex;
  flex-direction: ${props => (props.type === "horizontal" ? "row" : "column")};
  position: relative;
  margin-bottom: ${props => (props.type === "horizontal" ? "4rem" : "0")};
  ${shadow}

  &:hover {
    ${hover}

    h3 {
      color: ${primary};
    }
  }

  .card-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media only screen and (max-width: 1200px) {
    @supports (display: grid) {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    align-items: unset;
    h3.card-title {
      font-size: 2.4rem;
    }
  }

  @media only screen and (max-width: 786px) {
    h3.card-title {
      font-size: 2.4rem;
    }
  }
`

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 4rem;
  margin-bottom: 4rem;
`

export const StyledImageCard = styled.div`
  text-align: center;
  & > img {
    height: 100%;
    width: 100%;
    &:hover {
      ${hover}
    }
  }
`

export const CardContent = styled.div`
  padding: 2rem;
  width: 60%;
  width: 100%;
`

export const CardTag = styled.div`
  background-color: ${secondary};
  position: absolute;
  top: 10px;
  padding: 5px 10px;
  color: white;
  font-size: 1.6rem;
  width: auto;
`

export const CardImage = styled.div`
  width: 100%;
  max-height: 300px;
  overflow: hidden;
  height: ${props => (props.type === "horizontal" ? "100%" : "200px")};

  .gatsby-image-wrapper {
    height: 100%;
    max-height: 300px;
  }

  @media only screen and (max-width: 1000px) {
    order: -1;
    padding: 0;
    width: 100%;
  }
`

export const CardOverlay = styled.div`
  position: absolute;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
