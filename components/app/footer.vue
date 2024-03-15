<template>
  <footer class="footer">
    <v-container class="container--footer">
      <div class="footer__copyright">
        <p>
          © Jan-Luca Splettstößer 2021 - {{ new Date().getFullYear() }}. All
          Rights reserved.
        </p>
        <p v-if="showVersion" class="footer__version">
          spletti.me v5.0.0
        </p>
      </div>
      <div class="footer__links">
        <p>
          <NuxtLink to="/legal" class="footer__link-item hover-underline">
            Impressum - Legal Disclosure
          </NuxtLink>
        </p>
        <p>
          <NuxtLink to="/privacy" class="footer__link-item hover-underline">
            Datenschutzerklärung – Privacy Policy
          </NuxtLink>
        </p>
      </div>
    </v-container>
  </footer>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const { showVersionInFooter } = runtimeConfig.public;

const showVersion = ref(showVersionInFooter);
</script>

<style lang="scss">
.footer {
  position: relative;
  z-index: 2;
  width: 100%;
  @include paddingY(50px);
  background-color: $color-primary-var;
  font-size: $font-size-normal-mobile;
  color: $color-white;

  &__version {
    font-size: 14px;
  }

  .router-link-exact-active {
    display: inline-block;
    position: relative;
    margin-bottom: 0;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(1);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $color-orange-400;
      transform-origin: bottom left;
      transition: transform 0.25s ease-out;
    }
  }
}

.container--footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer__copyright {
  p {
    text-align: center;
    margin-bottom: spacing(6);
  }
}

.footer__links {
  p {
    text-align: center;
    margin-bottom: spacing(4);
  }

  .footer__link-item {
    color: $color-white;
    font-size: inherit;
  }
}

@include tablet-up {
  .footer {
    font-size: $font-size-normal;
  }
}

@include tablet-portrait-up {
  .footer {
    min-height: 350px;
    @include paddingY(100px);

    .footer__copyright {
      margin-bottom: spacing(8);

      p {
        margin-bottom: 0;
      }
    }

    .footer__links {
      display: flex;
      justify-content: center;
      gap: spacing(10);

      p {
        margin-bottom: 0;
      }
    }

    .nav-active {
      &:hover::after {
        transform: scaleX(0);
        transform-origin: bottom right;
      }
    }
  }
}
</style>
