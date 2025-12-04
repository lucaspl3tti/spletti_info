<template>
  <div
    ref="dropdown"
    :class="[
      'clb-dropdown',
      `clb-dropdown--${theme}`,
      {
        'clb-dropdown--has-icon-toggle': toggleIsIconBtn,
        'clb-dropdown--toggle-icon-not-rotate': toggleIconShouldNotRotate,
      },
    ]"
  >
    <clb-button
      :id="id"
      ref="dropdownToggle"
      :theme="theme"
      :size="size"
      :variant="variant"
      :border-style="borderStyle"
      :icon="toggleIsIconBtn ? {
        name: buttonIcon.name,
        pack: buttonIcon.pack,
        size: buttonIconSize,
      } : undefined"
      :is-icon-btn="toggleIsIconBtn"
      :class="[
        'dropdown-toggle',
        'clb-dropdown__toggle',
        { show: isOpen },
        { 'dropup-active': placement === 'top-start' },
        ...buttonClasses,
      ]"
      @click="onDropdownToggleClick"
    >
      <template v-if="!toggleIsIconBtn">
        <slot name="button-text">
          <span v-if="!toggleIsIconBtn">
            {{ buttonText }}
          </span>
        </slot>
      </template>

      <template #append>
        <slot name="button-icon">
          <clb-icon
            v-if="!toggleIsIconBtn"
            :name="buttonIcon.name"
            :pack="buttonIcon.pack"
            :size="buttonIconSize"
          />
        </slot>
      </template>
    </clb-button>

    <transition>
      <ul
        v-show="isOpen"
        ref="dropdownMenu"
        :class="[
          'dropdown-menu',
          'clb-dropdown__menu',
          { 'clb-dropdown__menu--hide-active': dropdownHideActiveItem },
          ...dropdownMenuClasses,
        ]"
        :aria-labelledby="id"
        :role="dropdownRole"
        :style="floatingStyles"
      >
        <slot name="dropdown-menu">
          <b-dropdown-item
            v-for="(item, index) in dropdownItems"
            :key="index"
            :class="[
              'clb-dropdown__item',
              `clb-dropdown__item--theme-${activeDropdownItemTheme}`,
            ]"
            :active="
              dropdownHideActiveItem &&
              isActiveItem &&
              isActiveItem.key === item.key
            "
            @click="onClickDropdownItem(index, item.key)"
          >
            <slot :name="`dropdown-menu-item-${item.key}`">
              <slot :name="item.key">
                <clb-icon
                  v-if="item.icon && dropdownItemIconPosition === 'left'"
                  :name="item.icon.name"
                  :pack="item.icon.pack"
                  :size="dropdownItemIconSize"
                  has-no-margin
                />

                {{ item?.value }}

                <clb-icon
                  v-if="item.icon && dropdownItemIconPosition === 'right'"
                  :name="item.icon.name"
                  :pack="item.icon.pack"
                  :size="dropdownItemIconSize"
                  has-no-margin
                />
              </slot>
            </slot>
          </b-dropdown-item>
        </slot>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import type {
  ClbDropdownProperties,
  ClbDropdownItem,
} from '@/interfaces/components/dropdown.interface';

import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  type UseFloatingReturn,
} from '@floating-ui/vue';

// Define component properties
const properties = withDefaults(defineProps<ClbDropdownProperties>(), {
  id: undefined,
  theme: 'primary',
  variant: 'default',
  size: 'md',
  borderStyle: 'default',
  buttonClasses: () => [],
  buttonText: 'Toggle dropdown',
  buttonIcon: () => ({ name: 'chevron-down', pack: 'bi' }),
  buttonIconSize: '20',
  toggleIsIconBtn: false,
  toggleIconShouldNotRotate: false,
  dropdownMenuClasses: () => [],
  dropdownRole: 'menu',
  dropdownItems: undefined,
  dropdownActiveItem: undefined,
  dropdownHideActiveItem: false,
  dropdownActiveItemTheme: undefined,
  dropdownItemIconSize: '20',
  dropdownItemIconPosition: 'right',
});

checkComponentPropertyValidity(properties.id, 'id', 'dropdown', true);

const emit = defineEmits(['dropdown-item-click']);

// Define reactive variables
const dropdown = useTemplateRef('dropdown');
const dropdownToggle = useTemplateRef('dropdownToggle');
const dropdownMenu = useTemplateRef('dropdownMenu');
const isOpen = ref(false);

const isActiveItem: Ref<ClbDropdownItem|undefined> = ref(
  properties.dropdownHideActiveItem && properties.dropdownItems
    ? properties.dropdownActiveItem ?? properties.dropdownItems[0]
    : undefined,
);

const activeDropdownItemTheme = computed(() => {
  return properties.dropdownActiveItemTheme
    ? properties.dropdownActiveItemTheme
    : properties.theme;
});

// Hook Listeners
onMounted(() => {
  onClickOutside(dropdown, () => handleClickOutside());
});

// @ts-ignore-next-line
const { floatingStyles, placement } = useFloating(dropdownToggle, dropdownMenu, {
  placement: 'bottom-start',
  middleware: [
    offset(2),
    flip(),
    shift({ padding: 5 }),
  ],
  whileElementsMounted: autoUpdate,
}) as UseFloatingReturn;

// Component Methods
function onDropdownToggleClick(): void {
  toggleDropdown();
}

function handleClickOutside(): void {
  closeDropdown();
}

