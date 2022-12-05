<template>
  <BNavItem :class="`nav-item--${navItem.name}`" :to="navItem.link">
    <Icon
      :name="`bi:${navItem.icon}`"
      size="45"
      color="currentColor"
      :class="[`bi-${navItem.icon}`, 'd-xl-none']"
    />
    <span class="nav-link__dash d-xl-none"></span>
    <span class="hover-underline">
      {{ navItem.text }}
    </span>
  </BNavItem>
</template>

<script>
export default {
  props: {
    navItem: {
      type: Object,
      default: () => {}, // eslint-disable-line
      required: true,
    },
  },

  data() {
    return {
      activeClass: 'nav-item--active',
    }
  },

  methods: {
    onClickNavLink() {
      const nav = document.querySelector('.navbar')
      const currentActives = nav.querySelectorAll(`.${this.activeClass}`)

      currentActives.forEach((active) => {
        active.classList.remove(this.activeClass)
      })

      this.$el.classList.add(this.activeClass)
    },
  },
}
</script>

<style lang="scss">
.navbar {
  .navbar-collapse .nav-item {
    &.nav-item--home,
    &.nav-item--skills,
    &.nav-item--contact {
      .nav-link {
        &:hover {
          color: $color-primary;
        }
      }
    }

    .nav-link {
      &:hover {
        color: $color-orange-300;
      }
    }
  }

  .navbar-nav .nav-link {
    color: $color-black;

    &:focus {
      color: $color-black;
    }

    &.active {
      color: $color-black;
    }
  }

  .nav-link {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    cursor: pointer;
    padding: spacing(4) 0 spacing(4) spacing(6);
    font-family: $font-handwriting;
    font-size: 38px;
    font-weight: $font-weight-medium;

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
}

@include tablet-up {
  .navbar {
    .navbar-nav .nav-item {
      flex: 0 0 50%;
    }
  }
}

@include desktop-up {
  .navbar {
    .navbar-collapse .nav-item {
      .nav-link {
        color: $color-white;
        font-size: 28px;
        font-weight: $font-weight-normal;

        &:hover {
          color: $color-white;
        }

        &.active {
          color: $color-white;
        }

        &:focus {
          color: $color-white;
        }
      }

      &.nav-item--home,
      &.nav-item--skills,
      &.nav-item--contact {
        .nav-link {
          &:hover {
            color: $color-white;
          }
        }
      }
    }

    .navbar-nav .nav-item {
      flex: 0 0 auto;

      .nav-link {
        font-size: 32px;
      }
    }

    .nav-item--active {
      .hover-underline {
        &::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      }
    }
  }
}
</style>
