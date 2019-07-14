import styled from 'styled-components';
import { primary } from "../utilities/Colors";
export const StyledPhilosophy = styled.div`
         .philosophy-content {
           display: flex;
           justify-content: space-between;
           max-width: 800px;
           margin: 0 auto;
         }
         .bullets-container {
           display: flex;
           flex-direction: column;
         }
         .bullet {
           display: flex;
           align-items: flex-end;
           margin-bottom: 5rem;
           height: 5.4rem;
           h1 {
             color: ${primary};
             display: inline;
             margin: 0;
             margin-right: 2rem;
             line-height: 5.4rem;
             display: inline;
           }
           p {
             margin: 0;
             font-size: 2.4rem;
             line-height: 2.4rem;
             display: inline;
           }
         }

         p {
           font-size: 2rem;
           text-align: center;
           max-width: 800px;
           margin: 0 auto;
           line-height: 3rem;
           a {
             font-size: 2rem;
           }
         }

         .bullet:nth-of-type(2) > h1 {
           margin-left: 10rem;
         }

         .bullet:nth-of-type(3) > h1 {
           margin-left: 20rem;
         }

         #profilePic {
           height: 180px;
           width: 180px;
         }

         @media only screen and (max-width: 768px) {.philosophy-content {
             flex-direction: column;
           }

           img {
             margin: 5rem auto;
           }
           .bullet {
             margin-bottom: 2rem;
             h1 {
               font-size: 4.2rem;
               line-height: 4.2rem;
             }

             p {
               font-size: 1.8rem;
             }
           }

           .bullet:nth-of-type(2) > h1 {
             margin-left: 2rem;
           }

           .bullet:nth-of-type(3) > h1 {
             margin-left: 4rem;
           }}`;