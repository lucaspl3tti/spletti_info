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
      <p class="hover-underline subheading">
        {{ $t(`qualifications.changeContent.skills`) }}
      </p>
    </li>
    <li
      :class="[
        'nav-item',
        'change-qualifications',
        jobsToggled ? 'qualifications-is-active' : '',
      ]"
      @click="onClickNavItem"
    >
      <p class="hover-underline subheading">
        {{ $t(`qualifications.changeContent.jobs`) }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    skillsToggled: {
      type: Boolean,
      required: true,
    },
    jobsToggled: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['change'],

  methods: {
    onClickNavItem() {
      this.$emit('change')
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  justify-content: center;
  color: inherit;

  .change-skills {
    margin-right: 3%;
  }

  .change-skills,
  .change-qualifications {
    p {
      cursor: pointer;
    }
  }

  .skills-is-active,
  .qualifications-is-active {
    pointer-events: none;

    p {
      cursor: default;
    }
  }

  .skills-is-active,
  .qualifications-is-active {
    .hover-underline::after {
      transform: scaleX(1);
    }
  }
}
</style>
