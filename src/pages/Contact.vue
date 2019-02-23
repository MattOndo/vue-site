<template>
  <Layout>
    <form class="center" name="contact" method="POST" data-netlify="true" action="/contact-thanks">
      <h1>Contact Matt</h1>
      <div>
        <label for="name" class="f6 b db mb1">Name</label>
        <input
          id="name"
          name="name"
          class="input-reset bw0 br1 pa2 mb3 db w-100"
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
          class="input-reset bw0 br1 pa2 mb3 db w-100"
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
          class="input-reset bw0 br1 pa2 mb3 db w-100"
          aria-describedby="message-desc"
          required
        ></textarea>
      </div>
      <div>
        <button type="submit" class="button-reset input-reset bw0 br1 pa2 white pointer">Send</button>
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
        key: 'description',
        name: 'description',
        content:
          "Contact Matt Ondo. Matt is a front-end developer and modern marketer. Here you will find Matt's portfolio, recent work, and contact information you will learn about Matt's recent adventures."
      }
    ],
    script: [
      {
        key: 'structuredData',
        type: 'application/ld+json',
        innerHTML: `{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'Contact - Matt Ondo',
          url: '${window.location}'
        }`
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  }
}
</script>

<style scoped>
textarea {
  resize: vertical;
}
</style>
