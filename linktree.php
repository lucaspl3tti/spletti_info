<?php
include 'Core/TemplateEngine.php';
include('Ressources/snippet/page/linktree/data.php');

Template::view('Ressources/views/page/linktree/index.html', $dataLinktree);
?>
