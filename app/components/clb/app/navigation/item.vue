<template>
  <div :class="['clb-app-navigation-item', `clb-app-navigation-item--${item.name}`]">
    <div
      :class="[
        'clb-app-navigation-link',
        `clb-app-navigation-link--${item.name}`,
        { 'handwriting-font': isHandwritingFont },
      ]"
      @click="onClickNavItem(item.link)"
    >
      <clb-icon
        v-if="showIcon"
        :pack="iconPack"
        :name="item.icon"
        :size="iconSize"
      />

      <span v-if="isSidebar" :class="['clb-app-navigation-link__dash']" />

      <clb-link
        class="clb-app-navigation-link__link"
        :to="localePath(item.link).toString()"
        theme="light"
        :title="$trans(`general.navigation.${item.name}`)"
      >
        {{ $trans(`general.navigation.${item.name}`) }}
      </clb-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ClbAppNavItemProperties } from '@/interfaces/base/app.interface';

const properties = withDefaults(defineProps<ClbAppNavItemProperties>(), {
  item: undefined,
  isSidebar: false,
  showIcon: false,
  iconPack: 'bi',
  iconSize: '45',
  isHandwritingFont: false,
});

checkComponentPropertyValidity(properties.item, 'item', 'app-nav-item', true);
checkComponentPropertyValidity(properties.iconPack, 'icon-pack', 'app-nav-item', true);
checkComponentPropertyValidity(properties.iconSize, 'icon-size', 'app-nav-item', true);

const emit = defineEmits(['open-link']);

const localePath = useLocalePath();

function onClickNavItem(target: string): void {
  emit('open-link', target);
}
</script>

<style lang="scss">
.clb-app-navigation-link {
  @include flex(row nowrap, $align: center);
  cursor: pointer;
  color: $color-white;
  font-size: 38px;
  font-weight: $font-weight-medium;

  &__dash {
    @include size(50px, 2px);
    margin: 0 spacing(3);
    background-color: "currentColor";
    transition: background-color $animation-speed;
  }

  &:hover {
    .hover-underline {
      background-size: 100% 2px;
    }
  }

  .nuxt-icon {
    color: "currentColor" !important;
  }
}
</style>
