<template>
  <section id="portfolio" class="portfolio section">
    <div class="heading heading--portfolio">
      <h2>
        {{ $t('portfolio.heading') }}
        <span class="heading-dot">.</span>
      </h2>
      <p class="subheading">
        {{ $t('portfolio.subheading') }}
      </p>
    </div>

    <div class="portfolio-grid">
      <div
        v-for="(project, index) in projects"
        :key="index"
        :class="['portfolio-grid__item', getPortfolioGridItemClass(index)]"
      >
        <jls-bento-card class="project-card">
          <jls-project-images
            class="project-card__image"
            :images="project.images"
          />

          <div class="project-card__content">
            <div class="project-card__title">
              <h3>
                {{ getTextTranslation(project.title) }}
              </h3>
            </div>

            <div class="project-card__copy">
              <p v-html="getTextTranslation(project.description)" />
            </div>

            <div class="project-card__tags">
              <jls-badge v-for="tag in project.tags" :key="tag">
                {{ tag }}
              </jls-badge>
            </div>

            <div
              :class="[
                'project-card__links',
                project.links.length > 1 ? 'link-wrapper--flex' : '',
              ]"
            >
              <template
                v-for="(link, linkIndex) in project.links"
                :key="linkIndex"
              >
                <jls-project-link v-if="link" :link="link" />
              </template>
            </div>
          </div>
        </jls-bento-card>
      </div>
    </div>

    <div class="portfolio-actions">
      <div class="portfolio-see-all">
        <jls-button theme="secondary" to="/projects" width="180">
          Mehr sehen
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
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n(); // eslint-disable-line
const runtimeConfig = useRuntimeConfig();
const apiUrl = runtimeConfig.public.apiBase;

const projects = ref([]);

const projectsData = await $fetch(`${apiUrl}/wp/v2/posts?categories=10`);
handleProjectsData(projectsData);

function handleProjectsData(data) {
  const projectList = [];

  data.forEach((project) => {
    const fields = project.meta;
    const image = project.featured_image;
    const {
      name,
      title,
      description,
      position,
      image_ratio: imageRatio,
      image_alt: imageAlt,
      image_has_padding_bottom: imageHasPaddingBottom,
      tags,
      github_link: githubLink,
      live_link: liveLink,
      live_link_text: liveLinkText,
      extra_image_1: extraImage1,
      extra_image_2: extraImage2,
      extra_image_3: extraImage3,
      extra_image_4: extraImage4,
      extra_image_5: extraImage5,
      extra_image_6: extraImage6,
      extra_image_7: extraImage7,
      extra_image_8: extraImage8,
    } = fields;

    const translatedTitle = formatTranslations(title[0]);
    const translatedDescription = formatTranslations(description[0]);

    let hasPaddingBottom = true;
    if (imageHasPaddingBottom[0] === 0) hasPaddingBottom = false;

    const formattedTags = formatTags(tags[0]);

    const extraImages = [
      extraImage1,
      extraImage2,
      extraImage3,
      extraImage4,
      extraImage5,
      extraImage6,
      extraImage7,
      extraImage8,
    ];

    const images = {
      featured: {
        src: image,
        ratio: imageRatio[0],
        alt: imageAlt[0],
        paddingBottom: hasPaddingBottom,
      },
      extras: [],
    };

    extraImages.forEach((image) => {
      if (image[0] && image[0] !== '') images.extras.push(image[0]);
    });

    const projectItem = {
      id: Number(position[0]),
      name: name[0],
      title: translatedTitle,
      description: translatedDescription,
      links: [],
      images,
      tags: formattedTags,
    };

    const repoLink = githubLink[0];
    projectItem.links[0] = null;
    if (repoLink !== '' && repoLink.length !== 0) {
      projectItem.links[0] = {
        type: 'repo',
        href: repoLink,
      };
    } else {
      projectItem.links[0] = null;
    }

    const prodLink = liveLink[0];
    projectItem.links[1] = null;
    if (prodLink !== '') {
      projectItem.links[1] = {
        type: 'live',
        href: prodLink,
      };
    }

    const prodLinkText = liveLinkText[0];
    if (prodLinkText !== '') projectItem.links[1].customLinkText = prodLinkText;

    const index = Number(position[0]) - 1;
    projectList[index] = projectItem;
  });

  projects.value = projectList.splice(0, 6);
}

