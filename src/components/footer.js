import React from "react";
import "../sass/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialFollow from "../components/SocialFollow";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="text-center">
          <p>Created by James Q Quick, @2018</p>
          <SocialFollow />
        </div>
      </div>
    </footer>
  );
}
