<script>
import { websiteData, assets } from '@/stores/data.js';
import PortfolioSlider from '@/components/PortfolioSlider.vue';
import SkillsList from '@/components/SkillsList.vue';
import AboutSection from '@/components/AboutSection.vue';

export default {
    data(){
        return {
            assets: assets,
            introContainer: websiteData.introContainer,
            portfolio: websiteData.portfolio,
        };
    },
    components: {
        PortfolioSlider,
        SkillsList,
        AboutSection,
    },
    methods: {},
}
</script>

<template>
    <div class="container container--content container--introduction">
        <section class="introduction start" id="home">
            <div class="introduction__content">
                <h1 v-html="introContainer.heading"></h1>
                <p class="subtitle">
                    {{ introContainer.subtitle }}
                </p>
                <p class="introduction__description">
                    {{ introContainer.description }}
                </p>
                <div class="introduction__buttons">
                    <div v-for="introBtn in this.introContainer.buttons" :key="introBtn" :class="introBtn.class">
                        <a class="btn btn-primary" :href="introBtn.href">
                            {{ introBtn.text }}
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="introduction__image">
                <a href="https://www.instagram.com/luca.spl3tti/" target="_blank" rel="noopener noreferrer">
                    <img :src="introContainer.profileImage">
                </a>
                <p class="speech-bubble handwriting-font">Visit me on Instagram!</p>
            </div>
        </section>

        <PortfolioSlider />
    </div>

    <SkillsList />

    <AboutSection />
</template>

<style lang="scss" scoped>
</style>
