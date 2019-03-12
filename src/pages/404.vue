<template>
  <Layout>
    <div class="mb6">
      <h1 class="tc">404 😳</h1>
      <p class="tc">Well this is embarrassing</p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: '404',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: '404 Not Found'
        }
      ],
      script: [
        {
          key: 'structuredData',
          type: 'application/ld+json',
          innerHTML: `{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: '404 Not Found - Matt Ondo',
          url: '${currentUrl}'
        }`
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  }
}
</script>

<style scoped>
</style>
