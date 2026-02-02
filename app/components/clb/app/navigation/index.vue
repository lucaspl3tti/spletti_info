<template>
  <div :class="['clb-app-navigation', isSidebar ? 'clb-app-navigation--sidebar' : '']">
    <clb-app-navigation-item
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :is-sidebar="isSidebar"
      :show-icon="showIcon"
      :icon-pack="iconPack"
      :icon-size="iconSize"
      :is-handwriting-font="isHandwritingFont"
      @open-link="onClickNavItem"
    />
  </div>
</template>

<script setup lang="ts">
import type { ClbAppNavProperties } from '@/interfaces/base/app.interface';

const properties = withDefaults(defineProps<ClbAppNavProperties>(), {
  items: undefined,
  isSidebar: false,
  showIcon: false,
  iconPack: 'bi',
  iconSize: '45',
  isHandwritingFont: false,
});

checkComponentPropertyValidity(properties.items, 'items', 'app-nav', true);
checkComponentPropertyValidity(properties.iconPack, 'icon-pack', 'app-nav', true);
checkComponentPropertyValidity(properties.iconSize, 'icon-size', 'app-nav', true);

const emit = defineEmits(['open-link']);

function onClickNavItem(target: string): void {
  emit('open-link', target);
}
</script>

<style lang="scss">
.clb-app-navigation {
  @include flex(
    row nowrap,
    $justify: space-between,
    $align: center,
    $gap: spacing(4)
  );

  &--sidebar {
    flex-flow: column;
    gap: spacing(2);

    .clb-app-navigation-item {
      &:hover {
        .clb-app-navigation-link {
          color: $color-secondary-100;
        }
      }

      .nuxt-icon {
        color: $color-secondary-100 !important;
      }

      &:nth-child(even) {
        &:hover {
          .clb-app-navigation-link {
            color: $color-secondary-var;
          }
        }

        .nuxt-icon {
          color: $color-secondary-var !important;
        }
      }
    }
  }
}
</style>
