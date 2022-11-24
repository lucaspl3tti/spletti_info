<template>
  <BNavbar
    container="fluid"
    dark="true"
    fixed="top"
    toggleable="xl"
    variant="primary"
  >
    <NavLogo />
    <NavToggle />

    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <NavItem
          v-for="(navItem, index) in navItems"
          :key="index"
          :nav-item="navItem"
        />
      </BNavbarNav>

      <div class="nav-list">
        <div class="change-lang">
          <LanguageSwitch />
        </div>

        <div class="social-list-nav">
          <SocialList icon-size="32" is-nav />
        </div>
      </div>
    </BCollapse>
  </BNavbar>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          name: 'home',
          link: '/',
          text: 'Home',
          icon: 'house',
        },
        {
          name: 'portfolio',
          link: '#portfolio',
          text: 'Portfolio',
          icon: 'window-stack',
        },
        {
          name: 'skills',
          link: '#skills',
          text: 'Skills',
          icon: 'boxes',
        },
        {
          name: 'about',
          link: '#about',
          text: 'About',
          icon: 'chat-left-quote',
        },
        {
          name: 'contact',
          link: '#contact',
          text: 'Contact',
          icon: 'chat-dots',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.navbar {
  top: spacing(2.5);
  width: calc(100vw - spacing(12));
  height: 70px;
  margin: 0 spacing(6);
  background-color: transparent !important;
  border-radius: 15px;

  .container-fluid {
    padding-left: 0;
    padding-right: 0;
  }

  .navbar-collapse {
    width: calc(100vw - 48px);
    background-color: $color-white;
    margin-top: spacing(3);
    border-radius: 25px;
    box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.6);
  }

  .navbar-nav {
    margin-bottom: spacing(8);
  }

  .social-list-nav {
    margin-bottom: spacing(6);
  }

  .hover-underline {
    &::after {
      background-color: $color-white;
    }
  }
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: $breakpoint-lg) {
  .nav-list {
    gap: spacing(5);
    margin-bottom: spacing(6);

    .social-list-nav {
      margin: 0;
    }
  }
}

@media (min-width: $breakpoint-md) {
  .navbar {
    border-radius: 25px;
    font-size: $font-size-small;
    color: $color-white;

    .navbar-nav {
      flex-flow: row wrap;
    }
  }
}

@media (min-width: $breakpoint-xl) {
  .navbar {
    height: 100px;
    box-shadow: 0 0 12px rgba($color: #000000, $alpha: 0.6);
    background-color: $color-primary !important;
    padding: 0 spacing(5);
    font-size: $font-size-normal;

    .navbar-collapse {
      justify-content: flex-end;

      &:not(.show) {
        height: auto !important;

        .navbar-nav {
          display: flex;
        }
      }
    }

    .navbar-nav {
      flex-flow: row nowrap;
      gap: spacing(6);
      margin-bottom: 0;
    }

    .nav {
      margin-right: -15px;
    }

    .navbar-collapse {
      height: auto;
      margin-top: 0;
      box-shadow: none;
      border-radius: 0;
      background-color: transparent;
      padding: spacing(6);
    }

    .change-lang {
      display: flex;
      justify-content: flex-end;
      padding-left: spacing(15);
    }
  }
}
</style>
