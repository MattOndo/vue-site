<template>
  <Layout>
    <h1>Matt's Posts</h1>
    <ul class="list pa0 ma0">
      <li v-for="{ node } in $page.allBlogPost.edges" :key="node._id" class="pv6">
        <div>
          <router-link :to="node.path" class="dib link dim blue">
            <h2 v-html="node.title"/>
          </router-link>
          <span v-html="node.date" class="ml3 dib"/>
        </div>
        <div v-html="node.description"/>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
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
    meta: [{ name: 'description', content: "Matt Ondo's Blog" }]
  }
}
</script>
