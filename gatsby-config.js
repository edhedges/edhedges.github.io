module.exports = {
  siteMetadata: {
    title: `Eddie Hedges`,
    description: `Eddie Hedges is a software developer that enjoys both front and back end development. This includes markup, styling, user interface, functionality, and data store. This website will have information about programming, web development and design, .NET, python, javascript, typescript, html, css, sass, open source, and possibly some health/nutrition information.`,
    author: `Eddie Hedges`,
    siteUrl: `https://eddiehedges.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eddie Hedges`,
        short_name: `Eddie`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/favicon.png`,
      },
    },
  ],
}
