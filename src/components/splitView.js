import React from "react";
import "../sass/splitView.scss";

export default props => {
  return (
    <div className="splitview">
      <div className="left-content">
        <h1>{props.leftTitle}</h1>
      </div>
      <div className="right-content">
        <h2>{props.rightTitle}</h2>
        <p>{props.rightDescription}</p>
        <a
          className="btn"
          href="https://www.udemy.com/learn-visual-studio-code/?couponCode=LEARNVSCODE10"
        >
          Check it Out!
        </a>
      </div>
    </div>
  );
};
