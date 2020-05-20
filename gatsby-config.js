module.exports = {
  siteMetadata: {
    title: `Di Paolo | Web Developer`,
    description: `I am a web developer from Italy based in Dublin.`,
    author: `Sdrummolo`,
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
    `gatsby-plugin-styled-components`,
  ],
}
