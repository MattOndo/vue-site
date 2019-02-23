<template>
  <Layout>
    <article class="sandbox article">
      <header>
        <h1 class="mb0">{{ $page.sandboxPost.title }}</h1>
        <span class="db mb3">{{ $page.sandboxPost.date }}</span>
      </header>
      <div class="aspect-ratio aspect-ratio--9x16 aspect-ratio--16x9-l ba bw1">
        <iframe
          class="aspect-ratio--object cover"
          frameborder="0"
          :src="$page.sandboxPost.embedurl"
        />
      </div>
      <div class="content" v-html="$page.sandboxPost.content"/>
    </article>
    <div>
      <BackButton/>
    </div>
  </Layout>
</template>

<script>
import GoBack from '../components/GoBack'

export default {
  metaInfo() {
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: this.$page.sandboxPost.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.sandboxPost.description
        }
      ],
      script: [
        {
          key: 'structuredData',
          type: 'application/ld+json',
          innerHTML: `{
            '@context': 'http://schema.org/',
            '@type': 'WebSite',
            name: '${this.$page.sandboxPost.title} - Matt Ondo',
            url: '${currentUrl}'
          }`
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
  components: {
    BackButton: GoBack
  },
  mounted() {
    let schema = document.createElement('script')
    schema.setAttribute('type', 'application/ld+json')
    schema.innerHTML = `{
        "@context": "http://schema.org/",
        "@type": "WebSite",
        "name": "${this.$page.sandboxPost.title} - Matt Ondo",
        "url": "${currentUrl}"
      }`
    document.head.appendChild(schema)
  }
}
</script>

<page-query>
  query SandboxPost ($path: String!) {
    sandboxPost (path: $path) {
      title
      description
      date (format: "D MMMM, YYYY")
      content
      embedurl
    }
  }
</page-query>

<style>
</style>
