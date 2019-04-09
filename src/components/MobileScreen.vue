<template>
  <div class="mobile-wrap w-100">
    <div class="mobile-screen bg-dark-gray" style="border-radius: 1.5rem;">
      <img :src="src" class="ba bw2 b--dark-gray" style="border-radius: 1.5rem;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileScreen',
  props: ['src']
}
</script>

<style scoped>
</style>