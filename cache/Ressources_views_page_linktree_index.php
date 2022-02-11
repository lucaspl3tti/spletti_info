<?php class_exists('Template') or exit; ?>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- add an icon to your head -->
    <link
            rel="icon"
            href="Ressources/app/assets/images/coding.png"
    />

    <link rel="stylesheet" href="Ressources/app/base.css">
    <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
            integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
            crossorigin="anonymous"
    />

    <!-- set a tag of your real name or artist synonym as the title -->
    <title><?php echo $profileName ?></title>

</head>
<body class="linktree">
    <main class="main-section">
        <div id="particles-js"></div>

        <div class="header-content">
            <!-- profile picture -->
            <!-- add a picture of yourself or an avatar, best to use a 256x256px one -->
            <img src="Ressources/app/assets/images/jls_profilepic.jpg" alt="profile picture" class="profile-picture">

            <!-- profile-name -->
            <!-- add a tag of your real name or artist synonym. this could also be something like your general social media tag -->
            <div class="profile-name"><?php echo $profileName ?></div>
        </div>

        <div class="links-content">
            <!-- link section -->
            <?php foreach($links as $link): ?>
                <a href="<?php echo $link['href'] ?>" class="links">
                    <i class="<?php echo $link['icon'] ?>"></i>
                    &nbsp<?php echo $link['title'] ?>
                </a>
                <?php endforeach; ?>
        </div>

        <div class="footer-content">
            <!-- logo button -->
            <!-- Here you can also add your full name or artist synonym, which will function as a bottom logo for the treelink page -->
            <div class="bottom-text"><?php echo $footer['name'] ?><span class="heading-dot">.</span></div>

            <!-- Legal Disclosure -->
            <!-- Here you can add a link to your Impressum / Legal Disclosure if needed (required in Germany for most use cases tho)  -->
            <div class="legal">
                <a href="<?php echo $footer['legal']['href'] ?>" class="legal-link hover-underline"><?php echo $footer['legal']['text'] ?></a>
            </div>
        </div>
    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"></script>
    <script src="Ressources/app/plugins/linktree/particles.js"></script>
</body>
</html>
