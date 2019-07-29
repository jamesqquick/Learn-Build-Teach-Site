import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";
import CourseCard, { CARD_TYPES } from "./CourseCard";
import { CardList } from "../elements/Card";
import { StyledCourseList } from "../elements/CourseList";

const CourseList = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allCosmicjsCourses(
            sort: { fields: [metadata___release_date], order: DESC }
          ) {
            edges {
              node {
                title
                id
                slug
                metadata {
                  image_alt
                  url
                  release_date
                  hours
                  videos
                  featured
                  description
                  image {
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const courses = cosmicToCoursesArray(data);
        let featuredCourse = extractFeaturedCourse(courses);

        return (
          <StyledCourseList>
            {featuredCourse && (
              <CourseCard
                course={featuredCourse}
                type={CARD_TYPES.horizontal}
              />
            )}
            <CardList>
              {courses.map(course => (
                <CourseCard
                  key={course.title}
                  course={course}
                  featured={false}
                />
              ))}
            </CardList>
            <h4 className="callout">
              Want more <strong>FREE</strong> content? Check us out on{" "}
              <strong>
                <a href="https://www.youtube.com/c/jamesqquick">YouTube</a>
              </strong>
              !
            </h4>
          </StyledCourseList>
        );
      }}
    />
  );
};

const cosmicToCoursesArray = data => {
  return data.allCosmicjsCourses.edges.map(course => {
    return {
      title: course.node.title,
      ...course.node.metadata,
      image: course.node.metadata.image.url,
    };
  });
};

const extractFeaturedCourse = courses => {
  let featuredCourse = null;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].featured) {
      featuredCourse = courses.splice(i, i)[0];
      break;
    }
  }
  return featuredCourse;
};

export default CourseList;
