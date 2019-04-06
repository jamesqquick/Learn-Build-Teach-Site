import styled from "styled-components";

const iconColorsMap = {
    facebook:"#4968ad",
    twitter: "#49a1eb",
    instagram: "black",
    linkedIn:"#3077b0",
    youtube: "#eb3223"
}

export const  StyledSocialFollow = styled.div`


`

export const SocialFollowIcon = styled.a`
    margin: 0 1rem;
    transition: transform 250ms;
    color: ${props => iconColorsMap[props.type]} !important;
    &:hover {
      -webkit-transform: translateY(-2px);
      -ms-transform: translateY(-2px);
      transform: translateY(-2px);
    }
`