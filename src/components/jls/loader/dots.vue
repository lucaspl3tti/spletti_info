<template>
  <div
    :class="[
      'jls-loader-dots',
      `jls-loader-dots--${theme}`,
      `jls-loader-dots--${size}`,
      `dots-${variant}`,
    ]"
  >
    <div v-if="variant === 'growing'" class="jls-loader-dots__wrapper">
      <div
        v-for="number in 3"
        :key="`jls-loader-dots-item-${number}`"
        class="jls-loader-dots__circle"
      >
        <div class="jls-loader-dots__circle-dot"></div>
        <div class="jls-loader-dots__circle-outline"></div>
      </div>
    </div>

    <div
      v-else-if="variant === 'spinning'"
      class="jls-loader-dots__wrapper"
    >
      <div
        v-for="number in 8"
        :key="`jls-loader-dots-item-${number}`"
        class="jls-loader-dots__item"
      />
    </div>

    <div
      v-else-if="variant === 'jumping'"
      class="jls-loader-dots__wrapper"
    >
      <div
        v-for="number in 3"
        :key="`jls-loader-dots-item-${number}`"
        class="jls-loader-dots__item"
      />

      <div
        v-for="number in 3"
        :key="`jls-loader-dots-shadow-${number}`"
        class="jls-loader-dots__shadow-item"
      />
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

