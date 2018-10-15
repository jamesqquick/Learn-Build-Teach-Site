import React from "react";
import Hero from "../components/hero";
import Layout from "../components/layout";
import SplitContent from "../components/splitView";
import { Section } from "../components/section";
import CourseList from "../components/courseList";

const IndexPage = () => (
  <Layout>
    <Section>
      <Hero />
    </Section>
    <Section classString="section-dark section-full">
      <SplitContent
        leftTitle="Featured Content"
        rightTitle="Learn VS Code"
        rightDescription="Visual Studio Code is the most popular text editor for Web Development.  Learning to harness its full power will drastically improve your efficiency and proficiency as a developer!"
        btnText="Check it Out!"
      />
    </Section>
    <Section title="Start Learning!">
      <CourseList />
    </Section>
  </Layout>
);

export default IndexPage;
