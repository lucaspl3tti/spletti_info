/**
 * This Plugin handles the custom highlighting fuction for the navigation container
 */
export default class NavHighlightPlugin {
    constructor(el) {
        this.el = document.querySelector(el);
        this.sections = document.querySelectorAll('section');
        this.navEls = this.el.querySelectorAll('.hover-underline');

        this.registerEvent();
    }

    registerEvent() {
        window.addEventListener('scroll', () => {
            let current = '';

            this.sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeigth = section.clientHeight;

                if (scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            this.navEls.forEach((navEl) => {
                navEl.classList.remove('nav-active');

                if (navEl.classList.contains(current)) {
                    navEl.classList.add('nav-active');
                }
            });
        });
    }
}


