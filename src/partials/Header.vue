<template>
  <header class="mw7 pa3 center">
    <DarkMode/>
    <div class="vh-50 flex flex-column flex-row-ns items-center justify-center justify-end-ns">
      <nav class="order-1 order-0-ns tc">
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
        <!-- <g-link
          class="pa2 no-underline f5 f4-l fw3 ttl dark-gray black-hover dib portfolio"
          :to="{ name: 'portfolio' }"
        >portfolio</g-link> -->
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
</template>

<script>
import Icon from '../components/Icon'
import DarkMode from '../components/DarkMode'

export default {
  name: 'Header',
  components: {
    Icon: Icon,
    DarkMode: DarkMode
  }
}
</script>