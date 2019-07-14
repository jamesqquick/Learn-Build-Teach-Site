import styled from "styled-components";


export const StyledNewsletter = styled.div`

  .newsletter {
    max-width: 500px;
    margin: 0 auto;

    .title {
      font-size: 2.4rem;
      font-weight: 300;
      margin-bottom: 2rem;
      text-align: center;
    }
  }


@media only screen and (max-width: 768px) {
  .newsletter {
    max-width: 400px;
  }
 
}
`;