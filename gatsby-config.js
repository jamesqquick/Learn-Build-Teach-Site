module.exports = {
  siteMetadata: {
    title: "Learn Build Teach"
  },
  proxy: {
    prefix: "/.netlify/functions",
    url: "http://localhost:9000"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/lbt-icon.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sass"
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130194764-1"
      }
    }
  ]
};
