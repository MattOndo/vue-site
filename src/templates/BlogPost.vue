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
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: this.$page.blogPost.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.blogPost.description
        }
      ],
      script: [
        {
          key: 'structuredData',
          type: 'application/ld+json',
          innerHTML: `{
            '@context': 'http://schema.org/',
            '@type': 'WebSite',
            name: '${this.$page.blogPost.title} - Matt Ondo',
            url: '${currentUrl}'
          }`
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
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
