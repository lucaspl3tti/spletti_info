<template>
  <clb-section
    id="skills"
    name="skills-qualifications"
  >
    <clb-container class="skills-qualifications-container">
      <clb-heading
        heading-type="h2"
        :text="headingText"
        position="center"
        class="heading--skills"
      />

      <div class="change-content">
        <jls-qualifications-nav
          :skills-toggled="skillsToggled"
          :jobs-toggled="jobsToggled"
          @change="onChangeContent"
        />

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

          <clb-timeline class="jobs-list">
            <jls-qualifications-job
              v-for="(job, jobKey) in career.jobs"
              :key="jobKey"
              :job="job"
              class="jobs-list__job"
              :is-double-sided="activeBreakpoint === 'xl'"
            />
          </clb-timeline>
        </div>
      </div>
    </clb-container>
  </clb-section>
</template>

<script setup lang="ts">
import type {
  PimcoreApiResponse,
  PimcoreJobsResponse,
  PimcoreSkill,
} from '@/interfaces/base/api.interface';
import type { JlsContentCareers } from '@/interfaces/base/contents.interface';
import { Utilities } from '@helper/utilities.helper';

const runtimeConfig = useRuntimeConfig();
const { apiUrl } = runtimeConfig.public;
const { locale } = useI18n();
const breakpoints = useBreakpoints();
const activeBreakpoint = breakpoints.active();

const headingText = await $trans(apiUrl, 'qualifications.heading', locale.value);

const viewport: Ref<MediaQueryList|null> = ref(null);
const isViewportXl = ref(false);
const skillsToggled = ref(true);
const jobsToggled = ref(false);
const skills: Ref<PimcoreSkill[]> = ref([]);
const careers: JlsContentCareers = reactive({
  professional: {
    heading: await $trans(
      apiUrl,
      'qualifications.careers.professional.heading',
      locale.value,
    ),
    jobs: null,
  },

  school: {
    heading: await $trans(
      apiUrl,
      'qualifications.careers.school.heading',
      locale.value,
    ),
    jobs: null,
  },
});

const skillsData: PimcoreApiResponse = await $fetch(`${apiUrl}/skills?lang=${locale.value}`);
const jobsData: PimcoreJobsResponse = await $fetch(`${apiUrl}/jobs?lang=${locale.value}`);

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

function handleSkillsData(response: PimcoreApiResponse): void {
  skills.value = response.data as PimcoreSkill[];
}

function handleJobData(response: PimcoreJobsResponse): void {
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
    @include marginY(spacing(3), spacing(10));
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
