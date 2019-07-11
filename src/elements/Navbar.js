import styled from "styled-components";
import { offWhite, lightGrey } from "../utilities/Colors";

export const StyledNavbar = styled.nav`
    background-color: ${offWhite};
    position: sticky;
    top: 0px;
    width: 100%;
    height: 80px;
    z-index: 1000;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);

    .nav-content {
        max-width: 1400px;
        padding: 0rem 3rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;

        .brand-container {
            display: flex;
            justify-content: space-between;
            width:100%;
            align-items:center;
        }

        .nav-item {
            display: inline;
            margin-left: 2rem;
            color: $black;
        }
    }

    #hamburgerBtn {
    display: none;
        &:hover {
            cursor:pointer;
        }
    }

    @media only screen and (max-width: 768px) {
        position: static;
        height: auto;
        padding: 1rem 0;

        &.open {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: ${lightGrey};

            .nav-content {
                justify-content: flex-start;

                .nav-items {
                    align-self: stretch;
                    padding-left: 0;
                    margin-top: 5rem;

                }
            }
        }

        .nav-content {
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
             
            .nav-item {
                display: block;
                margin-bottom: 3rem;
                margin-left: 0;
                text-align: center;
            }

            .nav-item > a {
                font-size: 3.2rem;
                display: block;
            }
        }

        #hamburgerBtn {
            display: inline-block;
        }

       
    }
`