<template>
  <vue-instagram
    token="2269121656.4665d35.c915a5e17ca4454d9897dcec6465fbbf"
    :count="100"
    class="relative flex flex-column flex-row-ns items-center flex-wrap"
  >
    <template slot="feeds" slot-scope="props">
      <div class="w-100 w-33-m w-25-l relative">
        <a :href="props.feed.link" target="_blank">
          <div class="absolute bottom-0 right-0 z-9999 white pa1">♥ {{ props.feed.likes.count }}</div>
          <figure class="ma0 lh0 relative">
            <div class="aspect-ratio aspect-ratio--1x1">
              <div
                :style="{ backgroundImage: 'url(' + props.feed.images.low_resolution.url +')' }"
                class="aspect-ratio--object cover"
              ></div>
            </div>
            <figcaption class="lh-copy f6">{{ props.feed.caption.text }}</figcaption>
          </figure>
        </a>
      </div>
    </template>
    <template slot="error" slot-scope="props">
      <div class="fancy-alert">{{ props.error.error_message }}</div>
    </template>
  </vue-instagram>
</template>

<script>
import VueInstagram from "vue-instagram";

export default {
  name: "InstaFeed",
  components: {
    VueInstagram
  }
};
</script>

<style scoped>
figure {
  overflow: hidden;
}
figcaption {
  opacity: 0;
  background: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999999;
  padding: 1rem;
  color: #ffffff;
  transition: opacity 500ms ease;
}
figure:hover figcaption {
  opacity: 1;
  overflow: auto;
}
</style>