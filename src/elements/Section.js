import styled from "styled-components";


export const StyledSection = styled.section`


padding: 12rem 5rem;
  background-color: #fafafa;

.section-dark {
  background-color: #eaeaea;
}

.section-full {
  padding: 0;
}

.section-title {
  margin-bottom: 5rem;
}

@media only screen and (max-width: 768px) {
  .section {
    padding: 8rem 3rem;
  }
  .section-full {
    padding: 0;
  }
}

`;