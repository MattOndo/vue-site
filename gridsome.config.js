module.exports = {
  siteName: `Matt Ondo`,
  titleTemplate: `%s - Matt Ondo`,
  siteUrl: 'https://mattondo.io',
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
        route: '/sandbox/:slug',
        remark: {
          plugins: ['@gridsome/remark-prismjs']
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/exclude-me'],
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/sandbox/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/contact': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ['@gridsome/remark-prismjs']
    }
  }
}
