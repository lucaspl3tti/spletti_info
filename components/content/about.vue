<template>
  <section
    id="about"
    class="about"
    data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-once="true"
  >
    <h2 class="heading heading--about">
      {{ $t('about.heading') }}<span class="heading-dot">.</span>
    </h2>

    <div class="about-content">
      <div class="about__introduction">
        <div class="about__image about__image--introduction">
          <img :src="images.me" class="image__me" />
        </div>
        <div class="about__introduction-content">
          <p class="introduction__subheading subheading">
            {{ $t('about.subheading') }}
          </p>
          <p class="introduction__start" v-html="$t('about.intro')" />

          <p class="introduction__myself">
            {{ $t('about.aboutMe') }}
          </p>

          <p class="introduction__interests">
            {{ $t('about.interests') }}
          </p>
        </div>
      </div>

      <div class="about__beginning">
        <div
          :class="[
            'about__image',
            'about__image--beginning',
            'about__image--centered-mobile',
          ]"
        >
          <img :src="images.backend" class="image__backend" />
        </div>
        <div class="about__my-start">
          <p class="first-project">
            {{ $t('about.firstProject') }}
          </p>
        </div>
      </div>

      <div class="about__career">
        <div
          :class="[
            'about__image',
            'about__image--career',
            'about__image--centered-mobile',
          ]"
        >
          <img :src="images.frontend" class="image__frontend" />
        </div>
        <div class="career__path">
          <p class="career__backend">
            {{ $t('about.backend') }}
          </p>

          <p class="career__frontend">
            {{ $t('about.frontend') }}
          </p>

          <p class="career__today">
            {{ $t('about.today') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: {
        me: 'img/about-me.png',
        backend: 'img/backend.png',
        frontend: 'img/ux.png',
      },
    }
  },
}
</script>

<style lang="scss">
.about {
  margin-top: spacing(25);

  &__name {
    font-size: 24px;
  }

  &__image {
    display: flex;

    &--centered-mobile {
      justify-content: center;
    }

    &--introduction {
      margin-bottom: spacing(6);
    }

    .image__backend,
    .image__frontend {
      width: 60%;
      align-self: center;
      margin-bottom: spacing(4);
    }
  }
}

.heading--about {
  text-align: center;
  margin-bottom: spacing(10);
}

.introduction {
  &__subheading {
    margin: 0;
    font-size: $font-size-h3-mobile;
  }

  &__start {
    font-size: $font-size-normal;
  }
}

@media (min-width: $breakpoint-md) {
  .about {
    &__image {
      &--introduction {
        max-width: 40%;
        float: left;
        margin-bottom: 0;
        margin-right: spacing(6);
      }

      &--beginning {
        max-width: 40%;
        float: right;
        margin-left: spacing(6);
      }

      &--career {
        max-width: 35%;
        float: left;
        margin-right: spacing(6);
      }

      .image__backend,
      .image__frontend {
        width: 100%;
      }
    }

    &__introduction-content {
      margin-bottom: spacing(4);
    }

    &__beginning {
      clear: left;
    }

    &__career {
      clear: right;
    }
  }
}

@media (min-width: $breakpoint-lg) {
  .about {
    &__beginning,
    &__career {
      clear: none;
    }

    &__image {
      &--introduction {
        max-width: 15%;
      }

      &--beginning {
        max-width: 12%;
      }

      &--career {
        max-width: 12%;
      }
    }
  }
}
</style>
