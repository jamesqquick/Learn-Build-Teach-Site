import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"
import CourseCard, { CARD_TYPES } from "./CourseCard"
import { CardList } from "../elements/Card"
import { StyledCourseList } from "../elements/CourseList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { SocialFollowIcon } from "../elements/SocialFollow"
const CourseList = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___createdDate], order: DESC }
          ) {
            edges {
              node {
                html
                frontmatter {
                  title
                  path
                  description
                  id
                  image {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  imageAlt
                  url
                  createdDate
                  hours
                  videos
                  tag
                  featured
                }
              }
            }
          }
        }
      `}
      render={data => {
        const courses = data.allMarkdownRemark.edges.map(
          course => course.node.frontmatter
        )
        const featuredCourses = courses.filter(
          course => course.featured === "true"
        )
        const notFeaturedCourses = courses.filter(
          course => course.featured !== "true"
        )
        const featuredCourse = featuredCourses[0]
        return (
          <StyledCourseList>
            {featuredCourse && (
              <Fragment>
                <CourseCard
                  course={featuredCourse}
                  type={CARD_TYPES.horizontal}
                />
              </Fragment>
            )}
            <CardList>
              {notFeaturedCourses.map(course => (
                <CourseCard
                  key={course.title}
                  course={course}
                  featured={false}
                />
              ))}
            </CardList>
            <h4 className="callout">
              More <strong>FREE</strong> content? Subscribe to the YouTube
              channel!
              <SocialFollowIcon
                href="https://www.youtube.com/c/jamesqquick?sub_confirmation=1"
                target="_blank"
                type="youtube"
              >
                <FontAwesomeIcon icon={faYoutube} size="4x" />
              </SocialFollowIcon>
            </h4>
          </StyledCourseList>
        )
      }}
    />
  )
}

export default CourseList
