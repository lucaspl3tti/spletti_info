<template>
  <span
    :class="[
      'jls-link',
      `jls-link--${theme}`,
    ]"
  >
    <nuxt-link
      v-if="!isExternal"
      :to="to"
      :title="title"
    >
      <span :class="[{ 'hover-underline': !noUnderline }]"><slot /></span>
      <slot name="append" />
    </nuxt-link>

    <a
      v-else
      :href="to"
      :target="target"
      :rel="rel"
      :title="title"
    >
      <span :class="[{ 'hover-underline': !noUnderline }]"><slot /></span>
      <slot name="append" />
    </a>
  </span>
</template>

<script setup lang="ts">
import type { LinkProperties } from '@/interfaces/components/misc.interface';
import { themeOptions } from '@/consts/misc';

const properties = withDefaults(defineProps<LinkProperties>(), {
  to: '',
  title: '',
  theme: 'secondary',
  target: '_blank',
  isExternal: false,
  noUnderline: false,
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.to, 'to', 'link', true);
checkComponentPropertyValidity(properties.title, 'title', 'link', true);
checkComponentPropertyValidity(properties.theme, 'theme', 'link', true, themeOptions);
checkComponentPropertyValidity(properties.target, 'target', 'link', true, ['_blank', '_self', '_parent', '_top']);
/* eslint-enable max-len */

const rel = computed<string>((): string => properties.target === '_blank'
  ? 'noopener noreferrer'
  : '',
);
</script>

<style lang="scss">
.jls-link {
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

  &.jls-link--primary {
    a {
      color: $color-primary;

      &:hover {
        color: color.adjust($color-primary, $lightness: -10%);
      }
    }
  }

  &.jls-link--light {
    a {
      color: $link-light-color;

      &:hover {
        color: $link-light-hover-color;
      }
    }
  }

  &.jls-link--dark {
    a {
      color: $color-black;

      &:hover {
        color: $color-black;
      }
    }
  }
}
</style>
