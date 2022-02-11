<?php class_exists('Template') or exit; ?>
<!DOCTYPE html>
<html>
	<head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- favicon for the website -->
        <link rel="icon" href="Ressources/app/assets/images/coding.png" />

        <!-- Bootstrap CSS and Font Awesome-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css">

        <!-- Custom CSS -->
        <link href="Ressources/app/base.css" rel="stylesheet">

        <!-- JS files -->
        <script type="module" src="Ressources/app/main.js" defer></script>

        <!-- SwiperJS -->
        <link
            rel="stylesheet"
            href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />
        <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>

        <title>
            JLS - spletti.info
        </title>
	</head>
	<body class="is-page-<?php echo $page ?>">
        <nav class="navbar navbar-expand-lg navbar-dark nav-container">
    <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 nav-logo">
            <span class="d-block d-lg-none">
                <?php echo $navData['logo']['mobile'] ?><span class="heading-dot">.</span>
            </span>
            <span class="d-none d-lg-block">
                <?php echo $navData['logo']['desktop'] ?><span class="heading-dot">.</span>
            </span>
        </span>
        <div class="collapse navbar-collapse justify-content-end d-sm-none d-md-block" id="navbarNav">
            <ul class="navbar-nav">
                <?php foreach($navData['links'] as $section => $linkDetails): ?>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="<?php echo $linkDetails['href'] ?>">
                            <span class="hover-underline <?php echo $linkDetails['el'] ?><?php if($linkDetails['el'] === 'start-el' && $page === 'home'): ?> nav-active<?php endif; ?>">
                                <?php echo $section ?>
                            </span>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>

        <div class="navbar-mobile justify-content-end d-md-none" id="navbarNav">
            <ul class="navbar-nav">
                <?php foreach($navData['links'] as $section => $linkDetails): ?>
                    <li class="nav-item<?php if($linkDetails['showMobile'] === false): ?> d-none<?php endif; ?>">
                        <a class="nav-link active" aria-current="page" href="<?php echo $linkDetails['href'] ?>">
                            <span class="hover-underline <?php echo $linkDetails['el'] ?><?php if($linkDetails['el'] === 'start-el' && $page === 'home'): ?> nav-active<?php endif; ?>">
                                <?php echo $section ?>
                            </span>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>
