<template>
  <ul class="jls-qualifications-nav">
    <li
      :class="[
        'jls-qualifications-nav__item',
        'change-skills',
        skillsToggled ? 'skills-is-active' : '',
      ]"
      @click="onClickNavItem"
    >
      <a class="hover-underline subheading">
        {{ $trans('qualifications.changeContent.skills') }}
      </a>
    </li>
    <li
      :class="[
        'jls-qualifications-nav__item',
        'change-qualifications',
        jobsToggled ? 'qualifications-is-active' : '',
      ]"
      @click="onClickNavItem"
    >
      <a class="hover-underline subheading">
        {{ $trans('qualifications.changeContent.jobs') }}
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { JlsQualificationNavProperties } from '@/interfaces/content/qualifications.interface';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const properties = withDefaults(defineProps<JlsQualificationNavProperties>(), {
  skillsToggled: false,
  jobsToggled: false,
});

const emit = defineEmits(['change']);

function onClickNavItem(): void {
  emit('change');
}
</script>

<style lang="scss" scoped>
.jls-qualifications-nav {
  @include flex(row wrap, $justify: center, $align: center);
  height: 100%;
  min-height: 50px;
  padding-left: 0;
  color: inherit;
  list-style: none;

  .change-skills {
    margin-right: 3%;
  }

  .change-skills,
  .change-qualifications {
    a {
      margin-bottom: 0;
      color: $color-white;
      line-height: 1.2;
      cursor: pointer;

      &:focus,
      &:focus-visible {
        box-shadow: 0 0 0 0.25rem rgba($color: $color-secondary, $alpha: 0.5);
      }
    }

    .hover-underline {
      background-image: linear-gradient($color-orange-400, $color-orange-400);
    }
  }

  .skills-is-active,
  .qualifications-is-active {
    pointer-events: none;

    a {
      cursor: default;
    }

    .hover-underline {
      background-size: 100% 2px;
    }
  }
}
</style>
