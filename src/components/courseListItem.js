import React from "react";

export default function courseListItem(props) {
  return (
    <div className="course-list-item">
      <div className="course-list-item-content">
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>

      <div className="course-list-item-image">
        <img src={props.imgSrc} alt="" />
      </div>
    </div>
  );
}
