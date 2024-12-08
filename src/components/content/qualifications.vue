<template>
  <jls-section
    id="skills"
    name="skills-qualifications"
  >
    <jls-container class="skills-qualifications-container">
      <jls-heading
        heading-type="h2"
        :text="$t(`qualifications.heading`)"
        position="center"
        class="heading--skills"
      />

      <div class="change-content">
        <jls-qualifications-nav
          :skills-toggled="skillsToggled"
          :jobs-toggled="jobsToggled"
          @change="onChangeContent"
        />

        <!-- @TODO: add later -->
        <!-- <jls-qualifications-resume /> -->
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

          <jls-timeline
            v-if="!isViewportXl"
            class="jobs-list"
            align="start"
            direction="vertical"
            side="end"
            truncate-line="both"
          >
            <jls-qualifications-job
              v-for="(job, jobKey) in career.jobs"
              :key="jobKey"
              :job="job"
              class="jobs-list__job"
            />
          </jls-timeline>

          <jls-timeline
            v-else
            class="jobs-list"
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
          </jls-timeline>
        </div>
      </div>
    </jls-container>
  </jls-section>
</template>

<script setup lang="ts">
import { Utilities } from '@/helper/utilities.helper';
import type {
  ApiResponse,
  JobsResponse,
  Skill,
} from '@/interfaces/api.interface';
import type { Careers } from '@/interfaces/contents.interface';

const runtimeConfig = useRuntimeConfig();
const { apiUrl } = runtimeConfig.public;
const { t } = useI18n();

const viewport: Ref<MediaQueryList|null> = ref(null);
const isViewportXl = ref(false);
const skillsToggled = ref(true);
const jobsToggled = ref(false);
const skills: Ref<Skill[]> = ref([]);
const careers: Careers = reactive({
  professional: {
    heading: t('qualifications.careers.professional.heading'),
    jobs: null,
  },

  school: {
    heading: t('qualifications.careers.school.heading'),
    jobs: null,
  },
});

const skillsData: ApiResponse = await $fetch(`${apiUrl}/skills`);
const jobsData: JobsResponse = await $fetch(`${apiUrl}/jobs`);

handleSkillsData(skillsData);
handleJobData(jobsData);

onMounted(() => {
  viewport.value = Utilities.getViewport('xl');
  isViewportXl.value = Utilities.matchesViewport(viewport.value);

  Utilities.watchViewport(
    viewport.value,
    () => checkViewport(),
  );
});

function checkViewport(): void {
  isViewportXl.value = Utilities.matchesViewport(viewport.value!);
}

function onChangeContent(): void {
  skillsToggled.value = !skillsToggled.value;
  jobsToggled.value = !jobsToggled.value;
}

function handleSkillsData(response: ApiResponse): void {
  skills.value = response.data as Skill[];
}

function handleJobData(response: JobsResponse): void {
  const { data } = response;

  careers.professional.jobs = data.professional;
  careers.school.jobs = data.school;
}
</script>

<style lang="scss">
.skills-qualifications {
  margin-top: spacing(12.5);
  box-shadow: inset 0 0 20px 8px rgba($color: $color-black, $alpha: 0.2);
  background-color: $color-primary-var;
}

.skills-qualifications-container {
  color: $color-white;

  .heading {
    color: inherit;
    text-align: center;
  }

  .change-content {
    position: relative;
    min-height: 50px;
    margin-bottom: spacing(10);
  }
}

.skills {
  @include flex(row wrap, $justify: center, $gap: spacing(6) spacing(4));
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: opacity 1s ease-out;

  &.show {
    opacity: 1;
    height: auto;
  }
}

.jobs {
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: opacity 1s ease-out;

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

@include tablet-portrait-down {
  .skills-qualifications-container {
    .change-content {
      @include flex(column);
    }
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
