export const websiteData = {
    introContainer: {
        heading: 'Hey,<br/>name\'s Luca',
        subtitle: 'Frontend Developer und UI/UX Designer',
        description: 'I\'m  a junior developer and designer with a burning passion for clean, maintainable code and creative designs.',
        buttons: {
            portfolioButton: {
                text: 'My Work',
                href: '#portfolio',
                class: 'btn--portfolio'
            },
            contactButton: {
                text: 'Contact Me',
                href: '/#contact',
                class: 'btn--contact'
            },
        },
        profileImage: 'img/images/jls_profilepic.jpg',
    },
    portfolio: {
        heading: 'projects & portfolio',
        subtitle: 'A showcase of some of my recent work',
        projects: {
            'random-activity-app': {
                id: 1,
                title: 'Random Activity SPA',
                description: 'A little web app for a funny evening with your friends. It\'s a little inspired by Truth or Dare but the main goal for the app was to have a less forced vibe to do things. You can add an infinite number of players and every player can add as many activites as they like. It\'s all about good vibes!<br/>Based on Vue.js and Bootstrap 5',
                repoLink: 'https://github.com/lucaspl3tti/random-activity-webapp',
                liveLink: 'https://random-activity-spa.netlify.app/',
                liveLinkText: 'Live Site',
                image: 'img/images/random-activity-spa_iphone13-mockup2.png',
                imageRatio: '72/115',
                paddingBottom: false,
            },
            'portfolio-website': {
                id: 2,
                title: 'Portfolio Webseite',
                description: 'My personal portfolio website! I developed it so I can showcase my work and represent myself in the web. It\'s build with Vue.js and Bootstrap 5.',
                repoLink: 'https://github.com/lucaspl3tti/spletti_info',
                image: 'img/images/portfolio-website_macbook-air-mockup.png',
                imageRatio: '40/27',
                paddingBottom: false,
            },
            'planets-facts-website': {
                id: 3,
                title: 'Planet Facts Site',
                description: 'Real life project challenge from <a class="hover-underline" href="https://frontendmentor.io/" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.<br/>The goal was to create a site, where users can learn cool facts about all the planets in our solar system, which should at the end look like the given design.<br/>Based on Vue.js and Bootstrap 5.',
                repoLink: 'https://github.com/lucaspl3tti/planet-facts-site',
                liveLink: 'https://planet-facts-jls.netlify.app/',
                liveLinkText: 'Live Site',
                image: 'img/images/planets-facts-website_mockups.png',
                imageRatio: '16/9',
                paddingBottom: false,
            },
            'tip-calculator-app': {
                id: 4,
                title: 'Tip Calculator App',
                description: 'Real life project challenge from <a class="hover-underline" href="https://frontendmentor.io/" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.<br/>The app should calculate a tip, based on the price you paid, the number of people and a percentage of the paid price you can choose.<br/>It was build with SCSS + Bootstrap 5 and Vanilla JavaScript.',
                repoLink: 'https://github.com/lucaspl3tti/tip-calculator-app',
                liveLink: 'https://tap-calculator-jls.netlify.app/',
                liveLinkText: 'Live Site',
                image: 'img/images/tip-calculator-app_macbook-air-mockup.png',
                imageRatio: '7/5',
                paddingBottom: false,
            },
            'pdflib-demo-script': {
                id: 5,
                title: 'PDFlib Demo Script',
                description: 'A dynamic pdf generator demo, to showcase typical use-cases of the library and how one can solve it. It\'s build on the php version of the PDFlib library.',
                repoLink: 'https://github.com/lucaspl3tti/pdflib-example-rendering',
                liveLink: '/files/ExamplePDF_jls_pdf-rendering.pdf',
                liveLinkText: 'Example PDF',
                image: 'img/images/pdflib-example_macbook-air-mockup.png',
                imageRatio: '40/27',
                paddingBottom: false,
            }
        },
    },
    skillsAndQualifications: {
        heading: 'skills and qualifications',
        subtitle: '',
        changeContent: {
            skills: 'Skills',
            qualifications: 'Qualifications',
        },
        skills: {
            'JavaScript': 'img/icons/skills/javascript.png',
            'SCSS / SASS': 'img/icons/skills/sass-logo.png',
            'HTML5': 'img/icons/skills/html5.png',
            'Vue.js': 'img/icons/skills/vue-logo.png',
            'UI/UX': 'img/icons/skills/ui.png',
            'PDFlib PHP': 'https://img.icons8.com/color/96/000000/pdf-2--v1.png',
            'PHP': 'img/icons/skills/php.png',
            'Shopware 6': 'img/icons/skills/shopware.png',
            'WordPress': 'img/icons/skills/wordpress.png',
            'Git SCM': 'img/icons/skills/git-logo.png',
            // 'Gulp': 'img/icons/skills/gulpjs-logo.png',
            'CSS': 'img/icons/skills/css3.png',
            'Figma': 'img/icons/skills/figma-logo.png',
            'Adobe CC': 'img/icons/skills/creative-cloud.png',
            'Newsletter': 'img/icons/skills/mail.png',
        },
        qualifications: {
            'Professional career': {
                job1: {
                    isLast: false,
                    timeperiod: '2021 - Today',
                    company: 'twocream. creativemedia GmbH',
                    jobTitle: 'Junior Frontend Developer',
                    tasks: [
                        'Implementation of User Interfaces in Web Applications',
                        'Developing Shopware 6 plugins / themes based on JavaScript and SCSS',
                        'Realisation of dynamic PDF generators based on PDFlib PHP library',
                        'Supporting the creation designs in Adobe XD and Sketch',
                    ],
                },
                job2: {
                    isLast: false,
                    timeperiod: '2020 - 2021',
                    company: 'move elevator GmbH',
                    jobTitle: 'Frontend Developer Trainee',
                    tasks: [
                        'Implementation of User Interfaces in Web Applications',
                        'Developing HTML Newsletter Layouts',
                        'Supporting the creation of designs in Sketch',
                    ],
                },
                job3: {
                    isLast: true,
                    timeperiod: '2018 - 2020',
                    company: 'move elevator GmbH',
                    jobTitle: 'Backend Developer Trainee',
                    tasks: [
                        'Implementation and maintaining of Web Applications based on Typo3, PHP and MySQL',
                        'Maintaining and Enhancing of existing PHP scripts',
                        'Migration of existing software solutions to newer systems',
                        'Maintaining databases with the help of database-tools',
                    ],
                },
            },
            'Schulische Laufbahn': {
                school1: {
                    isLast: false,
                    timeperiod: '2018 - 2021',
                    company: 'Berufskolleg Stadtmitte Mülheim',
                    jobTitle: 'Trainee as IT specialist in application development',
                    tasks: [
                        'Academic part of my apprenticeship as a web developer',
                        'Main focus: PHP, JavaScirpt, C++ and databases',
                    ],
                },
                school2: {
                    isLast: true,
                    timeperiod: '2009 - 2018',
                    company: 'Ernst-Barlach-Gesamtschule',
                    jobTitle: 'Diploma from german secondary school qualifying for university',
                    tasks: [
                        'A-Levels with a linguistic focus',
                        'Advanced Courses: English and German',
                        '3. Exam Subject: Engineering',
                        '4. Abifach: Educational Science',
                    ],
                },
            },
        },
    },
    about: {
        heading: 'about me',
        images: {
            me: 'img/images/about-me.png',
            backend: 'img/images/backend.png',
            frontend: 'img/images/ux.png',
        },
        subheading: 'Nice to meet you!',
        intro: 'Name\'s Jan-Luca, Junior Frontend Developer und UI Designer',
        aboutMe: 'Currently I have over three years of practical experience in developing digital products. It is especially important to me to write Code that\'s easy to understand as well as to maintain. Moreover I love to create beautiful and eye-catching desings.',
        interests: 'The interest in web development already developed in my youth, which was greatly incfluenced and then also encouraged by my Dad, who at that time build some websites himself, like the one for his company.',
        firstProject: 'My first own project was a pokemon fanpage, where I would post news and useful information about the games. Though it was build with a homepage builder, I got my first experience with HTML and CSS through building the Layout. In the following years I extended my knowledge and learned new things like WordPress and PHP. Furthermore I got the chance to deepen that knowledge in my school\'s IT course.',
        backend: 'After school, in 2018, i then began my training as a Webdeveloper at a german digital agency. In the first two years I was mainly active in backend development, but I also got the chance to get more in contact with Frontend Development and also learned new things, for example how to use Design-Tools like Adobe XD or Sketch.',
        frontend: 'But with time I noticed that I\'m a lot more comfortable in Frontend rather than the backend, so I decided to switch my focus entirely. After I completed my training I started at my current position as a Junior Frontend Developer at another german digital agency. There I\'m currently responsible for the implementation of UIs in web applications, as well as developing Shopware 6 themes and plugins with SCSS and JavaScript. Moreover I am also developing dynamic PDF generators with the PDFlib PHP Library.',
        today: 'In my freetime my head is also wrapped up with Frontend Development and Design. Currently I love to expand my JavaScript knowledge as well as building some applications with Vue.js',
    },
    contact: {
        text: 'Contact me!',
        href: 'mailto:jan-luca@spletti.info',
    },
}

