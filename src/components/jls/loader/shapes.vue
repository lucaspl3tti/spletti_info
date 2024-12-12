<template>
  <div :class="['jls-loader-shapes', `jls-loader-shapes--${size}`]">
    <div class="jls-loader-shapes__shape jls-loader-shapes__shape--circle">
      <svg viewBox="0 0 80 80">
        <circle r="32" cy="40" cx="40" />
      </svg>
    </div>

    <div class="jls-loader-shapes__shape jls-loader-shapes__shape--triangle">
      <svg viewBox="0 0 86 80">
        <polygon points="43 8 79 72 7 72" />
      </svg>
    </div>

    <div class="jls-loader-shapes__shape jls-loader-shapes__shape--square">
      <svg viewBox="0 0 80 80">
        <rect height="64" width="64" y="8" x="8" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LoaderShapesProperties } from '~/src/interfaces/components/misc.interface'; // eslint-disable-line max-len
import { sizeOptions } from '~/src/consts/misc';

const properties = withDefaults(defineProps<LoaderShapesProperties>(), {
  size: 'default',
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.size, 'size', 'loader-shapes', true, [...sizeOptions, 'default']);
/* eslint-enable max-len */
</script>

<style lang="scss">
.jls-loader-shapes {
  --loader-shapes-color-path: #{$color-gray-200};
  --loader-shapes-color-dot: #{$color-secondary-var};
  --lodader-shapes-size: 44px;
  --lodader-shapes-dot-size: 6px;
  --lodader-shapes-dot-offset: 2px;
  --loader-shapes-speed: 2s;

  &--x-small {
    --lodader-shapes-size: 24px;
    --lodader-shapes-dot-size: 4px;
  }

  &--small {
    --lodader-shapes-size: 34px;
    --lodader-shapes-dot-size: 5px;
  }

  &--large {
    --lodader-shapes-size: 54px;
  }

  &--x-large {
    --lodader-shapes-size: 64px;
  }

  &--large,
  &--x-large {
    --lodader-shapes-dot-size: 8px;
    --lodader-shapes-dot-offset: 4px;
  }

  &__shape {
    position: relative;
    display: inline-block;
    @include size(var(--lodader-shapes-size));
    margin: 0 spacing(4);

    &::before {
      content: '';
      @include absolute-position(
        $top: calc(var(--lodader-shapes-size) * 0.84),
        $left: calc(var(--lodader-shapes-size) * 0.43)
      );
      display: block;
      @include size(var(--lodader-shapes-dot-size));
      border-radius: 50%;
      background: var(--loader-shapes-color-dot);
      transform: translate(
        calc((var(--lodader-shapes-size) * 0.41) * -1),
        calc((var(--lodader-shapes-size) * 0.41) * -1),
      );
      animation: dot-rect var(--loader-shapes-speed) cubic-bezier(
        0.785,
        0.135,
        0.15,
        0.86,
      ) infinite;
    }

    &.jls-loader-shapes__shape--triangle {
      // width: 48px;

      &::before {
        left: calc(
          var(--lodader-shapes-size) * 0.5 - var(--lodader-shapes-dot-offset)
        );
        transform: translate(
          calc((var(--lodader-shapes-size) * 0.2273) * -1),
          calc((var(--lodader-shapes-size) * 0.41) * -1)
        );
        animation: dot-triangle var(--loader-shapes-speed) cubic-bezier(
          0.785,
          0.135,
          0.15,
          0.86
        ) infinite;
      }
    }

    svg {
      display: block;
      @include size(100%);

      rect,
      polygon,
      circle {
        fill: none;
        stroke: var(--loader-shapes-color-path);
        stroke-width: 10px;
        stroke-linejoin: round;
        stroke-linecap: round;
      }

      polygon {
        stroke-dasharray: 145 76 145 76;
        stroke-dashoffset: 0;
        animation: path-triangle var(--loader-shapes-speed) cubic-bezier(
          0.785,
          0.135,
          0.15,
          0.86) infinite;
      }

      rect {
        stroke-dasharray: 192 64 192 64;
        stroke-dashoffset: 0;
        animation: path-rect var(--loader-shapes-speed) cubic-bezier(
          0.785,
          0.135,
          0.15,
          0.86,
        ) infinite;
      }

      circle {
        stroke-dasharray: 150 50 150 50;
        stroke-dashoffset: 75;
        animation: path-circle var(--loader-shapes-speed) cubic-bezier(
          0.785,
          0.135,
          0.15,
          0.86
        ) infinite;
      }
    }
  }
}

@keyframes path-triangle {
  33% {
    stroke-dashoffset: 74;
  }

  66% {
    stroke-dashoffset: 147;
  }

  100% {
    stroke-dashoffset: 221;
  }
}

@keyframes dot-triangle {
  33% {
    transform: translate(0, 0);
  }

  66% {
    transform: translate(
      calc(var(--lodader-shapes-size) * 0.2273),
      calc((var(--lodader-shapes-size) * 0.41) * -1)
    );
  }

  100% {
    transform: translate(
      calc((var(--lodader-shapes-size) * 0.2273) * -1),
      calc((var(--lodader-shapes-size) * 0.41) * -1)
    );
  }
}

@keyframes path-rect {
  25% {
    stroke-dashoffset: 64;
  }

  50% {
    stroke-dashoffset: 128;
  }

  75% {
    stroke-dashoffset: 192;
  }

  100% {
    stroke-dashoffset: 256;
  }
}

@keyframes dot-rect {
  25% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(
      calc(var(--lodader-shapes-size) * 0.41),
      calc((var(--lodader-shapes-size) * 0.41) * -1)
    );
  }

  75% {
    transform: translate(0, calc((var(--lodader-shapes-size) * 0.8182) * -1));
  }

  100% {
    transform: translate(
      calc((var(--lodader-shapes-size) * 0.41) * -1),
      calc((var(--lodader-shapes-size) * 0.41) * -1)
    );
  }
}

@keyframes path-circle {
  25% {
    stroke-dashoffset: 125;
  }

  50% {
    stroke-dashoffset: 175;
  }

  75% {
    stroke-dashoffset: 225;
  }

  100% {
    stroke-dashoffset: 275;
  }
}
</style>
