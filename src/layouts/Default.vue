<template>
  <div class="mw8 pa4 center">
    <header>
      <button
        id="darkModeToggle"
        @click="toggleDarkMode"
        v-text="`${darkModeToggleText}`"
        class="pointer absolute fixed-l right-0 top-0 pa4 f6 input-reset button-reset bg-transparent bw0 outline-0 black-50"
      />
      <div class="vh-50 flex flex-column flex-row-ns items-center justify-center justify-end-ns">
        <nav class="order-1 order-0-ns">
          <g-link
            class="pa2 no-underline f5 f4-l fw3 ttl dark-gray black-hover dib"
            :to="{ name: 'home' }"
          >home</g-link>
          <g-link
            class="pa2 no-underline f5 f4-l fw3 ttl dark-gray black-hover dib blog"
            :to="{ name: 'blog' }"
          >blog</g-link>
          <g-link
            class="pa2 no-underline f5 f4-l fw3 ttl dark-gray black-hover dib sandbox"
            :to="{ name: 'sandbox' }"
          >sandbox</g-link>
          <g-link
            class="pa2 no-underline f5 f4-l fw3 ttl dark-gray black-hover dib"
            :to="{ name: 'contact' }"
          >contact</g-link>
        </nav>
        <div class="order-0 order-1-ns db dib-ns">
          <g-link class="pa2 cursor fw7" :to="{ name: 'home' }">
            <Icon size="md"/>
          </g-link>
        </div>
      </div>
    </header>
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>
    <footer class="tc pv4 mt4">
      <div class="f7">
        <a
          class="black no-underline hover-blue"
          href="https://github.com/MattOndo"
          target="_blank"
        >Github</a> |
        <a
          class="black no-underline hover-blue"
          href="https://www.instagram.com/matt_ondo/"
          target="_blank"
        >Instagram</a> |
        <a
          class="black no-underline hover-blue"
          href="https://www.linkedin.com/in/mattondo/"
          target="_blank"
        >LinkedIn</a>
      </div>
      <div class="flex items-center justify-center f7 mt3 w-100">
        <Icon size="sm"/>
        <span>&nbsp;&nbsp;is powered by&nbsp;&nbsp;</span>
        <a href="https://gridsome.org/" target="_blank">
          <g-image src="../assets/gridsome.png" class="dib" style="width:1.6rem;"/>
        </a>
      </div>
      <p class="f7 mt3 mb0">&copy; Matt Ondo</p>
    </footer>
  </div>
</template>

<script>
import config from '~/.temp/config.js'
import Icon from '../components/Icon'

export default {
  data() {
    return {
      pageName: this.$route.name,
      isDarkMode: false,
      darkModeToggleText: 'Dark Mode'
    }
  },
  methods: {
    toggleDarkMode: function() {
      this.isDarkMode = !this.isDarkMode
      if (this.isDarkMode) {
        this.darkModeToggleText = 'Light Mode'
        document.querySelector('body').classList.add('darkMode')
      } else if (!this.isDarkMode) {
        this.darkModeToggleText = 'Dark Mode'
        document.querySelector('body').removeAttribute('class')
      }
    }
  },
  components: {
    Icon: Icon
  },
  mounted() {
    if (document.querySelector('body').classList.contains('darkMode')) {
      this.isDarkMode = true
      this.darkModeToggleText = 'Light Mode'
      document.querySelector('body').classList.add('darkMode')
    } else if (!this.isDarkMode) {
      this.isDarkMode = false
      this.darkModeToggleText = 'Dark Mode'
      document.querySelector('body').removeAttribute('class')
    }
  }
}
</script>


<style scoped>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>