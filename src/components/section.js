import React from "react";
import "../sass/section.scss";
const Section = props => {
  return (
    <section className={"section " + (props.classString || "")}>
      {props.title ? (
        <h1 className="text-center section-title">{props.title}</h1>
      ) : (
        ""
      )}
      {props.children}
    </section>
  );
};

export { Section };
