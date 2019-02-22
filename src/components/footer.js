import React from "react";
import "../sass/footer.scss";
import SocialFollow from "../components/SocialFollow";

export default function footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="text-center">
          <p>Created by James Q Quick, @2019</p>
          <SocialFollow />
        </div>
      </div>
    </footer>
  );
}
