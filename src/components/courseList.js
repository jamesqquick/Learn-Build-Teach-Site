import React from "react";
import Card from "./card";
import { StaticQuery, graphql } from "gatsby";

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
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="card-list">
          {data.allMarkdownRemark.edges.map(course => {
            const {
              title,
              description,
              imageName,
              imageAlt,
              url,
              hours,
              videos,
              tag,
              id
            } = course.node.frontmatter;
            return (
              <Card
                imgName={imageName}
                imageAlt={imageAlt}
                overlayUrl={url}
                tag={tag}
                key={id}
              >
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <p>
                    <strong>{videos}</strong> videos <strong>{hours}</strong>{" "}
                    hours
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    />
  );
};

export default CourseList;
