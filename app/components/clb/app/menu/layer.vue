<template>
  <div
    :class="[
      'clb-app-menu-layer',
      { 'show': isOpen },
    ]"
  >
    <div class="clb-app-menu-layer__wrapper">
      <div v-if="showSocialList" class="clb-app-menu-layer__socials">
        <clb-social-list icon-size="28" is-nav />
      </div>

      <clb-divider v-if="showSocialList" />

      <clb-app-nav
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
import type { ClbAppMenuLayerProperties } from '@/interfaces/base/app.interface';
import { Dom } from '@helper/dom.helper';
import { Formatting } from '@helper/formatting.helper';

const model = defineModel<boolean>({
  default: false,
  required: true,
});

const properties = withDefaults(defineProps<ClbAppMenuLayerProperties>(), {
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
  isOpen.value = true;

  await delay(330);

  htmlElement.style.setProperty(
    '--c-body-scroll-y',
    `-${Formatting.convertToUnit(scrollLeft.value)}`,
  );

  Dom.addClass(htmlElement, 'clb-app-menu-layer--scroll-blocked');
}

function onClose() {
  const htmlElement = document.documentElement;

  Dom.removeClass(htmlElement, 'clb-app-menu-layer--scroll-blocked');
  htmlElement.scrollTop = scrollTop.value;
  htmlElement.scrollLeft = scrollLeft.value;

  isOpen.value = false;
}
</script>

<style lang="scss">
html.clb-app-menu-layer--scroll-blocked {
  @include position(
    fixed,
    $top: var(--c-body-scroll-y),
    $left: var(--c-body-scroll-x),
  );
  width: 100%;
  height: 100%;
}

.clb-app-menu-layer {
  @include position(
    fixed,
    $top: -50%,
    $left: -50%,
    $zIndex: $z-sticky + 9,
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
    @include position($top: auto, $left: 50%, $zIndex: -1);
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
  .clb-divider-wrapper,
  .clb-app-nav__item {
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

    .clb-app-menu-layer__socials,
    .clb-divider-wrapper,
    .clb-app-nav__item {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 250ms, transform 250ms;
    }

    .clb-app-menu-layer__socials {
      transition-delay: 300ms;
    }

    .clb-divider-wrapper {
      transition-delay: 350ms;
    }

    @for $index from 1 through 5 {
      .clb-app-nav__item:nth-child(#{$index}) {
        transition-delay: 300ms + (($index + 1) * 50ms);
      }
    }
  }

  .clb-app-nav {
    padding-top: spacing(2);
  }

  .clb-app-nav-link {
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
        color: $color-secondary-400 !important;

        .clb-app-nav-link__dash {
          background-color: $color-secondary-400;
        }

        .nuxt-icon {
          color: $color-secondary-400 !important;
        }

        .hover-underline {
          background-size: 100% 2px;
        }
      }

      .nuxt-icon {
        color: $color-secondary-var !important;
      }

      .hover-underline {
        background-image: linear-gradient(
          $color-secondary-400,
          $color-secondary-400
        );
      }
    }

    &--home,
    &--skills,
    &--contact {
      &:hover {
        color: color.adjust($color-orange-010, $lightness: -5%) !important;

        .clb-app-nav-link__dash {
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
        color: $color-secondary-var !important;
      }

      &-house,
      &-boxes,
      &-chat-dots {
        color: $color-orange-010 !important;
      }
    }
  }
}

@include light-mode {
  .clb-app-menu-layer {
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
