import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Footer from "./Footer";
import Navbar from "./Navbar";
import GlobalStyle from "../elements/Global";
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
                "Web Development, Design, Developer Tools, Learning Platform, Web Development Tutorials"
            }
          ]}
        >
          <html lang="en" />
          <meta
            name="google-site-verification"
            content="amnHMJR_lUGMcft9nnf5BzMxT9Ifai5iUQjcvWpIofs"
          />
        </Helmet>
        <GlobalStyle/>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
