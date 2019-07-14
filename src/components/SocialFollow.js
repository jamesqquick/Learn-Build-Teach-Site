import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {StyledSocialFollow, SocialFollowIcon} from "../elements/SocialFollow";
import {StyledCenterFlex} from "../elements/Flexbox";
export default function SocialFollow() {
  return (
    <StyledSocialFollow >
      <p>@2019 Learn Build Teach, LLC</p>
      <StyledCenterFlex>
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
          type="instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </SocialFollowIcon>
      </StyledCenterFlex>
    </StyledSocialFollow>
  );
}
