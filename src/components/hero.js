import React from "react";
import "../sass/hero.scss";
import Button from "./button";
import HeroItem from "./heroItem";
import learnIcon from "../images/learn-icon.svg";
import biuldIcon from "../images/build-icon.svg";
import teachIcon from "../images/teach-icon.svg";
import Newsletter from "./newsletter";
function onStartLearningClick() {
  console.log("clicked");
}

export default () => {
  return (
    <div className="hero">
      <div className="hero-items">
        <HeroItem
          title="LEARN"
          subtitle="the latest and greatest technologies in our domain"
          icon={learnIcon}
        />
        <div className="divider" />
        <HeroItem
          title="BUILD"
          subtitle="projects to reinfornce the things that we learned"
          icon={biuldIcon}
        />
        <div className="divider" />
        <HeroItem
          title="TEACH"
          subtitle="to help others in the community grow and learn"
          icon={teachIcon}
        />
      </div>

      {/* <h4 className="hero-title">
        Let's learn <span className="highlight">Web Development</span>,{" "}
        <span className="highlight">Design</span>, and{" "}
        <span className="highlight">Tools</span> together.
      </h4> */}

      <Newsletter />
    </div>
  );
};
