<template>
  <div>
    <Header/>
    <transition name="fade" appear>
      <main class="mw7 pa3 center">
        <slot/>
      </main>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Header from '../partials/Header'
import Footer from '../partials/Footer'

export default {
  components: {
    Header: Header,
    Footer: Footer
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