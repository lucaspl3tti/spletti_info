<template>
  <div
    v-if="imageUrl"
    :class="[ 'jls-profile-image', { 'has-social-link': hasSocialLink } ]"
  >
    <jls-link
      v-if="hasSocialLink"
      :to="socialLinkUrl!"
      class="jls-profile-image__link"
      is-external
      no-underline
      title="Instagram luca.spl3tti"
    >
      <img
        :src="imageUrl"
        alt="Profile Image of Jan-Luca Splettstößer"
        class="jls-profile-image__img"
      />
    </jls-link>
    <div v-else>
      <img
        :src="imageUrl"
        alt="Profile Image of Jan-Luca Splettstößer"
        class="jls-profile-image__img"
      />
    </div>

    <p
      v-if="hasSocialLink && hasSocialLinkLabel"
      class="jls-profile-image__text speech-bubble handwriting-font"
    >
      {{ socialLinkLabel }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type {
  ProfileImageProperties,
} from '@/interfaces/components/profile.interface';

const properties = withDefaults(defineProps<ProfileImageProperties>(), {
  data: null,
});

const socialLinkUrl = computed(() => properties.data?.social_link.href);
const socialLinkLabel = computed(() => properties.data?.social_link.label);
const imageUrl = computed(() => {
  if (properties.data?.image) {
    return getImageFullPath(properties.data?.image);
  }

  return null;
});

const hasSocialLink = computed(() => socialLinkUrl.value && socialLinkUrl.value !== ''); // eslint-disable-line max-len
const hasSocialLinkLabel = computed(() => socialLinkLabel.value && socialLinkLabel.value !== ''); // eslint-disable-line max-len
</script>

<style lang="scss">
.jls-profile-image {
  position: relative;
  @include flex($justify: flex-end);
  order: -2;
  margin-top: 0;
  margin-left: auto;

  .speech-bubble {
    display: none;
  }

  &__img {
    width: 85%;
    margin-left: 15%;
    border-radius: 50%;
    aspect-ratio: 1/1;
  }
}

@include tablet-up {
  .jls-profile-image {
    align-self: center;
    margin-top: spacing(2.5);

    .speech-bubble {
      @include absolute-position($top: 58%, $left: 30%);
      @include flex;
      place-items: center;
      opacity: 0;
      min-width: 40px;
      max-width: 220px;
      min-height: 40px;
      margin: 0;
      box-shadow: 6px 6px 12px rgba($color-black, $alpha: 0.3);
      border-radius: 30px;
      background-color: $color-white;
      padding: spacing(5) spacing(4);
      color: $color-black;
      font-size: 21px;
      text-align: center;
      transition: opacity $animation-speed;

      &::before {
        content: '';
        @include absolute-position($top: -12%, $left: 1.5rem);
        @include size(0);
        border: 0.75rem solid transparent;
        border-top: none;
        border-bottom-color: $color-white;
        filter: drop-shadow(
          0 -0.0625rem 0.0625rem rgba($color-black, $alpha: 0.1)
        );
      }
    }

    &__img {
      width: auto;
      margin-left: 0;
      transition:
        transform 0.33s,
        box-shadow 0.33s;
    }

    &.has-social-link {
      &:hover {
        .speech-bubble {
          opacity: 1;
        }

        .jls-profile-image__img {
          box-shadow:
            20px 20px 18px rgba($color: $color-secondary, $alpha: 0.4);
          transform: translate(-10px, -10px);
        }
      }
    }
  }

  @include light-mode {
    .jls-profile-image {
      &.has-social-link {
        &:hover {
          .jls-profile-image__img {
            box-shadow:
              20px 20px 18px rgba($color: $color-purple-400, $alpha: 0.6);
          }
        }
      }
    }
  }
}

@include tablet-portrait-up {
  .jls-profile-image {
    justify-self: flex-end;

    .speech-bubble {
      top: 58%;
      left: 37%;
    }

    &__img {
      height: 350px;
    }
  }
}
</style>
