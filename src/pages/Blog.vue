<template>
  <Layout>
    <h1>Matt's Blog</h1>
    <ul class="list pa0 ma0">
      <li v-for="{ node } in $page.allBlogPost.edges" :key="node._id" class="pt3 pb4">
        <div class="mb2">
          <router-link :to="node.path" class="dib no-underline black pointer grow">
            <h2 v-html="node.title" class="mb1 mb2-ns mr1 mr3-ns"/>
          </router-link>
          <span v-html="node.date" class="dib"/>
        </div>
        <div v-html="node.description"/>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query Blog ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          _id
          title
          date (format: "D MMMM, YYYY")
          description
          path
        }
      }
    }
  }
</page-query>

<style scoped>
</style>

<script>
export default {
  name: 'Blog',
  metaInfo: {
    title: 'Blog',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          "Welcome to Matt Ondo's Blog. Matt is a front-end developer and modern marketer. Here you will find Matt's portfolio, recent work, and contact information you will learn about Matt's recent adventures."
      }
    ],
    script: [
      {
        key: 'structuredData',
        type: 'application/ld+json',
        innerHTML: `{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'Blog - Matt Ondo',
          url: '${window.location}'
        }`
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  }
}
</script>
