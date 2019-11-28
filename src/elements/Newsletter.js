import styled from "styled-components"

export const StyledNewsletter = styled.div`
  max-width: 500px;
  margin: 0 auto;

  button[type="submit"] {
    border-radius: 0px 5px 5px 0px;
  }
  input[type="email"] {
    border-radius: 5px 0px 0px 5px;
  }

  .inline input {
    margin-right: 0;
  }

  .title {
    font-size: 2.4rem;
    font-weight: 300;
    margin-bottom: 2rem;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    max-width: 400px;
  }
`
