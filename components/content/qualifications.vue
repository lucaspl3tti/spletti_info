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
            :job-key="jobKey"
            :career-label="careerKey"
            @updated="onUpdatedJob"
          />
        </div>
      </div>
    </BContainer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skillsToggled: true,
      jobsToggled: false,

      skills: [
        {
          id: 'nuxtjs',
          text: 'Nuxt.js',
          image: '/img/icons/skills/nuxtjs-logo.png',
        },
        {
          id: 'vuejs',
          text: 'Vue.js',
          image: '/img/icons/skills/vue-logo.png',
        },
        {
          id: 'js',
          text: 'JavaScript',
          image: '/img/icons/skills/javascript.png',
        },
        {
          id: 'sass',
          text: 'SCSS / SASS',
          image: '/img/icons/skills/sass-logo.png',
        },
        {
          id: 'html5',
          text: 'HTML5',
          image: '/img/icons/skills/html5.png',
        },
        {
          id: 'ui-ux',
          text: 'UI/UX',
          image: '/img/icons/skills/ui.png',
        },
        {
          id: 'pdflib',
          text: 'PDFlib PHP',
          image: '/img/icons/skills/pdf-2--v1.png',
        },
        {
          id: 'php',
          text: 'PHP',
          image: '/img/icons/skills/php.png',
        },
        {
          id: 'twig',
          text: 'Twig',
          image: '/img/icons/skills/twig-logo.png',
        },
        {
          id: 'shopware6',
          text: 'Shopware 6',
          image: '/img/icons/skills/shopware.png',
        },
        {
          id: 'pimcore',
          text: 'Pimcore X',
          image: '/img/icons/skills/pimcore-logo-2.png',
        },
        {
          id: 'git',
          text: 'Git SCM',
          image: '/img/icons/skills/git-logo.png',
        },
        {
          id: 'vitejs',
          text: 'ViteJS',
          image: '/img/icons/skills/vitejs-logo.png',
        },
        {
          id: 'gulpjs',
          text: 'GulpJS',
          image: '/img/icons/skills/gulpjs-logo.png',
        },
        {
          id: 'css3',
          text: 'CSS',
          image: '/img/icons/skills/css3.png',
        },
        {
          id: 'figma',
          text: 'Figma',
          image: '/img/icons/skills/figma-logo.png',
        },
        {
          id: 'adobe-cc',
          text: 'Adobe CC',
          image: '/img/icons/skills/creative-cloud.png',
        },
        {
          id: 'newsletter',
          text: 'Newsletter',
          image: '/img/icons/skills/mail.png',
        },
      ],

      careers: {
        professional: {
          heading: this.$t('qualifications.careers.professional.heading'),
          jobs: {
            first: {
              isLast: false,
              timeperiod: `2021 - ${this.$t('qualifications.todayLabel')}`,
              company: 'twocream. creativemedia GmbH',
              jobTitle: this.$t(
                'qualifications.careers.professional.jobs.first.title'
              ),
              taskCount: 5,
            },
            second: {
              isLast: false,
              timeperiod: '2020 - 2021',
              company: 'move elevator GmbH',
              jobTitle: this.$t(
                'qualifications.careers.professional.jobs.second.title'
              ),
              taskCount: 3,
            },
            third: {
              isLast: true,
              timeperiod: '2018 - 2020',
              company: 'move elevator GmbH',
              jobTitle: this.$t(
                'qualifications.careers.professional.jobs.third.title'
              ),
              taskCount: 4,
            },
          },
        },

        school: {
          heading: this.$t('qualifications.careers.school.heading'),
          jobs: {
            first: {
              isLast: false,
              timeperiod: '2018 - 2021',
              company: 'Berufskolleg Stadtmitte Mülheim',
              jobTitle: this.$t(
                'qualifications.careers.school.jobs.first.title'
              ),
              taskCount: 2,
            },
            second: {
              isLast: true,
              timeperiod: '2009 - 2018',
              company: 'Ernst-Barlach-Gesamtschule',
              jobTitle: this.$t(
                'qualifications.careers.school.jobs.second.title'
              ),
              taskCount: 4,
            },
          },
        },
      },
    }
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

    onUpdatedJob() {
      Object.entries(this.careers).forEach((career) => {
        const careerKey = career[0]
        const careerObject = career[1]

        careerObject.heading = this.$t(
          `qualifications.careers.${careerKey}.heading`
        )

        Object.entries(careerObject.jobs).forEach((job, index) => {
          const jobIndex = job[0]
          const jobObject = job[1]

          if (careerKey === 'professional') {
            if (index === 0)
              jobObject.timeperiod = `2021 - ${this.$t(
                'qualifications.todayLabel'
              )}`
          }

          jobObject.jobTitle = this.$t(
            `qualifications.careers.${careerKey}.jobs.${jobIndex}.title`
          )
        })
      })
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

@media (min-width: $breakpoint-md) {
  .skills {
    gap: spacing(6.5);
  }
}

@media (min-width: $breakpoint-lg) {
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
