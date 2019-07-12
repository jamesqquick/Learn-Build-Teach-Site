import React from "react";
import Hero from "../components/hero";
import Layout from "../components/layout";
import { Section } from "../components/section";
import CourseList from "../components/courseList";
import YouTubeGallery from "../components/YouTubeGallery";
import { StyledNewsletter } from "../elements/Newsletter"
const IndexPage = () => (
  <Layout>
    <Hero />
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
    <div id="newsletter">
      <Section  classString="section-dark">
        <StyledNewsletter />
      </Section>
    </div>
  </Layout>
);

export default IndexPage;
