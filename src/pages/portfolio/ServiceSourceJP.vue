<template>
  <Layout>
    <header class="cf">
      <h1 class="mb0">ServiceSource Japan</h1>
      <div class="mb3">
        <span class="f7 fw1">Wordpress Website Translation</span> //
        <span class="f7 fw1">Sr. Front-End Developer</span> //
        <span class="f7 fw1">2018</span>
      </div>
    </header>

    <figure class="ma0">
      <DesktopScreen
        src="/portfolio-assets/servicesource_jp_homepage.jpg"
        type="image"
        scroll="true"
      />
    </figure>

    <div class="w-100 flex flex-column flex-row-ns justify-between items-center">
      <article class="fw1 lh-copy w-100">
        <p class="cm-col-2">Words here</p>
      </article>
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
  name: 'ServiceSourceJp',
  metaInfo() {
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: 'ServiceSource Japan',
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
          name: 'ServiceSource Japan - Project - Matt Ondo',
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
