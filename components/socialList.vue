<template>
  <div class="social-list">
    <div class="social-list__dash"></div>

    <div
      v-for="(item, index) in socials"
      :key="index"
      :class="['social-icon-wrapper', `social-icon-wrapper--${item.name}`]"
    >
      <a class="social-icon" :href="item.link">
        <Icon
          :name="`bi:${item.name}`"
          :size="iconSize"
          color="currentColor"
          :class="['bi', `bi-${item.name}`, isNav ? 'd-lg-none' : '']"
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
      socials: [
        {
          name: 'instagram',
          link: 'https://www.instagram.com/luca.spl3tti/',
        },
        {
          name: 'github',
          link: 'https://www.github.com/lucaspl3tti',
        },
        {
          name: 'linkedin',
          link: 'https://www.instagram.com/luca.spl3tti/',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.social-list {
  position: fixed;
  display: none;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  gap: spacing(5);
  left: 2%;
  bottom: 0;
  width: 80px;
  z-index: $z-fixed;

  &__dash {
    order: 4;
    width: 2px;
    height: 100px;
    background-color: $color-secondary;
  }

  .social-icon {
    height: 35px;
    width: 35px;
    color: $color-secondary;

    svg {
      height: 100%;
      width: 100%;
    }

    .bi {
      font-size: inherit;
    }
  }
}

.social-list-nav {
  .social-list {
    position: relative;
    left: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;

    &__dash {
      display: none;
    }

    .social-icon {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      &-wrapper {
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

@media (min-width: $breakpoint-md) {
  .social-list {
    &__dash {
      width: 3px;
      height: 120px;
    }

    .social-icon {
      height: 45px;
      width: 45px;
      transition: transform $animation-speed;

      svg {
        transform: translateY(0);
        transition: transform 0.33s;
      }

      &:hover {
        color: $color-orange-500;

        svg {
          transform: translateY(-4px);
        }
      }

      .bi {
        font-size: inherit;
      }
    }
  }
}

@media (min-width: $breakpoint-lg) {
  .social-list {
    display: flex;
  }

  .social-list-nav {
    .social-list {
      display: none;
    }
  }
}
</style>
