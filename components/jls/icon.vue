<template>
  <icon
    :name="`${pack}:${name}`"
    :size="size"
    :color="color"
    :class="['jls-icon', ...getIconClasses()]"
  />
</template>

<script setup>
/**
 * Uses the <icon /> component from the nuxt-icon module.
 * For all available icons look here: https://icones.js.org
 */

const properties = defineProps({
  name: {
    type: String,
    default: 'arrow-right',
  },

  pack: {
    type: String,
    default: 'bi',
  },

  size: {
    type: [String, Number],
    default: '24',
  },

  color: {
    type: String,
    default: 'currentColor',
  },

  hasNoMargin: {
    type: Boolean,
    default: false,
  },

  hasNoDefaultAnimation: {
    type: Boolean,
    default: false,
  },
});

function getIconClasses() {
  return [
    `${properties.pack}-icon`,
    `${properties.pack}-icon-${properties.name}`,
    properties.hasNoMargin ? 'nuxt-icon--no-margin' : '',
    properties.hasNoDefaultAnimation ? 'nuxt-icon--no-default-animation' : '',
  ];
}
</script>

<style lang="scss">
.jls-icon {
  top: -1px;

  &--no-margin {
    margin: 0 !important;
  }

  &--no-default-animation {
    transform: translateX(0) !important;
  }
}
</style>
