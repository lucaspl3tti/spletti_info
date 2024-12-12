<template>
  <div
    :class="[
      'jls-app-menu',
      { 'show': isOpen },
    ]"
  >
    <div class="jls-app-menu__wrapper">
      <div v-if="showSocialList" class="jls-app-menu__socials">
        <jls-social-list icon-size="28" is-nav />
      </div>

      <v-divider v-if="showSocialList" />

      <jls-app-nav
        :items="items"
        is-sidebar
        show-icon
        :is-handwriting-font="isHandwritingFont"
        @open-link="onClickCloseSidebar"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AppMenuProperties } from '@/interfaces/components/app.interface';
import { Dom } from '~/src/helper/dom.helper';
import { Formatting } from '~/src/helper/formatting.helper';

const model = defineModel<boolean>({
  default: false,
  required: true,
});

const properties = withDefaults(defineProps<AppMenuProperties>(), {
  items: undefined,
  showSocialList: false,
  isHandwritingFont: false,
});

checkComponentPropertyValidity(properties.items, 'items', 'app-menu', true);

const isOpen = ref(false);
const scrollTop = ref(0);
const scrollLeft = ref(0);

watch(() => model.value, () => {
  if (model.value) {
    return onOpen();
  }

  onClose();
});

function onClickCloseSidebar(): void {
  model.value = false;
}

async function onOpen() {
  const htmlElement = document.documentElement;
  scrollTop.value = htmlElement.scrollTop;
  scrollLeft.value = htmlElement.scrollLeft;
  isOpen.value = true;

  await sleep(330);

  htmlElement.style.setProperty(
    '--c-body-scroll-x',
    `-${Formatting.convertToUnit(scrollTop.value)}`,
  );

  htmlElement.style.setProperty(
    '--c-body-scroll-y',
    `-${Formatting.convertToUnit(scrollLeft.value)}`,
  );

  Dom.addClass(htmlElement, 'jls-app-menu-scroll-blocked');
}

function onClose() {
  const htmlElement = document.documentElement;

  Dom.removeClass(htmlElement, 'jls-app-menu-scroll-blocked');
  htmlElement.scrollTop = scrollTop.value;
  htmlElement.scrollLeft = scrollLeft.value;

  isOpen.value = false;
}
</script>

<style lang="scss">
html.jls-app-menu-scroll-blocked {
  @include absolute-position(
    fixed,
    $top: var(--c-body-scroll-y),
    $left: var(--c-body-scroll-x),
  );
  width: 100%;
  height: 100%;
}

