<template>
  <section
    id="skills"
    class="skills-qualifications"
    data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-once="true"
  >
    <BContainer class="skills-qualifications-container">
      <h2 class="heading heading--skills">
        {{ $t(`qualifications.heading`) }}<span class="heading-dot">.</span>
      </h2>

      <div class="change-content">
        <QualificationsNav
          :skills-toggled="skillsToggled"
          :jobs-toggled="jobsToggled"
          @change="onChangeContent"
        />
      </div>

      <div
        id="skillsContainer"
        :class="['skills', skillsToggled ? 'show' : 'hidden']"
      >
        <QualificationsSkill
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
          class="experience"
        >
          <h3 class="experience__heading">
            {{ career.heading }}
          </h3>

          <QualificationsJob
            v-for="(job, jobKey) in career.jobs"
            :key="jobKey"
            :job="job"
          />
        </div>
      </div>
    </BContainer>
  </section>
</template>

<script>
const runtimeConfig = useRuntimeConfig()
const apiUrl = runtimeConfig.apiBase

export default {
  data() {
    return {
      skillsToggled: true,
      jobsToggled: false,
      skills: {},
      careers: {
        professional: {
          heading: this.$t('qualifications.careers.professional.heading'),
          jobs: {},
        },

        school: {
          heading: this.$t('qualifications.careers.school.heading'),
          jobs: {},
        },
      },
    }
  },

  async created() {
    const self = this

    // get skills from api
    await useFetch(`${apiUrl}/wp/v2/posts?categories=3&per_page=100`, {
      onResponse({ request, response, options }) {
        const skills = response._data

        for (const skill of skills) {
          self.skills = {
            ...self.skills,
            [skill.meta.position[0]]: skill,
          }
        }
      },
    })

    // get jobs from api
    await useFetch(`${apiUrl}/wp/v2/posts?categories=4&per_page=100`, {
      onResponse({ request, response, options }) {
        const professionalCareer = {}
        const schoolCareer = {}
        const jobs = response._data

        for (const job of jobs) {
          const { meta } = job

          // get values
          const title = formatTranslations(meta.title[0])
          const timeperiod = formatTranslations(meta.timeperiod[0])
          const company = formatTranslations(meta.company[0])
          const tasks = formatTranslations(meta.tasks[0])

          let isLast = false
          if (Number(meta.is_last[0]) === 1) isLast = true

          let jobObject = {
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
          }

          if (jobObject.career === 'professional') {
            professionalCareer[jobObject.position] = jobObject
          } else if (jobObject.career === 'school') {
            schoolCareer[jobObject.position] = jobObject
          }

          self.careers.professional.jobs = professionalCareer
          self.careers.school.jobs = schoolCareer
        }
      },
    })
  },

  methods: {
    onChangeContent() {
      if (this.jobsToggled) {
        this.skillsToggled = true
        this.jobsToggled = false
        return
      }

      this.skillsToggled = false
      this.jobsToggled = true
    },
  },
}
</script>

<style lang="scss">
.skills-qualifications {
  margin-top: spacing(25);
  background-color: $color-primary;
  box-shadow: inset 0 0 20px 8px rgba($color: #000000, $alpha: 0.2);
}

.skills-qualifications-container {
  padding: 10% 5%;
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
  gap: spacing(4);
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
  .skills-qualifications-container {
    padding: 5% 9%;
  }

  .skills {
    gap: spacing(10);
  }

  .jobs {
    margin-top: spacing(10);
  }
}
</style>
