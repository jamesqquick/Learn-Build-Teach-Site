import React from "react";
import Card from "./card";
import "../sass/card.scss";
import vsCodeCover from "../images/learn-vs-code-cover.svg";
import coreFundamentalsCover from "../images/core-fundamentals-cover.svg";
import chatAppCover from "../images/chat-app-cover.svg";

export default function courseList() {
  return <div className="card-list">
      <Card title="Learn VS Code" subtitle="Visual Studio Code is the most popular text editor for Web Development. Learning to harness its full power will drastically improve your efficiency and proficiency as a developer! Customization, extensions, and more!  Whether you’re new to Web Development or a seasoned vet, there’s still something to learn!  " imgSrc={vsCodeCover} overlayUrl="https://www.learnvscode.com/" />
      <Card title="Design and Build a Chat App" subtitle="Visual Studio Code is the most popular text editor for Web Development. Learning to harness its full power will drastically improve your efficiency and proficiency as a developer! Customization, extensions, and more!  Whether you’re new to Web Development or a seasoned vet, there’s still something to learn!  " imgSrc={chatAppCover} overlayUrl="https://www.learnvscode.com/" />
      <Card title="Core Fundamentals of Web Development" subtitle="Visual Studio Code is the most popular text editor for Web Development. Learning to harness its full power will drastically improve your efficiency and proficiency as a developer! Customization, extensions, and more!  Whether you’re new to Web Development or a seasoned vet, there’s still something to learn!  " imgSrc={coreFundamentalsCover} overlayUrl="https://www.learnvscode.com/" />
    </div>;
}