function toggleDropdown(): void {
  isOpen.value = !isOpen.value;
}

function closeDropdown(): void {
  isOpen.value = false;
}

function onClickDropdownItem(index: number, key: string): void {
  if (
    properties.dropdownHideActiveItem &&
    isActiveItem.value &&
    isActiveItem.value.key === key
  ) {
    return;
  }

  isActiveItem.value = properties.dropdownHideActiveItem && properties.dropdownItems
    ? properties.dropdownItems[index]
    : undefined;

  closeDropdown();
  emit('dropdown-item-click', key);
}
</script>

<style lang="scss">
.clb-dropdown {
  position: relative;
  display: inline-block;

  .nuxt-icon svg,
  .nuxt-icon span {
    transition: transform $animation-speed ease;
  }

  .clb-dropdown__toggle {
    &:hover {
      .nuxt-icon svg,
      .nuxt-icon span {
        transform: translateX(0);
      }
    }

    &.show {
      border-color: var(--clb-btn-active-border-color);
      background-color: var(--clb-btn-active-bg-color);
      color: var(--clb-btn-active-text-color);

      .nuxt-icon svg,
      .nuxt-icon span {
        transform: rotate(180deg);
      }
    }

    &::after {
      display: none;
    }
  }

  .clb-dropdown__menu {
    z-index: $z-fixed - 10;
    display: block;
    width: 100%;
    min-width: 0;
    max-height: 350px;
    box-shadow: 0 7px 4px 5px rgba($color: $color-black, $alpha: 0.4);
    border: 0;
    border-radius: 0;
    padding: 0;
    overflow-y: auto;
    transition: opacity $animation-speed !important;

    &--hide-active {
      .clb-dropdown__item .dropdown-item {
        &:active,
        &.active {
          background-color: var(--clb-dropdown-item-bg-color);
          color: var(--clb-dropdown-item-text-color);
          cursor: pointer !important;

          &:hover {
            background-color: var(--clb-dropdown-item-hover-bg-color);
            color: var(--clb-dropdown-item-hover-text-color);
          }
        }
      }
    }

    &.show {
      display: grid;
      gap: spacing(1);
    }
  }

  .clb-dropdown__item {
    --clb-dropdown-item-bg-color: #{$color-white};
    --clb-dropdown-item-text-color: #{$color-black};
    --clb-dropdown-item-hover-bg-color: #{$color-gray-200};
    --clb-dropdown-item-hover-text-color: #{$color-black};
    --clb-dropdown-item-active-bg-color: #{$color-black};
    --clb-dropdown-item-active-text-color: #{$color-white};

    .dropdown-item {
      @include flex($justify: space-between, $align: center, $gap: spacing(2));
      background-color: var(--clb-dropdown-item-bg-color);
      padding: spacing(2.5) spacing(4);
      color: var(--clb-dropdown-item-text-color);
      transition: background-color $animation-speed-fast ease, color $animation-speed-fast ease;

      .nuxt-icon {
        margin-right: spacing(1) !important;
      }

      &:hover {
        background-color: var(--clb-dropdown-item-hover-bg-color);
        color: var(--clb-dropdown-item-hover-text-color);
        cursor: pointer;
      }

      &:active,
      &.active {
        background-color: var(--clb-dropdown-item-active-bg-color);
        color: var(--clb-dropdown-item-active-text-color);
        cursor: default;

        &:hover {
          cursor: default;
        }
      }
    }

    &:not(:first-of-type) {
      .drodpown-item {
        padding-top: math.div(spacing(2.5), 2);
      }
    }

    &:not(:last-of-type) {
      .drodpown-item {
        padding-bottom: math.div(spacing(2.5), 2);
      }
    }

    &.clb-dropdown__item--theme-primary {
      --clb-dropdown-item-active-bg-color: #{$clb-btn-primary-bg-color};
      --clb-dropdown-item-active-text-color: #{$clb-btn-primary-color};
    }

    &.clb-dropdown__item--theme-secondary {
      --clb-dropdown-item-active-bg-color: #{$clb-btn-secondary-bg-color};
      --clb-dropdown-item-active-text-color: #{$clb-btn-secondary-color};
    }

    &.clb-dropdown__item--theme-light {
      --clb-dropdown-item-active-bg-color: #{$clb-btn-light-bg-color};
      --clb-dropdown-item-active-text-color: #{$clb-btn-light-color};
    }

    &.clb-dropdown__item--theme-dark {
      --clb-dropdown-item-active-bg-color: #{$clb-btn-dark-bg-color};
      --clb-dropdown-item-active-text-color: #{$clb-btn-dark-color};
    }
  }


  &.clb-dropdown--has-icon-toggle {
    .clb-dropdown__menu {
      width: fit-content;
      min-width: 140px;
    }
  }

  &.clb-dropdown--toggle-icon-not-rotate {
    .clb-dropdown__toggle {
      &.show {
        .nuxt-icon svg,
        .nuxt-icon span {
          transform: rotate(0deg);
        }
      }
    }
  }
}

@include dark-mode {
  .clb-dropdown {
    .clb-dropdown__item {
      --clb-dropdown-item-bg-color: #{$color-dark};
      --clb-dropdown-item-text-color: #{$color-white};
      --clb-dropdown-item-hover-bg-color: #{color.adjust($color-dark, $lightness: 5%)};
    --clb-dropdown-item-hover-text-color: #{$color-white};
    }
  }
}
</style>
