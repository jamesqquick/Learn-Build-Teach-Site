import React from "react";
import "../sass/hero.scss";

export default () => {
  return (
    <div className="section">
      <div className="hero-items">
        <div className="hero-item">
          <h2 className="hero-item-title">Learn.</h2>
          <hr className="title-underline" />
          <p className="hero-item-subtitle">the latest and greatest</p>
        </div>
        <div className="hero-item">
          <h2 className="hero-item-title">Build.</h2>
          <hr className="title-underline" />
          <p className="hero-item-subtitle">projects to reinforce learnings</p>
        </div>
        <div className="hero-item">
          <h2 className="hero-item-title">Teach.</h2>
          <hr className="title-underline" />

          <p className="hero-item-subtitle">to help others grow and learn</p>
        </div>
      </div>

      <h4 className="hero-title">
        Let's learn <span className="highlight">Web Development</span>,{" "}
        <span className="highlight">Design</span>, and{" "}
        <span className="highlight">Tools</span> together.
      </h4>
    </div>
  );
};
