export default defineNuxtRouteMiddleware(() => {
  if (!import.meta.client) {
    return;
  }

  const instance = window.__NUXT__;

  if (!instance) {
    console.error('No nuxt instance found!');
    return;
  }

  const { isDev } = instance.config.public;

  if (!isDev) {
    console.error('This page is only available in development mode!');
    abortNavigation();
    return navigateTo('/');
  }
});
