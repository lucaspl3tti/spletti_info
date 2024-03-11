<template>
  <section
    id="skills"
    class="skills-qualifications section"
    data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-once="true"
  >
    <v-container class="skills-qualifications-container">
      <h2 class="heading heading--skills">
        {{ $t(`qualifications.heading`) }}<span class="heading-dot">.</span>
      </h2>

      <div class="change-content">
        <jls-qualifications-nav
          :skills-toggled="skillsToggled"
          :jobs-toggled="jobsToggled"
          @change="onChangeContent"
        />
      </div>

      <div
        id="skillsContainer"
        :class="['skills', skillsToggled ? 'show' : 'hidden']"
      >
        <jls-qualifications-skill
          v-for="(skill, index) in skills"
          :key="index"
          :skill="skill"
        />
      </div>

      <div
        id="jobsContainer"
        :class="['jobs', jobsToggled ? 'show' : 'hidden']"
      >
        <div
          v-for="(career, careerKey) in careers"
          :key="careerKey"
          :class="`experience experience--${careerKey}`"
        >
          <h3 class="experience__heading">
            {{ career.heading }}
          </h3>

          <v-timeline
            class="jobs-list d-lg-none"
            align="start"
            side="end"
            direction="vertical"
            truncate-line="both"
          >
            <jls-qualifications-job
              v-for="(job, jobKey) in career.jobs"
              :key="jobKey"
              :job="job"
              class="jobs-list__job"
            />
          </v-timeline>

          <v-timeline
            class="jobs-list d-none d-xl-grid"
            align="start"
            truncate-line="both"
          >
            <jls-qualifications-job
              v-for="(job, jobKey) in career.jobs"
              :key="jobKey"
              :job="job"
              class="jobs-list__job"
              is-double-sided
            />
          </v-timeline>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const runtimeConfig = useRuntimeConfig();
const apiUrl = runtimeConfig.public.apiBase;
const { t } = useI18n();

const skillsToggled = ref(true);
const jobsToggled = ref(false);
const skills = ref({});
const careers = reactive({
  professional: {
    heading: t('qualifications.careers.professional.heading'),
    jobs: {},
  },

  school: {
    heading: t('qualifications.careers.school.heading'),
    jobs: {},
  },
});

const skillsData = await $fetch(
  `${apiUrl}/wp/v2/posts?categories=3&per_page=100`,
);
const jobsData = await $fetch(
  `${apiUrl}/wp/v2/posts?categories=4&per_page=100`,
);

handleSkillsData(skillsData);
handleJobData(jobsData);

function onChangeContent() {
  if (jobsToggled.value) {
    skillsToggled.value = true;
    jobsToggled.value = false;
    return;
  }

  skillsToggled.value = false;
  jobsToggled.value = true;
}

function handleSkillsData(data) {
  for (const skill of data) {
    skills.value = {
      ...skills.value,
      [skill.meta.position[0]]: skill,
    };
  }
}

function handleJobData(data) {
  const professionalCareer = {};
  const schoolCareer = {};

  for (const job of data) {
    const { meta } = job;

    // get values
    const title = formatTranslations(meta.title[0]);
    const timeperiod = formatTranslations(meta.timeperiod[0]);
    const company = formatTranslations(meta.company[0]);
    const tasks = formatTranslations(meta.tasks[0]);

    let isLast = false;
    if (Number(meta.is_last[0]) === 1) isLast = true;

    const jobObject = {
      title,
      timeperiod,
      company,
      tasks,
      isLast,
      position: meta.position[0],
      career: meta.career[0],
      meta: {
        ...job,
      },
    };

    if (jobObject.career === 'professional') {
      professionalCareer[jobObject.position] = jobObject;
    } else if (jobObject.career === 'school') {
      schoolCareer[jobObject.position] = jobObject;
    }
  }

  careers.professional.jobs = professionalCareer;
  careers.school.jobs = schoolCareer;
}
</script>

<style lang="scss">
.skills-qualifications {
  margin-top: spacing(25);
  background-color: $color-purple-800;
  box-shadow: inset 0 0 20px 8px rgba($color: #000000, $alpha: 0.2);
}

.skills-qualifications-container {
  color: $color-white;

  .heading {
    color: inherit;
    text-align: center;
  }

  .change-content {
    margin-bottom: spacing(10);
  }
}

.skills {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: spacing(6) spacing(4);
  transition: opacity 1s ease-out;
  opacity: 0;
  height: 0;
  overflow: hidden;

  &.show {
    opacity: 1;
    height: auto;
  }
}

.jobs {
  transition: opacity 1s ease-out;
  opacity: 0;
  height: 0;
  overflow: hidden;

  &.show {
    opacity: 1;
    height: auto;
  }
}

.cv-container {
  width: 100%;
}

.experience {
  width: 100%;

  &__heading {
    margin-bottom: spacing(8);
    color: $color-white;
  }
}

@include tablet-up {
  .skills {
    gap: spacing(6.5);
  }
}

@include tablet-portrait-up {
  .skills {
    gap: spacing(10);
  }

  .jobs {
    margin-top: spacing(10);
  }
}

@include desktop-up {
  .experience {
    &--school {
      margin-top: spacing(8);
    }
  }

  .jobs-list {
    &.d-xl-grid {
      display: grid !important;
    }
  }
}
</style>
