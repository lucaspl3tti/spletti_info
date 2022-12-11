<template>
  <BNavbarToggle
    target="nav-collapse"
    :class="[toggled ? collapseClass : '']"
    @click="onClickNavToggler"
  >
    <div class="collapse-menu-icon half start"></div>
    <div class="collapse-menu-icon"></div>
    <div class="collapse-menu-icon half end"></div>
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
  flex-flow: column;
  justify-content: space-between;
  height: 55px;
  width: 55px;
  padding: spacing(3);
  background-color: $color-primary;
  box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.6);
  border-radius: 50%;
  transform: rotate(-45deg);
  transition: transform 0.33s ease-out;

  .collapse-menu-icon {
    background-color: $color-white;
    border-radius: 5px;
    width: 100%;
    height: 5px;

    &.half {
      width: 50%;
    }

    &.start {
      transform: rotate(-90deg) translateX(3px);
      transform-origin: right;
      transition: transform 0.33s cubic-bezier(0.54, -0.81, 0.57, 0.57);
    }

    &.end {
      align-self: flex-end;
      transform: rotate(-90deg) translateX(-3px);
      transform-origin: left;
      transition: transform 0.33s cubic-bezier(0.54, -0.81, 0.57, 0.57);
    }
  }

  &.collapsed {
    transform: rotate(0);

    .collapse-menu-icon {
      &.start {
        transform: rotate(0) translateX(0);
      }

      &.end {
        transform: rotate(0) translateX(0);
      }
    }
  }

  .bi {
    color: $color-white;
    font-size: 30px;
    transition: font-size 0.33s, opacity 0.33s;

    &-list {
      display: none;
    }

    &-x {
      display: block;
    }
  }
}

@include tablet-portrait-up {
  .navbar .navbar-toggler {
    display: none;
  }
}
</style>
