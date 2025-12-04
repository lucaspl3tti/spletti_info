export default defineNuxtPlugin(() => {
  return {
    provide: {
      trans: $trans,
    },
  };
});
