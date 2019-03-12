<template>
  <footer class="mw7 pa3 center tc pv4 mt4">
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
    <p class="f7 mt3 mb0">&copy; {{year}} Matt Ondo</p>
  </footer>
</template>

<script>
import Icon from '../components/Icon'

export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  },
  components: {
    Icon: Icon
  }
}
</script>