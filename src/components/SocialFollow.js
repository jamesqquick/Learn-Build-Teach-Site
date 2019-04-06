import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {StyledSocialFollow, SocialFollowIcon} from "../elements/SocialFollow";
import {StyledFlex} from "../elements/Flexbox";
export default function SocialFollow() {
  return (
    <StyledSocialFollow >
      <h3>@LearnBuildTeach</h3>
      <StyledFlex>
        <SocialFollowIcon
          href="https://www.youtube.com/c/jamesqquick"
          type="youtube"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </SocialFollowIcon>
        <SocialFollowIcon
          href="https://www.facebook.com/learnbuildteach/"
          type="facebook"

        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </SocialFollowIcon>
        <SocialFollowIcon
          href="https://www.twitter.com/jamesqquick"
          type="twitter"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </SocialFollowIcon>
        <SocialFollowIcon
          href="https://www.instagram.com/learnbuildteach"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </SocialFollowIcon>
      </StyledCenterFlex>
    </StyledSocialFollow>
  );
}
