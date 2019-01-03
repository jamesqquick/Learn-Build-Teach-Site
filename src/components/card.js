import React from "react";
import { withPrefix } from "gatsby";

export default function card(props) {
  console.log(props.imgName);
  return (
    <div className="card">
      {props.overlayUrl && (
        <a className="card-overlay" href={props.overlayUrl} />
      )}
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>
      <div className="card-image">
        <img src={withPrefix(`/${props.imgName}`)} alt="" />
      </div>
    </div>
  );
}
