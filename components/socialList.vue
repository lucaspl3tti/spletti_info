<template>
  <div class="social-list">
    <!-- <div class="social-list__dash"></div> -->

    <div
      v-for="(item, key) in socials"
      :key="key"
      :class="['social-icon-wrapper', `social-icon-wrapper--${item.icon}`]"
    >
      <div class="social-list__dash"></div>

      <a class="social-icon" :href="item.link">
        <Icon
          :name="`bi:${item.icon}`"
          :size="iconSize"
          color="currentColor"
          :class="['bi', `bi-${item.icon}`, isNav ? 'd-lg-none' : '']"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconSize: {
      type: String || Number,
      default: '24',
    },
    isNav: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      socials: {
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
          link: 'https://www.linkedin.com/in/jan-luca-splettst%C3%B6%C3%9Fer-105966212/',
        },
      },
    }
  },

  async created() {
    const self = this

    // get html for page from api
    await useFetch(`${this.$config.public.apiBase}/wuxt/v1/slug/social-links`, {
      onResponse({ request, response, options }) {
        const data = response._data
        const socialLink1 = data.social_links['socialLink#1']
        const socialLink2 = data.social_links['socialLink#2']
        const socialLink3 = data.social_links['socialLink#3']

        // get page content from fetched data
        self.socials.socialLink1 = socialLink1
        self.socials.socialLink2 = socialLink2
        self.socials.socialLink3 = socialLink3
      },
    })
  },
}
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

  .social-icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: $color-secondary;
    height: 45px;
    width: 45px;
    color: $color-white;
    overflow: hidden;
    transition: background-color $animation-speed;

    &:hover {
      background-color: $color-orange-500;
      color: $color-white;
      animation: pulse 1s;
      box-shadow: 0 0 0 24px transparent;

      .bi {
        transform: scale(1.1);
      }
    }

    &-wrapper {
      display: flex;
      align-items: center;
    }

    .bi {
      position: relative;
      height: 60%;
      width: 60%;
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

.social-list-nav {
  .social-list {
    position: relative;
    bottom: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;

    &__dash {
      display: none;
    }

    .social-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      color: $color-secondary;

      &-wrapper {
        display: block;
        width: 45px;
        height: 45px;
      }

      svg {
        height: auto;
        width: auto;
        transition: transform 0.33s;
      }
    }
  }
}

@include tablet-portrait-up {
  .social-list {
    display: flex;
  }

  .social-list-nav {
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
