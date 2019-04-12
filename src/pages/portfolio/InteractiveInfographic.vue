<template>
  <Layout>
    <header class="cf">
      <h1 class="mb0">Interactive Infographic</h1>
      <div class="mb3">
        <span class="f7 fw1">Ion Interactive</span> //
        <span class="f7 fw1">Front-End Developer</span> //
        <span class="f7 fw1">2016</span>
      </div>
    </header>

    <figure class="ma0">
      <DesktopScreen
        src="/portfolio-assets/chgh_interactive_infographic.jpg"
        type="image"
        :scroll="true"
        :duration="30"
      />
    </figure>

    <div class="w-100 flex flex-column flex-row-ns justify-between items-center">
      <article class="fw1 lh-copy w-100">
        <p
          class="cm-col-2"
        >This interactive infographic was but a small part in a very large campaign. In the campaign we created many interactive pieces of content using the platform Ion Interactive. I am particularly proud of this piece. The designer did an excellent job at pushing both my and Ion's abilities. The static screenshot above does not do it justice, there are many entrance animations and three quiz questions to interact with - each writing back to the client's marketing automation platform to help move visitors down the funnel.</p>
      </article>
    </div>
    <div class="self-end fw1 f7">Built with HTML5 // CSS3 // JavaScript // Ion Interactive</div>
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
  name: 'InteractiveInfographic',
  metaInfo() {
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: 'Interactive Infographic',
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            "A beautiful and excellent example of Matt's expertise with interactive content built in Ion Interactive."
        }
      ],
      script: [
        {
          key: 'structuredData',
          type: 'application/ld+json',
          innerHTML: `{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'Interactive Infographic - Project - Matt Ondo',
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
