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
  ssr: false,

  devtools: {
    enabled: isDev,
  },

  debug: isDebugEnabled,

  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase,
      showVersionInFooter: false,
      isDev,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en-US' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Jan-Luca Splettstößer - Portfolio',
      meta: [
        {
          name: 'description',
          content:
            'Portfolio Website of Jan-Luca Splettstößer, Frontend Web Developer and UI / UX Designer.', // eslint-disable-line
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
    '@vueuse/nuxt',
    '@nuxtjs/device',
    'nuxt-icon',
    '@nuxt/ui',
  ],

  css: ['@mdi/font/css/materialdesignicons.min.css', '~/assets/scss/main.scss'],

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
      },
    },
  },

  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
});
