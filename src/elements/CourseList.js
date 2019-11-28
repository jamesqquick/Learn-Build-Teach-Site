import styled from "styled-components"
import { primary } from "../utilities/Colors"

export const StyledCourseList = styled.div`
  h1 {
    color: ${primary};
    margin-bottom: 2rem;
  }

  .callout {
    text-align: center;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;

    strong {
      margin: 0px 0.5rem;
    }
  }
`
