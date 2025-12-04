<template>
  <main :class="['spletti', 'spletti--home', langClass]">
    <clb-container>
      <content-introduction />
      <content-portfolio />
    </clb-container>

    <content-qualifications />

    <clb-container>
      <!-- eslint-disable vue/attribute-hyphenation -->
      <clb-slider
        :items="sliderItems"
        per-page="1"
        ariaLabelSlider="My Favorite Images"
        hide-pagination
      />
      <!-- eslint-enable vue/attribute-hyphenation -->
      <!-- <content-about /> -->
      <!-- <content-contact /> -->
    </clb-container>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const langClass = ref(`spletti-${locale.value}`);
const runtimeConfig = useRuntimeConfig();
const { siteTitle } = runtimeConfig.public;

useHead({
  title: 'JLS - Frontend Developer',
  meta: [
    {
      property: 'og:title',
      content: `JLS - Frontend Developer | ${siteTitle}`,
    },
  ],
});

// @TODO: remove demo-data
const sliderItems = [
  {
    image: {
      src: 'https://picsum.photos/id/531/800/400',
      alt: 'Image 1',
    },
  },
  {
    image: {
      src: 'https://picsum.photos/id/731/800/400',
      alt: 'Image 2',
    },
  },
  {
    image: {
      src: 'https://picsum.photos/id/831/800/400',
      alt: 'Image 3',
    },
  },
];
</script>

<!-- <style lang="scss">
@include tablet-down {
  .spletti-de {
    h2,
    .h2 {
      font-size: map.get($clb-font-sizes, 'h2', 'xs');
    }
  }
}
</style> -->
