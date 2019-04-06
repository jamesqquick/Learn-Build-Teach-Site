import styled from "styled-components";

export const StyledSplitView = styled.div`
  display: flex;

  > * {
    width: 50%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    > * {
    width: 100%;
    }
  }
`;
