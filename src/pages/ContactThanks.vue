<template>
  <Layout>
    <h1 class="tc">Thanks for reaching out</h1>
    <p>I'll be in touch shortly!</p>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: 'Contact',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Thanks for contacting me.'
        }
      ],
      script: [
        {
          key: 'structuredData',
          type: 'application/ld+json',
          innerHTML: `{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'Contact - Matt Ondo',
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
