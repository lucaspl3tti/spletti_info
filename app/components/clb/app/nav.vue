<template>
  <div :class="['clb-app-nav', isSidebar ? 'clb-app-nav--sidebar' : '']">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="['clb-app-nav__item', `clb-app-nav__item--${item.name}`]"
    >
      <div
        :class="[
          'clb-app-nav-link',
          `clb-app-nav-link--${item.name}`,
          { 'handwriting-font': isHandwritingFont },
        ]"
        @click="onClickNav(item.link)"
      >
        <clb-icon
          v-if="showIcon"
          :pack="iconPack"
          :name="item.icon"
          :size="iconSize"
        />

        <span v-if="isSidebar" :class="['clb-app-nav-link__dash']" />

        <clb-link
          class="clb-app-nav-link__link"
          :to="localePath(item.link).toString()"
          theme="light"
          :title="$trans(`general.navigation.${item.name}`)"
        >
          {{ $trans(`general.navigation.${item.name}`) }}
        </clb-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ClbAppNavProperties } from '@/interfaces/base/app.interface';

const localePath = useLocalePath();

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

function onClickNav(target: string): void {
  emit('open-link', target);
}
</script>

<style lang="scss">
.clb-app-nav {
  @include flex(
    row nowrap,
    $justify: space-between,
    $align: center,
    $gap: spacing(4)
  );

  &--sidebar {
    flex-flow: column;
    gap: spacing(2);

    .clb-app-nav__item {
      &:hover {
        .clb-app-nav-link {
          color: $color-orange-010;
        }
      }

      .nuxt-icon {
        color: $color-orange-010 !important;
      }

      &:nth-child(even) {
        &:hover {
          .clb-app-nav-link {
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

.clb-app-nav-link {
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
