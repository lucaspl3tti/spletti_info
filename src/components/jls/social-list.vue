<template>
  <div :class="['jls-social-list', isNav ? 'jls-social-list--nav' : '']">
    <div
      v-for="(item, key) in socials"
      :key="key"
      :class="['social-icon-wrapper', `social-icon-wrapper--${item.icon}`]"
    >
      <div class="jls-social-list__dash"></div>

      <jls-button
        class="social-icon"
        :href="item.url"
        target="_blank"
        theme="secondary"
        icon-btn
      >
        <jls-icon
          pack="bi"
          :name="item.icon"
          :size="iconSize"
        />

        <jls-tooltip
          :text="item.tooltip"
          theme="light"
          :location="tooltipLocation"
        />
      </jls-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ApiResponse, SocialItem } from '@/interfaces/api.interface';
import type { SocialListProperties } from '@/interfaces/components/misc.interface'; // eslint-disable-line max-len

const properties = withDefaults(defineProps<SocialListProperties>(), {
  iconSize: '24',
  isNav: false,
});

const runtimeConfig = useRuntimeConfig();
const { apiUrl } = runtimeConfig.public;

const socials: Ref<SocialItem[] | null> = ref(null);

const tooltipLocation = computed(() => {
  return properties.isNav ? 'bottom' : 'end';
});

// // get html for page from api
await getSocialList(`${apiUrl}/social-links`);

async function getSocialList(url: string) {
  const response: ApiResponse = await $fetch(url);
  const { data } = response;

  socials.value = data as SocialItem[];
}
</script>

<style lang="scss">
.jls-social-list {
  @include absolute-position(
    $position: fixed,
    $top: auto,
    $bottom: 120px,
    $zIndex: $z-fixed,
  );
  display: none;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  gap: spacing(5);
  width: 122px;

  &__dash {
    @include size(70px, 3px);
    background-color: $color-secondary;
  }

  .social-icon-wrapper {
    @include flex($align: center);
  }

  .v-btn.social-icon {
    position: relative;
    @include size(52px);
    padding: spacing(4);
    overflow: hidden;
    color: $color-white;
    transition: background-color $animation-speed;

    &:hover {
      box-shadow: 0 0 0 24px transparent;
      background-color: $color-orange-500;
      color: $color-white;
      animation: pulse 1s;

      .nuxt-icon {
        transform: scale(1.1);
      }
    }

    &-wrapper {
      @include flex($align: center);
    }

    .nuxt-icon {
      position: relative;
      z-index: 20;
      margin: auto;
      color: inherit;
      font-size: inherit;
      transform: scale(1);
      transition: transform $animation-speed, color $animation-speed;
    }
  }
}

.jls-social-list--nav {
  position: relative;
  bottom: 0;
  @include flex($justify: center);
  width: 100%;

  .jls-social-list__dash {
    display: none;
  }

  .social-icon {
    @include flex($justify: center, $align: center);
    box-shadow: none;
    background-color: transparent;
    color: $color-secondary;

    &-wrapper {
      display: block;
    }

    svg {
      @include size(auto);
      transition: transform 0.33s;
    }
  }
}

@include tablet-portrait-up {
  .jls-social-list {
    display: flex;
  }

  .jls-social-list--nav {
    .jls-social-list {
      display: none;
    }
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 $color-orange-500;
  }
}
</style>
