import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Section, SECTION_TYPES } from "../components/Section"
import CourseList from "../components/CourseList"
import YouTubeGallery from "../components/YouTubeGallery"
import Philosophy from "../components/Philosophy"
import Newsletter from "../components/Newsletter"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Section id="philosophy">
      <Philosophy test="test" />
    </Section>
    <Section title="Courses" type={SECTION_TYPES.LIGHT} id="courses">
      <CourseList />
    </Section>
    <Section title="Recent Videos" id="recent">
      <YouTubeGallery />
    </Section>
    <Section
      title="Newsletter"
      id="newsletter"
      type={SECTION_TYPES.LIGHT}
      subtitle="Sign up for updates on videos, courses, giveaways, and more!"
    >
      <Newsletter />
    </Section>
  </Layout>
)

export default IndexPage
