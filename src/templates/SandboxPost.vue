<template>
  <Layout>
    <article class="article">
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
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.sandboxPost.title
    }
  }
}
</script>

<page-query>
  query SandboxPost ($path: String!) {
    sandboxPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      embedurl
    }
  }
</page-query>

<style>
/* .header {
    margin-bottom: 70px;
  } */

.article {
  margin-top: 15px;
}

.article img {
  width: 100%;
  border-radius: 5px;
}

.article a {
  color: #357edd;
  text-decoration: underline;
}

.article a:hover {
  text-decoration: none;
}

.article span {
  font-size: 80%;
  margin-bottom: 20px;
}

.article ol,
.article ul {
  list-style-position: outside;
}

.article ul {
  list-style: disc;
  padding-left: 20px;
}

.article .content p:first-child {
  margin-top: 15px;
}

.article .content p {
  margin-top: 0;
  margin-bottom: 10px;
  line-height: 1.5;
}
</style>