.jls-loader-dots {
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

    &.jls-loader-dots--x-small {
      --dots-gap: calc(var(--dots-size) / 1.5);
    }

    &.jls-loader-dots--small {
      --dots-gap: calc(var(--dots-size) / 2);
    }

    &.jls-loader-dots--large {
      --dots-size: 30px;
    }

    &.jls-loader-dots--x-large {
      --dots-size: 45px;
    }

    &.jls-loader-dots--large,
    &.jls-loader-dots--x-large {
      --dots-gap: calc(var(--dots-size) / 3);
    }

    .jls-loader-dots__wrapper {
      @include flex($justify: center, $align: center);

      .jls-loader-dots__circle {
        position: relative;
        @include flex($justify: center, $align: center);
        @include size(var(--dots-size));
        margin: 0 var(--dots-gap);
        border: solid 2px var(--dots-color);
        border-radius: 50%;
        background-color: transparent;
        animation: growing-dots-circle 2s ease-in-out infinite;

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
          animation: growing-dots-dot 2s ease-in-out infinite;
        }

        &-outline {
          position: absolute;
          @include size(var(--dots-size));
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: growing-dots-dots-outline 2s ease-in-out infinite;
        }
      }
    }
  }

  &.dots-spinning {
    --dots-size: 3rem;
    --dots-speed: .9s;
    --dots-shadow-color: rgb(#{$color-secondary} / 0.6);

    .jls-loader-dots__wrapper {
      position: relative;
      @include flex($justify: flex-start, $align: center);
      @include size(var(--dots-size));
    }

    &.jls-loader-dots--x-small {
      --dots-size: 1rem;
    }

    &.jls-loader-dots--small {
      --dots-size: 2rem;
    }

    &.jls-loader-dots--large {
      --dots-size: 4rem;
    }

    &.jls-loader-dots--x-large {
      --dots-size: 5rem;
    }

    .jls-loader-dots__item {
      @include absolute-position($top: 0, $left: 0);
      @include flex($justify: flex-start, $align: center);
      @include size(100%);

      &::before {
        content: '';
        opacity: 0.5;
        @include size(20%);
        box-shadow: 0 0 20px var(--dots-shadow-color);
        border-radius: 50%;
        background-color: var(--dots-color);
        transform: scale(0);
        animation: spinning-dots calc(var(--dots-speed) * 1.111) ease-in-out
          infinite;
      }

      @for $index from 2 through 8 {
        &:nth-child(#{$index}) {
          transform: rotate(($index - 1) * 45deg);

          &::before {
            animation-delay: calc(
              var(--dots-speed) * #{-1 + ($index - 1) * 0.125}
            );
          }
        }
      }
    }
  }

  &.dots-jumping {
    --dots-wrapper-width: 200px;
    --dots-wrapper-height: 60px;
    --dots-size: 20px;
    --dots-shadow-width: 20px;
    --dots-shadow-height: 4px;
    --dots-shadow-color: #{rgba($color-black, $alpha: 0.9)};
    
    .jls-loader-dots__wrapper {
      position: relative;
      @include size(var(--dots-wrapper-width), var(--dots-wrapper-height));
    }

    &.jls-loader-dots--x-small {
      .jls-loader-dots__wrapper {
        --dots-wrapper-width: 80px;
        --dots-wrapper-height: 20px;
        --dots-size: 7px;
        --dots-shadow-width: 7px;
        --dots-shadow-height: 2px;
      }
    }

    &.jls-loader-dots--small {
      .jls-loader-dots__wrapper {
        --dots-wrapper-width: 140px;
        --dots-wrapper-height: 40px;
        --dots-size: 14px;
        --dots-shadow-width: 14px;
        --dots-shadow-height: 4px;
      }
    }

    &.jls-loader-dots--large {
      .jls-loader-dots__wrapper {
        --dots-wrapper-width: 260px;
        --dots-wrapper-height: 80px;
        --dots-size: 26px;
        --dots-shadow-width: 26px;
        --dots-shadow-height: 6px;
      }
    }

    &.jls-loader-dots--x-large {
      .jls-loader-dots__wrapper {
        --dots-wrapper-width: 320px;
        --dots-wrapper-height: 100px;
        --dots-size: 34px;
        --dots-shadow-width: 34px;
        --dots-shadow-height: 8px;
      }
    }

    .jls-loader-dots__item {
      position: absolute;
      @include size(var(--dots-size));
      border-radius: 50%;
      background-color: var(--dots-color);
      transform-origin: 50%;
      animation: jumping-dots .5s alternate infinite ease;

      &:nth-child(1) {
        left: 15%;
      }

      &:nth-child(2) {
        left: 45%;
        animation-delay: .2s;
      }

      &:nth-child(3) {
        right: 15%;
        left: auto;
        animation-delay: .3s;
      }
    }

    .jls-loader-dots__shadow-item {
      @include absolute-position(
        $top: calc(var(--dots-wrapper-height) + 2px),
        $left: 0,
        $zIndex: -1,
      );
      @include size(var(--dots-shadow-width), var(--dots-shadow-height));
      border-radius: 50%;
      background-color: var(--dots-shadow-color);
      transform-origin: 50%;
      animation: jumping-dots-shadow .5s alternate infinite ease;
      filter: blur(1px);

      &:nth-child(4) {
        left: 45%;
        animation-delay: .2s
      }

      &:nth-child(5) {
        right: 15%;
        left: auto;
        animation-delay: .3s
      }

      &:nth-child(6) {
        left: 15%;
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
    animation: dots-flashing 1s infinite linear alternate;
    animation-delay: 0.5s;

    &::before,
    &::after {
      animation: dots-flashing 1s infinite alternate;
    }

    &::before {
      animation-delay: 0s;
    }

    &::after {
      animation-delay: 1s;
    }
  }

  &.dots-elastic {
    animation: dots-elastic 1s infinite linear;

    &::before {
      animation: dots-elastic-before 1s infinite linear;
    }

    &::after {
      animation: dots-elastic-after 1s infinite linear;
    }
  }

  &.dots-collision {
    &::before {
      animation: dots-collision-before 2s infinite ease-in;
    }

    &::after {
      animation: dots-collision-after 1s infinite ease-in;
    }
  }

  &.dots-typing {
    animation: dots-typing 1.3s linear infinite;
    animation-delay: -1.1s;

    &::before,
    &::after {
      animation: dots-typing 1.3s linear infinite;
    }

    &::before {
      animation-delay: 1.3s;
    }

    &::after {
      animation-delay: -0.9s;
    }
  }
}

@keyframes dots-flashing {
  0% {
    background-color: $color-purple-300;
  }

  50%, 100% {
    background-color: rgba($color: $color-purple-300, $alpha: 0.33);
  }
}

@keyframes dots-elastic-before {
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

@keyframes dots-elastic {
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

@keyframes dots-elastic-after {
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

@keyframes dots-collision-before{
  0%, 50%, 75%, 100% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-15px);
  }
}

@keyframes dots-collision-after {
  0%, 50%, 75%, 100% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(15px);
  }
}

@keyframes dots-typing {
  0%, 60%, 100% {
		transform: initial;
	}

	30% {
		transform: translateY(-7px);
	}
}

@keyframes growing-dots-circle {
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

@keyframes growing-dots-dot {
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

@keyframes growing-dots-dots-outline {
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

@keyframes spinning-dots {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(0);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes jumping-dots {
  0% {
    top: var(--dots-wrapper-height);
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }

  40% {
    height: calc(var(--dots-wrapper-height) / 3);
    border-radius: 50%;
    transform: scaleX(1);
  }

  100% {
    top: 0%;
  }
}

@keyframes jumping-dots-shadow {
  0% {
    transform: scaleX(1.5);
  }

  40% {
    opacity: .7;
    transform: scaleX(1);
  }

  100% {
    opacity: .4;
    transform: scaleX(.2);
  }
}
</style>
