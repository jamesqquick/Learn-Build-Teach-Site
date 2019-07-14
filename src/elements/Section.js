import styled from "styled-components";
import { white, lightGrey, primary} from "../utilities/Colors";

const TYPES_TO_COLORS = {
  "DARK": lightGrey,
  "LIGHT": white
}

export const StyledSection = styled.section`

  padding: 12rem 5rem;
  background-color: ${ props => TYPES_TO_COLORS[props.type] || lightGrey}; 

  h1.section-title {
  }
  h4.section-subtitle {
    color: ${primary};
    font-weight: 500;
    margin-top:-4rem;
    margin-bottom: 5rem;
  }


  .section-full {
    padding: 0;
  }

  .section-title {
    margin-bottom: 5rem;
  }

  @media only screen and (max-width: 768px) {
      padding: 8rem 3rem;
    .section-full {
      padding: 0;
    }
   
  }

`;