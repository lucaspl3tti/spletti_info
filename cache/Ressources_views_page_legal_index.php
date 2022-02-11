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
            Impressum - spletti.info
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
            
<div class="container container--content">
    <div class="legal-disclosure">
        <h1>Impressum</h1>

        <div class="legal-disclosure__content">
            <div class="personal-info">
                <p>
                    <?php echo $personalInfo ?>
                </p>
            </div>

            <div class="contact-info">
                <h2><?php echo $contactInfo['heading'] ?></h2>
                <p>
                    E-Mail: <a class="hover-underline" href="mailto:<?php echo $contactInfo['email'] ?>">
                        <?php echo $contactInfo['email'] ?>
                    </a>
                </p>
            </div>

            <div class="in-charge">
                <h2><?php echo $inCharge['heading'] ?></h2>
                <?php foreach($inCharge['contacts'] as $contact): ?>
                    <p>
                        <?php echo $contact ?>
                    </p>
                <?php endforeach; ?>
            </div>
            <div class="liability-content">
                <h2><?php echo $liability['content']['heading'] ?></h2>
                <p><?php echo $liability['content']['copy'] ?></p>
            </div>

            <div class="liability-links">
                <h2><?php echo $liability['links']['heading'] ?></h2>
                <p><?php echo $liability['links']['copy'] ?></p>
            </div>

            <div class="copyright">
                <h2><?php echo $copyright['heading'] ?></h2>
                <p><?php echo $copyright['copy'] ?></p>
            </div>

            <p class="legal-disclosure__source">
                <?php echo $source ?>
            </p>
        </div>
    </div>
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


        

        <!-- Optional JavaScript; choose one of the two! -->
        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
    </body>
</html>





