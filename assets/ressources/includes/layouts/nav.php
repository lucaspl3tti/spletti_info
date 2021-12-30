<a class="nav-logo unselectable">Jan-Luca Splettstößer<span class="heading-dot">.</span></a>

<ul class="nav">
    <?php
        if ($page != 'home') {
            include ('assets/ressources/includes/layouts/nav-elements/home-element.php');

            $string = 'a';
            include ('assets/ressources/includes/layouts/nav-elements/elements.php');
        } else {
            $string = 'div';
            include ('assets/ressources/includes/layouts/nav-elements/elements.php');
        }
    ?>
</ul>
