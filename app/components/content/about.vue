<template>
  <clb-section
    id="about"
    name="about"
    :title="aboutData?.basic.heading"
    title-class="heading--about"
  >
    <div class="about-content">
      <div class="about__introduction">
        <div class="about__image about__image--introduction">
          <img
            v-if="aboutData?.basic.personal_image"
            :src="getAssetFullPath(aboutData.basic.personal_image)"
            class="image__me"
            alt="Image of Jan-Luca Splettstößer"
          />
        </div>
        <div class="about__introduction-content">
          <p class="introduction__subheading subheading">
            {{ aboutData?.basic.subheading }}
          </p>

          <p class="introduction__start" v-html="aboutData?.basic.intro_text" />

          <p class="introduction__myself">
            {{ aboutData?.about_myself.about_text }}
          </p>

          <p class="introduction__interests">
            {{ aboutData?.about_myself.interests }}
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
          <img
            v-if="aboutData?.professional.backend_image"
            :src="getAssetFullPath(aboutData.professional.backend_image)"
            class="image__backend"
            alt="Backend Image"
          />
        </div>

        <div class="about__my-start">
          <p class="first-project">
            {{ aboutData?.about_myself.first_project }}
          </p>
        </div>
      </div>

      <div class="about__career">
        <div class="career__path">
          <p class="career__backend">
            {{ aboutData?.professional.backend }}
          </p>

          <div
            :class="[
              'about__image',
              'about__image--career',
              'about__image--centered-mobile',
            ]"
          >
            <img
              v-if="aboutData?.professional.frontend_image"
              :src="getAssetFullPath(aboutData.professional.frontend_image)"
              class="image__frontend"
              alt="Frontend Image"
            />
          </div>

          <p class="career__frontend">
            {{ aboutData?.professional.frontend }}
          </p>

          <p class="career__today">
            {{ aboutData?.professional.today }}
          </p>
        </div>
      </div>
    </div>
  </clb-section>
</template>

<script setup lang="ts">
import type { PimcoreApiResponse, PimcoreAboutMe } from '@/interfaces/base/api.interface';

const runtimeConfig = useRuntimeConfig();
const { apiUrl } = runtimeConfig.public;
const { locale } = useI18n();

const aboutData: Ref<PimcoreAboutMe|null> = ref(null);

const requestUrl = `${apiUrl}/single-types/about-me?lang=${locale.value}`;
const aboutResponse: PimcoreApiResponse = await $fetch(requestUrl);
handleAboutData(aboutResponse);

function handleAboutData(response: PimcoreApiResponse): void {
  aboutData.value = response.data as PimcoreAboutMe;
}
</script>

<style lang="scss">
.about {
  margin-top: spacing(12.5);

  &__name {
    font-size: map.get($clb-font-sizes, 'large', 'xl');
  }

  &__image {
    display: flex;

    &--introduction {
      margin: 0 0 spacing(6);

      .image__me {
        width: 100%;
      }
    }

    .image__backend,
    .image__frontend {
      align-self: center;
      width: 60%;
    }
  }

  p {
    font-size: map.get($clb-font-sizes, 'default', 'md');
    line-height: map.get($clb-font-sizes, 'default', 'md') + 4px;
  }
}

.heading--about {
  margin-bottom: spacing(10);
  text-align: center;
}

.introduction {
  &__subheading {
    margin: 0 0 spacing(2);
    font-size: map.get($clb-font-sizes, 'xs', '3');
  }

  &__start {
    font-size: map.get($clb-font-sizes, 'default', 'xl');
  }
}

@include desktop-down {
  .about {
    &__image {
      &--centered-mobile {
        justify-content: center;
      }

      .image__backend,
      .image__frontend {
        margin-bottom: spacing(4);
      }
    }
  }
}

@include tablet-up {
  .about {
    &__image {
      &--introduction {
        float: left;
        max-width: 40%;
        margin: 0 spacing(6) spacing(6) 0;
      }

      &--beginning {
        float: right;
        max-width: 30%;
        margin-left: spacing(6);
      }

      &--career {
        float: left;
        max-width: 30%;
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

    p {
      font-size: map.get($clb-font-sizes, 'large', 'md');
      line-height: map.get($clb-font-sizes, 'large', 'md') + 4px;
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
        max-width: 26%;
        margin-bottom: 0;
      }

      &--beginning,
      &--career {
        max-width: 20%;
      }
    }
  }
}
</style>
