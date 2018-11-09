import React from "react";
import Hero from "../components/hero";
import Layout from "../components/layout";
import SplitContent from "../components/splitView";
import { Section } from "../components/section";
import CourseList from "../components/courseList";
import Newsletter from "../components/newsletter";
const IndexPage = () => (
  <Layout>
    <Section>
      <Hero />
    </Section>
    <div id="featured">
      <Section classString="section-dark section-full">
        <SplitContent
          leftTitle="Featured Content"
          rightTitle="Learn VS Code"
          rightDescription="Visual Studio Code is the most popular text editor for Web Development.  Learning to harness its full power will drastically improve your efficiency and proficiency as a developer!"
          btnText="Check it Out!"
          onBtnClick={() => {
            window.location.href = "https://www.learnvscode.com/";
          }}
        />
      </Section>
    </div>
    <div id="courses">
      <Section title="Start Learning!">
        <CourseList />
      </Section>
    </div>

    <div id="newsletter">
      <Section title="Newsletter" classString="section-dark">
        <Newsletter />
      </Section>
    </div>
  </Layout>
);

export default IndexPage;
