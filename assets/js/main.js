import NavClickEventsPlugin from './nav-click-events.js';
import NavHighlightPlugin from './nav-highlight.js';
import ChangeLogoContentPlugin from './change-logo.js';
import ChangeSkillsContentPlugin from './change-content.js';
import ScrollToTopPlugin from './scrollToTop.js';

let navClickEvents = new NavClickEventsPlugin('.nav-container');
let navHighlight = new NavHighlightPlugin('.nav-container');
let changeLogoText = new ChangeLogoContentPlugin('.nav-container');
let changeSkills = new ChangeSkillsContentPlugin('#skills-el');
let scrollToTop = new ScrollToTopPlugin('.scroll-to-top');
