<template>
  <Layout>
    <header class="cf">
      <h1 class="mb0">Marketo Landing Page Template</h1>
      <div class="mb3">
        <span class="f7 fw1">Marketo Guided Landing Page Template</span> //
        <span class="f7 fw1">Sr. Front-End Developer</span> //
        <span class="f7 fw1">2016</span>
      </div>
    </header>

    <figure class="ma0">
      <DesktopScreen src="/portfolio-assets/infogix_marketo_event_lp.mp4" type="video"/>
    </figure>

    <div class="w-100 mt3 flex flex-column flex-row-ns justify-between items-center">
      <article class="fw1 lh-copy w-100 w-50-ns">
        <p>Words here</p>
      </article>

      <figure class="ma0 w-100 w-50-ns">
        <DesktopScreen
          src="/portfolio-assets/infogix_marketo_event_lp_mkto_interface.gif"
          type="image"
        />
      </figure>
    </div>

    <div class="self-end fw1 f7">Built with HTML5 // CSS3 // JavaScript // jQuery</div>
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
