import React from "react";

export default props => {
  return (
    <div className="hero-item">
      <h2 className="hero-item-title">{props.title}</h2>
      <hr className="title-underline" />
      <p className="hero-item-subtitle">{props.subtitle}</p>
    </div>
  );
};
