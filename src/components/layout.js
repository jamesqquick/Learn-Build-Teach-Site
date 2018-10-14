import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Navbar from "./navbar";
import "../sass/index.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            {
              name: "keywords",
              content:
                "Web Development, Web Design, Web Tools, Learning Platform"
            }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
