import svgLoader from 'vite-svg-loader';

/**
 * .env data
 */
const { env } = process
const siteUrl = env.SITE_URL;
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
      siteUrl,
      showVersionInFooter: false,
      isDev,
      languageSwitchEnabled: false,

      siteName: 'luca-spletti.dev',
      siteDescription:
        'Portfolio Website of Jan-Luca Splettstößer, Frontend Web Developer and UI / UX Designer.', // eslint-disable-line
      language: 'en-US',
      titleSeparator: '|',
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },

    head: {
      htmlAttrs: { lang: 'en-US' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'luca-spletti.dev',
      meta: [
        {
          name: 'description',
          content:
            'Portfolio Website of Jan-Luca Splettstößer, Frontend Web Developer and UI / UX Designer.', // eslint-disable-line
        },
        {
          name: 'keywords',
          content:
            'Jan-Luca Splettstößer, Spletti, Frontend Developer, Frontend Entwickler, UI Designer, Luca Splettstößer', // eslint-disable-line
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
          content: 'luca-spletti.dev',
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'luca-spletti.dev',
        },
        {
          property: 'og:image',
          content: `${siteUrl}/jls_profilepic.jpg`,
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

    rootId: 'jls',
  },

  site: {
    indexable: !isDev,
    url: siteUrl,
    name: 'JLS',
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

  extends: ['nuxt-seo-kit'],
});