.jls-app-menu {
  @include absolute-position(
    fixed,
    $top: -50%,
    $left: -50%,
    $zIndex: $z-model + 6,
  );
  @include flex($justify: center, $align: center);
  @include size(200dvw, 200dvh);
  pointer-events: none;
  visibility: hidden;
  background-color: transparent;
  transform: rotate(-15deg) translate3d(0, 0, 0);

  &::before,
  &::after {
    content: '';
    display: block;
    @include absolute-position($top: auto, $left: 50%, $zIndex: -1);
    @include size(100%, 80%);
    background-color: $color-primary-var;
    transform-origin: center center;
    transition: all ($animation-speed + 200ms) ease;
    will-change: transform;
  }

  &::before {
    top: 51%;
    transform: translate(100%, -100%) translate3d(0, 0, 0);
  }

  &::after {
    top: 49%;
    transform: translate(-150%, 0%) translate3d(0, 0, 0);
    transition-delay: 100ms;
  }

  &__wrapper {
    @include flex(column, $justify: center);
    @include size(100dvw, 100dvh);
    padding: spacing(8);
    transform: rotate(15deg);
  }

  &__socials,
  .v-divider,
  .jls-app-nav__item {
    opacity: 0;
    transform: translateX(-#{spacing(4)});
    transition:
      opacity ($animation-speed + 200ms),
      transform ($animation-speed + 200ms);
  }

  &__socials {
    padding-bottom: spacing(4) !important;
    overflow: visible !important;
  }

  .v-divider {
    color: $color-white;
  }

  &.show {
    pointer-events: all;
    visibility: visible;

    &::before {
      transform: translate(-50%, -100%) translate3d(0, 0, 0);
      transition-duration: 0ms;
      animation: menu-in-left ($animation-speed + 200ms) ease;
    }

    &::after {
      transform: translate(-50%, 0%) translate3d(0, 0, 0);
      transition-duration: 0ms;
      animation: menu-in-right ($animation-speed + 200ms) ease 100ms;
    }

    .jls-app-menu__socials,
    .v-divider,
    .jls-app-nav__item {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 250ms, transform 250ms;
    }

    .jls-app-menu__socials {
      transition-delay: 300ms;
    }

    .v-divider {
      transition-delay: 350ms;
    }

    @for $index from 1 through 5 {
      .jls-app-nav__item:nth-child(#{$index}) {
        transition-delay: 300ms + (($index + 1) * 50ms);
      }
    }
  }

  .jls-app-nav {
    padding-top: spacing(2);
  }

  .jls-app-nav-link {
    padding: spacing(2) spacing(3);
    color: $color-white;

    .hover-underline {
      background-image: linear-gradient($color-purple-300, $color-purple-300);
    }

    &:first-of-type {
      padding-top: 0;
    }

    &:focus {
      color: $color-white;
    }

    &:not(.active) {
      &:hover {
        color: color.adjust($color-white, $lightness: -20%);
      }
    }

    &.active {
      color: $color-white;
    }

    &__dash {
      background-color: $color-white;
    }

    &--portfolio,
    &--about {
      &:hover {
        color: color.adjust($color-secondary, $lightness: -5%) !important;

        .jls-app-nav-link__dash {
          background-color: color.adjust($color-secondary, $lightness: -5%);
        }

        .nuxt-icon {
          color: color.adjust($color-secondary, $lightness: -5%) !important;
        }

        .hover-underline {
          background-size: 100% 2px;
        }
      }

      .nuxt-icon {
        color: $color-secondary !important;
      }

      .hover-underline {
        background-image: linear-gradient(
          color.adjust($color-secondary, $lightness: -5%),
          color.adjust($color-secondary, $lightness: -5%)
        );
      }
    }

    &--home,
    &--skills,
    &--contact {
      &:hover {
        color: color.adjust($color-orange-010, $lightness: -5%) !important;

        .jls-app-nav-link__dash {
          background-color: color.adjust($color-orange-010, $lightness: -5%);
        }

        .nuxt-icon {
          color: color.adjust($color-orange-010, $lightness: -5%) !important;
        }

        .hover-underline {
          background-size: 100% 2px;
        }
      }

      .nuxt-icon {
        color: $color-orange-010 !important;
      }

      .hover-underline {
        background-image: linear-gradient(
          color.adjust($color-orange-010, $lightness: -5%),
          color.adjust($color-orange-010, $lightness: -5%)
        );
      }
    }

    .bi {
      &-window-stack,
      &-chat-left-quote {
        color: $color-secondary !important;
      }

      &-house,
      &-boxes,
      &-chat-dots {
        color: $color-orange-010 !important;
      }
    }
  }
}

@include tablet-portrait-up {
  .jls-app-menu {
    .jls-app-bar-title {
      box-shadow: none;
      font-size: 38px;
    }
  }
}

@include light-mode {
  .jls-app-menu {
    background-color: rgba($color: $color-purple-550, $alpha: 0.95);
  }
}

// animations
@keyframes menu-in-left {
    0% {
		 transform: translate(-150%, -100%) translate3d(0, 0, 0);
	}

   100% {
		 transform: translate(-50%, -100%) translate3d(0, 0, 0);
	}
}

@keyframes menu-in-right {
   0% {
		 transform: translate(100%, 0%) translate3d(0, 0, 0);
	}

   100% {
		 transform: translate(-50%, 0%) translate3d(0, 0, 0);
	}
}
</style>
