<script>
import { RouterLink, RouterView } from 'vue-router';
import SocialList from '@/components/SocialList.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';
import NavBar from '@/components/NavBar.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
    components: {
        SocialList,
        NavBar,
        PageFooter,
        ScrollToTop,
    },
}
</script>

<template>
    <NavBar />

    <main>
        <RouterView />
    </main>

    <SocialList />

    <ScrollToTop />

    <PageFooter />
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.css';
</style>

<style lang="scss">
@import '@/scss/base.scss';
</style>
