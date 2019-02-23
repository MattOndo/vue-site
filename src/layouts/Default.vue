<template>
  <div class="mw8 pa4 center">
    <header class>
      <div class="vh-50 flex flex-row items-center justify-end">
        <nav>
          <g-link class="pa2 no-underline f4 fw7 dark-gray black-hover" :to="{ name: 'home' }">home</g-link>
          <g-link
            class="pa2 no-underline f4 fw7 dark-gray black-hover blog"
            :to="{ name: 'blog' }"
          >blog</g-link>
          <g-link
            class="pa2 no-underline f4 fw7 dark-gray black-hover"
            :to="{ name: 'contact' }"
          >contact</g-link>
        </nav>
        <div class="mb3">
          <g-link class="pa2 cursor fw7" :to="{ name: 'home' }">
            <img src="../assets/icon.svg" class="w3">
          </g-link>
        </div>
      </div>
    </header>
    <main>
      <slot/>
    </main>
    <footer class="tc pv4">
      <div class="f6">
        <a
          class="black no-underline hover-blue"
          href="https://github.com/MattOndo"
          target="_blank"
        >Github</a> |
        <a
          class="black no-underline hover-blue"
          href="https://www.instagram.com/matt_ondo/"
          target="_blank"
        >Instagram</a>
      </div>
      <p class="f7 mt3 mb0">&copy; Matt Ondo</p>
    </footer>
  </div>
</template>

<script>
import config from '~/.temp/config.js'

export default {
  data() {
    return {
      pageName: this.$route.name
    }
  }
}
</script>


<style scoped>
</style>