import styled from "styled-components";
import { white, backgroundDark } from "../utilities/Colors";
import {shadow} from "../utilities/Mixins";
export const StyledNavbar = styled.header`
    background-color: ${backgroundDark};
    color: ${white};
    position: sticky;
    top: 0px;
    width: 100%;
    height: 80px;
    z-index: 1000;
    /* ${shadow} */

    .nav-content {
        max-width: 1400px;
        padding: 0rem 3rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;

        #navBrand > img{
            height: 60px;
        }

        .nav-item {
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
        opacity: 0.99;

        &.open {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: ${backgroundDark};

            #navBrand {
                display: none;
            }

            .nav-content {

                #hamburgerBtn {
                    position: absolute;
                    top: 2rem;
                    right: 2rem;
                }
                .nav-items {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width:100%;

                    .nav-item {
                        font-size: 2.4rem;
                        margin-bottom: 2rem;
                    }
                }
            }
        }

        #hamburgerBtn {
            display: inline-block;
        }

       
    }
`