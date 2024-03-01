<template>
  <BNavbar
    container="fluid"
    dark="true"
    fixed="top"
    toggleable="lg"
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
          <LanguageSwitch :enabled="languageSwitchEnabled" />
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
      ],
      languageSwitchEnabled: this.$config.public.languageSwitchEnabled,
    }
  },
}
</script>

<style lang="scss">
.navbar {
  width: 100%;
  height: 80px;
  margin: 0;
  padding-top: 15px;
  background-color: $color-primary !important;
  border-radius: 0 0 15px 15px;
  box-shadow: 0 0 12px rgba($color: #000000, $alpha: 0.6);

  .container-fluid {
    padding-left: 14px;
    padding-right: 14px;
  }

  .navbar-collapse {
    width: calc(100vw - 48px);
    background-color: $color-white;
    margin-top: spacing(6);
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
      background: $color-white;
    }
  }
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
}

@include tablet-portrait-down {
  .nav-list {
    gap: spacing(5);
    margin-bottom: spacing(6);

    .social-list-nav {
      margin: 0;
    }
  }
}

@include tablet-up {
  .navbar {
    border-radius: 0 0 25px 25px;
    font-size: $font-size-small;
    color: $color-white;

    .navbar-nav {
      flex-flow: row wrap;
    }
  }
}

@include tablet-portrait-up {
  .navbar {
    top: 10px;
    width: calc(100% - spacing(12));
    height: 100px;
    margin: 0 spacing(6);
    border-radius: 25px;
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
      padding-left: spacing(10);
    }
  }
}
</style>
