<template>
  <footer class="clb-footer">
    <clb-container class="container--footer">
      <div class="clb-footer__copyright">
        <p>
          © Jan-Luca Splettstößer 2021 - {{ currentYear }}. All Rights reserved.
        </p>

        <p v-if="showVersion" class="clb-footer__version">
          {{ siteTitle }} v{{ appVersion }}
        </p>
      </div>
      <div class="clb-footer__links">
        <p>
          <clb-link
            :to="localePath('legal').toString()"
            theme="light"
            class="clb-footer__link-item"
            title="Impressum - Legal Disclosure"
          >
            Impressum - Legal Disclosure
          </clb-link>
        </p>
        <p>
          <clb-link
            :to="localePath('privacy').toString()"
            theme="light"
            class="clb-footer__link-item"
            title="Datenschutzerklärung – Privacy Policy"
          >
            Datenschutzerklärung – Privacy Policy
          </clb-link>
        </p>
      </div>
    </clb-container>
  </footer>
</template>

<script setup lang=ts>
const localePath = useLocalePath();
const runtimeConfig = useRuntimeConfig();
const { showVersionInFooter, appVersion, siteTitle } = runtimeConfig.public;

const showVersion = ref(showVersionInFooter);
const currentYear: Ref<number|null> = ref(null);

onMounted(() => {
  currentYear.value = new Date().getFullYear();
});
</script>

<style lang="scss">
.clb-footer {
  position: relative;
  z-index: 2;
  width: 100%;
  @include paddingY(50px);
  background-color: $color-primary-var;
  color: $color-white;
  font-size: map.get($clb-font-sizes, 'default', 'md');

  &__version {
    font-size: map.get($clb-font-sizes, 'small', 'xs');
  }
}

.container--footer {
  @include flex(column, $justify: center);
}

.clb-footer__copyright {
  p {
    margin-bottom: spacing(6);
    text-align: center;
  }
}

.clb-footer__links {
  p {
    margin-bottom: spacing(4);
    text-align: center;
  }

  .clb-footer__link-item {
    color: $color-white;
    font-size: inherit;
  }
}

@include tablet-up {
  .clb-footer {
    font-size: map.get($clb-font-sizes, 'default', 'xl');
  }
}

@include tablet-portrait-up {
  .clb-footer {
    min-height: 350px;
    @include paddingY(100px);

    .clb-footer__copyright {
      margin-bottom: spacing(8);

      p {
        margin-bottom: 0;
      }
    }

    .clb-footer__links {
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
