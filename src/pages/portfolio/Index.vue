<template>
  <Layout>
    <h1>Matt's Portfolio</h1>
    <div class="grid">
      <a href="/portfolio/interactive-email" class="tc link">
        <DesktopScreen type="image" src="/portfolio-assets/id_2017_interactive_holiday_thumb.png"/>
        <h4>Interactive Invite Email</h4>
      </a>

      <a href="#" class="tc link black">
        <DesktopScreen type="image" src="/portfolio-assets/intelligentdemand_landing.png"/>
        <h4>Intelligent Demand Website</h4>
      </a>

      <a href="#" class="tc link black">
        <DesktopScreen type="image" src/>
        <h4>Interactive Infographic</h4>
      </a>

      <a href="#" class="tc link black">
        <DesktopScreen type="image" src/>
        <h4>Service Source Website</h4>
      </a>

      <a href="#" class="tc link black">
        <DesktopScreen type="image" src/>
        <h4>Service Source Japanese Website</h4>
      </a>

      <a href="#" class="tc link black">
        <DesktopScreen type="image" src/>
        <h4>Interactive Assessment</h4>
      </a>

      <a href="#" class="tc link black">
        <DesktopScreen type="image" src/>
        <h4>Marketo Template Suite</h4>
      </a>

      <a href="#" class="tc link black">
        <DesktopScreen type="image" src="/portfolio-assets/id_2018_holiday_lp.png"/>
        <h4>Interactive Story Book</h4>
      </a>

      <a href="/portfolio/east-end-salon" class="tc link black">
        <DesktopScreen type="image" src="/portfolio-assets/east_end_homepage.png"/>
        <h4>East End Salon</h4>
      </a>
    </div>
  </Layout>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: '. . .' '. . .';
    grid-gap: 1rem;
  }
}
</style>

<script>
import DesktopScreen from '../../components/DesktopScreen'

export default {
  metaInfo() {
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: 'Portfolio',
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            "Welcome to Matt Ondo's Portfolio. Matt is a front-end developer and modern marketer. Here you will find Matt's portfolio, recent work, and contact information you will learn about Matt's recent adventures."
        }
      ],
      script: [
        {
          key: 'structuredData',
          type: 'application/ld+json',
          innerHTML: `{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'Portfolio - Matt Ondo',
          url: '${currentUrl}'
        }`
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
  components: {
    DesktopScreen: DesktopScreen
  }
}
</script>
