import React from "react";
import { withPrefix } from "gatsby";

export default function card(props) {
  const { overlayUrl, title, subtitle, imgName, videos, hours, tag } = props;
  return (
    <div className="card">
      <div className="tag">{tag}</div>
      {overlayUrl && <a className="card-overlay" href={overlayUrl} />}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <p>
          <strong>{videos}</strong> videos <strong>{hours}</strong> hours
        </p>
      </div>
      <div className="card-image">
        <img src={withPrefix(`/${imgName}`)} alt="" />
      </div>
    </div>
  );
}