</nav>

        <main id="<?php echo $page ?>">
            
    <div id="particles-js"></div>

    <div class="container container--content">
        <section class="introduction start" id="start-el">
            <div class="introduction__content">
                <h1>
                    <?php echo $introContainer['h1'] ?>
                </h1>
                <p class="h3">
                    <?php echo $introContainer['subtitle'] ?>
                </p>
                <p class="introduction__description">
                    <?php echo $introContainer['description'] ?>
                </p>
                <div class="introduction__buttons">
                    <div class="btn--portfolio">
                        <a class="btn btn-primary" href="<?php echo $introContainer['portfolioButton']['link'] ?>">
                            <?php echo $introContainer['portfolioButton']['text'] ?>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                    <div class="btn--contact">
                        <a class="btn btn-primary" href="<?php echo $introContainer['contactButton']['link'] ?>">
                            <?php echo $introContainer['contactButton']['text'] ?>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="introduction__image">
                <img src="Ressources/app/assets/images/jls_profilepic.jpg">
            </div>

            <div class="social-list social-list--aside">
                <div class="social-list__item social-list__item--instagram">
                    <a class="social-icon" href="https://www.instagram.com/luca.spl3tti/" target="_blank" rel="noopener noreferrer">
                        <?php readfile ('Ressources/app/assets/icons/instagram.svg'); ?>
                    </a>
                </div>

                <div class="social-list__item social-list__item--github">
                    <a class="social-icon" href="https://www.github.com/lucaspl3tti" target="_blank" rel="noopener noreferrer">
                        <?php readfile ('Ressources/app/assets/icons/github.svg'); ?>
                    </a>
                </div>

                <div class="social-list__item social-list__item--linkedin">
                    <a class="social-icon" href="https://www.linkedin.com/in/jan-luca-splettst%C3%B6%C3%9Fer-105966212/" target="_blank" rel="noopener noreferrer">
                        <?php readfile ('Ressources/app/assets/icons/linkedin.svg'); ?>
                    </a>
                </div>
            </div>
        </section>

        <section class="portfolio" id="portfolio-el">
            <div class="heading heading--portfolio">
                <h2>
                    <?php echo $portfolio['heading'] ?><span class="heading-dot">.</span>
                </h2>
                <p class="subheading">
                    <?php echo $portfolio['subtitle'] ?>
                </p>
            </div>

            <div class="swiper swiper--projects">
                <div class="swiper-wrapper projects-wrapper">
                    <?php foreach($portfolio['projects'] as $key => $project): ?>
                        <div class="swiper-slide project-container <?php echo $key ?>">
                            <h3>
                                <?php echo $project['title'] ?>
                            </h3>
                            <div class="project-content">
                                <div class="project__info">
                                    <p class="project__description">
                                        <?php echo $project['description'] ?>
                                    </p>
                                    <div class="github-repo">
                                        <a class="project__link" href="<?php echo $project['link'] ?>" target="_blank" rel="noopener noreferrer">
                                            <span class="hover-underline"><?php echo $project['linkText'] ?></span>
                                            <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </section>
    </div>

    <section class="skills-qualifications" id="skills-el">
        <div class="container skills-qualifications-container">
            <h2 class="heading heading--skills">
                <?php echo $skillsAndQualifications['heading'] ?><span class="heading-dot">.</span>
            </h2>

            <div class="change-content">
                <ul class="nav">
                    <li class="nav-item change-skills skills-is-active">
                        <p class="hover-underline">
                            <?php echo $skillsAndQualifications['changeContent']['skills'] ?>
                        </p>
                    </li>
                    <li class="nav-item change-qualifications">
                        <p class="hover-underline">
                            <?php echo $skillsAndQualifications['changeContent']['qualifications'] ?>
                        </p>
                    </li>
                </ul>
            </div>

            <div class="skills show">
                <?php foreach($skillsAndQualifications['skills'] as $skill => $asset): ?>
                    <div class="skills__box">
                        <img class="skills__image" src="<?php echo $asset ?>" alt="">
                        <p class="skills__text"><?php echo $skill ?></p>
                    </div>
                <?php endforeach; ?>
            </div>

            <div class="qualifications">
                <div class="cv-container">
                    <?php foreach($skillsAndQualifications['qualifications'] as $key => $jobs): ?>
                        <div class="experience">
                            <h3 class="experience__heading">
                                <?php echo $key ?>
                            </h3>

                            <?php $jobsMax = count($jobs); ?>
                            <?php $counter = 0; ?>

                            <?php foreach($jobs as $job): ?>
                                <?php $counter++; ?>

                                <div class="job-container">
                                    <div class="job__timeline">
                                        <div class="timeline__point"></div>
                                        <div class="timeline__line<?php if($counter === $jobsMax): ?> d-none<?php endif; ?>"></div>
                                    </div>

                                    <div class="job-content">
                                        <div class="job__information">
                                            <div class="job__period"><?php echo $job['timeperiod'] ?></div>
                                            <div class="job__company"><?php echo $job['company'] ?></div>
                                        </div>

                                        <div class="job__description">
                                            <div class="job__title"><?php echo $job['jobTitle'] ?></div>
                                            <div class="job__tasks">
                                                <p class="task-list">
                                                    <?php foreach($job['tasks'] as $task): ?>
                                                        <span class="task-list__item">
                                                            <?php echo $task ?>
                                                            <br/>
                                                        </span>
                                                    <?php endforeach; ?>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <div class="container container-content">
        <section class="about" id="about-el">
            <h2 class="heading heading--about">
                <?php echo $about['heading'] ?><span class="heading-dot">.</span>
            </h2>

            <div class="about-content">
                <div class="about__introduction">
                    <div class="about__image about__image--introduction">
                        <img src="<?php echo $about['images']['me'] ?>" class="image__me">
                    </div>
                    <div class="about__introduction-content">
                        <p class="introduction__subheading"><?php echo $about['subheading'] ?></p>
                        <p class="introduction__start"><?php echo $about['intro'] ?></p>
                        <p class="introduction__myself"><?php echo $about['aboutMe'] ?></p>
                        <p class="introduction__interests"><?php echo $about['interests'] ?></p>
                    </div>
                </div>

                <div class="about__beginning">
                    <div class="about__image about__image--beginning about__image--centered-mobile">
                        <img src="<?php echo $about['images']['backend'] ?>" class="image__backend">
                    </div>
                    <div class="about__my-start">
                        <p class="first-project"><?php echo $about['firstProject'] ?></p>
                    </div>
                </div>

                <div class="about__career">
                    <div class="about__image about__image--career about__image--centered-mobile">
                        <img src="<?php echo $about['images']['frontend'] ?>" class="image__frontend">
                    </div>
                    <div class="career__path">
                        <p class="career__backend"><?php echo $about['backend'] ?></p>
                        <p class="career__frontend"><?php echo $about['frontend'] ?></p>
                        <p class="career__today"><?php echo $about['today'] ?></p>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact-button" id="contact-el">
            <a href="<?php echo $contact['href'] ?>" class="btn btn-primary">
                <?php echo $contact['text'] ?>
                <i class="fas fa-arrow-right"></i>
            </a>
        </section>
    </div>

        </main>

        <footer class="footer">
    <div class="container container--footer">
        <div class="social-list social-list--footer">
            <div class="social-list__item social-list__item--instagram">
                <a class="social-icon" href="https://www.instagram.com/luca.spl3tti/" target="_blank" rel="noopener noreferrer">
                    <?php readfile ('Ressources/app/assets/icons/instagram-white.svg'); ?>
                </a>
            </div>

            <div class="social-list__item social-list__item--github">
                <a class="social-icon" href="https://www.github.com/lucaspl3tti" target="_blank" rel="noopener noreferrer">
                    <?php readfile ('Ressources/app/assets/icons/github-white.svg'); ?>
                </a>
            </div>

            <div class="social-list__item social-list__item--linkedin">
                <a class="social-icon" href="https://www.linkedin.com/in/jan-luca-splettst%C3%B6%C3%9Fer-105966212/" target="_blank" rel="noopener noreferrer">
                    <?php readfile ('Ressources/app/assets/icons/linkedin-white.svg'); ?>
                </a>
            </div>
        </div>

        <div class="footer__copyright">
            <p>© Jan-Luca Splettstößer 2021-2022</p>
        </div>
        <div class="footer__links">
            <p><a class="footer__link-item hover-underline<?php if($page === 'legal'): ?> nav-active<?php endif; ?>" href="/legal">Impressum – Legal Disclosure</a></p>
            <p><a class="footer__link-item hover-underline<?php if($page === 'privacy'): ?> nav-active<?php endif; ?>" href="/privacy">Datenschutzerklärung – Privacy Policy</a></p>
        </div>
    </div>
</footer>


        <div class="scroll-to-top">
    <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="rgb(248, 247, 253)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
</div>


        
    <!-- particles.js script -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"></script>
    <script src="Ressources/app/plugins/vendor/vincentgarreau/particles.js"></script>


        <!-- Optional JavaScript; choose one of the two! -->
        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
    </body>
</html>







