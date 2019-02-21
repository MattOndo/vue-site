<template>
  <div class="mw7 pa4 center">
    <header class="tc">
      <div class="db">
        <g-link class="pa2 link fw7" :to="{ name: 'home' }">
          <img src="../assets/icon.svg" class="w3 mb4">
        </g-link>
      </div>
      <g-link class="pa2 link f4 fw7 dark-gray black-hover" :to="{ name: 'home' }">home</g-link>
      <g-link class="pa2 link f4 fw7 dark-gray black-hover" :to="{ name: 'blog' }">blog</g-link>
      <g-link class="pa2 link f4 fw7 dark-gray black-hover" :to="{ name: 'contact' }">contact</g-link>
    </header>
    <div class>
      <slot/>
    </div>
    <footer class="tc">
      <p>&copy; Matt Ondo</p>
    </footer>
  </div>
</template>

<script>
import config from "~/.temp/config.js";

export default {
  data() {
    return {
      pageName: this.$route.name === "home" ? "Matt Ondo" : this.$route.name
    };
  },
  computed: {
    titleTag() {
      return this.$route.name === "home" ? "h1" : "h6";
    },
    config() {
      return config;
    }
  }
};
</script>


<style>
</style>
