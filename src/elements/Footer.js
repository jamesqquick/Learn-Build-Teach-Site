import styled from "styled-components";
import {offWhite} from "../utilities/Colors";


export const Footer = styled.footer`
    padding: 1rem 3rem;
    background-color: ${offWhite};

    & > svg {
        margin: 0 1rem;
        &:hover{
            transform: translateY(-1px);
        }
    }

    .footer-content {
        max-width: 900px;
        padding: 2rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footer-content > * {
        align-items: center;
        padding: 1rem;
        text-align: center;
    }
`;