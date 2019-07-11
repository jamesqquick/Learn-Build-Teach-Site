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

.inline-form-input {
  display: flex;
}

.inline-form-input > *:first-child {
  flex-grow: 1;
}

@media only screen and (max-width: 768px) {
  .newsletter {
    max-width: 400px;
  }
  .inline-form-input {
    flex-direction: column;
  }

  .inline-form-input > *:first-child {
    flex-grow: 1;
    margin-bottom: 1rem;
  }
}
`;