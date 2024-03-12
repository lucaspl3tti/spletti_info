<template>
  <div :class="['social-list', isNav ? 'social-list--nav' : '']">
    <div
      v-for="(item, key) in socials"
      :key="key"
      :class="['social-icon-wrapper', `social-icon-wrapper--${item.icon}`]"
    >
      <div class="social-list__dash"></div>

      <jls-button
        class="social-icon"
        :href="item.link"
        target="_blank"
        theme="secondary"
        rounded
        icon-btn
      >
        <icon
          :name="`bi:${item.icon}`"
          :size="iconSize"
          color="currentColor"
          :class="['c-icon', `c-icon--${item.icon}`]"
        />
      </jls-button>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line
const properties = defineProps({
  iconSize: {
    type: String || Number,
    default: '24',
  },
  isNav: {
    type: Boolean,
    default: false,
  },
})

// const runtimeConfig = useRuntimeConfig()
// const { apiBase } = runtimeConfig.public
// const socialListApiUrl = `${apiBase}/wuxt/v1/slug/social-links`

// define fallbacks
const socials = {
  socialLink1: {
    icon: 'instagram',
    link: 'https://www.instagram.com/luca.spl3tti/',
  },
  socialLink2: {
    icon: 'github',
    link: 'https://www.github.com/lucaspl3tti',
  },
  socialLink3: {
    icon: 'linkedin',
    link:
      'https://www.linkedin.com/in/jan-luca-splettst%C3%B6%C3%9Fer-105966212/',
  },
};

// // get html for page from api
// const data = await getSocialList(socialListApiUrl)

// console.log('response data', data)

// socials.socialLink1 = data.value.meta.social_links['socialLink#1']
// socials.socialLink2 = data.value.meta.social_links['socialLink#2']
// socials.socialLink3 = data.value.meta.social_links['socialLink#3']

// async function getSocialList(apiUrl) {
//   const { data } = await useFetch(apiUrl, {
//     onResponse({ request, response, options }) {
//       console.log(response)
//       return response._data
//     },
//   })

//   console.log(data)

//   return data
// }
</script>

<style lang="scss">
.social-list {
  @include absolute-position($position: fixed, $top: auto, $bottom: 120px);
  display: none;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  gap: spacing(5);
  width: 80px;
  z-index: $z-fixed;

  &__dash {
    height: 3px;
    width: 70px;
    background-color: $color-secondary;
  }

  .social-icon-wrapper {
    display: flex;
    align-items: center;
  }

  .v-btn.social-icon {
    position: relative;
    height: 52px;
    width: 52px;
    padding: 16px;
    color: $color-white;
    overflow: hidden;
    transition: background-color $animation-speed;

    &:hover {
      background-color: $color-orange-500;
      color: $color-white;
      animation: pulse 1s;
      box-shadow: 0 0 0 24px transparent;

      .c-icon {
        transform: scale(1.1);
      }
    }

    &-wrapper {
      display: flex;
      align-items: center;
    }

    .c-icon {
      position: relative;
      margin: auto;
      color: inherit;
      font-size: inherit;
      transform: scale(1);
      transition: transform $animation-speed, color $animation-speed;
      z-index: 20;
    }

    // &:hover {
    //   color: $color-white;

    //   svg {
    //     transform: translateY(-4px);
    //   }
    // }
  }
}

.social-list--nav {
  position: relative;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;

  .social-list__dash {
    display: none;
  }

  .social-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    box-shadow: none;
    color: $color-secondary;

    &-wrapper {
      display: block;
    }

    svg {
      height: auto;
      width: auto;
      transition: transform 0.33s;
    }
  }
}

@include tablet-portrait-up {
  .social-list {
    display: flex;
  }

  .social-list--nav {
    .social-list {
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
