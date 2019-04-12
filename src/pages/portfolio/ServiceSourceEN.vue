<template>
  <Layout>
    <header class="cf">
      <h1 class="mb0">ServiceSource Website</h1>
      <div class="mb3">
        <span class="f7 fw1">Wordpress Website Migration</span> //
        <span class="f7 fw1">Front-End Developer</span> //
        <span class="f7 fw1">2018</span>
      </div>
    </header>

    <figure class="ma0">
      <DesktopScreen
        src="/portfolio-assets/servicesource_en_homepage.png"
        type="image"
        :scroll="true"
        :duration="30"
      />
    </figure>

    <div class="w-100 flex flex-column flex-row-ns justify-between items-center">
      <article class="fw1 lh-copy w-100 w-60-ns">
        <p>ServiceSource was in the same boat many companies are in, they had a website which their marketing team could not easily maintain. The Drupal infrasture the site was built on had grown bloated, and was not very forgiving. ServiceSource asked us to help solve these pain points. Ultimately we migrated the website over to WordPress. In this project I worked closely with a partnering agency, resolving issues as they arose and assisting with content migration, themeing, and project management.</p>
        <p>The end result is a beautiful website which ServiceSource's marketing team is able to maintain without assistance. I enjoy returning to the site to see their latest updates, each time proud to have been a part of such an enabling project.</p>
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
  name: 'ServiceSourceEn',
  metaInfo() {
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: 'ServiceSource',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'The ServiceSource tale, part 1: a website migration.'
        }
      ],
      script: [
        {
          key: 'structuredData',
          type: 'application/ld+json',
          innerHTML: `{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'ServiceSource - Project - Matt Ondo',
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
