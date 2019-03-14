<template>
  <Layout>
    <header>
      <h1 class="mb1">Matt Ondo</h1>
      <p class="mv0 f5 fw1">Web Developer</p>
      <p class="mt0 f6 fw1">Denver, CO</p>
    </header>

    <section id="experience">
      <header>
        <h2 class="mb1">Experience</h2>
      </header>
      <article>
        <header>
          <h3 class="mb0">Senior Front-End Developer, Intelligent Demand</h3>
          <p class="mt1">February, 2015 - Present</p>
        </header>
        <p>Plays a critical role in the Front-End Development practice at ID and own the conversion of original visual design concepts to bulletproof front-end implementations. I have experience in building, testing and deploying multi-touch, multi-channel marketing campaigns in marketing automation platform software. Additionally, I own the buildout, testing and deployment of interactive content and websites using WordPress and other CMS platforms.</p>
      </article>
      <article>
        <header>
          <h3 class="mb0">Lead Web Developer, Grayson Sky</h3>
          <p class="mt1">May 2014 - Oct 2016</p>
        </header>
        <p>Developed and managed multiple projects. Managed the development team, produced and presented scopes to perspective clients. Assisted in the design of websites and other branding aspects. Used a custom front end framework for rapid development.</p>
      </article>
      <article>
        <header>
          <h3 class="mb0">Freelance Web Developer</h3>
          <p class="mt1">Dec 2010 - May 2014</p>
        </header>
        <p>Designed and developed custom websites for small businesses. Worked with key stakeholders to determine timelines, milestones, and objectives.</p>
      </article>
    </section>

    <section id="education">
      <header>
        <h2 class="mb1">Education</h2>
      </header>
      <article>
        <h3 class="mb0">Clarion University of Pennsylvania</h3>
        <p class="mt1">B.A., Information Systems</p>
        <p>Activities included American Marketing Association</p>
      </article>
    </section>

    <section id="volunteer">
      <header>
        <h2 class="mb1">Volunteer Experience</h2>
      </header>
      <article>
        <h3 class="mb0">Volunteer Firefighter, Sadsburyvill Fire Co. No. 1</h3>
        <p class="mt1">2006-2007</p>
      </article>
    </section>

    <section id="certifications">
      <header>
        <h2 class="mb1">Certifications</h2>
      </header>
      <article>
        <h3 class="mb0">Marketo Certified Expert</h3>
        <span class="mt1 mb0">2015-Present</span>
        <a class="link ml2" href="/documents/marketo-certified-expert.pdf" target="_blank">View ↗️</a>
      </article>
      <article>
        <h3 class="mt1 mb0">ion Interactive Certification</h3>
        <span class="mt1 mb0">2017-Present</span>
        <a class="link ml2" href="/documents/ion-certification.pdf" target="_blank">View ↗️</a>
      </article>
      <article>
        <h3 class="mt1 mb0">ion Interactive Expert</h3>
        <span class="mt1 mb0">2017-Present</span>
        <a class="link ml2" href="/documents/ion-expert-completed.pdf" target="_blank">View ↗️</a>
      </article>
    </section>

    <section id="learnMore">
      <h5 class="tc">
        <a
          class="black no-underline hover-blue"
          href="https://www.linkedin.com/in/mattondo/"
          target="_blank"
        >Learn more about me on LinkedIn</a>
      </h5>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    let currentUrl = `https://mattondo.io${this.$route.fullPath}`
    return {
      title: 'Resume',
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            "Welcome to Matt Ondo's Resume. Matt is a front-end developer and modern marketer. Here you will find Matt's portfolio, recent work, and contact information you will learn about Matt's recent adventures."
        }
      ],
      script: [
        {
          key: 'structuredData',
          type: 'application/ld+json',
          innerHTML: `{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'Resume - Matt Ondo',
          url: '${currentUrl}'
        }`
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
  mounted() {
    document.querySelector('body').classList.remove('darkMode')
    document.querySelector('#darkModeToggle').style.display = 'none'
  }
}
</script>

<style>
section article {
  padding-left: 2rem;
}

@media print {
  a {
    font-weight: bold;
    color: #000;
    text-decoration: none;
  }
  #app > header *,
  #app > footer *,
  #learnMore,
  #certifications a {
    display: none !important;
  }
  body {
    font-size: 14px;
    padding: 0 50px;
    background-repeat: no-repeat;
  }
  @page {
    margin: 0;
  }
}
</style>
