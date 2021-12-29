/**
 * This Plugin handles the custom change content functionality for the navigation logo
 */
export default class ChangeLogoContentPlugin {
    constructor(el) {
        this.el = document.querySelector(el);
        this.logoText = this.el.querySelector('.nav-logo');
        this.headingDot = '<span class="heading-dot">.</span>';
        this.screenSize = window.matchMedia('(min-width: 768px)');

        this.checkScreenSize();
        this.screenSize.addListener(this.checkScreenSize.bind(this));
    }

    checkScreenSize() {
        this.screenSize.matches ? this.changeTextDeskop() : this.changeTextMobile();
    }

    changeTextMobile() {
        this.logoText.innerHTML = 'JLS' + this.headingDot;
    }

    changeTextDeskop() {
        this.logoText.innerHTML = 'Jan-Luca Splettstößer' + this.headingDot;
    }
}
