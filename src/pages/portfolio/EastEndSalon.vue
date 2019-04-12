<template>
  <Layout>
    <header class="cf">
      <h1 class="mb0">East End Salon</h1>
      <div class="mb3">
        <span class="f7 fw1">Single-Page Brochure Site</span> //
        <span class="f7 fw1">Lead Developer</span> //
        <span class="f7 fw1">2014</span>
      </div>
    </header>

    <figure class="ma0">
      <DesktopScreen src="/portfolio-assets/east_end_homepage.jpg" type="image"/>
    </figure>

    <div class="w-100 flex flex-column flex-row-ns justify-between items-center">
      <article class="fw1 lh-copy w-100 w-60-ns">
        <p>The East End Salon website project was only a small part in a total re-branding effort. Our team consisted of designers, copywriters, media strategists, and my small team of developers. The objectives of the project focused on a brand refresh, increased web and social presense, as well as a change in their focused audience.</p>
        <p>The website had very few requirements, simply to act as a static brochure site for the small East End Salon located in Old City, Philadelphia. They also wanted to promote their First Friday event, Snippet &amp; Frame.</p>
      </article>

      <figure class="ma0 nt6-ns mr4-ns w-60 w-30-ns">
        <MobileScreen
          src="/portfolio-assets/east_end_homepage_mobile.jpg"
          type="image"
          :scroll="false"
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
  name: 'EastEndSalon',
  metaInfo() {
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: 'East End Salon',
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            'Aboput the East End Salon website project, and my involvment.'
        }
      ],
      script: [
        {
          key: 'structuredData',
          type: 'application/ld+json',
          innerHTML: `{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'East End Salon - Project - Matt Ondo',
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
