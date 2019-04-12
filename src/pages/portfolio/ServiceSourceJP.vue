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
        :scroll="true"
        :duration="30"
      />
    </figure>

    <div class="w-100 flex flex-column flex-row-ns justify-between items-center">
      <article class="fw1 lh-copy w-100 w-60-ns">
        <p>ServiceSource was very happy with our work on migrating their English website to Wordpress, shortly after the project was closed they asked us to help with cloning and translating the English site to be used by their team in Japan. We graciously accpeted this project, which was challenging and rewarding. My role was to manage the technical aspects of the project, as well as our contractors. We worked closely with multiple translation companies over the timeline of the project to ensure the most accurate translation possible. Not everything was included when copying over from English to Japenese, as some pages and offerings just didn't apply to the team over in Japan.</p>
        <p>Similar to the English website we completed mearly months prior, the end result is a beautiful website which ServiceSource Japan's team is able to maintain without assistance. Having never developed a website in a language other than English, this was an eye opening experience for me. I genuinely enjoyed our late night meetings with a team accross the world, and am thankful for a glimpse into their culture.</p>
      </article>
      <aside class="w-100 w-33-ns">
        <h4>WordPress Stack</h4>
        <ul class="f6">
          <li>Theme: BeTheme</li>
          <li>Page Builder: Muffin Builder (by BeTheme)</li>
          <li>Custom Post Types for Resources, Leadership, and Guest Authors</li>
          <li>Built on Pantheon Managed Wordpress Hosting</li>
        </ul>
      </aside>
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
  name: 'ServiceSourceJp',
  metaInfo() {
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: 'ServiceSource Japan',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'The ServiceSource tale, part 2: a website translation.'
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
