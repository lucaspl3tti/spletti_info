import svgLoader from 'vite-svg-loader';

/**
 * .env data
 */
const { env } = process
// const siteUrl = env.SITE_URL;
const apiBase = env.API_URL
const environment = env.APP_ENV;
const enableDebug = env.ENABLE_DEBUG;

/**
 * Config data
 */
const isDev = environment === 'dev';
const isDebugEnabled = enableDebug === '1';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: isDev,
  },

  debug: isDebugEnabled,

  nitro: {
    prerender: {
      ignore: ['/wp-test'],
    },
  },

  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase,
      showVersionInFooter: false,
      isDev,
      languageSwitchEnabled: false,
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },

    head: {
      htmlAttrs: { lang: 'en-US' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'JLS - Portfolio',
      meta: [
        {
          name: 'description',
          content:
            'Portfolio Website of Jan-Luca Splettstößer, Frontend Web Developer and UI / UX Designer.', // eslint-disable-line
        },
        {
          name: 'msapplication-TileColor',
          content: '#1e1b4b',
        },
        {
          name: 'theme-color',
          content: '#1e1b4b',
        },
        {
          name: 'application-name',
          content: 'spletti.me',
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'spletti.me',
        },
        {
          property: 'og:image',
          content: '/jls_profilepic.jpg',
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
          color: '#1e1b4b',
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "~/node_modules/vuetify/lib/styles/main.sass"; @import "~/assets/scss/abstracts/variables.scss";', // eslint-disable-line
        },
      },
    },

    plugins: [svgLoader()],
  },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@invictus.codes/nuxt-vuetify',
    '@nuxtjs/device',
    '@nuxt/devtools',
    '@nuxtjs/eslint-module',
    // '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-icons',
  ],

  css: ['@mdi/font/css/materialdesignicons.min.css', '~/assets/scss/main.scss'],

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
      },
    },
  },

  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
});
