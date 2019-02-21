<template>
  <Layout>
    <h1 class="tc pa2 bg-blue white">Contact</h1>
    <form action="#" class="measure center">
      <div>
        <label for="name" class="f6 b db mb1">Name</label>
        <input
          id="name"
          class="input-reset ba b--black-20 pa2 mb3 db w-100"
          type="text"
          aria-describedby="name-desc"
          required
        >
      </div>
      <div>
        <label for="email" class="f6 b db mb1">Email Address</label>
        <input
          id="email"
          class="input-reset ba b--black-20 pa2 mb3 db w-100"
          type="email"
          aria-describedby="email-desc"
          required
        >
      </div>
      <div>
        <label for="message" class="f6 b db mb1">Message</label>
        <textarea
          id="message"
          class="input-reset ba b--black-20 pa2 mb3 db w-100"
          aria-describedby="message-desc"
          required
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          class="button-reset input-reset ba b--black-20 pa2 bg-black white pointer"
        >Send</button>
      </div>
    </form>
  </Layout>
</template>

<script>
export default {
  name: "Contact Matt",
  metaInfo: {
    title: "Contact Matt Ondo",
    meta: [{ name: "description", content: "Contact Matt Ondo" }]
  }
};
</script>

<style scoped>
textarea {
  resize: vertical;
}
</style>
