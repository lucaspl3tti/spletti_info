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
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'JLS Portfolio',
      meta: [
        {
          name: 'description',
          content: 'Portfolio Website of Jan-Luca Splettstößer, Frontend Web Developer and UI / UX Designer.',
        },
        {
          name: 'msapplication-TileColor',
          content: '#27187e',
        },
        {
          name: 'theme-color',
          content: '#27187e',
        },
        {
          name: 'application-name',
          content: 'spletti.info',
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'spletti.info',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: '#27187e',
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
