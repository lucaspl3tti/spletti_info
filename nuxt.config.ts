import { resolve } from 'path';

/**
 * .env data
 */
const { env } = process;
const siteUrl = env.SITE_URL;
const siteTitle = env.SITE_TITLE;
const backendUrl = env.BACKEND_URL;
const apiUrl = env.API_URL;
const defaultSiteLanguage = env.DEFAULT_SITE_LANG;
const appVersion = env.APP_VERSION;
const environment = env.APP_ENV;
const enableDebug = env.ENABLE_DEBUG;
const devServerPort = env.APP_DEV_SERVER_PORT;
const enableMultiLanguage = env.ENABLE_MULTI_LANGUAGE;
const enableAppLoader = env.ENABLE_APP_LOADER;

/**
 * Config data
 */
const isDev = environment === 'dev';
const isDebugEnabled = enableDebug === '1';
const isLanguageSwitchEnabled = enableMultiLanguage === '1';
const isAppLoaderEnabled = enableAppLoader === '1';

/**
 * Define default variables
 */
const siteDescription = 'Portfolio Website of Jan-Luca Splettstößer, Frontend Web Developer and UI / UX Designer.'; // eslint-disable-line max-len

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: isDev },
  debug: isDebugEnabled,

  devServer: {
    port: Number(devServerPort) || 3000,
  },

  alias: {
    '~': resolve(__dirname, './'),
    '@helper': resolve(__dirname, './app/helpers/helper'),
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "sass:map"; @use "sass:color"; @use "sass:meta"; @use "sass:list"; @use "sass:math"; @import "@/assets/scss/abstracts/variables.scss";', // eslint-disable-line max-len
          quietDeps: true,
          silenceDeprecations: [
            'color-functions',
            'global-builtin',
            'import',
            // 'mixed-decls',
            'legacy-js-api',
          ],
        },
      },
    },

    server: {
      watch: {
        ignored: [
          '**/public/**',
          '**/static/**',
          '**/.git/**',
        ],
      },
    },
  },

  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      apiUrl,
      backendUrl,
      siteUrl,
      siteTitle,
      logoText: 'Jan-Luca Splettstößer',
      logoTextMobile: 'JLS',
      appVersion,
      showVersionInFooter: isDev,
      isDev,
      languageSwitchEnabled: isLanguageSwitchEnabled,
      useAppLoader: isAppLoaderEnabled,
      appLoaderSpeed: 1000,

      siteName: siteTitle,
      siteDescription: siteDescription,
      language: defaultSiteLanguage,
      titleSeparator: '|',
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },

    head: {
      htmlAttrs: { lang: defaultSiteLanguage },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: siteTitle,
      meta: [
        {
          name: 'description',
          content: siteDescription,
        },
        {
          name: 'keywords',
          content: 'Jan-Luca Splettstößer, Spletti, Frontend Developer, Frontend Entwickler, UI Designer, Luca Splettstößer', // eslint-disable-line max-len
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
          content: siteTitle,
        },
        {
          name: 'apple-mobile-web-app-title',
          content: siteTitle,
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

  css: ['bootstrap/dist/css/bootstrap.min.css', '@/assets/scss/main.scss'],

  modules: [
    '@bootstrap-vue-next/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/device',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxtjs/seo',
    '@nuxtjs/stylelint-module',
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] } ],
    '@vueuse/nuxt',
    'nuxt-icons',
    'nuxt-particles',
    'nuxt-typed-router',
    'pinia-plugin-persistedstate/nuxt',
  ],

  device: {},

  eslint: {},

  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'de', language: 'de-DE' },
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
  },

  particles: {
    mode: 'full', // 'full' | 'slim' | 'basic' | 'custom'
    lazy: true,
  },

  pinia: {
    storesDirs: ['@/stores/**'],
  },

  site: {
    indexable: !isDev,
    url: siteUrl,
    name: 'JLS',
  },
});
