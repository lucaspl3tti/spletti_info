<script>
import { RouterLink, RouterView } from 'vue-router';
import SocialList from '@/components/SocialList.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';
import NavBar from '@/components/NavBar.vue';
import PageFooter from '@/components/PageFooter.vue';
import AOS from 'aos';

AOS.init();

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

<style lang="scss">
@import '@/scss/main.scss';
</style>
