<template>
  <Layout>
    <form
      @submit="handleSubmit"
      @change="handleChange($event)"
      class="measure center"
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <div v-show="isSending">Sending...</div>
      <div>
        <label for="name" class="f6 b db mb1">Name</label>
        <input
          id="name"
          class="input-reset ba b--black-20 pa2 mb3 db w-100"
          type="text"
          aria-describedby="name-desc"
          required
          v-model="contact.name"
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
          v-model="contact.email"
        >
      </div>
      <div>
        <label for="message" class="f6 b db mb1">Message</label>
        <textarea
          id="message"
          class="input-reset ba b--black-20 pa2 mb3 db w-100"
          aria-describedby="message-desc"
          required
          v-model="contact.message"
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
  name: "ContactMatt",
  metaInfo: {
    title: "Contact Matt Ondo",
    meta: [{ name: "description", content: "Contact Matt Ondo" }]
  },
  data() {
    return {
      contact: {
        name: "",
        email: "",
        message: ""
      },

      isSending: false
    };
  },
  methods: {
    /**
     * Handler for submit
     */

    handleSubmit(evt) {
      evt.preventDefault();

      this.isSending = true;

      console.log(this.contact);
    },
    handleChange($event) {
      // this.contact.push({ [$event.target.name]: $event.target.value });
      console.log(this.contact);
    }
  }
};
</script>

<style scoped>
textarea {
  resize: vertical;
}
</style>
