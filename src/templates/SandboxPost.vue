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
    return {
      title: this.$page.sandboxPost.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.sandboxPost.description
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
