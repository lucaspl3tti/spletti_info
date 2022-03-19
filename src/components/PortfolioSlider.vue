<script>
import { websiteData, assets } from '@/stores/data.js';

export default {
    data(){
        return {
            assets: assets,
            portfolio: websiteData.portfolio,
        };
    },
}
</script>

<template>
    <section class="portfolio" id="portfolio">
        <div class="heading heading--portfolio">
            <h2>
                {{ portfolio.heading }}<span class="heading-dot">.</span>
            </h2>
            <p class="subheading">
                {{ portfolio.subtitle }}
            </p>
        </div>

        <div id="portfolioSlider" class="carousel slider slide carousel-fade" data-bs-ride="false">
            <div class="carousel-inner">
                <div
                    v-for="(project, key) in portfolio.projects"
                    :key="key"
                    class="carousel-item slider__wrapper"
                    :class="[project.id === 1 ? 'active' : '']"
                    data-bs-interval="8000"
                >
                    <div
                        class="slider__image image-wrapper"
                        :class="[
                            'slider__image--slider' + project.id,
                            project.paddingBottom ? 'pb-0' : ''
                        ]"
                    >
                        <img :src="project.image" :alt="project.imageAltText" :style="['aspect-ratio: ' + project.imageRatio]">
                    </div>

                    <div
                        class="slider__text-wrapper text-wrapper"
                        :class="['slider__text-wrapper--slider' + project.id]"
                    >
                        <div class="slider__text heading slider__text--heading">
                            <h3>
                                {{ project.title }}
                            </h3>
                        </div>

                        <div class="slider__text">
                            <p v-html="project.description"></p>
                        </div>

                        <div class="slider__links" :class="[project.liveLink ? 'link-wrapper--flex' : '']">
                            <a :href="project.repoLink" class="project__link project__link--github" target="_blank" rel="noopener noreferrer">
                                <span class="hover-underline">Github Repo</span>
                                <i class="fas fa-arrow-right"></i>
                            </a>

                            <a v-if="project.liveLink" class="project__link project__link--live" :href="project.liveLink" target="_blank" rel="noopener noreferrer">
                                <span class="hover-underline">{{ project.liveLinkText }}</span>
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <button class="slider__control slider__control--previous carousel-control-prev" type="button" data-bs-target="#portfolioSlider" data-bs-slide="prev">
                <i class="bi bi-chevron-left"></i>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="slider__control slider__control--next carousel-control-next" type="button" data-bs-target="#portfolioSlider" data-bs-slide="next">
                <i class="bi bi-chevron-right"></i>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
</template>
