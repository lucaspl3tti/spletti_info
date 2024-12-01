<template>
  <footer class="footer">
    <jls-container class="container--footer">
      <div class="footer__copyright">
        <p>
          © Jan-Luca Splettstößer 2021 - {{ currentYear }}. All Rights reserved.
        </p>

        <p v-if="showVersion" class="footer__version">
          {{ siteTitle }} v{{ appVersion }}
        </p>
      </div>
      <div class="footer__links">
        <p>
          <jls-link
            to="/legal"
            theme="light"
            class="footer__link-item"
          >
            Impressum - Legal Disclosure
          </jls-link>
        </p>
        <p>
          <jls-link
            to="/privacy"
            theme="light"
            class="footer__link-item"
          >
            Datenschutzerklärung – Privacy Policy
          </jls-link>
        </p>
      </div>
    </jls-container>
  </footer>
</template>

<script setup lang=ts>
const runtimeConfig = useRuntimeConfig();
const { showVersionInFooter, appVersion, siteTitle } = runtimeConfig.public;

const showVersion = ref(showVersionInFooter);
const currentYear: Ref<number|null> = ref(null);

onMounted(() => {
  currentYear.value = new Date().getFullYear();
});
</script>

<style lang="scss">
.footer {
  position: relative;
  z-index: 2;
  width: 100%;
  @include paddingY(50px);
  background-color: $color-primary-var;
  color: $color-white;
  font-size: map.get($font-sizes-copy, 'default', 'md');

  &__version {
    font-size: map.get($font-sizes-copy, 'small', 'xs');
  }
}

.container--footer {
  @include flex(column, $justify: center);
}

.footer__copyright {
  p {
    margin-bottom: spacing(6);
    text-align: center;
  }
}

.footer__links {
  p {
    margin-bottom: spacing(4);
    text-align: center;
  }

  .footer__link-item {
    color: $color-white;
    font-size: inherit;
  }
}

@include tablet-up {
  .footer {
    font-size: map.get($font-sizes-copy, 'default', 'xl');
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
      @include flex(row nowrap, $justify: center, $gap: spacing(10));

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
