<?php
include('Ressources/snippet/components/navData.php');


$data = [
    'navData' => $navData,
    'page' => 'home',
    'introContainer' => [
        'h1' => "Hi, name's Luca",
        'subtitle' => 'Frontend Developer und UI/UX Designer',
        'description' => 'Leidenschaftlicher Entwickler mit einer Liebe für sauberen Code und kreative Designs',
        'portfolioButton' => [
            'text' => 'Meine Arbeit',
            'link' => '#portfolio-el',
        ],
        'contactButton' => [
            'text' => 'Kontakt',
            'link' => 'mailto:jan-luca@spletti.info',
        ],
    ],
    'portfolio' => [
        'heading' => 'Projekte & Portfolio',
        'subtitle' => 'Einige Beispiele meiner Arbeit',
        'projects' => [
            'portfolio-website' => [
                'title' => 'Portfolio Webseite',
                'description' => 'Meine Portfolio Webseite habe ich von grundauf neu aufgebaut um mich hier auch etwas ausprobieren zu können. Der Code ist auf GitHub zugänglich.',
                'link' => 'https://github.com/lucaspl3tti/spletti_info',
                'linkText' => 'Github Repo',
                'imageSrc' => '',
            ],
            'custom-linktree' => [
                'title' => 'Custom Linktree',
                'description' => 'Eine custom linktree Webseite umgesetzt mit HTML, CSS und JS, damit du alle deine wichtigsten Links an einem Ort sammeln kannst. Einfach anzupassen!',
                'link' => 'https://github.com/lucaspl3tti/custom_linktree',
                'linkText' => 'Github Repo',
                'imageSrc' => 'assets/img/linktree_mockup.png',
            ],
            'structured-data' => [
                'title' => 'Structured Data Extension',
                'description' => 'Eine TYPO3 9.5 Extension zum einfachen pflegen von strukturierten Daten, wie bspw. Personendaten, Organisationsdaten oder Eventdaten.',
                'link' => 'https://github.com/lucaspl3tti/jls_structureddata',
                'linkText' => 'Github Repo',
                'imageSrc' => 'assets/img/organize.png',
            ],
        ]
    ],
    'skillsAndQualifications' => [
        'heading' => 'Skills und Qualifikationen',
        'subtitle' => '',
        'changeContent' => [
            'skills' => 'Skills',
            'qualifications' => 'Qualifikationen',
        ],
        'skills' => [
            'JavaScript' => 'Ressources/app/assets/icons/skills/javascript.png',
            'CSS3/SCSS' => 'Ressources/app/assets/icons/skills/css3.png',
            'HTML5' => 'Ressources/app/assets/icons/skills/html5.png',
            'UI/UX' => 'Ressources/app/assets/icons/skills/ui.png',
            'PHP' => 'Ressources/app/assets/icons/skills/php.png',
            'PDFlib PHP' => 'https://img.icons8.com/color/96/000000/pdf-2--v1.png',
            'Adobe CC' => 'Ressources/app/assets/icons/skills/creative-cloud.png',
            'Shopware 6' => 'Ressources/app/assets/icons/skills/shopware.png',
            'Typo3' => 'Ressources/app/assets/icons/skills/typo3.png',
            'WordPress' => 'Ressources/app/assets/icons/skills/wordpress.png',
            'Datenbanken' => 'Ressources/app/assets/icons/skills/datenbank.png',
            'Newsletter' => 'Ressources/app/assets/icons/skills/mail.png',
        ],
        'qualifications' => [
            'Berufliche Laufbahn' => [
                'job1' => [
                    'timeperiod' => '2021 - Today',
                    'company' => 'twocream. creativemedia GmbH',
                    'jobTitle' => 'Junior Frontend Developer',
                    'tasks' => [
                        'Implementierung von User Interfaces innerhalb von Webanwendungen',
                        'Shopware Plugin Programmierung auf Basis von JavaScript',
                        'Umsetzung PDF-Renderings auf Basis von PDFlib in PHP',
                        'Unterstützung bei der Umsetzung von Desings in Adobe XD',
                    ],
                ],
                'job2' => [
                    'timeperiod' => '2020 - 2021',
                    'company' => 'move elevator GmbH',
                    'jobTitle' => 'Frontend Developer Trainee',
                    'tasks' => [
                        'Implementierung von User Interfaces innerhalb von Webanwendungen',
                        'Gestaltung von HTML Newsletterlayouts',
                        'Ünterstützung bei der Umsetzung von Designs in Sketch',
                    ],
                ],
                'job3' => [
                    'timeperiod' => '2018 - 2020',
                    'company' => 'move elevator GmbH',
                    'jobTitle' => 'Backend Developer Trainee',
                    'tasks' => [
                        'Implementierung und Weiterentwicklung von Anwendungen auf Basis von Typo3, PHP und MySQL',
                        'Pflege und Weiterentwicklung bestehender Skripte',
                        'Migration von bestehenden Softwarelösungen auf neue Systeme',
                        'Pflege von Datenbanken mit Hilfe von Datenbank-Tools',
                    ],
                ],
            ],
            'Schulische Laufbahn' => [
                'school1' => [
                    'timeperiod' => '2018 - 2021',
                    'company' => 'Berufskolleg Stadtmitte Mülheim',
                    'jobTitle' => 'Ausbildung Fachinformatiker Anwendungsentwicklung',
                    'tasks' => [
                        'Schulischer Teil der dualen Ausbildung zum Fachinformatiker Anwendungsentwicklung',
                        'Schwerpunkt: PHP, JavaScirpt, C++',
                    ],
                ],
                'school2' => [
                    'timeperiod' => '2009 - 2018',
                    'company' => 'Ernst-Barlach-Gesamtschule',
                    'jobTitle' => 'Allgemeine Hochschulreife',
                    'tasks' => [
                        'Abitur mit sprachlichem Schwerpunkt',
                        'LKs: Englisch und Deutsch',
                        '3. Abifach: Technik',
                        '4. Abifach: Erziehungswissenschaft',
                    ],
                ],
            ],
        ],
    ],
    'about' => [
        'heading' => 'Über mich',
        'images' => [
            'me' => 'Ressources/app/assets/images/about-me.png',
            'backend' => 'Ressources/app/assets/images/backend.png',
            'frontend' => 'Ressources/app/assets/images/ux.png',
        ],
        'subheading' => 'Nett dich kennenzulernen!',
        'intro' => "Name's Jan-Luca, Frontend Developer und UI Designer",
        'aboutMe' => 'Hi, ich bin Junior Frontend Webdeveloper und UI Designer aus Deutschland. Ich habe über 3 Jahre an Erfahrung im entwickeln digitaler Produkte.',
        'interests' => '
            Es ist mir sehr wichtig, Code zu schreiben welcher einfach zu verstehen, sowie auch zu erweitern ist und ich liebe es zudem interessante und auffällige Designs zu gestalten und zu entwickeln. Ich begann schon früh damit, erste Projekte im Bereich Webdevelopment umzusetzen und Erfahrung zu sammeln, da ich schon im jungen Alter Interesse für das Thema entwickelte. Dies war vor Allem durch meinen Vater geprägt und dann auch gefördert worden.
        ',
        'firstProject' => 'Mein erstes Projekt war eine Pokemon Fanpage, auf welcher ich News und weiteren Inhalt rund um die Spiele veröffentlicht habe. Bei diesem Projekt konnte ich erste Erfahrungen mit HTML und CSS sammeln. Über die Jahre erweiterte ich mein Wissen und lernte neue Dinge, wie WordPress und PHP. In der Schule bekam ich außerdem die Chance, mein Wissen im IT-Kurs zu vertiefen.',
        'backend' => 'Nach der Schule startete ich dann meinen Weg als Webdeveloper in einer Digitalagentur. Dort war ich die ersten zwei Jahre hauptsächlich im Backend tätig, konnte aber auch Erfahrungen im Frontend sammeln und lernte neue Sachen wie JavaScript und wie Ich mit UI-Tools wie XD oder Sketch umgehen kann.',
        'frontend' => 'In den letzten paar Monaten dieser ersten zwei Jahre merkte Ich dann, dass ich mich in der Frontend-Entwicklung viel wohler fühle, also richtete ich meinen Fokus neu aus.',
        'today' => '
            Nach meiner Ausbildung begann ich dann als Junior Frontend Dev zu arbeiten, ebenfalls wieder in einer Digitalagentur. Dort bin ich aktuell verantwortlich für die Implementierung von UIs in Webanwendungen, sowie das Umsetzen von Plugins auf JavaScript Basis. Des Weiteren entwickle ich PDFlib Skripte, mit denen unsere Kunden dynamische PDFs generieren können.
        ',
    ],
    'contact' => [
        'text' => 'Kontaktiere mich!',
        'href' => 'mailto:jan-luca@spletti.info',
    ],
];
