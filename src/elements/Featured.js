import styled from "styled-components";
import { primary } from "../utilities/Colors";
import { hover } from "../utilities/Mixins";

export const StyledFeatureTitle = styled.div`

    background-color: ${primary};
    color: white;
    height:400px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;

    h1 {
        color: white;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }

`;

export const StyledFeatureDetails = styled.div`
    height:400px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem;

    @media only screen and (max-width: 768px) {
    background-color: ${primary};
    & > * {
        color: white;
    }
  }
`;
