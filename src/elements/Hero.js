import styled from 'styled-components';
import { backgroundDark, white } from "../utilities/Colors";
export const StyledHero= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${backgroundDark};
    height: calc(100vh - 80px);

    .hero-title {
        color: ${white};
        text-align:center;
    }

    .hero-subtitle {
        color: ${white};
        font-weight: 300;
        font-family: Roboto;
        margin-top: 1rem;
        text-align:center;
    }

    .hero-image {
        height: 180px;
        width: 180px;
        margin-bottom: 5rem;
    }
`;