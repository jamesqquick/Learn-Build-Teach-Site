import React from "react";
import SocialFollow from "./SocialFollow";
import { Footer } from "../elements/Footer";

export default function footer() {
  return (
    <Footer>
      <div className="footer-content">
        <SocialFollow />
      </div>
    </Footer>
  );
}
