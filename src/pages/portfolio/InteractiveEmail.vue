<template>
  <Layout>
    <header class="cf">
      <h1 class="mb0">Interactive Email</h1>
      <div class="mb3">
        <span class="f7 fw1">Email Development</span> //
        <span class="f7 fw1">Developer</span> //
        <span class="f7 fw1">2017</span>
      </div>
    </header>

    <div class="flex flex-column flex-row-ns justify-around">
      <figure class="ma0 w-100 w-60-ns">
        <DesktopScreen src="/portfolio-assets/id_2017_holiday_card_recording.mp4" type="video"/>
      </figure>
      <div class="w-100 w-30-ns lh-title">
        <h5 class="ma0">Specifications</h5>
        <ul>
          <li>HTML &amp; CSS</li>
          <li>Marketo Email 2.0</li>
          <li>Hover / Click interaction</li>
          <li>Interactivity supported in iOS Mail, Apple Mail, Gmail</li>
          <li>Graceful fallback for unsupported email clients</li>
        </ul>
      </div>
    </div>

    <div class="flex flex-column flex-row-ns">
      <article class="fw1 w-100 w-60-ns lh-copy measure">
        <p>Intelligent Demand had just moved to a new building, to celebrate we invited our friends to come check out our new digs and help us decarate the office with hilariously gaudy nic-nacs. To promote the new building, our party, and our marketing chops we designed and developed this interactive email invitation.</p>
        <p>The email was built in Marketo, the interactive portion was built as a Marketo Email 2.0 Module. This allowed us to utlize our existing email template, giving us more time to focus on the interactive portion. Our goals were simple, create something badass, and get as many RSVPs as possible.</p>
        <p>For more progressive email clients such as iOS and Apple Mail, the email utilizes four checkboxes to allow the viewer to open or close each window when clicked. In Gmail and other (what I call "semi-progressive") clients, hovering over a window "opens" it. In all other email clients such as various versions of Outlook the animated GIF is the only thing that shows, clicking on the gif sends the user to the web-based version so they can enjoy the interactivity.</p>
        <p>In an effort to make RSVP'ing a breeze, we put RSVP Yes and No buttons right there in the email. Don't worry, this can always be changed later on.</p>
        <h4 class="lh-title mb0">Results</h4>
        <p class="mt1">
          In the end the email had an open rate of 60.9%, a 24.5% click rate, and 13% of the recipients RSVP'd yes. The party was a blast, and we proved to ourselves
          <em>this is possible</em>.
        </p>
      </article>
      <figure class="ma0 w-90 center w-20-ns z-999">
        <MobileScreen src="/portfolio-assets/id_2017_interactive_holiday_mobile.png"/>
      </figure>
    </div>
    <div class="mt3">
      <BackButton/>
    </div>
  </Layout>
</template>

<script>
import GoBack from '../../components/GoBack'
import DesktopScreen from '../../components/DesktopScreen'
import MobileScreen from '../../components/MobileScreen'

export default {
  metaInfo() {
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: 'Interactive Email',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: ''
        }
      ],
      script: [
        {
          key: 'structuredData',
          type: 'application/ld+json',
          innerHTML: `{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'Interactive Email - Project - Matt Ondo',
          url: '${currentUrl}'
        }`
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
  components: {
    BackButton: GoBack,
    DesktopScreen: DesktopScreen,
    MobileScreen: MobileScreen
  }
}
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 1fr;
    grid-template-areas: '. .' '. .' '. .';
    grid-gap: 1rem;
  }
}
</style>
