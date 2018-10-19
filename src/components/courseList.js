import React from "react";
import Card from "./card";
import "../sass/card.scss";
import vsCodeCover from "../images/learn-vs-code-cover.svg";
import coreFundamentalsCover from "../images/core-fundamentals-cover.svg";
import chatAppCover from "../images/chat-app-cover.svg";

export default function courseList() {
  return <div className="card-list">
      <Card title="Learn VS Code" subtitle="Visual Studio Code is the most popular text editor for Web Development. Learning to harness its full power will drastically improve your efficiency and proficiency as a developer! Customization, extensions, and more!  Whether you’re new to Web Development or a seasoned vet, there’s still something to learn!" imgSrc={vsCodeCover} overlayUrl="https://www.learnvscode.com/" />
      <Card title="Design and Build a Chat App" subtitle="In this mini series we are going to Design and Build a chat application using Socket.io. We will first discuss basic design concepts while exploring the design for this application in Sketch. We will then move on to laying out our application in HTML and CSS, and lastly, will add Javascript to complete the functionality. Along the way, we are going to use modern Web Development technologies and features such as Flexbox, CSS Variables, ES6 Arrow Functions, ES6 Map, Let and Const variables, Node.js, Express.js, and Socket.io." imgSrc={chatAppCover} overlayUrl="https://www.learnvscode.com/" />
      <Card title="Core Fundamentals of Web Development" subtitle=" In this course, we will use pure HTML, CSS, and Javascript (no libraries or frameworks!!) to create a Link Saver application.  The hope is that by foregoing all of the libraries and frameworks out there, we will increase our core knowledge and understanding of how different aspects of web development will work.  This course is designed for Beginner to Intermediate Web Developers who are looking to learn new concepts or reinforce ones they've already been exposed to." imgSrc={coreFundamentalsCover} overlayUrl="https://www.learnvscode.com/" />
    </div>;
}
