<template>
  <BNavbarToggle
    target="nav-collapse"
    :class="[toggled ? collapseClass : '']"
    @click="onClickNavToggler"
  >
    <svg class="nav-collapse__icon hamburger" viewBox="0 0 100 100" width="60">
      <path
        class="hamburger__line hamburger__line--top"
        d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
      />
      <path
        class="hamburger__line hamburger__line--middle"
        d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
      />
      <path
        class="hamburger__line hamburger__line--bottom"
        d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
      />
    </svg>
  </BNavbarToggle>
</template>

<script>
export default {
  data() {
    return {
      collapseClass: 'collapsed',
      toggled: true,
    }
  },

  mounted() {
    const main = document.querySelector('main')
    const navCollapse = document.querySelector('#nav-collapse')
    const navLinks = navCollapse.querySelectorAll('.nav-link')

    main.addEventListener('click', () => {
      if (this.toggled) return

      this.closeNavCollapse()
    })

    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', () => {
        this.closeNavCollapse()
      })
    })
  },

  methods: {
    onClickNavToggler() {
      if (this.toggled) return (this.toggled = false)

      this.toggled = true
    },

    closeNavCollapse() {
      const navCollapse = document.querySelector('#nav-collapse')
      const isCollapsed = navCollapse.classList.contains('show')

      if (isCollapsed) navCollapse.classList.remove('show')
      this.toggled = true
    },
  },
}
</script>

<style lang="scss">
.navbar .navbar-toggler {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 55px;
  border: 0;
  border-radius: 50%;
  padding: 0;

  .hamburger {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &__line {
      fill: none;
      transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
      stroke: $color-white;
      stroke-width: 5.5;
      stroke-linecap: round;

      &--top {
        stroke-dasharray: 40 172;
        stroke-dashoffset: -132px;
      }

      &--middle {
        stroke-dasharray: 40 111;
        stroke-dashoffset: -71px;
      }

      &--bottom {
        stroke-dasharray: 40 172;
        stroke-dashoffset: -132px;
      }
    }
  }

  &.collapsed {
    .hamburger {
      &__line {
        &--top {
          stroke-dashoffset: 0;
        }

        &--middle {
          stroke-dashoffset: 0;
        }

        &--bottom {
          stroke-dashoffset: 0;
        }
      }
    }
  }
}

@include tablet-portrait-up {
  .navbar .navbar-toggler {
    display: none;
  }
}
</style>
