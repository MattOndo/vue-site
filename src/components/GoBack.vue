<template>
  <button @click="goBack" class="input-reset button-reset pointer grow mt2">&#x2190; Go Back</button>
</template>

<script>
export default {
  name: 'GoBack',
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
button {
  color: inherit;
  background: none;
  border: none;
  outline: none;
}
</style>
