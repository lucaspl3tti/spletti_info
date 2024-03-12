<template>
  <section
    id="about"
    class="about section"
    data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-once="true"
  >
    <h2 class="heading heading--about">
      <span>{{ getLangText(heading) }}</span>
      <span class="heading-dot">.</span>
    </h2>

    <div class="about-content">
      <div class="about__introduction">
        <div class="about__image about__image--introduction">
          <img
            :src="imageOfMyself"
            class="image__me"
            alt="Image of Jan-Luca Splettstößer"
          />
        </div>
        <div class="about__introduction-content">
          <p class="introduction__subheading subheading">
            {{ getLangText(subheading) }}
          </p>

          <p class="introduction__start" v-html="getLangText(intro)" />

          <p class="introduction__myself">
            {{ getLangText(aboutMe) }}
          </p>

          <p class="introduction__interests">
            {{ getLangText(interests) }}
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
          <img :src="backendImage" class="image__backend" alt="Backend Image" />
        </div>
        <div class="about__my-start">
          <p class="first-project">
            {{ getLangText(firstProject) }}
          </p>
        </div>
      </div>

      <div class="about__career">
        <div class="career__path">
          <p class="career__backend">
            {{ getLangText(backend) }}
          </p>

          <div
            :class="[
              'about__image',
              'about__image--career',
              'about__image--centered-mobile',
            ]"
          >
            <img
              :src="frontendImage"
              class="image__frontend"
              alt="Frontend Image"
            />
          </div>

          <p class="career__frontend">
            {{ getLangText(frontend) }}
          </p>

          <p class="career__today">
            {{ getLangText(today) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n(); // eslint-disable-line

const runtimeConfig = useRuntimeConfig();
const apiUrl = runtimeConfig.public.apiBase;

const heading = ref('');
const imageOfMyself = ref('img/about-me.png');
const subheading = ref('');
const intro = ref('');
const aboutMe = ref('');
const interests = ref('');
const firstProject = ref('');
const backendImage = ref('img/backend.png');
const backend = ref('');
const frontend = ref('');
const frontendImage = ref('img/ux.png');
const today = ref('');

const aboutData = await $fetch(`${apiUrl}/wuxt/v1/slug/about-me`);
handleAboutData(aboutData);

async function handleAboutData(data) {
  const { meta } = data;

  heading.value = formatTranslations(meta.heading[0]);
  subheading.value = formatTranslations(meta.subheading[0]);
  intro.value = formatTranslations(meta.intro_text[0]);
  aboutMe.value = formatTranslations(meta.about_text[0]);
  interests.value = formatTranslations(meta.interests[0]);
  firstProject.value = formatTranslations(meta.first_project[0]);
  backend.value = formatTranslations(meta.backend[0]);
  frontend.value = formatTranslations(meta.frontend[0]);
  today.value = formatTranslations(meta.today[0]);

  imageOfMyself.value = await fetchImage('216');
  backendImage.value = await fetchImage('217');
  frontendImage.value = await fetchImage('218');
}

async function fetchImage(id) {
  const imageData = await $fetch(`${apiUrl}/wp/v2/media/${id}`);
  return imageData.source_url;
}

function getLangText(text) {
  return locale.value === 'de' ? text?.de : text?.en;
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
    }

    .image__backend {
      margin-bottom: spacing(4);
    }

    .image__frontend {
      margin: spacing(4);
    }
  }

  p {
    font-size: 20px;
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
