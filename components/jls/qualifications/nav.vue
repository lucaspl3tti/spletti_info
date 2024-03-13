<template>
  <ul class="nav">
    <li
      :class="[
        'nav-item',
        'change-skills',
        skillsToggled ? 'skills-is-active' : '',
      ]"
      @click="onClickNavItem"
    >
      <a class="hover-underline subheading">
        {{ $t(`qualifications.changeContent.skills`) }}
      </a>
    </li>
    <li
      :class="[
        'nav-item',
        'change-qualifications',
        jobsToggled ? 'qualifications-is-active' : '',
      ]"
      @click="onClickNavItem"
    >
      <a class="hover-underline subheading">
        {{ $t(`qualifications.changeContent.jobs`) }}
      </a>
    </li>
  </ul>
</template>

<script setup>
// eslint-disable-next-line
const properties = defineProps({
  skillsToggled: {
    type: Boolean,
    required: true,
  },
  jobsToggled: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['change']);

function onClickNavItem() {
  emit('change');
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 0;
  padding-left: 0;
  color: inherit;
  list-style: none;

  .change-skills {
    margin-right: 3%;
  }

  .change-skills,
  .change-qualifications {
    a {
      color: $color-white;
      cursor: pointer;

      &:focus,
      &:focus-visible {
        box-shadow: 0 0 0 0.25rem rgba($color: $color-secondary, $alpha: 0.5);
      }
    }
  }

  .skills-is-active,
  .qualifications-is-active {
    pointer-events: none;

    a {
      cursor: default;
    }
  }

  .skills-is-active,
  .qualifications-is-active {
    .hover-underline {
      background-size: 100% 2px;
    }
  }
}
</style>
