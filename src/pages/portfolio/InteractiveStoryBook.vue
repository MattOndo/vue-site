<template>
  <Layout>
    <header class="cf">
      <h1 class="mb0">Interactive Story Book</h1>
      <div class="mb3">
        <span class="f7 fw1">Marketo Landing Page</span> //
        <span class="f7 fw1">Sr. Front-End Developer</span> //
        <span class="f7 fw1">2018</span>
      </div>
    </header>

    <figure class="ma0">
      <DesktopScreen src="/portfolio-assets/the-factory.mp4" type="video"/>
    </figure>

    <div class="w-100 mt3">
      <article class="fw1 lh-copy w-100 cf">
        <p
          class="w-50-ns fl-ns pr2-ns"
        >The holidays were approaching quickly. Each year the Intelligent Demand team uses the Holiday Card project to push themeselves and to try new things. In 2018 we wanted to tell a story, literally. Throughout the project I worked side-by-side with our creative team to design and develop a story about a cookie factory. We had help from partners, customers, and fellow ID employees to provide the reader with a selection of narrators.</p>
        <p class="w-50-ns fl-ns pl2-ns">
          The end result is something we are most proud of. A truly magical tale, and a great way to wish our partners, customers, and friends the happiest of holidays. The video above is a sneak peak into the story, I encourage you to
          <a
            href="https://go.intelligentdemand.com/the-factory"
            target="_blank"
          >check it out</a> for yourself.
        </p>
      </article>
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
  name: 'InteractiveStoryBook',
  metaInfo() {
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: 'Interactive Story Book',
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            'A story about a cookie factory, a designer, and a developer.'
        }
      ],
      script: [
        {
          key: 'structuredData',
          type: 'application/ld+json',
          innerHTML: `{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'Interactive Story Book - Project - Matt Ondo',
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
