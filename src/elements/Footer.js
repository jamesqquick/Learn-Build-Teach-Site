import styled from "styled-components";
import {backgroundDark, white} from "../utilities/Colors";


export const Footer = styled.footer`
         display: flex;
        justify-content: center;
        align-items: center;
         padding: 4rem 3rem;
         background-color: ${backgroundDark};

         img {
           width: 80px;
           height: 80px;
           margin-right: 2rem;
         }

         p {
           color: ${white};
           font-size: 2rem;
           font-weight: 500;
         }

         & > svg {
           margin: 0 1rem;
           &:hover {
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
         }`;