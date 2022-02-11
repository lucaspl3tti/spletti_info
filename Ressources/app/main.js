import SwiperPlugin from './plugins/vendor/nolimits4web/swiper.js';
import NavHighlightPlugin from './plugins/header/nav-highlight.js';
import ChangeSkillsContentPlugin from './plugins/skills-qualifications/change-content.js'
import ScrollToTopPlugin from './plugins/scrollToTop/scrollToTop.js';

let portfolioSlider = new SwiperPlugin('.swiper--projects');
let NavHighlight = new NavHighlightPlugin('.nav-container')
let changeSkillsContent = new ChangeSkillsContentPlugin('#skills-el');
let scrollToTop = new ScrollToTopPlugin('.scroll-to-top');
