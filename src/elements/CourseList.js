import styled from "styled-components"
import { primary, white } from "../utilities/Colors"

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
    background: #266c7d;
    padding: 20px;
    color: white;
    border-radius: 5px;

    a {
      background-color: ${white};
      padding: 4px;
      border-radius: 5px;
    }

    strong {
      margin: 0px 0.5rem;
    }
  }
`
