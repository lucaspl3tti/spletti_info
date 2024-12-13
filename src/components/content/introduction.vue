<template>
  <jls-section id="intro" content-class="introduction">
    <div class="introduction__left">
      <jls-heading heading-type="h1" :text="texts?.heading" />
      <jls-subheading v-if="texts?.subheading" :text="texts?.subheading" />

      <p class="introduction__description" v-html=texts?.copy />

      <div class="introduction__buttons">
        <jls-button
          v-for="(button, index) in introduction.buttons"
          :key="index"
          theme="secondary"
          :to="button.link"
          :mirrored="button.isMirrored"
          uneven-border
          :title="button.name === 'contact'
            ? $t(`introduction.buttons.contact.text`)
            : $t(`introduction.buttons.portfolio.text`)
          "
        >
          {{
            button.name === 'contact'
              ? $t(`introduction.buttons.contact.text`)
              : $t(`introduction.buttons.portfolio.text`)
          }}
          <template #append>
            <jls-icon
              pack="bi"
              name="arrow-right"
              size="24"
              color="currentColor"
            />
          </template>
        </jls-button>
      </div>
    </div>

    <div class="introduction__right">
      <jls-profile-image :data="profilePicture" />
    </div>
  </jls-section>
</template>

<script setup lang="ts">
import type {
  ApiResponse,
  ProfileBasics,
  ProfilePicture,
} from '@/interfaces/api.interface';
import type { Introduction } from '@/interfaces/contents.interface';

const { locale } = useI18n();
const runtimeConfig = useRuntimeConfig();
const { apiUrl } = runtimeConfig.public;

const texts: Ref<ProfileBasics|null> = ref(null);
const profilePicture: Ref<ProfilePicture|null> = ref(null);

const response: ApiResponse = await $fetch(`${apiUrl}/single-types/profile?lang=${locale.value}`); // eslint-disable-line max-len
await handleResponseData(response);

const introduction: Introduction = reactive({
  buttons: [
    {
      name: 'portfolio',
      link: '#portfolio',
      isMirrored: false,
    },
    {
      name: 'contact',
      link: '#contact',
      isMirrored: true,
    },
  ],
});

function handleResponseData(response: ApiResponse): void {
  const { data } = response;

  texts.value = data.texts;
  profilePicture.value = data.profile_picture;
}
</script>

<style lang="scss">
#intro {
  padding-top: 0;
}

.introduction {
  @include flex(column, center);

  &__left {
    margin-top: 0;
  }

  &__right {
    order: -2;
  }

  &__description {
    margin: spacing(6) 0;
  }

  &__buttons {
    @include flex(column, center, $gap: spacing(5));

    .btn {
      width: 100%;

      .icon {
        transform: translateX(0);
        transition: transform $animation-speed;
      }

      &:hover {
        .icon {
          transform: translateX(spacing(2));
        }
      }
    }
  }
}

@include tablet-up {
  .introduction {
    @include grid(spacing(5), 4fr 2fr);
    grid-template-areas:
      'intro-content intro-image'
      'intro-content intro-social';

    &__left {
      grid-area: intro-content;
    }

    &__right {
      grid-area: intro-image;
    }

    &__buttons {
      flex-flow: row nowrap;
      justify-content: flex-start;

      .btn {
        width: 180px;
      }
    }
  }

  .spletti-de {
    .introduction {
      &__buttons {
        .btn {
          width: 200px;
        }
      }
    }
  }
}

@include tablet-portrait-up {
  .introduction {
    grid-template-areas: 'intro-content intro-image';
    grid-template-columns: auto 350px;
    justify-content: space-between;

    &__left {
      align-self: center;
      padding-right: 20%;
    }

    &__description {
      margin-top: spacing(6);
    }

    &__buttons {
      .btn--portfolio,
      .btn--contact {
        margin-top: spacing(8);
      }
    }
  }

  .social-list--aside {
    flex-direction: column;
    align-items: flex-end;
    transform: translateY(0);
  }
}
</style>
