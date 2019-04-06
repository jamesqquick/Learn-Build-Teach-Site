import React from "react";
import Hero from "../components/hero";
import Layout from "../components/layout";
import SplitContent from "../components/splitView";
import { Section } from "../components/section";
import CourseList from "../components/courseList";
import YouTubeGallery from "../components/YouTubeGallery";
import { FeaturedLeft, FeaturedRight } from "../components/Featured";

const IndexPage = () => (
  <Layout>
    <Section>
      <Hero />
    </Section>
    <SplitContent>
      <FeaturedLeft title="Featured Content"/>
      <FeaturedRight 
        title="Learn VS Code" 
        description="Visual Studio Code is the most popular text editor for Web Development.  Learning to harness its full power will drastically improve your efficiency and proficiency as a developer!"
        linkUrl="https://www.udemy.com/learn-visual-studio-code/?couponCode=LEARNVSCODE10"
      />
    </SplitContent>
    <div id="courses">
      <Section title="Start Learning!">
        <CourseList />
      </Section>
    </div>
    <div id="recent">
      <Section title="Recent Videos" classString="section-dark">
        <YouTubeGallery />
      </Section>
    </div>
  </Layout>
);

export default IndexPage;
