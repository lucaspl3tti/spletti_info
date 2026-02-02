<template>
  <footer class="clb-footer">
    <clb-container>
      <div class="clb-footer__content">
        <div class="clb-footer__copyright">
          <p>
            © Jan-Luca Splettstößer 2021 - {{ currentYear }}. All Rights reserved.
          </p>

          <p v-if="showVersion" class="clb-footer__version">
            {{ siteTitle }} v{{ appVersion }}
          </p>
        </div>
        <div class="clb-footer__links">
          <clb-link
            v-for="(link, index) in links"
            :key="index"
            :to="localePath(link.route).toString()"
            theme="light"
            class="clb-footer__link-item"
          >
            {{ link.title }}
          </clb-link>
        </div>
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
const links = [
  {
    route: '/legal',
    title: 'Impressum - Legal Disclosure',
  },
  {
    route: '/privacy',
    title: 'Datenschutzerklärung – Privacy Policy',
  },
];

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

  &__content {
    @include flex(column, $justify: center);
  }

  &__copyright {
    p {
      margin-bottom: spacing(6);
      text-align: center;
    }
  }

  &__version {
    font-size: map.get($clb-font-sizes, 'small', 'xs');
  }

  &__link-item {
    margin-bottom: spacing(4);
  }
}

@include tablet-up {
  .clb-footer {
    font-size: map.get($clb-font-sizes, 'default', 'md');
  }
}

@include tablet-portrait-up {
  .clb-footer {
    min-height: 350px;
    @include paddingY(100px);

    &__copyright {
      margin-bottom: spacing(8);

      p {
        margin-bottom: 0;
      }
    }

    &__links {
      @include flex(row nowrap, $justify: center, $gap: spacing(10));
    }

    &__link-item {
      margin-bottom: 0;
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
