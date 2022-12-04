import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: 'https://backend.spletti.info/wp-json',
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'spletti.info',
      meta: [
        {
          name: 'description',
          content: 'Personal portfolio of Jan-Luca Splettstößer',
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

  modules: ['bootstrap-vue-3/nuxt', 'nuxt-icon'],

  css: ['~/assets/scss/main.scss'],
})
