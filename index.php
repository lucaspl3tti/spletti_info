<?php
include('assets/ressources/content/data.php');

$introContainer = $data['introContainer'];
$portfolio = $data['portfolio'];
$skillsAndQualifications = $data['skills-qualifications'];
$skills = $skillsAndQualifications['skills'];
$qualifications = $skillsAndQualifications['qualifications'];
$about = $data['about'];
$contact = $data['contact'];

?>

<!doctype html>
<html lang="en">
    <head>
        <?php
            include ('assets/ressources/includes/head.php');
        ?>

        <title>spletti.info</title>
    </head>
    <body class="main-page">
        <header class="nav-container">
            <?php
                $page = 'home';
                include ('assets/ressources/includes/layouts/nav.php');
            ?>
        </header>
        <main>
            <div class="section-one particles">
                <div id="particles-js"></div>

                <div class="content-container section">
                    <section class="intro-container start" id="start-el">
                        <div class="intro-image">
                            <img src="assets/img/jls_profilepic.jpg">
                        </div>

                        <div class="intro-social-aside">
                            <div class="social-instagram">
                                <a class="social-icon" href="https://www.instagram.com/luca.spl3tti/" target="_blank">
                                    <?php readfile ('assets/img/icons/instagram.svg'); ?>
                                </a>
                            </div>

                            <div class="social-github">
                                <a class="social-icon" href="https://www.github.com/lucaspl3tti" target="_blank">
                                    <?php readfile ('assets/img/icons/github.svg'); ?>
                                </a>
                            </div>

                            <div class="social-linkedin">
                                <a class="social-icon" href="https://www.linkedin.com/in/jan-luca-splettst%C3%B6%C3%9Fer-105966212/" target="_blank">
                                    <?php readfile ('assets/img/icons/linkedin.svg'); ?>
                                </a>
                            </div>
                        </div>

                        <div class="intro-main-content">
                            <h1><?=$introContainer['h1']?></h1>
                            <p class="h3"><?=$introContainer['subtitle']?></p>
                            <p class="myself"><?=$introContainer['description']?></p>
                            <div class="btn-portfolio">
                                <a class="btn btn-primary" href="<?=$introContainer['button']['link']?>">
                                    <?=$introContainer['button']['text']?>
                                    <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </section>

                    <div class="portfolio" id="portfolio"></div>
                    <section class="portfolio-container" id="portfolio-el">
                        <div class="heading">
                            <h2><?=$portfolio['heading']?><span class="heading-dot">.</span></h2>
                            <p class="subheading"><?=$portfolio['subtitle']?></p>
                        </div>
                        <div class="portfolio-content">
                            <?php foreach ($portfolio['projects'] as $key => $project) : ?>
                            <div class="project-container container-left <?=$key?>">
                                <h3><?=$project['title']?></h3>
                                <div class="project-content">
                                    <div class="project-info">
                                        <p><?=$project['description']?></p>
                                        <div class="github-repo">
                                            <a class="project-link" href="<?=$project['link']?>" target="_blank">
                                                <span class="hover-underline"><?=$project['linkText']?></span>
                                                <i class="fas fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <img class="project-image" src="<?=$project['imageSrc']?>">
                                </div>
                            </div>
                            <?php endforeach; ?>
                        </div>
                    </section>
                </div>
            </div>

            <div class="skills" id="skills"></div>
            <section class="skills-qualifications" id="skills-el">
                <div class="skills-qualifications-container">
                    <h2><?=$skillsAndQualifications['heading']?><span class="heading-dot">.</span></h2>
                    <div class="change-content">
                        <ul class="nav">
                            <li class="nav-item change-skills skills-is-active"><p class="hover-underline"><?=$skillsAndQualifications['changeContent']['skills']?></p></li>
                            <li class="nav-item change-qualifications"><p class="hover-underline"><?=$skillsAndQualifications['changeContent']['qualifications']?></p></li>
                        </ul>
                    </div>
                    <div class="skills-content show" style="display: flex;">
                        <?php foreach ($skills as $skill => $asset) : ?>
                            <div class="skills-box">
                                <img src="<?=$asset?>">
                                <p><?=$skill?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>

                    <div class="qualifications-content" style="display: flex;">
                        <div class="cv-content">
                            <?php foreach ($qualifications as $key => $jobs) : ?>
                                <div class="my-work-experience">
                                    <h3 class="experience-heading"><?=$key?></h3>

                                    <?php
                                        $jobsMax = count($jobs);
                                        $counter = 0;

                                        foreach($jobs as $job) :
                                            ++$counter;
                                    ?>
                                        <div class="work-experience">
                                            <div class="timeline">
                                                <div class="timeline--point"></div>
                                                <div class="timeline--line <?php if ($counter === $jobsMax) { echo('d-none'); } ?>"></div>
                                            </div>

                                            <div class="job-container">
                                                <div class="job-information">
                                                    <div class="information-period"><?=$job['timeperiod']?></div>
                                                    <div class="information-company"><?=$job['company']?></div>
                                                </div>

                                                <div class="job-description">
                                                    <div class="job-title"><?=$job['jobTitle']?></div>
                                                    <div class="job-tasks">
                                                        <p class="task-list">
                                                            <?php foreach ($job['tasks'] as $task) : ?>
                                                                <span class="task-item"><?=$task?><br/></span>
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

            <div class="about" id="about"></div>
            <div class="content-container">
                <section class="about-container" id="about-el">
                    <h2><?=$about['heading']?><span class="heading-dot">.</span></h2>
                    <div class="about-section">
                        <div class="about-intro">
                            <img src="assets/img/about-me.png" class="about-image"/>
                            <div class="introduction">
                                <p class="about-subheading"><?=$about['subheading']?></p>
                                <p class="me-intro"><?=$about['intro']?></p>
                                <p class="about-me"><?=$about['aboutMe']?></p>
                            </div>

                            <p class="interests"><?=$about['interests']?></p>
                        </div>
                        <div class="my-start">
                            <img src="assets/img/backend.png" class="backend-image">
                            <p class="first-project"><?=$about['firstProject']?></p>
                        </div>
                        <div class="frontend">
                            <img src="assets/img/ux.png" class="ui-image">
                            <p class="backend-career"><?=$about['backend']?></p>
                            <p class="frontend-career"><?=$about['frontend']?></p>
                        </div>
                    </div>
                </section>

                <section class="contact-button" id="contact" id="contact-el">
                    <a class="btn btn-primary" href="<?=$contact['href']?>">
                        <?=$contact['text']?>
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </section>

                <!--
                <div class="contact" id="contact"></div>
                <div class="contact-container">
                    <div class="contact-content">
                        <h3>Contact</h3>
                        <p class="contact-subheading">If you have a question or a request just message me! :)</p>
                        <div class="contact-form">
                            <form>
                                <div class="form-container">
                                    <div class="input-name">
                                        <input type="text" placeholder="Your Full Name" class="form-control">
                                    </div>

                                    <div class="input-email">
                                        <input type="email" placeholder="Your E-Mail" class="form-control">
                                    </div>

                                    <div class="input-subject">
                                        <input type="text" placeholder="Your Subject" class="form-control">
                                    </div>

                                    <textarea class="input-message" name="textarea" placeholder="Your Message"></textarea>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                          I accept the <a class="contact-link hover-underline" href="javascript:void(0)">Privacy Policy</a>
                                        </label>
                                    </div>

                                    <div class="input-submit">
                                        <button type="submit" class="btn btn-light">
                                            Submit
                                            <i class="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                -->
            </div>

            <?php include ('assets/ressources/includes/scroll-to-top.php'); ?>
        </main>
        <footer>
            <?php include ('assets/ressources/includes/layouts/footer.php'); ?>
        </footer>

        <?php include ('assets/ressources/includes/scripts-body.php'); ?>
    </body>
</html>