export const legalData = {
    page: 'legal',
    personalInfo: 'Jan-Luca Splettstößer<br/>Dorotheenstraße 138a<br/>46537 Dinslaken',
    contactInfo: {
        heading: 'Kontakt',
        email: 'jan-luca@spletti.info',
    },
    'inCharge': {
        heading: 'Redaktionell verantwortlich',
        contacts: [
            'Jan-Luca Splettstößer<br/>Dorotheenstraße 138a<br/>46537 Dinslaken',
        ],
    },
    liability: {
        content: {
            heading: 'Haftung für Inhalte',
            copy: 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
        },
        links: {
            heading: 'Haftung für Links',
            copy: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
        },
    },
    copyright: {
        heading: 'Urheberrecht',
        copy: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
    },
    source: 'Quelle:<br/><a class="hover-underline" href="https://www.e-recht24.de">https://www.e-recht24.de</a>',
}

export const assets = {
    icons: {
        instagram: '<svg height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm0,96c-43.453,0 -48.902,0.184 -65.968,0.963c-17.03,0.777 -28.661,3.482 -38.839,7.437c-10.521,4.089 -19.444,9.56 -28.339,18.455c-8.895,8.895 -14.366,17.818 -18.455,28.339c-3.955,10.177 -6.659,21.808 -7.437,38.838c-0.778,17.066 -0.962,22.515 -0.962,65.968c0,43.453 0.184,48.902 0.962,65.968c0.778,17.03 3.482,28.661 7.437,38.838c4.089,10.521 9.56,19.444 18.455,28.34c8.895,8.895 17.818,14.366 28.339,18.455c10.178,3.954 21.809,6.659 38.839,7.436c17.066,0.779 22.515,0.963 65.968,0.963c43.453,0 48.902,-0.184 65.968,-0.963c17.03,-0.777 28.661,-3.482 38.838,-7.436c10.521,-4.089 19.444,-9.56 28.34,-18.455c8.895,-8.896 14.366,-17.819 18.455,-28.34c3.954,-10.177 6.659,-21.808 7.436,-38.838c0.779,-17.066 0.963,-22.515 0.963,-65.968c0,-43.453 -0.184,-48.902 -0.963,-65.968c-0.777,-17.03 -3.482,-28.661 -7.436,-38.838c-4.089,-10.521 -9.56,-19.444 -18.455,-28.339c-8.896,-8.895 -17.819,-14.366 -28.34,-18.455c-10.177,-3.955 -21.808,-6.66 -38.838,-7.437c-17.066,-0.779 -22.515,-0.963 -65.968,-0.963Zm0,28.829c42.722,0 47.782,0.163 64.654,0.933c15.6,0.712 24.071,3.318 29.709,5.509c7.469,2.902 12.799,6.37 18.397,11.969c5.6,5.598 9.067,10.929 11.969,18.397c2.191,5.638 4.798,14.109 5.509,29.709c0.77,16.872 0.933,21.932 0.933,64.654c0,42.722 -0.163,47.782 -0.933,64.654c-0.711,15.6 -3.318,24.071 -5.509,29.709c-2.902,7.469 -6.369,12.799 -11.969,18.397c-5.598,5.6 -10.928,9.067 -18.397,11.969c-5.638,2.191 -14.109,4.798 -29.709,5.509c-16.869,0.77 -21.929,0.933 -64.654,0.933c-42.725,0 -47.784,-0.163 -64.654,-0.933c-15.6,-0.711 -24.071,-3.318 -29.709,-5.509c-7.469,-2.902 -12.799,-6.369 -18.398,-11.969c-5.599,-5.598 -9.066,-10.928 -11.968,-18.397c-2.191,-5.638 -4.798,-14.109 -5.51,-29.709c-0.77,-16.872 -0.932,-21.932 -0.932,-64.654c0,-42.722 0.162,-47.782 0.932,-64.654c0.712,-15.6 3.319,-24.071 5.51,-29.709c2.902,-7.468 6.369,-12.799 11.968,-18.397c5.599,-5.599 10.929,-9.067 18.398,-11.969c5.638,-2.191 14.109,-4.797 29.709,-5.509c16.872,-0.77 21.932,-0.933 64.654,-0.933Zm0,49.009c-45.377,0 -82.162,36.785 -82.162,82.162c0,45.377 36.785,82.162 82.162,82.162c45.377,0 82.162,-36.785 82.162,-82.162c0,-45.377 -36.785,-82.162 -82.162,-82.162Zm0,135.495c-29.455,0 -53.333,-23.878 -53.333,-53.333c0,-29.455 23.878,-53.333 53.333,-53.333c29.455,0 53.333,23.878 53.333,53.333c0,29.455 -23.878,53.333 -53.333,53.333Zm104.609,-138.741c0,10.604 -8.597,19.199 -19.201,19.199c-10.603,0 -19.199,-8.595 -19.199,-19.199c0,-10.604 8.596,-19.2 19.199,-19.2c10.604,0 19.201,8.596 19.201,19.2Z"/></svg>',
        instagramWhite: '<svg height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" fill="rgb(251, 251, 254)" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm0,96c-43.453,0 -48.902,0.184 -65.968,0.963c-17.03,0.777 -28.661,3.482 -38.839,7.437c-10.521,4.089 -19.444,9.56 -28.339,18.455c-8.895,8.895 -14.366,17.818 -18.455,28.339c-3.955,10.177 -6.659,21.808 -7.437,38.838c-0.778,17.066 -0.962,22.515 -0.962,65.968c0,43.453 0.184,48.902 0.962,65.968c0.778,17.03 3.482,28.661 7.437,38.838c4.089,10.521 9.56,19.444 18.455,28.34c8.895,8.895 17.818,14.366 28.339,18.455c10.178,3.954 21.809,6.659 38.839,7.436c17.066,0.779 22.515,0.963 65.968,0.963c43.453,0 48.902,-0.184 65.968,-0.963c17.03,-0.777 28.661,-3.482 38.838,-7.436c10.521,-4.089 19.444,-9.56 28.34,-18.455c8.895,-8.896 14.366,-17.819 18.455,-28.34c3.954,-10.177 6.659,-21.808 7.436,-38.838c0.779,-17.066 0.963,-22.515 0.963,-65.968c0,-43.453 -0.184,-48.902 -0.963,-65.968c-0.777,-17.03 -3.482,-28.661 -7.436,-38.838c-4.089,-10.521 -9.56,-19.444 -18.455,-28.339c-8.896,-8.895 -17.819,-14.366 -28.34,-18.455c-10.177,-3.955 -21.808,-6.66 -38.838,-7.437c-17.066,-0.779 -22.515,-0.963 -65.968,-0.963Zm0,28.829c42.722,0 47.782,0.163 64.654,0.933c15.6,0.712 24.071,3.318 29.709,5.509c7.469,2.902 12.799,6.37 18.397,11.969c5.6,5.598 9.067,10.929 11.969,18.397c2.191,5.638 4.798,14.109 5.509,29.709c0.77,16.872 0.933,21.932 0.933,64.654c0,42.722 -0.163,47.782 -0.933,64.654c-0.711,15.6 -3.318,24.071 -5.509,29.709c-2.902,7.469 -6.369,12.799 -11.969,18.397c-5.598,5.6 -10.928,9.067 -18.397,11.969c-5.638,2.191 -14.109,4.798 -29.709,5.509c-16.869,0.77 -21.929,0.933 -64.654,0.933c-42.725,0 -47.784,-0.163 -64.654,-0.933c-15.6,-0.711 -24.071,-3.318 -29.709,-5.509c-7.469,-2.902 -12.799,-6.369 -18.398,-11.969c-5.599,-5.598 -9.066,-10.928 -11.968,-18.397c-2.191,-5.638 -4.798,-14.109 -5.51,-29.709c-0.77,-16.872 -0.932,-21.932 -0.932,-64.654c0,-42.722 0.162,-47.782 0.932,-64.654c0.712,-15.6 3.319,-24.071 5.51,-29.709c2.902,-7.468 6.369,-12.799 11.968,-18.397c5.599,-5.599 10.929,-9.067 18.398,-11.969c5.638,-2.191 14.109,-4.797 29.709,-5.509c16.872,-0.77 21.932,-0.933 64.654,-0.933Zm0,49.009c-45.377,0 -82.162,36.785 -82.162,82.162c0,45.377 36.785,82.162 82.162,82.162c45.377,0 82.162,-36.785 82.162,-82.162c0,-45.377 -36.785,-82.162 -82.162,-82.162Zm0,135.495c-29.455,0 -53.333,-23.878 -53.333,-53.333c0,-29.455 23.878,-53.333 53.333,-53.333c29.455,0 53.333,23.878 53.333,53.333c0,29.455 -23.878,53.333 -53.333,53.333Zm104.609,-138.741c0,10.604 -8.597,19.199 -19.201,19.199c-10.603,0 -19.199,-8.595 -19.199,-19.199c0,-10.604 8.596,-19.2 19.199,-19.2c10.604,0 19.201,8.596 19.201,19.2Z"/></svg>',
        github: '<svg height="100%" enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle cx="256" cy="256" fill="#000" r="256"/><g><path d="M256,93.9c-89.5,0-162.1,72.6-162.1,162.1c0,70.5,45,130.4,107.8,152.8c0.3,0.1,1.4,0.5,1.7,0.6    c0.9,0.3,1.9,0.5,2.9,0.5c5.3,0,9.5-4.3,9.5-9.5c0-0.3,0-0.5,0-0.8l0,0c0-8.6,0-19.5,0-28.2c-10.3,2.1-25.9,4.1-34.4,0    c-11-5.3-16.6-12.1-21.9-25.5c-6.6-16.3-21.8-20.8-22.4-23.6c-0.6-2.9,16.1-7.2,24.7,2.7c8.6,9.9,17.3,29.7,35.8,27.8    c9.1-0.9,15-2.4,18.7-3.5c0.7-6.4,2.8-14.3,8.1-19.9c-43.5-7.2-72.5-30.6-72.5-76.5c0-20.9,6-37.1,16.6-49.2    c-1.8-10-4.8-33.2,3.2-41.3c0,0,11.3-7,43.7,15.8c12.1-2.8,25.5-4.2,39.8-4.2l0,0c0.3,0,0.5,0,0.8,0c0.3,0,0.5,0,0.8,0l0,0    c14.4,0.1,27.8,1.5,39.8,4.2c32.4-22.8,43.7-15.8,43.7-15.8c8,8.2,5,31.4,3.2,41.3c10.6,12.2,16.6,28.4,16.6,49.2    c0,45.9-28.9,69.3-72.5,76.5c8.3,8.7,8.6,22.8,8.6,28.6c0,5.5,0,42.3,0,42.5c0,5.3,4.3,9.5,9.5,9.5c0.8,0,1.5-0.1,2.3-0.3    c0.2,0,0.8-0.2,1-0.3c63.5-22,109.1-82.3,109.1-153.3C418.1,166.4,345.5,93.9,256,93.9z" fill="rgba(248, 247, 253, 1)"/></g></g></svg>',
        githubWhite: '<svg height="100%" enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle cx="256" cy="256" fill="rgb(251, 251, 254)" r="256"/><g><path d="M256,93.9c-89.5,0-162.1,72.6-162.1,162.1c0,70.5,45,130.4,107.8,152.8c0.3,0.1,1.4,0.5,1.7,0.6    c0.9,0.3,1.9,0.5,2.9,0.5c5.3,0,9.5-4.3,9.5-9.5c0-0.3,0-0.5,0-0.8l0,0c0-8.6,0-19.5,0-28.2c-10.3,2.1-25.9,4.1-34.4,0    c-11-5.3-16.6-12.1-21.9-25.5c-6.6-16.3-21.8-20.8-22.4-23.6c-0.6-2.9,16.1-7.2,24.7,2.7c8.6,9.9,17.3,29.7,35.8,27.8    c9.1-0.9,15-2.4,18.7-3.5c0.7-6.4,2.8-14.3,8.1-19.9c-43.5-7.2-72.5-30.6-72.5-76.5c0-20.9,6-37.1,16.6-49.2    c-1.8-10-4.8-33.2,3.2-41.3c0,0,11.3-7,43.7,15.8c12.1-2.8,25.5-4.2,39.8-4.2l0,0c0.3,0,0.5,0,0.8,0c0.3,0,0.5,0,0.8,0l0,0    c14.4,0.1,27.8,1.5,39.8,4.2c32.4-22.8,43.7-15.8,43.7-15.8c8,8.2,5,31.4,3.2,41.3c10.6,12.2,16.6,28.4,16.6,49.2    c0,45.9-28.9,69.3-72.5,76.5c8.3,8.7,8.6,22.8,8.6,28.6c0,5.5,0,42.3,0,42.5c0,5.3,4.3,9.5,9.5,9.5c0.8,0,1.5-0.1,2.3-0.3    c0.2,0,0.8-0.2,1-0.3c63.5-22,109.1-82.3,109.1-153.3C418.1,166.4,345.5,93.9,256,93.9z" fill="#3D2C8D"/></g></g></svg>',
        linkedin: '<?xml version="1.0" ?><svg height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z"/></svg>',
        linkedinWhite: '<svg height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" fill="rgb(251, 251, 254)" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z"/></svg>',
    }
}
