import React from "react";
import Card from "./card";
import "../sass/card.scss";
import { StaticQuery, graphql } from "gatsby";

const CourseList = props => {
  return (
    <StaticQuery
      query={coursesQuery}
      render={data => (
        <div className="card-list">
          {data.allMarkdownRemark.edges.map(course => (
            <Card
              title={course.node.frontmatter.title}
              subtitle={course.node.frontmatter.description}
              imgName={course.node.frontmatter.imageName}
              overlayUrl={course.node.frontmatter.url}
              key={course.node.frontmatter.id}
            />
          ))}
        </div>
      )}
    />
  );
};

export default CourseList;

export const coursesQuery = graphql`
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
            url
            createdDate
          }
        }
      }
    }
  }
`;
