import styled from "styled-components";

export const StyledGallery = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 3rem;

    @media only screen and (max-width: 768px) {
        display: block;

        & > .youtube-thumbnail {
        width: 100%;
        }
    }
  `