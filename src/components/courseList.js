import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";
import CourseCard, {CARD_TYPES} from "./CourseCard";
import { CardList } from "../elements/Card";
import { StyledCourseList} from "../elements/CourseList";
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
                  imageName
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
        const courses = data.allMarkdownRemark.edges.map( course => course.node.frontmatter);
        const featuredCourses = courses.filter( course => course.featured == "true");
        const notFeaturedCourses = courses.filter( course => course.featured != "true");
        const featuredCourse = featuredCourses[0];
        return <div id="courses">
            <StyledCourseList>
              {featuredCourse && <Fragment>
                  <CourseCard course={featuredCourse} type={CARD_TYPES.horizontal} />
                </Fragment>}
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
                Want more <strong>FREE</strong> content? Check us out on <strong>
                  <a href="https://www.youtube.com/c/jamesqquick">
                    YouTube
                  </a>
                </strong>!
              </h4>
            </StyledCourseList>
          </div>;}}
    />
  );
};

export default CourseList;
