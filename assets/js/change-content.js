/**
 * This Plugin handles the custom change content functionality for the skills and qualifications container
 */
export default class ChangeSkillsContentPlugin {
    constructor(el) {
        if (document.querySelector('body').classList.contains('main-page')) {
            this.el = document.querySelector(el);
            this.skillsLink = this.el.querySelector('.change-skills');
            this.skillsContent = this.el.querySelector('.skills-content');
            this.qualificationsLink = this.el.querySelector('.change-qualifications');
            this.qualificationsContent = this.el.querySelector('.qualifications-content');

            this.registerClickEvents();
        }
    }

    registerClickEvents() {
        this.skillsLink.addEventListener('click', () => {
            this.onSkillsClickAction();
        });

        this.qualificationsLink.addEventListener('click', () => {
            this.onQualificationsClickAction();
        });
    }

    onSkillsClickAction() {
        if (this.qualificationsContent.classList.contains('show')) {
            this.showSkills();
            this.hideQualifications();
        }
    }

    onQualificationsClickAction() {
        if (this.skillsContent.classList.contains('show')) {
            this.showQualifications();
            this.hideSkills();
        }
    }

    showSkills() {
        this.skillsContent.classList.add('show');
        this.skillsLink.classList.add('skills-is-active');
    }

    hideSkills() {
        this.skillsContent.classList.remove('show');
        this.skillsLink.classList.remove('skills-is-active');
    }

    showQualifications() {
        this.qualificationsContent.classList.add('show');
        this.qualificationsLink.classList.add('qualifications-is-active');
    }

    hideQualifications() {
        this.qualificationsContent.classList.remove('show');
        this.qualificationsLink.classList.remove('qualifications-is-active');
    }
}
