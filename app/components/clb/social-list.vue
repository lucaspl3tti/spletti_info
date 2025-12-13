<template>
  <div :class="['clb-social-list', isNav ? 'clb-social-list--nav' : '']">
    <div
      v-for="(item, key) in socials"
      :key="key"
      :class="['social-icon-wrapper', `social-icon-wrapper--${item.icon}`]"
    >
      <div class="clb-social-list__dash"></div>

      <clb-button
        :id="`${socialIconBaseId}-${item.icon}`"
        class="social-icon"
        :href="item.url"
        target="_blank"
        border-style="pill"
        theme="secondary"
        size="lg"
        is-icon-btn
        :title="item.tooltip"
      >
        <clb-icon
          pack="bi"
          :name="item.icon"
          :size="iconSize"
        />
      </clb-button>

      <clb-tooltip
        v-model="item.showTooltip"
        :target="`${socialIconBaseId}-${item.icon}`"
        :placement="tooltipLocation"
        theme="dark"
      >
        {{ item.tooltip }}
      </clb-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PimcoreApiResponse } from '@/interfaces/base/api.interface';
import type {
  ClbSocialListItem,
  ClbSocialListProperties,
} from '@/interfaces/components/social-list.interface';
import Utilities from '@helper/utilities.helper';

const properties = withDefaults(defineProps<ClbSocialListProperties>(), {
  iconSize: '24',
  isNav: false,
});

checkComponentPropertyValidity(properties.iconSize, 'icon-size', 'social-list', true);

const runtimeConfig = useRuntimeConfig();
const { apiUrl } = runtimeConfig.public;

const socials: Ref<ClbSocialListItem[]|null> = ref(null);
const tooltipLocation = computed(() => {
  return properties.isNav ? 'bottom' : 'right';
});
const socialIconBaseId = computed(() => {
  return properties.isNav ? 'socialShareIconNav' : 'socialShareIcon';
});

await getSocialList(`${apiUrl}/social-links`);

async function getSocialList(url: string): Promise<void> {
  const response: PimcoreApiResponse = await $fetch(url);
  const { data } = response;
  const socialItems: ClbSocialListItem[] = [];

  Utilities.iterate(data, (item) => {
    socialItems.push({
      showTooltip: false,
      ...item,
    });
  });

  socials.value = socialItems;
}
</script>

<style lang="scss" scoped>
.clb-social-list {
  @include position(
    $position: fixed,
    $top: auto,
    $bottom: 120px,
    $zIndex: $z-fixed - 10,
  );
  display: none;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  gap: spacing(5);
  width: 70px;

  &__dash {
    @include size(20px, 3px);
    background-color: $color-secondary-var;
  }

  .social-icon-wrapper {
    @include flex($align: center);
  }

  .social-icon {
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

      :deep(.nuxt-icon) {
        transform: scale(1.1);
      }
    }

    :deep(.nuxt-icon) {
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

.clb-social-list--nav {
  position: relative;
  bottom: 0;
  @include flex($justify: center);
  width: 100% !important;

  .clb-social-list__dash {
    display: none;
  }

  .social-icon {
    &-wrapper {
      display: block;
    }

    :deep(.nuxt-icon) {
      transition: transform 0.33s;
    }
  }
}

@include tablet-portrait-up {
  .clb-social-list {
    display: flex;
  }

  .clb-social-list--nav {
    .clb-social-list {
      display: none;
    }
  }
}

@include desktop-up {
  .clb-social-list {
    width: 105px;

    &__dash {
      width: 55px;
    }
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 $color-orange-500;
  }
}
</style>
