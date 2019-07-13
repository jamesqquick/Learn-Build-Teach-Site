import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";
import CourseCard from "./CourseCard";
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
        return (
        <div id="courses">
          <div className="container">
            { featuredCourse && (
              <Fragment>
                <h2>Featured</h2>
                <CourseCard course={featuredCourse} featured={true}></CourseCard>
              </Fragment>
            )}
              <div className="course-list">
                {
                  notFeaturedCourses.map(course => (
                    <CourseCard key={course.title} course={course} featured={false}></CourseCard>
                  ))}
              </div>
            </div>
        </div>
      )}}
    />
  );
};

export default CourseList;
