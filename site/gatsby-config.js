module.exports = {
  siteMetadata: {
    description: "Raja Ganesan's persoanl site and blog",
    locale: "en",
    title: "Raja Ganesan",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
