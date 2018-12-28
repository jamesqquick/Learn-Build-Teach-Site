import React from "react";

export default props => {
  return (
    <div className="hero-item">
      <h1 className="hero-item-title">{props.title}</h1>
      <hr className="title-underline" />
      <p className="hero-item-subtitle">{props.subtitle}</p>
    </div>
  );
};
