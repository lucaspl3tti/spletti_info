<template>
  <span
    :class="[
      'clb-link',
      `clb-link--${theme}`,
    ]"
  >
    <nuxt-link
      v-if="!isExternal"
      :to="to"
    >
      <span :class="[{ 'hover-underline': !noUnderline }]"><slot /></span>
      <slot name="append" />
    </nuxt-link>

    <a
      v-else
      :href="to"
      :target="target"
      :rel="rel"
    >
      <span :class="[{ 'hover-underline': !noUnderline }]"><slot /></span>
      <slot name="append" />
    </a>
  </span>
</template>

<script setup lang="ts">
import type { ClbLinkProperties } from '@/interfaces/components/link.interface';
import { colorVariants, linkTarget } from '@/consts/misc.consts';

const properties = withDefaults(defineProps<ClbLinkProperties>(), {
  to: undefined,
  theme: 'secondary',
  target: '_blank',
  isExternal: false,
  noUnderline: false,
});

checkComponentPropertyValidity(properties.theme, 'theme', 'link', true, colorVariants);
checkComponentPropertyValidity(properties.target, 'target', 'link', true, linkTarget);

const rel = computed(() => {
  return properties.target === '_blank' ? 'noopener noreferrer' : '';
});
</script>

<style lang="scss">
.clb-link {
  a {
    color: $link-color;
    transition: color $animation-speed, background-size $animation-speed;

    .nuxt-icon {
      margin-left: spacing(1.5);
      transform: translateX(0);
      transition: transform $animation-speed;
    }

    &:hover {
      color: $link-hover-color;

      .nuxt-icon {
        transform: translateX(spacing(1.5));
      }
    }
  }

  &.clb-link--primary {
    a {
      color: $color-primary-var;

      &:hover {
        color: color.adjust($color-primary, $lightness: -10%);
      }
    }
  }

  &.clb-link--light {
    a {
      color: $link-light-color;

      &:hover {
        color: $link-light-hover-color;
      }
    }
  }

  &.clb-link--dark {
    a {
      color: $color-black;

      &:hover {
        color: $color-black;
      }
    }
  }
}
</style>
