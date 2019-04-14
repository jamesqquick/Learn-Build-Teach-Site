import styled from "styled-components";
import {primaryDark} from "../utilities/Colors";
export const StyledFullScreenVideo = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${primaryDark};

    #closeIcon {
        position: absolute;
        top: 3rem;
        right: 3rem;
        color: white;

        &:hover {
            cursor: pointer;
        }
    }
    
    @media only screen and(max-width: 1150px) {
        #videoEmbed {
            width: 560px;
            height: 315px;
        }
    }

    @media only screen and(max-width: 650px) {
        #videoEmbed {
            width: 420px;
            height: 236px;
        }
    }

    @media only screen and(max-width: 400px) {
        #videoEmbed {
            width: 315px;
            height: 177;
        }
    }
`