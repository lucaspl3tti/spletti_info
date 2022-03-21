<script>
import { websiteData, assets } from '@/stores/data.js';

export default {
    data(){
        return {
            assets: assets,
            skillsAndQualifications: websiteData.skillsAndQualifications,
            parentSelector: '#skills',
            skillsToggled: true,
            qualificationsToggled: false,
        };
    },
    methods: {
        onClickChangeContent() {
            if (this.qualificationsToggled) {
                this.skillsToggled = true;
                this.qualificationsToggled = false;
                return
            }

            this.skillsToggled = false;
            this.qualificationsToggled = true;
        },
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
                    <li class="nav-item change-skills"
                        :class="[this.skillsToggled ? 'skills-is-active' : '']"
                        @click="onClickChangeContent"
                    >
                        <p class="hover-underline">
                            {{ skillsAndQualifications.changeContent.skills }}
                        </p>
                    </li>
                    <li
                        class="nav-item change-qualifications"
                        :class="[this.qualificationsToggled ? 'qualifications-is-active' : '']"
                        @click="onClickChangeContent"
                    >
                        <p class="hover-underline">
                            {{ skillsAndQualifications.changeContent.qualifications }}
                        </p>
                    </li>
                </ul>
            </div>

            <div class="skills" :class="this.skillsToggled ? 'show' : 'hidden'" id="skillsContainer">
                <div v-for="(asset, skill) in skillsAndQualifications.skills" :key="skill" class="skills__box">
                    <img class="skills__image" :src="asset" alt="">
                    <p class="skills__text">{{ skill }}</p>
                </div>
            </div>

            <div
                class="qualifications"
                :class="this.qualificationsToggled ? 'show' : 'hidden'"
                id="qualificationsContainer"
            >
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
