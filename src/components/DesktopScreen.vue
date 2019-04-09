<template>
  <div class="desktop-wrap w-100 bg-dark-gray ba bw1 b--dark-gray br--top br3">
    <div class="desktop-topbar h1 flex flex-row items-center">
      <span
        class="dib bg-light-gray ba bw1 b--light-gray br br-100 ml1"
        style="height:12px;width:12px;"
      ></span>
      <span
        class="dib bg-light-gray ba bw1 b--light-gray br br-100 mh1"
        style="height:12px;width:12px;"
      ></span>
      <span
        class="dib bg-light-gray ba bw1 b--light-gray br br-100"
        style="height:12px;width:12px;"
      ></span>
    </div>
    <div class="desktop-screen">
      <img v-if="type == 'image'" :src="src" alt>
      <div v-else-if="type == 'video'" class>
        <video class="w-100" controls>
          <source :src="src" type="video/mp4">Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesktopScreen',
  props: ['src', 'type']
}
</script>

<style scoped>
</style>