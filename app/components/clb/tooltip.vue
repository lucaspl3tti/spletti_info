<template>
  <div
    :class="[
      'clb-tooltip',
      `clb-tooltip--${theme}`,
    ]"
  >
    <b-tooltip
      v-model="model"
      :class="[
        'clb-tooltip',
        `clb-tooltip--${theme}`,
      ]"
      :target="target"
      :placement="placement"
      :teleport-disabled="teleportDisabled"
      teleport-to="body"
    >
      <slot>
        {{ text }}
      </slot>
    </b-tooltip>
  </div>
</template>

<script setup lang="ts">
import type { ClbTooltipProperties } from '@/interfaces/components/tooltip.interface';
import { colorModes, tooltipPlacements } from '@/consts/misc.consts';

const model = defineModel<boolean>({
  default: false,
  required: true,
});

const properties = withDefaults(defineProps<ClbTooltipProperties>(), {
  target: undefined,
  text: undefined,
  theme: 'light',
  placement: 'bottom',
  teleportDisabled: false,
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.target, 'target', 'tooltip', true);
checkComponentPropertyValidity(properties.theme, 'theme', 'tooltip', true, colorModes);
checkComponentPropertyValidity(properties.placement, 'placement', 'tooltip', true, tooltipPlacements);
/* eslint-enable max-len */
</script>

<style lang="scss">
.clb-tooltip {
  --bs-tooltip-opacity: 1;

  .tooltip {
    --bs-tooltip-opacity: 1;
  }

  &--primary {
    --bs-tooltip-bg: #{$color-primary-var};
    --bs-tooltip-color: #{$color-white};

    .tooltip {
      --bs-tooltip-bg: #{$color-primary-var};
      --bs-tooltip-color: #{$color-white};
    }
  }

  &--secondary {
    --bs-tooltip-bg: #{$color-secondary-var};
    --bs-tooltip-color: #{$color-white};

    .tooltip {
      --bs-tooltip-bg: #{$color-secondary-var};
      --bs-tooltip-color: #{$color-white};
    }
  }

  &--light {
    --bs-tooltip-bg: #{$color-white};
    --bs-tooltip-color: #{$color-black};

    .tooltip {
      --bs-tooltip-bg: #{$color-white};
      --bs-tooltip-color: #{$color-black};
    }
  }

  &--dark {
    --bs-tooltip-bg: #{$color-dark};
    --bs-tooltip-color: #{$color-white};

    .tooltip {
      --bs-tooltip-bg: #{$color-dark};
      --bs-tooltip-color: #{$color-white};
    }
  }
}
</style>
