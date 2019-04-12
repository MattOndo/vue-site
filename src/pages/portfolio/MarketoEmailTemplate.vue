<template>
  <Layout>
    <header class="cf">
      <h1 class="mb0">Marketo Email Template</h1>
      <div class="mb3">
        <span class="f7 fw1">Marketo Email 2.0</span> //
        <span class="f7 fw1">Sr. Front-End Developer</span> //
        <span class="f7 fw1">2017</span>
      </div>
    </header>

    <figure class="ma0">
      <DesktopScreen
        src="/portfolio-assets/id_marketo_email_template_desktop.png"
        type="image"
        :scroll="true"
        :duration="30"
      />
    </figure>

    <div class="w-100 flex flex-column flex-row-ns justify-between items-center">
      <figure class="ma0 nt6-ns ml4-ns w-60 w-30-ns">
        <MobileScreen
          src="/portfolio-assets/id_marketo_email_template_mobile.png"
          type="image"
          :scroll="true"
          :duration="30"
        />
      </figure>
      <article class="fw1 lh-copy w-100 w-60-ns">
        <p>Intelligent Demand was in need of a new email template for many uses including newsletters, followup emails, event emails, lead generation, and lead nurture. In this project I worked collaboritively with a designer to create this email template. It is composed of eleven modules which can be used in any combination while still retaining the design integrity of the email.</p>
        <p>We had a wide range of email clients to support, and a tight timeline. This email was developed using ZURB's Foundation for Email framework (formerly Inky) to speed up the development process and ensure consistent rendering across email clients.</p>
      </article>
    </div>

    <div class="self-end mt3 fw1 f7">Built with HTML5 // CSS3 // Marketo Email 2.0 Syntax</div>
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
  name: 'MarketoEmailTemplate',
  metaInfo() {
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: 'Marketo Email Template',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'The creation of a multi-use Marketo email template.'
        }
      ],
      script: [
        {
          key: 'structuredData',
          type: 'application/ld+json',
          innerHTML: `{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'Marketo Email Template - Project - Matt Ondo',
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
