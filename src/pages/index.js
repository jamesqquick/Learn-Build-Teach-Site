import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { Section, SECTION_TYPES } from "../components/Section";
import CourseList from "../components/CourseList";
import YouTubeGallery from "../components/YouTubeGallery";
import Philosophy from "../components/Philosophy";
import Newsletter from "../components/Newsletter";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Section id="philosophy">
      <Philosophy />
    </Section>
    <Section title="Courses" type={SECTION_TYPES.LIGHT} id="courses">
      <CourseList />
    </Section>
    <Section title="Recent Videos" id="recent">
      <YouTubeGallery />
    </Section>
    <Section title="Newsletter" id="newsletter" type={SECTION_TYPES.LIGHT} subtitle="Sign up to get a free guide to Web Development in Visual Studio Code!">
      <Newsletter />
    </Section>
  </Layout>
);

export default IndexPage;
