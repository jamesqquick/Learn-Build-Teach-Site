const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Learn Build Teach.`,
    description: `Learn Web Development, Design, and Developer Tools.`,
    author: `@jamesqquick`,
  },
  proxy: {
    prefix: "/.netlify/functions",
    url: "http://localhost:9000",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/md`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Learn Build Teach`,
        start_url: `/`,
        icon: "src/images/lbt-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130194764-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`oswald\:300,500,700`, `roboto\:300,500,700`],
        display: "swap",
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ["UC-T8W79DN6PBnzomelvqJYw"],
        apiKey: "AIzaSyDKVI3I7T1exxi6mIL-UkNmWYE1f7E40TI",
        maxVideos: 10,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
