<template>
  <section
    id="about"
    class="about"
    data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-once="true"
  >
    <h2 class="heading heading--about">
      <span v-html="$i18n.locale === 'de' ? heading?.de : heading?.en" />
      <span class="heading-dot">.</span>
    </h2>

    <div class="about-content">
      <div class="about__introduction">
        <div class="about__image about__image--introduction">
          <nuxt-img
            :src="imageOfMyself"
            class="image__me"
            alt="Image of Jan-Luca Splettstößer"
          />
        </div>
        <div class="about__introduction-content">
          <p class="introduction__subheading subheading">
            {{ $i18n.locale === 'de' ? subheading?.de : subheading?.en }}
          </p>
          <p
            class="introduction__start"
            v-html="$i18n.locale === 'de' ? intro?.de : intro?.en"
          />

          <p class="introduction__myself">
            {{ $i18n.locale === 'de' ? aboutMe?.de : aboutMe?.en }}
          </p>

          <p class="introduction__interests">
            {{ $i18n.locale === 'de' ? interests?.de : interests?.en }}
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
          <nuxt-img
            :src="backendImage"
            class="image__backend"
            alt="Backend Image"
          />
        </div>
        <div class="about__my-start">
          <p class="first-project">
            {{ $i18n.locale === 'de' ? firstProject?.de : firstProject?.en }}
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
          <nuxt-img
            :src="frontendImage"
            class="image__frontend"
            alt="Frontend Image"
          />
        </div>
        <div class="career__path">
          <p class="career__backend">
            {{ $i18n.locale === 'de' ? backend?.de : backend?.en }}
          </p>

          <p class="career__frontend">
            {{ $i18n.locale === 'de' ? frontend?.de : frontend?.en }}
          </p>

          <p class="career__today">
            {{ $i18n.locale === 'de' ? today?.de : today?.en }}
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
      heading: '',
      imageOfMyself: 'img/about-me.png',
      subheading: '',
      intro: '',
      aboutMe: '',
      interests: '',
      firstProject: '',
      backendImage: 'img/backend.png',
      backend: '',
      frontend: '',
      frontendImage: 'img/ux.png',
      today: '',
    }
  },

  async created() {
    const self = this

    // get html for page from api
    await useFetch(`${this.$config.public.apiBase}/wuxt/v1/slug/about-me`, {
      onResponse({ request, response, options }) {
        const data = response._data.meta

        // get page content from fetched data
        self.heading = formatTranslations(data.heading[0])
        self.subheading = formatTranslations(data.subheading[0])
        self.intro = formatTranslations(data.intro_text[0])
        self.aboutMe = formatTranslations(data.about_text[0])
        self.interests = formatTranslations(data.interests[0])
        self.firstProject = formatTranslations(data.first_project[0])
        self.backend = formatTranslations(data.backend[0])
        self.frontend = formatTranslations(data.frontend[0])
        self.today = formatTranslations(data.today[0])
      },
    })

    this.imageOfMyself = await this.fetchImage('216')
    this.backendImage = await this.fetchImage('217')
    this.frontendImage = await this.fetchImage('218')
  },

  methods: {
    async fetchImage(id) {
      const data = await useFetch(
        `${this.$config.public.apiBase}/wp/v2/media/${id}`,
        {
          onResponse({ request, response, options }) {
            return response._data
          },
        }
      )

      return data.data._value.source_url
    },
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

@include tablet-up {
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

@include tablet-portrait-up {
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
