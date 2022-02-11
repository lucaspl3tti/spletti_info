/**
 * This Plugin handles the custom scroll to top functionality
 */
export default class ScrollToTopPlugin {
    constructor(el) {
        this.el = document.querySelector(el);

        this.el.style.display = 'block';
        this.registerClickEvent();
        this.showButton();
    }

    registerClickEvent() {
        this.el.addEventListener('click', () => {
            this.scrollToTop();
        });
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    showButton() {
        window.addEventListener('scroll', () => {
            scrollY > 400 ? this.el.classList.add('show') : this.el.classList.remove('show');
        });
    }
}
