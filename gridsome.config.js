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
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'sandbox/*.md',
        typeName: 'SandboxPost',
        route: '/sandbox/:slug'
      }
    }
  ]
}
