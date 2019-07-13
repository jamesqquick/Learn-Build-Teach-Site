import React from "react";
import Hero from "../components/hero";
import Layout from "../components/Layout";
import { Section, SECTION_TYPES } from "../components/Section";
import CourseList from "../components/courseList";
import YouTubeGallery from "../components/YouTubeGallery";
import { StyledNewsletter } from "../elements/Newsletter";
import Philosophy from "../components/Philosophy";
import Newsletter from "../components/Newsletter";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Section>
      <Philosophy />
    </Section>
    <Section title="Courses" type={SECTION_TYPES.LIGHT}>
      <CourseList />
    </Section>
    <Section title="Recent Videos">
      <YouTubeGallery />
    </Section>
    <Section title="Newsletter" type={SECTION_TYPES.LIGHT} subtitle="Sign up to get a free guide to Web Development in Visual Studio Code!">
      <Newsletter />
    </Section>
  </Layout>
);

export default IndexPage;
