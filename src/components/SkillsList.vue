<script>
import { websiteData, assets } from '@/stores/data.js';

export default {
    data(){
        return {
            assets: assets,
            skillsAndQualifications: websiteData.skillsAndQualifications,
            parentSelector: '#skills',
        };
    },
    methods: {
        onClickChangeContent() {
            const el = document.querySelector(this.parentSelector);
            const skillsLink = el.querySelector('.change-skills');
            const skillsContent = el.querySelector('#skillsContainer');
            const qualificationsLink = el.querySelector('.change-qualifications');
            const qualificationsContent = el.querySelector('#qualificationsContainer');

            if (qualificationsContent.classList.contains('show')) {
                this.showEl(skillsContent, skillsLink, 'skills-is-active');
                this.hideEl(qualificationsContent, qualificationsLink, 'qualifications-is-active');
                return
            }

            this.showEl(qualificationsContent, qualificationsLink, 'qualifications-is-active');
            this.hideEl(skillsContent, skillsLink, 'skills-is-active');
        },
        showEl(el, elLink, activeLinkClass) {
            el.classList.add('show');
            elLink.classList.add(activeLinkClass);
        },
        hideEl(el, elLink, activeLinkClass) {
            el.classList.remove('show');
            elLink.classList.remove(activeLinkClass);
        }
    },
};
</script>

<template>
    <section class="skills-qualifications" id="skills">
        <div class="container skills-qualifications-container">
            <h2 class="heading heading--skills">
                {{ skillsAndQualifications.heading }}<span class="heading-dot">.</span>
            </h2>

            <div class="change-content">
                <ul class="nav">
                    <li class="nav-item change-skills skills-is-active" @click="onClickChangeContent">
                        <p class="hover-underline">
                            {{ skillsAndQualifications.changeContent.skills }}
                        </p>
                    </li>
                    <li class="nav-item change-qualifications" @click="onClickChangeContent">
                        <p class="hover-underline">
                            {{ skillsAndQualifications.changeContent.qualifications }}
                        </p>
                    </li>
                </ul>
            </div>

            <div class="skills show" id="skillsContainer">
                <div v-for="(asset, skill) in skillsAndQualifications.skills" :key="skill" class="skills__box">
                    <img class="skills__image" :src="asset" alt="">
                    <p class="skills__text">{{ skill }}</p>
                </div>
            </div>

            <div class="qualifications hidden" id="qualificationsContainer">
                <div class="cv-container">
                    <div class="experience" v-for="(jobs, key) in skillsAndQualifications.qualifications" :key="key">
                        <h3 class="experience__heading">
                            {{ key }}
                        </h3>

                        <div v-for="(job, index) in jobs" class="job-container" :key="index">
                            <div class="job__timeline">
                                <div class="timeline__point"></div>
                                <div v-if="!job.isLast" class="timeline__line"></div>
                            </div>

                            <div class="job-content">
                                <div class="job__information">
                                    <div class="job__period">{{ job.timeperiod }}</div>
                                    <div class="job__company">{{ job.company }}</div>
                                </div>

                                <div class="job__description">
                                    <div class="job__title">{{ job.jobTitle }}</div>
                                    <div class="job__tasks">
                                        <p class="task-list">
                                            <span class="task-list__item" v-for="task in job.tasks" :key="task">
                                                {{ task }}
                                                <br/>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
