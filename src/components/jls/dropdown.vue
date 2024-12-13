<template>
  <v-menu
    :class="[
      'jls-dropdown',
      `jls-dropdown--${theme}`,
      'mt-2',
      { 'd-none': disabled },
    ]"
  >
    <template #activator="slotData">
      <div class="jls-dropdown__trigger">
        <slot name="activator" v-bind="slotData || {}">
          <jls-button
            :theme="activatorTheme"
            v-bind="slotData.props"
          >
            <slot name="activatorTitle">{{ activatorTitle }}</slot>

            <template #append>
              <slot name="activatorIcon">
                <jls-icon
                  pack="bi"
                  name="chevron-down"
                  size="24"
                  color="currentColor"
                />
              </slot>
            </template>
          </jls-button>
        </slot>
      </div>
    </template>

    <slot name="dropdownList">
      <v-list class="jls-dropdown__list">
        <v-list-item
          v-for="item in items"
          :key="`dropdown-item-${item.id}`"
          :class="[
            'jls-dropdown__list-item',
            { 'd-none': item.id === activeItem?.id },
          ]"
          @click="onClickDropdownItem(item)"
        >
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </slot>
  </v-menu>
</template>

<script setup lang="ts">
import type { DropdownProperties, DropdownItem } from '@/interfaces/components/misc.interface'; // eslint-disable-line max-len
import { themeOptions, themeBasicOptions } from '~/src/consts/misc';

const properties = withDefaults(defineProps<DropdownProperties>(), {
  items: undefined,
  disabled: false,
  activatorTitle: undefined,
  activatorTheme: 'secondary',
  theme: 'light',
  defaultActiveItem: undefined,
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.theme, 'theme', 'dropdown', true, themeBasicOptions);
checkComponentPropertyValidity(properties.activatorTheme, 'activator-theme', 'dropdown', true, [...themeOptions, 'none']);
/* eslint-enable max-len */

const emit = defineEmits(['active-item-changed']);

const activeItem = ref<DropdownItem|null>(properties.defaultActiveItem
  ? properties.defaultActiveItem
  : null,
);

watch(() => activeItem.value, () => {
  emit('active-item-changed', activeItem.value);
});

function onClickDropdownItem(item: DropdownItem): void {
  activeItem.value = item;
  item.callback(item.id);
}
</script>

<style lang="scss">
.jls-dropdown {
  &--dark {
    .jls-dropdown__list {
      background: $color-dark !important;
      color: $color-white !important;
    }
  }

  & > .v-overlay__content {
    max-height: 300px !important;
  }

  &__trigger {
    .jls-btn {
      .nuxt-icon {
        transform: translateX(0) !important;
      }

      &[aria-expanded="true"] {
        .nuxt-icon {
          transform: translateX(0) rotate(180deg) !important;
        }
      }
    }
  }

  &__list {
    background: $color-white !important;
    color: $color-black !important;

    .v-list-item-title {
      @include flex($justify: flex-start, $align: center, $gap: spacing(2));
    }
  }
}
</style>
