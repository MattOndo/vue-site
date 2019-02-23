<template>
  <Layout>
    <h1>Matt's Sandbox</h1>
    <ul class="list pa0 ma0">
      <li v-for="{ node } in $page.allSandboxPost.edges" :key="node._id" class="pv6">
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
        name: 'description',
        content:
          "Welcome to Matt Ondo's Sandbox. Matt is a front-end developer and modern marketer. Here you will find Matt's portfolio, recent work, and contact information you will learn about Matt's recent adventures."
      }
    ]
  }
}
</script>
