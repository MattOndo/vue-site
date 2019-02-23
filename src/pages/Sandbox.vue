<template>
  <Layout>
    <h1>Matt's Sandbox</h1>
    <ul class="list pa0 ma0">
      <li v-for="{ node } in $page.allSandboxPost.edges" :key="node._id" class="pt3 pb4">
        <div class="mb2">
          <router-link :to="node.path" class="dib black no-underline pointer grow">
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
  query Sandbox ($page: Int) {
    allSandboxPost (page: $page) {
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
  name: 'Sandbox',
  metaInfo: {
    title: 'Sandbox',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          "Welcome to Matt Ondo's Sandbox. Matt is a front-end developer and modern marketer. Here you will find Matt's portfolio, recent work, and contact information you will learn about Matt's recent adventures."
      }
    ]
  }
}
</script>
