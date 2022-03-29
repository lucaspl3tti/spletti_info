<script>
import SocialList from '@/components/SocialList.vue';

export default {
    data(){
        return {
            activeClass: 'show',
            collapsedClass: 'collapsed',
            showContentClass: 'show-nav-content',
            animateItemClass: 'animate-nav-item',
            animateContentClass: 'animate-nav-content',
            toggled: true,
            showNavContent: false,
            animateHomeItem: false,
            animatePortfolioItem: false,
            animateSkillsItem: false,
            animateAboutItem: false,
            animateContactItem: false,
            animateSocialList: false,
        };
    },
    components: {
        SocialList,
    },
    methods: {
        onClickNavLink() {
            this.toggled = true;
        },
        async onClickNavToggler() {
            if (this.toggled) {
                this.toggled = false;
                this.showNavContent = true;
                this.addNavItemAnimations();
                return
            }

            this.removeNavItemAnimations();
            this.showNavContent = false;
            this.toggled = true;
        },
        addNavItemAnimations() {
            setTimeout(() => this.animateHomeItem = true, 100);
            setTimeout(() => this.animatePortfolioItem = true, 150);
            setTimeout(() => this.animateSkillsItem = true, 200);
            setTimeout(() => this.animateAboutItem = true, 250);
            setTimeout(() => this.animateContactItem = true, 300);
            setTimeout(() => this.animateSocialList = true, 350);
        },
        removeNavItemAnimations() {
            this.animateHomeItem = false;
            this.animatePortfolioItem = false;
            this.animateSkillsItem = false;
            this.animateAboutItem = false;
            this.animateContactItem = false;
            this.animateSocialList = false;
        },
    },
}

import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark nav-container">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1 nav-logo handwriting-font">
                <span class="d-block d-lg-none">
                    JLS<span class="heading-dot">.</span>
                </span>
                <span class="d-none d-lg-block">
                    Jan-Luca Splettstößer<span class="heading-dot">.</span>
                </span>
            </span>
            <button
                class="navbar-toggler"
                :class="[this.toggled ? this.collapsedClass : '']"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                @click="onClickNavToggler"
            >
                <div class="collapse-menu-icon half start"></div>
                <div class="collapse-menu-icon"></div>
                <div class="collapse-menu-icon half end"></div>
            </button>
            <div
                class="collapse navbar-collapse justify-content-end"
                :class="[this.toggled ? '' : this.activeClass]"
                id="navbarNav"
            >
                <ul
                    class="navbar-nav"
                    :class="[this.showNavContent ? this.showContentClass : '']"
                >
                    <li class="nav-item" :class="[this.animateHomeItem ? this.animateItemClass : '']">
                        <RouterLink
                            to="/"
                            class="nav-link nav-link--home"
                            @click="onClickNavLink"
                        >
                            <i class="bi bi-house d-lg-none"></i>
                            <span class="nav-link__dash d-lg-none"></span>
                            <span class="hover-underline">
                                Home
                            </span>
                        </RouterLink>
                    </li>
                    <li class="nav-item" :class="[this.animatePortfolioItem ? this.animateItemClass : '']">
                        <RouterLink
                            to="/#portfolio"
                            class="nav-link nav-link--portfolio"
                            @click="onClickNavLink"
                        >
                            <i class="bi bi-window-stack d-lg-none"></i>
                            <span class="nav-link__dash d-lg-none"></span>
                            <span class="hover-underline">
                                Portfolio
                            </span>
                        </RouterLink>
                    </li>
                    <li class="nav-item" :class="[this.animateSkillsItem ? this.animateItemClass : '']">
                        <RouterLink
                            to="/#skills"
                            class="nav-link nav-link--skills"
                            @click="onClickNavLink"
                        >
                            <i class="bi bi-boxes d-lg-none"></i>
                            <span class="nav-link__dash d-lg-none"></span>
                            <span class="hover-underline">
                                Skills
                            </span>
                        </RouterLink>
                    </li>
                    <li class="nav-item" :class="[this.animateAboutItem ? this.animateItemClass : '']">
                        <RouterLink
                            to="/#about"
                            class="nav-link nav-link--about"
                            @click="onClickNavLink"
                        >
                            <i class="bi bi-chat-left-quote d-lg-none"></i>
                            <span class="nav-link__dash d-lg-none"></span>
                            <span class="hover-underline">
                                About
                            </span>
                        </RouterLink>
                    </li>
                    <li class="nav-item" :class="[this.animateContactItem ? this.animateItemClass : '']">
                        <RouterLink
                            to="/#contact"
                            class="nav-link nav-link--contact"
                            @click="onClickNavLink"
                        >
                            <i class="bi bi-chat-dots d-lg-none"></i>
                            <span class="nav-link__dash d-lg-none"></span>
                            <span class="hover-underline">
                                Contact
                            </span>
                        </RouterLink>
                    </li>
                </ul>

                <div
                    class="social-list-nav"
                    :class="[
                        this.showNavContent ? this.showContentClass : '',
                        this.animateSocialList ? this.animateContentClass : ''
                    ]"
                >
                    <SocialList />
                </div>
            </div>
        </div>
    </nav>
</template>
