import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: 'https://backend.spletti.info/wp-json',
      siteUrl: 'https://spletti.info/',
      siteName: 'JLS Portfolio',
      siteDescription: 'Portfolio Website of Jan-Luca Splettstößer, Frontend Web Developer and UI / UX Designer.',
      language: 'en-US',
      titleSeparator: '·',
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'JLS Portfolio',
      meta: [
        {
          name: 'description',
          content: 'Portfolio Website of Jan-Luca Splettstößer, Frontend Web Developer and UI / UX Designer.',
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/abstracts/variables.scss";',
        },
      },
    },

    plugins: [svgLoader()],
  },

  modules: ['bootstrap-vue-3/nuxt', 'nuxt-icon', '@nuxt/image-edge'],

  css: ['~/assets/scss/main.scss'],

  extends: [
    'nuxt-seo-kit'
  ]
})
