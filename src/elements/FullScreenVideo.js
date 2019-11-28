import styled from "styled-components"
import { primaryDark, white, lightGrey } from "../utilities/Colors"
export const StyledFullScreenVideo = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${primaryDark};
  padding: 2rem;

  .video-responsive {
    overflow: hidden;
    position: relative;
    width: 100%;

    &::after {
      padding-top: 56.25%;
      display: block;
      content: "";
    }

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  #closeIcon {
    position: absolute;
    top: 3rem;
    right: 3rem;
    color: ${lightGrey};
    transition: transfom 500ms;

    &:hover {
      cursor: pointer;
      color: white;
      transform: scale(1.2);
    }
  }
`
