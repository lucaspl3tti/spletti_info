<script>
export default {
    data(){
        return {
            collapseToggler: '.navbar-toggler',
            collapseContainer: '#navbarNav',
            activeClass: 'show',
            collapsedClass: 'collapsed',
        };
    },
    methods: {
        onClickNavLink() {
            const toggler = document.querySelector(this.collapseToggler);
            const collapse = document.querySelector(this.collapseContainer);

            toggler.classList.add(this.collapsedClass);
            collapse.classList.remove(this.activeClass);
        },
    },
}

import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark nav-container">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1 nav-logo">
                <span class="d-block d-lg-none">
                    JLS<span class="heading-dot">.</span>
                </span>
                <span class="d-none d-lg-block">
                    Jan-Luca Splettstößer<span class="heading-dot">.</span>
                </span>
            </span>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <!-- <i class="bi bi-list"></i>
                <i class="bi bi-x"></i> -->
                <div class="collapse-menu-icon half start"></div>
                <div class="collapse-menu-icon"></div>
                <div class="collapse-menu-icon half end"></div>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
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
                    <li class="nav-item">
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
                    <li class="nav-item">
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
                    <li class="nav-item">
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
                    <li class="nav-item">
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
            </div>
        </div>
    </nav>
</template>
