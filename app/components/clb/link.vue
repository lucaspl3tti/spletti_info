<template>
  <component
    :is="componentType"
    :class="[
      'clb-link',
      `clb-link--${theme}`,
    ]"
    v-bind="componentAttributes"
  >
    <span :class="[{ 'hover-underline': !noUnderline }]">
      <slot />
    </span>
    <slot name="append" />
  </component>
</template>

<script setup lang="ts">
import type { ClbLinkProperties } from '@/interfaces/components/link.interface';
import { colorVariants, linkTarget } from '@/consts/misc.consts';

const NuxtLink = resolveComponent('NuxtLink');

const properties = withDefaults(defineProps<ClbLinkProperties>(), {
  to: undefined,
  theme: 'secondary',
  target: '_blank',
  isExternal: false,
  noUnderline: false,
});

checkComponentPropertyValidity(properties.theme, 'theme', 'link', true, colorVariants);
checkComponentPropertyValidity(properties.target, 'target', 'link', true, linkTarget);

const componentType = computed(() => {
  return properties.isExternal ? 'a' : NuxtLink;
});

const componentAttributes = computed(() => {
  if (properties.isExternal) {
    return {
      href: properties.to,
      target: properties.target,
      rel: properties.target === '_blank' ? 'noopener noreferrer' : undefined,
    };
  }

  return {
    to: properties.to,
  };
});
</script>

<style lang="scss">
.clb-link {
  --clb-link-color: #{$link-color};
  --clb-link-hover-color: #{$link-hover-color};
  color: var(--clb-link-color);
  transition: color $animation-speed, background-size $animation-speed;

  .nuxt-icon {
    margin-left: spacing(1.5);
    transform: translateX(0);
    transition: transform $animation-speed;
  }

  &:hover {
    color: var(--clb-link-hover-color);

    .nuxt-icon {
      transform: translateX(spacing(1.5));
    }
  }

  &.clb-link--primary {
    --clb-link-color: #{$color-primary-var};
    --clb-link-hover-color: #{$color-primary-700};
  }

  &.clb-link--light {
    --clb-link-color: #{$link-light-color};
    --clb-link-hover-color: #{$link-light-hover-color};
  }

  &.clb-link--dark {
    --clb-link-color: #{$color-black};
    --clb-link-hover-color: #{color.adjust($color-black, $lightness: 10%)};
  }
}
</style>
