<template>
  <Layout>
    <header class="cf">
      <h1 class="mb0">Intelligent Demand Website</h1>
      <div class="mb3">
        <span class="f7 fw1">Wordpress</span> //
        <span class="f7 fw1">Sr. Front-End Developer</span> //
        <span class="f7 fw1">2019</span>
      </div>
    </header>

    <figure class="ma0">
      <DesktopScreen
        src="/portfolio-assets/intelligentdemand_homepage.jpg"
        type="image"
        scroll="true"
      />
    </figure>

    <article class="mt3 w-100 flex flex-column flex-row-ns justify-between">
      <div class="w-100 w-60-ns">
        <h3>Overview</h3>
        <p>
          I was tasked with leading the migration of Intelligent Demand's website from a standard LAMP stack into a modern WordPress Managed Hosting service. I worked closely with ID's marketing and executive teams to determine the goals and to set expectations. Throughout the process I coordinated a team of designers, developers, and content editors to keep us on-time, on-budget, and un-blocked.
          There were a number of goals for this project most of which fell into the category of enabling ID's marketing team with the tools needed to maintain website content on their own without the need of developer intervention. We also wanted to reduce the amount of time required to maintain the website - plugin updates, core updates, etc.
        </p>
      </div>

      <div class="w-100 w-33-ns">
        <div class="sticky">
          <h4>WordPress Stack</h4>
          <ul class="f6">
            <li>Theme: WP Page Builder Framework</li>
            <li>Page Builder: Elementor Pro</li>
            <li>Custom Post Types for Newsroom, Team Members, Guest Authors, and more</li>
            <li>Built on Pantheon Managed Wordpress Hosting</li>
          </ul>
        </div>
      </div>
    </article>

    <article class="w-100 flex flex-column flex-row-ns mt3">
      <div class="w-100 w-50-ns">
        <figure class="sticky">
          <img
            src="/portfolio-assets/id_mkto_form_wp_widget.png"
            class="ba b--dark-gray bw2"
            alt="Wordpress Widget"
          >
          <figcaption class="f7 tc">Custom Marketo Form Embed widget for WordPress.</figcaption>
        </figure>
      </div>
      <div class="w-100 w-50-ns">
        <h3>Custom Widget</h3>
        <p>One of the goals for this website was to enable the Marketing team to more effectively make updates to the website, including adding forms. In the past ID would follow a pretty standard process for embedding Marketo forms - create and style the form in Marketo before embedding the form code directly into a HTML block in the CMS. I wanted to make this experience smoother and remove the need to copy/paste code.</p>
        <p>
          The final product is a custom WordPress widget with fields allowing the user to identify which Marketo form to include and to define how the form should appear. Dropdowns allow the user to change the look of the form without editing CSS on the website or in Marketo. This also ensures form styles are consistant across the site. Also included in this widget is Sanford Whiteman's
          <a
            href="https://blog.teknkl.com/pre-fill-any-site-any-form/"
            target="_blank"
          >Simple DTO</a> solution which pre-fills form fields with known visitor data from Marketo.
        </p>
      </div>
    </article>

    <article>
      <h3>Results</h3>
      <p>
        At the beginning of the project I defined a few personal KPIs including decreasing page load time, decreasing time spent maintaining the site (i.e. plugin/core updates), reduce the amount of developer involvement for content updates, and to enable the website with modern interactive features for future use.
        <br>
        <br>So how did it turn out?
      </p>
      <div class="flex flex-column flex-row-ns justify-around">
        <div>
          <h5>Before Migration</h5>
          <ul>
            <li>Page Load Time: 4.17 seconds on Average</li>
            <li>Page Size: 7.3 MB on Average</li>
            <li>Maintanence Time: 4-6hrs/mo.</li>
          </ul>
        </div>
        <div>
          <h5>After Migration</h5>
          <ul>
            <li>Page Load Time: 1.78 seconds on Average</li>
            <li>Page Size: 3.2 MB on Average</li>
            <li>Maintanence Time: 1-2hrs/mo.</li>
          </ul>
        </div>
      </div>
      <p>One of the softer goals, enabling our marketing team to make content updates, was something not measured by numbers but instead measured by reduced asks and shoulder tapping. ID's Marketing, Sales, and Business Development team are now fully capable of managing the content on ID's website without the need to ask a developer for help.</p>
    </article>

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
  name: 'IntelligentDemandWebsite',
  metaInfo() {
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: 'Intelligent Demand Website',
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            "Learn about Matt's involvement in the migration of Intelligent Demand's website migration."
        }
      ],
      script: [
        {
          key: 'structuredData',
          type: 'application/ld+json',
          innerHTML: `{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'Intelligent Demand Website - Project - Matt Ondo',
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
