<template>
  <Layout>
    <h1>👋 Hi, my name is Matt Ondo!</h1>
    <article>
      <p
        class="lh-copy"
      >Located in Denver, CO I spend as much time as possible playing in the Rocky Mountains. In the winter you can find me out on the slopes skiing. In the summer I enjoy mountain biking, camping, hiking, anything that gets me in the sun.</p>
      <p
        class="lh-copy"
      >When I'm not playing in the mountains I'm geeking out. Currently I am the Senior Front-End Developer at Intelligent Demand where I've been employed since February, 2015. As a Senior Front-End Developer, I play a critical role in the Front-End Development practice area and own the conversion of original visual design concepts to bulletproof front-end implementations. I have experience in building, testing and deploying multi-touch, multi-channel marketing campaigns in marketing automation platform software. Additionally, I own the buildout, testing, and deployment of interactive content and websites using WordPress and other Interactive and CMS platforms.</p>
      <p
        class="lh-copy"
      >Most recently I've been fiddling around with the Vue.js framework and Gridsome static site generator – this website is built using this very stack.</p>
    </article>
    <div class="grid">
      <div v-for="(gram, i) in grams" v-if="i<=limit-1" :key="i">
        <a class="db aspect-ratio aspect-ratio--1x1" :href="gram.link" target="_blank">
          <div
            class="aspect-ratio--object cover bg-center"
            :style="`background:url(${gram.images.standard_resolution.url})`"
          >
            <div class="item hover-bg-black-50 hide-child white pa3 h-100 overflow-hidden">
              <div class="child">
                <p v-text="gram.caption.text" class="ma0 mb2 pb3"/>
                <span
                  class="dib pa2 bg-white br2 absolute bottom-1 right-1 black f7 dm-bg-black dm-white"
                >
                  ❤️&nbsp;
                  <span v-text="gram.likes.count"/>
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: auto;
}
.item:hover {
  overflow-y: auto;
}
@media screen and (min-width: 768px) {
  .grid {
    grid-template-columns: auto auto auto;
  }
}
</style>

<script>
import axios from 'axios'

export default {
  metaInfo() {
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: 'Welcome',
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            "Welcome to Matt Ondo's website. Matt is a front-end developer and modern marketer. Here you will find Matt's portfolio, recent work, and contact information you will learn about Matt's recent adventures."
        }
      ],
      script: [
        {
          key: 'structuredData',
          type: 'application/ld+json',
          innerHTML: `{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'Welcome - Matt Ondo',
          url: '${currentUrl}'
        }`
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
  data() {
    return {
      access_token: '2269121656.4665d35.c915a5e17ca4454d9897dcec6465fbbf',
      url: 'https://api.instagram.com/v1/users/self/media/recent/',
      username: 'matt_ondo',
      grams: [],
      next_url: '',
      error: false,
      limit: 9
    }
  },
  computed: {
    instapage() {
      return `https://www.instagram.com/${this.username}`
    }
  },
  methods: {
    getGrams() {
      axios
        .get(`${this.url}?access_token=${this.access_token}`)
        .then(({ data }) => {
          this.grams = data.data
          this.username = data.data[0].user.username
          this.next_url = data.pagination.next_url
        })
        .catch(function(error) {
          console.log(error)
          this.error = true
        })
    },
    getMoreGrams() {
      axios
        .get(this.next_url)
        .then(({ data }) => {
          this.grams = this.grams.concat(data.data)
          this.next_url = data.pagination.next_url
        })
        .catch(error => {
          console.log(error)
          this.error = true
        })
    }
  },
  created() {
    this.getGrams()
  }
}
</script>
