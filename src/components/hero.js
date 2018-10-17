import React from "react";
import "../sass/hero.scss";
import Button from "./button";
import HeroItem from "./heroItem";

function onStartLearningClick() {
  console.log("clicked");
}

export default () => {
  return (
    <div className="hero">
      <div className="hero-items">
        <HeroItem
          title="Learn."
          subtitle="the latest and greatest technologies in our domain"
        />
        <HeroItem
          title="Build."
          subtitle="projects to reinfornce the things that we learned"
        />
        <HeroItem
          title="Teach."
          subtitle="to help others in the community grow and learn"
        />
      </div>

      <h4 className="hero-title">
        Let's learn <span className="highlight">Web Development</span>,{" "}
        <span className="highlight">Design</span>, and{" "}
        <span className="highlight">Tools</span> together.
      </h4>

      <div className="text-center">
        <a href="#courses">
          <Button btnText="Start Learning" onBtnClick={onStartLearningClick} />
        </a>
      </div>
    </div>
  );
};
