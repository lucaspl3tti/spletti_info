<template>
  <div :class="['jls-app-nav', isSidebar ? 'jls-app-nav--sidebar' : '']">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="['jls-app-nav__item', `jls-app-nav__item--${item.name}`]"
    >
      <div
        :class="[
          'jls-app-nav-link',
          `jls-app-nav-link--${item.name}`,
          { 'handwriting-font': isHandwritingFont },
        ]"
        @click="onClickNav(item.link)"
      >
        <jls-icon
          v-if="showIcon"
          :pack="iconPack"
          :name="item.icon"
          :size="iconSize"
        />

        <span v-if="isSidebar" :class="['jls-app-nav-link__dash']" />

        <jls-link
          class="jls-app-nav-link__link"
          :to="item.link"
          theme="light"
        >
          {{ item.text }}
        </jls-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AppNavProperties } from '@/interfaces/components/app.interface';

const properties = withDefaults(defineProps<AppNavProperties>(), {
  items: undefined,
  isSidebar: false,
  showIcon: false,
  iconPack: 'bi',
  iconSize: '45',
  isHandwritingFont: false,
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.items, 'items', 'app-nav', true);
checkComponentPropertyValidity(properties.iconPack, 'icon-pack', 'app-nav', true);
checkComponentPropertyValidity(properties.iconSize, 'icon-size', 'app-nav', true);
/* eslint-enable max-len */

const emit = defineEmits(['open-link']);

function onClickNav(target: string): void {
  emit('open-link', target);
}
</script>

<style lang="scss">
.jls-app-nav {
  @include flex(
    row nowrap,
    $justify: space-between,
    $align: center,
    $gap: spacing(4)
  );

  &--sidebar {
    flex-flow: column;
    gap: spacing(2);

    .jls-app-nav__item {
      &:hover {
        .jls-app-nav-link {
          color: $color-orange-010;
        }
      }

      .nuxt-icon {
        color: $color-orange-010 !important;
      }

      &:nth-child(even) {
        &:hover {
          .jls-app-nav-link {
            color: $color-secondary;
          }
        }

        .nuxt-icon {
          color: $color-secondary !important;
        }
      }
    }
  }
}

.jls-app-nav-link {
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

  &__link {
    a {
      color: inherit !important;
    }
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
