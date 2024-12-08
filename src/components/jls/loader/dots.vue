<template>
  <div
    :class="[
      'jls-loader-block-dots',
      `jls-loader-block-dots--${theme}`,
      `jls-loader-block-dots--${size}`,
      `dots-${variant}`,
    ]"
  >
    <div v-if="variant === 'growing'" class="jls-loader-block-dots__wrapper">
      <div
        v-for="number in 3"
        :key="`jls-loader-block-dots-item-${number}`"
        class="jls-loader-block-dots__circle"
      >
        <div class="jls-loader-block-dots__circle-dot"></div>
        <div class="jls-loader-block-dots__circle-outline"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LoaderDotsProperties } from '~/src/interfaces/components/misc.interface'; // eslint-disable-line max-len
import { loaderDotsVariants, sizeOptions, themeOptions } from '~/src/consts/misc'; // eslint-disable-line max-len

const properties = withDefaults(defineProps<LoaderDotsProperties>(), {
  variant: 'flashing',
  theme: 'light',
  size: 'default',
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.variant, 'variant', 'loader-dots', true, loaderDotsVariants);
checkComponentPropertyValidity(properties.theme, 'theme', 'loader-dots', true, themeOptions);
checkComponentPropertyValidity(properties.size, 'size', 'loader-dots', true, [...sizeOptions, 'default']);
/* eslint-enable max-len */
</script>

<style lang="scss">
$loader-dots-border-radius: 50%;

.jls-loader-block-dots {
  --dots-color: #{$color-white};
  --dots-size: 20px;
  --dots-gap: 25px;

  &--primary {
    --dots-color: #{$color-primary};
  }

  &--secondary {
    --dots-color: #{$color-secondary};
  }

  &--dark {
    --dots-color: #{$color-black};
  }

  &--x-small {
    --dots-size: 10px;
    --dots-gap: 15px;
  }

  &--small {
    --dots-size: 15px;
    --dots-gap: 20px;
  }

  &--large {
    --dots-size: 40px;
    --dots-gap: 50px;
  }

  &--x-large {
    --dots-size: 60px;
    --dots-gap: 80px;
  }

  &.dots-growing {
    --dots-gap: calc(var(--dots-size) / 2.5);

    &.jls-loader-block-dots--x-small {
      --dots-gap: calc(var(--dots-size) / 1.5);
    }

    &.jls-loader-block-dots--small {
      --dots-gap: calc(var(--dots-size) / 2);
    }

    &.jls-loader-block-dots--large {
      --dots-size: 30px;
    }

    &.jls-loader-block-dots--x-large {
      --dots-size: 45px;
    }

    &.jls-loader-block-dots--large,
    &.jls-loader-block-dots--x-large {
      --dots-gap: calc(var(--dots-size) / 3);
    }

    .jls-loader-block-dots__wrapper {
      @include flex($justify: center, $align: center);

      .jls-loader-block-dots__circle {
        position: relative;
        @include flex($justify: center, $align: center);
        @include size(var(--dots-size));
        margin: 0 var(--dots-gap);
        border: solid 2px var(--dots-color);
        border-radius: 50%;
        background-color: transparent;
        animation: growing-circle 2s ease-in-out infinite;

        &:nth-child(1) {
          .outline {
            animation-delay: 0.9s;
          }
        }

        &:nth-child(2) {
          animation-delay: 0.3s;

          .dot {
            animation-delay: 0.3s;
          }

          .outline {
            animation-delay: 1.2s;
          }
        }

        &:nth-child(3) {
          animation-delay: 0.6s;

          .dot {
            animation-delay: 0.6s;
          }

          .outline {
            animation-delay: 1.5s;
          }
        }

        &:nth-child(4) {
          animation-delay: 0.9s;

          .dot {
            animation-delay: 0.9s;
          }

          .outline {
            animation-delay: 1.8s;
          }
        }

        &:nth-child(5) {
          animation-delay: 1.2s;

          .dot {
            animation-delay: 1.2s;
          }

          .outline {
            animation-delay: 2.1s;
          }
        }

        &-dot {
          position: absolute;
          @include size(calc(var(--dots-size) * 0.8));
          border-radius: 50%;
          background-color: var(--dots-color);
          transform: translate(-50%, -50%);
          animation: growing-dot 2s ease-in-out infinite;
        }

        &-outline {
          position: absolute;
          @include size(var(--dots-size));
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: growing-outline 2s ease-in-out infinite;
        }
      }
    }
  }

  &.dots-flashing,
  &.dots-flashing::before,
  &.dots-flashing::after,
  &.dots-elastic,
  &.dots-elastic::before,
  &.dots-elastic::after,
  &.dots-collision,
  &.dots-collision::before,
  &.dots-collision::after,
  &.dots-typing,
  &.dots-typing::before,
  &.dots-typing::after {
    width: var(--dots-size);
    height: var(--dots-size);
    border-radius: $loader-dots-border-radius;
    background-color: var(--dots-color);
    color: var(--dots-color);
  }

  &.dots-flashing,
  &.dots-elastic,
  &.dots-collision,
  &.dots-typing {
    position: relative;
  }

  &.dots-flashing::before,
  &.dots-flashing::after,
  &.dots-elastic::before,
  &.dots-elastic::after,
  &.dots-collision::before,
  &.dots-collision::after,
  &.dots-typing::before,
  &.dots-typing::after {
    content: '';
    @include absolute-position($top: 0, $left: auto);
    display: inline-block;
  }

  &.dots-flashing::before,
  &.dots-elastic::before,
  &.dots-collision::before,
  &.dots-typing::before {
    left: calc(var(--dots-gap) * -1);
  }

  &.dots-flashing::after,
  &.dots-elastic::after,
  &.dots-collision::after,
  &.dots-typing::after {
    left: var(--dots-gap);;
  }

  &.dots-flashing {
    animation: dot-flashing 1s infinite linear alternate;
    animation-delay: 0.5s;

    &::before,
    &::after {
      animation: dot-flashing 1s infinite alternate;
    }

    &::before {
      animation-delay: 0s;
    }

    &::after {
      animation-delay: 1s;
    }
  }

  &.dots-elastic {
    animation: dot-elastic 1s infinite linear;

    &::before {
      animation: dot-elastic-before 1s infinite linear;
    }

    &::after {
      animation: dot-elastic-after 1s infinite linear;
    }
  }

  &.dots-collision {
    &::before {
      animation: dot-collision-before 2s infinite ease-in;
    }

    &::after {
      animation: dot-collision-after 1s infinite ease-in;
    }
  }

  &.dots-typing {
    animation: dot-typing 1.3s linear infinite;
    animation-delay: -1.1s;

    &::before,
    &::after {
      animation: dot-typing 1.3s linear infinite;
    }

    &::before {
      animation-delay: 1.3s;
    }

    &::after {
      animation-delay: -0.9s;
    }
  }
}

@keyframes dot-flashing {
  0% {
    background-color: $color-purple-300;
  }

  50%, 100% {
    background-color: rgba($color: $color-purple-300, $alpha: 0.33);
  }
}

@keyframes dot-elastic-before {
  0% {
    transform: scale(1, 1);
  }

  25% {
    transform: scale(1, 1.5);
  }

  50% {
    transform: scale(1, 0.67);
  }

  75% {
    transform: scale(1, 1);
  }

  100% {
    transform: scale(1, 1);
  }
}

@keyframes dot-elastic {
  0% {
    transform: scale(1, 1);
  }

  25% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1, 1.5);
  }

  75% {
    transform: scale(1, 1);
  }

  100% {
    transform: scale(1, 1);
  }
}

@keyframes dot-elastic-after {
  0% {
    transform: scale(1, 1);
  }

  25% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1, 0.67);
  }

  75% {
    transform: scale(1, 1.5);
  }

  100% {
    transform: scale(1, 1);
  }
}

@keyframes dot-collision-before {
  0%, 50%, 75%, 100% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-15px);
  }
}

@keyframes dot-collision-after {
  0%, 50%, 75%, 100% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(15px);
  }
}

@keyframes dot-typing {
  0%, 60%, 100% {
		transform: initial;
	}

	30% {
		transform: translateY(-7px);
	}
}

@keyframes growing-circle {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.5);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes growing-dot {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes growing-outline {
  0% {
    opacity: 1;
    outline: solid 20px var(--dots-color);
    outline-offset: 0;
    transform: scale(0);
  }

  100% {
    opacity: 0;
    outline: solid 0 transparent;
    outline-offset: 20px;
    transform: scale(1);
  }
}
</style>
