/**
 * This Plugin handles the custom click events for the navigation links
 */
export default class NavClickEventsPlugin {
    constructor(el) {
        // get default elements

        if (document.querySelector('body').classList.contains('main-page')) {
            this.el = document.querySelector(el);

            // get nav els
            this.portfolioLink = this.el.querySelector('.nav-portfolio');
            this.skillsLink = this.el.querySelector('.nav-skills');
            this.aboutLink = this.el.querySelector('.nav-about');
            this.contactLink = this.el.querySelector('.nav-contact');

            // get section els
            this.mainSection = document.querySelector('main');
            this.portfolioEl = this.mainSection.querySelector('#portfolio-el');
            this.skillsEl = this.mainSection.querySelector('#skills-el');
            this.aboutEl = this.mainSection.querySelector('#about-el');
            this.contactEl = this.mainSection.querySelector('#contact');

            this.registerClickEvents();
        }
    }

    registerClickEvents() {
        this.scrollToPortfolio();
        this.scrollToSkills();
        this.scrollToAbout();
        this.scrollToContact();
    }

    scrollToPortfolio() {
        this.portfolioLink.addEventListener('click', () => {
            this.portfolioEl.scrollIntoView({behavior: 'smooth'})
        })
    }

    scrollToSkills() {
        this.skillsLink.addEventListener('click', () => {
            this.skillsEl.scrollIntoView({behavior: 'smooth'})
        })
    }

    scrollToAbout() {
        this.aboutLink.addEventListener('click', () => {
            this.aboutEl.scrollIntoView({behavior: 'smooth'})
        })
    }

    scrollToContact() {
        this.contactLink.addEventListener('click', () => {
            this.contactEl.scrollIntoView({behavior: 'smooth'})
        })
    }

    scrollToPosition(pos) {
        window.scrollTo({
            top: pos,
            behavior: 'smooth'
        })
    }
}
