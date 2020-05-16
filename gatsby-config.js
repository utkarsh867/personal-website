module.exports = {
  siteMetadata: {
    title: `Utkarsh Goel`,
    description: `Utkarsh Goel - Bachelor of Engineering, University of Hong Kong, Software Developer.`,
    author: `@utkarsh867`,
    siteUrl: `https://www.utkarshgoel.dev/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Utkarsh Goel`,
        short_name: `Utkarsh`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#212121`,
        display: `minimal-ui`,
        icon: `src/images/profile.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`],
          },
          {
            family: `Sen`,
          },
          {
            family: `Quicksand`,
          },
        ],
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-cname`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
