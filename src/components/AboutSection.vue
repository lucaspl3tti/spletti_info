<script>
import { websiteData, assets } from '@/stores/data.js';

export default {
    data(){
        return {
            assets: assets,
            about: websiteData.about,
            contact: websiteData.contact,
        };
    },
}
</script>

<template>
    <div class="container container-content">
        <section class="about" id="about">
            <h2 class="heading heading--about">
                {{ about.heading }}<span class="heading-dot">.</span>
            </h2>

            <div class="about-content">
                <div class="about__introduction">
                    <div class="about__image about__image--introduction">
                        <img :src="about.images.me" class="image__me">
                    </div>
                    <div class="about__introduction-content">
                        <p class="introduction__subheading">{{ about.subheading }}</p>
                        <p class="introduction__start">{{ about.intro }}</p>
                        <p class="introduction__myself">{{ about.aboutMe }}</p>
                        <p class="introduction__interests">{{ about.interests }}</p>
                    </div>
                </div>

                <div class="about__beginning">
                    <div class="about__image about__image--beginning about__image--centered-mobile">
                        <img :src="about.images.backend" class="image__backend">
                    </div>
                    <div class="about__my-start">
                        <p class="first-project">{{ about.firstProject }}</p>
                    </div>
                </div>

                <div class="about__career">
                    <div class="about__image about__image--career about__image--centered-mobile">
                        <img :src="about.images.frontend" class="image__frontend">
                    </div>
                    <div class="career__path">
                        <p class="career__backend">{{ about.backend }}</p>
                        <p class="career__frontend">{{ about.frontend }}</p>
                        <p class="career__today">{{ about.today }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact-button" id="contact">
            <a :href="contact.href" class="btn btn-primary">
                {{ contact.text }}
                <i class="fas fa-arrow-right"></i>
            </a>
        </section>
    </div>
</template>
