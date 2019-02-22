module.exports = {
  siteName: `Matt Ondo`,
  titleTemplate: `%s - Matt Ondo`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/blog/:slug'
      }
    }
  ]
}
