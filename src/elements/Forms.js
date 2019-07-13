import styled from "styled-components";
import {lightGrey} from "../utilities/Colors";

export const StyledForm = styled.form`

    max-width: 800px;
    margin: 0 auto;
    input {
        padding: 1rem 1rem;
        font-size: 1.4rem;
        width: 100%;
        border-radius: 5px;
        border: 1px solid ${lightGrey};
    }

    .inline {
        input {
            margin-right: 1rem;
        }
        display:flex;
    }


`;