<?php include('assets/ressources/content/data.php'); ?>

<div class="container-fluid">
    <span class="navbar-brand mb-0 h1 nav-logo">
        <span class="d-block d-lg-none"><?=$navData['logo']['mobile']?><span class="heading-dot">.</span></span>
        <span class="d-none d-lg-block"><?=$navData['logo']['desktop']?><span class="heading-dot">.</span></span>
    </span>
    <button class="navbar-toggler d-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end d-sm-none d-md-block" id="navbarNav">
        <ul class="navbar-nav">
            <?php foreach ($navData['links'] as $section => $linkDetails) : ?>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="<?=$linkDetails['href']?>">
                        <span class="hover-underline <?=$linkDetails['el']?> <?php if ($linkDetails['el'] === 'start-el' && $page === 'home') { echo('nav-active'); } ?>"><?=$section?></span>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>

    <div class="navbar-mobile justify-content-end d-md-none" id="navbarNav">
        <ul class="navbar-nav">
            <?php foreach ($navData['links'] as $section => $linkDetails) : ?>
                <li class="nav-item<?php if ($linkDetails['showMobile'] === false) : ?> d-none<?php endif; ?>">
                    <a class="nav-link active" aria-current="page" href="<?=$linkDetails['href']?>">
                        <span class="hover-underline <?=$linkDetails['el']?> <?php if ($linkDetails['el'] === 'start-el' && $page === 'home') { echo('nav-active'); } ?>"><?=$section?></span>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>
