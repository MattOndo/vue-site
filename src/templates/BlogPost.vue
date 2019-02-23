<template>
  <Layout>
    <div class="blog article">
      <h1>{{ $page.blogPost.title }}</h1>
      <span>{{ $page.blogPost.date }}</span>
      <g-image :src="$page.blogPost.image"/>
      <div class="content" v-html="$page.blogPost.content"/>
    </div>
    <BackButton/>
  </Layout>
</template>

<script>
import GoBack from '../components/GoBack'

export default {
  metaInfo() {
    return {
      title: this.$page.blogPost.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.blogPost.description
        }
      ]
    }
  },
  components: {
    BackButton: GoBack
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      image
      description
    }
  }
</page-query>

<style>
</style>
