<template>
  <Layout>
    <form class="center" name="contact" method="POST" data-netlify="true" action="/contact-thanks">
      <h1>Contact Matt</h1>
      <div>
        <label for="name" class="f6 b db mb1">Name</label>
        <input
          id="name"
          name="name"
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
          name="email"
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
          name="message"
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
  name: 'ContactMatt',
  metaInfo: {
    title: 'Contact',
    meta: [
      {
        name: 'description',
        content:
          "Contact Matt Ondo. Matt is a front-end developer and modern marketer. Here you will find Matt's portfolio, recent work, and contact information you will learn about Matt's recent adventures."
      }
    ]
  }
}
</script>

<style scoped>
textarea {
  resize: vertical;
}
</style>
