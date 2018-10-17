import React from "react";

export default function card(props) {
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
        <img src={props.imgSrc} alt="" />
      </div>
    </div>
  );
}
