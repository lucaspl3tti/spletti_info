<li class="nav-item">
    <<? echo($string); echo(' class="nav-link nav-portfolio" '); if ($page != 'home') { echo('href="/#contact"'); } ?>>
        <i class="fas fa-code"><br/></i>
        <p class="hover-underline <?php if ($page === 'home') { echo('nav-hover portfolio-el'); } ?>">Portfolio</p>
    </<? echo($string); ?>>
</li>
<li class="nav-item">
    <<? echo($string); echo(' class="nav-link nav-skills" '); if ($page != 'home') { echo('href="/#skills"'); } ?>>
        <i class="fas fa-code-branch"><br/></i>
        <p class="hover-underline <?php if ($page === 'home') { echo('nav-hover skills-el'); } ?>">Skills</p>
    </<? echo($string); ?>>
</li>
<li class="nav-item">
    <<? echo($string); echo(' class="nav-link nav-about" '); if ($page != 'home') { echo('href="/#about"'); } ?>>
        <p class="hover-underline <?php if ($page === 'home') { echo('nav-hover about-el'); } ?>">About Me</p>
    </<? echo($string); ?>>
</li>
<li class="nav-item">
    <<? echo($string); echo(' class="nav-link nav-contact" '); if ($page != 'home') { echo('href="/#contact"'); } ?>>
        <i class="fas fa-at"><br/></i>
        <p class="hover-underline <?php if ($page === 'home') { echo('nav-hover contact-el'); } ?>">Contact</p>
    </<? echo($string); ?>>
</li>
