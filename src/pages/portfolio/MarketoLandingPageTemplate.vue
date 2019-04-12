<template>
  <Layout>
    <header class="cf">
      <h1 class="mb0">Marketo Landing Page Template</h1>
      <div class="mb3">
        <span class="f7 fw1">Marketo Guided Landing Page Template</span> //
        <span class="f7 fw1">Sr. Front-End Developer</span> //
        <span class="f7 fw1">2018</span>
      </div>
    </header>

    <figure class="ma0">
      <DesktopScreen src="/portfolio-assets/infogix_marketo_event_lp.mp4" type="video"/>
    </figure>

    <div class="w-100 mt3 flex flex-column flex-row-ns justify-between items-center">
      <article class="fw1 lh-copy w-100 w-50-ns">
        <p>In this project I was given the opporunity to put my design skills to work. Our client, Infogix, had re-branded and was in need of an entirely new suite of Marketo templates. Here we have the Event Registration Landing Page Template which I designed and developed.</p>
        <p>The goals were straight-forward, to provide our client with a beautiful Marketo template in their new brand, and for the template to be flexible enough to handle multiple speakers, locations, and topics. Using Marketo's Guided Landing Page syntax, I created a smooth user experience for the Marketo user. In the end our client was very happy with what we provided, and I was proud to have been given the privelege to utilize my full skillset.</p>
      </article>

      <figure class="ma0 w-100 w-50-ns">
        <DesktopScreen
          src="/portfolio-assets/infogix_marketo_event_lp_mkto_interface.gif"
          type="image"
          :scroll="false"
        />
      </figure>
    </div>

    <div
      class="self-end fw1 f7"
    >Built with HTML5 // CSS3 // Javascript // Marketo Guided Landing Page Syntax</div>
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
  name: 'MarketoLandingPageTemplate',
  metaInfo() {
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: 'Marketo Landing Page Template',
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            "A showcase of Matt's full skillset in the form of a Marketo Landing Page template."
        }
      ],
      script: [
        {
          key: 'structuredData',
          type: 'application/ld+json',
          innerHTML: `{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'Marketo Landing Page Template - Project - Matt Ondo',
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
</style>
