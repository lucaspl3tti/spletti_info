<template>
  <div class="navbar-brand clb-app-header-brand">
    <clb-link
      :to="localePath('/').toString()"
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
  </div>
</template>

<script setup lang="ts">
import type { ClbAppBarBrandProperties } from '@/interfaces/base/app.interface';

const properties = withDefaults(defineProps<ClbAppBarBrandProperties>(), {
  text: '',
  isHandwritingFont: false,
  hideDot: false,
});

checkComponentPropertyValidity(properties.text, 'text', 'app-bar-brand', true);

const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
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
    font-size: map.get($clb-font-sizes, 'h4', 'md');
  }
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
