<template>
  <span class="jls-icon-wrapper">
    <nuxt-icon
      v-if="pack === 'jls'"
      :name="name"
      :class="['nuxt-icon', `nuxt-icon--jls`, ...getIconClasses()]"
      filled
      :style="`width: ${size}px; height: ${size}px; color: ${color};`"
    />

    <client-only v-else>
      <icon
        :name="`${pack}:${name}`"
        :size="size"
        :color="color"
        :class="['nuxt-icon', `nuxt-icon--custom`, ...getIconClasses()]"
        :style="`width: ${size}px; height: ${size}px;`"
      />
    </client-only>
  </span>
</template>

<script setup>
/**
 * jls Pack:
 * Uses the nuxt-icons module to easily import all svgs from ~/assets/icons
 * For documentation look at: https://nuxt.com/modules/icons
 *
 * Other Packs:
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
svg.nuxt-icon {
  top: 0;
  display: inherit !important;

  &--no-margin {
    margin: 0 !important;
  }

  &--no-default-animation {
    transform: translateX(0) !important;
  }
}

span.nuxt-icon {
  svg {
    top: 0;
    display: inherit !important;
    width: inherit !important;
    height: inherit !important;
  }

  &--no-margin {
    svg {
      margin: 0 !important;
    }
  }

  &--no-default-animation {
    svg {
      transform: translateX(0) !important;
    }
  }
}
</style>
