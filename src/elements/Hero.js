import styled from "styled-components"
import { backgroundDark, white } from "../utilities/Colors"
export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${backgroundDark};
  padding: 16rem 2rem;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);

  .hero-title {
    color: ${white};
    text-align: center;
    margin-bottom: 0rem;
  }

  .hero-subtitle {
    color: ${white};
    font-weight: 300;
    font-family: Roboto;
    margin-top: 1rem;
    text-align: center;
    margin-bottom: 3rem;
    font-style: italic;
  }

  .hero-image {
    height: 180px;
    width: 180px;
    margin-bottom: 5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 8rem 2rem;

    .hero-title {
      font-size: 3.6rem;
    }
    .hero-subtitle {
      font-size: 2rem;
    }
    .hero-image {
      height: 100px;
      width: 100px;
    }
  }
`
