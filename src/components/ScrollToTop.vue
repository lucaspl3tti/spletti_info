<script>import { c } from "../../dist/assets/vendor.2ceb3263";

export default {
    data(){
        return {
            collapseToggler: '.navbar-toggler',
            collapseContainer: '#navbarNav',
            activeClass: 'show',
            collapsedClass: 'collapsed',
            scrolled: false,
        };
    },
    methods: {
        onClickScrollToTopBtn() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        showButton() {
            window.addEventListener('scroll', () => {
                this.scrolled = scrollY > 400 ? true : false;
            });
        },
    },
    mounted() {
        this.showButton();
    },
}
</script>

<template>
    <div class="scroll-to-top" :class="[this.scrolled ? 'show' : '']" @click="onClickScrollToTopBtn">
        <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="rgb(248, 247, 253)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
    </div>
</template>
