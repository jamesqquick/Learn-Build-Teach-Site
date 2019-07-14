import React from "react";
import SocialFollow from "./SocialFollow";
import { Footer } from "../elements/Footer";
import logo from "../images/logo360-white.svg";

export default function footer() {
  return <Footer>
          <img src={logo} alt="Learn Build Teach Logo."/>
        <SocialFollow />
    </Footer>;
}
