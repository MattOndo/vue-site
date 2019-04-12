<template>
  <Layout>
    <h1>Matt's Portfolio</h1>
    <div class="bg-light-yellow tc br br1 bw0">
      <p class="black">
        <em>Please excuse me, this is a work in progress!</em>
      </p>
    </div>
    <div class="grid">
      <a href="/portfolio/interactive-email" class="tc link black">
        <DesktopScreen type="image" src="/portfolio-assets/id_2017_interactive_holiday_thumb.png"/>
        <h4>Interactive Invite Email</h4>
      </a>

      <a href="/portfolio/intelligent-demand-website" class="tc link black">
        <DesktopScreen type="image" src="/portfolio-assets/intelligentdemand_landing.png"/>
        <h4>Intelligent Demand</h4>
      </a>

      <a href="/portfolio/interactive-infographic" class="tc link black">
        <DesktopScreen type="image" src="/portfolio-assets/chgh_interactive_infographic.jpg"/>
        <h4>Interactive Infographic</h4>
      </a>

      <a href="/portfolio/service-source-en" class="tc link black">
        <DesktopScreen type="image" src="/portfolio-assets/servicesource_en.jpg"/>
        <h4>Service Source</h4>
      </a>

      <a href="/portfolio/service-source-jp" class="tc link black">
        <DesktopScreen type="image" src="/portfolio-assets/servicesource_jp.jpg"/>
        <h4>Service Source Japan</h4>
      </a>

      <a href="/portfolio/marketo-email-template" class="tc link black">
        <DesktopScreen
          type="image"
          src="/portfolio-assets/id_marketo_email_template_desktop_top.png"
        />
        <h4>Marketo Email Template</h4>
      </a>

      <a href="/portfolio/interactive-story-book" class="tc link black">
        <DesktopScreen type="image" src="/portfolio-assets/id_2018_holiday_lp.jpg"/>
        <h4>Interactive Story Book</h4>
      </a>

      <a href="/portfolio/east-end-salon" class="tc link black">
        <DesktopScreen type="image" src="/portfolio-assets/east_end_homepage.jpg"/>
        <h4>East End Salon</h4>
      </a>

      <a href="/portfolio/marketo-landing-page-template" class="tc link black">
        <DesktopScreen type="image" src="/portfolio-assets/infogix_marketo_event_lp_top.gif"/>
        <h4>Marketo Landing Page Template</h4>
      </a>
    </div>
  </Layout>
</template>

<style scoped>
.grid a {
  transition: all 300ms ease-in-out;
}
.grid a:hover {
  transform: scale(1.1);
}
@media screen and (min-width: 30rem) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: '. .' '. .';
    grid-gap: 1rem;
  }
}
@media screen and (min-width: 60rem) {
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
