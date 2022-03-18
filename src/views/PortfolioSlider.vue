<script>
import { websiteData, assets } from '@/stores/data.js';

export default {
    data(){
        return {
            assets: assets,
            portfolio: websiteData.portfolio,
            portfolioContainer: '[data-slider="1"]',
            swiperSlideActiveClass: 'slider--current',
            sliderHiddenClass: 'slider--hidden',
        };
    },
    methods: {
        onClickSliderNav(sliderNavEl) {
            const el = document.querySelector(this.portfolioContainer);
            const sliderCount = el.querySelectorAll('[data-slider-el]').length;
            const currentSliderAttr = this.getCurrentSliderAttribute(el);

            // per default select first slider element
            let newSliderAttr = 1;

            // get attribute for new slider element
            newSliderAttr = this.getNewSliderAttr(sliderNavEl, sliderCount, currentSliderAttr);

            // select current slider, as well as the next one
            const currentSliderEl = this.getSliderEl(el, currentSliderAttr);
            const nextSliderEl = this.getSliderEl(el, newSliderAttr);

            this.hideSlider(currentSliderEl);
            this.showSlider(nextSliderEl);
        },
        getCurrentSliderAttribute(el) {
            return Number(el.querySelector('.slider--current').getAttribute('data-slider-el'));
        },
        getNewSliderAttr(sliderNavEl, sliderCount, currentSliderAttr) {
            if (sliderNavEl === 'previous') {

                // select previous slider element
                if (currentSliderAttr > 1) return currentSliderAttr - 1;
                return sliderCount;

            } else if (sliderNavEl === 'next') {

                // select next slider element
                if (currentSliderAttr < sliderCount) return currentSliderAttr + 1;
                return 1;

            }
        },
        getSliderEl(el, sliderAttr) {
            return el.querySelector('[data-slider-el="' + sliderAttr + '"]');
        },
        hideSlider(sliderEl) {
            sliderEl.classList.remove(this.swiperSlideActiveClass);
            sliderEl.classList.add(this.sliderHiddenClass);
        },
        showSlider(sliderEl) {
            sliderEl.classList.add(this.swiperSlideActiveClass);
            sliderEl.classList.remove(this.sliderHiddenClass);
        },
    }
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

        <div class="slider" data-slider="1">
            <div
                v-for="(project, key) in portfolio.projects"
                :key="project"
                class="slider__wrapper"
                :class="[
                    project.id === 1 ? 'slider--current' : 'slider--hidden',
                    key
                ]"
                :data-slider-el="project.id"
            >
                <div
                    class="slider__image image-wrapper"
                    :class="[
                        'slider__image--slider' + project.id,
                        project.paddingBottom ? 'pb-0' : ''
                    ]"
                >
                    <img :src="project.image" :alt="project.imageAltText">
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
                        <a :href="project.repoLink" class="project__link project__link--github">
                            <span class="hover-underline">Github Repo</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>

                        <a v-if="project.liveLink" class="project__link project__link--live" :href="project.liveLink" target="_blank" rel="noopener noreferrer">
                            <span class="hover-underline">Live Site</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>

            <a
                class="slider__control slider__control--previous"
                data-slider-controls="previous"
                @click="this.onClickSliderNav('previous')"
            >
                <span class="icon icon-angle-left">
                    <i class="bi bi-chevron-left"></i>
                </span>
            </a>

            <a
                class="slider__control slider__control--next"
                data-slider-controls="next"
                @click="this.onClickSliderNav('next')"
            >
                <span class="icon icon-angle-right">
                    <i class="bi bi-chevron-right"></i>
                </span>
            </a>
        </div>
    </section>
</template>
