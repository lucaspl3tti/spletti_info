<template>
  <b-navbar-brand class="clb-app-header-brand">
    <clb-link
      :to="homePath"
      theme="light"
      :class="[
        'nav-logo',
        'mb-0',
        { 'handwriting-font': isHandwritingFont },
      ]"
      no-underline
      :title="text"
    >
      {{ text }}<span v-if="!hideDot" class="heading-dot">.</span>
    </clb-link>
  </b-navbar-brand>
</template>

<script setup lang="ts">
import type { ClbAppBarBrandProperties } from '@/interfaces/base/app.interface';

const localePath = useLocalePath();

const properties = withDefaults(defineProps<ClbAppBarBrandProperties>(), {
  text: '',
  isHandwritingFont: false,
  hideDot: false,
});

checkComponentPropertyValidity(properties.text, 'text', 'app-bar-logo', true);

const homePath = computed((): string => localePath('/').toString());
</script>

<style lang="scss">
.clb-app-header-brand {
  @include flex(row nowrap);
  place-items: center;
  align-self: center;
  height: 55px;
  border-radius: 25px;
  padding: spacing(1) spacing(5);
  padding-left: 0;
  white-space: unset;

  .nav-logo {
    color: $color-white;
    font-size: map.get($clb-font-sizes, 'h4', 'md');
  }

  &:hover {
    color: color.adjust($color-white, $lightness: -10%);
  }
}

.nav-logo {
  color: inherit !important;
}

@include tablet-portrait-up {
  .clb-app-header-brand {
    box-shadow: none;

    .nav-logo {
      font-size: 38px;
    }
  }
}
</style>
