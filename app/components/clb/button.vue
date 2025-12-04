<template>
  <component
    :is="buttonTag"
    :class="[
      'clb-button',
      `clb-button--${theme}`,
      `clb-button--${variant}`,
      `clb-button--${borderStyle}`,
      `clb-button--${size}`,
      { 'clb-button--block': block },
      { 'clb-button--icon': isIconBtn },
      ...(styleClasses || []),
    ]"
    :href="href"
    :type="buttonType"
    @click="onClick"
  >
    <slot name="prepend" />

    <span v-if="!isIconBtn" class="clb-button__text">
      <slot>
        {{ text }}
      </slot>
    </span>

    <span v-else class="clb-button__icon">
      <slot>
        <clb-icon
          v-if="icon"
          v-bind="icon"
        />
      </slot>
    </span>

    <slot name="append" />
  </component>
</template>

<script lang="ts" setup>
import type { ClbButtonProperties } from '@/interfaces/components/button.interface';

import {
  buttonVariantsWithText,
  buttonBorderStyles,
  colorVariantsExtended,
  sizes,
} from '@/consts/misc.consts';

// default variable definitions
const router = useRouter();

// component properties
const properties = withDefaults(defineProps<ClbButtonProperties>(), {
  borderStyle: 'default',
  size: 'md',
  tag: 'button',
  theme: 'primary',
  variant: 'default',
  block: false,
  styleClasses: undefined,
  href: undefined,
  icon: undefined,
  isIconBtn: false,
  target: undefined,
  text: undefined,
  to: undefined,
  type: undefined,
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.borderStyle, 'borderStyle', 'button', true, buttonBorderStyles);
checkComponentPropertyValidity(properties.size, 'size', 'button', true, sizes);
checkComponentPropertyValidity(properties.tag, 'tag', 'button', true);
checkComponentPropertyValidity(properties.theme, 'theme', 'button', true, colorVariantsExtended);
checkComponentPropertyValidity(properties.variant, 'variant', 'button', true, buttonVariantsWithText);
/* eslint-enable max-len */

// component emits
const emit = defineEmits(['click']);

// computed values
const buttonTag = computed<string>(() => {
  return properties.href || properties.to ? 'a' : properties.tag;
});

const buttonType = computed<string|undefined>(() => {
  return buttonTag.value === 'button' ? properties.type : undefined;
});

// component methods
function onClick(event: MouseEvent) {
  event.preventDefault();

  if (properties.href) {
    if (properties.target && properties.target === '_blank') {
      window.open(properties.href, '_blank');
    } else {
      window.location.href = properties.href;
    }

    return;
  }

  if (properties.to && router) {
    router.push(properties.to);
  }

  emit('click', event);
}
</script>

<style lang="scss" scoped>
.clb-button {
  --clb-btn-border-color: #{$clb-btn-default-border-color};
  --clb-btn-bg-color: transparent;
  --clb-btn-text-color: #{$clb-btn-default-color};
  --clb-btn-active-border-color: #{$clb-btn-default-active-border-color};
  --clb-btn-active-bg-color: transparent;
  --clb-btn-active-text-color: #{$clb-btn-default-active-color};

  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  gap: spacing(2);
  border: 1px solid var(--clb-btn-border-color);
  border-radius: 0;
  background-color: var(--clb-btn-bg-color);
  padding: $clb-btn-padding-y $clb-btn-padding-x;
  color: var(--clb-btn-text-color);
  font-size: $clb-btn-default-font-size;
  line-height: $clb-btn-default-line-height;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  vertical-align: middle;
  transition:
    color $animation-speed-fast ease-in-out,
    background-color $animation-speed-fast ease-in-out,
    border-color $animation-speed-fast ease-in-out,
    box-shadow $animation-speed-fast ease-in-out,
    border-radius $animation-speed ease-in-out;

  &:hover {
    --clb-btn-border-color: #{color.adjust($clb-btn-default-border-color, $lightness: -10%)};
    --clb-btn-text-color: #{color.adjust($clb-btn-default-color, $lightness: -10%)};
  }

  .clb-button__icon {
    display: inline-flex;
  }

  // **theme styles**
  &--primary {
    --clb-btn-border-color: #{$clb-btn-primary-border-color};
    --clb-btn-bg-color: #{$clb-btn-primary-bg-color};
    --clb-btn-text-color: #{$clb-btn-primary-color};
    --clb-btn-active-border-color: #{$clb-btn-primary-active-border-color};
    --clb-btn-active-bg-color: #{$clb-btn-primary-active-bg-color};
    --clb-btn-active-text-color: #{$clb-btn-primary-active-color};

    &:hover {
      --clb-btn-border-color: #{$clb-btn-primary-hover-border-color};
      --clb-btn-bg-color: #{$clb-btn-primary-hover-bg-color};
      --clb-btn-text-color: #{$clb-btn-primary-hover-color};
    }
  }

  &--secondary {
    --clb-btn-border-color: #{$clb-btn-secondary-border-color};
    --clb-btn-bg-color: #{$clb-btn-secondary-bg-color};
    --clb-btn-text-color: #{$clb-btn-secondary-color};
    --clb-btn-active-border-color: #{$clb-btn-secondary-active-border-color};
    --clb-btn-active-bg-color: #{$clb-btn-secondary-active-bg-color};
    --clb-btn-active-text-color: #{$clb-btn-secondary-active-color};

    &:hover {
      --clb-btn-border-color: #{$clb-btn-secondary-hover-border-color};
      --clb-btn-bg-color: #{$clb-btn-secondary-hover-bg-color};
      --clb-btn-text-color: #{$clb-btn-secondary-hover-color};
    }
  }

  &--light {
    --clb-btn-border-color: #{$clb-btn-light-border-color};
    --clb-btn-bg-color: #{$clb-btn-light-bg-color};
    --clb-btn-text-color: #{$clb-btn-light-color};
    --clb-btn-active-border-color: #{$clb-btn-light-active-border-color};
    --clb-btn-active-bg-color: #{$clb-btn-light-active-bg-color};
    --clb-btn-active-text-color: #{$clb-btn-light-active-color};

    &:hover {
      --clb-btn-border-color: #{$clb-btn-light-hover-border-color};
      --clb-btn-bg-color: #{$clb-btn-light-hover-bg-color};
      --clb-btn-text-color: #{$clb-btn-light-hover-color};
    }
  }

  &--dark {
    --clb-btn-border-color: #{$clb-btn-dark-border-color};
    --clb-btn-bg-color: #{$clb-btn-dark-bg-color};
    --clb-btn-text-color: #{$clb-btn-dark-color};
    --clb-btn-active-border-color: #{$clb-btn-dark-active-border-color};
    --clb-btn-active-bg-color: #{$clb-btn-dark-active-bg-color};
    --clb-btn-active-text-color: #{$clb-btn-dark-active-color};

    &:hover {
      --clb-btn-border-color: #{$clb-btn-dark-hover-border-color};
      --clb-btn-bg-color: #{$clb-btn-dark-hover-bg-color};
      --clb-btn-text-color: #{$clb-btn-dark-hover-color};
    }
  }

  &--danger {
    --clb-btn-border-color: #{$clb-btn-danger-border-color};
    --clb-btn-bg-color: #{$clb-btn-danger-bg-color};
    --clb-btn-text-color: #{$clb-btn-danger-color};
    --clb-btn-active-border-color: #{$clb-btn-danger-active-border-color};
    --clb-btn-active-bg-color: #{$clb-btn-danger-active-bg-color};
    --clb-btn-active-text-color: #{$clb-btn-danger-active-color};

    &:hover {
      --clb-btn-border-color: #{$clb-btn-danger-hover-border-color};
      --clb-btn-bg-color: #{$clb-btn-danger-hover-bg-color};
      --clb-btn-text-color: #{$clb-btn-danger-hover-color};
    }
  }

  &--success {
    --clb-btn-border-color: #{$clb-btn-success-border-color};
    --clb-btn-bg-color: #{$clb-btn-success-bg-color};
    --clb-btn-text-color: #{$clb-btn-success-color};
    --clb-btn-active-border-color: #{$clb-btn-success-active-border-color};
    --clb-btn-active-bg-color: #{$clb-btn-success-active-bg-color};
    --clb-btn-active-text-color: #{$clb-btn-success-active-color};

    &:hover {
      --clb-btn-border-color: #{$clb-btn-success-hover-border-color};
      --clb-btn-bg-color: #{$clb-btn-success-hover-bg-color};
      --clb-btn-text-color: #{$clb-btn-success-hover-color};
    }
  }

  &--warning {
    --clb-btn-border-color: #{$clb-btn-warning-border-color};
    --clb-btn-bg-color: #{$clb-btn-warning-bg-color};
    --clb-btn-text-color: #{$clb-btn-warning-color};
    --clb-btn-active-border-color: #{$clb-btn-warning-active-border-color};
    --clb-btn-active-bg-color: #{$clb-btn-warning-active-bg-color};
    --clb-btn-active-text-color: #{$clb-btn-warning-active-color};

    &:hover {
      --clb-btn-border-color: #{$clb-btn-warning-hover-border-color};
      --clb-btn-bg-color: #{$clb-btn-warning-hover-bg-color};
      --clb-btn-text-color: #{$clb-btn-warning-hover-color};
    }
  }

  &--info {
    --clb-btn-border-color: #{$clb-btn-info-border-color};
    --clb-btn-bg-color: #{$clb-btn-info-bg-color};
    --clb-btn-text-color: #{$clb-btn-info-color};
    --clb-btn-active-border-color: #{$clb-btn-info-active-border-color};
    --clb-btn-active-bg-color: #{$clb-btn-info-active-bg-color};
    --clb-btn-active-text-color: #{$clb-btn-info-active-color};

    &:hover {
      --clb-btn-border-color: #{$clb-btn-info-hover-border-color};
      --clb-btn-bg-color: #{$clb-btn-info-hover-bg-color};
      --clb-btn-text-color: #{$clb-btn-info-hover-color};
    }
  }

  // **size styles**
  &--sm {
    min-width: $clb-btn-sm-min-width;
    min-height: $clb-btn-sm-min-height;
    padding: $clb-btn-sm-padding-y $clb-btn-sm-padding-x;
    font-size: $clb-btn-sm-font-size;
    line-height: $clb-btn-sm-line-height;
  }

  &--md {
    min-width: $clb-btn-md-min-width;
    min-height: $clb-btn-md-min-height;
    padding: $clb-btn-md-padding-y $clb-btn-md-padding-x;
    font-size: $clb-btn-md-font-size;
    line-height: $clb-btn-md-line-height;
  }

  &--lg {
    min-width: $clb-btn-lg-min-width;
    min-height: $clb-btn-lg-min-height;
    padding: $clb-btn-lg-padding-y $clb-btn-lg-padding-x;
    font-size: $clb-btn-lg-font-size;
    line-height: $clb-btn-lg-line-height;
  }

  // **variant styles**
  // ghost variant styles
  &--ghost {
    border-width: 2px;

    &.clb-button--primary {
      --clb-btn-border-color: #{$clb-btn-primary-border-color};
      --clb-btn-bg-color: transparent;
      --clb-btn-text-color: #{$clb-btn-primary-bg-color};
      --clb-btn-active-border-color: #{$clb-btn-primary-active-border-color};
      --clb-btn-active-bg-color: transparent;
      --clb-btn-active-text-color: #{$clb-btn-primary-active-bg-color};

      &:hover {
        --clb-btn-border-color: #{$clb-btn-primary-hover-border-color};
        --clb-btn-bg-color: transparent;
        --clb-btn-text-color: #{$clb-btn-primary-hover-bg-color};
      }
    }

    &.clb-button--secondary {
      --clb-btn-border-color: #{$clb-btn-secondary-border-color};
      --clb-btn-bg-color: transparent;
      --clb-btn-text-color: #{$clb-btn-secondary-bg-color};
      --clb-btn-active-border-color: #{$clb-btn-secondary-active-border-color};
      --clb-btn-active-bg-color: transparent;
      --clb-btn-active-text-color: #{$clb-btn-secondary-active-bg-color};

      &:hover {
        --clb-btn-border-color: #{$clb-btn-secondary-hover-border-color};
        --clb-btn-bg-color: transparent;
        --clb-btn-text-color: #{$clb-btn-secondary-hover-bg-color};
      }
    }

    &.clb-button--light {
      --clb-btn-border-color: #{$clb-btn-light-border-color};
      --clb-btn-bg-color: transparent;
      --clb-btn-text-color: #{$clb-btn-light-bg-color};
      --clb-btn-active-border-color: #{$clb-btn-light-active-border-color};
      --clb-btn-active-bg-color: transparent;
      --clb-btn-active-text-color: #{$clb-btn-light-active-bg-color};

      &:hover {
        --clb-btn-border-color: #{$clb-btn-light-hover-border-color};
        --clb-btn-bg-color: transparent;
        --clb-btn-text-color: #{$clb-btn-light-hover-bg-color};
      }
    }

    &.clb-button--dark {
      --clb-btn-border-color: #{$clb-btn-dark-border-color};
      --clb-btn-bg-color: transparent;
      --clb-btn-text-color: #{$clb-btn-dark-bg-color};
      --clb-btn-active-border-color: #{$clb-btn-dark-active-border-color};
      --clb-btn-active-bg-color: transparent;
      --clb-btn-active-text-color: #{$clb-btn-dark-active-bg-color};

      &:hover {
        --clb-btn-border-color: #{$clb-btn-dark-hover-border-color};
        --clb-btn-bg-color: transparent;
        --clb-btn-text-color: #{$clb-btn-dark-hover-bg-color};
      }
    }

    &.clb-button--danger {
      --clb-btn-border-color: #{$clb-btn-danger-border-color};
      --clb-btn-bg-color: transparent;
      --clb-btn-text-color: #{$clb-btn-danger-bg-color};
      --clb-btn-active-border-color: #{$clb-btn-danger-active-border-color};
      --clb-btn-active-bg-color: transparent;
      --clb-btn-active-text-color: #{$clb-btn-danger-active-bg-color};

      &:hover {
        --clb-btn-border-color: #{$clb-btn-danger-hover-border-color};
        --clb-btn-bg-color: transparent;
        --clb-btn-text-color: #{$clb-btn-danger-hover-bg-color};
      }
    }

    &.clb-button--success {
      --clb-btn-border-color: #{$clb-btn-success-border-color};
      --clb-btn-bg-color: transparent;
      --clb-btn-text-color: #{$clb-btn-success-bg-color};
      --clb-btn-active-border-color: #{$clb-btn-success-active-border-color};
      --clb-btn-active-bg-color: transparent;
      --clb-btn-active-text-color: #{$clb-btn-success-active-bg-color};

      &:hover {
        --clb-btn-border-color: #{$clb-btn-success-hover-border-color};
        --clb-btn-bg-color: transparent;
        --clb-btn-text-color: #{$clb-btn-success-hover-bg-color};
      }
    }

    &.clb-button--warning {
      --clb-btn-border-color: #{$clb-btn-warning-border-color};
      --clb-btn-bg-color: transparent;
      --clb-btn-text-color: #{$clb-btn-warning-bg-color};
      --clb-btn-active-border-color: #{$clb-btn-warning-active-border-color};
      --clb-btn-active-bg-color: transparent;
      --clb-btn-active-text-color: #{$clb-btn-warning-active-bg-color};

      &:hover {
        --clb-btn-border-color: #{$clb-btn-warning-hover-border-color};
        --clb-btn-bg-color: transparent;
        --clb-btn-text-color: #{$clb-btn-warning-hover-bg-color};
      }
    }

    &.clb-button--info {
      --clb-btn-border-color: #{$clb-btn-info-border-color};
      --clb-btn-bg-color: transparent;
      --clb-btn-text-color: #{$clb-btn-info-bg-color};
      --clb-btn-active-border-color: #{$clb-btn-info-active-border-color};
      --clb-btn-active-bg-color: transparent;
      --clb-btn-active-text-color: #{$clb-btn-info-active-bg-color};

      &:hover {
        --clb-btn-border-color: #{$clb-btn-info-hover-border-color};
        --clb-btn-bg-color: transparent;
        --clb-btn-text-color: #{$clb-btn-info-hover-bg-color};
      }
    }
  }

  // ghost variant styles
  &--text {
    --clb-btn-border-color: transparent !important;
    --clb-btn-bg-color: transparent !important;
    --clb-btn-active-border-color: transparent !important;
    --clb-btn-active-bg-color: transparent !important;

    &.clb-button--primary {
      --clb-btn-text-color: #{$clb-btn-primary-bg-color};
      --clb-btn-active-text-color: #{$clb-btn-primary-active-bg-color};

      &:hover {
        --clb-btn-text-color: #{$clb-btn-primary-hover-bg-color};
      }
    }

    &.clb-button--secondary {
      --clb-btn-text-color: #{$clb-btn-secondary-bg-color};
      --clb-btn-active-text-color: #{$clb-btn-secondary-active-bg-color};

      &:hover {
        --clb-btn-text-color: #{$clb-btn-secondary-hover-bg-color};
      }
    }

    &.clb-button--light {
      --clb-btn-text-color: #{$clb-btn-light-bg-color};
      --clb-btn-active-text-color: #{$clb-btn-light-active-bg-color};

      &:hover {
        --clb-btn-text-color: #{$clb-btn-light-hover-bg-color};
      }
    }

    &.clb-button--dark {
      --clb-btn-text-color: #{$clb-btn-dark-bg-color};
      --clb-btn-active-text-color: #{$clb-btn-dark-active-bg-color};

      &:hover {
        --clb-btn-text-color: #{$clb-btn-dark-hover-bg-color};
      }
    }

    &.clb-button--danger {
      --clb-btn-text-color: #{$clb-btn-danger-bg-color};
      --clb-btn-active-text-color: #{$clb-btn-danger-active-bg-color};

      &:hover {
        --clb-btn-text-color: #{$clb-btn-danger-hover-bg-color};
      }
    }

    &.clb-button--success {
      --clb-btn-text-color: #{$clb-btn-success-bg-color};
      --clb-btn-active-text-color: #{$clb-btn-success-active-bg-color};

      &:hover {
        --clb-btn-text-color: #{$clb-btn-success-hover-bg-color};
      }
    }

    &.clb-button--warning {
      --clb-btn-text-color: #{$clb-btn-warning-bg-color};
      --clb-btn-active-text-color: #{$clb-btn-warning-active-bg-color};

      &:hover {
        --clb-btn-text-color: #{$clb-btn-warning-hover-bg-color};
      }
    }

    &.clb-button--info {
      --clb-btn-text-color: #{$clb-btn-info-bg-color};
      --clb-btn-active-text-color: #{$clb-btn-info-active-bg-color};

      &:hover {
        --clb-btn-text-color: #{$clb-btn-info-hover-bg-color};
      }
    }
  }

  // **borderStyle styles**
  // rounded variant styles
  &--rounded {
    border-radius: $clb-btn-rounded-border-radius;
  }

  // pill variant styles
  &--pill {
    border-radius: 50px;
  }

  // assymetrical variant styles
  &--asymmetrical {
    border-radius: 0 $clb-btn-asymmetrical-border-radius;

    &:hover {
      border-radius: $clb-btn-asymmetrical-border-radius 0;
    }
  }

  // asymmetrical mirrored variant styles
  &--asymmetrical-mirrored {
    border-radius: $clb-btn-asymmetrical-border-radius 0;

    &:hover {
      border-radius: 0 $clb-btn-asymmetrical-border-radius;
    }
  }

  // **other styles**
  &--block {
    display: flex;
    width: 100%;
  }

  &--icon {
    width: $clb-btn-icon-size-md;
    min-width: 0 !important;
    height: $clb-btn-icon-size-md;
    min-height: 0 !important;
    padding: $clb-btn-md-padding-y !important;

    &.clb-button--sm {
      width: $clb-btn-icon-size-sm;
      height: $clb-btn-icon-size-sm;
      padding: $clb-btn-sm-padding-y !important;
    }

    &.clb-button--lg {
      width: $clb-btn-icon-size-lg;
      height: $clb-btn-icon-size-lg;
      padding: $clb-btn-lg-padding-y !important;
    }
  }
}
</style>
