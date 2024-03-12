<template>
  <div :class="['c-navigation', isSidebar ? 'c-navigation--sidebar' : '']">
    <div
      v-for="(navItem, index) in navItems"
      :key="index"
      :class="['c-navigation__item', `c-navigation__item--${navItem.name}`]"
    >
      <nuxt-link
        :class="['c-nav-link', `c-nav-link--${navItem.name}`]"
        :to="navItem.link"
      >
        <icon
          v-if="isSidebar"
          :name="`bi:${navItem.icon}`"
          size="45"
          color="currentColor"
          :class="[`bi-${navItem.icon}`]"
        />
        <span v-if="isSidebar" :class="['c-nav-link__dash']"></span>
        <span class="hover-underline">
          {{ navItem.text }}
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line
const properties = defineProps({
  isSidebar: {
    type: Boolean,
    default: false,
  },
})

const navItems = [
  {
    name: 'home',
    link: '/',
    text: 'Home',
    icon: 'house',
  },
  {
    name: 'portfolio',
    link: '/#portfolio',
    text: 'Portfolio',
    icon: 'window-stack',
  },
  {
    name: 'skills',
    link: '/#skills',
    text: 'Skills',
    icon: 'boxes',
  },
  {
    name: 'about',
    link: '/#about',
    text: 'About',
    icon: 'chat-left-quote',
  },
  {
    name: 'contact',
    link: '/#contact',
    text: 'Contact',
    icon: 'chat-dots',
  },
]
</script>

<style lang="scss">
.c-navigation {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: spacing(8);

  &--sidebar {
    flex-flow: column;
    gap: spacing(2);
  }
}

.c-nav-link {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  cursor: pointer;
  // padding: spacing(4) 0 spacing(4) spacing(6);
  color: $color-white;
  font-family: $font-handwriting;
  font-size: 38px;
  font-weight: $font-weight-medium;

    &:hover {
      color: darken($color-white, 20%);
    }

    &:focus {
      color: $color-white;
    }

    &.active {
      color: $color-white;
    }

  &__dash {
    width: 50px;
    height: 2px;
    background-color: $color-black;
    margin: 0 spacing(3);
  }

  .bi {
    &-window-stack,
    &-chat-left-quote {
      color: $color-secondary !important;
    }

    &-house,
    &-boxes,
    &-chat-dots {
      color: $color-primary !important;
    }
  }
}
</style>
