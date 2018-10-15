import React from "react";
import CourseListItem from "./courseListItem";
import "../sass/courseList.scss";

import logo from "../images/lbt-icon.svg";
export default function courseList() {
  return (
    <div>
      <CourseListItem
        title="Learn VS Code"
        subtitle="Visual Studio Code is the most popular text editor for Web Development. Learning to harness its full power will drastically improve your efficiency and proficiency as a developer! Customization, extensions, and more!  Whether you’re new to Web Development or a seasoned vet, there’s still something to learn!  "
        imgSrc={logo}
      />
    </div>
  );
}
