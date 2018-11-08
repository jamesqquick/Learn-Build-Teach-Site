import React from "react";
import "../sass/splitView.scss";
import Button from "./button";

export default props => {
  return (
    <div className="splitview">
      <div className="left-content">
        <h1>{props.leftTitle}</h1>
      </div>
      <div className="right-content">
        <h2>{props.rightTitle}</h2>
        <p>{props.rightDescription}</p>
        <Button btnText={props.btnText} />
      </div>
    </div>
  );
};
