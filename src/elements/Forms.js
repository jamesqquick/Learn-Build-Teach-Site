import styled from "styled-components"
import { lightGrey } from "../utilities/Colors"

export const StyledForm = styled.form`
  max-width: 800px;
  margin: 0 auto;
  input {
    padding: 1rem 1rem;
    font-size: 1.6rem;
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${lightGrey};
  }

  .inline {
    input {
      margin-right: 1rem;
    }
    display: flex;
  }

  @media only screen and (max-width: 768px) {
    .inline {
      input {
        margin-right: 0;
        margin-bottom: 1rem;
      }
      button {
        width: 100%;
      }
      display: block;
    }
  }
`
