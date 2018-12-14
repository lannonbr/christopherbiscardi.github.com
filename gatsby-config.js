module.exports = {
  siteMetadata: {
    title: `Chris Biscardi's website`
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/post/`
      }
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: { default: require.resolve("./src/blog-post.js") }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`
  ]
};