function formatTags(string) {
  const tags = string.split(',');

  tags.forEach((tag, index) => {
    tags[index] = tag.replace(' ', '');
  });

  return tags;
}

function getPortfolioGridItemClass(index) {
  return `portfolio-grid__item--item${index + 1}`;
}

function getTextTranslation(text) {
  return locale.value === 'de' ? text?.de : text?.en;
}
</script>

<style lang="scss">
.portfolio {
  .heading {
    padding-bottom: spacing(8);
  }

  .portfolio-actions {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: spacing(10);
  }
}

.portfolio-grid {
  display: grid;
  gap: spacing(4);
  padding-top: spacing(4);

  &__item {
    position: relative;

    &--item5,
    &--item6 {
      display: none;
    }

    .jls-bento-card {
      width: 100%;
      height: 100%;
    }
  }
}

.project-card {
  &__title {
    text-align: center;
    padding: spacing(2) 0;
  }

  &__copy {
    padding: spacing(2) 0;
  }

  &__tags {
    display: flex;
    flex-flow: row wrap;
    gap: spacing(2);
    padding: spacing(2) 0;
  }

  &__links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: spacing(2);
    margin-top: auto;
  }
}

@include tablet-up {
  .portfolio-grid {
    grid-template-columns: calc(50% - 8px) calc(50% - 8px);
    grid-template-rows: auto;
    grid-template-areas:
      'portfolioItem1 portfolioItem1'
      'portfolioItem2 portfolioItem3'
      'portfolioItem4 portfolioItem4'
      'portfolioItem5 portfolioItem6';

    &__item {
      &--item1 {
        grid-area: portfolioItem1;

        .jls-bento-card {
          &__body {
            display: flex;
            flex-flow: row nowrap;
            gap: spacing(2);
          }

          &__image,
          .project-card__content {
            flex: 0 0 calc(50% - spacing(2));
            max-width: calc(50% - spacing(2));
          }

          &__image__img {
            object-fit: contain;
          }
        }
      }

      &--item2 {
        grid-area: portfolioItem2;
      }

      &--item3 {
        grid-area: portfolioItem3;
      }

      &--item4 {
        grid-area: portfolioItem4;
      }

      &--item5 {
        grid-area: portfolioItem5;
      }

      &--item6 {
        grid-area: portfolioItem6;
      }

      &--item5,
      &--item6 {
        display: block;
      }

      .project-card {
        &__copy {
          p {
            font-size: 18px;
            line-height: 22px;
          }
        }
      }
    }
  }
}

@include between-tablet-and-desktop {
  .portfolio-grid {
    &__item {
      &--item4 {
        .jls-bento-card {
          &__body {
            display: flex;
            flex-flow: row nowrap;
            gap: spacing(2);
          }

          &__image,
          .project-card__content {
            flex: 0 0 calc(50% - spacing(2));
            max-width: calc(50% - spacing(2));
          }

          &__image__img {
            object-fit: contain;
          }
        }
      }
    }
  }
}

@include desktop-up {
  .portfolio-grid {
    grid-template-columns: repeat(3, calc(33% - 8px));
    grid-template-areas:
      'portfolioItem1 portfolioItem1 portfolioItem1'
      'portfolioItem2 portfolioItem2 portfolioItem3'
      'portfolioItem4 portfolioItem5 portfolioItem5'
      'portfolioItem6 portfolioItem6 portfolioItem6';
    gap: 24px;

    &__item {
      &--item6 {
        .jls-bento-card {
          &__body {
            display: flex;
            flex-flow: row nowrap;
            gap: spacing(2);
          }

          &__image,
          .project-card__content {
            flex: 0 0 calc(50% - spacing(2));
            max-width: calc(50% - spacing(2));
          }

          &__image__img {
            object-fit: contain;
          }
        }
      }
    }
  }
}
</style>
