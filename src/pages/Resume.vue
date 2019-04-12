<template>
  <Layout>
    <header class="cf w-100">
      <h1 class="mb1">Matt Ondo</h1>
      <div class="w-50-ns fl">
        <p class="mv0 f5 fw1">Sr. Front-end Web Developer</p>
        <p class="mt0 f6 fw1">Denver, CO</p>
      </div>
      <div class="w-50-ns fr">
        <p class="mv0 tr">
          <a href="tel:+7209985398" class="no-underline black fw1 f6">720-998-5398</a>
        </p>
        <p class="mv0 tr">
          <a
            href="mailto:yours.truly@mattondo.com"
            class="no-underline black fw1 f6"
          >yours.truly@mattondo.com</a>
        </p>
      </div>
    </header>

    <section id="experience">
      <header>
        <h2 class="mb1">Experience</h2>
      </header>
      <article>
        <header>
          <h3 class="mb0">
            Senior Front-End Developer, Intelligent Demand
            <span
              class="fw1 f7 fr"
            >June, 2018 - Present</span>
          </h3>
          <h3 class="mb0 mt0">
            Demand Generation Web Developer, Intelligent Demand
            <span
              class="fw1 f7 fr"
            >February, 2015 - June, 2018</span>
          </h3>
        </header>
        <p>Plays a critical role in the Front-End Development practice at ID and own the conversion of original visual design concepts to bulletproof front-end implementations. I have experience in building, testing and deploying multi-touch, multi-channel marketing campaigns in marketing automation platform software. Additionally, I own the buildout, testing and deployment of interactive content and websites using WordPress and other CMS platforms.</p>
      </article>
      <article>
        <header>
          <h3 class="mb0">
            Lead Web Developer, Grayson Sky
            <span class="fw1 f7 fr">May 2014 - Oct 2016</span>
          </h3>
        </header>
        <p>Developed and managed multiple projects. Managed the development team, produced and presented scopes to perspective clients. Assisted in the design of websites and other branding aspects. Used a custom front end framework for rapid development.</p>
      </article>
      <article>
        <header>
          <h3 class="mb0">
            Freelance Web Developer
            <span class="fw1 f7 fr">Dec 2010 - May 2014</span>
          </h3>
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
        >Learn more about me on LinkedIn ↗️</a>
        <span
          class="dn dp fw1 mt4"
        >View my certifications, and learn more about me at www.mattondo.io</span>
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
  body:after {
    opacity: 0.05;
  }
  a {
    text-decoration: none;
  }
  p {
    margin: 12px 0;
  }
  h1 {
    margin-top: 30px;
  }
  #app > header,
  #app > footer,
  #learnMore a,
  #certifications a {
    display: none !important;
  }
  body {
    font-size: 14px;
    padding: 0 50px;
    background-repeat: no-repeat;
  }
  .dp {
    display: block;
  }
  @page {
    margin: 0;
  }
}
</style>
