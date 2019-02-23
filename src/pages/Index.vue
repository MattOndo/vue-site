<template>
  <Layout>
    <h1>👋 Hi, my name is Matt Ondo!</h1>
    <article>
      <p
        class="lh-copy"
      >Located in Denver, CO I spend as much time as possible out in the Rocky Mountains. In the winter you can bet your butt I'm skiing. In the summer you'll find me mountain biking, camping, hiking, and/or enjoying a classic park day.</p>
      <p
        class="lh-copy"
      >Yes, I have a job–a pretty great one! My current post is Senior Front-end Developer at Intelligent Demand. I've been with Intelligent Demand since February, 2016. As a Senior Front-end Developer, I play a critical role in the Front-End Development practice at ID and own the conversion of original visual design concepts to bulletproof front-end implementations. I have experience in building, testing and deploying multi-touch, multi-channel marketing campaigns in marketing automation platform software. Additionally, I own the buildout, testing and deployment of interactive content and websites using WordPress and other CMS platforms.</p>
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
                <span class="dib pa2 bg-white br2 absolute bottom-1 right-1 black f7">
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
// import VueAxios from 'vue-axios'

export default {
  metaInfo: {
    title: 'Welcome',
    meta: [
      {
        name: 'description',
        content:
          "Welcome to Matt Ondo's website. Matt is a front-end developer and modern marketer. Here you will find Matt's portfolio, recent work, and contact information you will learn about Matt's recent adventures."
      }
    ]
  },
  data() {
    return {
      access_token: '2269121656.4665d35.c915a5e17ca4454d9897dcec6465fbbf',
      url: 'https://api.instagram.com/v1/users/self/media/recent/',
      username: 'matt_ondo',
      grams: [],
      next_url: '',
      error: false
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
