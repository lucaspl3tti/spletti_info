<template>
  <section id="portfolio" class="portfolio">
    <div class="heading heading--portfolio">
      <h2>
        {{ $t('portfolio.heading') }}
        <span class="heading-dot">.</span>
      </h2>
      <p class="subheading">
        {{ $t('portfolio.subheading') }}
      </p>
    </div>

    <Slider :projects="projects" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      projects: [
        {
          id: 1,
          name: 'countryInformationSpa',
          title: this.$t('portfolio.projects.countryInformationSpa.title'),
          description: this.$t(
            'portfolio.projects.countryInformationSpa.description'
          ),
          links: [
            {
              type: 'repo',
              href: 'https://github.com/lucaspl3tti/country-information-page',
            },
            {
              type: 'live',
              href: 'https://jls-country-api-page.netlify.app/',
            },
          ],
          image: {
            src: 'img/country-information-spa_macbook-mockup.png',
            ratio: '4/3',
            alt: 'Image of Country Information SPA',
            paddingBottom: true,
          },
          tags: ['vue.js', 'scss', 'bootstrap 5', 'spa'],
        },
        {
          id: 2,
          name: 'randomActivityApp',
          title: this.$t('portfolio.projects.randomActivityApp.title'),
          description: this.$t(
            'portfolio.projects.randomActivityApp.description'
          ),
          links: [
            {
              type: 'repo',
              href: 'https://github.com/lucaspl3tti/random-activity-webapp',
            },
            {
              type: 'live',
              href: 'https://random-activity-spa.netlify.app/',
            },
          ],
          image: {
            src: 'img/random-activity-spa_iphone13-mockup2.png',
            ratio: '72/115',
            alt: 'Image of Random Activity App',
            paddingBottom: true,
          },
          tags: ['vue.js', 'scss', 'bootstrap 5', 'spa'],
        },
        {
          id: 3,
          name: 'portfolioWebsite',
          title: this.$t('portfolio.projects.portfolioWebsite.title'),
          description: this.$t(
            'portfolio.projects.portfolioWebsite.description'
          ),
          links: [
            {
              type: 'repo',
              href: 'https://github.com/lucaspl3tti/spletti_info',
            },
          ],
          image: {
            src: 'img/portfolio-website_macbook-air-mockup.png',
            ratio: '40/27',
            alt: 'Image of Personal Portfolio Website',
            paddingBottom: true,
          },
          tags: ['vue.js', 'scss', 'bootstrap 5', 'spa', 'ui design'],
        },
        {
          id: 4,
          name: 'photosnapMarketingSite',
          title: this.$t('portfolio.projects.photosnapMarketingSite.title'),
          description: this.$t(
            'portfolio.projects.photosnapMarketingSite.description'
          ),
          links: [
            {
              type: 'repo',
              href: 'https://github.com/lucaspl3tti/photosnap-marketing-site',
            },
            {
              type: 'live',
              href: 'https://photosnap-marketing-jls.netlify.app/',
            },
          ],
          image: {
            src: 'img/photosnap-marketing_macbook-mockup.png',
            ratio: '4/3',
            alt: 'Image of Photosnap Marketing Website',
            paddingBottom: true,
          },
          tags: ['vue.js', 'scss', 'bootstrap 5', 'spa', 'frontend mentor'],
        },
        {
          id: 5,
          name: 'clockApp',
          title: this.$t('portfolio.projects.clockApp.title'),
          description: this.$t('portfolio.projects.clockApp.description'),
          links: [
            {
              type: 'repo',
              href: 'https://github.com/lucaspl3tti/clock-app',
            },
            {
              type: 'live',
              href: 'https://jls-clock-app.netlify.app/',
            },
          ],
          image: {
            src: 'img/clock-app_macbook-mockup.png',
            ratio: '4/3',
            alt: 'Image of Clock App',
            paddingBottom: true,
          },
          tags: ['vue.js', 'scss', 'bootstrap 5', 'spa'],
        },
        {
          id: 6,
          name: 'planetsFactsWebsite',
          title: this.$t('portfolio.projects.planetsFactsWebsite.title'),
          description: this.$t(
            'portfolio.projects.planetsFactsWebsite.description'
          ),
          links: [
            {
              type: 'repo',
              href: 'https://github.com/lucaspl3tti/planet-facts-site',
            },
            {
              type: 'live',
              href: 'https://planet-facts-jls.netlify.app/',
            },
          ],
          image: {
            src: 'img/planets-facts-website_mockups.png',
            ratio: '16/9',
            alt: 'Image of Planet Facts SPA',
            paddingBottom: true,
          },
          tags: ['vue.js', 'scss', 'bootstrap 5', 'spa', 'frontend mentor'],
        },
        {
          id: 7,
          name: 'tipCalculatorApp',
          title: this.$t('portfolio.projects.tipCalculatorApp.title'),
          description: this.$t(
            'portfolio.projects.tipCalculatorApp.description'
          ),
          links: [
            {
              type: 'repo',
              href: 'https://github.com/lucaspl3tti/tip-calculator-app',
            },
            {
              type: 'live',
              href: 'https://tap-calculator-jls.netlify.app/',
            },
          ],
          image: {
            src: 'img/tip-calculator-app_macbook-air-mockup.png',
            ratio: '7/5',
            alt: 'Image of Tip Calculator App',
            paddingBottom: true,
          },
          tags: ['javascript', 'scss', 'gulp', 'frontend mentor'],
        },
        {
          id: 8,
          name: 'pdflibDemoScript',
          title: this.$t('portfolio.projects.pdflibDemoScript.title'),
          description: this.$t(
            'portfolio.projects.pdflibDemoScript.description'
          ),
          links: [
            {
              type: 'repo',
              href: 'https://github.com/lucaspl3tti/pdflib-example-rendering',
            },
            {
              type: 'live',
              href: '/files/ExamplePDF_jls_pdf-rendering.pdf',
              customLinkText: this.$t(
                'portfolio.projects.pdflibDemoScript.pdfLinkText'
              ),
            },
          ],
          image: {
            src: 'img/pdflib-example_macbook-air-mockup.png',
            ratio: '40/27',
            alt: 'Image of PDFlib Rendering Example',
            paddingBottom: true,
          },
          tags: ['pdflib', 'php', 'pdf generator'],
        },
      ],
    }
  },

  updated() {
    this.projects.forEach((project) => {
      project.title = this.$t(`portfolio.projects.${project.name}.title`)
      project.description = this.$t(
        `portfolio.projects.${project.name}.description`
      )
    })
  },
}
</script>

<style lang="scss">
.portfolio {
  margin-top: spacing(12.5);
  padding-top: spacing(12.5);
}
</style>
